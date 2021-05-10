import React, { useState, useEffect } from 'react';
import OKRListComponent from '../../components/OKRListComponent';
import jsonModifier from '../../utils/jsonModifier';
import getCategoryList from '../../utils/categoryList';
import FilterComponent from '../../components/FilterComponent';
import '../../styles/OkrCentral.css';

const OKRCentralPage = () => {
    const [ okrData, setOkrData ] = useState([]);
    const [filterData, setFilterData ] = useState([]);
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        const dbUrl = 'https://okrcentral.github.io/sample-okrs/db.json';
        (async() => {
            const response = await fetch(dbUrl);
            const data = await response.json();
            const modifiedData = jsonModifier(data.data);
            const category = getCategoryList(data.data);
            setOkrData(modifiedData);
            setCategoryList(category);
        })()
    }, []);
    const handleDropDown = (id) => {
            const data  = [...okrData];
            const index = data.findIndex(item => item.id === id);
            data[index].showChildren = !data[index].showChildren;
            setOkrData(data);
    }
    const onFilterChange = (value) => {
        if(value){
            const filterOkr =  okrData.filter(item => item.category === value);
            setFilterData([...filterOkr]);
        } else {
            setFilterData([]);
        }
    }
    return (
        <div className="Okr-Page-Wrapper">
            <FilterComponent categoryList={categoryList} handleChange={ onFilterChange }/>
            <OKRListComponent okrListData={filterData.length > 0 ? filterData: okrData} handleDropDown={ handleDropDown }/>
        </div>
    )
};

export default OKRCentralPage;
