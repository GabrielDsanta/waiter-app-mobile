import { Box, Center, Image, Spinner, Text, View, useSafeArea } from "native-base";
import { Header } from "../components/Home/Header";
import { Platform, StatusBar } from "react-native";
import { CategoryList } from "../components/Home/Category";
import { Menu } from "../components/Home/Menu";
import { Footer } from "../components/Home/Footer";
import { TableModal } from "../components/TableModal";
import { useEffect, useState } from "react";
import { CartList } from "../models/CartList";
import EmptyPng from '../assets/empty.png'
import { Product } from "../models/Product";
import { Category } from "../models/Category";
import { api } from "../services/api";

const isAndroid = Platform.OS === "android";

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [cartItems, setCartItems] = useState<CartList[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 2,
  });

  function handleSaveTable(table: string){
    setSelectedTable(table)
  }

  function handleClear(){
    setSelectedTable("")
    setCartItems([])
  }

  function handleAddToCart(product: Product){
    if(!selectedTable){
      setIsModalOpen(true)
    }

    setCartItems(state => {
      const item = state.findIndex((item) => item.product._id === product._id)

      if(item < 0){
        return state.concat({
          quantity: 1,
          product
        })
      }

      const newCartItem = [...state]
      newCartItem[item] = {
        ...newCartItem[item],
        quantity: newCartItem[item].quantity + 1
      }

      return newCartItem
    })
  }

  function handleDeclineToCart(product: Product){

    setCartItems(state => {
      const i = state.findIndex((item) => item.product._id === product._id)

      const item = state[i]

      const newCartItems = [...state]

      if(item.quantity === 1){
        newCartItems.splice(i, 1)

        return newCartItems
      }

      newCartItems[i] = {
        ...newCartItems[i],
        quantity: newCartItems[i].quantity - 1
      }

      return newCartItems

    })
  }

  useEffect(() => {
    api.get("/categories")
    .then((response) => {
      setCategories(response.data)
    })

    api.get("/products")
    .then((response) => {
      setProducts(response.data)
    })
  }, [])

  return (
    <Box
        bg="#FAFAFA"
        flex={1}
        mt={isAndroid ? `${StatusBar.currentHeight}px` : safeAreaProps}
      >
        <TableModal onSave={handleSaveTable} onClose={() => setIsModalOpen(false)} visible={isModalOpen} />
        <Header onCancelOrder={handleClear} selectedTable={selectedTable} />

        {isLoading && (
          <Center flex={1}>
            <Spinner size="lg" color="#D73035" />
          </Center>
        )}

        {!isLoading && (
          <>
            <CategoryList categories={categories} />

            {products.length > 0 ? (
              <Menu products={products} onAddToCart={handleAddToCart} />
            ): (
              <Center>
                <Image alt="" source={EmptyPng} />
                <Text mt={6} fontFamily="mono" color="#666">Nenhum produto foi encontrado !</Text>
              </Center>
            )}
          </>
        )}
        
        <Footer 
          isLoading={isLoading}
          onAddToCart={handleAddToCart} 
          onDeclineToCart={handleDeclineToCart} 
          cartItems={cartItems} 
          isTableSelected={selectedTable.length > 0} 
          onPress={() => setIsModalOpen(true)} 
          onConfirmOrder={handleClear}
        />
    </Box>
  );
}
