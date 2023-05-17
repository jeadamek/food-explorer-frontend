import { Container } from "./styles"
import { Loading } from "../Loading";
import PropTypes from 'prop-types';

export function Button({ title, loading=false, icon: Icon, ...rest}) {
  return(
    <Container 
      type="button"
      disabled={loading}
      {...rest}
      >
      {Icon && <Icon size={22} />}
      {loading ? <Loading /> : title}
    </Container>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.any,
  rest: PropTypes.any
};