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

  // 이전 스크롤 위치 복원
  useEffect(() => {
    return () => {
      restoreScrollY();
    };
  }, []);

  // 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const detail = AllProjectDetail.find((p) => p.slug === slug);
  if (!detail) return null;

  return (
    <div
      className={`fixed inset-0 ${
        isDayMode ? "bg-day-sky" : "bg-orange-sky"
      } backdrop-blur-sm flex justify-center items-center z-50`}
      onClick={() => navigate(-1)}
    >
      <Glassmorphism className="relative rounded-xl max-w-7xl w-full h-auto m-20 max-h-[90vh] overflow-y-auto scrollbar-none">
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center justify-center w-full h-full p-8"
        >
          <h1 className="text-4xl text-white font-bold">{detail.title}</h1>
          {/* <h2 className="text-md text-gray-700 mb-4">{data.subtitle}</h2> */}
          <p className="text-md mb-4 text-gray-300">{detail.period}</p>
          <img
            src={detail.image}
            alt={detail.title}
            className="w-full max-w-xl rounded-md mb-4"
          />
          <div className="flex gap-2 flex-wrap">
            0
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
  );
};

export default ProjectDetail;
