
function Header() {
   
    return <header className="container-fluid d-flex my-3 align-items-center">
    <img src="../images/legoyoda.jpg" alt="Logo" className="logo col-1" />
    
    <nav className="d-flex flex-grow-1 justify-content-center">
      <ul className="nav menuNav d-none d-md-flex">
        <li className="nav-item col-3"><a className="nav-link" href="#">Menu1</a></li>
        <li className="nav-item col-3"><a className="nav-link" href="#">Menu2</a></li>
        <li className="nav-item col-3"><a className="nav-link" href="#">Menu3</a></li>
        <li className="nav-item col-3"><a className="nav-link" href="#">Menu4</a></li>
      </ul>
      
      <nav className="navbar menuHamburger d-md-none">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobileMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mobileMenu">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#">Menu1</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Menu2</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Menu3</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Menu4</a></li>
          </ul>
        </div>
      </nav>
    </nav>
    
    <img src="../images/logo utilisateur.png" alt="Utilisateur" className="user-icon col-1" />
  </header>
    
}

function Footer() {
   
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

function AppHeader() {
    return <>
        <Header />
    </>
  }
  function AppFooter() {
    return <>
        <Footer />
    </>
  }



const container = document.querySelector('#header');
const header = ReactDOM.createRoot(container);
header.render(<AppHeader />)

const container2 = document.querySelector('#footer');
const footer = ReactDOM.createRoot(container2);
footer.render(<AppFooter />)
