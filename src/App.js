import React from "react";
import UserInput from "./Components/UserInput";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Style.css";
import Input from "./Components/Input";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserInput />} />

          <Route exact path="/Input" element={<Input />} />
        </Routes>
      </BrowserRouter>
      {/* <UserInput /> */}
    </>
  );
}
