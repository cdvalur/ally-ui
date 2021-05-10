import React from 'react';
import FontAwseome from 'react-fontawesome'
import OKRListChildsComponent from './OKRListChilds';
import '../styles/List.css';

const OKRListComponent = (props) => {
        const { okrListData, handleDropDown } = props;
        const showFields = (item) => {
            alert(`Category: ${item.category} \n Metric Name: ${item.metric_name} \n Metric Start: ${item.metric_start} \n Metric Target: ${item.metric_target} \n Archived: ${item.archived}`);
        }
        const handleCaretClick = (e, id) => {
            handleDropDown(id);
            e.stopPropagation();
        }
        return(
            <ol className="Parent-List-Wrapper">
                {okrListData.map(item => (
                    <li className="Parent-List" key={item.id} >
                        {item.children.length > 0 && <button className="caret" onClick={(e) => handleCaretClick(e, item.id)}>
                            {item.showChildren ? <span>&#9660;</span> : <span>&#9650;</span> }
                        </button>
                        }
                        <FontAwseome className="far" name="user"/>
                        <div className="Parent-List-Item" >
                            <div className="Parent-Title List-Title" onClick={() => showFields(item) }>{item.title}</div>
                            {item.showChildren && <OKRListChildsComponent okrListChilds={item.children} />}
                        </div>
                    </li>
                ))}
            </ol>
        )
}

export default OKRListComponent;
