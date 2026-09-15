// Imports
import { useState, ChangeEvent, FC } from "react"
import IMerch from "../../interfaces/merch/IMerch"
import MerchService from "../../services/MerchService"

const EditMerch: FC<{
  merch: IMerch
  onSave: () => void
  onCancel: () => void
}> = ({ merch, onSave, onCancel }) => {
  const [name, setName] = useState(merch?.name || "")
  const [type, setType] = useState(merch?.type || "")
  const [price, setPrice] = useState(merch?.price?.toString() || "")
  const [size, setSize] = useState(merch?.size || "")
  const [amount, setAmount] = useState(merch?.amount?.toString() || "")
  const [image, setImage] = useState<File | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target
    switch (name) {
      case "name":
        setName(value)
        break
      case "type":
        setType(value)
        break
      case "price":
        setPrice(value)
        break
      case "size":
        setSize(value.toUpperCase())
        break
      case "amount":
        setAmount(value)
        break
      case "image":
        if (files && files[0]) {
          setImage(files[0])
        }
        break
    }
  }

  const handleUpdate = async () => {
    const updatedMerch = {
      ...merch,
      name,
      type,
      price: parseInt(price),
      size,
      amount: parseInt(amount),
      image: image ? image.name : merch.image,
    }
    await MerchService.putMerch(updatedMerch)
    onSave()
  }

  return (
    <div className="container-fluid my-4">
      <h3>Edit Merch</h3>
      <form className="row g-3">
        <div className="col-12">
          <label className="form-label">Product name</label>
          <input
            className="form-control"
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Product type</label>
          <input
            className="form-control"
            name="type"
            type="text"
            value={type}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Price</label>
          <input
            className="form-control"
            name="price"
            type="number"
            value={price}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Size</label>
          <input
            className="form-control"
            name="size"
            type="text"
            value={size}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Amount</label>
          <input
            className="form-control"
            name="amount"
            type="number"
            value={amount}
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
export default EditMerch
