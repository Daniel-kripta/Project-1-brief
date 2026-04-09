// Header con javascript para todas las páginas
class Headerjs extends HTMLElement {
    connectedCallback() {
        // Aquí dentro escribimos el HTML normal de la cabecera
        this.innerHTML = `
                    <header class="header-nav" id="top">
                    <div class="logoArea"><a href="/"><img class="CircleLogo" src="./assets/logos/circle.svg" alt="Web's logotype"></a>
                    </div>

                    <div id="themeMode">
                        <label class="switch">
                            <input name="Ligth-dark-mode" type="checkbox" id="toggleTheme">
                            <span class="slider"></span>
                        </label>
                    </div>

                    <nav class="centralNav">
                        <ul class="linkPage">
                            <li><a href="/">Home</a></li>
                            <li><a href="/#Recent-Projects">Projects</a></li>
                            <li><a href="/#services">Services</a></li>
                            <li class="contactButtonSandwich blueButton"><a href="./pages/contact/">Contact Us</a></li>
                   </ul> </nav>

                    <nav class="sandwichMenu"><button class="menuButton" id="sandwichMenu"><img id="iconMenu" src="./assets/icon/menu.svg" alt="Menú"></button></nav>
                    
                    <div class="blueButton contactButton"><a href="./pages/contact/">Contact Us</a></div>

                    </header>
                `;
                /*Mode dark switch*/

        const themeModeCheck = this.querySelector("#toggleTheme");
        const root = document.documentElement;


        const savedThemeLS = localStorage.getItem("themeTogglePosition");

        if (savedThemeLS === "1") {

            themeModeCheck.checked = true;
            root.style.setProperty('--color-darkblue', 'rgb(236, 247, 255)');
            root.style.setProperty('--color-whitesky', 'rgb(41, 46, 71)');
            root.style.setProperty('--color-blue', 'rgb(236, 247, 255)');
            root.style.setProperty('--color-logo', 'brightness(40)');

        }


        themeModeCheck.addEventListener("change", function() {

        const body = document.body;

        body.classList.add('bodyTransicion');

    const actualDarkBlue = getComputedStyle(root).getPropertyValue("--color-darkblue").trim();
    const actualWhite = getComputedStyle(root).getPropertyValue("--color-whitesky").trim();
    const actualBlue = getComputedStyle(root).getPropertyValue("--color-blue").trim();
    const logoColor = getComputedStyle(root).getPropertyValue("--color-logo").trim();


          
    root.style.setProperty('--color-darkblue', actualDarkBlue === 'rgb(41, 46, 71)' ? 'rgb(236, 247, 255)' : 'rgb(41, 46, 71)');
    root.style.setProperty('--color-whitesky', actualWhite === 'rgb(236, 247, 255)' ? 'rgb(41, 46, 71)' : 'rgb(236, 247, 255)');
    root.style.setProperty('--color-blue', actualBlue === 'rgb(7, 42, 200)' ? 'rgb(236, 247, 255)' : 'rgb(7, 42, 200)'); 
    root.style.setProperty('--color-logo', logoColor === 'none' ? 'brightness(40)' : 'none');

    localStorage.setItem("themeTogglePosition", this.checked ? "1" : "0");
    
    setTimeout(() => {
        body.classList.remove("bodyTransicion");
    }, 3000);

        });
                
    }
    
}

customElements.define("header-js", Headerjs);

// Footer con javascript para todas las páginas
class Footerjs extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
                    <footer>
                        <div class="address">
                            <img class="CircleLogo" src="./assets/logos/circle.svg" alt="Circle's logo">
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
                        <div id="pageUp"><a href=""><img src="./assets/icon/page_up.svg" alt="Page Up"></a></div>
                    </footer>
                `;
    }
}

customElements.define("footer-js", Footerjs);

// Section information con javascript para todas las páginas
class Information extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
                    <section class="client-information">
                        <div><h2>Do you have any questions?</h2>
                             <br>
                             <p>Let us help you!</p>
                        </div>
                        <form id="infoForm">
                            <div class="emailInputDiv"><img src="./assets/icon/mail.svg" class="emailIcon" alt="">
                            <input name="emailUser" type="email" placeholder="Enter you email" name="email" id="emailInput" required>
                            </input>
                            <button type="submit" class="submitButton">Ask for</button>
                            </div>
                        </form>
                    </section>
                `;
    const formInfo = document.getElementById("infoForm");

    formInfo.addEventListener("submit", function(event) {

        event.preventDefault();

        const formData = new FormData(formInfo);
        const email = formData.get("emailUser");
        if (email) {
            localStorage.setItem("userEmailTmp", email);
            window.location.href = "/pages/contact";
        }

    });
    }
}

customElements.define("section-information", Information);

// form information function





// Captura de la API y declaración

const API_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";



async function getAndDisplayAPI() {
    const projects = document.getElementById("projects");
    const articlePage = document.getElementById("articlePage");

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Conection error...");

        const data = await response.json();

        if (projects) {

            Object.values(data.reverse().slice(0, 3)).forEach(article => {    
           projects.innerHTML += `
          <div class="target">
            <div class="targetImg">
              <img src="${article.image}" alt="Article imagen">
            </div>
            <div class="targetContent">
              <h3>${article.name}</h3>
              <p>${article.description}</p>
            </div>
            <div class="targetLearnMore"><a class="linkPage" href="/pages/?id=${article.uuid}">Learn more...</a></div>
          </div>`; });

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
/* Revert the menu functions */

    function closeMenu() {
        const root = document.documentElement;
        const body = document.body;
        const menuIcon = document.getElementById("iconMenu");

        root.style.setProperty('--menu-Sandwich-display', 'none');
        root.style.setProperty('--menu-main-blured', 'none');
        root.style.setProperty('--sroll-body-block', 'auto');

        if (menuIcon.src.endsWith("menu_close.svg")) {
        menuIcon.src = menuIcon.src.replace("menu_close.svg", "menu.svg");
    }
    }

    const menuLinks = document.querySelectorAll("nav a"); 

    menuLinks.forEach(link => {
        link.onclick = function() {
            closeMenu();
        };
    });



    /*form help*/
            const form = document.getElementById("contactForm");

            form.addEventListener("submit", function(event) {

            event.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

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

        document.addEventListener("DOMContentLoaded", () => {
            const savedEmail = localStorage.getItem("userEmailTmp");

            if (savedEmail) {
                const emailInputDestiny = document.getElementById("email");

                if (emailInputDestiny) {
                    emailInputDestiny.value = savedEmail;

                    localStorage.removeItem("userEmailTmp");
                }
            }
        });

