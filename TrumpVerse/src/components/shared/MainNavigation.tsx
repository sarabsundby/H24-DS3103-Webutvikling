// Imports
import { Link } from "react-router-dom"
import MerchService from "../../services/MerchService"
import "../../index.css"

const MainNavigation = () => {
  const imageURL = MerchService.getImageEndpoint() + "darkusabanner.png"

  return (
    <header>
      <nav
        className="navbar navbar-dark bg-dark navbar-banner"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}>
        <div className="container">
          <Link className="navbar-brand" to="/home">
            Trump Administration - 2024
          </Link>
          <ul className="navbar-nav ms-auto flex-lg-row flex-column">
            <li className="nav-item me-3">
              <Link className="nav-link custom-hover" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link custom-hover" to="/shop">
                Merch Shop
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link custom-hover" to="/staff">
                Staff Management
              </Link>
            </li>
            <li className="nav-item me-3">
              <a
                className="nav-link custom-hover"
                href="http://localhost:5021/api-documentation.html"
                target="_blank">
                API Documentation
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

// Exports
export default MainNavigation
