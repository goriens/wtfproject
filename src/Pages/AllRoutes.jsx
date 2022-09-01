import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { SingleGym } from "./SingleGym";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SingleGym />} />
      </Routes>
    </>
  );
};
