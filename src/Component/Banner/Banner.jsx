import bannerImg from "../../assets/books.jpg";
export const Banner = () => {
  return (
    <div className="hero bg-base-200 py-10 md:py-20 rounded-3xl mb-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="md:max-w-sm rounded-lg shadow-2xl" />
        <div className="text-center md:text-left space-y-8">
          <h1 className="text-6xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn bg-[#23BE0A] text-white px-8">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};
