import { Route, Routes } from "react-router-dom";

import * as Page from "../pages";

export const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Page.Home />} />
      <Route path="/games" element={<Page.Games />} />
    </Routes>
  )
}