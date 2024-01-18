import { useTodoContext } from "../ListesContexte"

const Notes = () => {
    const {list} = useTodoContext();
    return (
        <div className="">
            <h5>Note <button className='border-0 rounded'>{list.length}</button></h5>
        </div>
    )
}

export default Notes;

