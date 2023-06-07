import { Routes, Route } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import { Home } from '../pages/Home';
import { Order } from '../pages/Order';
import { AddDish } from '../pages/AddDish';
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
      {!user.isAdmin && <Route path="/favorites" element={<Favorites />} />}
      {!user.isAdmin && <Route path="/order" element={<Order />} />}



      <Route path="/" element={<Home />} />
      <Route path="/order-history" element={<OrdersHistory />} />
      <Route path="/details/:id" element={<DishDetails />} />
    </Routes>
  )
}