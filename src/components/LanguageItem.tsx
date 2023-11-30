interface LanguageProps {
    lang: string;
    handleClick: (value: string) => void;
}

export default function Language({ lang, handleClick }: LanguageProps) {
  return (
    <button 
    onClick={() => handleClick(lang)}
    className='text-desaturated_dark_cyan font-bold px-2 rounded-md bg-light_grayish_cyan_bg hover:bg-desaturated_dark_cyan hover:text-white'>
        {lang}
    </button>
  )
}
