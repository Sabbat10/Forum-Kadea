import {useState} from 'react'
import './App.css'
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import UserContext from './context/UserContex.jsx';

function App() {
   const [pseudo, setPseudo] = useState(null);

   const handleLoginSubmit = (userName) => {
       setPseudo(userName);
   };

   return (
       pseudo ?
           <UserContext.Provider value={{isLogged: true, pseudo: pseudo}}>
               <Home/>
           </UserContext.Provider>
           :
           <Login onLoginSubmit={handleLoginSubmit}/>
   );
}

export default App