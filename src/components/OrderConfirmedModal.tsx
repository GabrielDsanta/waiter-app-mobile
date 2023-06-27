import { Button, Modal, Text, View } from "native-base";
import { AntDesign } from '@expo/vector-icons'; 

interface OrderConfirmedModalProps {
    isVisible: boolean;
    onOk: () => void;
}

export function OrderConfirmedModal({ isVisible, onOk }: OrderConfirmedModalProps){
    return(
        <Modal animationPreset="fade" isOpen={isVisible}>
            <View bg="#D73035" flex={1} alignItems="center" justifyContent="center">
                <AntDesign name="checkcircle" size={24} color="white" />
                <Text mt={3} color="white" fontSize={5} fontFamily="body">Pedido confirmado</Text>
                <Text mt={1} fontFamily="mono" color="white" opacity={0.9}></Text>

                <Button onPress={onOk} mt={6} px={6} py="14px" bg="white" rounded={12}>
                    <Text color="#D73035" fontFamily="body">OK</Text>
                </Button>
            </View>
        </Modal>
    )
}