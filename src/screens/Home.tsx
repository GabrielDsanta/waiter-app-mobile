import { Box, useSafeArea } from "native-base";
import { Header } from "../components/Home/Header";
import { Platform, StatusBar } from "react-native";
import { Category } from "../components/Home/Category";
import { Menu } from "../components/Home/Menu";
import { Footer } from "../components/Home/Footer";
import { TableModal } from "../components/TableModal";
import { useState } from "react";
import { CartList } from "../@types/CartList";

const isAndroid = Platform.OS === "android";

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState("")
  const [cartItems, setCartItems] = useState<CartList[]>([])

  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 2,
  });

  function handleSaveTable(table: string){
    setSelectedTable(table)
  }

  function handleCancelOrder(){
    setSelectedTable("")
  }

  return (
    <Box
        bg="#FAFAFA"
        flex={1}
        mt={isAndroid ? `${StatusBar.currentHeight}px` : safeAreaProps}
      >
      <Header onCancelOrder={handleCancelOrder} selectedTable={selectedTable} />
      <Category />
      <Menu />
      <Footer cartItems={cartItems} isTableSelected={selectedTable.length > 0} onPress={() => setIsModalOpen(true)} />

      <TableModal onSave={handleSaveTable} onClose={() => setIsModalOpen(false)} visible={isModalOpen} />
    </Box>
  );
}
