# Portfolio Website - Apple UI Design System

## 🍎 Apple Design System Implementation

Dự án portfolio đã được tái cấu trúc hoàn toàn theo phong cách **Apple UI Design System** với hiệu ứng immersive scrolling và trải nghiệm người dùng cao cấp.

## ✨ Tính năng mới

### 🎨 Apple Design System
- **Typography**: SF Pro Display/Text font family với kerning và ligatures
- **Color Palette**: Apple-inspired với blue accent (#007aff/#0a84ff)
- **Shadows**: Apple-style với multiple layers và realistic depth
- **Glassmorphism**: Backdrop blur effects với subtle borders
- **Animations**: Cubic-bezier easing functions cho smooth transitions

### 🌊 Immersive Scrolling Effects
- **Parallax scrolling**: Background elements di chuyển với tốc độ khác nhau
- **Reveal animations**: Content xuất hiện mượt mà khi scroll
- **Smooth transitions**: Tất cả interactions đều có animation
- **Scroll direction detection**: UI phản ứng với hướng scroll

### 🎯 Component Styles
- **Apple Cards**: Glassmorphism với hover effects và scale transforms
- **Apple Buttons**: Gradient backgrounds với shimmer effects
- **Apple Badges**: Subtle hover animations và scale effects
- **Apple Grid**: Responsive grid với consistent spacing

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 480px - Compact layout với reduced spacing
- **Tablet**: 768px - Single column grid layout
- **Desktop**: > 1200px - Full multi-column layout

### Adaptive Features
- Dynamic font sizes với clamp()
- Flexible grid layouts
- Touch-friendly button sizes
- Optimized spacing cho từng screen size

## 🎭 Animation System

### Easing Functions
```css
/* Apple-style cubic-bezier */
cubic-bezier(0.25, 0.46, 0.45, 0.94)
```

### Animation Types
- **Hover**: Scale, translate, và color transitions
- **Scroll**: Parallax và reveal effects
- **Loading**: Shimmer và pulse animations
- **Focus**: Ring effects và border changes

## 🎨 Color System

### Light Theme
```css
--color-bg: #fafafa
--color-bg-accent: #f2f2f7
--color-brand: #007aff
--color-brand-accent: #5ac8fa
--color-text: #1d1d1f
```

### Dark Theme
```css
--color-bg: #000000
--color-bg-accent: #1c1c1e
--color-brand: #0a84ff
--color-brand-accent: #64d2ff
--color-text: #ffffff
```

## 🛠️ Technical Implementation

### Custom Hooks
- `useImmersiveScroll()`: Scroll position và direction tracking
- `useParallax()`: Parallax effect với customizable speed
- `useRevealOnScroll()`: Intersection Observer cho reveal animations

### CSS Architecture
- CSS Custom Properties cho theming
- Utility classes cho consistent styling
- Component-scoped styles
- Mobile-first responsive design

## 🚀 Performance Optimizations

### Smooth Scrolling
- `scroll-behavior: smooth` với `scroll-padding-top`
- Passive event listeners cho scroll events
- Debounced scroll handlers
- Optimized animation timing

### Rendering
- Hardware-accelerated transforms
- Efficient CSS transitions
- Minimal repaints và reflows
- Optimized backdrop-filter usage

## 📁 File Structure

```
src/
├── hooks/
│   └── useImmersiveScroll.ts    # Scroll effects hooks
├── components/
│   ├── Hero.tsx                 # Apple-style hero section
│   ├── Projects.tsx             # Enhanced project cards
│   ├── BackendSkills.tsx        # Technology showcase
│   ├── FrontendSkills.tsx       # Frontend skills grid
│   ├── Contact.tsx              # Interactive contact form
│   ├── Header.tsx               # Glassmorphism header
│   └── Section.tsx              # Consistent section layout
└── index.css                    # Apple Design System CSS
```

## 🎯 Key Improvements

### User Experience
- **Smooth interactions**: Tất cả elements đều có hover effects
- **Visual feedback**: Loading states và success indicators
- **Accessibility**: Focus management và keyboard navigation
- **Performance**: 60fps animations và smooth scrolling

### Visual Design
- **Depth perception**: Multiple shadow layers
- **Consistency**: Unified spacing và typography scale
- **Modern aesthetics**: Glassmorphism và subtle gradients
- **Brand identity**: Apple-inspired color palette

### Code Quality
- **TypeScript**: Full type safety
- **Modular CSS**: Component-scoped styles
- **Custom hooks**: Reusable scroll effects
- **Performance**: Optimized animations và transitions

## 🔧 Customization

### Colors
```css
:root[data-theme="light"] {
  --color-brand: #your-brand-color;
  --color-bg: #your-background-color;
}
```

### Animations
```css
.apple-button:hover {
  transform: translateY(-2px) scale(1.05);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### Spacing
```css
.apple-container {
  max-width: 1200px;
  padding: 0 2rem;
}
```

## 📊 Browser Support

- **Modern browsers**: Chrome 88+, Firefox 85+, Safari 14+
- **Features**: CSS Grid, Flexbox, Custom Properties, Backdrop Filter
- **Fallbacks**: Graceful degradation cho older browsers
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet

## 🚀 Deployment

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Production build
pnpm build

# Preview build
pnpm preview
```

## 📝 Notes

- **Design System**: Hoàn toàn tuân theo Apple Human Interface Guidelines
- **Performance**: Optimized cho 60fps animations
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: Semantic HTML với proper meta tags
- **Mobile**: Touch-optimized với proper tap targets

---

**Lưu ý**: Đây là implementation hoàn chỉnh của Apple Design System với immersive scrolling effects. Tất cả components đều được tối ưu cho performance và user experience.
