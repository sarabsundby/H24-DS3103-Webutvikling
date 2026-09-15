// Imports
import { useState, ChangeEvent } from "react"
import StaffService from "../../services/StaffService"
import "bootstrap/dist/css/bootstrap.min.css"

const AddStaff = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState("")
  const [image, setImage] = useState<File | null>(null)

  const [message, setMessage] = useState<string | null>(null)
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null
  )

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

  const addStaff = async () => {
    if (!image) {
      setMessage("*All required fields must be filled out.")
      setMessageType("error")
      return
    }

    try {
      const newStaff = {
        firstname,
        lastname,
        birthdate,
        email,
        phone: parseInt(phone),
        role,
        image: image.name,
      }
      await StaffService.postStaff(newStaff, image)

      setMessage("Staff member successfully added!")
      setMessageType("success")
    } catch (error) {
      setMessage("Failed to add staff member. Please try again.")
      setMessageType("error")
    }
  }

  return (
    <div className="container-fluid my-4">
      <h3>Add new staff member</h3>
      {message && (
        <div
          className={`alert ${
            messageType === "success" ? "alert-success" : "alert-danger"
          }`}
          role="alert"
          aria-live="assertive">
          {message}
        </div>
      )}
      <form className="row g-3">
        <div className="col-12">
          <label className="form-label">*Firstname</label>
          <input
            className="form-control"
            name="firstname"
            type="text"
            value={firstname}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">*Lastname</label>
          <input
            className="form-control"
            name="lastname"
            type="text"
            value={lastname}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">*Birthdate</label>
          <input
            className="form-control"
            name="birthdate"
            type="text"
            value={birthdate}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">*Email</label>
          <input
            className="form-control"
            name="email"
            type="text"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">*Phone</label>
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
            type="button"
            className="btn btn-success w-100"
            onClick={addStaff}>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

// Exports
export default AddStaff
