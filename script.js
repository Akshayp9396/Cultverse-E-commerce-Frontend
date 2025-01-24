const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrolly > 0)
})





// JavaScript to change the placeholder based on radio button selection
document.getElementById('orderIdRadio').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('searchInput').placeholder = "Enter Your Order ID/No";
    }
});

document.getElementById('trackingIdRadio').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('searchInput').placeholder = "Enter Your Tracking ID";
    }
});


// filter-----------------------------------


function applyFilters() {
    const selectedSizes = Array.from(document.querySelectorAll('.filter-section:nth-child(2) input:checked'))
        .map(checkbox => checkbox.value);
    const selectedTypes = Array.from(document.querySelectorAll('.filter-section:nth-child(3) input:checked'))
        .map(checkbox => checkbox.value);
    const priceMin = document.getElementById('price-min').value;
    const priceMax = document.getElementById('price-max').value;

    console.log('Selected Sizes:', selectedSizes);
    console.log('Selected Types:', selectedTypes);
    console.log('Price Range:', priceMin, '-', priceMax);
}