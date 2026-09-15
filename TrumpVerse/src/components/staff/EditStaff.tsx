// Imports
import { useState, ChangeEvent, FC } from "react"
import IStaff from "../../interfaces/staff/IStaff"
import StaffService from "../../services/StaffService"

const EditStaff: FC<{
  staff: IStaff
  onSave: () => void
  onCancel: () => void
}> = ({ staff, onSave, onCancel }) => {
  const [firstname, setFirstname] = useState(staff.firstname)
  const [lastname, setLastname] = useState(staff.lastname)
  const [birthdate, setBirthdate] = useState(staff.birthdate)
  const [email, setEmail] = useState(staff.email)
  const [phone, setPhone] = useState(staff.phone.toString())
  const [role, setRole] = useState(staff.role)
  const [image, setImage] = useState<File | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target
    switch (name) {
      case "firstname":
        setFirstname(value)
        break
      case "lastname":
        setLastname(value)
        break
      case "birthdate":
        setBirthdate(value)
        break
      case "email":
        setEmail(value)
        break
      case "phone":
        setPhone(value)
        break
      case "role":
        setRole(value)
        break
      case "image":
        if (files && files[0]) {
          setImage(files[0])
        }
        break
    }
  }

  const handleUpdate = async () => {
    const updatedStaff = {
      ...staff,
      firstname,
      lastname,
      birthdate,
      email,
      phone: parseInt(phone),
      role,
      image: image ? image.name : staff.image,
    }
    await StaffService.putStaff(updatedStaff)
    onSave()
  }

  return (
    <div className="container-fluid my-4">
      <h3>Add Staff Member</h3>
      <form className="row g-3">
        <div className="col-12">
          <label className="form-label">Firstname</label>
          <input
            className="form-control"
            name="firstname"
            type="text"
            value={firstname}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Lastname</label>
          <input
            className="form-control"
            name="lastname"
            type="text"
            value={lastname}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Birthdate</label>
          <input
            className="form-control"
            name="birthdate"
            type="text"
            value={birthdate}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            name="email"
            type="text"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Phone</label>
          <input
            className="form-control"
            name="phone"
            type="number"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Role</label>
          <input
            className="form-control"
            name="role"
            type="text"
            value={role}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Image</label>
          <input
            className="form-control"
            name="image"
            type="file"
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <button
            className="btn btn-success w-100"
            type="button"
            onClick={handleUpdate}>
            Save Changes
          </button>
          <button
            className="btn btn-secondary w-100 mt-2"
            type="button"
            onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

// Exports
export default EditStaff
