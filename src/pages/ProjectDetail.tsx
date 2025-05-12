import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useThemeStore } from "../store/useThemeStore";
import Glassmorphism from "../components/wrapper/Glassmorphism";
import AllProjectDetail from "../data/projectDetail";
import { Overview, Stack } from "../utils/types";

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
    <div className="relative text-white flex justify-center items-center w-full min-h-screen overflow-x-hidden py-20">
      <div
        className={`fixed inset-0 w-full h-full bg-cover bg-center z-0 
          ${isDayMode ? "bg-day-sky" : "bg-orange-sky"}
        `}
        onClick={() => navigate(-1)}
      />

      <div className="relative max-w-7xl w-full min-h-screen z-10">
        <div className="flex items-center justify-center w-full rounded-xl px-6 z-20 bg-black/50">
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center justify-center w-full p-8"
          >
            <div id="title" className="relative flex flex-col items-center justify-center max-w-3xl w-full mb-12">
              <h1 className="text-4xl text-white font-bold">{detail.title}</h1>
              <p className="text-md mb-4 text-gray-300">{detail.period}</p>
              <div className="max-w-xl w-full h-auto overflow-hidden rounded-md mb-4">
                <img src={detail.image} alt={detail.title} className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-semibold">{detail.subtitle}</h3>
            </div>

            <div id="stacks" className="relative flex flex-col items-start justify-center w-full max-w-xl">
              <h2 className="text-xl">Stack</h2>
              <div className="text-xl font-3xl p-2">
                {Array.isArray(detail?.stacks) &&
                  detail.stacks.map((skill: Stack, index: number) => {
                    if (
                      typeof skill === "object" &&
                      "title" in skill &&
                      "stack" in skill &&
                      Array.isArray(skill.stack)
                    ) {
                      return (
                        <div key={index}>
                          <strong>{skill.title}</strong>: {skill.stack.join(", ")}
                        </div>
                      );
                    }
                    return null;
                  })}
              </div>
            </div>

            <div id="overview" className="relative flex flex-col items-start justify-center max-w-5xl w-full py-4 mt-10 border-t-2 border-gray-500">
              <h2 className="text-xl">Overview</h2>
              <div className="flex flex-col text-xl p-2 gap-4">
                {Array.isArray(detail?.overview) &&
                  detail?.overview?.map((content: Overview, index: number) => {
                    return (
                      <div key={index} className="">
                        <span>{index}</span> <strong>{content.title}</strong>: {content.content}
                      </div>
                    );
                  })}
              </div>
            </div>

            <div id="preview" className="relative flex flex-col items-start justify-center max-w-5xl w-full py-4 mt-10 border-t-2 border-gray-500">
              <h2 className="text-xl">Preview</h2>
              <div className="flex flex-col text-xl p-2 gap-4">
                {Array.isArray(detail?.overview) &&
                  detail?.overview?.map((content: Overview, index: number) => {
                    return (
                      <div key={index} className="">
                        <span>{index}</span> <strong>{content.title}</strong>: {content.content}
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
