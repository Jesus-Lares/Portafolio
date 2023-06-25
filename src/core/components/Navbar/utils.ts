export const hiddenNavbar = (e: MouseEvent) => {
  const hasToggleNavBar = document.getElementById("toggle-navbar");
  if (!hasToggleNavBar) return true;
  const elementsInNav = ["nav", "toggle", "toggle-navbar"];
  const hasElementInNav = elementsInNav.some((element) =>
    document.getElementById(element)?.contains(e.target as Node)
  );
  return hasElementInNav;
};
