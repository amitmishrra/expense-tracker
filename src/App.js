import Home from "./Pages/HomePage";
import { Route, Routes, HashRouter } from "react-router-dom";
import CommonContainer from "./CommonContainer";
import History from "./Pages/History";
import Chart from "./Pages/ChartPage";
import Borrow from "./Pages/BorrowPage";
import Login from "./Pages/LoginPage";
let usersData = JSON.parse(localStorage.getItem("usersData"));
function App() {
  return (
    <>
        <HashRouter>
          <Routes>
            <Route path="/"
              element={<CommonContainer>
               {
                usersData ? 
                <Home/> : 
                <Login/>
               }
              </CommonContainer>} />

              <Route path="/history"
              element={<CommonContainer>
                <History/>
              </CommonContainer>} />

              <Route path="/graph"
              element={<CommonContainer>
              <Chart/>
              </CommonContainer>} />

              <Route path="/borrow"
              element={<CommonContainer>
              <Borrow/>
              </CommonContainer>} />
          </Routes>
        </HashRouter>
    </>
  );
}

export default App;