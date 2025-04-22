<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>SVG Shape Creator with Select & Transform</title>
  <link rel="stylesheet" href="estilo.css">
</head>
<body>

  <!-- Header -->
  <header>
    <h1>Corporate Name / Logo</h1>
    <p>SVG Basic Shape Creator with Select & Transform</p>
  </header>

  <!-- Main Container -->
  <div class="container">
    <!-- Navigation: Tools / Buttons -->
    <nav>
      <!-- Tool Buttons -->
      <button id="selectBtn">Select / Edit</button>
      <button id="rectBtn">Rectangle</button>
      <button id="circleBtn">Circle</button>
      <button id="ellipseBtn">Ellipse</button>
      <button id="lineBtn">Line</button>
      <button id="polylineBtn">Polyline</button>
      <button id="polygonBtn">Polygon</button>
      <button id="pathBtn">Path</button>
      
      <!-- Color Inputs -->
      <label for="fillColor">Fill Color</label>
      <input type="color" id="fillColor" value="#ffffff" />
      <label for="strokeColor">Stroke Color</label>
      <input type="color" id="strokeColor" value="#000000" />
    </nav>
    
    <!-- Main Workspace: SVG area -->
    <main>
      <svg id="drawingArea"></svg>
    </main>
  </div>

  <script src="codigo.php"></script>
</body>
</html>

