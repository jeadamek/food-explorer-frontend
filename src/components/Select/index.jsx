import { Container, Option } from "./styles";
import PropTypes from "prop-types";


export function Select({ options, value, ...rest }) {
  return(
    <Container {...rest} value={value}>
      {options.map((option) => (

        option.value == 'default' ? 
          <Option key={option.value} value={option.value} active disabled>
          {option.label}
          </Option>
        :
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
      ))}
    </Container>
  )
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string
}
