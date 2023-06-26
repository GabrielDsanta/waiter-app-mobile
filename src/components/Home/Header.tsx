import { Text, View } from "native-base";

export function Header() {
  return (
    <View mt={6} mx={6}>
      <Text fontSize="sm" opacity={0.9}>
        Bem vindo(a) ao
      </Text>
      <Text fontSize="2xl" fontFamily="heading">
        WAITER
        <Text fontSize="2xl" fontFamily="mono">APP</Text>
      </Text>
    </View>
  );
}
