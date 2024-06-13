import { Image, StyleSheet } from 'react-native';

import { Text, View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';



const ProductListItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    overflow: 'hidden',
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,

  },
  image: {
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
  }
});
