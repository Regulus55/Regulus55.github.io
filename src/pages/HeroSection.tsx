const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src="/images/background/nat.jpg"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <h1 className="text-5xl font-bold text-gray-800">안녕하세요</h1>
      </div>
    </div>
  );
};

export default HeroSection;
