import { FlatList, Modal, Text, View, Pressable } from "native-base";
import { ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FormatPrice } from "../utils/formatePrice";
import { Button } from "./Button";
import { Product } from "../models/Product";

interface ProductModalProps {
  isVisible: boolean;
  onClose: () => void;
  product: Product | null;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ isVisible, onClose, product, onAddToCart }: ProductModalProps) {

  if (!product) {
    return null;
  }

  function handleAddToCart(){
    onAddToCart(product!)
    onClose()
  }

  return (
    <Modal onClose={onClose} animationPreset="slide" isOpen={isVisible}>
      <ImageBackground
        alt=""
        style={{
          width: "100%",
          height: 200,
          alignItems: "flex-end" 
        }}
        source={{
          uri: `http://192.168.1.5:3333/uploads/${product.imagePath}`,
        }}>
            <Pressable alignItems="center" justifyContent="center" onPress={onClose} mt={8} mr={5} w={8} h={8} bg="rgba(0, 0, 0, 0.5)" rounded="full">
                <AntDesign name="close" size={16} color="white" />
            </Pressable>
      </ImageBackground>

      <View w="full" pt={8} flex={1} bg="#FAFAFA">
        <View px={6}>
            <Text fontFamily="heading" fontSize="2xl">{product.name}</Text>
            <Text fontFamily="mono" color="#666" mt={2}>{product.description}</Text>
        </View>

        {product.ingredients.length > 0 && (
            <View px={6} mt={6}>
                <Text fontFamily="heading" color="#666">Ingredientes</Text>

                <FlatList  
                    mt={4}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item._id}
                    data={product.ingredients}
                    renderItem={({ item }) => (
                        <View rounded={2} borderColor="rgba(204, 204, 204, 0.3)" borderWidth="1px" p={4} flexDirection="row" alignItems="center" mt={1}>
                            <Text fontFamily="mono">{item.icon}</Text>
                            <Text fontFamily="mono" ml={5} fontSize="sm" color="#666">{item.name}</Text>
                        </View>
                    )}
                />
            </View>
        )}

        <View px={6} mt={5} flexDirection="row" alignItems="center" justifyContent="space-between">
          <View>
              <Text color="#666" fontFamily="mono">Preço</Text>
              <Text fontSize="xl" fontFamily="heading">{FormatPrice(product.price)}</Text>
          </View>

          <Pressable onPress={handleAddToCart} px={12} py={3} rounded="full" bg="#D73035">
            <Text color="white">Adicionar ao pedido</Text>
          </Pressable>

        </View>
      </View>
    </Modal>
  );
}
