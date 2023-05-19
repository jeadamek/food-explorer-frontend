import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Container, Brand, Hamburguer, MobileOrder, NavHeader, Logout } from "./styles";

import { Input } from '../Input';
import { Receipt } from "../../assets/icons/Receipt";

import { GoSearch } from "react-icons/go";
import { FiMenu, FiX, FiLogOut } from "react-icons/fi";

import logoImg from "../../assets/logo-user.svg";

export function Header({ orders }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function handleModal() {
    document.getElementById('nav-mobile').classList.toggle('active');
  }

  return(
    <Container>
      
      <div id="nav-mobile">
        <header>
          <FiX size={26} onClick={() => {
              handleModal()
            }}
          />
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
            <li><Link to="/new">Novo Prato</Link></li>
            <li><Link>Pedidos</Link></li>
            <li><Link onClick={handleSignOut}>Sair</Link></li>
          </ul>

          {/* <ul>
            <li><Link>Historico de Pedidos</Link></li>
            <li><Link>Meus favoritos</Link></li>
            <li><Link>Meu perfil</Link></li>
            <li><Link onClick={handleSignOut}>Sair</Link></li>
          </ul> */}
        </nav>
      </div>

      <Hamburguer id="hamburguer" onClick={() => {
          handleModal()
        }}
      >
        <FiMenu size={26}/>
      </Hamburguer>

      <Brand to="/">
        <img src={logoImg} alt="Logo Food Explorer"/>
      </Brand>

      <MobileOrder>
        <Receipt size={26} />
        <div><span>{ orders ? orders : 0 }</span></div>
      </MobileOrder>

      <Input placeholder="Busque por pratos ou ingredientes" icon={GoSearch} className="desktop-search" />

      {/* <NavHeader className="primary">
        <Receipt size={26}/>
        Pedidos({ orders ? orders : 0 })
      </NavHeader> */}

      <NavHeader to="/new" className="primary">
        Novo prato
      </NavHeader>

      <Logout onClick={handleSignOut}>
        <FiLogOut size={26} />
      </Logout>
    </Container>
  )
}

Header.propTypes = {
  orders: PropTypes.number
};