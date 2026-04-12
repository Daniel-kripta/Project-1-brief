        const themeModeCheck = document.querySelector("#toggleTheme");
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