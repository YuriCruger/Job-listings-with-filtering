interface nameArrayProps {
    nameArray: string
    array: string[]
    setArray: React.Dispatch<React.SetStateAction<string[]>>;
}
export default function ListBarItem({nameArray, array, setArray }:nameArrayProps) {

  const handleDelete = () => {
    const newArray = array.filter((item) => item !== nameArray);
    setArray(newArray);
  };

  return (
    <div className="flex">
      <div className='text-desaturated_dark_cyan font-bold px-2 rounded-md bg-light_grayish_cyan_bg'>
                {nameArray}
            </div>
            <button
                onClick={handleDelete}
                className='bg-desaturated_dark_cyan text-white rounded-r-md px-2 -ml-1 hover:bg-very_dark_grayish_cyan'>
                X
            </button>
    </div>
  )
}