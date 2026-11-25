
const etiquetteDialog = document.querySelector('#etiquette');
document.querySelector('.etiquette-trigger').addEventListener('click', () => etiquetteDialog.showModal());

const ticketTopics = [
  [['티켓을 미리 열어두고 싶어요','예매한 계정으로 로그인해 이 공연의 관람일과 회차를 선택하세요. 티켓 표시 버튼과 활성화 시점은 예매 상세에서 확인할 수 있어요.'],
   ['티켓 화면이 안 보여요','예매 확인 문자에서 예매처와 주문번호를 찾아 로그인 계정과 대조하세요. 현장에서 해결해야 한다면 주문번호를 준비해 안내 직원에게 문의하세요.']],
  [['할인 증빙이 필요한가요?','예매 내역의 할인 권종을 확인하세요. 해당 권종 안내에서 필요한 증빙, 원본 제시 여부, 증빙 미지참 시 처리 방식을 확인해요.'],
   ['동행이 대신 받을 수 있나요?','예매처의 대리 수령 규정을 먼저 확인하세요. 허용 여부와 준비 서류가 명시되지 않았다면 예매 번호로 문의하세요.']],
  [['예매 확인 문자가 있어요','문자에서 예매처와 예매 번호를 찾고 예매 상세의 수령 방법을 확인하세요. 방식이 확인되면 위에서 다시 선택할 수 있어요.'],
   ['다른 사람이 예매했어요','예매자에게 예매처, 회차, 티켓 전달 또는 수령 안내를 요청하세요. 예매처에서 지원하는 전달 절차를 확인해요.']]
];
function topicChoices(ticket) {
  if (!ticketTopics[ticket]) return '';
  return '<label>어떤 도움이 필요한가요? <select id="ticket-topic"><option value="">기본 관람 안내</option>' +
    ticketTopics[ticket].map(([q], i) => '<option value="'+i+'">'+q+'</option>').join('') + '</select></label>';
}
function showFacts(show) {
  const fields = [['관람 조건','conditions'],['관람 시간','runtime'],['관람 연령','age'],['가격','price'],['공연 시간표','schedule'],['출연진 · 회차별 상이','cast'],['주소','address']];
  const rows = fields.filter(([,key]) => show[key]).map(([label,key]) => '<dt>'+label+'</dt><dd>'+show[key]+'</dd>').join('');
  return rows ? '<dl class="show-facts">'+rows+'</dl>' + (show.detailSource ? '<a href="'+show.detailSource+'">관람 정보 출처</a>' : '') : '<p>세부 시간표와 관람 조건은 아래 공연 상세에서 확인할 수 있어요.</p>';
}

const tickets = [
  { label: '모바일 티켓', hint: '휴대폰 화면으로 입장해요.' },
  { label: '현장 수령', hint: '공연장에서 티켓을 받아요.' },
  { label: '잘 모르겠어요', hint: '수령 방식을 못 찾았다면 예매 내역에서 확인할 항목을 알려드려요.' }
];
const state = { step: 0, show: 0, ticket: null, topic: '' };
const showIndexes = new Map(shows.map((show, index) => [show.id, index]));
const screen = document.querySelector('#screen');
const steps = document.querySelector('.steps');
const storageKey = 'before-curtain-preparation-v3';
const legacyStorageKey = 'first-act-preparation-v2';
const checkedByGuide = new Map();
let lastGuide = null;
let historyEnabled = true;

function validGuide(show, ticket) {
  return Number.isInteger(show) && Boolean(shows[show]) &&
    Number.isInteger(ticket) && Boolean(tickets[ticket]);
}

function resolveShow(value) {
  if (value == null) return undefined;
  const id = /^\d+$/.test(value) ? legacyShowIds[Number(value)] : value;
  return showIndexes.get(id);
}

function validTopic(value) {
  return value === '0' || value === '1' ? value : '';
}

