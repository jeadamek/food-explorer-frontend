import { Container, Option } from "./styles";
import PropTypes from "prop-types";


export function Select({ options, ...rest }) {
  return(
    <Container {...rest} defaultValue={'default'}>
      {options.map((option) => (

        option.value == 'default' ? 
          <Option key={option.value} value={option.value} disabled>
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
  options: PropTypes.array.isRequired
}
