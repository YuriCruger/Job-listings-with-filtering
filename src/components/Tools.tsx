import Users from '../types/Users'
import Tool from './ToolItem'

interface userProps {
    user: Users
    handleClick: (value: string) => void;
}
export default function Tools({ user, handleClick }: userProps) {
    return (
        <div className='flex items-center gap-3'>
            {user.tools?.map((tool, index) => (
                <Tool key={index} tool={tool} handleClick={handleClick}/>
            ))}
        </div>
    )
}
