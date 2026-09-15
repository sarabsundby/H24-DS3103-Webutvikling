// Imports
import { useState, ChangeEvent } from "react"
import MerchService from "../../services/MerchService"

const AddMerch = () => {
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [price, setPrice] = useState("")
  const [size, setSize] = useState("")
  const [amount, setAmount] = useState("")
  const [image, setImage] = useState<File | null>(null)

  const [message, setMessage] = useState<string | null>(null)
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
    null
  )

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

  const addMerch = async () => {
    if (!image) {
      setMessage("*All required fields must be filled out.")
      setMessageType("error")
      return
    }

    try {
      const newMerch = {
        name: name,
        type: type,
        price: parseInt(price),
        size: size,
        amount: parseInt(amount),
        image: image.name,
      }
      await MerchService.postMerch(newMerch, image)

      setMessage("Merchandise successfully added!")
      setMessageType("success")
    } catch (error) {
      setMessage("Failed to add merchandise. Please try again.")
      setMessageType("error")
    }
  }

  return (
    <div className="container-fluid my-4">
      <div className="row">
        <section>
          <header>
            <h3 className="text-center mb-4">Add New Merch</h3>
          </header>
          {message && (
            <div
              className={`alert ${
                messageType === "success" ? "alert-success" : "alert-danger"
              }`}
              role="alert"
              aria-relevant="additions">
              {message}
            </div>
          )}
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="name" className="form-label">
                *Product name
              </label>
              <input
                className="form-control"
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label htmlFor="type" className="form-label">
                *Product type
              </label>
              <input
                className="form-control"
                name="type"
                type="text"
                value={type}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                className="form-control"
                name="price"
                type="number"
                value={price}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label htmlFor="size" className="form-label">
                *Sizes
              </label>
              <input
                className="form-control"
                name="size"
                type="text"
                value={size}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                className="form-control"
                name="amount"
                type="number"
                value={amount}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label htmlFor="image" className="form-label">
                Image
              </label>
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
                onClick={addMerch}>
                Add to Webshop
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

// Exports
export default AddMerch
