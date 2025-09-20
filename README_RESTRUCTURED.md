# Portfolio Website - Tái cấu trúc với đa ngôn ngữ và Adobe Design

## 🎯 Tính năng mới

### ✅ Đa ngôn ngữ (i18n)
- Hỗ trợ tiếng Anh (EN) và tiếng Việt (VI)
- Language switcher với dropdown menu
- Tự động phát hiện ngôn ngữ từ browser
- Lưu trữ ngôn ngữ đã chọn trong localStorage

### ✅ Cấu hình JSON
- **User Info** (`src/config/userInfo.json`): Thông tin cá nhân, liên kết mạng xã hội
- **Projects** (`src/config/projects.json`): Danh sách dự án với metadata
- **Technologies** (`src/config/technologies.json`): Kỹ năng backend/frontend với mô tả chi tiết

### ✅ Adobe Design System
- Typography: Adobe Clean font family
- Color palette: Adobe-inspired với blue accent
- Component styles: `.adobe-card`, `.adobe-button`, `.adobe-badge`
- Smooth animations và hover effects
- Clean, minimalist layout

## 📁 Cấu trúc thư mục mới

```
src/
├── components/           # React components
├── config/              # JSON configuration files
│   ├── userInfo.json    # Thông tin cá nhân
│   ├── projects.json    # Danh sách dự án
│   └── technologies.json # Kỹ năng công nghệ
├── i18n/               # Internationalization
│   ├── index.ts        # i18n configuration
│   └── locales/        # Translation files
│       ├── en.json     # English translations
│       └── vi.json     # Vietnamese translations
└── ...
```

## 🚀 Cách sử dụng

### 1. Cài đặt dependencies
```bash
pnpm install
```

### 2. Chạy development server
```bash
pnpm dev
```

### 3. Cấu hình thông tin cá nhân
Chỉnh sửa `src/config/userInfo.json`:
```json
{
  "name": "Tên của bạn",
  "title": "Chức danh",
  "bio": "Mô tả bản thân",
  "socialLinks": {
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username",
    "email": "mailto:your@email.com"
  }
}
```

### 4. Thêm dự án
Chỉnh sửa `src/config/projects.json`:
```json
[
  {
    "id": "project-id",
    "title": "Tên dự án",
    "summary": "Mô tả ngắn gọn",
    "tech": ["React", "TypeScript", "Node.js"],
    "repo": "https://github.com/username/repo",
    "demo": "https://demo-url.com",
    "featured": true,
    "year": 2024
  }
]
```

### 5. Cập nhật kỹ năng
Chỉnh sửa `src/config/technologies.json`:
```json
{
  "backend": [
    {
      "name": "Java",
      "level": "Expert",
      "description": "Enterprise applications, Spring ecosystem",
      "icon": "☕",
      "category": "language"
    }
  ],
  "frontend": [...]
}
```

### 6. Thêm ngôn ngữ mới
1. Tạo file `src/i18n/locales/[lang].json`
2. Copy structure từ `en.json`
3. Dịch các giá trị
4. Cập nhật `src/i18n/index.ts` để thêm ngôn ngữ mới

## 🎨 Customization

### Màu sắc
Chỉnh sửa CSS variables trong `src/index.css`:
```css
:root[data-theme="warm"] {
  --color-brand: #your-brand-color;
  --color-bg: #your-background-color;
  /* ... */
}
```

### Typography
Thay đổi font trong `src/index.css`:
```css
--font-sans: "Your Font", system-ui, sans-serif;
--font-display: "Your Display Font", serif;
```

### Animations
Điều chỉnh AOS settings trong components:
```javascript
AOS.init({
  duration: 750,
  easing: "ease-out-cubic",
  once: false,
  mirror: true,
  offset: 80,
});
```

## 🔧 Dependencies mới

- `react-i18next`: Quản lý đa ngôn ngữ
- `i18next`: Core i18n library
- `i18next-browser-languagedetector`: Tự động phát hiện ngôn ngữ

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Grid layouts tự động adapt
- Touch-friendly interactions

## 🌙 Dark/Light Theme

- Tự động detect system preference
- Theme switcher trong header
- Smooth transitions
- Consistent color tokens

## 🚀 Build & Deploy

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📝 Notes

- Tất cả text content đã được chuyển sang i18n
- Components sử dụng JSON config thay vì hard-code
- Design system Adobe-inspired với clean aesthetics
- SEO-friendly với semantic HTML
- Accessibility features (ARIA labels, focus management)

## 🔄 Migration từ version cũ

1. Backup dữ liệu cũ
2. Copy thông tin từ components cũ vào JSON files
3. Test tất cả features
4. Update translations nếu cần
5. Deploy và verify

---

**Lưu ý**: Đây là version tái cấu trúc hoàn toàn với architecture mới. Tất cả content và styling đã được cập nhật theo Adobe Design System.