function loadPreparation() {
  try {
    const current = localStorage.getItem(storageKey);
    const saved = JSON.parse(current ?? localStorage.getItem(legacyStorageKey));
    const resume = saved?.lastGuide;
    const show = resolveShow(current === null ? resume?.show : resume?.id);
    if (validGuide(show, resume?.ticket)) {
      lastGuide = { id: shows[show].id, ticket: resume.ticket, topic: validTopic(resume.topic) };
    }
    for (const [key, items] of Object.entries(saved?.checks ?? {})) {
      const [value, ticket] = key.split(':');
      const show = resolveShow(value);
      if (validGuide(show, Number(ticket)) && /^[012]$/.test(ticket) && Array.isArray(items)) {
        checkedByGuide.set(`${shows[show].id}:${ticket}`, new Set(items.filter(item => [0, 1, 2].includes(item))));
      }
    }
    if (current === null && saved) savePreparation();
  } catch {
    // Storage can be unavailable when the pages are opened locally.
  }
}

function guideUrl(guide) {
  return 'guide.html?' + new URLSearchParams({ show: guide.id, ticket: guide.ticket, topic: guide.topic });
}

function ticketFragment(id, ticket, topic) {
  return '#ticket/' + id + (ticket === null ? '' : '/' + ticket + (topic ? '/' + topic : ''));
}

function savePreparation() {
  try {
    const checks = Object.fromEntries([...checkedByGuide].map(([key, values]) => [key, [...values]]));
    window.localStorage.setItem(storageKey, JSON.stringify({ lastGuide, checks }));
  } catch {
    // Browser restrictions can disable storage for locally opened HTML.
  }
}

function recordNavigation(method) {
  if (!historyEnabled) return;
  const id = shows[state.show].id;
  const fragment = state.step === 2 ? ticketFragment(id, state.ticket, state.topic)
    : state.step === 1 ? '#performance/' + id : '';
  try {
    window.history[method](null, '', fragment || location.href.split('#')[0]);
  } catch {
    historyEnabled = false;
  }
}

function moveTo(step) {
  state.step = step;
  recordNavigation('pushState');
  render();
}
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const lobby = document.querySelector('.lobby');

function playIntro() {
  if (reducedMotion.matches || state.step !== 0) return;
  lobby.classList.remove('is-intro');
  // Commit the reset so a replay restarts the CSS animations.
  lobby.getBoundingClientRect();
  lobby.classList.add('is-intro');
}

lobby.addEventListener('animationend', event => {
  if (event.animationName === 'title-reveal') lobby.classList.remove('is-intro');
});
document.querySelector('.intro-replay').addEventListener('click', playIntro);

document.querySelector('.lobby-action').addEventListener('click', () => {
  lobby.classList.remove('is-intro');
  const title = document.querySelector('#screen-title');
  title.focus({ preventScroll: true });
  title.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
});

function heading(title, description) {
  return `<h1 id="screen-title" tabindex="-1">${title}</h1><p class="muted">${description}</p>`;
}

function showLabel(show) {
  return show.city;
}

const pageSize = 24;
const catalogFilter = { search: '', genre: '', city: '', status: '', initial: '', order: '' };
let visibleLimit = pageSize;
const regions = [...new Set(shows.map(show => show.city))].sort((a, b) => a.localeCompare(b, 'ko'));

function searchKey(value) {
  return value.normalize('NFKC').toLocaleLowerCase('ko').replace(/[^\p{L}\p{N}]+/gu, '');
}

const initialGroups = [...'가나다라마바사아자차카타파하', '영문·숫자·기타'];
const hangulGroups = [...'가가나다다라마바바사사아자자차카타파하'];
const titleCollator = new Intl.Collator('ko', { numeric: true });

function catalogTitle(title) {
  return title.normalize('NFKC')
    .replace(/^[^\p{L}\p{N}]+/u, '');
}

function titleGroup(title) {
  const offset = catalogTitle(title).charCodeAt(0) - 0xac00;
  return offset >= 0 && offset < 11172
    ? hangulGroups[Math.floor(offset / 588)]
    : initialGroups.at(-1);
}

