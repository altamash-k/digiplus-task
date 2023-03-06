import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import View from "./components/users/View";
import Edit from "./components/users/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/view/:id' element={<View/>} />
          <Route path='/edit/:id' element={<Edit/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;