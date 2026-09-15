// Imports
import axios from "axios"
import IStaff from "../interfaces/staff/IStaff"

const StaffService = (() => {
  const staffControllerEndpoint = "http://localhost:5021/api/staff"
  const imageUploadControllerEndpoint = "http://localhost:5021/api/imageupload"
  const staffImageEndpoint = "http://localhost:5021/images/"

  const getImageEndpoint = () => {
    return staffImageEndpoint
  }

  const getAll = async () => {
    try {
      const result = await axios.get(staffControllerEndpoint)
      return { success: true, data: result.data }
    } catch {
      return {
        success: false,
        data: "Something went wrong. Not able to display data.",
      }
    }
  }

  const getById = async (id: number): Promise<IStaff | null> => {
    const result = await axios.get(staffControllerEndpoint + id)
    return result.data as IStaff
  }

  const postStaff = async (newStaff: IStaff, newStaffImage: File) => {
    await axios.post(staffControllerEndpoint, newStaff)

    const formData = new FormData()
    formData.append("file", newStaffImage)

    await axios({
      url: imageUploadControllerEndpoint,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })

    formData.delete("file")
  }

  const putStaff = async (updatedStaff: IStaff): Promise<IStaff | null> => {
    const result = await axios.put(staffControllerEndpoint, updatedStaff)
    return result.data
  }

  const deleteStaff = async (id: number): Promise<void> => {
    await axios.delete(`${staffControllerEndpoint}/${id}`)
  }

  return {
    getImageEndpoint,
    getAll,
    getById,
    postStaff,
    putStaff,
    deleteStaff,
  }
})()

// Exports
export default StaffService
