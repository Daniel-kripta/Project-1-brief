# Project 1 / Brief: Web responsive
## Resumen del Proyecto

En este proyecto se nos indicó replicar el diseño UI/UX de la web de **Circle**, una landing page y sitio web multipágina para un hipotético estudio de desarrollo digital. Además, debiamos traer el contenido de una API hasta la web y componer con sus objetos.

Para realizarlo usamos el conocimiento adquirido hasta ahora en el curso, es decir **HTML5, CSS3 y JavaScript*.

A nivel técnico:
* **Componentes modulares:** Cree las etiquetas `<header-js>` y `<footer-js>` para modularizar y reutilizar el código en todas las páginas (`index`, `contact`, `projects`, `404`), facilitando así la edición y mejorando la sensación de unidad estética en sus páginas.

* **Diseño 100% Responsive:** Hice uso de Grid, Flexbox y *Media Queries* para adaptar la interfaz desde monitores panorámicos hasta dispositivos móviles. Añadí un menú desplegable sencillo para tablet y móvil  haciendo uso del filtro blur para que, a pesar de la sencillez, concentrara el foco.

* **Manejo de Formularios:** Simulé la funcionalidad de los formularios generando interacción entre ambos mediante localStorage y mostrando un mensaje de éxito que recoge la información enviada en el formulario de contacto.

* **Modo Oscuro Persistente:** Al finalizar los requisitos básicos me quedó tiempo para implementar un sistema de Light/Dark mode, alterando las variables CSS globales. Finalmente se almacena la preferencia de la persona usuaria en `localStorage`.

Una parte del trabajo consistió en facilitar una armonía entre los distintos elementos y efectos derivados de la interactividad.

---

## Tecnologías Utilizadas

* **En la codificación:** Trabajé con HTML5, CSS3, JavaScript haciendo uso de VS Codium y Google Chrome.
* **En la documentación:** Mozilla Developer Network, W3 y Google Gemini.
* **Búsqueda de soluciones:** Distintas webs particulares, mis projectos anteriores en el curso y Google Gemini.
* **Otros:** Hice uso del repositorio de iconos y fuentes de Google y también hice uso de Inkscape para customizar iconos.

---

## Backlog (Futuras Mejoras)

Las mejoras futuras a mi criterio son:

- [ ] **Gestión completa de la API:** Trabajamos con una API con 4 objetos JSON. Se puede implementar una sección que muestre todos los objetos, no sólo los 3 últimos en el frontpage.

- [ ] **Interactividad y accesibilidad:** Implementar fuciones como hacer más grande el texto en la página de artículos o vincular el modulo de consultas a la página desde donde se ejecuta para arrastrar el contexto al formulario.

- [ ] **Implementar animaciones:** Mostrar animaciones podría ser un mayor reclamo para una web dedicada al diseño web.