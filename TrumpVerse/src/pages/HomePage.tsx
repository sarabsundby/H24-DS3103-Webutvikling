// Imports
import { useEffect, useState } from "react"
import CardSection from "../components/home/CardSection"
import MerchService from "../services/MerchService"
import QuoteSection from "../components/home/QuoteSection"
import Footer from "../components/home/Footer"
import "../index.css"

const HomePage = () => {
  const [name, setName] = useState("Patriot")
  const bannerImage = MerchService.getImageEndpoint() + "trumpbanner.png"

  useEffect(() => {
    const storedName = sessionStorage.getItem("userName")
    if (storedName) {
      setName(storedName)
    }
  }, [])

  return (
    <>
      <main>
        <section>
          <div>
            <div className="text-center py-5">
              <h1>Welcome back{name ? `, ${name}!` : "!"}</h1>
              <p className="lead">
                To the ultimate platform to manage Trump’s empire.
              </p>
              <img
                src={bannerImage}
                alt="Trump-banner"
                className="card-img-top p-4 trump-banner"
              />
            </div>
            <CardSection />
          </div>
        </section>
        <QuoteSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

// Exports
export default HomePage
