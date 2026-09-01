// 이 값을 '01', '02', '03'처럼 올리면 문서 제목과 화면 버전이 함께 갱신됩니다.
const APP_VERSION = '45';
const WELCOME_HIDE_UNTIL_KEY = 'ryanSubjectFinderWelcomeHideUntil';
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const APP_TITLE = `라이언의 2022 선택과목 검색기(ver.${APP_VERSION})`;
document.title = APP_TITLE;
document.querySelectorAll('[data-app-version]').forEach((element) => {
  element.textContent = APP_VERSION;
});

const SUBJECT_GROUPS = [
  {
    group: '국어',
    common: ['공통국어1', '공통국어2'],
    general: ['화법과 언어', '독서와 작문', '문학'],
    career: ['주제 탐구 독서', '문학과 영상', '직무 의사소통'],
    convergence: ['독서 토론과 글쓰기', '매체 의사소통', '언어생활 탐구']
  },
  {
    group: '수학',
    common: ['공통수학1', '공통수학2', '기본수학1', '기본수학2'],
    general: ['대수', '미적분Ⅰ', '확률과 통계'],
    career: ['기하', '미적분Ⅱ', '경제 수학', '인공지능 수학', '직무 수학'],
    convergence: ['수학과 문화', '실용 통계', '수학과제 탐구']
  },
  {
    group: '영어',
    common: ['공통영어1', '공통영어2', '기본영어1', '기본영어2'],
    general: ['영어Ⅰ', '영어Ⅱ', '영어 독해와 작문'],
    career: ['영미 문학 읽기', '영어 발표와 토론', '심화 영어', '심화 영어 독해와 작문', '직무 영어'],
    convergence: ['실생활 영어 회화', '미디어 영어', '세계 문화와 영어']
  },
  {
    group: '사회\n(역사/도덕 포함)',
    common: ['한국사1', '한국사2', '통합사회1', '통합사회2'],
    general: ['세계시민과 지리', '세계사', '사회와 문화', '현대사회와 윤리'],
    career: ['한국지리 탐구', '도시의 미래 탐구', '동아시아 역사 기행', '정치', '법과 사회', '경제', '윤리와 사상', '인문학과 윤리', '국제 관계의 이해'],
    convergence: ['여행지리', '역사로 탐구하는 현대 세계', '사회문제 탐구', '금융과 경제생활', '윤리문제 탐구', '기후변화와 지속가능한 세계']
  },
  {
    group: '과학',
    common: ['통합과학1', '통합과학2', '과학탐구실험1', '과학탐구실험2'],
    general: ['물리학', '화학', '생명과학', '지구과학'],
    career: ['역학과 에너지', '전자기와 양자', '물질과 에너지', '화학 반응의 세계', '세포와 물질대사', '생물의 유전', '지구시스템과학', '행성우주과학'],
    convergence: ['과학의 역사와 문화', '기후변화와 환경생태', '융합과학 탐구']
  },
  {
    group: '체육',
    common: [],
    general: ['체육1', '체육2'],
    career: ['운동과 건강', '스포츠 문화', '스포츠 과학*'],
    convergence: ['스포츠 생활1', '스포츠 생활2']
  },
  {
    group: '예술',
    common: [],
    general: ['음악', '미술', '연극'],
    career: ['음악 연주와 창작', '음악 감상과 비평', '미술 창작', '미술 감상과 비평'],
    convergence: ['음악과 미디어', '미술과 매체']
  },
  {
    group: '기술·가정/정보',
    common: [],
    general: ['기술·가정', '정보'],
    career: ['로봇과 공학세계', '생활과학 탐구', '인공지능 기초', '데이터 과학'],
    convergence: ['창의 공학 설계', '지식 재산 일반', '생애 설계와 자립*', '아동발달과 부모', '소프트웨어와 생활']
  },
  {
    group: '제2외국어/한문',
    common: [],
    general: ['독일어', '프랑스어', '스페인어', '중국어', '일본어', '러시아어', '아랍어', '베트남어', '한문'],
    career: ['독일어 회화', '프랑스어 회화', '스페인어 회화', '중국어 회화', '일본어 회화', '러시아어 회화', '아랍어 회화', '베트남어 회화', '심화 독일어', '심화 프랑스어', '심화 스페인어', '심화 중국어', '심화 일본어', '심화 러시아어', '심화 아랍어', '심화 베트남어', '한문 고전 읽기'],
    convergence: ['독일어권 문화', '프랑스어권 문화', '스페인어권 문화', '중국 문화', '일본 문화', '러시아 문화', '아랍 문화', '베트남 문화', '언어생활과 한자']
  },
  {
    group: '교양',
    common: [],
    general: ['진로와 직업', '생태와 환경'],
    career: ['인간과 철학', '논리와 사고', '인간과 심리', '교육의 이해', '삶과 종교', '보건'],
    convergence: ['인간과 경제활동', '논술']
  }
];

