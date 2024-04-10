import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Thưởng thức đồ ăn mang về ngay hôm nay
        </h1>
        <span className="text-xl">Thức ăn chỉ cách một cú nhấp chuột!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Gọi món mang đi thậm chí còn nhanh hơn!
          </span>
          <span>
            Tải xuống ứng dụng HSonEats để đặt hàng nhanh hơn và đề xuất được cá
            nhân hóa
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
