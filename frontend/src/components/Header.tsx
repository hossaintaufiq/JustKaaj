import Logo from './Logo';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="relative">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}
