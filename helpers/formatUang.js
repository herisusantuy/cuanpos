const formatCurrency = (money) => {
    return new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'IDR' }
    ).format(money)
}


module.exports = formatCurrency

