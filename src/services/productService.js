export async function getProduct(id){
    const response = await fetch(`${process.env.REACT_APP_HOST}/products/${id}`);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    return await response.json();
}

export async function getProductList(searchTerm){

    console.log(`>> Getting Product List with Search Term ${searchTerm} <<`);

    const response = await fetch(`${process.env.REACT_APP_HOST}/products?q=${searchTerm ? searchTerm : ""}`);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json()
    return data;
}

export async function getFeaturedList(searchTerm){
    const response = await fetch(`${process.env.REACT_APP_HOST}/featured_products`);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }

    return await response.json();
}