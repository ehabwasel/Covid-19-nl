const getTotalAmount = (data) => {
    return  data.reduce((total, item) => {
        return total + item.Cases
    }, 0);

}

export default getTotalAmount;