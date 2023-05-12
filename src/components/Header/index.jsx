import PropTypes from 'prop-types';

import { Container, Brand, Hamburguer, MobileOrder, ButtonHeader, Logout } from "./styles";
import { Input } from '../Input';
import { GoSearch } from "react-icons/go";

import logoImg from "../../assets/logo-user.svg";
import receipt from "../../assets/icons/receipt.svg";
import logout from "../../assets/icons/logout.svg";
import menuHamburguer from "../../assets/icons/menu.svg";

export function Header({ orders }) {
  return(
    <Container>
      <Hamburguer>
        <img src={menuHamburguer} alt="Menu"/>
      </Hamburguer>
      <Brand>
        <img src={logoImg} alt="Logo Food Explorer"/>
      </Brand>

      <MobileOrder>
        <img src={receipt} alt="Icone Pedidos" />
        <div><span>{orders ? orders : 0}</span></div>
      </MobileOrder>

      <Input placeholder="Busque por pratos ou ingredientes" icon={GoSearch} className="input-header" />

      {/* <ButtonHeader className="primary">
        <img src={receipt} alt="Icone Pedidos" />
        Pedidos({orders})
      </ButtonHeader> */}

      <ButtonHeader className="primary">
        Novo prato
      </ButtonHeader>

      <Logout>
        <img src={logout} alt="Sair do aplicativo" />
      </Logout>
    </Container>
  )
}

Header.propTypes = {
  orders: PropTypes.number
};