function catalogNavigation() {
  return `<nav class="catalog-navigation" aria-label="공연 제목별 탐색">
    <label>정렬 <select data-filter="order">
      <option value="" ${!catalogFilter.order ? 'selected' : ''}>기본 순서</option>
      <option value="title" ${catalogFilter.order ? 'selected' : ''}>가나다순</option>
    </select></label>
    <div class="catalog-initials" role="group" aria-label="공연 제목 첫 글자">
      ${['', ...initialGroups].map(group => `
        <button type="button" data-initial="${group}" aria-pressed="${group === catalogFilter.initial}">${group || '전체'}</button>
      `).join('')}
    </div>
  </nav>`;
}

function catalogMatches() {
  const query = searchKey(catalogFilter.search);
  const matches = shows.map((show, index) => ({ show, index })).filter(({ show }) =>
    (!catalogFilter.genre || show.genre === catalogFilter.genre) &&
    (!catalogFilter.city || show.city === catalogFilter.city) &&
    (!catalogFilter.status || (show.status ?? '공연 중') === catalogFilter.status) &&
    (!catalogFilter.initial || titleGroup(show.title) === catalogFilter.initial) &&
    (!query || searchKey(`${show.title} ${show.venue} ${show.city}`).includes(query))
  );
  if (catalogFilter.order === 'title' || catalogFilter.initial) {
    matches.sort((a, b) => titleCollator.compare(catalogTitle(a.show.title), catalogTitle(b.show.title)));
  }
  return matches;
}

function catalogOptions(values, selected, all) {
  return `<option value="">${all}</option>` + values.map(value =>
    `<option value="${value}" ${value === selected ? 'selected' : ''}>${value}</option>`
  ).join('');
}

function performanceRows(entries) {
  return entries.map(({ show, index }) => `
    <button class="choice" data-show="${index}">
      <span class="performance-content">
        <span class="tag">${show.genre} · ${show.city} · ${show.status ?? '공연 중'}</span>
        <strong>${show.title}</strong>
        ${visitPolicy(show) ? '<small>당일 공지 확인 가능</small>' : ''}
        <span class="performance-footer"><small>${show.venue}</small><small class="performance-date">${show.date}</small></span>
      </span>
      <span class="performance-arrow" aria-hidden="true">↗</span>
    </button>`).join('');
}

function catalogPage(matches) {
  return matches.length ? performanceRows(matches.slice(0, visibleLimit))
    : '<p class="catalog-empty">조건에 맞는 공연이 없어요. 제목 일부로 검색하거나 필터를 초기화해 보세요.</p>';
}

function catalogFooter(matches) {
  return matches.length > visibleLimit
    ? `<button type="button" class="back" data-more>공연 더 보기 (${Math.min(visibleLimit, matches.length)} / ${matches.length})</button>`
    : '';
}

function showSelection() {
  const resume = lastGuide ? `<button class="choice resume-card" data-resume>
    <span><span class="tag">이어서 보기</span><strong>${shows[showIndexes.get(lastGuide.id)].title}</strong>
    <small>${tickets[lastGuide.ticket].label}</small></span><span aria-hidden="true">→</span>
  </button>` : '';
  const matches = catalogMatches();
  const verified = shows.filter(visitPolicy).map(show => ({show, index: shows.indexOf(show)}));
  return heading('전국 연극·뮤지컬', '공연명이나 공연장으로 검색하세요. 2027년 5월 25일까지 개막하는 공연의 공개 일정을 담았어요.') + resume +
    `<div class="catalog-filters" aria-label="공연 검색 및 필터">
       <label class="catalog-search">공연 검색
         <input type="search" data-filter="search" placeholder="공연명 또는 공연장 검색" autocomplete="off">
       </label>
       <label>장르 <select data-filter="genre">${catalogOptions(['연극','뮤지컬'], catalogFilter.genre, '전체 장르')}</select></label>
       <label>지역 <select data-filter="city">${catalogOptions(regions, catalogFilter.city, '전국')}</select></label>
       <label>상태 <select data-filter="status">${catalogOptions(['공연 중','공연 예정','공연 종료'], catalogFilter.status, '모든 상태')}</select></label>
       <button type="button" class="back" data-reset-catalog>초기화</button>
    </div>
    ${!catalogFilter.search && !catalogFilter.genre && !catalogFilter.city && !catalogFilter.status
      ? `<details class="verified-performances"><summary>당일 안내가 확인된 공연 ${verified.length}편</summary><div class="choices performance-list">${performanceRows(verified)}</div></details>` : ''}
    ${catalogNavigation()}
    <div id="active-filters" role="group" aria-label="선택한 검색 조건" hidden></div>
    <p class="muted catalog-count" role="status">${matches.length.toLocaleString('ko-KR')}편</p>
    <div class="choices performance-list" id="catalog-results">${catalogPage(matches)}</div>
    <div id="catalog-more">${catalogFooter(matches)}</div>`;
}

