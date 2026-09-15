// Imports
import { useState, useEffect, ChangeEvent } from "react"
import MerchItem from "./MerchItem"
import MerchService from "../../services/MerchService"
import IMerch from "../../interfaces/merch/IMerch"
import EditMerch from "./EditMerch"

const MerchList = () => {
  const [merch, setMerch] = useState<IMerch[]>([])
  const [filteredMerch, setFilteredMerch] = useState<IMerch[]>([])
  const [selectedType, setSelectedType] = useState<string>("")
  const [editedMerch, setEditedMerch] = useState<IMerch | null>(null)
  const [types, setTypes] = useState<string[]>([])

  const getTypesFromService = async () => {
    const response = await MerchService.getTypes()
    if (response.success) {
      setTypes(response.data)
    } else {
      console.error("Failed to fetch merch types")
    }
  }

  const getMerchByType = async (type: string) => {
    const response = await MerchService.getMerchByType(type)
    if (response.success) {
      setFilteredMerch(response.data)
    } else {
      console.error("Failed to fetch merch by type")
    }
  }

  const getAllMerch = async () => {
    const response = await MerchService.getAll()
    if (response.success) {
      setMerch(response.data)
      setFilteredMerch(response.data)
    } else {
      console.error("Failed to fetch all merch")
    }
  }

  useEffect(() => {
    getTypesFromService()
    getAllMerch()
  }, [])

  useEffect(() => {
    if (selectedType) {
      getMerchByType(selectedType)
    } else {
      getAllMerch()
    }
  }, [selectedType])

  const handleDeleted = () => {
    getAllMerch()
  }

  const handleEdit = (merchItem: IMerch) => {
    setEditedMerch(merchItem)
  }

  const handleUpdatedMerch = () => {
    getAllMerch()
    setEditedMerch(null)
  }

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value)
  }

  return (
    <div className="container-fluid my-4">
      <div className="row">
        <div className="col-12 mb-4">
          <label htmlFor="merchType" className="form-label">
            Filter:
          </label>
          <select
            id="merchType"
            className="form-control"
            value={selectedType}
            onChange={handleTypeChange}>
            <option value="">All</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {editedMerch ? (
          <EditMerch
            merch={editedMerch}
            onSave={handleUpdatedMerch}
            onCancel={() => setEditedMerch(null)}
          />
        ) : filteredMerch.length > 0 ? (
          filteredMerch.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <MerchItem
                merch={item}
                onDeleted={handleDeleted}
                onEdit={handleEdit}
              />
            </div>
          ))
        ) : (
          <p className="text-center">No merchandise available.</p>
        )}
      </div>
    </div>
  )
}

// Exports
export default MerchList
