 document.getElementById("bookForm").addEventListener('submit',async function(e) {
    e.preventDefault();
    const title=document.getElementById('title').value;
    const description=document.getElementById('description').value;
    const price=document.getElementById('price').value;
    const category=document.getElementById('cat').value;
    const image=document.getElementById('image').value;
    const createBook={
        title,
        description,
        price:parseInt(price),
        category,
        image
    };
    try {
       const submitButton=this.querySelector('button[type="submit"]') ;
       submitButton.disabled=true;
       submitButton.textContent="Adding book...";
       const response=await fetch("https://fakestoreapi.com/products",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(createBook)
        });
        if(!response.ok){
            throw new error("Error create book");
        }
        const data =await response.json();
       console.log(data);
    } catch (error) {
        console.error(error.message);
    } finally{
       const submitButton=this.querySelector('button[type="submit"]') ;
       submitButton.disabled=true;
       submitButton.textContent="Submit";
    }
   
 }); 