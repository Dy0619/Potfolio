const workTypes = ['영화', '드라마', '다큐멘터리'];
const works = publishedEntries.filter(entry => workTypes.includes(entry.type));
const workIds = new Set(works.map(work => work.id));
const publishedPeople = publishedEntries.filter(entry => entry.type === '인물');
const publishedById = new Map(publishedEntries.map(entry => [entry.id, entry]));
const personEraLinks = new Map(personEraMemberships);
const presidentOrder = new Map(presidentDisplayOrder);

const content = document.querySelector('#content');
const input = document.querySelector('#query');
const book = document.querySelector('#archive-book');
const pageHeading = document.querySelector('#page-heading');
const eraNavigation = document.querySelector('#era-navigation');
const chapterLinks = document.querySelectorAll('.chapter-nav a');
const pageTurn = document.querySelector('.page-turn');
const normalize = value => value.normalize('NFKC').replace(/[\s·《》]/g,'').toLowerCase();
function node(tag, value, className) {
 const element = document.createElement(tag);
 if (value) element.textContent = value;
 if (className) element.className = className;
 return element;
}
function poster(entry, decorative = false) {
 const cover = node('span', '', 'poster');
 const asset = workCovers[entry.id];
 cover.dataset.type = entry.type;
 cover.dataset.cover = 'editorial';
 const [era, eraName] = eraFor(entry);
 cover.dataset.era = era;
 if (decorative) cover.setAttribute('aria-hidden', 'true');
 cover.append(
  node('span', era === 'unclassified' ? entry.type : eraName, 'poster-kind'),
  node('strong', entry.name, 'poster-title'),
  node('span', '대체 표지', 'poster-credit')
 );
 if (asset) {
  const [url, , , kind, width, height] = asset;
  const image = node('img', '', 'poster-image');
  image.alt = decorative ? '' : entry.name + (kind === 'poster' ? ' 포스터' : ' 대표 이미지');
  image.loading = 'lazy';
  image.decoding = 'async';
  image.width = width;
  image.height = height;
  cover.dataset.cover = kind;
  cover.style.setProperty('--cover-ratio', width + '/' + height);
  image.addEventListener('error', () => {
   image.remove();
   cover.dataset.cover = 'editorial';
  }, {once: true});
  image.src = url;
  cover.append(image);
 }
 return cover;
}
function card(entry, reason, {showSummary = false, searchWork = false, titleTag = 'h3', catalogue = false} = {}) {
 const link = node('a', '', entry.type === '인물' ? 'card person-card' : 'card');
 link.href = '#entry/' + entry.id;
 const label = node('span', entry.type === '인물' ? [entry.period, entry.note].filter(Boolean).join(' · ') : [entry.type, entry.note].filter(Boolean).join(' · '), 'badge');
 const title = node(titleTag, entry.name, 'card-title');
 const description = node('p', showSummary ? entry.summary : reason || entry.summary);
 const connection = showSummary && reason ? [node('p', reason, 'connection')] : [];
 if (workIds.has(entry.id)) {
  if (searchWork) {
   const query = encodeURIComponent(entry.name + ' ' + entry.type);
   link.href = 'https://search.naver.com/search.naver?query=' + query;
   link.target = '_blank';
   link.rel = 'noopener noreferrer';
   connection.push(node('p', '네이버 검색 · 새 탭', 'connection'));
  }
  link.classList.add('work-card');
  const copy = node('div', '', 'card-copy');
  copy.append(title, label, description, ...connection);
  if (catalogue) {
   const people = entry.related.map(([id]) => publishedById.get(id)).filter(person => person?.type === '인물');
   const names = [...new Set(people.map(person => person.name))].slice(0, 2);
   if (names.length) copy.append(node('p', '관련 인물 · ' + names.join(', '), 'catalogue-people'));
  }
  link.append(poster(entry, true), copy);
 } else {
  const identity = node('span', '', 'index-identity');
  const copy = node('div', '', 'index-description');
  identity.append(title, label);
  copy.append(description, ...connection);
  link.append(identity, copy);
 }
 return link;
}
function heading(title, meta, target = content) {
 const row = node('div', '', 'section-head');
 const label = node('h2', title);
 label.id = 'section-title';
 label.tabIndex = -1;
 row.append(label);
 if (meta) row.append(node('span', meta, 'meta'));
 target.append(row);
}
function grid(items) {
 const list = node('div', '', 'grid');
 list.append(...items);
 content.append(list);
}
function appendPersonReferences(entry, page) {
 const actions = node('div', '', 'person-references');
 const title = verifiedNamuDocuments[entry.id];
 const wiki = node('a', title ? '나무위키 바로가기' : '나무위키에서 인물 검색');
 wiki.href = title ? 'https://namu.wiki/w/' + encodeURIComponent(title)
                  : 'https://namu.wiki/Search?q=' + encodeURIComponent(entry.name);
 wiki.target = '_blank';
 wiki.rel = 'noopener noreferrer';
 wiki.setAttribute('aria-label', wiki.textContent + ' · 새 탭');
 actions.append(wiki);
 if (title) {
  const search = node('a', '나무위키에서 검색');
  search.href = 'https://namu.wiki/Search?q=' + encodeURIComponent(title);
  search.target = '_blank';
  search.rel = 'noopener noreferrer';
  search.setAttribute('aria-label', '나무위키에서 검색 · 새 탭');
  actions.append(search);
 }
 const reference = node('aside', '', 'book-reference');
 reference.append(actions);
 page.append(reference);
}
function appendProfile(entry) {
 const page = node('article', '', 'person-page');
 const introduction = node('div', '', 'book-heading');
 const title = node('h2', entry.name);
 title.id = 'section-title';
 title.tabIndex = -1;
 const profile = bookProfiles[entry.id];
 const sections = profile.activities;
 introduction.append(node('span', [entry.period, entry.note].filter(Boolean).join(' · '), 'eyebrow'), title);
 if (sections?.length) introduction.append(node('p', entry.summary, 'book-lead'));
 const fields = [
  ['birth', '출생'], ['death', '사망'], ['birthplace', '출생지'], ['family', '가족 관계'],
  ['tenure', entry.period === '대한민국 대통령' ? '재임' : '재위']
 ];
 const facts = node('dl', '', 'profile-facts');
 for (const [key, label] of fields) {
  const value = profile[key];
  if (!value || /^[—–-]$/.test(value.trim())) continue;
  const row = node('div');
  const details = node('dd');
  if (key === 'family' && value.includes(' · ')) {
   const members = node('ul', '', 'profile-family');
   for (const member of value.split(' · ')) members.append(node('li', member));
   details.append(members);
  } else {
   details.append(node('span', value));
  }
  if (profile.factSources?.[key]?.length) {
   const refs = node('span', '', 'profile-fact-sources');
   for (const [name, url] of profile.factSources[key]) {
    const link = node('a', name.split(' · ')[0]);
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', label + ' 출처 · ' + name + ' · 새 탭');
    refs.append(link);
   }
   details.append(refs);
  }
  row.append(node('dt', label), details);
  facts.append(row);
 }
 const activities = node('section', '', 'biography');
 activities.append(node('h3', '주요 업적과 활동'));
 if (sections?.length) {
  for (const [topic, paragraph] of sections) activities.append(node('h4', topic), node('p', paragraph));
 } else {
  activities.append(node('p', entry.summary));
 }
 page.append(introduction);
 if (facts.childElementCount) page.append(facts);
 page.append(activities);
 appendPersonReferences(entry, page);
 content.append(page);
}
function showDetail(entry) {
 const isPerson = entry.type === '인물';
 const isWork = workIds.has(entry.id);
 const back = node('a', isPerson ? '인물 차례' : isWork ? '작품 목록' : '표제어 목록', 'back');
 back.href = lastBrowseRoutes.get(isPerson ? 'people' : isWork ? 'works' : 'index') || (isPerson ? '#people' : isWork ? '#works' : '#index');
 content.append(back);
 if (isPerson) {
  appendProfile(entry);
 } else {
  heading(entry.name, [entry.type, entry.note].filter(Boolean).join(' · '));
  const detail = node('div', '', 'detail');
  detail.append(node('p', entry.summary));
  if (entry.detail) detail.append(node('p', entry.detail));
  if (isWork) {
   const layout = node('div', '', 'work-detail');
   layout.append(poster(entry, true), detail);
   content.append(layout);
  } else {
   content.append(detail);
  }
 }
 const visibleRelated = entry.related.filter(([id]) => publishedById.has(id));
 if (visibleRelated.length) {
  const related = node('section', '', 'detail-related');
  const cards = node('div', '', 'grid');
  cards.append(...visibleRelated.map(([id, reason]) => card(publishedById.get(id), reason, {showSummary: true, searchWork: true})));
  related.append(node('h3', '관련 인물과 작품'), cards);
  content.append(related);
 }
 const profile = isPerson ? bookProfiles[entry.id] : null;
 const sources = profile
  ? [...new Map([...profile.sources, ...Object.values(profile.factSources || {}).flat()]
    .map(reference => [reference[1], reference])).values()]
  : entry.sources;
 const asset = workCovers[entry.id];
 const coverSources = asset ? [[asset[3] === 'poster' ? '포스터 출처 · ' + asset[2] : '대표 이미지 출처 · ' + asset[2], asset[1]]] : [];
 if (sources.length || coverSources.length) appendSources([...sources, ...coverSources]);
}
function appendSources(references) {
 const section = node('section', '', 'detail-sources');
 const sources = node('ul', '', 'sources');
 for (const [label, url] of references) {
  const item = node('li');
  const link = node('a', label);
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  item.append(link);
  sources.append(item);
 }
 section.append(node('h3', '자료 출처'), sources);
 content.append(section);
}
function showSearch(query) {
 input.value = query;
 const key = normalize(query);
 const matches = key ? publishedEntries.filter(entry => [entry.name, ...entry.aliases].some(name => normalize(name).includes(key))) : [];
 const direct = new Set(matches.map(entry => entry.id));
 const related = new Map();
 for (const entry of matches) {
  for (const [id, reason] of entry.related) {
   if (publishedById.has(id) && !direct.has(id) && !related.has(id)) related.set(id, reason);
  }
 }
 heading('‘' + query + '’ 검색 결과', '직접 일치 ' + matches.length + '개', pageHeading);
 if (!matches.length) {
  content.append(node('p','일치하는 표제어가 없어요. 김구, 유관순, 김대중처럼 수록된 이름으로 검색해 보세요.'));
  return;
 }
 grid(matches.map(entry => card(entry)));
 if (related.size) {
  content.append(node('h3', '관련 역사와 작품'));
  grid([...related].map(([id, reason]) => card(publishedById.get(id), reason, {searchWork: true})));
 }
}
const browseEras = [
 ['gojoseon', '고조선'], ['goguryeo', '고구려'], ['baekje', '백제'], ['silla', '신라'],
 ['gaya', '가야'], ['buyeo', '부여'], ['ancient', '삼국·고대'],
 ['unified-silla', '통일신라'], ['balhae', '발해'], ['north-south', '남북국'], ['later-three', '후삼국'],
 ['goryeo', '고려'], ['joseon', '조선'], ['empire', '대한제국'], ['colonial', '일제강점기'],
 ['modern', '현대'], ['unclassified', '시대 미분류']
];
const eraByKey = new Map(browseEras);
const eraGroups = new Map([
 ['ancient', ['goguryeo', 'baekje', 'silla', 'gaya', 'buyeo']],
 ['north-south', ['unified-silla', 'balhae']]
]);
const umbrellaErasByMember = new Map(
 [...eraGroups].flatMap(([era, members]) => members.map(member => [member, era]))
);
const modernWorkPeriods = new Set([...modernArchivePeriods, '대한민국 대통령']);
function periodKey(period = '') {
 if (modernWorkPeriods.has(period)) return 'modern';
 if (period.startsWith('후삼국')) return 'later-three';
 if (period.startsWith('고려')) return 'goryeo';
 if (period.includes('대한제국')) return 'empire';
 if (period.startsWith('조선')) return 'joseon';
 if (period.startsWith('일제강점기')) return 'colonial';
 if (period.includes('고조선')) return 'gojoseon';
 if (period.includes('통일신라')) return 'unified-silla';
 if (period.includes('발해')) return 'balhae';
 const kingdom = [['고구려','goguryeo'],['백제','baekje'],['신라','silla'],['가야','gaya'],['부여','buyeo']].find(([name]) => period.endsWith(' · ' + name) || period === name);
 if (kingdom) return kingdom[1];
 if (period.startsWith('삼국시대')) return 'ancient';
 if (period.startsWith('남북국시대')) return 'north-south';
 return 'unclassified';
}
const eraCache = new Map();
function eraFor(entry) {
 if (eraCache.has(entry.id)) return eraCache.get(entry.id);
 let key = periodKey(entry.period);
 // General era records can use an unambiguous connection to a published person.
 if (workIds.has(entry.id) && ['ancient','north-south','unclassified'].includes(key) && entry.period !== '가상 시대') {
  const scope = key === 'ancient' ? ['goguryeo','baekje','silla','gaya','buyeo'] : key === 'north-south' ? ['unified-silla','balhae'] : null;
  const links = entry.related.map(([id]) => publishedById.get(id)).filter(person => person?.type === '인물');
  const candidates = [...new Set(links.map(person => periodKey(person.period)).filter(k => k !== 'unclassified' && (!scope || scope.includes(k))))];
  if (candidates.length === 1) key = candidates[0];
 }
 const result = [key, eraByKey.get(key)];
 eraCache.set(entry.id, result);
 return result;
}
function browseErasFor(entry) {
 const [primary] = eraFor(entry);
 const eras = new Set([primary, ...(personEraLinks.get(entry.id) || [])]);
 for (const era of eras) {
  const umbrella = umbrellaErasByMember.get(era);
  if (umbrella) eras.add(umbrella);
 }
 return eras;
}
const nameOrder = new Intl.Collator('ko', {numeric: true});
const lastBrowseRoutes = new Map();
function browseRoute(page, era, sort) {
 return '#' + page + (era === 'all' && sort === 'era' ? '' : '/' + era + (sort === 'era' ? '' : '/' + sort));
}
function showEraNavigation(page, era, sort, source) {
 const counts = new Map();
 for (const entry of source) {
  for (const key of browseErasFor(entry)) counts.set(key, (counts.get(key) || 0) + 1);
 }
 const primaryEras = ['gojoseon', 'goguryeo', 'baekje', 'silla', 'gaya', 'buyeo', 'ancient', 'balhae', 'north-south', 'later-three', 'goryeo', 'joseon', 'empire', 'modern'];
 const visibleEras = browseEras.filter(([key]) => counts.has(key) || primaryEras.includes(key) || key === era);
 for (const [key, label] of [['all', '전체'], ...visibleEras]) {
  const link = node('a', '', 'era-link');
  const count = key === 'all' ? source.length : counts.get(key) || 0;
  link.href = browseRoute(page, key, sort);
  if (key === era) link.setAttribute('aria-current', 'page');
  link.append(node('span', label), node('span', count.toLocaleString('ko-KR'), 'era-count'));
  eraNavigation.append(link);
 }
}
function browseControls(page, era, sort) {
 const bar = node('div', '', 'browse-tools');
 const label = node('label', '', 'browse-sort');
 const select = node('select');
 const choices = [['era', '시대순'], ['name', page === 'works' ? '제목 가나다순' : '이름 가나다순']];
 if (page === 'works') choices.push(['type', '종류별']);
 for (const [key, name] of choices) {
  const option = node('option', name);
  option.value = key;
  select.append(option);
 }
 select.value = sort;
 const previous = sort;
 select.addEventListener('change', () => {
  if (select.value !== previous) location.hash = browseRoute(page, era, select.value);
 });
 label.append(node('span', '정렬'), select);
 bar.append(label);
 content.append(bar);
}
function showBrowse(page, era, sort) {
 const source = page === 'works' ? works : page === 'index' ? publishedEntries : publishedPeople;
 const title = page === 'works' ? '작품 목록' : page === 'index' ? '표제어 색인' : '인물 색인';
 const unit = page === 'works' ? '편' : page === 'index' ? '개' : '명';
 const validEra = eraByKey.has(era) ? era : 'all';
 const validSort = sort === 'name' || (sort === 'type' && page === 'works') ? sort : 'era';
 lastBrowseRoutes.set(page, browseRoute(page, validEra, validSort));
 const filtered = validEra === 'all' ? [...source] : source.filter(entry => browseErasFor(entry).has(validEra));
 heading(title, (validEra === 'all' ? '전체' : eraByKey.get(validEra)) + ' · ' + filtered.length.toLocaleString('ko-KR') + unit, pageHeading);
 showEraNavigation(page, validEra, validSort, source);
 browseControls(page, validEra, validSort);
 if (validEra === 'ancient') content.append(node('p', '고구려·백제·신라·가야·부여와 주변 세력의 기록을 함께 볼 수 있어요.', 'era-context'));
 if (validEra === 'north-south') content.append(node('p', '통일신라와 발해 인물, 두 나라 밖에서 활동한 같은 시기의 인물을 함께 볼 수 있어요.', 'era-context'));
 if (validEra === 'buyeo' && page !== 'works') content.append(node('p', '사료에서 활동이 확인되는 부여 인물을 모았습니다. 갈사국 관련 인물도 찾아볼 수 있어요.', 'era-context'));
 if (!filtered.length) {
  content.append(node('p', eraByKey.get(validEra) + '에 수록된 항목이 없어요.', 'browse-empty'));
  return;
 }
 const byName = (a,b) => nameOrder.compare(a.name,b.name);
 if (validSort === 'name') {
  grid(filtered.sort(byName).map(entry => card(entry, null, {catalogue: page === 'works'})));
  return;
 }
 const groups = new Map();
 for (const entry of filtered) {
  const [primary] = eraFor(entry);
  const usePrimary = validEra === 'all' || eraGroups.get(validEra)?.includes(primary);
  const key = validSort === 'type' ? entry.type : usePrimary ? primary : validEra;
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(entry);
 }
 const keys = validSort === 'type' ? workTypes : browseEras.map(([key]) => key);
 for (const key of keys) {
  if (!groups.has(key)) continue;
  const items = groups.get(key).sort((a,b) => {
   if (presidentOrder.has(a.id) && presidentOrder.has(b.id)) return presidentOrder.get(a.id) - presidentOrder.get(b.id);
   return byName(a,b);
  });
  const group = node('section', '', 'people-group');
  const label = validSort === 'type' ? key : key === 'modern' && page === 'people' ? '현대 · 대한민국 대통령' : eraByKey.get(key);
  const cards = node('div', '', 'grid');
  cards.append(...items.map(entry => card(entry, null, {titleTag: 'h4', catalogue: page === 'works'})));
  group.append(node('h3', label), cards);
  content.append(group);
 }
}
function render(moveFocus) {
 const [page, encoded, sort] = location.hash.slice(1).split('/');
 const previous = book.dataset.view;
 const previousSelection = book.dataset.selection;
 let value = '';
 try { value = decodeURIComponent(encoded || ''); } catch {}
 const isBrowse = ['people', 'index', 'works'].includes(page);
 const view = page === 'entry' ? 'detail' : page === 'search' ? 'search' : isBrowse ? page : 'people';
 const detail = view === 'detail' ? publishedById.get(value) : null;
 const activeChapter = detail
  ? detail.type === '인물' ? 'people' : workIds.has(detail.id) ? 'works' : 'index'
  : view;
 const selection = ['people', 'index', 'works'].includes(view)
  ? eraByKey.has(value) ? value : 'all'
  : value;
 const sameChapter = view === previous && selection === previousSelection;
 book.dataset.view = view;
 book.dataset.selection = selection;
 for (const link of chapterLinks) {
  if (link.getAttribute('href') === '#' + activeChapter) link.setAttribute('aria-current', 'page');
  else link.removeAttribute('aria-current');
 }

 content.replaceChildren();
 pageHeading.replaceChildren();
 eraNavigation.replaceChildren();
 if (view === 'search') {
  showEraNavigation('people', 'all', 'era', publishedPeople);
  showSearch(value);
 } else if (view === 'detail') {
  if (detail) showDetail(detail);
  else {
   heading('수록된 항목을 찾을 수 없어요');
   const back = node('a', '인물 차례로 돌아가기', 'back');
   back.href = '#people';
   content.append(back);
  }
 } else {
  if (!sameChapter) input.value = '';
  showBrowse(view, value, sort);
 }

 if (!moveFocus) return;
 if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
     view !== 'search' && !sameChapter && typeof pageTurn.animate === 'function') {
  for (const animation of pageTurn.getAnimations()) animation.cancel();
  pageTurn.animate([{opacity: .48, transform: 'scaleX(1)'}, {opacity: 0, transform: 'scaleX(.2)'}],
   {duration: 240, easing: 'ease-out'});
 }
 if (sameChapter && isBrowse) {
  content.querySelector('.browse-sort select')?.focus({preventScroll: true});
  return;
 }
 window.scrollTo(0, 0);
 document.querySelector('#section-title')?.focus({preventScroll: true});
 const currentEra = eraNavigation.querySelector('[aria-current]');
 if (currentEra && eraNavigation.scrollWidth > eraNavigation.clientWidth) {
  eraNavigation.scrollLeft = currentEra.offsetLeft - eraNavigation.offsetLeft - 12;
 }
}
document.querySelector('#search').addEventListener('submit', event => {
 event.preventDefault();
 const query = input.value.trim();
 if (!query) return;
 const destination = '#search/' + encodeURIComponent(query);
 if (location.hash === destination) render(true);
 else location.hash = destination;
});
window.addEventListener('hashchange', () => render(true));
render(false);
