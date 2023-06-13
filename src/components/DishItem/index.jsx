import { Container } from './styles';
import { FiPlus, FiX } from 'react-icons/fi';
import PropTypes from 'prop-types';

export function DishItem({ isNew, value, size, onClick, validation, ...rest}) {
  return(
    <Container className={validation} isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        size={size && size}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
      >
        { isNew ? <FiPlus /> : <FiX /> }
      </button>
    </Container>
  )
}

DishItem.propTypes = {
  isNew: PropTypes.bool,
  value: PropTypes.string,
  validation: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number
}