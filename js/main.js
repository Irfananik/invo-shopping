// dynamic date shaw 
const date = new Date()
document.getElementById('show-date').innerText = date.toLocaleDateString()


// buyer details submit in invoice to......
const buyerButton = document.getElementById('detail-submit-btn')
buyerButton.addEventListener('click', function() {
    const buyerDetails = document.getElementById('buyer-details-input')
    document.getElementById('buyer-info').innerText = buyerDetails.value
})

// seller info
const sellerInfo = document.getElementById('seller-info')
sellerInfo.innerText = ("Name: Golam Morshed, address: F Block, Bashundhara, Dhaka")