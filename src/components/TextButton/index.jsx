import { Container } from "./styles";
import PropTypes from 'prop-types';

export function TextButton({title, icon}) {
  return(
    <Container>
      {icon && <img src={icon} alt="icone ${title}" />}
      <span>{title}</span>
    </Container>
  ) 
}

TextButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
};