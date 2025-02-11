# Tailwind CSS 4 설치

1. 터미널에 명령어 입력

```
npm install tailwindcss @tailwindcss/vite
```

2. vite.config.ts 수정

```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

3. index.css 추가

```
@import "tailwindcss";
```

---

## 후기

1. Tailwind CSS IntelliSense 플러그인 문제

- 해결방법 : tailwind.config.js 파일을 생성하고 내용 추가

```
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

2. Tailwind CSS 설치 방법이 굉장히 간소해졌다.
