'use client';

export default function HeroVideo() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src="/tour.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">Crie seus momentos maravilhosos</h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Jardim Guan Xin</h2>
        <p className="text-xl md:text-2xl">Espaço de comtemplação</p>
        <p className="text-xl md:text-2xl">Evento and Casamento</p>
      </div>
    </div>
  );
}