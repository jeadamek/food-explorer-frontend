import { Container } from "./styles";
import PropTypes from 'prop-types';

export function TextButton({ title, icon: Icon, ...rest }) {
  return(
    <Container {...rest}>
      {Icon && <Icon size={22}/>}
      <span>{title}</span>
    </Container>
  ) 
}

TextButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
};