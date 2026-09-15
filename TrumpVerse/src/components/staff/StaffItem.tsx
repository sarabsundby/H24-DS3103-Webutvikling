// Imports
import { FC } from "react"
import IStaff from "../../interfaces/staff/IStaff"
import StaffService from "../../services/StaffService"

const StaffItem: FC<{
  staff: IStaff
  onDeleted: () => void
  onEdit: (staff: IStaff) => void
}> = ({ staff, onDeleted, onEdit }) => {
  const handleDelete = async () => {
    if (!staff.id) return
    try {
      await StaffService.deleteStaff(staff.id)
      onDeleted()
    } catch (error) {
      console.error("Error deleting staff member:", error)
    }
  }

  return (
    <div className="card h-100 bg-light shadow-sm">
      <img
        src={StaffService.getImageEndpoint() + staff.image}
        className="card-img-top"
        alt={`Image of ${staff.firstname + staff.lastname}`}
      />
      <div className="card-body">
        <p className="card-text">{staff.role}</p>
        <h5 className="card-title">
          {staff.firstname} {staff.lastname}
        </h5>
        <p className="card-text">Birthdate: {staff.birthdate}</p>
        <p className="card-text">Email: {staff.email}</p>
        <p className="card-text">Phone: {staff.phone}</p>
        <div className="d-flex justify-content-between mt-3">
          <button
            className="btn btn-danger btn-sm flex-grow-1 mx-1"
            onClick={handleDelete}>
            Delete
          </button>
          <button
            className="btn btn-primary btn-sm btn-sm flex-grow-1 mx-1"
            onClick={() => onEdit(staff)}>
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

// Exports
export default StaffItem
