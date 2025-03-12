import { useTheme } from "../../hooks/useTheme.jsx";

function About() {
  const { theme } = useTheme();
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
      <h1>About Html</h1>
      <button>{theme}</button>
    </div>
  );
}

export default About;