const filterLabels = { search: '검색어', city: '지역', genre: '장르', status: '상태', initial: '첫 글자' };

function renderFilterChips() {
  const chips = screen.querySelector('#active-filters');
  const buttons = Object.entries(filterLabels).filter(([key]) => catalogFilter[key]).map(([key, label]) => {
    const value = catalogFilter[key];
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.removeFilter = key;
    button.textContent = value + ' ×';
    button.setAttribute('aria-label', label + ' ' + value + ' 해제');
    return button;
  });
  chips.replaceChildren(...buttons);
  chips.hidden = buttons.length === 0;
}

function animateCards(container, start = 0) {
  if (reducedMotion.matches) return;
  const cards = [...container.querySelectorAll('.choice[data-show]')].slice(start);
  cards.forEach((card, index) => {
    card.style.setProperty('--card-delay', Math.min(index, 10) * 25 + 'ms');
    card.classList.add('card-arrival');
  });
}

function refreshCatalog(append = false) {
  if (!append) renderFilterChips();
  const matches = catalogMatches();
  const rows = screen.querySelector('#catalog-results');
  if (append) {
    const firstNew = matches[visibleLimit - pageSize];
    rows.insertAdjacentHTML('beforeend', performanceRows(matches.slice(visibleLimit - pageSize, visibleLimit)));
    if (firstNew) rows.querySelector(`[data-show="${firstNew.index}"]`).focus();
  } else {
    rows.innerHTML = catalogPage(matches);
  }
  animateCards(rows, append ? visibleLimit - pageSize : 0);
  screen.querySelector('.catalog-count').textContent = `${matches.length.toLocaleString('ko-KR')}편`;
  screen.querySelector('#catalog-more').innerHTML = catalogFooter(matches);
}

function updateCatalogFilter(target) {
  catalogFilter[target.dataset.filter] = target.value;
  visibleLimit = pageSize;
  refreshCatalog();
}

function performanceDetail(show) {
  const description = [show.genre, show.city, show.status ?? '공연 중'].join(' · ');
  return heading(show.title, description) + `
    <section class="guide-performance" aria-label="공연 상세">
      <p><strong>${show.venue}</strong><br>${show.date}</p>
      ${showFacts(show)}
      ${show.notice ? `<p>${show.notice}</p>` : ''}
      <p class="note"><a href="${show.source}">${show.sourceLabel}</a>
        ${show.dateSource ? ` · <a href="${show.dateSource}">공연 일정 출처</a>` : ''}
        ${show.extraSource ? ` · <a href="${show.extraSource}">예스24 티켓 출연 공지</a>` : ''}
        ${show.booking ? ` · <a href="${show.booking}">예매 상세</a>` : ''}
      </p>
    </section>
    <button class="primary" type="button" data-prepare>관람 가이드 만들기 →</button>
    <button class="back" type="button" data-back>← 공연 목록</button>`;
}

