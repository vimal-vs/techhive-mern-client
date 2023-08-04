import axios from "axios";

export default function AddItemForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        console.log(name, description);
        axios.post("http://localhost:3001/data/add", {name, description})
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            alert("Name must be unique.!");
        })
    };

    const inputFieldStyle = "border-2 rounded-md";
    const labelStyle = "";

  return (
    <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 py-8 justify-center items-center border-2">
            <h2 className='text-xl'>Add Item</h2>
            <div className="flex gap-2">
                <label htmlFor="name" className={labelStyle}>Name : </label>
                <input type="text" name="name" className={inputFieldStyle} required/>
            </div>
            <div className="flex gap-2">
                <label htmlFor="description" className={labelStyle}>Description : </label>
                <input type="text" name="description" className={inputFieldStyle} required/>
            </div>
            <button type="submit" className="w-fit mx-auto rounded-lg px-2 py-1 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-200">Add Item</button>
        </div>
    </form>
  )
}