const SCHOOL_OFFERINGS = {
  '2025': {
    label: '2025 입학생',
    subjects: [
      '공통국어1', '공통국어2', '문학', '화법과 언어', '독서와 작문', '독서 토론과 글쓰기', '주제 탐구 독서', '문학과 영상', '매체 의사소통',
      '공통수학1', '공통수학2', '대수', '미적분Ⅰ', '확률과 통계', '기하', '미적분Ⅱ', '인공지능 수학', '수학과 문화', '실용 통계',
      '공통영어1', '공통영어2', '영어Ⅰ', '영어Ⅱ', '영어 독해와 작문', '심화 영어', '심화 영어 독해와 작문', '미디어 영어', '세계 문화와 영어',
      '한국사1', '한국사2', '통합사회1', '통합사회2', '세계시민과 지리', '세계사', '사회와 문화', '현대사회와 윤리', '한국지리 탐구', '도시의 미래 탐구', '동아시아 역사 기행', '정치', '법과 사회', '경제', '윤리와 사상', '인문학과 윤리', '여행지리', '역사로 탐구하는 현대 세계', '사회문제 탐구', '금융과 경제생활', '윤리문제 탐구', '기후변화와 지속가능한 세계',
      '통합과학1', '통합과학2', '과학탐구실험1', '과학탐구실험2', '물리학', '화학', '생명과학', '지구과학', '역학과 에너지', '전자기와 양자', '물질과 에너지', '화학 반응의 세계', '세포와 물질대사', '생물의 유전', '지구시스템과학', '행성우주과학', '기후변화와 환경생태', '융합과학 탐구',
      '체육1', '체육2', '운동과 건강', '스포츠 생활1', '스포츠 문화', '스포츠 과학',
      '음악', '미술', '음악 감상과 비평', '미술 감상과 비평',
      '정보', '인공지능 기초', '데이터 과학',
      '중국어', '일본어', '중국어 회화', '일본어 회화', '심화 중국어', '심화 일본어', '중국 문화', '일본 문화',
      '진로와 직업', '생태와 환경', '인간과 철학', '논리와 사고', '삶과 종교', '논술'
    ],
    professional: ['프로그래밍', '알고리즘 설계', '컴퓨터 구조', '정보 과학']
  },
  '2026': {
    label: '2026 입학생',
    subjects: [
      '공통국어1', '공통국어2', '문학', '화법과 언어', '독서와 작문', '주제 탐구 독서', '문학과 영상', '직무 의사소통', '매체 의사소통', '언어생활 탐구',
      '공통수학1', '공통수학2', '대수', '미적분Ⅰ', '확률과 통계', '기하', '미적분Ⅱ', '인공지능 수학', '수학과 문화', '실용 통계',
      '공통영어1', '공통영어2', '영어Ⅰ', '영어Ⅱ', '영어 독해와 작문', '영어 발표와 토론', '심화 영어', '심화 영어 독해와 작문', '미디어 영어', '세계 문화와 영어',
      '한국사1', '한국사2', '통합사회1', '통합사회2', '세계시민과 지리', '세계사', '사회와 문화', '현대사회와 윤리', '도시의 미래 탐구', '동아시아 역사 기행', '정치', '법과 사회', '경제', '윤리와 사상', '인문학과 윤리', '여행지리', '역사로 탐구하는 현대 세계', '사회문제 탐구', '윤리문제 탐구', '기후변화와 지속가능한 세계',
      '통합과학1', '통합과학2', '과학탐구실험1', '과학탐구실험2', '물리학', '화학', '생명과학', '지구과학', '역학과 에너지', '전자기와 양자', '물질과 에너지', '화학 반응의 세계', '세포와 물질대사', '생물의 유전', '지구시스템과학', '행성우주과학', '기후변화와 환경생태', '융합과학 탐구',
      '체육1', '체육2', '운동과 건강', '스포츠 생활1', '스포츠 문화', '스포츠 과학',
      '음악', '미술', '음악 연주와 창작', '음악 감상과 비평', '미술 창작', '미술 감상과 비평', '음악과 미디어', '미술과 매체',
      '정보', '인공지능 기초', '데이터 과학',
      '중국어', '일본어', '중국어 회화', '일본어 회화', '심화 중국어', '심화 일본어', '중국 문화', '일본 문화',
      '진로와 직업', '생태와 환경', '인간과 철학', '논리와 사고', '삶과 종교', '논술'
    ],
    professional: ['프로그래밍', '컴퓨터 구조', '정보 과학']
  }
};

Object.values(SCHOOL_OFFERINGS).forEach((entry) => {
  entry.subjectSet = new Set(entry.subjects);
});

const DATA = window.UNIVERSITY_DATA || {};
const ALL_SUBJECTS = [...new Set(SUBJECT_GROUPS.flatMap((row) => [
  ...row.common,
  ...row.general,
  ...row.career,
  ...row.convergence
].map((subject) => subject.replace(/\*$/, ''))))];

const ALIASES = {
  '생물과 유전': '생물의 유전',
  '화학반응의 세계': '화학 반응의 세계',
  '사화와 문화': '사회와 문화',
  '사회 문제 탐구': '사회문제 탐구',
  '수학 과제 탐구': '수학과제 탐구',
  '지구 시스템 과학': '지구시스템과학',
  '행성 우주 과학': '행성우주과학'
};

const TRACK_GROUPS = {
  humanitiesSocial: ['국어', '영어', '사회\n(역사/도덕 포함)'],
  business: ['국어', '영어', '수학', '사회\n(역사/도덕 포함)'],
  stemMedical: ['국어', '영어', '수학', '과학'],
  openMajor: ['국어', '영어', '수학'],
  artsSports: ['국어', '영어', '사회\n(역사/도덕 포함)']
};

const SUBJECT_GROUP_ROWS = {
  '국어교과(군)': '국어',
  '영어교과(군)': '영어',
  '수학교과(군)': '수학',
  '사회교과(군)': '사회\n(역사/도덕 포함)',
  '과학교과(군)': '과학',
  '체육교과(군)': '체육',
  '예술교과(군)': '예술',
  '기술·가정/정보교과(군)': '기술·가정/정보',
  '제2외국어/한문교과(군)': '제2외국어/한문',
  '교양교과(군)': '교양'
};

const AUTO_HIGHLIGHT_MIN_LENGTH = 3;

const state = {
  searchIndex: [],
  matches: [],
  detailMatches: [],
  selectedKey: null,
  core: new Set(),
  recommended: new Set(),
  importantGroups: new Set(),
  highlightOnly: false,
  exactMatch: false,
  schoolCohort: '2026',
  schoolOnly: false
};

