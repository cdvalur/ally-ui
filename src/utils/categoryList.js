const getCategoryList = (data) => {
    const set = new Set();
    data.forEach((item) => {
        set.add(item.category);
    })
    return [...set];
}

export default getCategoryList;
