import { useEffect, useState } from "react";

import { Container, ContentMobile, ContentDesktop } from "./styles";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function OrdersHistory() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  function getFormattedOrderCode(number) {
    return number.toString().padStart(8, '0')
  }

  function getFormattedOrderItems(items) {
    return items.map(item => `${item.quantity} x ${item.name}`).join(", ")
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
              <ContentMobile key={String(order.id)}>
                <span className="code">
                  {getFormattedOrderCode(order.id)}
                </span>
                <span className="status">
                  {order.order_status}
                </span>
                <span className="time">
                  20/05 às 18h00
                </span>
                <p className="details">
                  {getFormattedOrderItems(order.items)}
                </p>
              </ContentMobile>

            ))
          }
        </div>

        <ContentDesktop>
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
                  <td>{order.order_status}</td>
                  <td>{getFormattedOrderCode(order.id)}</td>
                  <td>{getFormattedOrderItems(order.items)}</td>
                  <td>20/05 às 18h00</td>
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