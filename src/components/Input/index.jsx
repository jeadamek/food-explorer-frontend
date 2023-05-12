import { Container } from "./styles";
import PropTypes from "prop-types";

export function Input({ icon: Icon, className , ...rest }) {
  return(
    <Container className={className}>
      <input {...rest} />
      {Icon && <Icon size={20} />}
    </Container>
  )
}

Input.propTypes = {
  icon: PropTypes.any,
  rest: PropTypes.any,
  className: PropTypes.string
}