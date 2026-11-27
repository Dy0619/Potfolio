const eventsById = new Map([...historicalEvents, ...foundationRecords].map(event => [event.id, event]));
const eventChapterLabels = new Map(eventChapters);
const stateMilestones = [
 ['gojoseon-foundation-record', 'wiman-rise', 'fall-of-wiman-joseon'],
 ['goguryeo-foundation-record', 'pyongyang-capital', 'fall-of-goguryeo'],
 ['baekje-foundation-record', 'hanseong-fall', 'sabi-capital', 'baekje-fall', 'baekje-restoration'],
 ['silla-foundation-record', 'silla-state-name', 'silla-tang-end', 'silla-surrender'],
 ['balhae-founded', 'balhae-sanggyeong', 'balhae-fall'],
 ['goryeo-founded', 'illicheon', 'goryeo-fall', 'joseon-founded'],
 ['joseon-founded', 'agwan', 'korean-empire', 'japanese-annexation'],
 ['imjin-war', 'okpo-battle', 'hansan-battle', 'jinju-battle', 'haengju-battle', 'chilcheollyang', 'myeongnyang-battle', 'noryang-battle']
];
const eventsByPerson = new Map();
const eventsByChapter = new Map(eventChapters.map(([key]) => [key, []]));
for (const event of historicalEvents) {
 eventsByChapter.get(event.chapter)?.push(event);
 for (const [id] of event.people) {
  if (!eventsByPerson.has(id)) eventsByPerson.set(id, []);
  eventsByPerson.get(id).push(event);
 }
}

function eventRoute(chapter) {
 return chapter === 'all' ? '#events' : '#events/' + chapter;
}

function showEventNavigation(chapter) {
 const navigation = document.querySelector('#event-navigation');
 const links = [['all', '전체 사건'], ...eventChapters];
 for (const [key, label] of links) {
  const link = node('a', '', 'era-link');
  const count = key === 'all' ? historicalEvents.length : eventsByChapter.get(key).length;
  link.href = eventRoute(key);
  if (key === chapter) link.setAttribute('aria-current', 'page');
  link.append(node('span', label), node('span', count.toLocaleString('ko-KR'), 'era-count'));
  navigation.append(link);
 }
}

function eventCard(event, titleTag) {
 const link = node('a', '', 'event-card');
 link.href = '#event/' + event.id;
 const people = event.people.map(([id]) => publishedById.get(id)?.name).filter(Boolean);
 link.append(
  node('span', event.date, 'event-date'),
  node(titleTag, event.title, 'event-title'),
  node('p', event.summary, 'event-summary')
 );
 if (people.length) link.append(node('p', '관련 인물 · ' + people.join(', '), 'event-names'));
 return link;
}

function eventList(events, titleTag) {
 const list = node('ul', '', 'event-list');
 for (const event of events) {
  const row = node('li');
  row.append(eventCard(event, titleTag));
  list.append(row);
 }
 return list;
}

function appendRelatedEvents(personId) {
 const events = eventsByPerson.get(personId);
 const records = foundationRecords.filter(record => record.people.some(([id]) => id === personId));
 appendFoundationRecords(records);
 if (!events?.length) return;
 const section = node('section', '', 'detail-related');
 section.append(node('h3', '관련 사건'), eventList(events, 'h4'));
 content.append(section);
}

function appendFoundationRecords(records) {
 if (!records.length) return;
 const section = node('section', '', 'people-group foundation-records');
 section.append(node('h3', '건국 사료와 전승'), eventList(records, 'h4'));
 content.append(section);
}

function showEventIndex(chapter) {
 const selected = eventChapterLabels.get(chapter);
 const count = selected ? eventsByChapter.get(chapter).length : historicalEvents.length;
 heading('사건별 차례', (selected ? selected + ' · ' : '') + count + '건', pageHeading);
 if (!selected || chapter === 'ancient') appendFoundationRecords(foundationRecords);
 const sections = selected ? [[chapter, selected]] : eventChapters;
 for (const [key, label] of sections) {
  const section = node('section', '', 'people-group');
  section.append(node('h3', label), eventList(eventsByChapter.get(key), 'h4'));
  content.append(section);
 }
}

function showEventDetail(event) {
 if (!event) {
  heading('수록된 사건을 찾을 수 없어요', null, pageHeading);
  const back = node('a', '전체 사건', 'back');
  back.href = '#events';
  content.append(back);
  return;
 }
 const isFoundation = foundationRecords.includes(event);
 const label = eventChapterLabels.get(event.chapter);
 heading(event.title, event.date, pageHeading);
 const back = node('a', isFoundation ? '고대의 사건과 건국 사료' : label + ' 사건 목록', 'back event-back');
 back.href = eventRoute(event.chapter);
 const narrative = node('div', '', 'event-narrative');
 narrative.append(node('p', event.summary, 'event-lead'), node('p', event.context));
 content.append(back, narrative);

 const related = node('section', '', 'detail-related');
 const list = node('ul', '', 'event-people');
 for (const [id, role] of event.people) {
  const person = publishedById.get(id);
  if (!person) continue;
  const item = node('li');
  const link = node('a', person.name);
  link.href = '#entry/' + person.id;
  item.append(link, node('span', role));
  list.append(item);
 }
 if (list.childElementCount) {
  related.append(node('h3', '관련 인물'), list);
  content.append(related);
 }

 const works = (event.works || []).map(id => publishedById.get(id)).filter(Boolean);
 if (works.length) {
  const relatedWorks = node('section', '', 'detail-related');
  const cards = node('div', '', 'grid');
  cards.append(...works.map(work => card(work)));
  relatedWorks.append(node('h3', '이 사건을 다룬 작품'), cards);
  content.append(relatedWorks);
 }
 const milestones = [...new Set(stateMilestones.filter(sequence => sequence.includes(event.id)).flat())]
  .filter(id => id !== event.id)
  .map(id => eventsById.get(id));
 if (milestones.length) {
  const timeline = node('section', '', 'detail-related');
  timeline.append(node('h3', '이어서 볼 기록'), eventList(milestones, 'h4'));
  content.append(timeline);
 }
 appendSources(event.sources);
}
