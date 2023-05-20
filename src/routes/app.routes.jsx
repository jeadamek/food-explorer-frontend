import { Routes, Route } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import { Home } from '../pages/Home';
import { EditDish } from '../pages/EditDish';
import { AddDish } from '../pages/AddDish';
import { DishDetails } from '../pages/DishDetails';

export function AppRoutes() {

  const { user } = useAuth();
  return(
    <Routes>
      {/* ROUTES ACCESS JUST BY ADMIN  */}
      {user.isAdmin &&  <Route path="/new" element={<AddDish />} />}
      {user.isAdmin &&  <Route path="/edit/:id" element={<EditDish />} />}

      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<DishDetails />} />
    </Routes>
  )
}