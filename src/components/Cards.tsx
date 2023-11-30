import { useState } from 'react';
import Users from '../types/Users';
import CardItem from './CardItem';
import ListBar from './ListBar';

interface DataProps {
    data: Users[] | undefined;
}

export default function Cards({ data }: DataProps) {
    const [array, setArray] = useState<string[]>([])
    
    const isHide = array.length <= 0
    
    return (
        <div className='flex flex-col pb-20'>
            <div className={`mx-10 py-10 bg-white shadow-md rounded-md flex items-center px-5 min-h-[80px] -mt-[40px] mb-6 ${isHide && 'hidden'}`}>
                <ListBar array={array} setArray={setArray}/>
            </div>
            {data?.map((user) => (
                <CardItem
                    key={user.id}
                    user={user}
                    setArray={setArray}
                    array={array}
                />
            ))}
        </div>
    );
}
