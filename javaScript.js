// Header con javascript para todas las páginas
class Headerjs extends HTMLElement {
    connectedCallback() {
        // Aquí dentro escribimos el HTML normal de la cabecera
        this.innerHTML = `
                    <header class="header-nav">
                    <div class="logoArea"><a href="/"><img src="/assets/logos/circle.svg" alt="Web's logotype"></a>
                    </div>
                    <nav class="centralNav">
                        <ul class="linkPage">
                            <li><a href="/">Home</a></li>
                            <li><a href="/#Recent-Projects">Projects</a></li>
                            <li><a href="/#services">Services</a></li>


                            </nav>
                    <nav class="sandwichMenu"><button class="menuButton"><img src="/assets/icon/menu.svg" alt="Menú"></button></nav>
                    <button class="blueButton contactButton"><a href="/pages/contact/">Contact Us</a></button>
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
                        <div class="address">
                            <img src="/assets/logos/circle.svg" alt="Circle's logo">
                            <address>2972 Westheimer Rd. Santa Ana,<br>Illinois 85486</address>
                        </div>
                        <div class="footerLinks">
                            <ul class="linkPage">
                                <li><a href="">Team</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Press</a></li>
                                <li><a href="">Projects</a></li>
                                <li><a href="">Privacy Policy</a></li>
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
                        <div><h3>Do you have any questions?</h3>
                             <br>
                             <p>Let us help you!</p>
                        </div>
                        <form>
                            <div class="emailInputDiv"><img src="/assets/icon/mail.svg" class="emailIcon" alt=""><input type="email" placeholder="Enter you email" name="email" id="emailInput"></input>
                            <button type="submit" class="submitButton">Suscribe</button>
                            </div>
                        </form>
                    </section>
                `;
    }
}

customElements.define("section-information", Information);


// Captura de la API y declaración

const API_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

// Función asíncrona para obtener los artículos

async function getAndDisplayAPI() {
    const projects = document.getElementById("projects");
    const articlePage = document.getElementById("articlePage");

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Conection error...");

        const data = await response.json();

        if (projects) {

                projects.innerHTML = `
                <div class="projectDivLink">
                    <div class="contentLink"><img src="${data[data.length - 1].image}" alt="article image"> 
                    <h3>${data[data.length - 1].name}</h3> 
                    <p>${data[data.length - 1].description}</p></div>
                    <div class="learnMore"><a class="linkPage" href="/pages/?id=${data[data.length - 1].uuid}">Learn more</a></div>
                </div>
                <div class="projectDivLink">
                    <div class="contentLink"><img src="${data[data.length - 2].image}" alt="article image">     
                    <h3>${data[data.length - 2].name}</h3> 
                    <p>${data[data.length - 2].description}</p></div>
                    <div class="learnMore"><a class="linkPage" href="/pages/?id=${data[data.length - 2].uuid}">Learn more</a></div>
                </div>
                <div class="projectDivLink">
                    <div class="contentLink"><img src="${data[data.length - 3].image}" alt="article image">
                    <h3>${data[data.length - 3].name}</h3> 
                    <p>${data[data.length - 3].description}</p></div>
                    <div class="learnMore"><a class="linkPage" href="/pages/?id=${data[data.length - 3].uuid}">Learn more</a></div>
                </div>`;

        }

        if (articlePage) {

            const urlParams = new URLSearchParams(window.location.search);
            const uuidBuscado = urlParams.get("id");
            const index = data.findIndex(item => item.uuid == uuidBuscado);


                articlePage.innerHTML = `
                <div>
                    <h1>${data[index].name}</h3>
                    <div class="articleInfo">
                        <div class="articleDescription">${data[index].description}</div>
                        <div class="articleDate">${data[index].completed_on}</div>
                    </div> 
                    <div class="articleImage"><img src="${data[index].image}" alt="article image"> 
                    </div>
                    <p class="bodyArticle">${data[index].content}</p>
                </div>`;
        }


        } catch (error) {
           if (projects) {projects.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        }
           if (articlePage) {articlePage.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        }
        console.error(error);

    }
                
}



document.addEventListener('DOMContentLoaded', getAndDisplayAPI);