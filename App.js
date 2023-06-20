import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./style.scss";
import {Routes, Route, BrowserRouter, Navigate, useNavigate,} from "react-router-dom";
import { useContext } from "react";
import{AuthContext} from "./context/AuthContext";
import Homestart from "./Homestart";
import About from "./pages/About";


function App() {
  const {currentUser} = useContext(AuthContext)
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return<Navigate to="/chat/login"/>
    }
    return children
  };

  return (
   <BrowserRouter>
   <Routes> 

    <Route path="/" element={<Homestart/>}/>
    <Route path="/chat">
      <Route index element={
      <ProtectedRoute> 
        <Home />
        </ProtectedRoute>
        }
        />
      <Route path= "/chat/login" element= {<Login />} />
      <Route path= "/chat/register" element= {<Register />} />
    </Route>
    <Route path="/about" element={<About/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;