export default function Card({ name, desc }) {
  return (
    <ul className='flex flex-col shadow-lg shadow-slate-200 px-4 py-2 rounded-lg border border-slate-300/50 w-fit'>
        <li><span className="text-gray-500">Name :</span> { name }</li> 
        <li><span className="text-gray-500">Description :</span> { desc }</li> 
    </ul>
  )
}
