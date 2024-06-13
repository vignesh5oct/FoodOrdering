import { Text, View } from '@/src/components/Themed';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';
import { FlatList } from 'react-native';




export default function MenuScreen() {
  return (
    <View>
      <Text>Stasaasrt</Text>

      <FlatList data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{gap:10, padding:15}}
        columnWrapperStyle={{gap:10}}
      />

    </View>
  );
}