const elements = {
  searchForm: document.querySelector('#searchForm'),
  searchButton: document.querySelector('#searchButton'),
  searchResetButton: document.querySelector('#searchResetButton'),
  universitySelect: document.querySelector('#universitySelect'),
  majorInput: document.querySelector('#majorInput'),
  exactMatchToggle: document.querySelector('#exactMatchToggle'),
  suggestions: document.querySelector('#suggestions'),
  searchView: document.querySelector('#searchView'),
  detailsView: document.querySelector('#detailsView'),
  searchTab: document.querySelector('#searchTab'),
  detailsTab: document.querySelector('#detailsTab'),
  viewTabs: document.querySelector('.view-tabs'),
  detailUniversitySelect: document.querySelector('#detailUniversitySelect'),
  detailMajorSearch: document.querySelector('#detailMajorSearch'),
  detailCount: document.querySelector('#detailCount'),
  resultList: document.querySelector('#resultList'),
  resultUniversity: document.querySelector('#resultUniversity'),
  resultMajor: document.querySelector('#resultMajor'),
  resultGroup: document.querySelector('#resultGroup'),
  matchedCount: document.querySelector('#matchedCount'),
  coreSubjects: document.querySelector('#coreSubjects'),
  recommendedSubjects: document.querySelector('#recommendedSubjects'),
  additionalNoteBlock: document.querySelector('#additionalNoteBlock'),
  additionalNote: document.querySelector('#additionalNote'),
  curriculumBody: document.querySelector('#curriculumBody'),
  highlightOnly: document.querySelector('#highlightOnly'),
  clearHighlight: document.querySelector('#clearHighlight'),
  schoolOnlyToggle: document.querySelector('#schoolOnlyToggle'),
  schoolCohortInputs: document.querySelectorAll('input[name="schoolCohort"]'),
  schoolCourseListButton: document.querySelector('#schoolCourseListButton'),
  schoolCourseDialog: document.querySelector('#schoolCourseDialog'),
  schoolCourseDialogSummary: document.querySelector('#schoolCourseDialogSummary'),
  schoolCourseDialogBody: document.querySelector('#schoolCourseDialogBody'),
  schoolCourseDialogClose: document.querySelector('#schoolCourseDialogClose'),
  scrollTopButton: document.querySelector('#scrollTopButton'),
  welcomeDialog: document.querySelector('#welcomeDialog'),
  welcomeHideDay: document.querySelector('#welcomeHideDay'),
  welcomeConfirm: document.querySelector('#welcomeConfirm')
};

function compact(value = '') {
  return String(value)
    .normalize('NFKC')
    .toLocaleLowerCase('ko-KR')
    .replace(/[\s·ㆍ,./()\[\]{}_-]+/g, '');
}

function displayTarget(row) {
  return row.target?.trim() || row.group?.trim() || '모집단위 정보';
}

function includesAny(text, keywords) {
  return keywords.some((keyword) => text.includes(compact(keyword)));
}

function inferAcademicTrack(entry) {
  const targetText = compact(entry.target);
  const text = compact([
    entry.target,
    entry.row.group
  ].filter(Boolean).join(' '));

  if (includesAny(text, ['자유전공', '자율전공', '무전공', '자유전공학부', '자율전공학부'])) return 'openMajor';
  if (includesAny(targetText, ['사학', '역사학', '역사교육', '지리학', '지리교육'])) return 'humanitiesSocial';
  if (includesAny(targetText, ['체육', '스포츠', '미술', '음악', '무용', '연극', '공연예술', '조형', '성악', '기악'])) return 'artsSports';
  if (includesAny(text, ['의예', '의학', '치의예', '치의학', '한의예', '한의학', '약학', '수의예', '수의학', '간호', '보건'])) return 'stemMedical';
  if (includesAny(text, ['상경', '경영', '경제', '회계', '세무', '금융', '무역', '국제통상', '부동산'])) return 'business';
  if (includesAny(text, ['자연과학', '공학', '공과', '이공', '컴퓨터', '소프트웨어', '인공지능', '데이터', '반도체', '전자', '전기', '기계', '화학', '생명', '수학', '물리', '지구과학', '환경', '건축', '통계', '식품', '농학'])) return 'stemMedical';
  if (includesAny(text, ['예체능', '미술', '음악', '체육', '스포츠', '무용', '연극', '공연', '조형', '디자인', '성악', '기악'])) return 'artsSports';
  if (includesAny(text, ['인문', '사회', '국어', '영어', '언어', '문학', '역사', '철학', '법학', '행정', '정치', '외교', '심리', '교육', '문화', '문헌정보', '광고', '미디어', '신문방송'])) return 'humanitiesSocial';
  return '';
}

function inferArtsSubjectGroups(entry) {
  const text = compact([entry.target, entry.row.group].filter(Boolean).join(' '));
  const groups = [];
  if (includesAny(text, ['미술', '디자인', '조형', '회화', '조소', '공예', '시각예술', '음악', '성악', '기악', '작곡', '국악', '무용', '연극', '공연예술'])) groups.push('예술');
  if (includesAny(text, ['체육', '스포츠', '운동', '레저', '생활체육'])) groups.push('체육');
  return groups;
}

function buildIndex() {
  state.searchIndex = Object.entries(DATA).flatMap(([university, rows]) =>
    rows
      .map((row, index) => ({
        key: `${university}:${index}`,
        university,
        index,
        row,
        target: displayTarget(row),
        searchable: compact(`${row.target || ''} ${row.group || ''} ${(row.aliases || []).join(' ')}`)
      }))
      .filter((entry) => entry.row.target || entry.row.group)
  );

  const universities = Object.keys(DATA).sort((a, b) => a.localeCompare(b, 'ko'));
  universities.forEach((university) => {
    const option = document.createElement('option');
    option.value = university;
    option.textContent = university;
    elements.universitySelect.append(option);

    const detailOption = option.cloneNode(true);
    elements.detailUniversitySelect.append(detailOption);
  });
}

let activeCustomSelect = null;
const customSelectRegistry = new WeakMap();

function closeCustomSelect(controller) {
  if (!controller) return;
  controller.menu.hidden = true;
  controller.trigger.setAttribute('aria-expanded', 'false');
  controller.host.classList.remove('is-open');
  if (activeCustomSelect === controller) activeCustomSelect = null;
}

