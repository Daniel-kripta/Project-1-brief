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
          <div class="card">
            <div class="cardImg">
              <img src="${article.image}" alt="Article imagen">
            </div>
            <div class="cardContent">
              <h3>${article.name}</h3>
              <p>${article.description}</p>
            </div>
            <div class="cardLearnMore"><a class="linkPage" href="./projects.html?id=${article.uuid}">Learn more...</a></div>
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
                    <div class="articleImage">
                        <img src="${data[index].image}" alt="article image">
                        <div class="articleImageBefore"><img src="${data[index].image}" alt="article image"> 
                        </div> 
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

