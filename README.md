Editor SVG - Interactivo Editor de Gráficos Vectoriales
=======================================================

Versión: 1.0.0
Autor: Andrei

Descripción:
-------------
Este proyecto es una aplicación web interactiva para crear, editar y transformar gráficos vectoriales usando SVG (Scalable Vector Graphics). La herramienta permite dibujar formas básicas (rectángulos, círculos, elipses, líneas, polilíneas, polígonos y paths) y proporciona un conjunto de funcionalidades de edición, incluyendo:
  - Modo de dibujo con vista previa en tiempo real.
  - Herramientas de selección/edición que permiten mover los objetos arrastrándolos.
  - Función de rotación mediante un "rotate handle" (control visual) que permite girar el objeto en torno a un centro definido.
  - Botón de eliminación que se muestra en modo de edición para borrar la figura seleccionada.
  - Todo ello con una interfaz muy colorida y dinámica.

Características Destacadas:
----------------------------
• Creación de múltiples formas SVG (rect, circle, ellipse, line, polyline, polygon, path).
• Vista previa en tiempo real de la forma mientras se dibuja, sin retrasos perceptibles.
• Selección y arrastre de los objetos únicamente mientras se mantenga presionado el botón izquierdo del ratón.
• Rotación de la figura mediante un control gráfico fijado en su posición original (sin verse afectado por la transformación).
• Botón de eliminar para borrar objetos seleccionados.
• Interfaz de usuario con colores vivos, gradientes y animaciones sutiles en la barra de herramientas.

Estructura del Proyecto:
------------------------
```
editor-svg/
├── index.html          -> Archivo HTML principal que carga la interfaz.
├── css/
│   └── style.css       -> Hoja de estilos con un diseño colorido e interactivo.
├── js/
│   └── script.js       -> Lógica de la aplicación (creación, edición, rotación y eliminación).
├── assets/             -> (Opcional) Recursos adicionales como imágenes o fuentes.
└── readme.txt          -> Este archivo, con la descripción e instrucciones.
```

Instalación y Uso:
------------------
1. Descarga o clona el repositorio.
2. Abre el archivo `index.html` en un navegador web moderno (Google Chrome, Firefox, Edge, etc.).
3. Utiliza la barra lateral de herramientas para seleccionar el modo de operación:
    - Seleccionar/Editar: Para mover, rotar o eliminar un objeto.
    - Rectángulo, Círculo, Elipse, Línea, Polilínea, Polígono, Path: Para crear nuevas formas en el lienzo.
4. En modo de edición, al seleccionar un objeto aparecerán:
    - Un "rotate handle" (pequeño círculo azul) que, al arrastrarlo, gira la figura.
    - Un botón "Eliminar" para borrar el objeto seleccionado.
5. Los objetos se mueven en tiempo real mientras se mantiene presionado el botón izquierdo del ratón.

Personalización:
----------------
• Puedes editar la hoja de estilos `css/style.css` para modificar colores, fuentes, y estructura visual.
• La lógica del editor se encuentra en `js/script.js`, donde podrás añadir nuevas funcionalidades o ajustar las existentes.
• Si deseas incorporar imágenes o íconos adicionales, colócalos en la carpeta `assets`.

Licencia y Contacto:
--------------------
Este proyecto es de código abierto MIT.
Para consultas, comentarios o sugerencias, por favor contacta al autor.

¡Disfruta creando gráficos vectoriales con este editor interactivo!