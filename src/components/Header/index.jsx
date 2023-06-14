import { useState, useEffect  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { api } from '../../services/api';

import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';

import { Container, Brand, Hamburguer, MobileOrder, NavHeaderUser, NavHeaderAdmin, NavButton, Logout } from "./styles";

import { Input } from '../Input';
import { Label } from '../Label';
import { Receipt } from "../../assets/icons/Receipt";

import { GoSearch } from "react-icons/go";
import { FiMenu, FiX, FiLogOut, FiUser } from "react-icons/fi";

import logoImg from "../../assets/logo-user.svg";
import logoImgAdmin from "../../assets/logo-admin-desktop.svg"; 
import logoImgAdminMobile from "../../assets/logo-admin-mobile.svg"; 

export function Header({ onSearch }) {
  const { signOut, user } = useAuth();
  const { cartItems, cleanCart } = useCart();
  
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [newOrders, setNewOrders] = useState([]);
  
  const navigate = useNavigate();

  const mobile = window.innerWidth <= 768;

  function handleSignOut() {
    cleanCart();
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
    onSearch && onSearch(value);
  }

  function handleClearSearch() {
    setSearch("");  
    onSearch && onSearch("");
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      handleModal();
      navigate(`/?search=${search}`);
    }
  }

  useEffect(() => {
    document.body.classList.remove('no-scroll');
  }, []);

  useEffect(() => {
      async function fetchOrders() {
        const response = await api.get("orders/admin");
        const data = response.data;
  
        const pendingOrders = data.filter(order => {
          if ( order.order_status === "pendente") {
            return order;
          }
        })
  
        setNewOrders(pendingOrders)
      }
  
      if (user.isAdmin) {
        fetchOrders();
      }

  }, [user]);

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
          <Label 
            title="Buscar pedido por código"
            htmlFor="search" 
            className="sr-only"
          />
          <Input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            icon={GoSearch}
            className="input-header"
            value={search}
            search
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            onClear={handleClearSearch}
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
                <li><Link to="/profile">Meu perfil</Link></li>
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
        {
        user.isAdmin ? (
          <>
            <Link to="/order-history"><Receipt size={26} /></Link>
            <div><span>{ newOrders.length }</span></div>
          </>
        ) : (
          <>
            <Link to="/checkout"><Receipt size={26} /></Link>
            <div><span>{ cartItems.length }</span></div>
          </>
        )
        }

      </MobileOrder>
      
      <Label 
        title="Busque por pratos ou ingredientes"
        htmlFor="search" 
        className="sr-only"
      />
      <Input 
        placeholder="Busque por pratos ou ingredientes" 
        icon={GoSearch} 
        className="desktop-search" 
        value={search}
        search
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        onClear={handleClearSearch}
      />
      
      {/* DESKTOP NAVIGATION */}
      {
        user.isAdmin ?
          <NavHeaderAdmin>
            <Link to="/new">Novo prato</Link>
            <NavButton to="/order-history" className="primary">
              <Receipt size={26}/>
              Pedidos({ newOrders.length })
            </NavButton>
          </NavHeaderAdmin>
        :
          <NavHeaderUser>
            <NavButton to="/checkout" className="primary">
              <Receipt size={26}/>
              Pedido({ cartItems.length })
            </NavButton>
            <div className="dropdown">
              <button>
                <FiUser size={32} />
              </button>
              <div className="dropdown-content">
                <Link to="/profile">Meu perfil</Link>
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
  onSearch: PropTypes.func
};