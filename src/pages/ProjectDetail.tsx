import { useParams, useNavigate } from "react-router-dom";
import { ProjectData } from "../data/ProjectData";
import { useEffect } from "react";
import { restoreScrollY } from "../utils/scroll";
import { useThemeStore } from "../store/useThemeStore";

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

  const data = ProjectData.find((item) => item.slug === slug);
  if (!data) return null;

  return (
    <div
      className={`fixed inset-0 ${
        isDayMode ? "bg-blue-400/70" : "bg-orange-400/70"
      } backdrop-blur-sm flex justify-center items-center z-50`}
      onClick={() => navigate(-1)}
    >
      <div
        className="relative bg-white p-8 rounded-xl max-w-7xl w-full h-aotu shadow-lg opacity-90"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img
            src={data.image}
            alt={data.title}
            className="w-40 rounded-md mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
          <h2 className="text-md text-gray-600 mb-4">{data.subtitle}</h2>
          <p className="text-sm mb-2 text-gray-500">{data.period}</p>
          <p className="mb-4">{data.content}</p>
          <div className="flex gap-2 flex-wrap">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-200 px-2 py-1 rounded text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
