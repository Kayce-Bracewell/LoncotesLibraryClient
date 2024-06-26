import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialList from "./components/tickets/MaterialList";
import MaterialDetails from "./components/tickets/MaterialDetails";
import CreateMaterial from "./components/tickets/CreateMaterial";
import Patrons from "./components/tickets/Patrons";
import PatronDetails from "./components/tickets/PatronDetails";
import Checkouts from "./components/tickets/Checkouts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="materials">
          <Route index element={<MaterialList />} />
          <Route path=":id" element={<MaterialDetails />} />
          <Route path="create" element={<CreateMaterial />} />
        </Route>
        <Route path="patrons">
          <Route index element={<Patrons />}/>
          <Route path=":id" element={<PatronDetails />}/>
        </Route>
        <Route path="checkouts">
          <Route index element={<Checkouts />}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);
