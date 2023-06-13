import { Container } from "./styles";

import { FiX } from "react-icons/fi";
import PropTypes from "prop-types";

export function Input({ icon: Icon, className, value, onClear, search=false, ...rest }) {
  return(
    <Container className={className}>
      {Icon && <Icon size={20} />}
      <input {...rest} 
        value={value}
        className={Icon && "hasIcon"} 
        autoComplete="off" 
      />
      {
        search && value && (
          <button onClick={onClear}>
            <FiX size={24} />
          </button>
        )
      }
    </Container>
  )
}

Input.propTypes = {
  icon: PropTypes.any,
  onClear: PropTypes.func,
  value: PropTypes.any,
  search: PropTypes.bool,
  className: PropTypes.string
}