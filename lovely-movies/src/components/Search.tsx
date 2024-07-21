

type props = {
  setSearchVal: (val: string) => void
}

export default function FilterMovies({setSearchVal}: props){


  return (

    <div className="py-5">
      <input onChange={(e) => setSearchVal(e.target.value)} type="text" placeholder="Type movie name to search" className="border rounded-full w-1/2 h-[50px] p-6" />
    </div>
  )
}