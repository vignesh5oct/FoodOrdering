import { Text, View } from '@/src/components/Themed';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';




export default function MenuScreen() {
  return (
    <View>
      <Text>Start</Text>
      {products.map((productItem) => (<ProductListItem key={productItem.id} product={productItem} />))
      }
    </View>
  );
}

