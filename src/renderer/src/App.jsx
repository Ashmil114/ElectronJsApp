import {HashRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import MoreDetails from "./components/MoreDetails";
// import LoginRegForm from "./components/LoginRegForm";
import { CookiesProvider } from "react-cookie";
// import Registration from "./components/Registration";
// import AllColleges from "./components/AllColleges";
// import AddColleges from "./components/AddColleges";
import AdminBoard from "./components/AdminBoard";






export default function App() {


  
  return (
    <>
      <CookiesProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Main/>} ></Route>
            <Route path="more/:id" element={<MoreDetails/>} ></Route>
            {/* <Route path="login" element={<LoginRegForm/>}></Route> */}
            {/* <Route path="registration" element={<Registration/>}></Route> */}
            {/* <Route path="allColleges" element={<AllColleges/>}></Route> */}
            {/* <Route path="addCollege" element={<AddColleges/>}></Route> */}
            <Route path="admin/:id" element={<AdminBoard/>} ></Route>
            

            

            
            
            


            
            
            
          </Routes>
        </HashRouter>
      </CookiesProvider>
    </>
  )
}