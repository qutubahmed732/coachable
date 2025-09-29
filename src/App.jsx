import MainPage from "../src/components/Mainpage.jsx";
import Thankyoupage from "../src/components/Thankyoupage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/thank-you-page" element={<Thankyoupage />}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
