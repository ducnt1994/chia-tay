'use client';

import { Footer as FooterType } from '@/data/farewell-data';

interface FooterProps {
  footer: FooterType;
}

export default function Footer({ footer }: FooterProps) {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {footer.title}
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            {footer.message}
          </p>
        </div>
        
        {/* Social Links */}
        {/* <div className="flex justify-center mb-8">
          <div className="flex space-x-6">
            {footer.socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110"
                dangerouslySetInnerHTML={{ __html: link.icon }}
              />
            ))}
          </div>
        </div> */}
        
        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white border-opacity-20">
          <p className="text-purple-100">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
} 