function syncCustomSelect(select) {
  const controller = customSelectRegistry.get(select);
  if (!controller) return;
  const selected = select.options[select.selectedIndex];
  controller.value.textContent = selected?.textContent || '선택';
  controller.menu.querySelectorAll('button[data-value]').forEach((button) => {
    const isSelected = button.dataset.value === select.value;
    button.classList.toggle('selected', isSelected);
    button.setAttribute('aria-selected', String(isSelected));
  });
}

function initializeCustomSelect(select) {
  if (!select || customSelectRegistry.has(select)) return;
  const host = select.parentElement;
  const trigger = document.createElement('button');
  const value = document.createElement('span');
  const menu = document.createElement('div');
  const menuId = `${select.id}-custom-menu`;

  host.classList.add('custom-select-host');
  select.classList.add('native-select-hidden');
  select.setAttribute('aria-hidden', 'true');
  select.tabIndex = -1;

  trigger.type = 'button';
  trigger.className = 'custom-select-trigger';
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-controls', menuId);
  value.className = 'custom-select-value';
  trigger.append(value);

  menu.id = menuId;
  menu.className = 'custom-select-menu';
  menu.setAttribute('role', 'listbox');
  menu.hidden = true;
  [...select.options].forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.value = option.value;
    button.textContent = option.textContent;
    button.setAttribute('role', 'option');
    menu.append(button);
  });

  host.append(trigger, menu);
  const controller = { host, select, trigger, value, menu };
  customSelectRegistry.set(select, controller);
  syncCustomSelect(select);

  trigger.addEventListener('click', () => {
    const willOpen = menu.hidden;
    if (activeCustomSelect && activeCustomSelect !== controller) closeCustomSelect(activeCustomSelect);
    if (!willOpen) {
      closeCustomSelect(controller);
      return;
    }
    menu.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    host.classList.add('is-open');
    activeCustomSelect = controller;
    menu.querySelector('.selected')?.scrollIntoView({ block: 'nearest' });
  });

  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeCustomSelect(controller);
    if (event.key === 'ArrowDown' && menu.hidden) {
      event.preventDefault();
      trigger.click();
    }
  });

  menu.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-value]');
    if (!button) return;
    select.value = button.dataset.value;
    select.dispatchEvent(new Event('change', { bubbles: true }));
    syncCustomSelect(select);
    closeCustomSelect(controller);
    trigger.focus();
  });

  select.addEventListener('change', () => syncCustomSelect(select));
}

function initializeCustomSelects() {
  initializeCustomSelect(elements.universitySelect);
  initializeCustomSelect(elements.detailUniversitySelect);
  document.addEventListener('click', (event) => {
    if (activeCustomSelect && !activeCustomSelect.host.contains(event.target)) closeCustomSelect(activeCustomSelect);
  });
}

function extractSubjects(rawText = '') {
  let source = String(rawText);
  Object.entries(ALIASES).forEach(([alias, standard]) => {
    source = source.replaceAll(alias, standard);
  });

  const found = [];
  let working = compact(source);
  const orderedSubjects = [...ALL_SUBJECTS].sort((a, b) => compact(b).length - compact(a).length);

  orderedSubjects.forEach((subject) => {
    const needle = compact(subject);
    if (!needle || !working.includes(needle)) return;
    found.push(subject);
    working = working.replaceAll(needle, '');
  });

  if (source.includes('미적분ⅠⅡ')) {
    if (!found.includes('미적분Ⅰ')) found.push('미적분Ⅰ');
    if (!found.includes('미적분Ⅱ')) found.push('미적분Ⅱ');
  }

  const addSubjects = (subjects) => subjects.forEach((subject) => {
    if (!found.includes(subject)) found.push(subject);
  });
  const compactSource = compact(source);
  if (compactSource.includes('동아시아사')) addSubjects(['동아시아 역사 기행']);
  if (compactSource.includes('한국지리') && !compactSource.includes('한국지리탐구')) addSubjects(['한국지리 탐구']);
  if (compactSource.includes('한국사') && !compactSource.includes('한국사1') && !compactSource.includes('한국사2')) addSubjects(['한국사1', '한국사2']);
  if (compactSource.includes('사회문화') && !compactSource.includes('사회와문화')) addSubjects(['사회와 문화']);
  if (compactSource.includes('정치와법')) addSubjects(['정치', '법과 사회']);

  return found.sort((a, b) => ALL_SUBJECTS.indexOf(a) - ALL_SUBJECTS.indexOf(b));
}

function extractSubjectGroups(rawText = '') {
  const source = String(rawText || '')
    .normalize('NFKC')
    .replace(/[，、;]/g, ',')
    .replace(/\s+(?:및|와|과)\s+/g, ',');
  const delimiter = '(?:^|[,/])\\s*';
  const ending = '(?=$|[,/]|\\s*(?:\\(|교과|영역|과목|진로|전\\s*과목))';
  const rules = [
    ['국어교과(군)', new RegExp(`${delimiter}국어\\s*${ending}`)],
    ['영어교과(군)', new RegExp(`${delimiter}영어\\s*${ending}`)],
    ['수학교과(군)', new RegExp(`${delimiter}수학(?:[①②12])?\\s*${ending}`)],
    ['사회교과(군)', new RegExp(`${delimiter}(?:사회(?:\\s*\\([^)]*\\))?|일반사회|역사|윤리|지리)\\s*${ending}`)],
    ['과학교과(군)', new RegExp(`${delimiter}과학\\s*${ending}`)],
    ['체육교과(군)', new RegExp(`${delimiter}체육\\s*${ending}`)],
    ['예술교과(군)', new RegExp(`${delimiter}예술\\s*${ending}`)],
    ['기술·가정/정보교과(군)', /(?:^|,)\s*(?:기술[·․.]가정\/(?:정보|교양)|기술[·․.]가정\s*교과|정보\s*교과)\s*(?=$|,|영역|과목)/],
    ['제2외국어/한문교과(군)', /(?:^|,)\s*(?:제2외국어(?:\/한문)?|전공 관련 제2외국어\/한문)\s*(?:교과(?:\s*\(군\))?)?\s*(?=$|,|영역|과목|적극|이수|권장)/],
    ['교양교과(군)', new RegExp(`${delimiter}교양\\s*${ending}`)]
  ];
  return rules.filter(([, pattern]) => pattern.test(source)).map(([label]) => label);
}

