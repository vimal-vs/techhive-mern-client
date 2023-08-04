import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './widgets/Card';

export default function ItemList() {

    const [data, setData] = useState([]);

    const fetch = () => { 
        axios.get(`${process.env.REACT_APP_API_URL}/data`)
        .then(res => {
            setData(res.data);
        })
        .catch(err => {
            alert("Something went wrong!");
        })
    };

    useEffect(() => {
        fetch()
        },[data]
    );

    var allData = [];

    Object.keys(data).forEach(function(key) {
        allData.push(data[key]);
    });
    
    const displayData = (
        allData.map((item) => {
            return (
                <Card key={item._id} name={item.name} desc={item.description}/>
            )
        })
    )   ;

  return (
    <div className='flex flex-col gap-4 justify-center items-center py-4 shadow-lg border border-slate-300/50'>
        <h2 className='text-xl font-medium'>Item List</h2>
        <div>
            <div className='flex flex-wrap justify-center gap-4 px-2'>
                { displayData }
            </div>
        </div>
    </div>
  );
};
