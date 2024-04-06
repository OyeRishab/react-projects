import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import CounterApp from "@/pages/CounterApp/CounterApp";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<CounterApp />} />
    </Routes>
  );
}

export default AppRoutes;
