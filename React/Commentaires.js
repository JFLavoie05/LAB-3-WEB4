function Commentaire(props) {
    return (
        //le ? est un if pour savoir si mon commentaire est un pirmerCom ou deuxiemeCom
      <div className={props.placement == "deuxiemeCom" ? "container-fluid" : "premierCom row mb-3"}>
        <div className={props.placement == "deuxiemeCom" ? "deuxiemeCom row" : "row"}>
          <div className="col-auto">
            <img src="../images/user icon.png" alt="Profil" className="profile-img" />
          </div>
          <div className="col">
            <p>{props.contenu}</p>
          </div>
        </div>
      </div>
    );
}

function CommentaireList(props) {
    const [commentaires, setCommentaires] = React.useState([]);
  
    React.useEffect(() => {
      async function fetchCommentaires() {
        try {
          const response = await fetch(`http://localhost:3000/commentaires/?TitreBlog=${props.titre}`);
          const json = await response.json();
          setCommentaires(json);
        } catch (error) {
          console.error("Erreur lors du chargement des commentaires :", error);
        }
      }
      // Si on fait props.titre != null, alors il y a une possiblité que la fonction soit relancer meme si il y a deja un titre
      if (props.titre) {
        fetchCommentaires();
      }
    }, [props.titre]);
  
    return (
      <div className="messageCommentaire container">
        {commentaires.map((com, index) => (
          <Commentaire key={index} contenu={com.contenu} placement={com.placement} />
        ))}
      </div>
    );
}

function AjouterCommentaire(props) {
    const [contenuCommentaire, setContenu] = React.useState("");
  
    async function OnClick(e) {
      e.preventDefault();
  
      try {
        const response = await fetch(`http://localhost:3000/commentaires/?TitreBlog=${props.titre}`);
        const json = await response.json();
        
        // Définir si le commentaire est un premierCom ou un deuxiemeCom
        let dernierCom = json[json.length - 1];
        let placementComAjout = "";

        if (dernierCom.placement != undefined && dernierCom.placement != null && dernierCom.placement != "premierCom") 
        {
            placementComAjout = "premierCom";
        }
        else if (dernierCom.placement != undefined && dernierCom.placement != null && dernierCom.placement == "premierCom")
        {
            placementComAjout = "deuxiemeCom";
        }
        else
        {
            console.log("dernierCom.placement == undefined || dernierCom.placement == null || dernierCom.placement == 'premierCom'");
        }
        
        await fetch("http://localhost:3000/commentaires/", {
          method: "POST",
          body: JSON.stringify({
            TitreBlog: props.titre,
            contenu: contenuCommentaire,
            date: new Date(),
            placement: placementComAjout,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        });
  
        setContenu(""); // Effacer le contenu apres l'envoi
  
      } catch (error) {
        console.error("Erreur lors de l'envoi du commentaire :", error);
      }
    }
  
    return (
      <form className="commentaires mb-3" onSubmit={OnClick}>
        <label htmlFor="textAreaCommentaire" className="form-label">Commentaires</label>
        <textarea
          className="form-control"
          id="textAreaCommentaire"
          rows="6"
          value={contenuCommentaire}
          onChange={(e) => setContenu(e.target.value)}
        ></textarea>
        <div className="d-flex justify-content-end mt-2">
          <button className="btn btn-primary btn-lg" type="submit">Submit</button>
        </div>
      </form>
    );
  }
  
  

  