function currentSchoolOffering() {
  return SCHOOL_OFFERINGS[state.schoolCohort];
}

function isSchoolOffered(subject) {
  return currentSchoolOffering().subjectSet.has(subject.replace(/\*$/, ''));
}

function schoolFilteredSubjects(subjects) {
  return state.schoolOnly ? subjects.filter(isSchoolOffered) : subjects;
}

function renderSchoolCourseDialog() {
  const offering = currentSchoolOffering();
  const sections = SUBJECT_GROUPS.map((row) => {
    const subjects = [...row.common, ...row.general, ...row.career, ...row.convergence]
      .map((subject) => subject.replace(/\*$/, ''))
      .filter((subject) => offering.subjectSet.has(subject));
    if (!subjects.length) return '';
    return `
      <section class="school-course-group">
        <h3>${escapeHtml(row.group.replace('\n', ' '))}</h3>
        <div>${subjects.map((subject) => `<span>${escapeHtml(subject)}</span>`).join('')}</div>
      </section>`;
  }).join('');

  const professional = offering.professional.length
    ? `<section class="school-course-group school-course-group--professional">
        <h3>정보 전문교과</h3>
        <div>${offering.professional.map((subject) => `<span>${escapeHtml(subject)}</span>`).join('')}</div>
      </section>`
    : '';

  elements.schoolCourseDialogSummary.textContent = offering.label;
  elements.schoolCourseDialogBody.innerHTML = `${sections}${professional}`;
}

function courseClass(subject) {
  const plainSubject = subject.replace(/\*$/, '');
  const classes = ['course'];
  if (isSchoolOffered(plainSubject)) classes.push('school-offered');
  if (state.core.has(plainSubject)) classes.push('core');
  if (state.recommended.has(plainSubject)) classes.push('recommended');
  if (state.highlightOnly && !state.core.has(plainSubject) && !state.recommended.has(plainSubject)) classes.push('is-muted');
  return classes.join(' ');
}

function renderCourseCell(subjects) {
  const visibleSubjects = schoolFilteredSubjects(subjects);
  if (!visibleSubjects.length) return '<span class="empty-cell">없음</span>';
  return `<div class="subject-list">${visibleSubjects.map((subject) => {
    const label = subject.replace(/\*$/, '');
    const marked = subject.endsWith('*') ? `${label}<sup>*</sup>` : label;
    return `<span class="${courseClass(subject)}" data-subject="${label}">${marked}</span>`;
  }).join('')}</div>`;
}

function renderCurriculum() {
  elements.curriculumBody.innerHTML = SUBJECT_GROUPS.map((row) => {
    const rowSubjects = [...row.common, ...row.general, ...row.career, ...row.convergence].map((subject) => subject.replace(/\*$/, ''));
    const visibleRowSubjects = state.schoolOnly ? rowSubjects.filter(isSchoolOffered) : rowSubjects;
    const hasHighlight = visibleRowSubjects.some((subject) => state.core.has(subject) || state.recommended.has(subject));
    const isImportantGroup = state.importantGroups.has(row.group);
    const rowClasses = [
      isImportantGroup ? 'row-important-group' : '',
      hasHighlight ? 'row-has-highlight' : '',
      state.highlightOnly && !hasHighlight ? 'row-is-muted' : ''
    ].filter(Boolean).join(' ');
    return `
      <tr class="${rowClasses}">
        <th scope="row">${row.group.replace('\n', '<br>')}</th>
        <td data-label="공통 과목">${renderCourseCell(row.common)}</td>
        <td data-label="일반 선택">${renderCourseCell(row.general)}</td>
        <td data-label="진로 선택">${renderCourseCell(row.career)}</td>
        <td data-label="융합 선택">${renderCourseCell(row.convergence)}</td>
      </tr>`;
  }).join('');
}

function scoreEntry(entry, query, exactMatch = state.exactMatch) {
  if (!query) return 1;
  const target = compact(entry.row.target || '');
  const group = compact(entry.row.group || '');
  const displayedTarget = compact(displayTarget(entry.row));
  const aliases = Array.isArray(entry.row.aliases) ? entry.row.aliases.map(compact) : [];
  if (exactMatch) return displayedTarget === query || aliases.includes(query) ? 120 : 0;
  if (target === query) return 120;
  if (target.startsWith(query)) return 100;
  if (target.includes(query)) return 80;
  if (aliases.some((alias) => alias === query)) return 78;
  if (aliases.some((alias) => alias.startsWith(query))) return 70;
  if (aliases.some((alias) => alias.includes(query))) return 60;
  if (group === query) return 65;
  if (group.includes(query)) return 45;
  return 0;
}

function broadEntryTracks(entry) {
  const text = compact(`${entry.row.target || ''} ${entry.row.group || ''}`);
  const tracks = new Set();
  if (includesAny(text, ['전모집단위', '전체모집단위', '전학과'])) {
    return new Set(['humanitiesSocial', 'business', 'stemMedical', 'artsSports', 'openMajor']);
  }
  if (includesAny(text, ['인문', '사회'])) {
    tracks.add('humanitiesSocial');
    tracks.add('business');
  }
  if (includesAny(text, ['상경', '경영', '경제'])) tracks.add('business');
  if (includesAny(text, ['자연', '공학', '공과', '이공', '과학기술', '의약', '보건'])) tracks.add('stemMedical');
  if (includesAny(text, ['예체능', '예술', '체육', '스포츠', '디자인', '조형'])) tracks.add('artsSports');
  if (includesAny(text, ['자유전공', '자율전공', '무전공'])) tracks.add('openMajor');

  const isBroad = includesAny(text, ['계열', '전모집단위', '전체모집단위', '대학', '학부', '인문', '자연', '공학', '예체능']);
  if (isBroad && !tracks.size) {
    const inferred = inferAcademicTrack(entry);
    if (inferred) tracks.add(inferred);
  }
  return tracks;
}

