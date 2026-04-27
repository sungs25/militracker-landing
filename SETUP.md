# 밀리트래커 랜딩 페이지

스티키 랜딩 페이지를 복제해 만든 밀리트래커 전용 홍보 페이지 프로젝트입니다.

## 📂 변경된 파일 요약

스티키 → 밀리트래커로 교체된 파일들:

- `src/pages/index.astro` — Hero, Features 6개, CTA를 밀리트래커 내용으로 전면 교체
- `src/config.yaml` — 사이트 이름, 도메인, SEO 메타데이터
- `src/navigation.ts` — 푸터 저작권 + 개인정보처리방침 URL
- `src/components/Logo.astro` — 헤더 로고 (📌 스티키 → 🪖 밀리트래커)
- `src/assets/images/853shots_so.png` — Hero 스크린샷 추가
- `src/assets/images/327shots_so.png` — 스티키 스크린샷 제거
- `package.json` — 프로젝트명 `militracker-landing`

## 🚀 로컬 실행

```bash
npm install
npm run dev
```

http://localhost:4321 에서 확인하세요.

## 🌐 Vercel 배포 순서

1. 이 폴더를 새 Git 저장소로 초기화 후 GitHub에 push
   ```bash
   git init
   git add .
   git commit -m "Initial commit: MiliTracker landing"
   git branch -M main
   git remote add origin https://github.com/sungs25/militracker-landing.git
   git push -u origin main
   ```

2. Vercel 대시보드에서 **Add New Project** → 위 레포 import

3. 빌드 설정은 자동 감지됨 (Astro framework). 그대로 Deploy.

4. 배포 후 받은 URL을 `src/config.yaml`의 `site:` 항목에 정확히 반영
   - 예: `https://militracker-landing.vercel.app/`
   - 수정 후 다시 push하면 자동 재배포됨

## ⚠️ 출시 전 마지막으로 해야 할 일

### 1. Play Store 링크 연결

`src/pages/index.astro`에서 두 군데를 실제 링크로 교체:

**Hero 섹션 (24~30번째 줄 근방)**
```astro
{
  variant: 'primary',
  text: 'Google Play 다운로드',
  href: 'https://play.google.com/store/apps/details?id=com.sungs.militracker',
  target: '_blank',
  icon: 'tabler:download',
},
```

**CTA 섹션 (78~85번째 줄 근방)**
```astro
{
  variant: 'primary',
  text: 'Google Play에서 다운로드',
  href: 'https://play.google.com/store/apps/details?id=com.sungs.militracker',
  target: '_blank',
  icon: 'tabler:download',
},
```

### 2. 파비콘 교체 (선택)

군사 녹색 + 골드 앱 아이콘으로 만들어둔 게 있다면:

- `src/assets/favicons/favicon.svg`
- `src/assets/favicons/favicon.ico`
- `src/assets/favicons/apple-touch-icon.png`

이 3개를 교체하면 브라우저 탭 아이콘까지 통일됨. 안 해도 사이트는 정상 작동함.

### 3. Google Search Console 등록

새 도메인을 Search Console에 등록 후 발급받은 verification ID를
`src/config.yaml`의 `googleSiteVerificationId:` 항목에 넣기.

### 4. Open Graph 이미지 (선택)

`src/assets/images/default.png`가 카톡·트위터 공유 시 미리보기로 뜨는 이미지인데,
아직 스티키 이미지일 수 있음. 1200x628 사이즈로 밀리트래커 배너 이미지를 만들어
같은 파일명으로 덮어쓰면 됨.

## 🔗 Play Console 연결 마지막 단계

배포 끝난 URL을 Play Console의 두 곳에 등록:

- **앱 콘텐츠 → 개인정보처리방침** : Notion URL (이미 navigation.ts에 들어있음, 동일하게)
- **스토어 등록정보 → 웹사이트** : 배포된 Vercel URL

---

스티키 랜딩 페이지 (`sticky-landing.vercel.app`)는 이 작업과 완전히 분리된 별도 프로젝트이므로 영향받지 않습니다.
