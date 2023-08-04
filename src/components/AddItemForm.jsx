import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export default function AddItemForm() {

    const handleSubmit = (event) => {

        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;

        axios.post(`${process.env.REACT_APP_API_URL}/data/add`, {name, description})
        .then(res => {
            if(res.status === 200)toast.success("Added Successfully !");
        })
        .catch(err => {
            toast.error("Name must be unique !");
        })
    };

    const inputFieldStyle = "border-2 rounded-md px-1";
    const labelStyle = "text-gray-600";

  return (
    <form onSubmit={ handleSubmit }>
        <div className="flex flex-col gap-6 py-8 justify-center items-center rounded-md shadow-lg border border-slate-300/50 px-4">
            <h2 className='text-xl'>Add Item</h2>
            <div className="flex gap-2">
                <label htmlFor="name" className={labelStyle}>Name : </label>
                <input type="text" name="name" className={inputFieldStyle} required/>
            </div>
            <div className="flex gap-2">
                <label htmlFor="description" className={labelStyle}>Description : </label>
                <input type="text" name="description" className={inputFieldStyle} required/>
            </div>
            <button type="submit" className="w-fit mx-auto rounded-lg px-2 py-1 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-200">Add Data</button>
        </div>
        <Toaster />
    </form>
  )
};
