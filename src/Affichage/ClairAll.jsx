import { useTodoContext } from "../ListesContexte"

const ClearAll = () => {
    const { deleteAll } = useTodoContext();

    return (
        <div className="">
            <button className="btn btn-primary" onClick={deleteAll}>Clear All</button>
        </div>
    )
}

export default ClearAll;