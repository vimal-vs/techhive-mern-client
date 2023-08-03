import axios from 'axios';

export default function ItemList() {

    const getData = async() => {
        const data  = await axios.get("http://localhost:3001/data")
        return data;
    }
    const data = getData();
    console.log(data);
        // .then(msg => console.log(msg))
        // .catch(err => console.log(err))
  return (
    <div>
        <h2>All the items are : </h2>
        <div>
            {JSON.stringify(data)}
        </div>
    </div>
  );
}
