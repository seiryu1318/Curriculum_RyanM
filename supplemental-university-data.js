/*
 * 대학 입학처와 대입정보포털이 공개한 2028학년도 권장 이수과목 보완 자료
 * 연세대학교, 이화여자대학교 및 교육대학교 공식 공개 안내 기준
 */
(function addSupplementalUniversityData() {
  const data = window.UNIVERSITY_DATA || (window.UNIVERSITY_DATA = {});

  data['연세대'] = [
    {
      target: '인문사회계열 전 모집단위',
      recommend: '진로와 적성에 따라 선택',
      note: '특정 전공연계과목을 별도로 지정하지 않음',
      region: '서울',
      area: '서울'
    },
    {
      target: '수학과',
      core: '기하, 미적분Ⅱ',
      recommend: '과학 교과 자유 선택, 과학 진로 선택과목 3과목 이상',
      region: '서울',
      area: '서울'
    },
    {
      target: '물리학과',
      core: '기하, 미적분Ⅱ, 물리학',
      recommend: '과학 진로 선택과목 3과목 이상',
      region: '서울',
      area: '서울'
    },
    {
      target: '화학과',
      core: '기하, 미적분Ⅱ, 화학',
      recommend: '과학 진로 선택과목 3과목 이상',
      region: '서울',
      area: '서울'
    },
    {
      target: '지구시스템과학과, 천문우주학과, 대기과학과',
      core: '기하, 미적분Ⅱ, 지구과학',
      recommend: '과학 진로 선택과목 3과목 이상',
      region: '서울',
      area: '서울'
    },
    {
      target: '화공생명공학부, 신소재공학부',
      core: '기하, 미적분Ⅱ, 화학',
      recommend: '과학 진로 선택과목 3과목 이상',
      region: '서울',
      area: '서울'
    },
    {
      target: '전기전자공학부, 기계공학부, 시스템반도체공학과, 디스플레이융합공학과',
      core: '기하, 미적분Ⅱ, 물리학',
      recommend: '과학 진로 선택과목 3과목 이상',
      region: '서울',
      area: '서울'
    },
    {
      target: '건축공학과, 건축학과, 도시공학과, 사회환경시스템공학부, 산업공학과',
      core: '기하, 미적분Ⅱ',
      recommend: '과학 교과 자유 선택, 과학 진로 선택과목 3과목 이상',
      region: '서울',
      area: '서울'
    },
    {
      target: '생명과학부, 시스템생물학과, 생화학과, 생명공학과',
      core: '기하, 미적분Ⅱ, 생명과학',
      recommend: '과학 진로 선택과목 3과목 이상',
      region: '서울',
      area: '서울'
    },
    {
      target: '컴퓨터과학과, 인공지능학과, 첨단컴퓨팅학부',
      core: '기하, 미적분Ⅱ',
      recommend: '과학 교과 자유 선택, 과학 진로 선택과목 3과목 이상',
      region: '서울',
      area: '서울'
    },
    {
      target: '의예과',
      core: '기하, 미적분Ⅱ, 생명과학',
      recommend: '과학 진로 선택과목 3과목 이상',
      region: '서울',
      area: '서울'
    },
    {
      target: '치의예과',
      core: '기하, 미적분Ⅱ',
      recommend: '물리학, 화학, 생명과학 중 1과목, 과학 진로 선택과목 3과목 이상',
      region: '서울',
      area: '서울'
    },
    {
      target: '약학과, 첨단약과학과',
      core: '기하, 미적분Ⅱ',
      recommend: '생명과학 또는 화학, 과학 진로 선택과목 3과목 이상',
      region: '서울',
      area: '서울'
    }
  ];

  data['이화여대'] = [
    {
      target: '수학과, 통계학과, 건축학과, 건축도시시스템공학과, 환경공학과, 기후에너지시스템공학과, 식품영양학과, 융합보건학과, 과학교육과, 수학교육과',
      core: '미적분Ⅱ 또는 기하',
      recommend: '물리학, 화학, 생명과학, 지구과학 중 1과목, 역학과 에너지, 전자기와 양자, 물질과 에너지, 화학 반응의 세계, 세포와 물질대사, 생물의 유전, 지구시스템과학, 행성우주과학 중 2과목',
      region: '서울',
      area: '서울'
    },
    {
      target: '물리학과, 화학·나노과학과, 생명과학과, 융합전자반도체공학부, 식품생명공학과, 화공신소재공학과, 휴먼기계바이오공학과, 컴퓨터공학과, 사이버보안학과, 인공지능데이터사이언스학부, 간호학부, 뇌·인지과학부',
      core: '미적분Ⅱ 또는 기하',
      recommend: '물리학, 화학, 생명과학 중 1과목, 역학과 에너지, 전자기와 양자, 물질과 에너지, 화학 반응의 세계, 세포와 물질대사, 생물의 유전 중 2과목',
      region: '서울',
      area: '서울'
    },
    {
      target: '의예과, 약학부',
      core: '미적분Ⅱ 또는 기하, 화학, 생명과학',
      recommend: '물질과 에너지, 화학 반응의 세계, 세포와 물질대사, 생물의 유전 중 2과목',
      region: '서울',
      area: '서울'
    },
    {
      target: '인문사회계열 모집단위',
      recommend: '진로와 적성에 따라 선택',
      note: '별도 권장 이수과목을 지정하지 않음',
      region: '서울',
      area: '서울'
    }
  ];

  /*
   * 경기대학교 공식 2028 모집단위별 과목선택 가이드는 권장 기준을
   * 인문/예체능, 자연/공학, 수학과의 세 묶음으로 안내합니다.
   * 검색에서는 실제 학과명이 나타나도록 공식 학과 목록을 각 기준에 연결합니다.
   */
  const kyonggiRows = data['경기대'] || [];
  const kyonggiHumanitiesRule = kyonggiRows.find((row) => row.target === '인문/예체능');
  const kyonggiStemRule = kyonggiRows.find((row) => row.target === '자연/공학(수학과 제외)');
  const kyonggiMathRule = kyonggiRows.find((row) => row.target === '수학과');
  const kyonggiHumanitiesPrograms = [
    '유아교육과', '국어국문학과', '영어영문학과', '중어중문학과', '사학과', '문헌정보학과', '문예창작학과',
    '글로벌어문학부 독어독문전공', '글로벌어문학부 프랑스어문전공', '글로벌어문학부 일어일문전공', '글로벌어문학부 러시아어문전공',
    '서양화·미술경영학과', '입체조형학과', '한국화·서예학과', '체육학과',
    '디자인비즈학부 산업디자인전공', '디자인비즈학부 시각정보디자인전공', '디자인비즈학부 장신구금속디자인전공',
    '스포츠과학부 스포츠레저산업전공', '스포츠과학부 스포츠건강과학전공', '시큐리티매니지먼트학과',
    '법학과', '행정학과', '경찰행정학과', '휴먼서비스학부 사회복지전공', '휴먼서비스학부 교정보호전공',
    '휴먼서비스학부 청소년전공', '국제산업정보학과', '경제학부 경제전공', '경제학부 응용통계전공',
    '지식재산학과', '경영학과', '무역학과', '회계세무·경영정보학부 회계세무전공', '회계세무·경영정보학부 경영정보전공',
    '관광경영학과', '관광개발학과', '호텔경영학과', '외식·조리학과', '관광이벤트학과',
    '연기학과', '애니메이션영상학과', '미디어영상학과', '외식조리과학과', '실용음악학과'
  ];
  const kyonggiStemPrograms = [
    '토목공학과', '건축학과', '건축공학과', '산업경영공학과', '신소재공학과', '환경에너지공학과',
    '전자공학과', '도시교통공학과', '기계시스템공학과', '화학공학과', '건축안전공학과',
    '전자물리학과', '화학과', '바이오융합학부 생명과학전공', '바이오융합학부 식품생물공학전공',
    '컴퓨터공학부', '융합보안학과', '나노공학과'
  ];

  if (kyonggiHumanitiesRule && kyonggiStemRule && kyonggiMathRule) {
    data['경기대'] = [
      ...kyonggiHumanitiesPrograms.map((target) => ({ ...kyonggiHumanitiesRule, target, group: '인문/예체능' })),
      ...kyonggiStemPrograms.map((target) => ({ ...kyonggiStemRule, target, group: '자연/공학' })),
      { ...kyonggiMathRule, group: '자연/공학' }
    ];
  }

  const educationUniversities = [
    ['서울교육대', '서울'],
    ['경인교육대', '경기'],
    ['공주교육대', '충남'],
    ['대구교육대', '대구'],
    ['부산교육대', '부산'],
    ['전주교육대', '전북'],
    ['청주교육대', '충북'],
    ['춘천교육대', '강원']
  ];

  educationUniversities.forEach(([university, area]) => {
    data[university] = [{
      target: '초등교육과',
      recommend: '전 과목',
      note: '초등교사에게 필요한 폭넓은 기초 소양을 위해 고등학교 전 교육과정을 충실히 이수',
      region: '전국',
      area
    }];
  });

  /* 대학 선택창 표기를 'OO대', 캠퍼스는 'OO대(OO)' 형식으로 통일합니다. */
  const universityNameAliases = {
    '경성대학교': '경성대',
    POSTECH: '포항공대'
  };
  Object.entries(universityNameAliases).forEach(([legacyName, displayName]) => {
    if (!data[legacyName] || data[displayName]) return;
    data[displayName] = data[legacyName];
    delete data[legacyName];
  });

  const source = window.UNIVERSITY_DATA_SOURCE || (window.UNIVERSITY_DATA_SOURCE = {});
  source.universities = Object.keys(data).length;
  source.records = Object.values(data).flat().length;
  source.urls = [
    ...(source.urls || []),
    'https://enter.kyonggi.ac.kr/cms/FR_BBS_CON/BoardView.do?BBS_SEQ=4321&BOARD_SEQ=1&CONTENTS_NO=3&MENU_ID=210&SITE_NO=2',
    'https://www2.yonsei.ac.kr/entrance/plan/2028_guide.pdf',
    'https://admission.ewha.ac.kr/admission/html/ewharo/noticeView.asp?idx=15317',
    'https://www.snue.ac.kr/admission/na/ntt/selectNttInfo.do?bbsId=3073&mi=3376&nttSn=11128',
    'https://admission.dnue.ac.kr/ipsi/CMS/Board/Board.do?mCode=MN026',
    'https://enter.bnue.ac.kr/',
    'https://www.cnue.ac.kr/enter/communication/plan.do?articleNo=41320&mode=view'
  ];
})();
