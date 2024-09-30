import PropTypes from 'prop-types';  // PropTypes 추가


function Input({defaultValue, onChange}) {
  return (
    <div className="container">
        <input 
          defaultValue={defaultValue}
          onChange={onChange}
          className="InputBox"
        />
    </div>
  );
}

Input.propTypes = {
  defaultValue: PropTypes.string.isRequired,  // props validation 추가
  onChange: PropTypes.func.isRequired,
};

export default Input;
