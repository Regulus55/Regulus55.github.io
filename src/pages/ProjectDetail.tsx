import { useParams, useNavigate } from "react-router-dom";
import { ProjectData } from "../data/ProjectData";
import { useEffect } from "react";
import { restoreScrollY } from "../utils/scroll";
import { useThemeStore } from "../store/useThemeStore";
import Glassmorphism from "../components/wrapper/Glassmorphism";
import AllProjectDetail from "../data/projectDetail";

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

  // 이전 스크롤 위치 복원
  useEffect(() => {
    return () => {
      restoreScrollY();
    };
  }, []);

  const detail = AllProjectDetail.find((p) => p.slug === slug);
  if (!detail) return null;

  return (
    <div className="relative flex justify-center items-center w-full min-h-screen overflow-x-hidden py-20">
      <div
        className={`fixed inset-0 w-full h-full bg-cover bg-center z-0 
          ${isDayMode ? "bg-day-sky" : "bg-orange-sky"}
        `}
        onClick={() => navigate(-1)}
      />

      <div className="relative max-w-7xl w-full min-h-screen z-10">
        <Glassmorphism className="flex items-center justify-center w-full rounded-xl px-6 z-20">
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center justify-center max-w-2xl w-full p-8"
          >
            <h1 className="text-4xl text-white font-bold">{detail.title}</h1>
            {/* <h2 className="text-md text-gray-700 mb-4">{data.subtitle}</h2> */}
            <p className="text-md mb-4 text-gray-300">{detail.period}</p>
            <img
              src={detail.image}
              alt={detail.title}
              className="w-full max-w-xl rounded-md mb-8"
            />{" "}
            <img
              src={detail.image}
              alt={detail.title}
              className="w-full max-w-xl rounded-md mb-8"
            />{" "}
            <img
              src={detail.image}
              alt={detail.title}
              className="w-full max-w-xl rounded-md mb-8"
            />
            <h3 className="text-xl mb-20">{detail.subtitle}</h3>
            <div className="flex items-center justify-center flex-wrap gap-2 border-t border-gray-500 w-full max-w-3xl">
              {detail.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 px-2 py-1 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Glassmorphism>
      </div>
    </div>
  );
};

export default ProjectDetail;
