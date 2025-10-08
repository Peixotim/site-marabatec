"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Instagram, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      icon: <MessageCircle className="w-6 h-6 text-[#25D366]" />,
      label: "Telefone / WhatsApp",
      value: "(31) 98263-1563",
      href: "https://wa.me/31982631563",
      shadowColor: "rgba(37,211,102,0.4)",
    },
    {
      icon: <Mail className="w-6 h-6 text-[#EA4335]" />,
      label: "E-mail",
      value: "gestaoavancatec@gmail.com",
      href: "mailto:gestaoavancatec@gmail.com",
      shadowColor: "rgba(234,67,53,0.35)",
    },
    {
      icon: <Instagram className="w-6 h-6 text-[#E1306C]" />,
      label: "Instagram",
      value: "@avancatecoficial",
      href: "https://www.instagram.com/avancatecoficial/",
      shadowColor: "rgba(225,48,108,0.35)",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#4B0082]" />,
      label: "Endereço",
      value:
        "R. Luiz Rodrigues dos Santos, 44 - Todos Os Santos, Cel. Fabriciano - MG",
      href: "https://www.google.com/maps/search/?api=1&query=R.+Luiz+Rodrigues+dos+Santos,+44+-+Todos+Os+Santos,+Cel.+Fabriciano+-+MG",
      shadowColor: "rgba(75,0,130,0.25)",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br relative overflow-hidden">
      {/* Overlay suave */}
      <div className="absolute inset-0 bg-gradient-to-br from- to-[#F2960E]/10 pointer-events-none"></div>

      <Card className="relative w-full max-w-5xl mx-auto shadow-xl rounded-3xl p-10 bg-white/80 backdrop-blur-md border border-[#E6DAF9]">
        <CardHeader>
          <CardTitle className="text-4xl font-extrabold text-center text-[#4B0082] tracking-tight drop-shadow-sm">
            Entre em Contato Conosco
          </CardTitle>
          <p className="text-center text-[#4B0082]/70 text-lg mt-2">
            Estamos prontos para ajudar você a transformar sua carreira.
          </p>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {contacts.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className={`flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-[#EADAFB] bg-gradient-to-br from-white via-[#FDFBFF] to-[#F8F3FF] shadow-md hover:shadow-[0_6px_30px_${item.shadowColor}] transition-all duration-500 cursor-pointer hover:border-[#F2960E]/50`}
              >
                <div className="p-4 rounded-full bg-gradient-to-br from-[#F9F5FF] to-[#EFE6FF] shadow-inner">
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-[#4B0082]">
                  {item.label}
                </p>
                <p className="text-[#4B0082]/70 text-center text-sm font-medium">
                  {item.value}
                </p>
              </motion.a>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
