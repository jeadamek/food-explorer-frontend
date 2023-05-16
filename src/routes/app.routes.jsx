import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { EditDish } from '../pages/EditDish';
import { AddDish } from '../pages/AddDish';
import { DishDetails } from '../pages/DishDetails';

export function AppRoutes() {
  return(
    <Routes>
      {/* TODO: Separar rotas admin e cliente */}
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<AddDish />} />
      <Route path="/edit/:id" element={<EditDish />} />
      <Route path="/details/:id" element={<DishDetails />} />
    </Routes>
  )
}