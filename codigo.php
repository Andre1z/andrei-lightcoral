

// Track the current tool, drawing state, active element, and selection
    let currentTool = null;
    let isDrawing = false;
    let startX, startY;
    let currentElement = null;

    // Selection references
    let selectedElement = null;     // The currently selected shape
    let bboxRect = null;           // The bounding box <rect>
    let rotateHandle = null;       // Circle at top for rotation
    let scaleHandle = null;        // Square at bottom-right for scaling
    let isMoving = false;
    let isRotating = false;
    let isScaling = false;

    // For transforms
    let startTransform = { x: 0, y: 0, rotation: 0, scaleX: 1, scaleY: 1 };
    let center = { x: 0, y: 0 }; // center of the shape for rotate/scale

    // References
    const svg = document.getElementById('drawingArea');
    const selectBtn = document.getElementById('selectBtn');
    const rectBtn = document.getElementById('rectBtn');
    const circleBtn = document.getElementById('circleBtn');
    const ellipseBtn = document.getElementById('ellipseBtn');
    const lineBtn = document.getElementById('lineBtn');
    const polylineBtn = document.getElementById('polylineBtn');
    const polygonBtn = document.getElementById('polygonBtn');
    const pathBtn = document.getElementById('pathBtn');

    const fillColorInput = document.getElementById('fillColor');
    const strokeColorInput = document.getElementById('strokeColor');

    // Tool button events
    selectBtn.addEventListener('click', () => setCurrentTool('select'));
    rectBtn.addEventListener('click', () => setCurrentTool('rect'));
    circleBtn.addEventListener('click', () => setCurrentTool('circle'));
    ellipseBtn.addEventListener('click', () => setCurrentTool('ellipse'));
    lineBtn.addEventListener('click', () => setCurrentTool('line'));
    polylineBtn.addEventListener('click', () => setCurrentTool('polyline'));
    polygonBtn.addEventListener('click', () => setCurrentTool('polygon'));
    pathBtn.addEventListener('click', () => setCurrentTool('path'));

    // Mouse events for drawing / selecting
    svg.addEventListener('mousedown', onMouseDown);
    svg.addEventListener('mousemove', onMouseMove);
    svg.addEventListener('mouseup', onMouseUp);

    // Color change events
    fillColorInput.addEventListener('change', updateSelectedShapeColors);
    strokeColorInput.addEventListener('change', updateSelectedShapeColors);

    
	<?php include "funciones/setCurrentTool.js";?>
   <?php include "funciones/onMouseDown.js";?>
	<?php include "funciones/onMouseMove.js";?>
	<?php include "funciones/onMouseUp.js";?>
	<?php include "funciones/createShape.js";?>
   <?php include "funciones/updateShape.js";?>
   <?php include "funciones/selectShape.js";?>
	<?php include "funciones/deselectShape.js";?>
   <?php include "funciones/createBoundingBox.js";?> 
	<?php include "funciones/removeBoundingBox.js";?>
   <?php include "funciones/updateBoundingBox.js";?>
	<?php include "funciones/moveShape.js";?>
 	<?php include "funciones/rotateShape.js";?>   
	<?php include "funciones/scaleShape.js";?> 
   <?php include "funciones/updateSelectedShapeColors.js";?> 
	<?php include "funciones/applyTransform.js";?> 
   <?php include "funciones/getTranslation.js";?>  
	<?php include "funciones/getRotation.js";?>
   <?php include "funciones/getScale.js";?>
	<?php include "funciones/getMousePosition.js";?>
  	<?php include "funciones/distance.js";?>  
	<?php include "funciones/ptTransform.js";?>
   <?php include "funciones/rgbToHex.js";?>

    

    

    

    
