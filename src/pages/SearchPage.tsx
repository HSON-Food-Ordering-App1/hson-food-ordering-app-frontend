import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { district } = useParams();
  const { results, isLoading } = useSearchRestaurants(district);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!results?.data || !district) {
    return <span>Không có kết quả nào được tìm thấy</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list">Thêm món ăn ở đây :)</div>
      <div id="main-content" className="flex flex-col gap-5"></div>
    </div>
  );
};

export default SearchPage;
