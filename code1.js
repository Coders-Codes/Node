async function values (){
  try{
    console.log("a");
    console.log("b");
    
    const c = await new Promise((res, rej) => {
        setTimeout(() => {
          console.log("c");
          res();
        }, 3000);
      });
    
    
    const d = await new Promise((res, rej)=>{
        setTimeout(() => {
          console.log("d");
          res();
        },0)
      });
    
    
    console.log("e");
  }catch (err) {
    console.log(err);
    }
}
values();

