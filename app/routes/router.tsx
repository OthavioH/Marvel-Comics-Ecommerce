import { Routes, Route, Navigate } from "react-router-dom";
import Comic from "../features/Comic/Comic";
import Home from "../features/Home/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/store/comic/:id" element={<Comic />} />
      <Route path="/store" element={<Home />} />
      <Route path="/" element={<Navigate to="/store" />} />
    </Routes>
  );
}
