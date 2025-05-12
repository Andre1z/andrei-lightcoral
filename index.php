<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Editor SVG - Versión Alternativa</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Cabecera -->
  <header>
    <h1>Mi Empresa / Logotipo</h1>
    <p>Editor de Formas SVG con Selección y Transformación</p>
  </header>

  <!-- Contenedor principal -->
  <div class="container">
    <!-- Barra lateral de herramientas -->
    <nav>
      <button id="btnSelect">Seleccionar/Editar</button>
      <button id="btnRect">Rectángulo</button>
      <button id="btnCircle">Círculo</button>
      <button id="btnEllipse">Elipse</button>
      <button id="btnLine">Línea</button>
      <button id="btnPolyLine">Polilínea</button>
      <button id="btnPolygon">Polígono</button>
      <button id="btnPath">Path</button>
      
      <label for="colorFill">Relleno</label>
      <input type="color" id="colorFill" value="#ffffff">
      
      <label for="colorStroke">Trazo</label>
      <input type="color" id="colorStroke" value="#000000">
    </nav>

    <!-- Área de dibujo -->
    <main>
      <svg id="canvas"></svg>
    </main>
  </div>

  <!-- Inclusión del script central -->
  <script src="script.php"></script>
</body>
</html>