// Imports
import { useState, FC } from "react"
import { useNavigate } from "react-router-dom"

const AdministerAccess: FC = () => {
  const [name, setName] = useState<string>("")
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (name.trim() !== "") {
      sessionStorage.setItem("userName", name)
      navigate("/home")
    } else {
      alert("Please enter your name.")
    }
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center bg-white p-5 rounded shadow">
        <h1 className="mb-4">Welcome!</h1>
        <p className="mb-4">
          To verify your employment status, please enter your name to proceed:
        </p>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

// Exports
export default AdministerAccess
