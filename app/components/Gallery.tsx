'use client';
import Image from "next/image";

export default function Gallery() {
  return (
    <section id="fotos" className="my-12">
      <h2 className="text-5xl font-bold mb-4 text-center">Fotos</h2>
      <div className="grid grid-cols-12 gap-2">
        {/* 第一行：2張圖並排 */}
        <div className="col-span-6 relative pb-[60%] overflow-hidden rounded-lg">
          <Image
            src="/foto1.jpg"
            alt="Foto 1"
            width={800}
            height={480}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="col-span-6 relative pb-[60%] overflow-hidden rounded-lg">
          <Image
            src="/foto2.jpg"
            alt="Foto 2"
            width={800}
            height={480}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* 第二行：寬幅圖片 */}
        <div className="col-span-12 relative pb-[40%] overflow-hidden rounded-lg">
          <Image
            src="/foto3.jpg"
            alt="Foto 3"
            width={1600}
            height={640}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* 第三行：3張圖並排 */}
        <div className="col-span-4 relative pb-[75%] overflow-hidden rounded-lg">
          <Image
            src="/foto4.jpg"
            alt="Foto 4"
            width={400}
            height={300}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="col-span-4 relative pb-[75%] overflow-hidden rounded-lg">
          <Image
            src="/foto5.jpg"
            alt="Foto 5"
            width={400}
            height={300}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="col-span-4 relative pb-[75%] overflow-hidden rounded-lg">
          <Image
            src="/foto6.jpg"
            alt="Foto 6"
            width={400}
            height={300}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}