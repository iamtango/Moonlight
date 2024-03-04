import { shimmer_card_unit } from "../constants";

const CardShimmer = () => {
  return (
    <div className="p-3 mb-2 border rounded border-[#d3d5df]">
      <div className="h-32 w-60 bg-[#f0f0f0] animate-pulse"></div>
      <div className="w-[60%] mt-3 h-3  bg-[#e0e0e0] animate-pulse"></div>
      <div className="w-[80%] mt-1.5 h-5 bg-[#e0e0e0] animate-pulse "></div>
      <div className="w-[100%] mt-5 h-5 bg-[#e0e0e0] animate-pulse "></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {new Array(shimmer_card_unit).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer;
