import PropTypes from 'prop-types';

import { Container, Brand, Hamburguer, MobileOrder, ButtonHeader, Logout } from "./styles";
import { Input } from '../Input';
import { Receipt } from "../../assets/icons/Receipt";

import { GoSearch } from "react-icons/go";
import { FiMenu, FiX, FiLogOut } from "react-icons/fi";

import logoImg from "../../assets/logo-user.svg";

export function Header({ orders }) {

  function handleModal() {
    document.getElementById('nav-mobile').classList.toggle('active');
  }

  return(
    <Container>
      
      <Hamburguer id="hamburguer" onClick={handleModal}>
        <FiMenu size={26}/>
      </Hamburguer>


      <div id="nav-mobile">
        <header>
          <FiX size={26} onClick={handleModal}/>
          Menu
        </header>

        <nav>
          <Input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            icon={GoSearch}
            className="input-header"
          />
          <ul>
            <li><a>Historico de Pedidos</a></li>
            <li><a>Meus favoritos</a></li>
            <li><a>Meu perfil</a></li>
            <li><a>Sair</a></li>
          </ul>
        </nav>
      </div>

      <Brand>
        <img src={logoImg} alt="Logo Food Explorer"/>
      </Brand>

      <MobileOrder>
        <Receipt size={26} />
        <div><span>{ orders ? orders : 0 }</span></div>
      </MobileOrder>

      <Input placeholder="Busque por pratos ou ingredientes" icon={GoSearch} className="desktop-search" />

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