import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BestSellingBooks } from "../Pages/BestSellingBooks";
export const RoutesHandler = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BestSellingBooks />}/>
          <Route path="/:id" element={<BestSellingBooks />}/>

        </Routes>
      </BrowserRouter>
    </>
  );
};
