// fetch("https://fakestoreapi.com/products")
//     .then((res)=>res.json())
//     .then((data)=>console.log(data))
//     .catch((error)=>    
//         console.log("Some error occured while fetching the data...",error));

const div = document.getElementById("products");
const btn = document.getElementById("btn");
console.log(btn);

const getData = async () => {
    try{
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        return data;
    }
    catch(error){
        return "unable to fetch data";
    }
}


btn.addEventListener("click", async (e)=>{
    e.preventDefault();
    const data = await getData();
    console.log(data);
    data.map((d)=>{
        const insideDiv = document.createElement("div");
        insideDiv.innerHTML = d.title;
        div.appendChild(insideDiv);
    })
})