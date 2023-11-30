import Users from '../types/Users';
import Language from './LanguageItem';

interface UserProps {
    user: Users;
    handleClick: (value: string) => void;
}

export default function Languages({ user, handleClick }: UserProps) {
    return (
        <div 
        className='flex items-center gap-3'>
            {user.languages.map((lang, index) => (
                <Language key={index} lang={lang} handleClick={handleClick}/>
            ))}
        </div>
    );
}
