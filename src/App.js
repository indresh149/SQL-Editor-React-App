import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SQLEditor from "./pages/SQLEditor";
import TabelsPage from "./pages/tabelsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sql-editor" element={<SQLEditor />} />
          <Route path="/tables" element={<TabelsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
