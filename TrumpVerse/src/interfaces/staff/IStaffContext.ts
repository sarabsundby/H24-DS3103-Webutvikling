// Imports
import IStaff from "./IStaff"

interface IStaffContext {
  staff: IStaff[]
  getStaffById: (id: number) => Promise<IStaff | null>
  postStaff: (newStaff: IStaff, newStaffImage: File) => Promise<IStaff | null>
  putStaff: (updatedStaff: IStaff) => void
  deleteStaff: (id: number) => void
}

// Exports
export default IStaffContext
