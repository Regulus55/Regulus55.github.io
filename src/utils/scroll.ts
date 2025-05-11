// 이전페이지 기억
export const saveScrollY = () => {
  localStorage.setItem("scrollY", window.scrollY.toString());
};

export const restoreScrollY = () => {
  const savedY = localStorage.getItem("scrollY");
  if (savedY) {
    setTimeout(() => {
      window.scrollTo(0, parseInt(savedY, 10));
    }, 50);
  }
};
