import { View, FlatList } from 'react-native';

import products from '@/assets/data/products';
import ProductionListItem from '@/src/components/ProductListItem';


export default function MenuScreen() {
return (
    <View>
      {/* <ProductionListItem product ={products[5]}/>
      <ProductionListItem product ={products[7]}/>
       */}
    
      <FlatList 
        data ={products}
        renderItem={({ item }) => <ProductionListItem product= {item}/>}
        numColumns={2}
        contentContainerStyle={{ gap: 10 }}
        columnWrapperStyle={{ gap: 10}}
      />
    </View>
  );
} 

