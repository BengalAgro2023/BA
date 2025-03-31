document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: 1,
            name: "Atlantic Salmon",
            description: "Fresh, sustainably farmed salmon",
            price: 12.99,
            category: "fresh",
            image: "images/salmon.jpg",
            badge: "Best Seller"
        },
        // More products...
    ];

    const productGrid = document.getElementById('product-grid');
    const filterSelect = document.getElementById('product-filter');

    function renderProducts(filter = 'all') {
        productGrid.innerHTML = '';
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(p => p.category === filter);
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                    <p class="product-price">$${product.price.toFixed(2)}/lb</p>
                    <button class="btn btn-add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        // Add event listeners to new buttons
        document.querySelectorAll('.btn-add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                const product = products.find(p => p.id === productId);
                addToCart(product);
                alert(`${product.name} added to cart!`);
            });
        });
    }

    filterSelect.addEventListener('change', function() {
        renderProducts(this.value);
    });

    // Initial render
    renderProducts();
});