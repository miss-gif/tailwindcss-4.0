# Tailwind CSS 4 설치

1. 터미널에 명령어 입력

```
npm install tailwindcss @tailwindcss/vite
```

2. vite.config.ts 파일 수정

```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

3. index.css 코드 추가

```
@import "tailwindcss";
```

---

## 추천하는 Tailwind CSS 플러그인

1. 터미널에 명령어 입력

```
npm install -D prettier prettier-plugin-tailwindcss
```

2. .prettierrc.json 파일에 플러그인 추가

```
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

사용 전)

```
<p className="bg-slate-100 p-2">테스트</p>
<p className="p-2 bg-slate-100">테스트</p>
```

사용 후)

```
<p className="bg-slate-100 p-2">테스트</p>
<p className="bg-slate-100 p-2">테스트</p>
```

---

### 후기

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

---

### 절대 경로 추가하기

수정 해야하는 파일

1. JS는 `vite.config.js`
2. TS는 `vite.config.ts` `tsconfig.json`

vite.config.js

```
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: [
      { find: "@", replacement: "./src" },
      { find: "@components", replacement: "/src/components" },
      { find: "@headers", replacement: "/src/components/headers" },
      { find: "@pages", replacement: "/src/pages" },
    ],
  },
});

```

tsconfig.json

```
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,

    /* 절대 경로 설정 */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["src/components/*"],
      "@pages/*": ["src/pages/*"],
      "@headers/*": ["src/components/headers/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```

#### VS Code 설정

1. 에디터 설정에서 `typescript.preferences`를 검색
2. 기본값 `shortest`에서 `non-relative`로 변경

##### 후기

이전에는 `tsconfig.app.json`파일이 존재했고 이 파일도 같이 수정했어야 했는데,
`tsconfig.json`파일과 통합되면서 많이 간소해졌다.
