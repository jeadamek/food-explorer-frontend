import PropTypes from 'prop-types';

import { Container, Brand, Hamburguer, MobileOrder, ButtonHeader, Logout } from "./styles";
import { Input } from '../Input';
import { Receipt } from "../../assets/icons/Receipt";

import { GoSearch } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

import logoImg from "../../assets/logo-user.svg";

export function Header({ orders }) {
  return(
    <Container>
      <Hamburguer>
        <FiMenu size={26}/>
      </Hamburguer>
      <Brand>
        <img src={logoImg} alt="Logo Food Explorer"/>
      </Brand>

      <MobileOrder>
        <Receipt size={26} />
        <div><span>{ orders ? orders : 0 }</span></div>
      </MobileOrder>

      <Input placeholder="Busque por pratos ou ingredientes" icon={GoSearch} className="input-header" />

      <ButtonHeader className="primary">
        <Receipt size={26}/>
        Pedidos({ orders ? orders : 0 })
      </ButtonHeader>

      {/* <ButtonHeader className="primary">
        Novo prato
      </ButtonHeader> */}

      <Logout>
        <FiLogOut size={24} />
      </Logout>
    </Container>
  )
}

Header.propTypes = {
  orders: PropTypes.number
};