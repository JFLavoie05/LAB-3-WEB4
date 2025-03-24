
function BlogCard(props) {
  return <div className="d-flex justify-content-center col-4">
      <div className="card" style={{ width: "18rem" }}>
          <a href={`Blog post.html?id=${props.id}&&titre=${props.titre}`}>
              <img src="../images/image card.png" className="card-img-top" alt="..." />
          </a>
          <div className="card-body">
              <h5 className="">{props.titre}</h5>
              <p className="card-text">{props.contenu}</p>
              
          </div>
      </div>
  </div>
}

function BlogList() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
      async function fetchBlogs() {
          try {
              const response = await fetch("http://localhost:3000/blogs/");
              const json = await response.json();
              setBlogs(json);
          } catch (error) {
              console.error("Erreur lors du chargement des blogs:", error);
          }
      }
      fetchBlogs();
  }, []);

  return <div className="row BlogPost">
      {blogs.map((blog, index) => 
          <BlogCard key={index} id={blog.id} titre={blog.titre} contenu={blog.contenu} auteur={blog.auteur} />
      )}
  </div>
}

function App() {
    return <>
        <BlogList />
    </>
  }

const container = document.querySelector('#BlogCard');
const blogCard = ReactDOM.createRoot(container);
blogCard.render(<App />)