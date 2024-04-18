import { Link } from "react-router-dom";

type Props = {
  total: number;
  district: string;
};

const SearchResultInfo = ({ total, district }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span>
        {total} Nhà hàng được tìm thấy ở {district}
        <Link
          to="/"
          className="ml-1 text-sm font-semibold underline cursor-point text-blue-500"
        >
          Thay đổi địa điểm
        </Link>
      </span>
    </div>
  );
};

export default SearchResultInfo;
