// Imports
import AddStaff from "../components/staff/AddStaff"
import StaffList from "../components/staff/StaffList"

const StaffPage = () => {
  return (
    <div className="container-fluid my-4">
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <AddStaff />
        </div>
        <div className="col-lg-9 col-md-8">
          <StaffList />
        </div>
      </div>
    </div>
  )
}

// Exports
export default StaffPage
