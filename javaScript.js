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
                            <li class="contactButtonSandwich blueButton"><a href="/pages/contact/">Contact Us</a></li>
                    </nav>

                    <nav class="sandwichMenu"><button class="menuButton" id="sandwichMenu"><img id="iconMenu" src="/assets/icon/menu.svg" alt="Menú"></button></nav>
                    
                    <div class="blueButton contactButton"><a href="/pages/contact/">Contact Us</a></div>

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
                            </ul>
                        </div>
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
          <div class="target">
            <div class="targetImg">
              <img src="${data[data.length - 1].image}" alt="Article imagen">
            </div>
            <div class="targetContent">
              <h3>${data[data.length - 1].name}</h3>
              <p>${data[data.length - 1].description}</p>
            </div>
            <div class="targetLearnMore"><a class="linkPage" href="/pages/?id=${data[data.length - 1].uuid}">Learn more...</a></div>
          </div>

          <div class="target">
            <div class="targetImg">
              <img src="${data[data.length - 2].image}" alt="Article imagen">
            </div>
            <div class="targetContent">
              <h3>${data[data.length - 2].name}</h3>
              <p>${data[data.length - 2].description}</p>
            </div>
            <div class="targetLearnMore"><a class="linkPage" href="/pages/?id=${data[data.length - 2].uuid}">Learn more...</a></div>
          </div>

          <div class="target">
            <div class="targetImg">
              <img src="${data[data.length - 3].image}" alt="Article imagen">
            </div>
            <div class="targetContent">
              <h3>${data[data.length - 3].name}</h3>
              <p>${data[data.length - 3].description}</p>
            </div>
            <div class="targetLearnMore"><a class="linkPage" href="/pages/?id=${data[data.length - 3].uuid}">Learn more...</a></div>
          </div>`;

        }

        if (articlePage) {

            const urlParams = new URLSearchParams(window.location.search);
            const uuidBuscado = urlParams.get("id");
            const index = data.findIndex(item => item.uuid == uuidBuscado);

            /* Separación de párrafos para poner la sangría*/
            const pText = data[index].content.split("<br><br>").map(p => `<p>${p}</p>`).join("");

                articlePage.innerHTML = `
                <div>
                    <h1>${data[index].name}</h1>
                    <div class="articleInfo">
                        <div class="articleDescription">${data[index].description}</div>
                        <div class="articleDate">🗓️ ${data[index].completed_on}</div>
                    </div> 
                    <div class="articleImage"><img src="${data[index].image}" alt="article image"> 
                    </div>
                    <div class="bodyArticle">${pText}</div>
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


// Sandwich menu function

document.getElementById("sandwichMenu").onclick = function() {
    const root = document.documentElement;
    const body = document.body

    const actualStatusmenu = getComputedStyle(root).getPropertyValue("--menu-Sandwich-display").trim();
    const actualStatusmain = getComputedStyle(root).getPropertyValue("--menu-main-blured").trim();

    const actualStatusScroll = getComputedStyle(body).getPropertyValue("--sroll-body-block").trim();
    
          
    root.style.setProperty('--menu-Sandwich-display', actualStatusmenu === 'none' ? 'block' : 'none');
 
    root.style.setProperty('--menu-main-blured', actualStatusmain === 'none' ? 'blur(10px)' : 'none');
    
    root.style.setProperty('--sroll-body-block', actualStatusScroll === 'hidden' ? 'auto' : 'hidden'); 
    
    const menuIcon = document.getElementById("iconMenu");

    if (menuIcon.src.endsWith("menu.svg")) {
        menuIcon.src = menuIcon.src.replace("menu.svg", "menu_close.svg");
    } else {
        menuIcon.src = menuIcon.src.replace("menu_close.svg", "menu.svg");
    }
        
    }

    /*form */
            const form = document.getElementById("contactForm");

            form.addEventListener("submit", function(event) {

            event.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            console.log("Form Submitted")
            console.table(data);

            form.style.filter = "blur(5px)";

            const submitStatus = document.getElementById("submitStatus");
            submitStatus.style.display = "block";

            submitStatus.innerHTML = `<p>Thanks you <b>${data.name}</b>!
                                    <br>
                                    <br>You message was sent successfully.
                                    <br>This is the resume:
                                    <br>
                                    <br><i>Contact info:</i>
                                    <br><b>Email:</b> ${data.email}
                                    <br><b>Phone:</b> ${data.phone}
                                    <br>
                                    <br><i>Message:</i>
                                    <br>${data.message}.
                                    `;

            form.reset();

        });