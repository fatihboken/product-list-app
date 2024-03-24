
import "./App.css";
import Header from "./componentss/Header";
import ProductCard from "./componentss/Product-card";
import "./app.scss";
import { useState } from "react";

function App() {
  const [name, setName] = useState("all");
  return (
    <div className="app">
      <Header setName={setName} />
      <ProductCard name={name} />
    </div>
  );
}

export default App;
