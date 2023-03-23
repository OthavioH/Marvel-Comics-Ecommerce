import { Routes, Route, Navigate } from "react-router-dom";
import Comic from "../features/Comic/Comic";
import Home from "../features/Home/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/store" />} />
      <Route path="/store" element={<Home />} />
      <Route path="/store/comic/:id" element={<Comic />} />
    </Routes>
  );
}
