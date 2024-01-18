
import Myinput from './Form/MyInput';
import Mylist from './Affichage/Mylist';
import ClearAll from './Affichage/ClairAll';
import Notes from './Affichage/Note';
import Header from "./Header/Header";
import TodoContext from './ListesContexte';

const App = () => {
  return (
    <div className=" App pt-5">
      <div className="container ">
      <TodoContext>
        <Header />
          <Myinput name="text" ></Myinput>
        
        <div className="mt-3 bg-white p-3 rounded">
          <div className="d-flex justify-content-between ">
            <Notes  />
            <ClearAll  />
          </div>
          <hr />
          <Mylist />
         
        </div>
        </TodoContext>
      </div>
    </div>

  );
}

export default App;

