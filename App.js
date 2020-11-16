import React, { useState } from 'react';
import { View,StyleSheet } from 'react-native';
import  {Table}  from './src/components/Table'
import   {Api} from  './src/Api/Products'
export default function App() {
 const [products,setProduct]= useState([]);

const  ProductInfo= async (code)=>{
// finding  the product Information through code
  const response= await  Api(code);
  setProduct(response);
  }
    return ( 
    <View style={styles.container}>
      <Table ProductInfo={ProductInfo}  products={products}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
