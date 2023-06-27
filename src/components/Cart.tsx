import { Button as NativeBaseButton, FlatList, Image, Text, View, Pressable } from "native-base";
import { CartList } from "../models/CartList";
import { FormatPrice } from "../utils/formatePrice";
import { AntDesign } from '@expo/vector-icons'; 
import { Button } from "./Button";
import { OrderConfirmedModal } from "./OrderConfirmedModal";
import { useState } from 'react'
import { Product } from "../models/Product";

interface CartProps {
    cartItems: CartList[];
    onAdd: (product: Product) => void;
    onDeclineToCart: (product: Product) => void;
    onConfirmOrder: () => void;
}

export function Cart({ cartItems, onAdd, onDeclineToCart, onConfirmOrder }: CartProps){
    const [isLoading, setIsLoading] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)

    const total = cartItems.reduce((acc, item) => {
        return acc + item.quantity * item.product.price
    }, 0)

    async function handleConfirmOrder(){
        setIsModalVisible(true)
    }

    function handleOk(){
        onConfirmOrder()
        setIsModalVisible(false)
    }

    return(
        <>
            <OrderConfirmedModal onOk={handleOk} isVisible={isModalVisible} />

            {cartItems.length > 0 && (
                <FlatList 
                    maxH="150px"
                    data={cartItems}
                    mb={2}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.product._id}
                    renderItem={({ item }) => (
                        <View w="393px" px={2} alignItems="center" justifyContent="space-between" flexDirection="row">
                            <View flexDirection="row">
                                <Image alt="" source={{ uri: `http://192.168.1.5:3333/uploads/${item.product.imagePath}` }} w={12} h={10} rounded="6px" />

                                <View ml={3} minW={5}>
                                    <Text color="#666" fontSize="sm" fontFamily="mono">{item.quantity}x</Text>
                                </View>

                                <View>
                                    <Text fontSize="sm" fontFamily="body">{item.product.name}</Text>
                                    <Text mt={1} fontFamily="mono" fontSize="sm" color="#666">{FormatPrice(item.product.price)}</Text>
                                </View>
                            </View>

                            <View mr={4} flexDirection="row">
                                <NativeBaseButton bg="transparent" onPress={() => onAdd(item.product)} >
                                    <AntDesign name="pluscircleo" size={20} color="#D73035" />
                                </NativeBaseButton>
                                
                                <NativeBaseButton bg="transparent" onPress={() => onDeclineToCart(item.product)}>
                                    <AntDesign name="minuscircleo" size={20} color="#D73035" />
                                </NativeBaseButton>
                            </View>
                        </View>
                    )}
                />  
            )}

            <View w="380px" px={2} flexDirection="row" alignItems="center" justifyContent="space-between">
                <View> 
                    {cartItems.length > 0 ? (
                        <>
                            <Text fontFamily="mono" color="#666">Total</Text>
                            <Text fontSize="xl" fontFamily="body">{FormatPrice(total)}</Text>
                        </>
                    ): (
                     
                        <Text maxW={24} fontFamily="mono" color="#999">Seu carrinho está vazio</Text>
                       
                    )}
                </View>

                <Pressable mr={3} disabled={cartItems.length === 0} onPress={handleConfirmOrder} px={7} py={3} rounded="full" bg="#D73035">
                    <Text color="white">Confirmar pedido</Text>
                </Pressable>
            </View>
        </>
    )
}