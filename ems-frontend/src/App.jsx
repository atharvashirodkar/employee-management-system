import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ListEmployee from "./pages/ListEmployee"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<ListEmployee />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
