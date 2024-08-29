import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apples from "./pages/Apples";
import Bananas from "./pages/Bananas";
import Oranges from "./pages/Oranges";
import Strawberries from "./pages/Strawberries";
import ErrorMsg from "./pages/ErrorMsg";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/home" element={<Home />} />
                <Route path="/apples" element={<Apples />} />
                <Route path="/bananas" element={<Bananas />} />
                <Route path="/oranges" element={<Oranges />} />
                <Route path="/strawberries" element={<Strawberries />} />
                <Route path="*" element={<ErrorMsg />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
