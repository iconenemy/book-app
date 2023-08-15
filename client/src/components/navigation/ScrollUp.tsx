import { useEffect, useState } from "react";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { IoIosArrowUp } from "react-icons/io";

const ScrollUp = () => {
  const [top, setTop] = useState<boolean>(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setTop(window.scrollY > 0));
    }
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`sticky ${
        scrollDirection === "up" && top ? "bottom-20" : ""
      }  h-10 pr-9 transition-all duration-700 flex justify-end`}
    >
      <button
        onClick={goToTop}
        className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center"
      >
        <IoIosArrowUp size={"30px"} />
      </button>
    </div>
  );
};

export default ScrollUp;