function ticketSelection(show) {
  const context = [show.venue, show.date, showLabel(show)].filter(Boolean).join(' · ');
  const choices = tickets.map((ticket, index) => validGuide(state.show, index) ? `
    <label class="choice ticket-choice">
      <span><strong>${ticket.label}</strong><small>${ticket.hint}</small></span>
      <input type="radio" name="ticket" value="${index}" ${state.ticket === index ? 'checked' : ''} required>
    </label>` : '').join('');

  return heading('티켓은 어떻게 받나요?', '예매 내역에 적힌 티켓 수령 방식을 골라 주세요.') +
    `<div class="selected-performance">
      <span class="tag">선택한 공연</span>
      <strong>${show.title}</strong>
      <small>${context}</small><details><summary>공연 상세 보기</summary>${showFacts(show)}<a href="${show.source}">공연 정보 출처</a>${show.dateSource ? ` · <a href="${show.dateSource}">공연 일정 출처</a>` : ''}${show.extraSource ? ` · <a href="${show.extraSource}">예스24 티켓 출연 공지</a>` : ''}</details>
    </div>
    <div id="ticket-form">
      <fieldset class="ticket-options">
        <legend>티켓 수령 방식</legend>
        <div class="choices">${choices}</div>
      </fieldset>
      <div id="topic-options">${topicChoices(state.ticket)}</div><p class="muted ticket-note">실제 수령 방식은 예매처와 권종에 따라 달라질 수 있어요.</p>
      <button class="primary" type="button" data-open-guide ${state.ticket === null ? 'disabled' : ''}>관람 가이드 보기 <span aria-hidden="true">→</span></button>
    </div>
    <button class="back" data-back>← 공연 상세</button>`;
}

function guideChecks() {
  const key = `${shows[state.show].id}:${state.ticket}`;
  if (!checkedByGuide.has(key)) checkedByGuide.set(key, new Set());
  return checkedByGuide.get(key);
}

const visitPolicies = {
  PF286545: {
    scope: '2026년 10월 1일~11월 30일 NOL 예매 공지',
    source: 'https://nol.yanolja.com/ticket/products/26013736',
    counter: '초콜릿팩토리 매표소 · 부산 남구 수영로 298',
    opens: '공연 시작 1시간 전',
    entry: '객석 입장은 공연 시작 10분 전부터 가능해요.',
    late: '공연 시작 후 입장이 불가해요. 공연 중 나가면 재입장할 수 없어요.',
    photo: '공연 중 사진과 영상 촬영이 금지돼요.'
  },
  PF307237: {
    scope: '2026년 12월 12일 부산 공연 NOL 예매 공지',
    source: 'https://nol.yanolja.com/ticket/products/26016814',
    counter: '경성대학교 콘서트홀 현장 매표소',
    late: '공연이 시작되면 입장이 제한될 수 있어요. 늦게 도착하면 안내요원의 지시에 따라 입장하세요.',
    photo: '공연 중 사진·영상 촬영과 녹음이 금지돼요.'
  },
  PF304889: {
    scope: '2026년 12월 오류아트홀 공연 NOL 예매 공지',
    source: 'https://nol.yanolja.com/ticket/products/26015570',
    proof: '할인 예매자는 티켓을 받을 때 권종별 증빙을 제시해야 해요. 예를 들어 구로구민 할인은 신분증이 필요하며, 증빙을 지참하지 않으면 차액을 내야 해요.'
  }
};

function visitPolicy(show) {
  const code = show.source.match(/PF\d+/)?.[0];
  return visitPolicies[code];
}

