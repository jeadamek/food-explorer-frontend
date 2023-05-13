import { Container } from "./styles";
import PropTypes from "prop-types";

export function Label({ title, ...rest }) {
  return(
    <Container {...rest}>
      {title}
    </Container>
  )
}

Label.propTypes = {
  title: PropTypes.string.isRequired
}

