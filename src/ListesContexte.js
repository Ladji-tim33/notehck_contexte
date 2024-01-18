

import { createContext, useContext, useState, useEffect } from "react"

// import './App.css';
const TodoContext = createContext()
const Todos = ({children}) => {
    const [inputValue, setInputValue] = useState("");
    const [cleAmodifier, setCleamodif] = useState(false);
    const [editIndex, setEditIndex] = useState("");
    const [note, setNote] = useState(0);
    const [list, setList] = useState(() => {
      const localStorageUsers = localStorage.getItem('list');
      return localStorageUsers ? JSON.parse(localStorageUsers) : [];
    });
  
    
    useEffect(() => {
        document.title = 'Note Hack';
        const bg = document.querySelector('.App');
        bg.classList.add(localStorage.getItem('background'));
      }, []);
    
      useEffect(() => {
        // Mettre à jour le localStorage à chaque changement de list
        localStorage.setItem('list', JSON.stringify(list));
      }, [list]); // Ce useEffect s'exécute à chaque changement de list


      const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim() === "") {
        alert( "Veuillez entrer une tâche") ;
      } else {
        let nouvelleTache
      if(!cleAmodifier) {
      // Mettre à jour la tâche existante
      // Ajouter une nouvelle tâche
       nouvelleTache = {
        id : Math.floor(Math.random() * 10000),
        text : inputValue,
        dateTime : new Date().toLocaleString(),
        inremente: note + 1        
      };
       
    //    Mettre à jour l’état avec la nouvelle tâche
        nouvelleTache = [...list, nouvelleTache];
        setList( nouvelleTache) ;
        setInputValue('') ;
      } else {
        nouvelleTache = list.map((task) =>
        task.id === editIndex
        ? {
        text : inputValue,
        dateTime : new Date().toLocaleString(),
        }
        :task
        );
        setCleamodif(false)
    //    Mettre à jour l’état avec la nouvelle liste
        setList(nouvelleTache) ;
         
        setInputValue('') ;
     
      }
      }
     };
       
       
  const dleteId = (id) => {
    
    const newTask = list.filter((tacheI) => tacheI.id !== id);
    setList(newTask);
   setNote ({
    inremente: note -1
   }) 
  }

  const modifierId = (id) => {
    const modifiaction = list.find(
      (utilisateur) => utilisateur.id === id);
    if(modifiaction){
     setInputValue(modifiaction.text)
     setCleamodif(true)
     setEditIndex(modifiaction.id)
    }else{
      console.error("Task not found");
    }

    
  }

  
  const changebg = (color) => {
    localStorage.setItem('background', color);
    const bg = document.querySelector('.App');
    
    // Remove all classes except the first two
    bg.className = bg.classList.item(0) + ' ' + bg.classList.item(1);

    const newBackground = localStorage.getItem('background');
    if (newBackground && typeof newBackground === 'string') {
        bg.classList.add(newBackground);
    }
}

  const deleteAll = () => {
    setList(
       []
    //   count: 0,
    );
  };

  const contextValue = {
    inputValue,
    setInputValue,  
    list,
    setList,
    cleAmodifier,
    setCleamodif,
    modifierId,
    dleteId,
    changebg,
    handleSubmit,
    deleteAll,
    note,
    
  }

  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
}
  

export const useTodoContext = () => useContext(TodoContext)

export default Todos;


