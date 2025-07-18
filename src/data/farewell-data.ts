// Type definitions
export interface Person {
  name: string;
  position: string;
  yearsWorked: string;
  startYear: string;
  endYear: string;
  photo: string;
  quote: string;
}

export interface Memory {
  image: string;
  alt: string;
}

export interface FarewellMessage {
  title: string;
  content: string[];
  memories: Memory[];
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  photo: string;
  message: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  alt: string;
  title: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface Footer {
  title: string;
  message: string;
  socialLinks: SocialLink[];
  copyright: string;
}

export interface FarewellData {
  person: Person;
  farewellMessage: FarewellMessage;
  testimonials: Testimonial[];
  gallery: GalleryItem[];
  footer: Footer;
}

// Farewell Page Data
export const farewellData: FarewellData = {
  // Thông tin người chia tay
  person: {
    name: "Nguyễn Văn A",
    position: "Senior Developer",
    yearsWorked: "5",
    startYear: "2019",
    endYear: "2024",
    photo: "/images/team-photo.jpg",
    quote: "Những kỷ niệm đẹp sẽ mãi mãi ở lại trong tim chúng ta"
  },

  // Lời chia tay chính
  farewellMessage: {
    title: "Những Năm Tháng Đáng Nhớ",
    content: [
      "Trong suốt 5 năm làm việc cùng nhau, chúng ta đã trải qua biết bao thăng trầm, những dự án thành công và cả những thách thức khó khăn. Bạn không chỉ là một đồng nghiệp xuất sắc mà còn là một người bạn thân thiết của tất cả chúng ta.",
      "Sự nhiệt huyết, tận tâm và tinh thần làm việc nhóm của bạn đã truyền cảm hứng cho rất nhiều người trong team. Những kỷ niệm về những buổi họp muộn, những lần debug code cùng nhau, hay những bữa trưa vui vẻ sẽ mãi mãi khắc sâu trong trái tim mỗi người."
    ],
    memories: [
      {
        image: "/images/gallery/1.webp",
        alt: "Kỷ niệm 1"
      },
      {
        image: "/images/gallery/2.webp",
        alt: "Kỷ niệm 2"
      },
      {
        image: "/images/gallery/3.webp",
        alt: "Kỷ niệm 3"
      },
      {
        image: "/images/gallery/4.webp",
        alt: "Kỷ niệm 4"
      }
    ]
  },

  // Lời tâm sự từ team members
  testimonials: [
    {
      id: 1,
      name: "Trần Thị B",
      position: "Frontend Developer",
      photo: "/images/team-member-1.jpg",
      message: "A ơi, từ ngày đầu tiên làm việc cùng, tôi đã học được rất nhiều từ bạn. Cách bạn giải quyết vấn đề và tinh thần làm việc nhóm thật sự đáng ngưỡng mộ. Chúc bạn thành công trong hành trình mới!"
    },
    {
      id: 2,
      name: "Lê Văn C",
      position: "Backend Developer",
      photo: "/images/team-member-2.jpg",
      message: "Những lần pair programming với A thật sự rất vui và hiệu quả. Tôi sẽ nhớ mãi những buổi tối debug code cùng nhau. Chúc bạn gặp nhiều may mắn!"
    },
    {
      id: 3,
      name: "Phạm Thị D",
      position: "UI/UX Designer",
      photo: "/images/team-member-3.jpg",
      message: "A không chỉ giỏi code mà còn có gu thẩm mỹ rất tốt. Những feedback của bạn luôn giúp tôi cải thiện thiết kế. Cảm ơn bạn rất nhiều!"
    },
    {
      id: 4,
      name: "Nguyễn Văn E",
      position: "Project Manager",
      photo: "/images/team-member-4.jpg",
      message: "Làm việc với A thật sự rất yên tâm. Bạn luôn hoàn thành task đúng hạn và chất lượng cao. Team sẽ nhớ bạn rất nhiều!"
    },
    {
      id: 5,
      name: "Hoàng Thị F",
      position: "QA Engineer",
      photo: "/images/team-member-5.jpg",
      message: "A luôn viết code sạch và có test coverage tốt. Làm việc với bạn thật sự rất dễ chịu. Chúc bạn thành công trong công việc mới!"
    },
    {
      id: 6,
      name: "Vũ Văn G",
      position: "DevOps Engineer",
      photo: "/images/team-member-6.jpg",
      message: "Những lần deploy production cùng A thật sự rất smooth. Bạn luôn chuẩn bị kỹ lưỡng và có plan B. Chúc bạn thành công!"
    }
  ],

  // Gallery ảnh
  gallery: [
    {
      id: 1,
      image: "/images/gallery/5.webp",
      alt: "Gallery 1",
      title: "Team Building 2023"
    },
    {
      id: 2,
      image: "/images/gallery/12.webp",
      alt: "Gallery 2",
      title: "Release Party"
    },
    {
      id: 3,
      image: "/images/gallery/7.webp",
      alt: "Gallery 3",
      title: "Hackathon 2024"
    },
    {
      id: 4,
      image: "/images/gallery/8.webp",
      alt: "Gallery 4",
      title: "Coffee Break"
    },
    {
      id: 5,
      image: "/images/gallery/9.webp",
      alt: "Gallery 5",
      title: "Lunch Time"
    },
    {
      id: 6,
      image: "/images/gallery/10.webp",
      alt: "Gallery 6",
      title: "Team Meeting"
    },
    {
      id: 7,
      image: "/images/gallery/11.webp",
      alt: "Gallery 7",
      title: "Birthday Party"
    },
    {
      id: 8,
      image: "/images/gallery/2.webp",
      alt: "Gallery 8",
      title: "Farewell Party"
    }
  ],

  // Footer thông tin
  footer: {
    title: "Cảm Ơn Bạn",
    message: "Những đóng góp của bạn sẽ mãi mãi được ghi nhớ. Chúc bạn thành công trong hành trình mới và hẹn gặp lại!",
    socialLinks: [
      {
        name: "Twitter",
        icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>`,
        url: "#"
      },
      {
        name: "LinkedIn",
        icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>`,
        url: "#"
      },
      {
        name: "Pinterest",
        icon: `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
        </svg>`,
        url: "#"
      }
    ],
    copyright: "© 2025 Team KVWEB. Made with ❤️ for our dear colleague."
  }
}; 