import { Button as NativeBaseButton, FlatList, Modal, Text, View } from "native-base";
import { Product } from "../@types/Product";
import { ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FormatPrice } from "../utils/formatePrice";
import { Button } from "./Button";

interface ProductModalProps {
  isVisible: boolean;
  onClose: () => void;
  product: Product | null;
}

export function ProductModal({
  isVisible,
  onClose,
  product,
}: ProductModalProps) {
  if (!product) {
    return null;
  }

  return (
    <Modal onClose={onClose} animationPreset="slide" isOpen={isVisible}>
      <ImageBackground
        style={{
          width: "100%",
          height: "200px",
          alignItems: "flex-end" 
        }}
        source={{
          uri: `http://192.168.1.5:3001/uploads/${product.imagePath}`,
        }}>
            <NativeBaseButton onPress={onClose} m={6} alignItems="center" justifyContent="center" w={8} h={8} bg="rgba(0, 0, 0, 0.5)" rounded={4}>
                <AntDesign name="close" size={24} color="#FFF" />
            </NativeBaseButton>
      </ImageBackground>

      <View px={6} pt={8} flex={1} bg="#FAFAFA">
        <View>
            <Text fontFamily="body" fontSize={6}>{product.name}</Text>
            <Text color="#666" mt={2}>{product.description}</Text>
        </View>

        {product.ingredients.length > 0 && (
            <View mt={8}>
                <Text fontFamily="body" color="#666">Ingredientes</Text>

                <FlatList  
                    mt={4}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item._id}
                    data={product.ingredients}
                    renderItem={({ item }) => (
                        <View flex={1} mb={1} rounded={2} borderColor="rgba(204, 204, 204, 0.3)" borderWidth="1px" p={4} flexDirection="row" alignItems="center"  mt={8}>
                            <Text fontFamily="mono">{item.icon}</Text>
                            <Text ml={5} fontSize="sm" color="#666">{item.name}</Text>
                        </View>
                    )}
                />
            </View>
        )}
      </View>
      
      <View flexDirection="row" alignItems="center" justifyContent="space-between">
        <View>
            <Text color="#666" fontFamily="mono">Preço</Text>
            <Text size={5} fontFamily="body">{FormatPrice(product.price)}</Text>
        </View>

        <Button onPress={() => console.log("alksdjlkj")} text="Adicionar ao pedido" />

      </View>
    </Modal>
  );
}
