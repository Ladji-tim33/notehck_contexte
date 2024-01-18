import { useTodoContext  } from "../ListesContexte";

const Input = () => {
  const { inputValue, setInputValue,  handleSubmit, cleAmodifier} = useTodoContext();

  return (
    <div className='bg-white rounded my-5 card shadow'>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 d-flex justify-content-between w-100 gap-2 mt-3">
            <input
              type="text"
              value={inputValue}
              className="form-control"
              placeholder="Add Note"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="btn btn-success" >
            {!cleAmodifier ? "Add" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;

