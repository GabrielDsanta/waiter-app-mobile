import { Box, useSafeArea } from "native-base";
import { Header } from "../components/Home/Header";
import { Platform, StatusBar } from "react-native";
import { Category } from "../components/Home/Category";
import { Menu } from "../components/Home/Menu";
import { Footer } from "../components/Home/Footer";

const isAndroid = Platform.OS === "android";

export function Home() {
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 2,
  });

  return (
    <Box
      bg="#FAFAFA"
      flex={1}
      mt={isAndroid ? `${StatusBar.currentHeight}px` : safeAreaProps}>
      <Header />
      <Category />
      <Menu />
      <Footer />
    </Box>
  );
}
