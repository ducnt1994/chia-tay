'use client';

import { Person, FarewellMessage as FarewellMessageType } from '@/data/farewell-data';

interface FarewellMessageProps {
  person?: Person;
  farewellMessage: FarewellMessageType;
}

export default function FarewellMessage({ farewellMessage }: FarewellMessageProps) {

  return (
    <section id="farewell-section" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Lời Chia Tay
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              {farewellMessage.title}
            </h3>
            {farewellMessage.content.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                
              </div>
              <div>
                <p className="font-semibold text-gray-800">Năm làm việc cùng nhau</p>
                <p className="text-gray-600">2024 - 2025</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {farewellMessage.memories.map((memory, index) => (
                <img 
                  key={index}
                  src={memory.image} 
                  alt={memory.alt} 
                  className={`w-full h-48 object-cover rounded-lg shadow-lg ${index % 2 === 1 ? 'mt-8' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 