function scoreBroadEntry(entry, query) {
  if (query.length < 2) return 0;
  const queryTrack = inferAcademicTrack({ target: query, row: { group: '' } });
  if (!queryTrack) return 0;
  return broadEntryTracks(entry).has(queryTrack) ? 18 : 0;
}

function findMatches(options = {}) {
  const university = elements.universitySelect.value;
  const query = compact(elements.majorInput.value);
  const exactMatch = options.exactMatch ?? state.exactMatch;
  const candidates = state.searchIndex.filter((entry) => !university || entry.university === university);
  const directMatches = candidates.map((entry) => ({ ...entry, score: scoreEntry(entry, query, exactMatch) }));
  const hasDirectMatch = directMatches.some((entry) => entry.score > 0);
  const scoredMatches = hasDirectMatch || !university || exactMatch
    ? directMatches
    : candidates.map((entry) => ({ ...entry, score: scoreBroadEntry(entry, query) }));
  return scoredMatches
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.target.localeCompare(b.target, 'ko'));
}

function renderSuggestions() {
  const query = compact(elements.majorInput.value);
  if (!query) {
    hideSuggestions();
    return;
  }

  const matches = findMatches().slice(0, 10);
  elements.suggestions.hidden = false;
  elements.majorInput.setAttribute('aria-expanded', 'true');

  if (!matches.length) {
    elements.suggestions.innerHTML = '<div class="empty-suggestion">일치하는 모집단위가 없습니다. 더 짧은 단어로 검색해 보세요.</div>';
    return;
  }

  elements.suggestions.innerHTML = matches.map((entry) => `
    <button type="button" role="option" data-key="${entry.key}">
      <strong>${entry.university}</strong>
      <span>${entry.target}</span>
    </button>`).join('');
}

