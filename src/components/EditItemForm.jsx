import axios from "axios";

export default function EditItemForm() {
  const inputFieldStyle = "border-2 rounded-md";
  const labelStyle = "";

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const updateName = event.target.edit_name.value;
    axios.patch(`http://localhost:3001/data/edit/${name}`, {updateName})
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })
  }
  return (
    <form className="flex flex-col gap-4 justify-center items-center pb-6" onSubmit={handleSubmit}>
      <h2 className="text-xl">Edit Item</h2>
        <div className="flex gap-2">
            <label htmlFor="name" className={labelStyle}>Search : </label>
            <input type="text" name="name" className={inputFieldStyle} required/>
        </div>
        <div className="flex gap-2">
            <label htmlFor="edit_name" className={labelStyle}>Edit with : </label>
            <input type="text" name="edit_name" className={inputFieldStyle} required/>
        </div>
      <button type="submit" className="w-fit rounded-lg px-2 py-1 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-200">Edit Item</button>
    </form>
  )
}
