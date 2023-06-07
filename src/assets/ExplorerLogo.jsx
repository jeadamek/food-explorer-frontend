import PropTypes from "prop-types";

export function ExplorerLogo({ height }) {
  return(
    <svg width="auto" height={height} viewBox="0 0 160 47" fill="none">
      <path opacity="0.3" d="M39.8795 11.5119L29.908 17.2678L19.9429 23.0237L9.97146 28.7797L0 34.5356V11.5119L19.9429 0L39.8795 11.5119Z" fill="#42D3FF"></path>
      <path opacity="0.6" d="M39.8795 34.5358L19.9429 46.0477L0 34.5358L9.97146 28.7799L19.9429 23.0239L29.908 28.7799L39.8795 34.5358Z" fill="#42D3FF"></path>
      <path d="M39.8819 11.5122V34.5359L29.9104 28.78L19.9453 23.0241L29.9104 17.2681L39.8819 11.5122Z" fill="#42D3FF"></path>
    </svg>
  )
}

ExplorerLogo.propTypes = {
  height: PropTypes.number
}