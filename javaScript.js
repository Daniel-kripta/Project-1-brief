// Header con javascript para todas las páginas
class Headerjs extends HTMLElement {
            connectedCallback() {
                // Aquí dentro escribimos el HTML normal de la cabecera
                this.innerHTML = `
                    <header class="header-nav">
                    Este es el header
                    </header>
                `;
            }
        }

                customElements.define('header-js', Headerjs);

// Footer con javascript para todas las páginas
class Footerjs extends HTMLElement {
            connectedCallback() {
                // Aquí dentro escribimos el HTML normal de la cabecera
                this.innerHTML = `
                    <footer>
                    Este es el footer
                    </footer>
                `;
            }
        }

                customElements.define('footer-js', Footerjs);

// Footer con javascript para todas las páginas
class Information extends HTMLElement {
            connectedCallback() {
                // Aquí dentro escribimos el HTML normal de la cabecera
                this.innerHTML = `
                    <section class="client-information">
                    Este es el cuadro de consulta.
                    </section>
                `;
            }
        }

                customElements.define('section-information', Information);