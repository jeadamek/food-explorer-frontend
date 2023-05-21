import { useState, useEffect  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuth } from '../../hooks/auth';

import { Container, Brand, Hamburguer, MobileOrder, NavHeader, Logout } from "./styles";

import { Input } from '../Input';
import { Receipt } from "../../assets/icons/Receipt";

import { GoSearch } from "react-icons/go";
import { FiMenu, FiX, FiLogOut } from "react-icons/fi";

import logoImg from "../../assets/logo-user.svg";
import logoImgAdmin from "../../assets/logo-admin-desktop.svg"; 
import logoImgAdminMobile from "../../assets/logo-admin-mobile.svg"; 

export function Header({ orders }) {
  const { signOut, user } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const mobile = window.innerWidth <= 768;

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function handleModal() {
    document.getElementById('nav-mobile').classList.toggle('active');
    handleToggleMenu();
  }

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('no-scroll', !isMenuOpen);
  }
  
  useEffect(() => {
    document.body.classList.remove('no-scroll');
  }, []);

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

          {
            user.isAdmin ?
              <ul>
                <li><Link to="/new">Novo Prato</Link></li>
                <li><Link>Pedidos</Link></li>
                <li><Link to={"/"} onClick={handleSignOut}>Sair</Link></li>
              </ul>
            :
              <ul>
                <li><Link>Meu perfil</Link></li>
                <li><Link>Meus favoritos</Link></li>
                <li><Link>Historico de Pedidos</Link></li>
                <li><Link to={"/"} onClick={handleSignOut}>Sair</Link></li>
              </ul>
          }

        </nav>
      </div>

      <Hamburguer id="hamburguer" onClick={() => {
          handleModal()
        }}
      >
        <FiMenu size={26}/>
      </Hamburguer>

      <Brand to="/">
        {
          user.isAdmin ? (
            mobile ? (
              <img src={logoImgAdminMobile} alt="Logo Food Explorer"/>
            ) : (
              <img src={logoImgAdmin} alt="Logo Food Explorer"/>
            )
          ) : (
            <img src={logoImg} alt="Logo Food Explorer"/>
          )
        }
      </Brand>

      <MobileOrder>
        <Receipt size={26} />
        <div><span>{ orders ? orders : 0 }</span></div>
      </MobileOrder>

      <Input placeholder="Busque por pratos ou ingredientes" icon={GoSearch} className="desktop-search" />
      
      {
        user.isAdmin ?
          <NavHeader to="/new" className="primary">
            Novo prato
          </NavHeader>
        :
          <NavHeader className="primary">
            <Receipt size={26}/>
            Pedidos({ orders ? orders : 0 })
          </NavHeader>
      }



      <Logout onClick={handleSignOut}>
        <FiLogOut size={26} />
      </Logout>
    </Container>
  )
}

Header.propTypes = {
  orders: PropTypes.number
};