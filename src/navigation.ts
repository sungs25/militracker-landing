

export const headerData = {
  links: [],
  actions: [],
};

export const footerData = {
  // 1. 거대 기업용 잡다한 메뉴 싹 비우기
  links: [], 

  // 2. 구글 플레이스토어 필수 항목 (개인정보처리방침) 연결하기
  secondaryLinks: [
    { 
      text: '개인정보처리방침', 
      href: 'https://silly-pumpkin-2c9.notion.site/3391232b3217808e98cafbb32aa740b0' 
    },
  ],

  // 3. 우측 하단 자잘한 SNS 아이콘 비우기 (추후 필요시 깃허브 등 추가 가능)
  socialLinks: [], 

  // 4. 깔끔한 저작권 문구 박아넣기
  footNote: `
    Copyright &copy; 밀리트래커. All rights reserved.
  `,
};
