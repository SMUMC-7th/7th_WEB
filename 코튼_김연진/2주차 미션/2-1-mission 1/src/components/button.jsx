import PropTypes from 'prop-types';  // PropTypes 추가

function Button(props) {
  const { text, onClick } = props;
  return (
    <button onClick={onClick} className="button">{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,  // props validation 추가
  onClick: PropTypes.func.isRequired,
};

export default Button;
