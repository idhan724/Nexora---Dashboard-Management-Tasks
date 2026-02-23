import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { applyTheme, getInitialTheme, type Theme } from "@/utils/theme";

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  function onPressedChange(pressed: boolean) {
    const next = pressed ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
  }
  return (
    <Toggle
      pressed={theme === "dark"}
      onPressedChange={onPressedChange}
      aria-label="Toggle theme"
      size="sm"
      className="rounded-full"
    >
      {theme === "dark" ? (
        <Moon className="h-8 w-8 text-indigo-400" />
      ) : (
        <Sun className="h-8 w-8 text-yellow-700" />
      )}
    </Toggle>
  );
}

export default ThemeToggle;
