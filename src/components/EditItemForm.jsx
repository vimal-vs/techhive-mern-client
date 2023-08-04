import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export default function EditItemForm() {

  const inputFieldStyle = "border-2 rounded-md px-1";
  const labelStyle = "text-gray-600";

  const handleSubmit = (event) => {

    event.preventDefault();
    const name = event.target.name.value;
    const updateName = event.target.edit_name.value;
    const updateDescription = event.target.description.value;
    axios.patch(`${process.env.REACT_APP_API_URL}/data/edit/${name}`, { updateName, updateDescription })
    .then(res => {
      if(res.data === null)toast.error("Name not found !");
      if(res.data)toast.success("Edited Successfully !");
    })
    .catch(err => {
        toast.error("New Name already exists !");
    })
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div className="flex flex-col gap-6 py-8 justify-center items-center rounded-md shadow-lg border border-slate-300/50 px-4">
        <h2 className="text-xl">Edit Item</h2>
        <div className="flex gap-2">
            <label htmlFor="name" className={labelStyle}>Old Name : </label>
            <input type="text" name="name" className={inputFieldStyle} required/>
        </div>
        <div className="flex gap-2">
            <label htmlFor="edit_name" className={labelStyle}>New Name : </label>
            <input type="text" name="edit_name" className={inputFieldStyle} required/>
        </div>
        <div className="flex gap-2">
            <label htmlFor="description" className={labelStyle}>Description : </label>
            <input type="text" name="description" className={inputFieldStyle} required/>
        </div>
        <button type="submit" className="w-fit rounded-lg px-2 py-1 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200">Edit Data</button>
      </div>
      <Toaster />
    </form>
  )
};
