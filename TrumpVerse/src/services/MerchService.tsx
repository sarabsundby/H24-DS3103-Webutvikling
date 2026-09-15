// Imports
import axios from "axios"
import IMerch from "../interfaces/merch/IMerch"

const MerchService = (() => {
  const merchControllerEndpoint = "http://localhost:5021/api/merch"
  const imageUploadControllerEndpoint = "http://localhost:5021/api/imageupload"
  const merchImageEndpoint = "http://localhost:5021/images/"
  const typesEndpoint = "http://localhost:5021/api/merch/types"

  const getImageEndpoint = () => {
    return merchImageEndpoint
  }

  const getAll = async () => {
    try {
      const result = await axios.get(merchControllerEndpoint)
      return { success: true, data: result.data }
    } catch {
      return {
        success: false,
        data: "Something went wrong. Not able to display data.",
      }
    }
  }

  const getTypes = async () => {
    try {
      const result = await axios.get(typesEndpoint)
      return { success: true, data: result.data }
    } catch {
      return {
        success: false,
        data: "Failed to fetch types.",
      }
    }
  }

  const getById = async (id: number): Promise<IMerch | null> => {
    const result = await axios.get(merchControllerEndpoint + id)
    return result.data as IMerch
  }

  const getMerchByType = async (type: string) => {
    try {
      const result = await axios.get(`${merchControllerEndpoint}/type/${type}`)
      return { success: true, data: result.data }
    } catch {
      return {
        success: false,
        data: "Something went wrong while fetching merch by type.",
      }
    }
  }

  const postMerch = async (newMerch: IMerch, newMerchImage: File) => {
    await axios.post(merchControllerEndpoint, newMerch)

    const formData = new FormData()
    formData.append("file", newMerchImage)

    await axios({
      url: imageUploadControllerEndpoint,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })

    formData.delete("file")
  }

  const putMerch = async (updatedMerch: IMerch): Promise<IMerch | null> => {
    const result = await axios.put(merchControllerEndpoint, updatedMerch)
    return result.data
  }

  const deleteMerch = async (id: number): Promise<void> => {
    await axios.delete(`${merchControllerEndpoint}/${id}`)
  }

  return {
    getImageEndpoint,
    getAll,
    getTypes,
    getById,
    getMerchByType,
    postMerch,
    putMerch,
    deleteMerch,
  }
})()

// Exports
export default MerchService