function hideSuggestions() {
  elements.suggestions.hidden = true;
  elements.majorInput.setAttribute('aria-expanded', 'false');
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function escapeRegExp(value = '') {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function renderTags(container, subjects, rawText, emptyMessage, subjectGroups = []) {
  const groupTags = [...new Set(subjectGroups)];
  if (subjects.length || groupTags.length) {
    container.innerHTML = [
      ...groupTags.map((group) => `<span class="subject-tag subject-tag--group">${escapeHtml(group)}</span>`),
      ...subjects.map((subject) => `<span class="subject-tag">${escapeHtml(subject)}</span>`)
    ].join('');
    return;
  }

  const shortRecommendation = compact(rawText) === '전과목' ? '전 과목' : '';
  container.innerHTML = shortRecommendation
    ? `<span class="subject-tag subject-tag--broad">${shortRecommendation}</span>`
    : `<span class="empty-tag">${emptyMessage}</span>`;
}

function needsAdditionalExplanation(rawText, subjects, subjectGroups = []) {
  const raw = String(rawText || '').trim();
  if (!raw || raw === '-' || compact(raw) === '전과목') return false;
  if (!subjects.length && !subjectGroups.length) return true;
  return /진로|적성|이수|선택|이상|또는|권장|계열|과목\s*중|택\s*\d|자유/.test(raw);
}

function renderAdditionalNote(entry, coreSubjects, recommendedSubjects, coreGroups, recommendedGroups) {
  const items = [];
  if (needsAdditionalExplanation(entry.row.core, coreSubjects, coreGroups)) {
    items.push(['핵심과목 안내', entry.row.core]);
  }
  if (needsAdditionalExplanation(entry.row.recommend, recommendedSubjects, recommendedGroups)) {
    items.push(['권장과목 안내', entry.row.recommend]);
  }
  if (entry.row.note?.trim()) {
    items.push(['', entry.row.note]);
  }

  elements.additionalNoteBlock.hidden = !items.length;
  elements.additionalNote.innerHTML = items.map(([label, text]) => {
    const isPlain = !label;
    return `
      <div class="additional-note__item${isPlain ? ' additional-note__item--plain' : ''}">
        ${isPlain ? '' : `<strong>${escapeHtml(label)}</strong>`}
        <p title="${escapeHtml(String(text || '').trim())}">${formatAdditionalNote(text)}</p>
      </div>`;
  }).join('');
}

function formatAdditionalNote(value) {
  const safeText = escapeHtml(truncate(value, 320));
  const subjectTerms = [
    ...ALL_SUBJECTS,
    ...Object.keys(SUBJECT_GROUP_ROWS),
    '미적분ⅠⅡ',
    '전 과목'
  ].sort((a, b) => b.length - a.length).map(escapeRegExp);
  const groupPattern = '(?:제2외국어\\/한문|기술[·․.]가정(?:\\/정보)?|국어|영어|수학|사회|과학|체육|예술|정보|교양)(?:\\s*교과(?:\\s*\\(군\\))?)?(?![가-힣])';
  const emphasisPattern = new RegExp(`(${subjectTerms.join('|')}|${groupPattern}|\\d+\\s*과목\\s*이상)`, 'g');
  return safeText.replace(emphasisPattern, '<mark class="additional-note__emphasis">$1</mark>');
}

function truncate(value, maxLength = 230) {
  if (!value) return '';
  return value.length > maxLength ? `${value.slice(0, maxLength).trim()}…` : value;
}

function selectResult(key, options = {}) {
  const entry = state.searchIndex.find((item) => item.key === key);
  if (!entry) return;

  state.selectedKey = key;
  const coreSubjects = extractSubjects(entry.row.core);
  const recommendedSubjects = extractSubjects(entry.row.recommend);
  const coreGroups = extractSubjectGroups(entry.row.core);
  const recommendedGroups = extractSubjectGroups(entry.row.recommend);
  const visibleCoreSubjects = state.schoolOnly ? coreSubjects.filter(isSchoolOffered) : coreSubjects;
  const visibleRecommendedSubjects = state.schoolOnly ? recommendedSubjects.filter(isSchoolOffered) : recommendedSubjects;

  if (options.updateHighlight !== false) {
    state.core = new Set(coreSubjects);
    state.recommended = new Set(recommendedSubjects);
    const track = inferAcademicTrack(entry);
    const statedGroupRows = [...coreGroups, ...recommendedGroups].map((group) => SUBJECT_GROUP_ROWS[group]).filter(Boolean);
    const highlightedSubjectSet = new Set([...coreSubjects, ...recommendedSubjects].map((subject) => subject.replace(/\*$/, '')));
    const highlightedSubjectRows = SUBJECT_GROUPS.filter((row) =>
      [...row.common, ...row.general, ...row.career, ...row.convergence]
        .some((subject) => highlightedSubjectSet.has(subject.replace(/\*$/, '')))
    ).map((row) => row.group);
    state.importantGroups = new Set([
      ...(TRACK_GROUPS[track] || []),
      ...inferArtsSubjectGroups(entry),
      ...statedGroupRows,
      ...highlightedSubjectRows
    ]);
  }

  elements.resultUniversity.textContent = `${entry.university} 2028 권장 이수과목`;
  elements.resultMajor.textContent = entry.target;
  elements.resultGroup.textContent = entry.row.group || entry.row.area || '';
  elements.matchedCount.textContent = new Set([...visibleCoreSubjects, ...visibleRecommendedSubjects, ...coreGroups, ...recommendedGroups]).size;
  renderTags(elements.coreSubjects, visibleCoreSubjects, entry.row.core, state.schoolOnly ? '본교 개설 과목과 일치하지 않음' : '별도 핵심 과목 미제시', coreGroups);
  renderTags(elements.recommendedSubjects, visibleRecommendedSubjects, entry.row.recommend, state.schoolOnly ? '본교 개설 과목과 일치하지 않음' : '별도 권장 과목 미제시', recommendedGroups);
  renderAdditionalNote(entry, coreSubjects, recommendedSubjects, coreGroups, recommendedGroups);
  elements.detailUniversitySelect.value = entry.university;
  syncCustomSelect(elements.detailUniversitySelect);

  if (options.updateHighlight !== false) {
    elements.highlightOnly.disabled = false;
    elements.clearHighlight.hidden = false;
  }

  renderResultList();
  renderCurriculum();
}

function renderResultList() {
  elements.detailCount.textContent = state.detailMatches.length;
  if (!state.detailMatches.length) {
    elements.resultList.innerHTML = '<p class="detail-empty">일치하는 모집단위가 없습니다.</p>';
    return;
  }

  elements.resultList.innerHTML = state.detailMatches.slice(0, 100).map((entry) => `
    <button type="button" class="${entry.key === state.selectedKey ? 'active' : ''}" data-key="${entry.key}">
      <span>${entry.target}</span>
      <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m7 5 5 5-5 5"/></svg>
    </button>`).join('');
}

function setActiveView(view, options = {}) {
  const isSearch = view === 'search';
  elements.searchView.hidden = !isSearch;
  elements.detailsView.hidden = isSearch;
  elements.searchTab.classList.toggle('active', isSearch);
  elements.detailsTab.classList.toggle('active', !isSearch);
  elements.searchTab.setAttribute('aria-selected', String(isSearch));
  elements.detailsTab.setAttribute('aria-selected', String(!isSearch));

  if (!isSearch) {
    const selectedEntry = state.searchIndex.find((entry) => entry.key === state.selectedKey);
    const university = selectedEntry?.university || elements.detailUniversitySelect.value;
    loadUniversityDetails(university, state.selectedKey);
  }

  if (options.scroll !== false) {
    elements.viewTabs.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function loadUniversityDetails(university, preferredKey) {
  const query = compact(elements.detailMajorSearch.value);
  const candidates = state.searchIndex.filter((entry) => entry.university === university);
  const directMatches = candidates.map((entry) => ({ ...entry, score: scoreEntry(entry, query, false) }));
  const hasDirectMatch = directMatches.some((entry) => entry.score > 0);
  const matches = (hasDirectMatch || !query
    ? directMatches
    : candidates.map((entry) => ({ ...entry, score: scoreBroadEntry(entry, query) })))
    .filter((entry) => !query || entry.score > 0)
    .sort((a, b) => b.score - a.score || a.target.localeCompare(b.target, 'ko'));
  state.detailMatches = matches;
  renderResultList();
  if (!matches.length) return;
  const key = preferredKey && matches.some((entry) => entry.key === preferredKey) ? preferredKey : matches[0].key;
  selectResult(key, { updateHighlight: false });
}

function runSearch(preferredKey) {
  hideSuggestions();
  if (!compact(elements.majorInput.value)) {
    resetHighlights();
    setActiveView('search', { scroll: false });
    elements.majorInput.setCustomValidity('학과 또는 전공을 입력하세요.');
    elements.majorInput.reportValidity();
    elements.majorInput.focus({ preventScroll: true });
    return;
  }

  const matches = findMatches();
  if (!matches.length) {
    elements.majorInput.setCustomValidity('일치하는 대학 또는 모집단위가 없습니다. 더 짧은 검색어를 입력해 주세요.');
    elements.majorInput.reportValidity();
    return;
  }

  elements.majorInput.setCustomValidity('');
  state.matches = matches;
  const selected = preferredKey && matches.some((entry) => entry.key === preferredKey) ? preferredKey : matches[0].key;
  selectResult(selected, { updateHighlight: true });
  setActiveView('search', { scroll: false });
  document.querySelector('.curriculum-heading').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetHighlights() {
  state.selectedKey = null;
  state.matches = [];
  state.core = new Set();
  state.recommended = new Set();
  state.importantGroups = new Set();
  state.highlightOnly = false;
  elements.highlightOnly.checked = false;
  elements.highlightOnly.disabled = true;
  elements.clearHighlight.hidden = true;
  renderCurriculum();
}

let autoHighlightTimer;

function scheduleAutoHighlight() {
  window.clearTimeout(autoHighlightTimer);
  const query = compact(elements.majorInput.value);
  if (query.length < AUTO_HIGHLIGHT_MIN_LENGTH) {
    resetHighlights();
    return;
  }

  autoHighlightTimer = window.setTimeout(() => {
    const matches = findMatches();
    if (!matches.length) {
      resetHighlights();
      return;
    }

    state.matches = matches;
    selectResult(matches[0].key, { updateHighlight: true });
    setActiveView('search', { scroll: false });
  }, 120);
}

elements.searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  runSearch();
});

elements.searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  runSearch();
});

elements.searchResetButton.addEventListener('click', () => {
  elements.universitySelect.value = '';
  syncCustomSelect(elements.universitySelect);
  elements.majorInput.value = '';
  elements.exactMatchToggle.checked = false;
  state.exactMatch = false;
  elements.majorInput.setCustomValidity('');
  hideSuggestions();
  resetHighlights();
  setActiveView('search', { scroll: false });
  elements.majorInput.focus();
});

elements.majorInput.addEventListener('input', () => {
  elements.majorInput.setCustomValidity('');
  renderSuggestions();
  scheduleAutoHighlight();
});

elements.majorInput.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' || event.isComposing) return;
  event.preventDefault();
  runSearch();
});

