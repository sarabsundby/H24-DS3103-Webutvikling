// Imports
import { useState, useEffect } from "react"
import StaffItem from "./StaffItem"
import StaffService from "../../services/StaffService"
import IStaff from "../../interfaces/staff/IStaff"
import EditStaff from "./EditStaff"

const StaffList = () => {
  const [staff, setStaff] = useState<IStaff[]>([])
  const [editedStaff, setEditedStaff] = useState<IStaff | null>(null)

  useEffect(() => {
    getStaffFromService()
  }, [staff])

  const getStaffFromService = async () => {
    const response = await StaffService.getAll()
    if (response.success) {
      setStaff(response.data)
    } else {
      console.error(response.data)
    }
  }

  const handleDeleted = () => {
    getStaffFromService()
  }

  const handleEdit = (staffItem: IStaff) => {
    setEditedStaff(staffItem)
  }

  const handleUpdatedStaff = () => {
    getStaffFromService()
    setEditedStaff(null)
  }

  return (
    <div className="container-fluid my-4">
      <div className="row">
        {editedStaff ? (
          <EditStaff
            staff={editedStaff}
            onSave={handleUpdatedStaff}
            onCancel={() => setEditedStaff(null)}
          />
        ) : staff.length > 0 ? (
          staff.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <StaffItem
                staff={item}
                onDeleted={handleDeleted}
                onEdit={handleEdit}
              />
            </div>
          ))
        ) : (
          <p className="text-center">Could not load staff members.</p>
        )}
      </div>
    </div>
  )
}

// Exports
export default StaffList
