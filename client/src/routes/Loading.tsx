import loading from "../assets/loading.svg";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <img src={loading} alt="loading..." className="w-[500px] h-[500px]" />
    </div>
  );
};

export default Loading;
