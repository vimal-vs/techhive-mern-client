export default function Card( {name, desc} ) {
  return (
    <ul key={name} className='flex flex-col shadow-lg shadow-slate-200 px-4 py-2 rounded-lg w-fit'>
        <li>Name : {name}</li> 
        <li>Description : {desc}</li> 
    </ul>
  )
}
