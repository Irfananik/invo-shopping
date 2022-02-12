// dynamic date shaw 
const date = new Date()
document.getElementById('show-date').innerText = date.toLocaleDateString()


// buyer details submit in invoice to......
const buyerButton = document.getElementById('detail-submit-btn')
buyerButton.addEventListener('click', function() {
    const buyerDetails = document.getElementById('buyer-details-input')
    document.getElementById('buyer-info').innerText = buyerDetails.value

    buyerDetails.value = ''
})

// seller info
const sellerInfo = document.getElementById('seller-info')
sellerInfo.innerText = ("Name: Golam Morshed, address: F Block, Bashundhara, Dhaka")


// items details.......................
const productAddDetailsButton = document.getElementById('add-details-btn')
productAddDetailsButton.addEventListener('click', function() {
    const infoTable = document.getElementById('info-table')
    const itemName = document.getElementById('item-name-input')
    const itemPrice = document.getElementById('item-price-input')
    const itemQuantity = document.getElementById('item-quantity-input')


    // product price and quantity calculation by multiple
    const totalPrice = parseFloat(itemPrice.value) * parseFloat(itemQuantity.value)


    // make product table ..................
    const tr = document.createElement('tr')
    const th = document.createElement('th')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')

    td3.classList.add('item-total')
    th.innerText = itemName.value
    td1.innerText = itemPrice.value
    td2.innerText = itemQuantity.value
    td3.innerText = totalPrice

    // get value in table viewport
    tr.appendChild(th)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    infoTable.appendChild(tr)

    // total calculation function call
    totalCalculations()

})


// total calculation.......................................
function totalCalculations() {
    const subTotal = subtotalCalculations()

    const subTotalDisplay = document.getElementById('sub-total')
    subTotalDisplay.innerHTML = subTotal

    // tax and grand total calculation...........
    const tax = subTotal * .2;
    document.getElementById('tax').innerText = tax
    document.getElementById('grand-total').innerText = subTotal + tax
    document.getElementById('grand-total-2').innerText = subTotal + tax
}


// subtotal calculation..........................................
function subtotalCalculations() {
    const cost = document.getElementsByClassName('item-total')

    let subtotal = 0

    for (let i = 0; i < cost.length; i++) {
        const element = cost[i]
        const price = parseFloat(element.innerText)
        subtotal += price
    }
    return subtotal
}