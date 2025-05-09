let savedScrollY = 0;

export const saveScrollY = () => {
  savedScrollY = window.scrollY;
};

export const restoreScrollY = () => {
  window.scrollTo(0, savedScrollY);
};
