import PropTypes from 'prop-types';
export const Filter = ({inputFilter, value}) => {
  
return <input type="text" name="filter" onChange={inputFilter} value={value}  />
}
 
Filter.propTypes = {
  inputFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
  };