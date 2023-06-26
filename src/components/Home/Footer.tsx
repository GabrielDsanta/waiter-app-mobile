import { View } from "native-base";
import { Button } from "../Button";
import { Cart } from "../Cart";
import { CartList } from "../../@types/CartList";

interface FooterProps {
    onPress: () => void;
    isTableSelected: boolean;
    cartItems: CartList[];
}

export function Footer({ onPress, isTableSelected, cartItems }: FooterProps){
    return(
        <View alignItems="center" justifyContent="center" px={4} py={6} bg="white" minHeight="110px">
            {!isTableSelected ? (
                <Button onPress={onPress} text="Novo Pedido" />
            ): (
                <Cart cartItems={cartItems} />
            )}
        </View>
    )
}   