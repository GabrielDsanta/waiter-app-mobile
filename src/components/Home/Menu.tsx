import { FlatList, Image, Text, View, Button, Box, Pressable } from "native-base";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ProductModal } from "../ProductModal";
import { Product } from "../../models/Product";
import { FormatPrice } from "../../utils/formatePrice";

interface MenuProps {
  onAddToCart: (product: Product) => void;
  products: Product[]
}

export function Menu({ onAddToCart, products }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  function handleOpenModal(product: Product){
    setIsModalVisible(true)
    setSelectedProduct(product)
  }

  return (
    <>
      <ProductModal onAddToCart={onAddToCart} product={selectedProduct} onClose={() => setIsModalVisible(false)} isVisible={isModalVisible} />

      <FlatList
        renderItem={({ item }) => (
          <Pressable onPress={() => handleOpenModal(item)} flexDirection="row" alignItems="center">
            <Image
              rounded={2}
              w="120px"
              h={24}
              alt=""
              source={{
                uri: `http://192.168.1.5:3333/uploads/${item.imagePath}`,
              }}
            />

            <View ml={4} flex={1}>
              <Text fontFamily="body">{item.name}</Text>
              <Text fontFamily="mono" color="#666" fontSize="sm" my={2}>{item.description}</Text>
              <Text fontSize="sm" fontFamily="body">{FormatPrice(item.price)}</Text>
            </View>

            <Button bg="transparent" onPress={() => onAddToCart(item)} position="absolute" bottom={0} right={0}>
              <Ionicons name="add-circle-outline" size={24} color="#D73035" />
            </Button>
          </Pressable>
        )}
        mt={8}
        data={products}
        ItemSeparatorComponent={() => (
          <View w="full" my={6} h="1px" bg="rgba(204, 204, 204, 0.3)"></View>
        )}
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 6 }}
      />
    </>
  );
}
