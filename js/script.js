/************** REFERENCIAS AL DOM **************/
const canvas      = document.getElementById("canvas");
const btnSelect   = document.getElementById("btnSelect");
const btnRect     = document.getElementById("btnRect");
const btnCircle   = document.getElementById("btnCircle");
const btnEllipse  = document.getElementById("btnEllipse");
const btnLine     = document.getElementById("btnLine");
const btnPolyLine = document.getElementById("btnPolyLine");
const btnPolygon  = document.getElementById("btnPolygon");
const btnPath     = document.getElementById("btnPath");
const colorFill   = document.getElementById("colorFill");
const colorStroke = document.getElementById("colorStroke");

/************** VARIABLES DE ESTADO **************/
// Para creación de formas con preview
let currentMode = "select"; // Modos: select, rect, circle, ellipse, line, polyline, polygon, path
let isDrawing   = false;
let startPoint  = null;
let tempShape   = null;
let polyPoints  = [];
const dragModes = ["rect", "circle", "ellipse", "line"];

/************** VARIABLES PARA SELECCIÓN/EDICIÓN **************/
let selectedElement = null;
let dragOffset      = null;
// Variables para la rotación
let isRotating         = false;
let rotationCenter     = { x: 0, y: 0 };
let rotationStartAngle = 0;
let elementInitialRotation = 0;

// rotateHandle: pequeño círculo SVG para iniciar la rotación.
let rotateHandle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
rotateHandle.setAttribute("r", 8);
rotateHandle.setAttribute("fill", "#00f");
rotateHandle.style.cursor = "pointer";

// deleteButton: botón HTML para eliminar el objeto seleccionado.
let deleteButton = document.createElement("button");
deleteButton.textContent = "Eliminar";
deleteButton.style.position = "absolute";
deleteButton.style.display  = "none";
document.body.appendChild(deleteButton);
deleteButton.addEventListener("click", function(){
  if(selectedElement && selectedElement.parentNode){
    selectedElement.parentNode.removeChild(selectedElement);
  }
  hideEditTools();
  selectedElement = null;
});

/************** FUNCIONES AUXILIARES **************/
// Convierte las coordenadas del evento (pantalla) al sistema de coordenadas del SVG.
function getSVGCoordinates(event) {
  let pt = canvas.createSVGPoint();
  pt.x = event.clientX;
  pt.y = event.clientY;
  return pt.matrixTransform(canvas.getScreenCTM().inverse());
}

// Reinicia estados temporales de dibujo (preview).
function resetTemporaryStates() {
  isDrawing  = false;
  startPoint = null;
  polyPoints = [];
  if (tempShape && canvas.contains(tempShape)) {
    canvas.removeChild(tempShape);
  }
  tempShape = null;
}

// Oculta las herramientas de edición (rotateHandle y deleteButton).
function hideEditTools() {
  if (rotateHandle && canvas.contains(rotateHandle)) {
    canvas.removeChild(rotateHandle);
  }
  deleteButton.style.display = "none";
}

/*
  Para que las herramientas de edición (rotateHandle y deleteButton)
  no se vean afectadas por la rotación del objeto, se posicionan usando
  únicamente el componente de traslación y las dimensiones originales de la figura.
  Es decir, usamos getBBox() (el bounding box sin transformaciones) y sumamos la traslación
  extraída de la transformación del elemento.
*/
function updateEditTools(element) {
  if (!element) {
    hideEditTools();
    return;
  }
  // Obtener las dimensiones "originales" de la figura sin rotación:
  let bbox = element.getBBox();

  // Extraer la traslación (si existe) de la transformación del elemento.
  let t = { x: 0, y: 0 };
  let transform = element.getAttribute("transform") || "";
  let match = transform.match(/translate\(\s*([-0-9.]+)[ ,]+([-0-9.]+)\s*\)/);
  if (match) {
    t.x = parseFloat(match[1]);
    t.y = parseFloat(match[2]);
  }
  
  // Calcula el "bounding box absoluto" ignorando la rotación.
  let absX = t.x + bbox.x;
  let absY = t.y + bbox.y;
  let absWidth = bbox.width;
  let absHeight = bbox.height;
  let centerX = absX + absWidth / 2;
  let centerY = absY + absHeight / 2;
  
  // Posicionar el rotateHandle 20px por encima del borde superior.
  let handleX = centerX;
  let handleY = absY - 20;
  if (!canvas.contains(rotateHandle)) {
    canvas.appendChild(rotateHandle);
    rotateHandle.addEventListener("mousedown", startRotation);
  }
  rotateHandle.setAttribute("cx", handleX);
  rotateHandle.setAttribute("cy", handleY);
  
  // Posicionar el deleteButton en la esquina superior derecha.
  let svgPoint = canvas.createSVGPoint();
  svgPoint.x = absX + absWidth;
  svgPoint.y = absY;
  let screenPoint = svgPoint.matrixTransform(canvas.getScreenCTM());
  deleteButton.style.left = (screenPoint.x + 10) + "px";
  deleteButton.style.top  = (screenPoint.y - 20) + "px";
  deleteButton.style.display = "block";
}

