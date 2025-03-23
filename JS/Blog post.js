function AfficherContenu() {
    const params = new URLSearchParams(window.location.search);
    

    const titre = params.get("titre");
    const contenu = params.get("contenu");
    const auteur = params.get("auteur");

    asyncAfficherComms(titre);

    

    document.querySelector(".TitreBlog").innerHTML += `<h1 class="text-center">${titre}</h1>`;
    document.querySelector(".ContenuBlog").innerHTML += `<p>${contenu}</p>`;
    
}

async function asyncAfficherComms(titreBlog) 
{ 
    
    try {
            const response = await fetch(`http://localhost:3000/commentaires/?TitreBlog=${titreBlog}`);
            const json = await response.json();
            console.log(json);
            
            json.forEach(element => {
                //Il y a un if car la structure HTML change selon si le commentaire est le 1er le 2eme
                if (element.placement == "premierCom" || element.placement == undefined)
                    {
                        document.querySelector(`.messageCommentaire`).innerHTML += 
                        `
                        <div class="premierCom row mb-3">
                            <div class="col-auto">
                            <img src="images/user icon.png" alt="Profil" class="profile-img">
                            </div>
                            <div class="col">
                                <p>${element.contenu}</p>
                            </div>
                        </div>`
                    }
                else if (element.placement == "deuxiemeCom")
                    {
                        document.querySelector(`.messageCommentaire`).innerHTML += 
                        `
                        <div class="container-fluid">
                            <div class="deuxiemeCom row">
                                <div class="col-auto">
                                <img src="images/user icon.png" alt="Profil" class="profile-img">
                                </div>
                                <div class="col">
                                    <p>${element.contenu}</p>
                                </div>
                            </div>
                        </div>`
                    }
            })
        }
     catch (error) {
        console.log(error);
    }
}

async function btn_submit(e) {
    e.preventDefault();

    const params = new URLSearchParams(window.location.search);
    const titre = params.get("titre");
    const response = await fetch(`http://localhost:3000/commentaires/?TitreBlog=${titre}`);
        const json = await response.json();
    let Placement;
    //Il y a un if car si nous mettons simplement -->Placement = json[json.length -1].placement <-- si il ny a pas de commentaire alors ils donnent une erreur
    if (json[json.length -1] != undefined) 
    {
        Placement = json[json.length -1].placement;
    }
    else
    {
        Placement = json[json.length -1];
    }
        console.log(Placement);
        
    if (Placement == undefined || Placement == "deuxiemeCom") {
        fetch("http://localhost:3000/commentaires/", {
            method: "POST",
            body: JSON.stringify({
                TitreBlog: titre,
                contenu: document.getElementById("textAreaCommentaire").value,
                date: new Date(),
                placement : "premierCom"
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error))

        alert("Ajout du 1er commentaire confirmer");
    }
    else {
        fetch("http://localhost:3000/commentaires/", {
            method: "POST",
            body: JSON.stringify({
                TitreBlog: titre,
                contenu: document.getElementById("textAreaCommentaire").value,
                date: new Date(),
                placement : "deuxiemeCom"
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error))

        alert("Ajout du  2eme commentaire confirmer");
    }
} 

AfficherContenu();

