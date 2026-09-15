// Imports
import MerchService from "../../services/MerchService"
import { FC } from "react"

interface DeleteMerchProps {
  id: number
  onDelete: () => void
}

const DeleteMerch: FC<DeleteMerchProps> = ({ id, onDelete }) => {
  const handleDelete = async () => {
    try {
      await MerchService.deleteMerch(id)
      onDelete()
    } catch (error) {
      console.error("Error deleting merch:", error)
    }
  }

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  )
}

// Exports
export default DeleteMerch
