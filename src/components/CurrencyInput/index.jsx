import { Container, Input } from "./styles";
import PropTypes from "prop-types";

export function CurrencyInput({ value, ...rest }) {
  return(
    <Container>
      <Input
        autoComplete="off"
        prefix="R$ "
        decimalsLimit={2}
        decimalSeparator=","
        groupSeparator="."
        allowNegativeValue={false}
        value={value}
        {...rest}
      />
    </Container>
  )
}

CurrencyInput.propTypes = {
  value: PropTypes.any
}