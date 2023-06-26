import { View } from "native-base";
import { Button } from "../Button";


export function Footer(){
    return(
        <View alignItems="center" justifyContent="center" px={4} py={6} bg="white" minHeight="110px">
            <Button onPress={() => console.log("ALou")} text="Novo Pedido" />
        </View>
    )
}   