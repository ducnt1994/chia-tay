# Farewell Next.js - Trang Web Chia Tay Đồng Nghiệp

Một trang web chia tay đẹp mắt được xây dựng bằng Next.js 14, TypeScript và Tailwind CSS, dành riêng cho việc chia tay đồng nghiệp với những lời chúc tốt đẹp và kỷ niệm đáng nhớ.

## 🚀 Tính Năng

- **Banner Section**: Hero section với ảnh đại diện và lời quote
- **Farewell Message**: Lời chia tay chính với nội dung tùy chỉnh
- **Testimonials Slider**: Carousel hiển thị lời tâm sự từ team members
- **Gallery**: Thư viện ảnh với modal xem chi tiết
- **Footer**: Thông tin liên hệ và social links
- **Responsive Design**: Tương thích với mọi thiết bị
- **Smooth Animations**: Hiệu ứng chuyển động mượt mà
- **TypeScript**: Type safety và IntelliSense

## 🛠️ Công Nghệ Sử Dụng

- **Next.js 14**: React framework với App Router
- **TypeScript**: Type safety và development experience tốt hơn
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: useState, useEffect, useRef cho state management
- **ESLint**: Code linting và formatting

## 📁 Cấu Trúc Project

```
farewell/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout với metadata
│   │   ├── page.tsx            # Trang chính
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Banner.tsx          # Hero section
│   │   ├── FarewellMessage.tsx # Lời chia tay chính
│   │   ├── Testimonials.tsx    # Slider testimonials
│   │   ├── Gallery.tsx         # Gallery ảnh
│   │   └── Footer.tsx          # Footer
│   └── data/
│       └── farewell-data.ts    # Data và type definitions
├── public/
│   └── images/                 # Thư mục chứa ảnh
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Cách Chạy Project

### Yêu Cầu Hệ Thống
- Node.js 18.17 trở lên
- npm hoặc yarn

### Cài Đặt Dependencies
```bash
npm install
# hoặc
yarn install
```

### Chạy Development Server
```bash
npm run dev
# hoặc
yarn dev
```

Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt để xem kết quả.

### Build Production
```bash
npm run build
# hoặc
yarn build
```

### Chạy Production
```bash
npm start
# hoặc
yarn start
```

## 📝 Tùy Chỉnh Nội Dung

### 1. Thay Đổi Thông Tin Người Chia Tay
Chỉnh sửa file `src/data/farewell-data.ts`:

```typescript
export const farewellData: FarewellData = {
  person: {
    name: "Tên Người Chia Tay",
    position: "Vị Trí Công Việc",
    yearsWorked: "5",
    startYear: "2019",
    endYear: "2024",
    photo: "/images/team-photo.jpg",
    quote: "Lời quote của người chia tay"
  },
  // ... các phần khác
};
```

### 2. Thay Đổi Testimonials
```typescript
testimonials: [
  {
    id: 1,
    name: "Tên Team Member",
    position: "Vị Trí",
    photo: "/images/team-member-1.jpg",
    message: "Lời tâm sự từ team member"
  },
  // ... thêm testimonials khác
]
```

### 3. Thay Đổi Gallery
```typescript
gallery: [
  {
    id: 1,
    image: "/images/gallery-1.jpg",
    alt: "Mô tả ảnh",
    title: "Tiêu đề ảnh"
  },
  // ... thêm ảnh khác
]
```

### 4. Thêm Ảnh Mới
1. Đặt ảnh vào thư mục `public/images/`
2. Cập nhật đường dẫn trong `farewell-data.ts`
3. Đảm bảo ảnh có định dạng phù hợp (jpg, png, webp)

## 🎨 Tùy Chỉnh Giao Diện

### Thay Đổi Màu Sắc
Chỉnh sửa file `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#your-color',
          600: '#your-color',
          // ...
        }
      }
    }
  }
}
```

### Thay Đổi Font
Cập nhật trong `src/app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
```

## 🔧 Tính Năng Kỹ Thuật

### Slider Functionality
- Auto-play với interval 5 giây
- Pause khi hover
- Navigation buttons và dots
- Touch/swipe support (có thể thêm)
- Keyboard navigation (có thể thêm)

### Modal Gallery
- Click để mở modal xem ảnh
- ESC key để đóng
- Click outside để đóng
- Responsive design

### Performance
- Image optimization với Next.js
- Lazy loading cho components
- Efficient re-renders với React hooks
- TypeScript type checking

## 📱 Responsive Design

Project được thiết kế responsive với các breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push code lên GitHub
2. Connect repository với Vercel
3. Deploy tự động

### Netlify
1. Build project: `npm run build`
2. Deploy thư mục `.next`

### Other Platforms
Project tương thích với mọi hosting platform hỗ trợ Node.js.

## 🤝 Đóng Góp

1. Fork project
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Project này được tạo ra với mục đích giáo dục và sử dụng cá nhân.

## 🙏 Cảm Ơn

Cảm ơn bạn đã sử dụng project này! Nếu có bất kỳ câu hỏi hoặc góp ý nào, hãy tạo issue trên GitHub.

---

**Made with ❤️ for our dear colleague**
