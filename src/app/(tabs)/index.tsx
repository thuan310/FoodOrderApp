import { View } from 'react-native';

import products from '@/assets/data/products';
import ProductionListItem from '@/src/components/ProductListItem';


export default function MenuScreen() {
return (
    <View>
      <ProductionListItem product ={products[5]}/>
      <ProductionListItem product ={products[7]}/>
      
    </View>
  );
} 

