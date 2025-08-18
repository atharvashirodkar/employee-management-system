import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ListEmployee from "./pages/ListEmployee"
import AddUpdateEmployee from "./pages/AddUpdateEmployee"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<ListEmployee />} />
        <Route path="/add-employee" element={<AddUpdateEmployee />} />
        <Route path="/update-employee/:id" element={<AddUpdateEmployee />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
