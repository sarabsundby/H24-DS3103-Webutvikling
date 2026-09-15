// Imports
import { FC } from "react"
import { Link } from "react-router-dom"
import MerchService from "../../services/MerchService"
import "../../index.css"

const CardSection: FC = () => {
  const merchImage = MerchService.getImageEndpoint() + "merchicon.png"
  const staffImage = MerchService.getImageEndpoint() + "stafficon.png"
  const apiImage = MerchService.getImageEndpoint() + "apiicon.png"

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <Link to="/shop" className="card text-center shadow-sm">
              <img
                src={merchImage}
                alt="Picture of a t-shirt."
                className="card-img-top p-2 card-image"
              />
              <div className="card-body">
                <h5 className="card-title">Merch Shop</h5>
                <p className="card-text">
                  Manage the most tremendous Trump merch. Believe me, it’s the
                  best!
                </p>
              </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <Link to="/staff" className="card text-center shadow-sm">
              <img
                src={staffImage}
                alt="Icon showing a man."
                className="card-img-top p-2 card-image"
              />
              <div className="card-body">
                <h5 className="card-title">Staff Management</h5>
                <p className="card-text">
                  Keep the Trump team in line. Only the best, like no one’s ever
                  seen!
                </p>
              </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mb-4">
            <a
              href="http://localhost:5021/api-documentation.html"
              className="card text-center shadow-sm api-card"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src={apiImage}
                alt="API-icon."
                className="card-img-top p-2 card-image"
              />
              <div className="card-body">
                <h5 className="card-title">API Documentation</h5>
                <p className="card-text">
                  Keeping the Trump team in line starts with knowing our API.
                  The best one no one’s ever seen!
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Exports
export default CardSection
