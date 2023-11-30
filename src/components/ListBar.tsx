import ListBarItem from "./ListBarItem"

interface arrayProps {
    array: string[]
    setArray: React.Dispatch<React.SetStateAction<string[]>>;
}                
export default function ListBar({ array, setArray}:arrayProps) {
    return (
        <div className='flex w-full'>
            <div className="flex flex-wrap gap-2 lg:gap-4 items-center mr-3">
            {array.map((a) => (
                <ListBarItem nameArray={a} array={array} setArray={setArray}/>
            ))}
            </div>
            <button
                    onClick={() => setArray([])}
                    className='text-desaturated_dark_cyan font-bold hover:underline ml-auto'>
                    Clear
                </button>
        </div>
    )
}
