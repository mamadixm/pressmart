import { TopBar } from "./top-bar";
import { MiddleBar } from "./middle-bar";
import { Navbar } from "./navbar";

export function Header() {
  return (
    <header className="w-full sticky top-0 z-40 bg-white">
      <TopBar />
      <MiddleBar />
      <Navbar />
    </header>
  );
}