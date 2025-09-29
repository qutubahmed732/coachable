import MainPage from "./Mainpage.jsx";
import Thankyoupage from "./Thankyoupage.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
        <HashRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/thank-you-page" element={<Thankyoupage />}></Route>
          </Routes>
        </HashRouter>
    </>
  )
}

export default App;
