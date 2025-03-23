
function BlogCard() {
   
    return (<footer className="row">
    <div className="d-flex justify-content-center gap-5">
      <a href="#"><img src="../images/facebook.png" width="30" alt="Facebook" /></a>
      <a href="#"><img src="../images/twiiter.png" width="30" alt="Twitter" /></a>
      <a href="#"><img src="../images/linkedin.png" width="30" alt="LinkedIn" /></a>
    </div>
    <p className="entreprise col-12">
      Centre d'Expertise et de Perfectionnement en Informatique
    </p>
    <p className="année col-12">2022</p>
  </footer>)
}

function App() {
    return <>
        <Footer />
    </>
  }

const container = document.querySelector('#footer');
const blog = ReactDOM.createRoot(container);
blog.render(<App />)