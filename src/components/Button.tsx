import { Text, Button as TouchableOpacityBase } from "native-base"

interface ButtonProps {
    text: string;
    onPress: () => void;
    disabled?: boolean;
}

export function Button({ text, onPress, disabled = false }: ButtonProps){
    return(
        <TouchableOpacityBase 
            _pressed={{
                bg: "#dd6266"
            }}
            disabled={disabled} 
            onPress={onPress} 
            width="full" 
            alignItems="center" 
            justifyContent="center" 
            bg={disabled ? "#999" : "#D73035" } 
            rounded="full"
        >
            <Text color="white" fontFamily="body">{text}</Text>
        </TouchableOpacityBase>
    )
}