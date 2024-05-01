import { ProductsCard } from "@/components/ProductsCard/ProductsCard";
import { MuiSlider } from "@/components/MuiSlider/MuiSlider";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full mx-0">
        <MuiSlider />
      </div>

      <div className="flex flex-row mt-5">
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </div>
    </div>
  );
};

export default HomePage;
