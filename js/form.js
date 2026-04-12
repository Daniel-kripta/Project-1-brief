            const form = document.getElementById("contactForm");
            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");

            form.addEventListener("submit", function(event) {

            event.preventDefault();

            let isValid = true;

            if (nameInput.value.toLowerCase().includes("ironhack")) {

                nameInput.classList.add("inputError");
                nameError.textContent = `⚠ "${nameInput.value}" is not available, please choose another name.`;

                isValid = false;

            } else {

                nameInput.classList.remove("input-error");
                nameError.textContent = "";
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(emailInput.value)) {
                emailInput.classList.add("inputError");
                emailError.textContent = `⚠ ${emailInput.value} is not a valid email.`;
                isValid = false;

            } else {

                emailInput.classList.remove("inputError");
                emailError.textContent = "";
            }

            if (isValid) {

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
            console.table(data);

            form.reset();
            nameError.textContent = "";
            emailError.textContent = "";
            nameInput.classList.remove("inputError");
            emailInput.classList.remove("inputError");
            }
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

