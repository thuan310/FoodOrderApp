import { StyleSheet , Text, View, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import Colors from '@/src/constants/Colors';
import { Product } from '@/src/types';

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';
type ProductListingItemProp = {
    product: Product;
};

const ProductionListItem = ({product} : ProductListingItemProp) => {
  return (
    <Link href={`/(tabs)/menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
      <Image 
        source={{uri: product.image || defaultPizzaImage }} 
        style={styles.image}
        resizeMode="contain"    
    />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </Pressable> 
    </Link>
  );
}

export default ProductionListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  }
});
