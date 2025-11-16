# Ініціалізація та налаштування React проекту

### 1. Ініціалізація проекту:

- Створіть новий React проект за допомогою Vite:
```powershell
npm create vite@latest my-react-app -- --template react
```

- Перейдіть до каталогу проекту:
```powershell
cd my-react-app
```

- Встановіть залежності:
```powershell
npm install
```

### 2. Створення компоненту:

- У директорії `src/components` створіть файл `Button.jsx` або `Input.jsx`.
- Реалізуйте компонент, який приймає та використовує `props`:

Для кнопки: `text` (текст кнопки) та `type` (тип кнопки, наприклад, `button`, `submit`).

Для поля введення: `placeholder` (підказка) та `type` (тип поля, наприклад, `text`, `password`).

Додайте обробники подій:

Для кнопки: `onClick` (обробник кліку).

Для поля введення: `onChange` (обробник зміни значення).

### 3. Використання компоненту:

Імпортуйте ваш компонент у `App.jsx` (або `App.tsx`, якщо використовуєте TypeScript).

Використовуйте компонент, передаючи необхідні `props`.

### 4. Тестування проекту:

Запустіть проект:
```powershell
npm run dev
```

Перевірте роботу компонента у браузері.

### 5. Деплоймент:

Розгорніть додаток на платформі хостингу (наприклад, Vercel або Netlify).

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
