import Routee from './Routerss/Routee';
import {BrowserRouter} from "react-router-dom";
import Navbar1 from './Components/navbar/Navbar';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar1/>
    <Routee/>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
