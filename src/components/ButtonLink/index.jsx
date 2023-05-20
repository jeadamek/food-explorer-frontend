import { Container } from "./styles"
import { Loading } from "../Loading";
import PropTypes from 'prop-types';

export function ButtonLink({ title, loading=false, icon: Icon, ...rest}) {
  return(
    <Container 
      disabled={loading}
      {...rest}
      >
      {Icon && <Icon size={22} />}
      {loading ? <Loading /> : title}
    </Container>
  )
}

ButtonLink.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.any,
  rest: PropTypes.any
};