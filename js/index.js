apiUrl="https://api.itbook.store/1.0/new";
function getProduct(){
    const container=document.getElementById("productContainer");
    container.innerHTML=`
    <strong>Loading books...</strong>
    `;
    fetch(apiUrl).then((res)=>{
        if(!res.ok){
            throw new Error("Error Fetching Data");
        }
        
       const data= res.json();
        console.log(data);
        return data;
    }).then(
        (data)=>{
             const products = data.books;
            container.innerHTML="";
            products.forEach((product) => {
                const productDiv=document.createElement("div");
                productDiv.innerHTML=`
                <div class="flex flex-col items-center bg-white shadow-md rounded-xl p-4">
                <img src="${product.image}" alt="${product.title}" class="w-[200px] h-[200px] object-cover mb-4">
                <p class="text-black text-center max-w-[20ch] mb-2">${product.title}</p>
                <p class="text-orange-500 font-semibold mb-4">${product.price}</p>
                <button class="btn-body hover:animate-bounce rounded">Add to Cart</button>
                </div>              
                `;
                container.appendChild(productDiv)
                });
            }).catch((error)=>{
                    container.innerHTML=`<p>Error in Loading Data</p>${error.message}`;
        }
    )
}

getProduct();