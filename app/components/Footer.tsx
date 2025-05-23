import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

export default function Footer() {
  const whatsappNumber = '41900000000';
  const address = 'R. Sebastiao Santana Da Silva, 51';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="relative text-white h-[400px]">
      <div className="absolute inset-0 z-0">
        <Image
          layout="fill"
          objectFit="cover"
          src="/foto1.jpg"
          alt="Footer background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container mx-auto relative z-10 h-full flex items-center">
        <div className="flex flex-col w-full px-6 space-y-8">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl font-bold mb-6">Contato</h2>
            <div className="flex flex-col space-y-4 text-xl">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <FaWhatsapp className="text-2xl text-green-400" />
                41 90000-0000
              </a>
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-400 transition-colors"
              >
                <IoLocationSharp className="text-2xl text-red-400" />
                R. Sebastiao Santana Da Silva, 51
              </a>
            </div>
          </div>
          <div className="mt-auto text-center w-full">
            <p>© {new Date().getFullYear()} Jardim Guan Xin. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}