import { FlatList, View } from "native-base";
import { CartList } from "../@types/CartList";

interface CartProps {
    cartItems: CartList[];
}

export function Cart({ cartItems }: CartProps){

    return(
        <View>
            <FlatList 
                data={cartItems}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.product._id}
                renderItem={({ item }) => (
                    <View>
                        
                    </View>
                )}
            />
        </View>
    )
}