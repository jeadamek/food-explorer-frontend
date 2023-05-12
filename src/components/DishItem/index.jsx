import { Container } from './styles';
import { FiPlus, FiX } from 'react-icons/fi';
import PropTypes from 'prop-types';

export function DishItem({ isNew, value, onClick, ...rest}) {
  return(
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
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
  onClick: PropTypes.func,
}