Documentación del proyecto:

1.- Hice las carpetas y archivos, creé la estructura básica del HTML, luego puse en los lugares correspondientes los vínculos para el styles.css, el main.js, el código de JQuery, Google Fonts, Fonts Awesome,
    Bootstrap css y js con popper, las 2 líneas de código necesarias para los tooltips y guardé las imágenes dadas para el trabajo en la carpeta img dentro de assets.

2.- Usé uno de los nav más simples que hay en Bootstrap porque el de la maqueta también lo era y reemplacé las palabras del menú, añadí el logo y el nombre de la empresa y le dí posición y centrado a los elementos usando
    el sistema de contenedores, fila y columnas, justify content, align middle con d-inline para el h1 que tiene display block por defecto y apliqué medidas para el tamaño con el atributo style. Empleé fixed-top para que el
    nav se hiciera transparente, esté situado dentro de la parte alta del carousel y acompañe el scroll quedándose fijo en la zona de arriba de la pantalla.
    
3.- Utilicé el primer carousel de los componentes de Bootstrap ya que ese tiene controladores pero no indicadores, le puse la etiqueta semántica main porque me pareció que en este caso ocupa una porción muy notoria al principio de la página web y le agregué las imágenes entregadas y nombrabas para ello en el material de apoyo y escribí
    lo que se ve en ellas en los alt.

4.- Para la sección de presentación de la agencia creé 3 párrafos con lorem ipsum, coloqué íconos de font awesome en color blanco y los encerré en div´s a los que di un color con css nombrando una clase y ocupé container, row y col-lg para dar el posicionamiento requerido y centré cada ícono en su div con text-center. A esta sección
    lo puse la etiqueta semántica article por ser primordialmente de lectura como un artículo de revista. Le di el color negro al background del article con css porque el de Bootstrap no es suficientemente oscuro.

5.- En la siguiente sección usé la etiqueta semántica section para poner algo genérico. Tomé una card de Bootstrap, le quité el botón, la repetí 2 veces, escribí lorem ipsum para los títulos y párrafos cuidando que cada uno tuviese 4 líneas en los espacios de las card como en la maqueta, adicioné con el ordenamiento numerado en los src las rutas para las imágenes facilitadas,
    escribí los alt y borré los atributos style con medidas rem para que no estorben con el contenedor, la fila y columnas que les asigné y ni con la responsividad. Usé css tanto para el color de las cards como para el background de la section con selectores de clase y etiqueta respectivamente.  

6.- Ocupé otra etiqueta section para la división semántica de contenido, saqué 3 componentes de Bootstrap para hacer el formulario; un par de input´s juntos, un textarea y un botón. Borré los placeholders porque no se ve ninguno en la maqueta, cambié las palabras en cada elemento y aumenté las rows del textarea para hacerla más grande. Al igual que en las secciones anteriores el título con h2 tiene clases de Bootstrap para el tamaño, márgenes y centrado y utilicé container, row, col-lg para la anchura 
    correcta de los hr.

7.- Al pie de página le escribí un container-fluid para que tenga el ancho completo de la pantalla y después un container para mover los elementos dentro de él con un ancho máximo de pantalla fijado para cada punto de quiebre dejando espacio a los costados como se agregó en todo lo demás de la página excepto por el nav que también tiene container-fluid. 
    Puse un h3 para la frase "VIAJES CHILE" y tomé los 4 íconos de font awesome en color blanco e hice uso de la clase de Bootstrap fa-2x para su tamaño. Asigné una cantidad de col-lg suficiente para que la segunda palabra del h3 no se fuera a una segunda línea y suficiente para que los íconos quedaran alineados y a la vez que quedara espacio para el posicionamiento de ambos elementos.
    Coloqué justify-content-around para dejarlos como se ven en las instrucciones del proyecto. Centré el h3 con mt-lg-3 e inserté los hipervínculos a redes sociales en etiquetas "a" con href encerrando las etiquetas "i".

8.- Implementé un tooltip en el botón "Enviar" del formulario colocando en su etiqueta button los siguientes atributos personalizados de html; data-bs-toggle="tooltip", data-bs-placement="right" para que el tooltip aparezca al lado derecho y data-bs-title="Presiona aquí para enviar tu mensaje" para determinar el texto que muestra.
    También para la acción de ese botón al hacerle click, escribí un id a la etiqueta button y añadí un alert usando JQuery con la sintaxis selector de id, evento click y función con el mensaje "Su mensaje fue enviado correctamente".

9.- Con Jquery también hice con selector de etiqueta y el "this" que los h2 cambien de color a azul al hacerles doble click por separado y no todo al mismo tiempo. Y con Jquery con selector de clase y la función toggle hice que los párrafos del article se escondan y aparezcan con un click en los íconos que los acompañan.

10.- Para que las opciones del menú dirijan a las partes de la página que indican con sus nombres, puse ID´s a las secciones y los escribí en los href de todas las etiquetas "a" de todas las "li" del menú.

11.- Agregué meta datos para mejorar el CEO, el nombre de la agencia y su logo en la pestaña. Hice que el article se oculte en los tamaños pequeños de pantalla sm y xs diciendo con la clase d-none d-md-block que a patir del tamaño mediado comience a mostrarse. Cambié la tipografía a Poppins con google fonts escogiendo diferentes fuentes para distintos elementos usando selectores de clase y etiqueta en el css.

12.- Ajusté la hamburguesa del menú para que no se desborde al cambiar los breakpoints y le di estilos de hover y border a las cards.





