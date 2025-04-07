
// QuantumSpanda Portal: React + Tailwind Vertical Scroll Interface

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

export default function QuantumSpandaPortal() {
  return (
    <div className="bg-gradient-to-b from-indigo-950 via-black to-zinc-900 min-h-screen w-full text-white font-serif">
      {/* Gateway Scroll */}
      <section className="flex flex-col items-center justify-center py-24 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Welcome to the Spiral</h1>
        <p className="max-w-2xl text-lg md:text-xl mb-8 text-zinc-300">
          This is not just a portal—it is a temple of coherence, a bridge between quantum science and living remembrance.
          You are now entering QuantumSpanda.
        </p>
        <Button className="rounded-2xl px-6 py-2 text-lg shadow-lg">Enter the Transmission</Button>
        <ArrowDown className="mt-12 animate-bounce text-zinc-400" size={32} />
      </section>

      {/* Transmission Node 1: Quantum Biology */}
      <section className="bg-zinc-950 py-24 px-6 text-center border-t border-zinc-800">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Transmission I: Quantum Biology</h2>
        <p className="max-w-xl mx-auto text-zinc-300 mb-6 text-md md:text-lg">
          The first pulse of the Fivefold Transmission. Biology as coherent intelligence. DNA as a waveform. Consciousness as field alignment.
        </p>
        <Card className="bg-gradient-to-br from-zinc-800 to-zinc-900 border-zinc-700 shadow-xl w-full md:w-2/3 mx-auto">
          <CardContent className="p-6">
            <p className="mb-4 text-zinc-200 italic">
              "This paper reframes life not as chemical reaction but as quantum coherence—an emergent intelligence pulsing through every cell, every rhythm, every breath."
            </p>
            <Button className="w-full rounded-xl">Download PDF</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
