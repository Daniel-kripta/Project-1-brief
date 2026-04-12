class Information extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
                    <section class="client-information" id="more-information">
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
            window.location.href = "contact.html";
        }

    });
    }
}

customElements.define("section-information", Information);