const themeToggle = document.querySelector("[data-theme-toggle]");
const themePreference = window.matchMedia("(prefers-color-scheme: dark)");
const themeColor = document.querySelector('meta[name="theme-color"]');
const themeStorageKey = "portfolio-theme";
let hasManualChoice = document.documentElement.dataset.themePreference === "manual";

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeColor.content = theme === "dark" ? "#202720" : "#f4f0e5";

  if (!themeToggle) {
    return;
  }

  const nextTheme = theme === "dark" ? "light" : "dark";
  const label = `Ativar modo ${nextTheme === "dark" ? "escuro" : "claro"}`;

  themeToggle.setAttribute("aria-label", label);
  themeToggle.setAttribute("title", label);
}

applyTheme(document.documentElement.dataset.theme);

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  hasManualChoice = true;
  document.documentElement.dataset.themePreference = "manual";
  applyTheme(nextTheme);

  try {
    localStorage.setItem(themeStorageKey, nextTheme);
  } catch (error) {
    console.warn("Não foi possível salvar a preferência de tema.", error);
  }
});

themePreference.addEventListener("change", (event) => {
  if (!hasManualChoice) {
    applyTheme(event.matches ? "dark" : "light");
  }
});
