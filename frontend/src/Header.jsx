import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-white ">
      <div className="container md:max-w-[75vw] mx-auto px-8 md:px-4 py-3 flex items-center justify-between">
        <Navbar />
      </div>
    </header>
  );
}
