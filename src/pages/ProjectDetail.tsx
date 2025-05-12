import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useThemeStore } from "../store/useThemeStore";
import Glassmorphism from "../components/wrapper/Glassmorphism";
import AllProjectDetail from "../data/projectDetail";
import { Overview, Preview, Stack } from "../utils/types";


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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const detail = AllProjectDetail.find((p) => p.slug === slug);
  if (!detail) return null;

  return (
    <div className="relative text-white flex justify-center items-center w-full min-h-screen overflow-x-hidden xl:py-20">

      <div
        className={`fixed inset-0 w-full h-full bg-cover bg-center z-0 
          ${isDayMode ? "bg-day-sky" : "bg-orange-sky"}
        `}
        onClick={() => navigate(-1)}
      />

      <div className="relative max-w-7xl w-full min-h-screen z-10">
        <div className="flex items-center justify-center w-full rounded-xl p-6 z-20 bg-black/50">

          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center justify-center w-full p-8"
          >
            <div
              id="title"
              className="relative flex flex-col items-center justify-center max-w-3xl w-full mb-8"
            >
              <h1 className="text-4xl text-white font-bold">{detail.title}</h1>
              <p className="text-md mb-4 text-gray-300">{detail.period}</p>
              <div className="max-w-xl w-full h-auto overflow-hidden rounded-md mb-6">
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-semibold">{detail.subtitle}</h3>
            </div>

            <div
              id="overview"
              className="relative flex flex-col items-start justify-center max-w-4xl w-full pt-10 border-t-2 border-gray-500"
            >
              <h2 className="text-4xl font-bold mb-6 text-greyShadow">
                Overview
              </h2>
              <div className="flex flex-col text-xl p-2 gap-6">
                {Array.isArray(detail?.overview) &&
                  detail?.overview?.map((item: Overview, index: number) => {
                    return (
                      <div key={index}>
                        <div className="text-xl font-bold mb-1">
                          {index + 1}. {item.title}
                        </div>
                        <ul className="text-lg">
                          {item.content?.map((element) => (
                            <li className="flex gap-3 ml-5">
                              <span>●</span>
                              <span>{element}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div
              id="preview"
              className="relative flex flex-col items-start justify-center max-w-4xl w-full pt-10 mt-10 border-t-2 border-gray-500"
            >
              <h2 className="text-4xl font-bold mb-6 text-greyShadow">
                Preview
              </h2>
              <div className="grid grid-cols-2 place-items-center items-start w-full text-xl">
                {Array.isArray(detail?.preview) &&
                  detail?.preview?.map((item: Preview, index: number) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center w-96 mb-8"
                      >
                        <div className="text-xl font-bold mb-1">
                          {item.title}
                        </div>
                        <div className="mb-2">
                          {item.image?.map((element) => (
                            <div className="w-96 h-96 overflow-hidden">
                              <img
                                src={element}
                                alt={element}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="text-lg">
                          {item.content?.map((element) => (
                            <div className="flex gap-3">{element}</div>
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
