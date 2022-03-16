import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

import { data } from "../pages/api/data";

const total_followers = data.total_followers;

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <header className="header">
      <div className="flex flex-wrap wrapper">
        <div>
          <h1 className="font-bold text-2xl text-light-primary-text dark:text-dark-primary-text">
            Social Media Dashboard
          </h1>
          <p className="font-semibold font text-sm text-light-blue-text dark:text-dark-blue-text">
            Total Followers: {total_followers}
          </p>
        </div>

        <hr className="w-full my-5 border-light-blue-text/50 md:hidden" />

        <div className="flex w-full justify-between items-center space-x-1 md:w-auto md:ml-auto">
          <label className="text-sm font-semibold text-light-blue-text dark:text-dark-blue-text">
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </label>
          {renderThemeChanger()}
        </div>
      </div>
    </header>
  );
};

export default Header;
