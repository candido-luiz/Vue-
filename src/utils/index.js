function filterItem(array, itemToFilter){
    let filteredArray = array.filter((item) => {
        return item.id != itemToFilter.id;
    })

    return filteredArray;
}

export default filterItem;