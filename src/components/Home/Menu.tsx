import { FlatList, Image, Text, View, Button } from "native-base";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ProductModal } from "../ProductModal";
import { Product } from "../../@types/Product";

export function Menu() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  function handleOpenModal(product: Product){
    setIsModalVisible(true)
    setSelectedProduct(product)
  }

  return (
    <>
      <ProductModal product={selectedProduct} onClose={() => setIsModalVisible(false)} isVisible={isModalVisible} />

      <FlatList
        renderItem={({ item }) => (
          <Button onPress={() => handleOpenModal(item)} flexDirection="row" alignItems="center">
            <Image
              rounded={2}
              w="120px"
              h={24}
              source={{
                uri: `http://192.168.1.5:3001/uploads/${item.imagePath}`,
              }}
            />

            <View ml={4} flex={1}>
              <Text fontFamily="body"></Text>
              <Text fontFamily="mono" color="#666" fontSize="sm" my={2}></Text>
              <Text fontSize="sm" fontFamily="body"></Text>
            </View>

            <Button position="absolute" bottom={0} right={0}>
              <Ionicons name="add-circle-outline" size={24} color="#D73035" />
            </Button>
          </Button>
        )}
        mt={8}
        data={products}
        ItemSeparatorComponent={() => (
          <View w="full" my={6} h="1px" bg="rgba(204, 204, 204, 0.3)"></View>
        )}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 6 }}
      />
    </>
  );
}
