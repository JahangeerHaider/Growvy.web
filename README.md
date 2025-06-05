# 🚀 Growvy Frontend Project

## ✅ Final Testing, Debugging, and Performance Optimization

### ✔️ Testing
- **Component testing**: All major components were tested for rendering and responsiveness.
- **Layout inspection**: Used browser dev tools to check element positions and hierarchy.
- **Mobile responsiveness**: Used responsive viewports and media queries.

### 🐞 Debugging
- **Employee icon position issue**: Fixed using `position: absolute`, and `z-index`.
- **Footer alignment bug**: Resolved by moving the footer outside restricted containers and setting `width: 100%`.
- **Text and card overflow**: Adjusted padding/margin inside cards.
- **Star rating vertical alignment**: Scoped `.rating-star` using container-specific classes to avoid global CSS collision.

### ⚡ Performance Optimization
- Removed unnecessary re-renders by simplifying component structure.
- Used optimized image sizes.
- Ensured only required CSS rules were loaded per component.

---



## 🔗 GitHub Link

==>  https://github.com/JahangeerHaider

---

## 📘 Learning Note

This project helped me:
- Build responsive layouts using React and CSS.
- Understand component-based structure in React.
- Handle layout debugging using dev tools.
- Use Font Awesome for icons.
- Collaborate with AI for better UI/UX handling.

---

## ⚠️ Challenges Faced

1. Making alternating layouts (left text/right image) for TargetAudience.
2. Managing CSS when image overflowed in large screen.
3. SVG paths and how to animate/structure them in JSX.
4. Footer layout misalignment on small screens.

---

## 🤖 AI Help Used

- Generating and modifying CSS for responsiveness
- Fixing layout alignment for buttons and text
- Explaining SVG `<path>` logic for curved designs
- Optimizing Git commands and GitHub pushing process

---





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
