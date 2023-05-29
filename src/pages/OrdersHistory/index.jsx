import { useEffect, useState } from "react";

import { Container, ContentMobile, ContentDesktop } from "./styles";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { OrderStatus } from "../../components/OrderStatus";

export function OrdersHistory() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  function getFormattedOrderCode(number) {
    return number.toString().padStart(8, '0');
  }

  function getFormattedOrderItems(items) {
    return items.map(item => `${item.quantity} x ${item.name}`).join(", ");
  }

  function getFormattedDateTime(bdDate) {
    const date = new Date(bdDate);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const formattedDate = `${day}/${month} às ${hours}:${minutes}`;
    return formattedDate;
  }

  useEffect(() => {
    async function fetchOrders() {
      if (user.isAdmin) {
        const response = await api.get("orders/admin");
        setOrders(response.data);
      } else {
        const response = await api.get("orders/");
        setOrders(response.data);
      }
    }

    fetchOrders();
  }, [user]);

  return(
    <Container>
      <Header />

      <main>
        <h1>{user.isAdmin ? "Pedidos" : "Histórico de pedidos"}</h1>
        <div>
          {
            orders.map(order => (
              <ContentMobile key={String(order.id)} isAdmin={user.isAdmin}>
                <span className="code">
                  {getFormattedOrderCode(order.id)}
                </span>
                <OrderStatus 
                  className="status"
                  status={order.order_status} 
                />
                <span className="time">
                  {getFormattedDateTime(order.created_at)}
                </span>
                <p className="details">
                  {getFormattedOrderItems(order.items)}
                </p>
              </ContentMobile>

            ))
          }
        </div>

        <ContentDesktop isAdmin={user.isAdmin}>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map(order => (
                <tr key={String(order.id)}>
                  <td>
                    <OrderStatus status={order.order_status} />
                  </td>
                  <td>
                    {getFormattedOrderCode(order.id)}
                  </td>
                  <td>
                    {getFormattedOrderItems(order.items)}
                  </td>
                  <td>
                    {getFormattedDateTime(order.created_at)}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </ContentDesktop>





      </main>

      <Footer />
    </Container>
  )
}