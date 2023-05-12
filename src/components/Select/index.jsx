import { Container, Option } from "./styles";
import PropTypes from "prop-types";


export function Select({ options, ...rest }) {
  return(
    <Container {...rest}>
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
        <Option value="empty" disabled selected>Selecione uma opção</Option>
    </Container>
  )
}

Select.propTypes = {
  options: PropTypes.array.isRequired
}
