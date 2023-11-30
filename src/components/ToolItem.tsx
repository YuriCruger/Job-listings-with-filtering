interface toolProps {
    tool: string
    handleClick: (value: string) => void;
}

export default function Tool({ tool, handleClick }: toolProps) {
  return (
    <button
    onClick={() => handleClick(tool)}
    className='text-desaturated_dark_cyan font-bold px-2 rounded-md bg-light_grayish_cyan_bg hover:bg-desaturated_dark_cyan hover:text-white'>
      {tool}
    </button>
  )
}
