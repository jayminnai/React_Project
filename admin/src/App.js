import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard_index from "./Pages/Dashboard_index";
import Sign_up from "./Pages/Sign_up";
import Form_editor from "./Pages/Forms/Form_editor";
import Basic_table from "./Pages/Tables/Basic_table";
import User_table from "./Pages/Tables/User_table";
import Contact_Table from "./Pages/Tables/Contact_Table";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Add_product from "./Pages/Forms/Add_product";
import Product_table from "./Pages/Tables/Product_table";

function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/Dashboard" element={<><Dashboard_index/></>}></Route>
        <Route index path="/" element={<><Login/></>}></Route>
        <Route path="/Signup" element={<><Sign_up/></>}></Route>
        <Route path="/Formeditor" element={<><Form_editor/></>}></Route>
        <Route path="/Basictable" element={<><Basic_table/></>}></Route>
        <Route path="/Usertable" element={<><User_table/></>}></Route>
        <Route path="/Contacttable" element={<><Contact_Table/></>}></Route>
        <Route path="/Producttable" element={<><Product_table/></>}></Route>
        <Route path="/Addproduct" element={<><Add_product/></>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
