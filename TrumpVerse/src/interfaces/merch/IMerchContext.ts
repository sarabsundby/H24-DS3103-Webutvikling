// Imports
import IMerch from "./IMerch"

interface IMerchContext {
  merch: IMerch[]
  getMerchById: (id: number) => Promise<IMerch | null>
  getMerchByType: (type: string) => Promise<IMerch | null>
  postMerch: (newMerch: IMerch, newMerchImage: File) => Promise<IMerch | null>
  putMerch: (updatedMerch: IMerch) => void
  deleteMerch: (id: number) => void
}

// Exports
export default IMerchContext
