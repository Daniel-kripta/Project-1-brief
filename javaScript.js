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

customElements.define("header-js", Headerjs);

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

customElements.define("footer-js", Footerjs);

// Section information con javascript para todas las páginas
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

customElements.define("section-information", Information);


// Captura de la API y declaración

const API_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

// Función asíncrona para obtener los artículos

async function getAndDisplayAPI() {
    const articleLink = document.getElementById("articleLink");
    const articlePage = document.getElementById("articlePage");

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Conection error...");

        const data = await response.json();

        if (articleLink) {

                articleLink.innerHTML = `
                <div>
                    <h3>${data[data.length - 1].name}</h3> 
                    <img src="${data[data.length - 1].image}" alt="article image"> 
                    <p>${data[data.length - 1].description}</p>
                </div>
                <div>
                    <h3>${data[data.length - 2].name}</h3> 
                    <img src="${data[data.length - 2].image}" alt="article image"> 
                    <p>${data[data.length - 2].description}</p>
                </div>
                <div>
                    <h3>${data[data.length - 3].name}</h3> 
                    <img src="${data[data.length - 3].image}" alt="article image"> 
                    <p>${data[data.length - 3].description}</p>
                </div>`;
        }

        if (articlePage) {
// falta agregar la lógica del ?1
                articlePage.innerHTML = `
                <div>
                    <h1>${data[data.length - 1].name}</h3>
                    <div class="articleInfo">
                        <div class="articleDescription">${data[data.length - 1].description}</div>
                        <div class="articleDate">${data[data.length - 1].completed_on}</div>
                    </div> 
                    <div class="articleImage"><img src="${data[data.length - 1].image}" alt="article image"> 
                    </div>
                    <p class="bodyArticle">${data[data.length - 1].content}</p>
                </div>`;
        }


        } catch (error) {
           if (articleLink) {articleLink.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        }
           if (articlePage) {articlePage.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        }
        console.error(error);

    }
                
}



document.addEventListener('DOMContentLoaded', getAndDisplayAPI);