function guideFor(show) {
  const policy = visitPolicy(show);
  const venue = show.venue.replace(/\s*\(.*$/, '').trim() || show.venue;
  const mapUrl = 'https://map.naver.com/p/search/' + encodeURIComponent(show.city + ' ' + venue);
  const actions = [
    ['예매 앱에 로그인하고 이 공연의 티켓 화면을 찾아두세요.', '예매 내역의 공연장·홀 이름과 현장 표지판을 대조하세요.', '입구에서 예매처가 안내한 모바일 티켓 화면을 열어 주세요.'],
    ['예매 내역에서 수령 시간과 필요한 신분증·할인 증빙을 확인하세요.', '예매 안내에 적힌 매표소에서 예약 정보를 제시하고 티켓을 받으세요.', '받은 티켓의 회차와 좌석 번호를 확인한 뒤 해당 입구로 가세요.'],
    ['예매 상세나 안내 문자에서 티켓 수령 방식을 찾아보세요.', '수령 방식이 여전히 불분명하면 현장 안내 직원에게 예매 내역을 보여 주세요.', '확인한 방식으로 티켓을 준비하고 안내받은 입구로 가세요.']
  ][state.ticket];
  const late = policy?.late ?? '지각 입장 가능 여부와 대기 장소는 예매처 관람 안내를 확인해요.';
  const photo = policy?.photo ?? '촬영 가능 여부와 허용 시간은 해당 공연 공지나 현장 안내를 확인해요.';
  const sourceNote = `공연 자료 · <a href="${show.source}">${show.sourceLabel}</a>
    ${show.booking ? ` · <a href="${show.booking}">공연 예매 상세</a>` : ''}`;
  const pickup = state.ticket !== 0;
  const policyRows = [
    ['매표소 위치', pickup && (policy?.counter ?? '예매처 상세에서 확인')],
    ['수령 시작', pickup && (policy?.opens ?? '예매처 상세에서 확인')],
    ['할인 증빙', pickup && policy?.proof],
    ['객석 입장', policy?.entry],
    ['지연 입장', late],
    ['촬영', photo]
  ].filter(([, value]) => value);
  if (state.ticket === 1 && policy?.counter) {
    actions[1] = policy.opens
      ? `${policy.counter}에서 ${policy.opens}부터 티켓을 받으세요.`
      : `${policy.counter}에서 티켓을 받으세요. 수령 시작 시간은 예매처에서 확인해 주세요.`;
  }
  if (policy?.entry) actions[2] = policy.entry + ' 티켓의 회차와 좌석을 확인하세요.';
  const topic = state.topic;
  const selectedTopic = /^[01]$/.test(topic) ? ticketTopics[state.ticket][Number(topic)] : null;
  return `<div class="guide-heading">
      <div><h1 id="screen-title" tabindex="-1">내 관람 가이드</h1><p class="muted">${show.title} · ${tickets[state.ticket].label}</p></div>
      <button type="button" class="back guide-edit" data-back>← 티켓 방식 바꾸기</button>
    </div>
    <div class="guide-grid">
    <div class="guide-main">
      ${selectedTopic ? `<section class="callout"><p>${tickets[state.ticket].label}</p><h2>${selectedTopic[0]}</h2><p>${selectedTopic[1]}</p></section>` : ''}
      ${policy ? `<section class="guide-performance" aria-labelledby="venue-rules-title">
        <h2 id="venue-rules-title">이 공연의 당일 안내</h2>
        <dl class="show-facts">${policyRows.map(([label, value]) => `<dt>${label}</dt><dd>${value}</dd>`).join('')}</dl>
        <p class="muted"><a href="${policy.source}">${policy.scope} ↗</a></p>
      </section>` : `<p class="muted">이 공연의 매표소와 입장 규정은 <a href="${show.booking || show.detailSource || show.source}">공연 상세</a>에서 확인해 주세요.</p>`}
      <section class="timeline" aria-labelledby="checklist-title"><h2 id="checklist-title">관람 당일 체크리스트</h2>
      <p class="check-count" role="status">${guideChecks().size === 3 ? '관람 준비 완료' : `3개 중 ${guideChecks().size}개 확인`}</p>
      <progress class="guide-progress" value="${guideChecks().size}" max="3" aria-label="확인한 준비 항목"></progress>
    <ol class="stage-checklist">${[
      ['출발 전', actions[0]],
      [venue + ' 도착', actions[1]],
      ['입장 전', actions[2]]
    ].map(([phase, description], index) => `
      <li><label class="check-row">
        <input type="checkbox" data-check="${index}" ${guideChecks().has(index) ? 'checked' : ''}>
        <span><strong>${phase}</strong><small>${description}</small></span>
      </label></li>`).join('')}
    </ol></section>
    ${policy ? '' : `<section class="guide-faq" aria-labelledby="guide-faq-title">
      <h2 id="guide-faq-title">자주 묻는 질문</h2>
      <details><summary>늦게 도착하면 어디로 가나요?</summary><p>${late}</p></details>
      <details><summary>사진이나 영상을 찍을 수 있나요?</summary><p>${photo}</p></details>
    </section>`}
    </div>
    <section class="guide-performance" aria-labelledby="guide-performance-title">
      <p class="tag">${show.genre} · ${showLabel(show)}</p>
      <h2 id="guide-performance-title">${show.title}</h2>
      <p>${show.venue}<br>${show.date}</p>
      ${showFacts(show)}
      ${show.extraSource ? `<a href="${show.extraSource}">예스24 티켓 출연 공지</a>` : ''}
      ${show.notice ? `<p class="muted">${show.notice}</p>` : ''}
      <p class="muted note">${sourceNote}${show.dateSource ? ` · <a href="${show.dateSource}">공연 일정 출처</a>` : ''}</p>
      <a class="preview" href="${mapUrl}" target="_blank" rel="noopener">지도에서 ${venue} 검색 ↗</a>
    </section>
    </div>`;
}

function render(focusHeading = true) {
  document.body.dataset.step = state.step;
  if (state.step !== 0) lobby.classList.remove('is-intro');
  const show = shows[state.show];
  steps.innerHTML = ['공연 선택', '공연 상세', '티켓 방식', '관람 가이드'].map((label, index) =>
    `<li ${index === state.step ? 'aria-current="step"' : ''}>${index + 1}. ${label}</li>`
  ).join('');
  screen.innerHTML = [showSelection, performanceDetail, ticketSelection, guideFor][state.step](show);
  if (state.step === 0) {
    screen.querySelector('[data-filter="search"]').value = catalogFilter.search;
    renderFilterChips();
    animateCards(screen.querySelector('#catalog-results'));
  }
  if (state.step === 2 && state.topic) {
    const topicSelect = screen.querySelector('#ticket-topic');
    if (topicSelect) topicSelect.value = state.topic;
  }
  screen.classList.remove('screen-arrival');
  if (state.step !== 0 && !reducedMotion.matches) {
    screen.getBoundingClientRect();
    screen.classList.add('screen-arrival');
  }
  if (focusHeading) {
    document.querySelector('#screen-title').focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }
}

screen.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if ('openGuide' in button.dataset) {
    const selected = screen.querySelector('input[name="ticket"]:checked');
    if (!selected || !validGuide(state.show, Number(selected.value))) return;
    lastGuide = { id: shows[state.show].id, ticket: Number(selected.value), topic: validTopic(screen.querySelector('#ticket-topic')?.value) };
    savePreparation();
    window.location.assign(guideUrl(lastGuide));
    return;
  }
  if ('removeFilter' in button.dataset) {
    const key = button.dataset.removeFilter;
    if (!Object.hasOwn(filterLabels, key)) return;
    const position = [...button.parentElement.children].indexOf(button);
    catalogFilter[key] = '';
    visibleLimit = pageSize;
    render(false);
    const chips = screen.querySelector('#active-filters').children;
    const filter = key === 'initial' ? '[data-initial=""]' : `[data-filter="${key}"]`;
    (chips[position] ?? chips[position - 1] ?? screen.querySelector(filter))?.focus();
    return;
  }
  if ('initial' in button.dataset) {
    catalogFilter.initial = button.dataset.initial;
    visibleLimit = pageSize;
    for (const tab of screen.querySelectorAll('[data-initial]')) {
      tab.setAttribute('aria-pressed', String(tab === button));
    }
    refreshCatalog();
    return;
  }
  if ('more' in button.dataset) {
    visibleLimit += pageSize;
    refreshCatalog(true);
    return;
  }
  if ('resetCatalog' in button.dataset) {
    Object.assign(catalogFilter, { search: '', genre: '', city: '', status: '', initial: '', order: '' });
    visibleLimit = pageSize;
    render(false);
    screen.querySelector('[data-filter="search"]').focus();
    return;
  }
  if ('resume' in button.dataset && lastGuide) {
    window.location.assign(guideUrl(lastGuide));
    return;
  }
  if ('prepare' in button.dataset) {
    moveTo(2);
    return;
  }
  if ('show' in button.dataset) {
    const nextShow = Number(button.dataset.show);
    if (nextShow !== state.show) { state.ticket = null; state.topic = ''; }
    state.show = nextShow;
    moveTo(1);
  }
  if ('back' in button.dataset) {
    if (state.step === 3) {
      location.assign('index.html' + ticketFragment(shows[state.show].id, state.ticket, state.topic));
    } else {
      moveTo(state.step - 1);
    }
  }
});

