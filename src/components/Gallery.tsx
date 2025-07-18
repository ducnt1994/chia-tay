'use client';

import { useState } from 'react';
import { GalleryItem as GalleryItemType } from '@/data/farewell-data';

interface GalleryProps {
  gallery: GalleryItemType[];
}

export default function Gallery({ gallery }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItemType | null>(null);

  const openModal = (item: GalleryItemType) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  function getRotateNumberStyle(index: number) {
    if(index === 3) {
      return 'rotate-[180deg]';
    }
    if(index === 4) {
      return 'rotate-[90deg]';
    }
    if(index === 5) {
      return 'rotate-[270deg]';
    }
  
    return 'rotate-[0deg]';
  }

  return (
    <section id="gallery-section" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Kỷ Niệm Đẹp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những khoảnh khắc đáng nhớ trong suốt thời gian làm việc cùng nhau
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gallery.map((item, index) => (
            <div 
              key={item.id} 
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => openModal(item)}
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className={`w-full h-48 object-cover group-hover:brightness-75 transition-all duration-300 ${getRotateNumberStyle(index)}`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                    </svg>
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button 
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.alt} 
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 