import Header from "./Header"
import Slider from "./Slider"
import Content from "./Content"
import Product from "./Product"
import Footer from "./Footer"
import './index.css'
import './App.css'

export default function Layout() {
  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <Content></Content>
      <Product></Product>
      <Footer></Footer>
    </>
  )
}
