
export const Api= async (code)=>{

// Api returning   {status:undefined}

const response= await fetch(`https://barcode.monster/api/${code}`);
const res=response.json();
return res;
}