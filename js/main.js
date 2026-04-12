class Headerjs extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
                    <header class="header-nav" id="top">
                    <div class="logoArea"><a href="./"><img class="CircleLogo" src="./assets/logos/circle.svg" alt="Web's logotype"></a>
                    </div>

                    <div id="themeMode">
                        <label class="switch">
                            <input name="Ligth-dark-mode" type="checkbox" id="toggleTheme">
                            <span class="slider"></span>
                        </label>
                    </div>

                    <nav class="centralNav">
                        <ul class="linkPage">
                            <li><a href="./">Home</a></li>
                            <li><a href="./#Recent-Projects">Projects</a></li>
                            <li><a href="./#services">Services</a></li>
                            <li class="contactButtonSandwich blueButton"><a href="./contact.html">Contact Us</a></li>
                   </ul> </nav>

                    <nav class="sandwichMenu"><button class="menuButton" id="sandwichMenu"><img id="iconMenu" src="./assets/icon/menu.svg" alt="Menú"></button></nav>
                    
                    <div class="blueButton contactButton"><a href="./contact.html">Contact Us</a></div>

                    </header>
                `;

                
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
                        <div id="pageUp"><a href="#"><img src="./assets/icon/page_up.svg" alt="Page Up"></a></div>
                    </footer>
                `;
    }
}

customElements.define("footer-js", Footerjs);