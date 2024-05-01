import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SliderImage1 from "../../assets/images/stock1.jpg";
import SliderImage2 from "../../assets/images/stock2.jpg";
import SliderImage3 from "../../assets/images/stock3.jpg";
import SliderImage4 from "../../assets/images/stock4.jpg";

export const ProductsCard = () => {
  return (
    <Card className="w-[300px] rounded-sm mx-5">
      <CardHeader>
        <CardTitle className="text-lg">Pick up where you left off</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row flex-wrap grid-cols-2	justify-center items-center">
          <img className="w-2/5 m-2" src={SliderImage1} />
          <img className="w-2/5 m-2" src={SliderImage2} />
          <img className="w-2/5 m-2" src={SliderImage3} />
          <img className="w-2/5 m-2" src={SliderImage4} />
        </div>
      </CardContent>
    </Card>
  );
};
