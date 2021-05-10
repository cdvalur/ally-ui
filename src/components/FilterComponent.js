import React from 'react';
import '../styles/Filter.css'

const FilterComponent  = (props) => {
   const { categoryList, handleChange } = props;
   const onChangeCategory = (e) => {
        handleChange(e.target.value);
   }
   return (
    <div className="Filter">
        <span>Filter By Category </span> :
        {categoryList && categoryList.length > 0 && (
        <div className="Filter-Item">
            <select onChange={onChangeCategory}>
            <option value="">Select Category</option>
            {categoryList.map((category) => {
                return <option key={category}>{category}</option>;
            })}
            </select>
        </div>
        )}
  </div>
   )
};

export default FilterComponent;
