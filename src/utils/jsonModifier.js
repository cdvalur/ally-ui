 const jsonModifier = (data) => {
    const modifiedData = [];
    data.forEach(item => {
        if(item.parent_objective_id){
            const parentIndex = modifiedData.findIndex(parentItem => parentItem.id === item.parent_objective_id);
            if(parentIndex > -1){
                modifiedData[parentIndex].children.push(item);
            } else { // treating this as corner case if any child with parentid but not matching with anyone
                const newItem = {...item, children:[], showChildren: true} 
                modifiedData.push(newItem);
            }
        } else {
            const newItem = {...item, children:[], showChildren: true }
            modifiedData.push(newItem);
        }
    })
    return modifiedData;
};

export default jsonModifier;