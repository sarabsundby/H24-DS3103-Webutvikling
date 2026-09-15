// Imports
import AddMerch from "../components/merch/AddMerch"
import MerchList from "../components/merch/MerchList"

const ShopPage = () => {
  return (
    <div className="container-fluid my-4">
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <AddMerch />
        </div>
        <div className="col-lg-9 col-md-8">
          <MerchList />
        </div>
      </div>
    </div>
  )
}

// Exports
export default ShopPage
