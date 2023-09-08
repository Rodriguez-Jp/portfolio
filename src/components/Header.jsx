export default function Header() {
  return (
    <header className="flex justify-between text-white font-game p-4 z-20">
      <div className="flex justify-center items-center">
        <p className="text-xl">Juan Rodriguez</p>
      </div>
      <nav className="md:text-lg">
        <ul className="flex">
          <li className="p-2">Home</li>
          <li className="p-2 hidden md:block">Projects</li>
          <li className="p-2">Contact me</li>
        </ul>
      </nav>
    </header>
  );
}
