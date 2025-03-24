function BlogDetails(props) {
    const [blog, setBlog] = React.useState(null);
    
    React.useEffect(() => {
        async function ChercheBlogInfo() {
            try {
                const response = await fetch(`http://localhost:3000/blogs/${props.id}`);
                const json = await response.json();
                setBlog(json);
            } catch (error) {
                console.error("Erreur lors du chargement du blog :", error);
            }
        }
        
        
        ChercheBlogInfo();
    }, [props.id]);

    if (!blog) {
        return (<p>Le blog est null</p>);
    }

    return (
        <div className="container">
            <div className="TitreBlog">
                <h1 className="text-center">{blog.titre}</h1>
            </div>
            <div className="ContenuBlog">
                <p>{blog.contenu}</p>
            </div>
        </div>
    );
}

  
