import { UserContent } from "./style";
import PropTypes from "prop-types";

import { useAuth } from "../../hooks/auth";

import { Select } from "../../components/Select";

export function OrderStatus({ status, ...rest}) {
  const { user } = useAuth();

  const options = [
    { value: 'pendente', label: 'Pendente', color: 'red'},
    { value: 'preparando', label: 'Preparando', color: 'orange'},
    { value: 'pronto', label: 'Pronto', color: 'green'},
    { value: 'entregue', label: 'Entregue', color: 'blue'},
  ];

  function capitalizeFirstLetter(str) {
    return str.replace(/^\w/, char => char.toUpperCase());
  }
   
  return(
    <>
      {
        user.isAdmin ?
         // select
         <Select options={options} value={status} {...rest} />
        :
         // dado normal
         <UserContent {...rest} status={status}>
          {capitalizeFirstLetter(status)}
         </UserContent>
      }
    </>
  )
}

OrderStatus.propTypes = {
  status: PropTypes.any
}
