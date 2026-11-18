import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container navbar-container">
        <Link className="navbar-brand" to="/">
          Projeto tech
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Abrir menu de navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navbar-menu" id="menu">
          <ul className="navbar-nav navbar-links">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Início
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/solucao">
                Solução
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/impacto">
                Impacto
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contato">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;