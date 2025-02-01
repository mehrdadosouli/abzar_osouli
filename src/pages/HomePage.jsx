import BestSellingProducts from "../components/bestSellingProducts/BestSellingProducts";
import Carousel from "../components/carousel/Carousel";
import Category from "../components/category/Category";
import NewProducts from "../components/NewProducts/NewProducts";

export default function HomePage() {
  return (
    <div>
      <Carousel />
      <Category />
      <NewProducts />
      <BestSellingProducts />
    </div>
  )
}
