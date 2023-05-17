import { createContext, useContext, useState } from "react";
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
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível entrar.");
      }
    }
  }

  return(
    <AuthContext.Provider value={{ signIn, user: data.user }}>
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