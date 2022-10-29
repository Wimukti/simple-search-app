import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import UserProfile from "./UserProfile";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:id" element={<UserProfile />} />
            </Routes>
        </BrowserRouter>
    );
}