'use client';
import Image from 'next/image';

export default function Services() {
  return (
    <section id="servicos" className="my-12">
      <h2 className="text-5xl font-bold mb-4 text-center">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          image="/farm.png"
          title="Eventos"
          description="Espaço ideal para casamentos, aniversários e eventos corporativos."
        />
        <ServiceCard
          image="/bd.png"
          title="Aniversários"
          description="Comemore seu aniversário em um ambiente único e especial."
        />
        <ServiceCard
          image="/relax.png"
          title="Lazer"
          description="Atividades recreativas e de contemplação da natureza."
        />
      </div>
    </section>
  );
}

function ServiceCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="h-48 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="rounded-lg"
        />
      </div>
      <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
