import * as React from 'react';
import    {BarCode} from '../BarCodeScanner'
export const Table = (props) => {

const  {products,...others} =props;
return(
<React.Fragment>
  {
   products.length>0
   ? 
   products.map((_item,_index)=>{
     // cant load data as i dont know what is response of Api
  })
  :
   <BarCode {...others}/> 
}
   </React.Fragment>
   );
}

export default Table;