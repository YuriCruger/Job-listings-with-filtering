import Users from '../types/Users';
import Languages from './Languages';
import Tools from './Tools';

interface UserProps {
    user: Users;
    setArray: React.Dispatch<React.SetStateAction<string[]>>;
    array: string[]
}

export default function CardItem({ user, setArray, array }: UserProps) {

    const handleClick = (value: string) => {
        if (array.includes(value)) {
            return;
        }
        return setArray([...array, value]);
    };

    const shouldShowCard = (): boolean => {
        if (array.length === 0) {
            return true;
        }

        const selectedOptions = [user.role, user.level, ...user.languages];
        if (Array.isArray(user.tools)) {
            selectedOptions.push(...user.tools);
        }

        return array.every(value => selectedOptions.includes(value));
    };
    if (!shouldShowCard()) {
        return;
    }

    return (
        <div className='mt-12 bg-white mx-10 border-l-8 border-desaturated_dark_cyan rounded-md shadow-md lg:min-h-[150px] lg:flex'>
            <div className='flex flex-col px-5 pb-6 gap-2 lg:flex-row lg:items-center lg:py-3 lg:w-full'>
                <div>
                    <img src={user.logo} className='h-16 -mt-8 lg:mt-0 lg:mr-6 lg:h-20' alt={`Logo da ${user.company}`} />
                </div>

                <div className='flex flex-col gap-2'>

                    <div className='flex items-center'>
                        <span className='mr-4 text-desaturated_dark_cyan font-bold'>
                            {user.company}
                        </span>
                        <div className='mr-2 bg-desaturated_dark_cyan text-white font-bold rounded-xl px-2'>
                            {user.new && 'NEW!'}
                        </div>
                        <div className='bg-very_dark_grayish_cyan text-white font-bold px-2 rounded-xl'>
                            {user.featured && 'FEATURED'}
                        </div>
                    </div>

                    <span className='font-bold'>{user.position}</span>

                    <div className='flex items-center gap-2 text-dark_grayish_cyan'>
                        <div>{user.postedAt}</div>
                        <span>*</span>
                        <div>{user.contract}</div>
                        <span>*</span>
                        <div>{user.location}</div>
                    </div>

                </div>


                <hr className='bg-dark_grayish_cyan lg:hidden' />

                <div className='flex flex-wrap items-center gap-3 lg:ml-auto'>
                    <button
                        className='text-desaturated_dark_cyan font-bold px-2 rounded-md bg-light_grayish_cyan_bg hover:bg-desaturated_dark_cyan hover:text-white'
                        onClick={() => handleClick(user.role)}
                    >
                        {user.role}
                    </button>

                    <button
                        className='text-desaturated_dark_cyan font-bold px-2 rounded-md bg-light_grayish_cyan_bg hover:bg-desaturated_dark_cyan hover:text-white'
                        onClick={() => handleClick(user.level)}
                    >
                        {user.level}
                    </button>
                    <div>
                        <Languages user={user} handleClick={handleClick} />
                    </div>
                    <div>
                        <Tools user={user} handleClick={handleClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}