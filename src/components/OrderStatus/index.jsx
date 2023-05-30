import { UserContent, Select } from "./style";
import PropTypes from "prop-types";

import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";

export function OrderStatus({ status, ...rest}) {
  const { user } = useAuth();

  const options = [
    { value: 'pendente', label: 'Pendente', color: '#AB222E'},
    { value: 'preparando', label: 'Preparando', color: '#FBA94C'},
    { value: 'pronto', label: 'Pronto', color: '#04D361'},
    { value: 'entregue', label: 'Entregue', color: '#82F3FF'},
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  function handleToggleOptions() {
    setIsOpen(!isOpen);
  }

  function capitalizeFirstLetter(str) {
    return str.replace(/^\w/, char => char.toUpperCase());
  }

  function handleSelectedOption(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  useEffect(() => {
    const initialOption = options.find((option) => option.value === status);
    if (initialOption) {
      setSelectedOption(initialOption);
    }
  }, [status])
   
  return(
    <>
      {
        user.isAdmin ?
          <Select 
            onClick={handleToggleOptions}
            {...rest} 
          >
            {
              selectedOption && (
                <div className="selected">
                  <span className="dot" style={{ backgroundColor: selectedOption.color }}></span>
                  <span className="label">{selectedOption.label}</span>
                </div>
              )
            }
            
            
            { isOpen && (
              <div className="options">
                {options.map((option) => (
                  <div className="option" key={option.value} onClick={() => handleSelectedOption(option)}>
                    <span className="dot" style={{ backgroundColor: option.color }}></span>
                    <span className="label">{option.label}</span>
                  </div>
                ))}
              </div>
            )}
          </Select>
        :
          <UserContent {...rest} status={status}>
            {capitalizeFirstLetter(status)}
          </UserContent>
      }
    </>
  )
}

OrderStatus.propTypes = {
  status: PropTypes.any
}
