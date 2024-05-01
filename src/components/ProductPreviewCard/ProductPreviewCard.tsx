export type ProductPreviewCardProps = {
  image: string;
  productName: string;
};
export const ProductPreviewCard = ({
  image,
  productName,
}: ProductPreviewCardProps) => {
  return (
    <div>
      <img className="w-2/5 m-2" src={image} />
      <p>{productName}</p>
    </div>
  );
};
