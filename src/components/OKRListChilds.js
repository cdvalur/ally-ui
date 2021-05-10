import React from 'react';
import FontAwseome from 'react-fontawesome'
import '../styles/List.css';


const OKRListChildsComponent = (props) => {
    const { okrListChilds } = props;
    const showFields = (e, item) => {
        alert(`Category: ${item.category} \n Metric Name: ${item.metric_name} \n Metric Start: ${item.metric_start} \n Metric Target: ${item.metric_target} \n Archived: ${item.archived}`);
        e.stopPropagation();
    }
    return(
        <ol className="List-Child-Wrapper">
            {okrListChilds.map(item => (
                <li className="List-Child-Item" key={item.id}>
                    <div className="Left-Border"></div>
                    <FontAwseome className="far" name="user"/>
                    <div className="Child-List-Item">
                        <div className="List-Title" onClick={(e) =>showFields(e, item)}>{item.title}</div>
                    </div>
                </li>
            )
            )}
        </ol>
    )

};

export default OKRListChildsComponent;