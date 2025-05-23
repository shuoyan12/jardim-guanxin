'use client';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShow(false); // 向下滾動時隱藏
      } else {
        setShow(true);  // 向上滾動時顯示
      }
      setLastScrollY(currentScrollY);
      
      // 檢查是否在頁面頂部
      setAtTop(currentScrollY === 0);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[999] py-4 transition-all duration-300 ${show ? 'translate-y-0' : '-translate-y-full'} ${atTop ? 'bg-transparent' : 'bg-gray-50/90'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Image
            src="/jardim-logo.png"
            alt="Jardim Guan Xin Logo"
            width={80}
            height={80}
            className="mr-3"
          />
        </div>
        <div className="space-x-4">
          <Link href="#sobre" className="text-3xl hover:underline !text-yellow-400 font-bold">Sobre</Link>
          <Link href="#servicos" className="text-3xl hover:underline !text-yellow-400 font-bold">Serviços</Link>
          <Link href="#fotos" className="text-3xl hover:underline !text-yellow-400 font-bold">Fotos</Link>
          <Link href="#contato" className="text-3xl hover:underline !text-yellow-400 font-bold">Contato</Link>
        </div>
      </div>
    </nav>
  );
}