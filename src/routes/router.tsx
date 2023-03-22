import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../features/Home/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/store" />} />
      <Route path="/store" element={<Home />} />
    </Routes>
  );
}
