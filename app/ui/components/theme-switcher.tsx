"use client";

import { HiOutlineSun as SunIcon, HiOutlineMoon as MoonIcon } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted) return <>...</>;

  // if (currentTheme === "dark") {
  //   return <SunIcon className="h-6 w-6 text-accent hover:bg-secBackground" onClick={() => setTheme("light")} />;
  // }

  // if (currentTheme === "light") {
  //   return (
  //     <MoonIcon className="h-6 w-6 text-accent" onClick={() => setTheme("dark")} />
  //   );
  // }

  if (currentTheme === "dark") {
    return (
      <SunIcon
        className="h-full w-full text-accent hover:bg-backgroundDark rounded-full p-2"
        onClick={() => setTheme("light")}
      />
    );
  }
  
  if (currentTheme === "light") {
    return (
      <MoonIcon
        className="h-full w-full text-accent hover:bg-background rounded-full p-2"
        onClick={() => setTheme("dark")}
      />
    );
  }
  
}      