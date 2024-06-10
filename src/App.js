import Header from "./Components/Header/Header";
import SubHeader from "./Components/SubHeader/SubHeader";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";

function App(){
  return (
   <>
   <BrowserRouter>
<Routes>
<Route path="/" element={<Menu />}>
<Route index element={<SubHeader />}/>
 <Route path="cart" element={<Cart />} />
{/* <Route path="*" element={<Error1/>} /> */}
</Route>
</Routes>
</BrowserRouter>

    
   </>

  )
}

export default App;