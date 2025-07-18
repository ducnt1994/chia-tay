'use client';

import { useState, useEffect, useRef } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const [listMemories, setListMemories] = useState<{
    name: string;
    message: string;
    position: number;
  }[]>([]);


  useEffect(() => {
    // fetch('https://opensheet.vercel.app/1TFUcVe4J5lW7PivSDJ8K4rh-x2Kxu-7VD5Ly1uuy8MA/sheet1')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log('Sheet data:', data);
    //     setListMemories(data.map((item: any, index: number) => {
    //       return {
    //         id: index + 1,
    //         name: item.name,
    //         message: item.message,
    //         position: index + 1,
    //       }
    //     }));
    //   });
    setListMemories([
      {
        "name": "Nguyễn GPT Trung Đức",
        "message": "Anh Nhất ơi, em sẽ nhớ dáng vẻ trầm trầm nhưng luôn mỉm cười của anh mỗi lần tụi em tám chuyện. Chúc anh qua môi trường mới sẽ luôn vui vẻ, bình an và gặp nhiều người dễ thương giống tụi em!",
        "position": 1
      },
      {
        "name": "Nguyễn GPT Chí Trung",
        "message": "Nhất à, làm em út mà đi trước thì để anh buồn lắm đó. Chúc em vững vàng với hành trình mới, và nhớ là lúc nào quay về cũng có team — có anh — luôn chờ em kể chuyện và... cười một mình!",
        "position": 2
      },
      {
        "name": "Tạ GPT Hoàng Bình",
        "message": "Anh Nhất à, đi đâu thì cũng nhớ giữ cái style cười thầm thương hiệu của anh nha. Chúc anh gặt hái được nhiều điều mới, và có dịp thì quay về kể chuyện cho team cũ nghe đó!",
        "position": 3
      },
      {
        "name": "Lê GPT Thị Ngọc Phương",
        "message": "Cậu em trầm tính của chị mà đi rồi, chị nhớ lắm luôn á. Mong em đến nơi mới vẫn sẽ có những ngày nhẹ nhàng, bình yên, và có thêm nhiều lý do để cười nhiều hơn nhé!",
        "position": 4
      },
      {
        "name": "Hoàng GPT Thị Trang",
        "message": "Anh Nhất ơi, người im lặng mà dễ mến nhất team! Em chúc anh ở chỗ mới sẽ gặp toàn điều tốt lành, và ai cũng yêu quý anh như tụi em từng yêu quý anh vậy đó.",
        "position": 5
      },
      {
        "name": "Đỗ GPT Thị Quế",
        "message": "Anh Nhất à, anh trầm lặng mà dễ gần ghê á. Em sẽ nhớ mấy lúc anh cười một mình mỗi khi tụi em kể mấy chuyện vớ vẩn. Mong anh thật hạnh phúc và thuận lợi ở nơi mới nha!",
        "position": 6
      },
      {
        "name": "Nguyễn GPT Thị Hồng Hạnh",
        "message": "Anh Nhất luôn là người khiến team thấy bình yên. Em mong anh dù đi đâu cũng sẽ mang được nụ cười ấm áp đó theo. Chúc anh mọi điều suôn sẻ trên hành trình mới!",
        "position": 7
      },
      {
        "name": "Bạch GPT Thu Hương",
        "message": "Anh đi rồi, không ai ngồi im nghe em kể mấy chuyện linh tinh nữa. Anh phải thật vui và ổn ở nơi mới nha. Nhớ team thì về liền đó!",
        "position": 8
      },
      {
        "name": "Nguyễn GPT Thị Vân Anh",
        "message": "Chắc em sẽ rất nhớ dáng vẻ trầm mặc nhưng rất ấm của anh Nhất. Chúc anh ở nơi mới sẽ thật nhiều niềm vui, và gặp những đồng đội dễ thương như team mình!",
        "position": 9
      },
      {
        "name": "Nguyễn GPT Duy Anh",
        "message": "Anh Nhất giống như phiên bản đời thực của chill music – nhẹ nhàng mà khiến người ta thấy dễ chịu. Em chúc anh luôn giữ vững chất đó, và có những ngày thật yên lành phía trước!",
        "position": 10
      },
      {
        "name": "Nguyễn GPT Thị Thuỳ Linh",
        "message": "Anh Nhất là người luôn làm em thấy dễ chịu mỗi lần nói chuyện. Anh đi rồi team chắc sẽ nhớ nhiều lắm đó. Chúc anh thật nhiều may mắn và niềm vui nha!",
        "position": 11
      },
      {
        "name": "Nguyễn GPT Anh Quân",
        "message": "Nhất à, anh biết em luôn là người đặc biệt — ít nói nhưng sâu sắc. Anh tin em sẽ làm rất tốt ở bất kỳ đâu em đến. Nếu có áp lực, hãy cứ cười như cách em vẫn thường làm: bình thản và rất riêng.",
        "position": 12
      }
    ])
  }, []);

  const totalSlides = listMemories.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentSlide]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Lời Tâm Sự
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những lời chúc tốt đẹp và kỷ niệm từ các thành viên trong team
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
        </div>
        
        {/* Testimonial Slider */}
        <div className="relative">
          {/* Slider Container */}
          <div 
            className="testimonial-slider overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {listMemories.map((testimonial, index) => (
                <div key={index} className="testimonial-slide w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      <div className="text-center md:text-left">
                        <img 
                          src={'/images/message-avt.jpg'} 
                          alt={testimonial.name} 
                          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto md:mx-0 mb-4 border-4 border-purple-100 shadow-lg"
                        />
                        <h4 className="font-bold text-xl text-gray-800">{testimonial.name}</h4>
                      </div>
                      <div className="flex-1">
                        <div className="mb-6">
                          <svg className="w-8 h-8 text-purple-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                        </div>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                          {`"${testimonial.message}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            style={{ opacity: currentSlide === 0 ? 0.5 : 1 }}
          >
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            style={{ opacity: currentSlide === totalSlides - 1 ? 0.5 : 1 }}
          >
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {listMemories.map((_, index) => (
              <button 
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-purple-600' : 'bg-purple-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 