import { Container } from "./styles";
import PropTypes from 'prop-types';


export function Ingredient({title}) {
  return(
    <Container>
      {title}
    </Container>
  )
}

Ingredient.propTypes = {
  title: PropTypes.string.isRequired,
}