import { Routes, Route } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import { Home } from '../pages/Home';
import { Checkout } from '../pages/Checkout';
import { AddDish } from '../pages/AddDish';
import { Profile } from '../pages/Profile';
import { EditDish } from '../pages/EditDish';
import { Favorites } from '../pages/Favorites';
import { DishDetails } from '../pages/DishDetails';
import { OrdersHistory } from '../pages/OrdersHistory';

export function AppRoutes() {

  const { user } = useAuth();
  return(
    <Routes>
      {/* ROUTES ACCESS JUST BY ADMIN  */}
      {user.isAdmin && <Route path="/new" element={<AddDish />} />}
      {user.isAdmin && <Route path="/edit/:id" element={<EditDish />} />}

      {/* ROUTES ACCESS JUST BY CLIENT  */}
      {!user.isAdmin && <Route path="/checkout" element={<Checkout />} />}
      {!user.isAdmin && <Route path="/profile" element={<Profile />} />}
      {!user.isAdmin && <Route path="/favorites" element={<Favorites />} />}


      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<DishDetails />} />
      <Route path="/order-history" element={<OrdersHistory />} />
    </Routes>
  )
}