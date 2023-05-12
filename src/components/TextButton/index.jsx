import { Container } from "./styles";
import PropTypes from 'prop-types';

export function TextButton({title, icon}) {
  const altImage = `icone ${title}`
  return(
    <Container>
      {icon && <img src={icon} alt={altImage} />}
      <span>{title}</span>
    </Container>
  ) 
}

TextButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
};