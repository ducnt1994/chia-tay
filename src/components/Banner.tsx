'use client';

import { Person } from '@/data/farewell-data';

interface BannerProps {
  person: Person;
}

export default function Banner({ person }: BannerProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative z-10 text-center text-white px-4">
        <div className="mb-8">
          <img 
            src={'/images/banner/avt.webp'} 
            alt="Team Photo" 
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover rotate-[270deg]"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Chia Tay
        </h1>
        <h2 className="text-2xl md:text-4xl font-light mb-8">
          Nguyễn Văn Nhất
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          "{person.quote}"
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => scrollToSection('farewell-section')}
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Xem Lời Chia Tay
          </button>
          <button 
            onClick={() => scrollToSection('gallery-section')}
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition duration-300"
          >
            Kỷ Niệm
          </button>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse delay-500"></div>
    </section>
  );
} 