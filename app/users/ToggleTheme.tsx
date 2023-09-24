"use client";
import { useTheme } from "next-themes";
import React from "react";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const handleToggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div>
      <button onClick={handleToggleTheme}>Toggle theme</button>
    </div>
  );
};

export default ToggleTheme;
