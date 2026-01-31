# EBteam Website

A pixel-perfect implementation of the EBteam homepage, built with semantic HTML5, modern CSS, and vanilla JavaScript.

## Overview

EBteam is a global application platform that simplifies visa applications, business setups, payments, and documentation for students, entrepreneurs, and businesses worldwide.

## Features

- **16 Comprehensive Sections**: From navigation to footer, every section from the UI mockup
- **Fully Responsive**: Mobile-first design with breakpoints for tablet and desktop
- **Semantic HTML5**: Clean, accessible markup using proper semantic tags
- **Modular CSS Architecture**: Organized, maintainable stylesheets
- **Smooth Interactions**: Mobile menu, smooth scrolling, form validation
- **Performance Optimized**: Lazy loading, optimized assets, minimal JavaScript

## Tech Stack

- **HTML5**: Semantic markup, accessibility features
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)**: Vanilla JS for interactions
- **Fonts**: Geist (headings), Inter (body)

## Design System

### Colors
- **Primary Blues**: #2158E1, #38B2F6, #75A0FF, #DBEAFE
- **Accent Yellows**: #A26207, #FEF9C3, #FFC107, #FFEDC5
- **Greens**: #009B3B, #DCFCE7
- **Purples**: #9332EA, #F3E8FF
- **Reds**: #DC2626, #FEE2E2
- **Oranges**: #EA580C, #FFEBE8
- **Neutrals**: #000000, #252525, #828282, #B8B8B8, #F8F8F8, #FFFFFF

### Typography
- **Headings**: Geist (Regular, Medium, Semibold, Bold)
- **Body**: Inter (Regular, Medium, Semibold, Bold)

### Spacing
8px grid system: 8px, 16px, 24px, 32px, 48px, 64px, 96px

## Project Structure

```
ebteams.com/
├── index.html                 # Main HTML file
├── css/
│   ├── reset.css             # CSS reset
│   ├── variables.css         # Design tokens (colors, fonts, spacing)
│   ├── typography.css        # Font imports and text styles
│   ├── layout.css            # Grid systems, containers, utilities
│   ├── components.css        # Reusable components (buttons, cards, badges)
│   ├── sections/             # Section-specific styles
│   │   ├── navigation.css
│   │   ├── hero.css
│   │   ├── trusted-brands.css
│   │   ├── statistics.css
│   │   ├── services.css
│   │   ├── features.css
│   │   ├── global-reach.css
│   │   ├── community.css
│   │   ├── testimonials.css
│   │   ├── blog.css
│   │   ├── download-app.css
│   │   └── footer.css
│   └── responsive.css        # Media queries and responsive styles
├── js/
│   └── main.js               # JavaScript for interactions
├── assets/
│   ├── fonts/                # Geist and Inter fonts
│   ├── images/               # All images
│   ├── icons/                # SVG icons
│   ├── logos/                # EBteam logo and brand logos
│   └── addons/               # Rating stars and badges
└── README.md                 # This file
```

## Sections

1. **Navigation Bar** - Sticky header with logo, menu, and CTA
2. **Hero Section** - Main headline with image grid
3. **Trusted Brands** - Partner logos (Google, Microsoft, Amazon, etc.)
4. **Statistics** - Student, enterprise, and country stats
5. **Services Overview** - Introduction to services
6. **Visa & Immigration** - Immigration services details
7. **US Business Setup** - Business formation services
8. **Banking & Bills Payments** - Financial services
9. **Educational Payments** - Student payment solutions
10. **Features** - 9 trust, speed, and scale features (blue section)
11. **Global Reach** - Country flags showing global presence
12. **Community** - EBteam community benefits
13. **Testimonials** - Customer reviews and ratings
14. **Blog** - Latest articles and insights
15. **Download App** - Mobile app download CTA
16. **Footer** - Links, newsletter, social media

## Getting Started

### View the Website

1. **Option 1: Direct File**
   - Simply open `index.html` in your browser

2. **Option 2: Local Server** (Recommended)
   ```bash
   # Using Python 3
   python3 -m http.server 8080

   # Using Node.js (http-server)
   npx http-server -p 8080

   # Using PHP
   php -S localhost:8080
   ```
   Then visit: `http://localhost:8080`

### Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px
- **Large Desktop**: ≥ 1280px

## Features & Interactions

### JavaScript Features
- Mobile menu toggle
- Smooth scrolling to sections
- Newsletter form validation
- Lazy loading for images
- Header shadow on scroll
- Fade-in animations on scroll

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text for all images
- Reduced motion support

## Customization

### Changing Colors
Edit `css/variables.css` and update the CSS custom properties:
```css
:root {
  --color-primary-blue: #2158E1;
  --color-accent-yellow: #FFC107;
  /* ... */
}
```

### Modifying Content
All content is in `index.html`. Edit the HTML to update:
- Text content
- Images
- Links
- Sections

### Adding New Sections
1. Add HTML in `index.html`
2. Create a new CSS file in `css/sections/`
3. Link the CSS file in the `<head>` of `index.html`
4. Add responsive styles in the section CSS or `responsive.css`

## Performance

- **Lazy Loading**: Images load as they enter viewport
- **Optimized Assets**: SVG icons for scalability
- **Minimal JavaScript**: Only essential interactions
- **CSS Organization**: Modular CSS prevents bloat
- **Web Fonts**: Using Google Fonts CDN

## Future Enhancements

- [ ] Add more animations and transitions
- [ ] Implement blog functionality
- [ ] Add search functionality
- [ ] Create additional pages (About, Services, Contact)
- [ ] Add multilingual support
- [ ] Implement backend integration for forms
- [ ] Add Google Analytics
- [ ] Add chatbot functionality
- [ ] Create admin dashboard

## Credits

- **Design**: Based on the provided UI mockup
- **Development**: Built with HTML, CSS, and JavaScript
- **Fonts**: Geist and Inter from Google Fonts
- **Icons**: Custom SVG icons from the asset files

## License

All rights reserved. This is a project implementation for EBteam.

## Contact

For questions or support, please contact the EBteam development team.

---

**Built with** ❤️ **for global expansion and mobility**
# ebteams.com
