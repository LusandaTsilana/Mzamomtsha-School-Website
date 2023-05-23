const form1 = document.getElementById("form1");


var dataArray = [];

async function getData(){
    form1.addEventListener("submit",async (e)=>{
        e.preventDefault();
        const formData = new FormData(form1); 
        
        try{
            const res = await fetch('https://httpbin.org/post',{
                method:"POST",
                body: formData,
            })
            let dataJson= await res.json();
            dataArray.push(dataJson);
            
        }
        catch{
            console.log("error");
        }
        
        localStorage.setItem('data',JSON.stringify(dataArray));
        
        window.location.assign("submitContact.html")
         
    })
    
    
   
    
}


getData();

