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
