import { Container } from "./styles"
import PropTypes from 'prop-types';

export function Button({ title, loading=false, icon, ...rest}) {
  return(
    <Container 
      type="button"
      disabled={loading}
      {...rest}
      >
      {icon && <img src={icon} />}
      {loading ? "Carregando" : title}
    </Container>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.any,
  rest: PropTypes.any
};