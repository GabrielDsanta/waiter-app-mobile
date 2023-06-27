import { Button as NativeBaseButton, Input, Modal, Text, View, KeyboardAvoidingView } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "./Button";
import { Platform } from 'react-native'
import { useState } from 'react'

const isAndroid = Platform.OS === "android"

interface TableModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
    const [tableText, setTableText] = useState("")
    
    function handleSave(){
        onSave(tableText)
        onClose()
        setTableText("")
    }
    

    return (
        <Modal animationPreset="fade" isOpen={visible}>
            <KeyboardAvoidingView
                w="full"
                px={6}
                bg="rgba(0, 0, 0, 0.6)"
                flex={1}
                alignItems="center"
                justifyContent="center"
            >

                <View w="full" p={6} bg="#FAFAFA" rounded={2}>
                <View
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    >
                    <Text fontFamily="heading">Informar a mesa</Text>
                    <NativeBaseButton bg="transparent" onPress={onClose}>
                    <AntDesign name="close" size={24} color="#666" />
                    </NativeBaseButton>
                </View>

                <View mt={5}>
                    <Input
                    onChangeText={setTableText}
                    bg="#FFF"
                    rounded={2}
                    p={4}
                    borderColor="rgba(204, 204, 204, 0.5)"
                    borderWidth="1px"
                    placeholderTextColor="#666"
                    mb={6}
                    keyboardType="number-pad"
                    placeholder="Número da mesa"
                    />

                    <Button onPress={handleSave} text="Salvar" disabled={tableText.length === 0} key={1} />
                </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
}
