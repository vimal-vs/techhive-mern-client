import axios from 'axios';
import { useState } from 'react';
import Card from './Card';

export default function ItemList() {

    const [data, setData] = useState([]);

    const fetch = () => { 
        axios.get("http://localhost:3001/data")
        .then(res => {
            setData(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    var allData = [];

    Object.keys(data).forEach(function(key) {
        allData.push(data[key]);
      });
      
    const displayData = (
        allData.map(item => { 
            return (
                <Card name={item.name} desc={item.description}/>
            )
        })
    );
  return (
    <div className='flex flex-col gap-4 justify-center items-center py-4 mx-auto'>
        <h2 className='text-xl'>View Item</h2>
        <button onClick={fetch} className='rounded-lg px-2 py-1 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200'>Click to fetch</button>
        <div>
            <div className='flex flex-wrap justify-center gap-4'>
                {displayData}
            </div>
        </div>
    </div>
  );
}
