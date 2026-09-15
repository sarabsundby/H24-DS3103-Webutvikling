// Imports
import { FC } from "react"
import IMerch from "../../interfaces/merch/IMerch"
import MerchService from "../../services/MerchService"

const MerchItem: FC<{
  merch: IMerch
  onDeleted: () => void
  onEdit: (merch: IMerch) => void
}> = ({ merch, onDeleted, onEdit }) => {
  const handleDelete = async () => {
    if (!merch.id) return
    try {
      await MerchService.deleteMerch(merch.id)
      onDeleted()
    } catch (error) {
      console.error("Error deleting merch:", error)
    }
  }

  return (
    <div className="card merch-cards h-100 bg-light shadow-sm">
      <img
        src={MerchService.getImageEndpoint() + merch.image}
        className="card-img-top"
        alt={`Image of ${merch.name}`}
      />
      <div className="card-body">
        <p className="card-text">{merch.type}</p>
        <h5 className="card-title">{merch.name}</h5>
        <p className="card-text">${merch.price}.00</p>
        <p className="card-text">Available in: {merch.size}</p>
        <p className="card-text">In stock: {merch.amount}</p>
        <div className="d-flex justify-content-between mt-2">
          <button
            className="btn btn-danger btn-sm flex-grow-1 mx-1"
            onClick={handleDelete}>
            Delete
          </button>
          <button
            className="btn btn-primary btn-sm btn-sm flex-grow-1 mx-1"
            onClick={() => onEdit(merch)}>
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

// Exports
export default MerchItem
