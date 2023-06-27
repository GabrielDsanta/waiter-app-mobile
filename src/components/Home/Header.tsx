import { Button, Text, View } from "native-base";

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder }: HeaderProps) {
  
  return (
    <View mt={6} mx={6}>
      {!selectedTable ? (
        <>
          <Text fontSize="sm" opacity={0.9}>
            Bem vindo(a) ao
          </Text>
          <Text fontSize="2xl" fontFamily="heading">
            WAITER
            <Text fontSize="2xl" fontFamily="mono">
              APP
            </Text>
          </Text>
        </>
      ) : (
        <View>
          <View flexDirection="row" justifyContent="space-between" alignItems="center">
            <Text fontFamily="heading" fontSize="2xl">
              Pedido
            </Text>
            <Button bg="transparent" onPress={onCancelOrder}> 
              <Text color="#D73035" fontFamily="heading" fontSize="sm">
                cancelar pedido
              </Text>
            </Button>
          </View>

          <View mt={6} bg="white" borderColor="rgba(204, 204, 204, 0.3)" borderWidth="1px" rounded={2} p={4}>
            <Text color="#666">Mesa {selectedTable}</Text>
          </View>
        </View>
      )}
    </View>
  );
}
