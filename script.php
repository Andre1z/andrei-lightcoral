<?php
/**
 * script.php
 *
 * Archivo principal que agrupa toda la lógica JavaScript de la aplicación.
 * Se define la configuración global, las referencias al DOM y se cargan
 * todos los módulos necesarios para la funcionalidad (dibujo, selección y transformación).
 */
?>
<script>
(function () {
  "use strict";

  // Variables globales renombradas
  let selectedTool = '';          // Herramienta actual (por ejemplo, 'select', 'rectangle', 'circle', etc.)
  let drawingActive = false;      // Flag para saber si se está dibujando
  let startX, startY;             // Coordenadas iniciales al comenzar el dibujo
  let activeSVGElement = null;    // Elemento SVG que se está creando
  let currentSelection = null;    // Elemento SVG actualmente seleccionado
  let boundingRect = null;        // Rectángulo que indica el bounding box
  let rotateCircle = null;        // Manejador de rotación (círculo)
  let scaleSquare = null;         // Manejador de escalado (cuadrado)
  let movingActive = false;       // Indica si se está moviendo el elemento
  let rotatingActive = false;     // Indica si se está rotando el elemento
  let scalingActive = false;      // Indica si se está escalando el elemento

  // Objeto con la transformación inicial
  let initTransform = { tx: 0, ty: 0, angle: 0, sx: 1, sy: 1 };
  // Punto pivote (centro) de la forma para rotación y escalado
  let pivot = { x: 0, y: 0 };

  // Referencias a elementos del DOM
  const svgCanvas     = document.getElementById('canvas');
  const btnSelect     = document.getElementById('btnSelect');
  const btnRect       = document.getElementById('btnRect');
  const btnCircle     = document.getElementById('btnCircle');
  const btnEllipse    = document.getElementById('btnEllipse');
  const btnLine       = document.getElementById('btnLine');
  const btnPolyLine   = document.getElementById('btnPolyLine');
  const btnPolygon    = document.getElementById('btnPolygon');
  const btnPath       = document.getElementById('btnPath');
  const inputFill     = document.getElementById('colorFill');
  const inputStroke   = document.getElementById('colorStroke');

  // Asignación de eventos para cada botón de herramienta
  btnSelect.addEventListener('click', () => setTool('select'));
  btnRect.addEventListener('click', () => setTool('rectangle'));
  btnCircle.addEventListener('click', () => setTool('circle'));
  btnEllipse.addEventListener('click', () => setTool('ellipse'));
  btnLine.addEventListener('click', () => setTool('line'));
  btnPolyLine.addEventListener('click', () => setTool('polyline'));
  btnPolygon.addEventListener('click', () => setTool('polygon'));
  btnPath.addEventListener('click', () => setTool('path'));

  // Eventos del ratón para el área SVG
  svgCanvas.addEventListener('mousedown', handleMouseDown);
  svgCanvas.addEventListener('mousemove', handleMouseMove);
  svgCanvas.addEventListener('mouseup', handleMouseUp);

  // Eventos para actualizar colores
  inputFill.addEventListener('change', applyNewColors);
  inputStroke.addEventListener('change', applyNewColors);

  // Inclusión de módulos JavaScript
  <?php include "js/setTool.js"; ?>
  <?php include "js/onMouseDownV2.js"; ?>
  <?php include "js/onMouseMoveV2.js"; ?>
  <?php include "js/onMouseUpV2.js"; ?>
  <?php include "js/createElement.js"; ?>
  <?php include "js/updateShapeGeometry.js"; ?>
  <?php include "js/selectElement.js"; ?>
  <?php include "js/deselectElement.js"; ?>
  <?php include "js/createBB.js"; ?>
  <?php include "js/updateBB.js"; ?>
  <?php include "js/removeBB.js"; ?>
  <?php include "js/moveElement.js"; ?>
  <?php include "js/rotateElement.js"; ?>
  <?php include "js/scaleElement.js"; ?>
  <?php include "js/applyTransformV2.js"; ?>
  <?php include "js/getMousePos.js"; ?>
  <?php include "js/getRotationVal.js"; ?>
  <?php include "js/getScaleVal.js"; ?>
  <?php include "js/getTranslationVal.js"; ?>
  <?php include "js/transformPoint.js"; ?>
  <?php include "js/calcDistance.js"; ?>
  <?php include "js/convertRgbToHex.js"; ?>
  <?php include "js/updateColors.js"; ?>
})();
</script>