export async function getCategory(category = "") {
    try {
        let response;
        if (category === "all") {
            response = await fetch("https://fakestoreapi.com/products");
        } else {
            response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        }

        if (!response.ok) {
            throw new Error("Webserver rejected the request, please visit our website later.");
        }

        const data = await response.json();

        if (!data.length) {
            throw new Error("Current category/product doesn't exist on our website");
        }

        return data;
    } catch (err) {
            throw err.message
    }
}

export async function getProduct(productId) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        
        if (!response.ok) {
            throw new Error("Webserver rejected sending the product, please visit our website later.");
        }

        const data = await response.json();
        return data;
    } catch (err) {
        throw err.message
    }
}