/*
  Al iniciar la rotación, usamos el bounding box original (más la traslación)
  para calcular el centro, de modo que aunque el objeto se rote, la herramienta
  de edición se mantenga en la posición "fija" (relativa a la figura original).
*/
function startRotation(event) {
  event.stopPropagation(); // Evita que se active el drag del objeto.
  if (!selectedElement) return;
  isRotating = true;
  // Usamos getBBox() y extraemos la traslación para obtener el centro "original".
  let bbox = selectedElement.getBBox();
  let t = { x: 0, y: 0 };
  let transform = selectedElement.getAttribute("transform") || "";
  let match = transform.match(/translate\(\s*([-0-9.]+)[ ,]+([-0-9.]+)\s*\)/);
  if (match) {
    t.x = parseFloat(match[1]);
    t.y = parseFloat(match[2]);
  }
  let centerX = t.x + bbox.x + bbox.width / 2;
  let centerY = t.y + bbox.y + bbox.height / 2;
  rotationCenter = { x: centerX, y: centerY };

  let pointer = getSVGCoordinates(event);
  rotationStartAngle = Math.atan2(pointer.y - rotationCenter.y, pointer.x - rotationCenter.x) * 180 / Math.PI;
  
  // Extraer la rotación actual (si existe) de forma simple.
  let transformRotation = selectedElement.getAttribute("transform") || "";
  let matchR = transformRotation.match(/rotate\(\s*([-0-9.]+)\s*,/);
  elementInitialRotation = matchR ? parseFloat(matchR[1]) : 0;
}

// Actualiza la rotación en tiempo real (los controles no se moverán porque se usan valores "originales").
function updateRotation(event) {
  if (!isRotating || !selectedElement) return;
  let pointer = getSVGCoordinates(event);
  let currentAngle = Math.atan2(pointer.y - rotationCenter.y, pointer.x - rotationCenter.x) * 180 / Math.PI;
  let deltaAngle = currentAngle - rotationStartAngle;
  let newAngle = elementInitialRotation + deltaAngle;
  
  // Conserva la traslación extraída de la transformación previa.
  let transform = selectedElement.getAttribute("transform") || "";
  let translation = "";
  let matchT = transform.match(/translate\(\s*([-0-9.]+)[ ,]+([-0-9.]+)\s*\)/);
  if (matchT) {
    translation = `translate(${matchT[1]},${matchT[2]}) `;
  }
  let newTransform = translation + `rotate(${newAngle}, ${rotationCenter.x}, ${rotationCenter.y})`;
  selectedElement.setAttribute("transform", newTransform.trim());
}

/************** CONFIGURACIÓN DE BOTONES **************/
btnSelect.addEventListener("click", () => {
  currentMode = "select";
  resetTemporaryStates();
  hideEditTools();
  console.log("Modo Seleccionar/Editar activo");
});
btnRect.addEventListener("click", () => {
  currentMode = "rect";
  resetTemporaryStates();
  hideEditTools();
  console.log("Modo Rectángulo activo");
});
btnCircle.addEventListener("click", () => {
  currentMode = "circle";
  resetTemporaryStates();
  hideEditTools();
  console.log("Modo Círculo activo");
});
btnEllipse.addEventListener("click", () => {
  currentMode = "ellipse";
  resetTemporaryStates();
  hideEditTools();
  console.log("Modo Elipse activo");
});
btnLine.addEventListener("click", () => {
  currentMode = "line";
  resetTemporaryStates();
  hideEditTools();
  console.log("Modo Línea activo");
});
btnPolyLine.addEventListener("click", () => {
  currentMode = "polyline";
  resetTemporaryStates();
  hideEditTools();
  console.log("Modo Polilínea activo");
});
btnPolygon.addEventListener("click", () => {
  currentMode = "polygon";
  resetTemporaryStates();
  hideEditTools();
  console.log("Modo Polígono activo");
});
btnPath.addEventListener("click", () => {
  currentMode = "path";
  resetTemporaryStates();
  hideEditTools();
  console.log("Modo Path activo");
});

/************** EVENTOS PARA DIBUJO CON ARRASTRE (PREVIEW) **************/
canvas.addEventListener("mousedown", function (e) {
  if (dragModes.includes(currentMode)) {
    isDrawing  = true;
    startPoint = getSVGCoordinates(e);
    if (currentMode === "rect") {
      tempShape = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      tempShape.setAttribute("x", startPoint.x);
      tempShape.setAttribute("y", startPoint.y);
      tempShape.setAttribute("width", 0);
      tempShape.setAttribute("height", 0);
      tempShape.setAttribute("fill", colorFill.value);
      tempShape.setAttribute("stroke", colorStroke.value);
      tempShape.setAttribute("stroke-dasharray", "5,5");
      canvas.appendChild(tempShape);
    } else if (currentMode === "circle") {
      tempShape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      tempShape.setAttribute("cx", startPoint.x);
      tempShape.setAttribute("cy", startPoint.y);
      tempShape.setAttribute("r", 0);
      tempShape.setAttribute("fill", colorFill.value);
      tempShape.setAttribute("stroke", colorStroke.value);
      tempShape.setAttribute("stroke-dasharray", "5,5");
      canvas.appendChild(tempShape);
    } else if (currentMode === "ellipse") {
      tempShape = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
      tempShape.setAttribute("cx", startPoint.x);
      tempShape.setAttribute("cy", startPoint.y);
      tempShape.setAttribute("rx", 0);
      tempShape.setAttribute("ry", 0);
      tempShape.setAttribute("fill", colorFill.value);
      tempShape.setAttribute("stroke", colorStroke.value);
      tempShape.setAttribute("stroke-dasharray", "5,5");
      canvas.appendChild(tempShape);
    } else if (currentMode === "line") {
      tempShape = document.createElementNS("http://www.w3.org/2000/svg", "line");
      tempShape.setAttribute("x1", startPoint.x);
      tempShape.setAttribute("y1", startPoint.y);
      tempShape.setAttribute("x2", startPoint.x);
      tempShape.setAttribute("y2", startPoint.y);
      tempShape.setAttribute("stroke", colorStroke.value);
      tempShape.setAttribute("stroke-dasharray", "5,5");
      canvas.appendChild(tempShape);
    }
  }
});

canvas.addEventListener("mousemove", function (e) {
  // Actualiza la preview para modos drag.
  if (isDrawing && startPoint && tempShape && dragModes.includes(currentMode)) {
    let currentCoords = getSVGCoordinates(e);
    if (currentMode === "rect") {
      let rectX  = Math.min(startPoint.x, currentCoords.x);
      let rectY  = Math.min(startPoint.y, currentCoords.y);
      let width  = Math.abs(currentCoords.x - startPoint.x);
      let height = Math.abs(currentCoords.y - startPoint.y);
      tempShape.setAttribute("x", rectX);
      tempShape.setAttribute("y", rectY);
      tempShape.setAttribute("width", width);
      tempShape.setAttribute("height", height);
    } else if (currentMode === "circle") {
      let dx = currentCoords.x - startPoint.x;
      let dy = currentCoords.y - startPoint.y;
      let r  = Math.sqrt(dx * dx + dy * dy);
      tempShape.setAttribute("r", r);
    } else if (currentMode === "ellipse") {
      let rx = Math.abs(currentCoords.x - startPoint.x);
      let ry = Math.abs(currentCoords.y - startPoint.y);
      tempShape.setAttribute("rx", rx);
      tempShape.setAttribute("ry", ry);
    } else if (currentMode === "line") {
      tempShape.setAttribute("x2", currentCoords.x);
      tempShape.setAttribute("y2", currentCoords.y);
    }
  }
  
  /************** MODO SELECCIÓN/EDICIÓN **************/
  if (currentMode === "select" && selectedElement) {
    if (e.buttons === 1) {
      e.preventDefault();
      if (isRotating) {
        updateRotation(e);
      } else if (dragOffset) {
        let pointer = getSVGCoordinates(e);
        let newX = pointer.x - dragOffset.x;
        let newY = pointer.y - dragOffset.y;
        let transform = selectedElement.getAttribute("transform") || "";
        transform = transform.replace(/translate\([^)]+\)/, "");
        let newTransform = `translate(${newX}, ${newY}) ` + transform;
        selectedElement.setAttribute("transform", newTransform.trim());
      }
    }
    updateEditTools(selectedElement);
  }
});

