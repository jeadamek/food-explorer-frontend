import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });

    } catch (error) {
      if(error.response) {
        toast.error(error.response.data.message,  { autoClose: 3000 });
      } else {
        toast.error("Não foi possível entrar. Tente novamente mais tarde.",  { autoClose: 3000 });
      }
      return error;
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:cart");  

    setData({});
  }

  async function updateProfile({ user }) {
    try {
      await api.put("/users", user);

      // update localStorage with new information
      user.password = '';
      user.old_passord = '';
      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

      // update data
      setData({
        user,
        token: data.token
      });

      toast.success("Perfil Atualizado");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message,  { autoClose: 3000 });
        return error.response.data.message;
      } else {
        toast.error("Não foi possível atualizar o perfil. Tente novamente mais tarde.",  { autoClose: 3000 });
        return "server error";
      }
    }
  }

  useEffect(() => {
    const token =  localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }

  },[]);

  return(
    <AuthContext.Provider value={{ 
      signIn,
      signOut,
      updateProfile,
      user: data.user
    }}
    >
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.object
}

export { AuthProvider, useAuth };