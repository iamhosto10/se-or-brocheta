"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function FeedbackForm() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  const isLowRating = rating > 0 && rating <= 3;

  const handleRating = (value: number) => {
    setRating(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", { rating });
  };

  return (
    <div className="w-full max-w-[600px] bg-white border-[3px] border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10">
      {/* Header Image */}
      <div className="flex justify-center mb-8">
        <Image
          className="object-contain border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#f9f9f9]"
          alt="Sr. Brocheta Brand Logo"
          src="https://lh3.googleusercontent.com/aida/ADBb0uiSwrXiZuN_aUS2BHe6A6YBCPWmcTi4UrErPD6IWLlnDtDOr_9TZXerZoL9417WnLr-tzS5nPEBC57RlxNfM0JqK8vXG6nGqnvUt02PZl-HFrG7gYjz69cIBL7mLrDA6JMk-LMj76ejZUsAdbLUXMw-suH0x_MuszI3ZOSXG_a6FT0KiwgtJEnXIrz-Tk_npto3FZs1YE9vpTIRINTTsaMYJJlQ_FLeO2T2nwBkHi_s0LBh0f66GTrrpxhnGYlINmcXXP_aG_gJ2Q"
          width={128}
          height={128}
          unoptimized
        />
      </div>

      {/* Titles */}
      <div className="text-center mb-8">
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-black mb-2">
          ¿Cómo estuvo tu experiencia? ⭐️
        </h1>
        <p className="font-sans text-lg text-gray-700">Te tomará menos de 10 segundos</p>
      </div>

      {/* Star Rating */}
      <div className="flex justify-center gap-2 mb-8">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`transition-transform hover:-translate-y-1 ${
              (hoveredRating || rating) >= star ? "text-[#FFD700]" : "text-gray-300"
            }`}
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
          >
            <Star
              className="w-12 h-12 md:w-16 md:h-16"
              fill={(hoveredRating || rating) >= star ? "#FFD700" : "transparent"}
              strokeWidth={1}
              stroke="currentColor"
            />
          </button>
        ))}
      </div>

      {rating > 0 && (
        <>
          {isLowRating && (
            <h2 className="font-serif text-2xl font-bold text-black text-center mb-8 pb-4 border-b-2 border-black border-dashed">
              Cuéntanos qué pasó y lo solucionamos
            </h2>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {isLowRating && (
              <>
                <div>
                  <Label htmlFor="feedback" className="block font-bold text-black mb-2 uppercase">
                    Tu Comentario
                  </Label>
                  <Textarea
                    id="feedback"
                    placeholder="Escribe aquí los detalles..."
                    rows={4}
                    className="w-full bg-[#f9f9f9] border-[3px] border-black p-4 font-sans text-base focus:outline-none focus:ring-0 focus:border-[#006d30] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] resize-none rounded-none"
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp" className="block font-bold text-black mb-2 uppercase">
                    WhatsApp
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="+57 3007053492"
                    className="w-full bg-[#f9f9f9] border-[3px] border-black p-4 font-sans text-base focus:outline-none focus:ring-0 focus:border-[#006d30] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none h-auto"
                  />
                </div>
                <div>
                  <Label htmlFor="name" className="block font-bold text-black mb-2 uppercase">
                    Nombre
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ingresa tu Nombre"
                    className="w-full bg-[#f9f9f9] border-[3px] border-black p-4 font-sans text-base focus:outline-none focus:ring-0 focus:border-[#006d30] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none h-auto"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block font-bold text-black mb-2 uppercase">
                    Correo Electrónico
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full bg-[#f9f9f9] border-[3px] border-black p-4 font-sans text-base focus:outline-none focus:ring-0 focus:border-[#006d30] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none h-auto"
                  />
                </div>
              </>
            )}

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#6dfe93] text-[#00210a] border-[3px] border-black font-bold text-lg py-4 uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                👉 Calificar
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