screen.addEventListener('input', event => {
  if (event.target.matches('input[data-filter="search"]')) updateCatalogFilter(event.target);
});

screen.addEventListener('change', event => {
  if (event.target.matches('select[data-filter]')) {
    updateCatalogFilter(event.target);
    return;
  }
  if (event.target.id === 'ticket-topic') {
    state.topic = validTopic(event.target.value);
    recordNavigation('replaceState');
    return;
  }
  if (state.step === 2 && event.target.matches('input[name="ticket"]')) {
    const ticket = Number(event.target.value);
    if (!validGuide(state.show, ticket)) return;
    state.ticket = ticket;
    state.topic = '';
    screen.querySelector("#topic-options").innerHTML = topicChoices(ticket);
    recordNavigation('replaceState');
    screen.querySelector('#ticket-form .primary').disabled = false;
    return;
  }
  if (!event.target.matches('[data-check]')) return;
  const checks = guideChecks();
  const index = Number(event.target.dataset.check);
  if (event.target.checked) checks.add(index);
  else checks.delete(index);
  savePreparation();
  const ready = checks.size === 3;
  const status = screen.querySelector('.check-count');
  status.textContent = ready ? '관람 준비 완료' : `3개 중 ${checks.size}개 확인`;
  status.classList.toggle('preparation-ready', ready);
  screen.querySelector('.timeline').classList.toggle('is-ready', ready);
  screen.querySelector('.guide-progress').value = checks.size;
});


