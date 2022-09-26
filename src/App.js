import Home from "./Pages/HomePage";
import { Route, Routes, HashRouter } from "react-router-dom";
import CommonContainer from "./CommonContainer";
import History from "./Pages/History";
import Chart from "./Pages/ChartPage";
function App() {
  return (
    <>
        <HashRouter>
          <Routes>
            <Route path="/"
              element={<CommonContainer>
                <Home />
              </CommonContainer>} />

              <Route path="/history"
              element={<CommonContainer>
                <History/>
              </CommonContainer>} />

              <Route path="/graph"
              element={<CommonContainer>
              <Chart/>
              </CommonContainer>} />
          </Routes>
        </HashRouter>
    </>
  );
}

export default App;
