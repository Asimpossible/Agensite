"use client";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggler = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    const mountcheck = () => {
      setMounted(true);
    };
    mountcheck();
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <button
        onClick={() => {
          setTheme(currentTheme === "dark" ? "light" : "dark");
        }}
        className={`${
          mounted ? "opacity-100" : "opacity-0"
        } text-black text-2xl bg-white rounded-full p-2 w-10 h-10 inline-flex justify-center items-center cursor-pointer focus:outline-none`}
      >
        {currentTheme === "dark" ? <BiSun /> : <BiMoon />}
      </button>
    </>
  );
};

export default ThemeToggler;
