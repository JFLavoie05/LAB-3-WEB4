function Blog() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const titre = params.get("titre");
  
    return (
      <div className="container-fluid bodyBlog">
        <img className="imageHaut" src="../images/image card.png" width="100%" height="350px" />
  
        <BlogDetails id={id} />
  
        <div className="imageMillieu text-center">
          <img src="../images/image card.png" width="15%" height="130px" />
          <p>Caption</p>
        </div>
  
        <AjouterCommentaire titre={titre} />
        <CommentaireList titre={titre} />
      </div>
    );
  }
  

const rootContainer = document.querySelector("#BlogPage");
const root = ReactDOM.createRoot(rootContainer);
root.render(<Blog />);
  