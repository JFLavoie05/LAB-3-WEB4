function btn_submit(e) {
  
    e.preventDefault();
    $( "#dialog-confirm" ).dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
          "Oui": function() {
              ConfirmerEnvoie();
            $( this ).dialog( "close" );
          },
          Non: function() {
            $( this ).dialog( "close" );
          }
        }
      });
    
}

function ConfirmerEnvoie() {

    fetch("http://localhost:3000/blogs/", {
        method: "POST",
        body: JSON.stringify({
            titre: document.getElementById("titreAjoutBlog").value,
            contenu: document.getElementById("textAreaBlog").value,
            auteur: document.getElementById("auteurAjoutBlog").value,
            date : new Date()
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
    alert("Ajout confirmer");
    window.location.href = "Page Principale.html";
}


