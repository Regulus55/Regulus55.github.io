import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useThemeStore } from "../store/useThemeStore";
import { Overview, Preview } from "../utils/types";
import { AllProjectDetail } from "../data";
import { DetailTitle } from "../components";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isDayMode } = useThemeStore();
  const navigate = useNavigate();

  // esc 눌러도 상세페이지 꺼지게
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate(-1);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // 디테일 페이지에서 원래페이지 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const detail = AllProjectDetail.find((p) => p.slug === slug);
  if (!detail) return null;

  return (
    <div className="relative text-white flex justify-center items-center w-full min-h-screen overflow-x-hidden xl:py-20">
      <div
        className={`fixed inset-0 w-full h-full bg-cover bg-center z-0 
          ${isDayMode ? "bg-blue-sky" : "bg-orange-sky"}
        `}
        onClick={() => navigate("/")}
      />

      <div className="relative xl:max-w-5xl 2xl:max-w-7xl w-full h-full min-h-screen z-10">
        <div className=" flex items-center justify-center w-full rounded-xl p-6 z-20 bg-black/50">
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center justify-center w-full p-8"
          >
            <div
              id="title"
              className="relative flex flex-col items-center justify-center max-w-3xl w-full mb-8"
            >
              <h1 className="text-3xl lg:text-4xl text-white font-bold">{detail.title}</h1>
              <p className="text-sm lg:text-base mb-4 text-gray-300">{detail.period}</p>
              <div className="max-w-xl w-full h-auto overflow-hidden rounded-md mb-6">
                <img
                  src={detail.image}
                  alt={detail.title}
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold">{detail.subtitle}</h3>
            </div>

            <div className="relative flex flex-col items-start justify-center max-w-4xl w-full pt-10 border-t-2 border-gray-500">
              <DetailTitle>Overview</DetailTitle>
              <div className="flex flex-col text-xl p-2 gap-6">
                {Array.isArray(detail?.overview) &&
                  detail?.overview?.map((item: Overview, index: number) => {
                    return (
                      <div key={index}>
                        <div className="text-lg lg:text-xl font-bold mb-1">
                          {index + 1}. {item.title}
                        </div>
                        <ul className="text-base lg:text-lg">
                          {item.content?.map((element) => (
                            <li key={element} className="flex gap-3 ml-5">
                              <span>•</span>
                              <span>{element}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="relative flex flex-col items-start justify-center max-w-4xl w-full pt-10 mt-10 border-t-2 border-gray-500">
              <DetailTitle>Preview</DetailTitle>
              <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center items-start w-full text-xl">
                {Array.isArray(detail?.preview) &&
                  detail?.preview?.map((item: Preview, index: number) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center w-auto lg:w-96 mb-10"
                      >
                        <div className="text-xl font-bold mb-1">
                          {item.title}
                        </div>
                        <div className="mb-2">
                          {item.image?.map((element) => (
                            <img
                              key={element}
                              src={element}
                              alt={element}
                              loading="lazy"
                              className="w-full h-full object-contain my-1"
                            />
                          ))}
                        </div>
                        <div className="text-base lg:text-lg">
                          {item.content?.map((element) => (
                            <div key={element} className="flex gap-3">
                              {element}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
