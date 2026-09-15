// Imports
import StaffService from "../../services/StaffService"
import { FC } from "react"

interface DeleteStaffProps {
  id: number
}

const DeleteStaff: FC<DeleteStaffProps> = ({ id }) => {
  const handleDelete = async () => {
    try {
      await StaffService.deleteStaff(id)
      console.log(`Staff member with ID: ${id} deleted`)
    } catch (error) {
      console.error("Error deleting staff member:", error)
    }
  }

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  )
}

// Exports
export default DeleteStaff
