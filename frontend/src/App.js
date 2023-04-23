import Signin from './Components/Signin/signin';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './Components/signup/signup';
import Homepage from './Components/Homepage/homepage';
import Addbook from "./Components/addbook/addbook"
import ProtectedRoute from './Components/protected route/protectedroute';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/homepage" element={<ProtectedRoute><Homepage/></ProtectedRoute>}/>
        <Route path="/addbook" element={<ProtectedRoute><Addbook/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
