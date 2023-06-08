import PropTypes from "prop-types";

export function ExplorerLogo({ size }) {
  return(
    <svg width={size} height={size} viewBox="0 0 107 123" fill="none">
    <path opacity="0.3" d="M107 30.6668L80.2456 46L53.5084 61.3333L26.7543 76.6668L0 92V30.6668L53.5084 0L107 30.6668Z" fill="#42D3FF"/>
    <path opacity="0.6" d="M107 92L53.5084 123L0 92L26.7543 76.5001L53.5084 61L80.2456 76.5001L107 92Z" fill="#42D3FF"/>
    <path d="M107 31V92L79.9913 76.7501L53 61.5001L79.9913 46.2499L107 31Z" fill="#42D3FF"/>
  </svg>
  )
}

ExplorerLogo.propTypes = {
  size: PropTypes.number
}