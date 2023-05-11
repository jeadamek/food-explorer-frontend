import { Container } from "./styles";
import PropTypes from 'prop-types';


export function TagIngredient({title}) {
  return(
    <Container>
      {title}
    </Container>
  )
}

TagIngredient.propTypes = {
  title: PropTypes.string.isRequired,
}