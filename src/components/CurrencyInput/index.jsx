import { Container, Input } from "./styles";
import PropTypes from "prop-types";

export function CurrencyInput({ value, ...rest }) {
  return(
    <Container>
      <Input
        prefix="R$ "
        decimalsLimit={2}
        decimalSeparator=","
        groupSeparator="."
        value={value}
        {...rest}
      />
    </Container>
  )
}

CurrencyInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number
}