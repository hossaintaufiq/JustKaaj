import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
}

export default function Logo({ variant = 'dark' }: LogoProps) {
  const isLight = variant === 'light';
  
  return (
    <Link href="#home" className="flex items-center group">
      <div className="flex items-baseline gap-1">
        <span className={`text-xl sm:text-2xl md:text-3xl font-bold ${isLight ? 'text-green-400' : 'text-green-500'}`}>
          Just
        </span>
        <span className={`text-xl sm:text-2xl md:text-3xl font-bold ${isLight ? 'text-white' : 'text-gray-900'}`}>
          Kaaj
        </span>
      </div>
    </Link>
  );
}