function readCatalogRoute() {
  const [route, id, ticket, topic] = location.hash.slice(1).split('/');
  const show = resolveShow(id);
  const validTicket = /^[012]$/.test(ticket) && validGuide(show, Number(ticket));
  if (route === 'guide' && validTicket) {
    location.replace(guideUrl({ id: shows[show].id, ticket: Number(ticket), topic: '' }));
    return;
  }
  if ((route === 'performance' || route === 'ticket') && show !== undefined) {
    Object.assign(state, {
      show, step: route === 'ticket' ? 2 : 1,
      ticket: validTicket ? Number(ticket) : null, topic: validTicket ? validTopic(topic) : ''
    });
  } else {
    Object.assign(state, { step: 0, show: 0, ticket: null, topic: '' });
  }
  render(false);
}

loadPreparation();
if (document.body.dataset.page === 'guide') {
  const params = new URLSearchParams(location.search);
  const show = resolveShow(params.get('show'));
  const ticket = params.get('ticket');
  if (/^[012]$/.test(ticket) && validGuide(show, Number(ticket))) {
    Object.assign(state, { show, ticket: Number(ticket), topic: validTopic(params.get('topic')), step: 3 });
    document.title = shows[show].title + ' · 내 관람 가이드 | BEFORE CURTAIN';
    render(false);
  } else {
    location.replace('index.html');
  }
} else {
  readCatalogRoute();
  window.addEventListener('popstate', readCatalogRoute);
  if (state.step === 0) playIntro();
}
