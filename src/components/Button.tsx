import { Spinner, Text, Button as TouchableOpacityBase } from "native-base"

interface ButtonProps {
    text: string;
    onPress: () => void;
    disabled?: boolean;
    isLoading?: boolean;
}

export function Button({ text, onPress, disabled = false, isLoading = false }: ButtonProps){
    return(
        <TouchableOpacityBase 
            _pressed={{
                bg: "#dd6266"
            }}
            disabled={disabled || isLoading} 
            onPress={onPress} 
            width="full" 
            alignItems="center" 
            justifyContent="center" 
            bg={disabled ? "#999" : "#D73035" } 
            rounded="full"
        >
            {!isLoading ? (
                <Text color="white" fontFamily="body">{text}</Text>
            ): (
                <Spinner color="white" />
            )}
        </TouchableOpacityBase>
    )
}