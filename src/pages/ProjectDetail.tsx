import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useThemeStore } from "../store/useThemeStore";
import Glassmorphism from "../components/wrapper/Glassmorphism";
import AllProjectDetail from "../data/projectDetail";
import { SkillsData } from "../data";

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
            <p className="text-md mb-4 text-gray-300">{detail.period}</p>
            <div className="max-w-xl w-full max-h-96 overflow-hidden rounded-md mb-8">
              <img src={detail.image} alt={detail.title} className="w-full" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{detail.subtitle}</h3>
            {/* <div className="flex gap-4 bg-white p-2 rounded-lg shadow-xl">
              {detail.skills.map((name) => {
                const skill = SkillsData.find((s) => s.name === name);

                return skill ? (
                  <img
                    key={name}
                    src={skill.src}
                    alt={skill.alt}
                    className="h-10 w-10"
                  />
                ) : null;
              })}
            </div> */}

            <div className="bg-white text-3xl font-3xl p-2">
              {detail.skills.map((name, index) => {
                // const skill = SkillsData.find((s) => s.name === name);

                return <div key={index}>:ddddddddddddd</div>;
              })}
            </div>
            <div className="flex flex-col items-center justify-center w-full border-t-2 border-gray-500 mt-10">
              <div>dd</div>
              <div>dd</div>
            </div>
          </div>
        </Glassmorphism>
      </div>
    </div>
  );
};

export default ProjectDetail;