elements.majorInput.addEventListener('focus', renderSuggestions);

elements.universitySelect.addEventListener('change', () => {
  elements.majorInput.setCustomValidity('');
  renderSuggestions();
  scheduleAutoHighlight();
});

elements.exactMatchToggle.addEventListener('change', () => {
  state.exactMatch = elements.exactMatchToggle.checked;
  elements.majorInput.setCustomValidity('');
  renderSuggestions();
  scheduleAutoHighlight();
});

elements.suggestions.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-key]');
  if (!button) return;
  const entry = state.searchIndex.find((item) => item.key === button.dataset.key);
  if (!entry) return;
  elements.universitySelect.value = entry.university;
  syncCustomSelect(elements.universitySelect);
  elements.majorInput.value = entry.target;
  runSearch(entry.key);
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.field--major')) hideSuggestions();
});

elements.resultList.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-key]');
  if (button) selectResult(button.dataset.key, { updateHighlight: false });
});

elements.detailUniversitySelect.addEventListener('change', () => {
  elements.detailMajorSearch.value = '';
  loadUniversityDetails(elements.detailUniversitySelect.value);
});

elements.detailMajorSearch.addEventListener('input', () => {
  loadUniversityDetails(elements.detailUniversitySelect.value);
});

elements.viewTabs.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-view]');
  if (button) setActiveView(button.dataset.view);
});

elements.highlightOnly.addEventListener('change', () => {
  state.highlightOnly = elements.highlightOnly.checked;
  renderCurriculum();
});

elements.clearHighlight.addEventListener('click', resetHighlights);

function refreshSchoolCourseFilter() {
  renderCurriculum();
  if (state.selectedKey) selectResult(state.selectedKey, { updateHighlight: false });
}

elements.schoolOnlyToggle.addEventListener('change', () => {
  state.schoolOnly = elements.schoolOnlyToggle.checked;
  refreshSchoolCourseFilter();
});

elements.schoolCohortInputs.forEach((input) => {
  input.addEventListener('change', () => {
    if (!input.checked) return;
    state.schoolCohort = input.value;
    refreshSchoolCourseFilter();
  });
});

elements.schoolCourseListButton.addEventListener('click', () => {
  renderSchoolCourseDialog();
  if (typeof elements.schoolCourseDialog.showModal === 'function') {
    elements.schoolCourseDialog.showModal();
  } else {
    elements.schoolCourseDialog.setAttribute('open', '');
  }
});

elements.schoolCourseDialogClose.addEventListener('click', () => elements.schoolCourseDialog.close());
elements.schoolCourseDialog.addEventListener('click', (event) => {
  if (event.target === elements.schoolCourseDialog) elements.schoolCourseDialog.close();
});

function updateScrollTopButton() {
  elements.scrollTopButton.classList.toggle('visible', window.scrollY > 520);
}

elements.scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.addEventListener('scroll', updateScrollTopButton, { passive: true });
updateScrollTopButton();

buildIndex();
initializeCustomSelects();
renderCurriculum();

function welcomeShouldOpen() {
  try {
    const hiddenUntil = Number(window.localStorage.getItem(WELCOME_HIDE_UNTIL_KEY));
    if (Number.isFinite(hiddenUntil) && hiddenUntil > Date.now()) return false;
    window.localStorage.removeItem(WELCOME_HIDE_UNTIL_KEY);
  } catch (error) {
    /* Storage can be unavailable in restricted local-file environments. */
  }
  return true;
}

elements.welcomeDialog.addEventListener('cancel', (event) => event.preventDefault());
elements.welcomeConfirm.addEventListener('click', () => {
  if (elements.welcomeHideDay.checked) {
    try {
      window.localStorage.setItem(WELCOME_HIDE_UNTIL_KEY, String(Date.now() + ONE_DAY_MS));
    } catch (error) {
      /* The dialog still closes even when storage is unavailable. */
    }
  }
  elements.welcomeDialog.close();
});

if (welcomeShouldOpen()) {
  if (typeof elements.welcomeDialog.showModal === 'function') {
    elements.welcomeDialog.showModal();
  } else {
    elements.welcomeDialog.setAttribute('open', '');
  }
}