canvas.addEventListener("mouseup", function (e) {
  if (isDrawing && startPoint && tempShape && dragModes.includes(currentMode)) {
    tempShape.removeAttribute("stroke-dasharray");
    isDrawing  = false;
    tempShape  = null;
    startPoint = null;
  }
  if (currentMode === "select") {
    isRotating = false;
    dragOffset = null;
  }
});

/************** EVENTOS PARA MODOS BASADOS EN CLIC (SIN DRAG) **************/
canvas.addEventListener("click", function (e) {
  if (dragModes.includes(currentMode)) return;
  
  if (currentMode === "select" && e.target === canvas) {
    hideEditTools();
    selectedElement = null;
    return;
  }
  
  let coords = getSVGCoordinates(e);
  if (currentMode === "polyline") {
    polyPoints.push(coords);
    if (!tempShape) {
      tempShape = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
      tempShape.setAttribute("fill", "none");
      tempShape.setAttribute("stroke", colorStroke.value);
      tempShape.setAttribute("stroke-dasharray", "5,5");
      canvas.appendChild(tempShape);
    }
    updatePolylinePoints(tempShape, polyPoints);
    console.log("Punto añadido a la polilínea.");
  } else if (currentMode === "polygon") {
    polyPoints.push(coords);
    if (!tempShape) {
      tempShape = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
      tempShape.setAttribute("fill", "none");
      tempShape.setAttribute("stroke", colorStroke.value);
      tempShape.setAttribute("stroke-dasharray", "5,5");
      canvas.appendChild(tempShape);
    }
    updatePolylinePoints(tempShape, polyPoints);
    console.log("Punto añadido al polígono.");
  } else if (currentMode === "path") {
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let d = `M ${coords.x} ${coords.y} L ${coords.x + 50} ${coords.y + 50}`;
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", colorStroke.value);
    canvas.appendChild(path);
    console.log("Path creado.");
  } else if (currentMode === "select") {
    if (e.target !== canvas && e.target !== rotateHandle && e.target !== deleteButton) {
      selectedElement = e.target;
      let pointer = getSVGCoordinates(e);
      let transform = selectedElement.getAttribute("transform") || "";
      let match = transform.match(/translate\(\s*([-0-9.]+)[ ,]+([-0-9.]+)\s*\)/);
      let currentTranslate = { x: 0, y: 0 };
      if (match) {
        currentTranslate.x = parseFloat(match[1]);
        currentTranslate.y = parseFloat(match[2]);
      }
      dragOffset = { x: pointer.x - currentTranslate.x, y: pointer.y - currentTranslate.y };
      updateEditTools(selectedElement);
    }
  }
});

canvas.addEventListener("dblclick", function (e) {
  if (currentMode === "polyline" && tempShape) {
    tempShape.removeAttribute("stroke-dasharray");
    tempShape = null;
    polyPoints = [];
    console.log("Polilínea finalizada.");
  } else if (currentMode === "polygon" && tempShape) {
    canvas.removeChild(tempShape);
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", polyPoints.map(pt => `${pt.x},${pt.y}`).join(" "));
    polygon.setAttribute("fill", colorFill.value);
    polygon.setAttribute("stroke", colorStroke.value);
    canvas.appendChild(polygon);
    polyPoints = [];
    tempShape = null;
    console.log("Polígono finalizado.");
  }
});

function updatePolylinePoints(element, points) {
  let pointsAttr = points.map(pt => `${pt.x},${pt.y}`).join(" ");
  element.setAttribute("points", pointsAttr);
}