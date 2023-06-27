import { Box, FlatList, Text, Button } from "native-base";
import { useState } from "react";
import { Platform } from "react-native";
import { Category } from "../../models/Category";

const isAndroid = Platform.OS === "android";

interface CategoryProps {
  categories: Category[]
}

export function CategoryList({ categories }: CategoryProps) {
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId

    setSelectedCategory(category)
  }

  return (
    <FlatList
      renderItem={({ item }) => {
        const isSelected = selectedCategory === item.name

        return (
          <Button
            bg="transparent"
            onPress={() => handleSelectCategory(item._id)}
            alignItems="center"
            mt={8}
            height="73px">
            <Box alignItems="center" justifyContent="center">
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
                <Text opacity={isSelected ? 1 : 0.5}>{item.icon}</Text>
              </Box>
              <Text opacity={isSelected ? 1 : 0.5} fontSize="sm" fontFamily="body">{item.name}</Text>
            </Box>
          </Button>
        );
      }}
      data={categories}
      keyExtractor={(item) => item._id}
      horizontal
      ml={2}
      showsHorizontalScrollIndicator={false}
    />
  );
}
