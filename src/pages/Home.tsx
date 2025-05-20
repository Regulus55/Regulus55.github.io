import { Overview, ProjectDetail } from "./index";
import { useParams } from "react-router-dom";

const Home = () => {
  const { slug } = useParams();

  return (
    <div className="relative w-full h-full overflow-x-hidden">
      <Overview />

      {slug && (
        <div className="fixed inset-0 z-48 overflow-y-auto">
          <ProjectDetail />
        </div>
      )}
    </div>
  );
};

export default Home;
