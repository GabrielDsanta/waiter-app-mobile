import { View } from "native-base";
import { Button } from "../Button";
import { Cart } from "../Cart";
import { CartList } from "../../models/CartList";
import { Product } from "../../models/Product";

interface FooterProps {
    onPress: () => void;
    isTableSelected: boolean;
    cartItems: CartList[];
    onDeclineToCart: (product: Product) => void;
    onAddToCart: (product: Product) => void;
    onConfirmOrder: () => void;
    isLoading: boolean;
}

export function Footer({ onPress, isTableSelected, cartItems, onDeclineToCart, onAddToCart, onConfirmOrder, isLoading }: FooterProps){
    return(
        <View alignItems="center" justifyContent="center" px={4} py={6} bg="white" minHeight="110px">
            {!isTableSelected ? (
                <Button disabled={isLoading} onPress={onPress} text="Novo Pedido" />
            ): (
                <Cart onConfirmOrder={onConfirmOrder} onDeclineToCart={onDeclineToCart} onAdd={onAddToCart} cartItems={cartItems} />
            )}
        </View>
    )
}   