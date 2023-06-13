import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Container, OrdersHeader, ContentMobile, ContentDesktop } from "./styles";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { OrderStatus } from "../../components/OrderStatus";

import { FiSearch } from "react-icons/fi";
import { Input } from "../../components/Input";

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

  async function handleOrderUpdate(option, orderId) {
    const status = option.value;
    const orderCode = getFormattedOrderCode(orderId);

    await api.put("/orders/", {id: orderId, order_status: status})
      .then(() => {
        toast.success(`Pedido ${orderCode} atualizado com sucesso!`)

        setTimeout(() => {
          window.location.reload();
        }, 4000);
      })
      .catch(error => {
        if(error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Não foi possível atualizar o status");
        }
      });
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
        {
          user.isAdmin 
          ? (
            <OrdersHeader>
              <h1>{"Pedidos"}</h1>

              <div className="input-wrapper">
                <label 
                  htmlFor="search" 
                  className="sr-only"
                >
                  Buscar pedido por código
                </label>
                {/* <FiSearch />
                <input
                  id="search"
                  type="search"
                  name="search"
                  placeholder="Buscar pedido por código"
                /> */}

                <Input 
                  id="search"
                  name="search"
                  type="search"
                  placeholder="Buscar pedido por código"
                  icon={FiSearch}
                />

              </div>
            </OrdersHeader>
          ) : (
            <h1>{"Histórico de pedidos"}</h1>
          )
        }
        <div className="content-wrapper">
          {
            orders.map(order => (
              <ContentMobile key={String(order.id)} isAdmin={user.isAdmin}>
                <span className="code">
                  {getFormattedOrderCode(order.id)}
                </span>
                <OrderStatus 
                  className="status"
                  status={order.order_status} 
                  onStatusChange={(newStatus) => handleOrderUpdate(newStatus, order.id)}
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
                    <OrderStatus 
                      status={order.order_status} 
                      onStatusChange={(newStatus) => handleOrderUpdate(newStatus, order.id)} 
                    />
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