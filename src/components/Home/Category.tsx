import { Box, FlatList, Text, Button } from "native-base";
import { useState } from "react";
import { Platform } from "react-native";

const isAndroid = Platform.OS === "android";

export function Category() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId

    setSelectedCategory(category)
  }

  return (
    <FlatList
      renderItem={({ item }) => {
        const isSelected = selectedCategory === item

        return (
          <Button
            onPress={() => handleSelectCategory(item)}
            ml={4}
            alignItems="center"
            mt={8}
            height="73px">
            <Box>
              <Box
                style={{
                  shadowColor: `rgba(0, 0, 0, ${isAndroid ? 1 : 0.1})`,
                  elevation: 2,
                }}
                bg="white"
                h="44px"
                w="44px"
                rounded="full"
                alignItems="center"
                justifyContent="center"
                flexDirection="row"
                mb={2}>
                <Text opacity={isSelected ? 1 : 0.5}></Text>
              </Box>
              <Text opacity={isSelected ? 1 : 0.5} fontSize="sm" fontFamily="body"></Text>
            </Box>
          </Button>
        );
      }}
      data={categories}
      keyExtractor={(item) => item}
      horizontal
      showsHorizontalScrollIndicator={false}
      _contentContainerStyle={{ px: 8 }}
    />
  );
}
