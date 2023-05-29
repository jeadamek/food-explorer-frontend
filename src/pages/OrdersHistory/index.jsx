import { useEffect, useState } from "react";

import { Container, ContentMobile, ContentDesktop } from "./styles";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function OrdersHistory() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  function formatOrderCode(number) {
    return number.toString().padStart(8, '0')
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
        <h1>Histórico de pedidos</h1>
        
          {
            orders.map(order => (
              <ContentMobile key={String(order.id)}>
                <span className="code">
                  {formatOrderCode(order.id)}
                </span>
                <span className="status">{order.order_status}</span>
                <span className="time">20/05 às 18h00</span>
                <p className="details">
                  {order.items.map(item => {
                    return `${item.quantity} x item, `
                  })}
                </p>
              </ContentMobile>

            ))
          }
          

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
            <tr>
              <td>Pendente</td>
              <td>00000004</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 às 18h00</td>
            </tr>
            <tr>
              <td>Pendente</td>
              <td>00000004</td>
              <td>1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
              <td>20/05 às 18h00</td>
            </tr>
          </tbody>
        </ContentDesktop>





      </main>

      <Footer />
    </Container>
  )
}