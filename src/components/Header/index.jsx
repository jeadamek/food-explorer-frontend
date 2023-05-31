import { useState, useEffect  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuth } from '../../hooks/auth';

import { Container, Brand, Hamburguer, MobileOrder, NavHeaderUser, NavHeaderAdmin, NavButton, Logout } from "./styles";

import { Input } from '../Input';
import { Receipt } from "../../assets/icons/Receipt";

import { GoSearch } from "react-icons/go";
import { FiMenu, FiX, FiLogOut, FiUser } from "react-icons/fi";

import logoImg from "../../assets/logo-user.svg";
import logoImgAdmin from "../../assets/logo-admin-desktop.svg"; 
import logoImgAdminMobile from "../../assets/logo-admin-mobile.svg"; 

export function Header({ orders, onSearch }) {
  const { signOut, user } = useAuth();
  
  const [search, setSearch] = useState("");
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
  
  function handleSearch(event) {
    const value = event.target.value;
    setSearch(value);
    onSearch(value);
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      handleModal();
    }
  }

  useEffect(() => {
    document.body.classList.remove('no-scroll');
  }, []);

  return(
    <Container>
      
      {/* MOBILE NAVIGATION */}
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
            value={search}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />

          {
            user.isAdmin ?
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/new">Novo Prato</Link></li>
                <li><Link to="/order-history">Pedidos</Link></li>
                <li><Link to="/" onClick={handleSignOut}>Sair</Link></li>
              </ul>
            :
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link>Meu perfil</Link></li>
                <li><Link to="/favorites">Meus favoritos</Link></li>
                <li><Link to="/order-history">Historico de Pedidos</Link></li>
                <li><Link to="/" onClick={handleSignOut}>Sair</Link></li>
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
        <Link to="/order"><Receipt size={26} /></Link>
        <div><span>{ orders ? orders : 0 }</span></div>
      </MobileOrder>

      <Input 
        placeholder="Busque por pratos ou ingredientes" 
        icon={GoSearch} 
        className="desktop-search" 
        value={search}
        onChange={handleSearch}
      />
      
      {/* DESKTOP NAVIGATION */}
      {
        user.isAdmin ?
          <NavHeaderAdmin>
            <Link to="/new">Novo prato</Link>
            <NavButton to="/order-history" className="primary">
              <Receipt size={26}/>
              Pedidos
            </NavButton>
          </NavHeaderAdmin>
        :
          <NavHeaderUser>
            <NavButton to="/order" className="primary">
              <Receipt size={26}/>
              Pedido({ orders ? orders : 0 })
            </NavButton>
            <div className="dropdown">
              <button>
                <FiUser size={32} />
              </button>
              <div className="dropdown-content">
                <Link>Meu perfil</Link>
                <Link to="/favorites">Meus favoritos</Link>
                <Link to="/order-history">Historico de Pedidos</Link>
              </div>
            </div>
          </NavHeaderUser>
      }



      <Logout onClick={handleSignOut}>
        <FiLogOut size={26} />
      </Logout>
    </Container>
  )
}

Header.propTypes = {
  orders: PropTypes.number,
  onSearch: PropTypes.func
};