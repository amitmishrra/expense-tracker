import Home from "./Pages/HomePage";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import CommonContainer from "./CommonContainer";
import store from './Store/Store'
import {Provider} from "react-redux"
function App() {
  return (
    <>
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path="/"
              element={<CommonContainer>
                <Home />
              </CommonContainer>} />

          </Routes>
        </HashRouter>
      </Provider>
    </>
  );
}

export default App;
