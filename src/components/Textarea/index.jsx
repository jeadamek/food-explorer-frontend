import { Container } from "./styles";
import PropTypes from "prop-types";

export function Textarea({ value, ...rest}) {
  return(
    <Container value={value} {...rest} />
  )
}

Textarea.propTypes = {
  value: PropTypes.string
}