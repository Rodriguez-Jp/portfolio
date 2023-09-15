export default function Header() {
  return (
    <header className="flex justify-between text-white font-game p-4 z-20">
      <div className="flex justify-center items-center">
        <p className="text-xl">
          <a href="#">Juan Rodriguez</a>
        </p>
      </div>
      <nav className="md:text-lg">
        <ul className="flex">
          <li className="p-2">
            <a href="#">Home</a>
          </li>
          <li className="p-2 hidden md:block">
            <a href="#projects">Projects</a>
          </li>
          <li className="p-2">
            <a href="#contact-me">Contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
