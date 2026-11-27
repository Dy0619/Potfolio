const eventChapters = [
 ['ancient', '고조선·삼국·가야·부여'],
 ['north-south', '남북국·후삼국'],
 ['goryeo', '고려'],
 ['joseon', '조선'],
 ['empire', '대한제국'],
 ['colonial', '일제강점기'],
 ['modern', '현대']
];

const aksEventSource = (title, id) => ['한국민족문화대백과사전 · ' + title, 'https://encykorea.aks.ac.kr/Article/' + id];
const historyEventSource = (title, url) => ['국사편찬위원회 우리역사넷 · ' + title, 'https://contents.history.go.kr/' + url];

const historicalEvents = [
 {
  id: 'wiman-rise', chapter: 'ancient', date: '기원전 2세기 초', title: '위만의 집권', aliases: ['위만조선 성립', '위만조선 건국'],
  summary: '연나라 방면에서 고조선으로 들어온 위만이 세력을 모아 준왕을 몰아내고 왕이 되었다.',
  context: '위만은 처음에 준왕의 허락을 받아 변방에 머물렀다. 집권 뒤에도 나라 이름은 조선이었다.',
  people: [['gojoseon-wiman', '준왕을 몰아내고 집권'], ['gojoseon-jun', '위만에게 왕위를 빼앗긴 왕']],
  sources: [aksEventSource('위만', 'E0041137'), historyEventSource('위만의 망명과 집권', 'front/hm/view.do?levelId=hm_001_0030&treeId=020101')]
 },
 {
  id: 'fall-of-wiman-joseon', chapter: 'ancient', date: '기원전 108년', title: '위만조선의 멸망', aliases: ['고조선 멸망', '왕검성 함락'],
  summary: '한나라의 침공과 지배층의 분열 속에서 우거왕이 죽고 왕검성이 함락되었다.',
  context: '한나라는 고조선이 멸망한 뒤 그 옛 땅 일부에 낙랑군 등 군현을 설치했다.',
  people: [['gojoseon-ugeo', '한나라의 침공에 맞선 위만조선의 마지막 왕']],
  sources: [aksEventSource('위만조선', 'E0041138'), aksEventSource('우거왕', 'E0039783')]
 },
 {
  id: 'goguryeo-nangnang', chapter: 'ancient', date: '313년', title: '고구려의 낙랑군 정복', aliases: ['낙랑군 멸망', '미천왕 낙랑군'],
  summary: '미천왕이 낙랑군을 공격해 한반도 서북부에 남아 있던 중국 군현의 지배를 끝냈다.',
  context: '고구려는 이듬해 대방군도 공격하며 서북부의 세력 범위를 넓혔다.',
  people: [['ancient-06', '낙랑군과 대방군을 공격한 고구려 왕']],
  sources: [aksEventSource('미천왕', 'E0020017'), aksEventSource('낙랑군', 'E0011576')]
 },
 {
  id: 'baekje-pyongyang', chapter: 'ancient', date: '371년', title: '백제의 평양성 공격', aliases: ['근초고왕 평양성', '고국원왕 전사'],
  summary: '근초고왕이 이끄는 백제군이 고구려 평양성을 공격했다.',
  context: '고구려의 고국원왕은 평양성을 지키다가 화살을 맞고 사망했다.',
  people: [['geunchogo', '고구려를 공격한 백제 왕'], ['gogugwon', '평양성에서 전사한 고구려 왕']],
  sources: [historyEventSource('백제 근초고왕의 영토 확장', 'front/hm/view.do?levelId=hm_010_0020')]
 },
 {
  id: 'goguryeo-reforms', chapter: 'ancient', date: '372–373년', title: '소수림왕의 불교 수용과 체제 정비', aliases: ['태학 설립', '고구려 불교 공인', '고구려 율령'],
  summary: '《삼국사기》는 고구려가 372년 전진에서 온 불교를 받아들이고 태학을 세웠으며, 373년 율령을 반포했다고 기록했다.',
  context: '태학과 율령은 관료 교육과 국가 운영에 필요한 제도를 정비하는 데 쓰였다.',
  people: [['sosurim', '불교 수용과 태학 설치, 율령 반포를 추진한 왕']],
  sources: [historyEventSource('소수림왕의 체제 정비', 'mobile/hm/view.do?levelId=hm_009_0030')]
 },
 {
  id: 'gwanggaeto-silla', chapter: 'ancient', date: '400년', title: '고구려의 신라 구원', aliases: ['광개토왕 신라 구원', '경자년 원정'],
  summary: '왜군의 침입을 받은 신라가 도움을 청하자 광개토왕이 군대를 보내 지원했다.',
  context: '광개토왕릉비에는 고구려군이 신라에 들어간 뒤 왜군을 추격한 내용이 남아 있다.',
  people: [['gwanggaeto', '신라에 군대를 파견한 고구려 왕']],
  sources: [historyEventSource('광개토왕의 영역 확장', 'front/hm/view.do?levelId=hm_009_0040&tabId=03&treeId=010201')]
 },
 {
  id: 'pyongyang-capital', chapter: 'ancient', date: '427년', title: '고구려의 평양 천도', aliases: ['장수왕 평양 천도', '고구려 수도 이전'],
  summary: '장수왕이 고구려의 수도를 국내성에서 평양으로 옮겼다.',
  context: '평양 천도 이후 고구려는 남쪽으로 세력을 넓혔고, 475년에는 백제의 수도 한성을 공격했다.',
  people: [['jangsu', '수도를 평양으로 옮긴 고구려 왕']],
  sources: [aksEventSource('장수왕', 'E0048605'), historyEventSource('장수왕의 평양 천도', 'mobile/kc/view.do?levelId=kc_r100310')]
 },
 {
  id: 'hanseong-fall', chapter: 'ancient', date: '475년', title: '백제 한성 함락과 웅진 천도', aliases: ['한성 함락', '웅진 천도', '개로왕 사망'],
  summary: '장수왕의 고구려군이 백제 수도 한성을 공격했고 개로왕이 죽었다.',
  context: '백제는 문주왕 때 한성을 떠나 웅진으로 수도를 옮겨 왕조를 이어갔다.',
  people: [['jangsu', '백제 한성을 공격한 고구려 왕'], ['ancient-13', '한성이 함락되며 사망한 백제 왕'], ['ancient-14', '한성 함락 뒤 웅진으로 천도한 백제 왕']],
  sources: [aksEventSource('장수왕', 'E0048605'), aksEventSource('웅진천도', 'E0071958')]
 },
 {
  id: 'buyeo-surrender', chapter: 'ancient', date: '494년', title: '부여의 고구려 귀부', aliases: ['부여 멸망'],
  summary: '부여 왕이 처자와 함께 고구려에 귀부했다고 《삼국사기》가 전한다.',
  context: '《삼국사기》 고구려본기는 이 일을 문자명왕 3년 기사에 기록했다.',
  people: [['ancient-05', '부여 왕의 귀부를 받은 고구려 왕']],
  sources: [['국사편찬위원회 한국사데이터베이스 · 부여왕이 항복해오다', 'https://db.history.go.kr/ancient/level.do?levelId=sg_019r_0020_0080'], aksEventSource('문자명왕', 'E0019639')]
 },
 {
  id: 'silla-state-name', chapter: 'ancient', date: '503년', title: '신라 국호와 왕호 정비', aliases: ['지증왕 국호', '마립간', '신라 국호'],
  summary: '《삼국사기》는 지증왕 때 국호를 신라로 정하고 통치자의 칭호를 왕으로 바꿨다고 기록했다.',
  context: '이는 후대 사서에서 확인되는 제도 정비 기사다. 박혁거세의 건국 전승과는 시기와 사료의 성격이 다르다.',
  people: [['ancient-20', '국호와 왕호를 정비한 신라 왕']],
  sources: [historyEventSource('신라 국호의 확정과 왕호 사용', 'mobile/nh/view.do?levelId=nh_006_0030_0030_0010')]
 },
 {
  id: 'silla-buddhism', chapter: 'ancient', date: '527~528년', title: '신라의 불교 공인', aliases: ['이차돈 순교', '법흥왕 불교 공인'],
  summary: '법흥왕 때 불교가 공인되면서 신라 조정의 후원을 받게 됐다.',
  context: '이차돈의 죽음이 불교 공인의 계기가 됐다고 전해진다. 이차돈이 죽은 해는 《삼국유사》에 527년, 《삼국사기》에 528년으로 전한다.',
  people: [['beopheung', '불교를 공인한 신라 왕'], ['ichadon', '불교 공인 과정에서 처형된 것으로 기록된 인물']],
  sources: [aksEventSource('법흥왕', 'E0022785'), ['국사편찬위원회 한국사데이터베이스 · 신라가 처음으로 불교를 시행하다', 'https://db.history.go.kr/ancient/level.do?levelId=sg_004r_0030_0110']]
 },
 {
  id: 'geumgwan-gaya', chapter: 'ancient', date: '532년', title: '금관가야의 신라 병합', aliases: ['금관가야 멸망', '금관국 항복'],
  summary: '금관가야의 마지막 왕 구형왕이 가족과 함께 신라 법흥왕에게 항복했다.',
  context: '구형왕 일가는 신라에 편입됐다. 가야 연맹의 다른 나라들은 당시에도 남아 있었고, 대가야는 562년에 멸망했다.',
  people: [['gaya-guhae', '신라에 항복한 금관가야의 마지막 왕'], ['beopheung', '금관가야의 항복을 받은 신라 왕']],
  sources: [aksEventSource('구형왕', 'E0006111'), historyEventSource('가야의 멸망', 'mobile/kc/view.do?levelId=kc_i100720')]
 },
 {
  id: 'sabi-capital', chapter: 'ancient', date: '538년', title: '백제의 사비 천도', aliases: ['사비 천도', '성왕 천도', '남부여'],
  summary: '성왕이 백제의 수도를 웅진에서 사비로 옮겼다.',
  context: '사비는 지금의 충남 부여 일대로, 백제는 수도를 옮기면서 국호를 남부여라 했다.',
  people: [['seong-baekje', '수도를 사비로 옮긴 백제 왕']],
  sources: [aksEventSource('사비천도', 'E0071959')]
 },
 {
  id: 'gwansanseong', chapter: 'ancient', date: '554년', title: '관산성 전투', aliases: ['관산성 싸움', '성왕 전사'],
  summary: '백제와 신라가 관산성 일대에서 싸웠고 백제 성왕이 전투 중 사망했다.',
  context: '한강 유역을 둘러싼 갈등으로 양국의 동맹이 무너진 뒤 벌어진 전투였다.',
  people: [['seong-baekje', '관산성 전투에서 사망한 백제 왕'], ['jinheung', '전투 당시 신라 왕'], ['history-expansion-3000-41', '신라 측 전투에 참여한 장수']],
  sources: [aksEventSource('관산성전투', 'E0004868')]
 },
 {
  id: 'jinheung-stele', chapter: 'ancient', date: '561년 이후', title: '진흥왕 순수비와 척경비', aliases: ['진흥왕 순수비', '북한산 순수비', '창녕 척경비'],
  summary: '신라는 진흥왕 때 창녕 척경비와 여러 순수비를 세워 왕의 방문과 영토 확장을 기록했다.',
  context: '북한산·황초령·마운령 등에 남은 비문은 신라의 영역과 당대 관직을 살피는 자료다.',
  people: [['jinheung', '비문에 이름이 남은 신라 왕']],
  sources: [historyEventSource('진흥왕 순수비', 'mobile/kc/view.do?code=kc_age_10&levelId=kc_r101300')]
 },
 {
  id: 'daegaya', chapter: 'ancient', date: '562년', title: '대가야의 멸망', aliases: ['대가야 정벌'],
  summary: '신라 진흥왕 때 이사부가 이끈 신라군이 대가야를 정복했다.',
  context: '금관가야가 신라에 편입된 지 30년 뒤 대가야까지 멸망하면서 가야의 정치 세력이 막을 내렸다.',
  people: [['isabu', '대가야를 정복한 신라군의 지휘관'], ['jinheung', '대가야 정복 당시 신라 왕']],
  sources: [aksEventSource('가야', 'E0000257'), historyEventSource('가야의 멸망', 'mobile/kc/view.do?levelId=kc_i100720')]
 },
 {
  id: 'salsu', chapter: 'ancient', date: '612년', title: '살수대첩', aliases: ['살수 전투'],
  summary: '을지문덕이 이끈 고구려군이 평양 쪽에서 물러나던 수나라군을 살수에서 격파했다.',
  context: '이 패배로 수나라의 대규모 고구려 원정은 실패로 끝났다.',
  people: [['eulji', '고구려군 지휘관'], ['yeongyang', '수나라 원정 당시 고구려 왕']],
  sources: [aksEventSource('살수대첩', 'E0026415')]
 },
 {
  id: 'ansi', chapter: 'ancient', date: '645년', title: '안시성 전투', aliases: ['안시성 싸움', '안시성 전투 승리'],
  summary: '당 태종이 이끈 당군이 고구려 안시성을 포위했으나 함락시키지 못하고 철수했다.',
  context: '고구려 측 수비를 지휘한 안시성 성주의 이름은 《삼국사기》 본문에 나오지 않는다.',
  people: [['bojang', '당 태종의 침공 당시 고구려 왕']],
  sources: [aksEventSource('안시성전투', 'E0034848'), ['국사편찬위원회 한국사데이터베이스 · 안시성 전투 기사', 'https://db.history.go.kr/ancient/level.do?levelId=sg_021r_0020_0222']]
 },
 {
  id: 'hwangsanbeol', chapter: 'ancient', date: '660년', title: '황산벌 전투', aliases: ['백제 멸망', '사비성 함락'],
  summary: '계백이 이끈 백제군이 사비로 진군하던 김유신의 신라군과 황산벌에서 맞붙었다.',
  context: '황산벌에서 패한 뒤 백제의 수도 사비는 신라와 당의 연합군에 함락됐다.',
  people: [['gyebaek', '백제군 지휘관'], ['yusin', '신라군 지휘관'], ['uija', '백제의 마지막 왕']],
  sources: [aksEventSource('황산벌전투', 'E0065183'), aksEventSource('삼국통일', 'E0026483')]
 },
 {
  id: 'baekje-fall', chapter: 'ancient', date: '660년', title: '백제 멸망 · 사비성 함락', aliases: ['백제의 멸망', '의자왕 항복', '사비 함락'],
  summary: '신라와 당의 연합군이 백제의 수도 사비를 함락했고 의자왕이 항복했다.',
  context: '백제 왕조가 무너진 뒤 복신·도침 등은 부흥운동을 이어갔다.',
  people: [['uija', '나당 연합군에 항복한 백제의 마지막 왕'], ['yusin', '백제 공격에 나선 신라군 지휘관'], ['muyeol', '백제 공격 당시 신라 왕']],
  sources: [aksEventSource('의자왕', 'E0043357'), aksEventSource('백제', 'E0022355'), historyEventSource('백제 멸망과 부흥운동', 'mobile/kc/view.do?code=kc_age_10&levelId=kc_n101150')]
 },
 {
  id: 'baekje-restoration', chapter: 'ancient', date: '660–663년', title: '백제 부흥운동과 백강 전투', aliases: ['백제 부흥운동', '백강전투', '백촌강'],
  summary: '백제 멸망 뒤 복신과 도침 등이 왕자 부여풍을 맞아 부흥을 추진했다.',
  context: '부흥군과 왜의 지원군은 663년 백강 전투에서 나당 연합군에 패했다.',
  people: [['ancient-17', '백제 부흥군을 이끈 장수'], ['ancient-18', '복신과 함께 백제 부흥을 추진한 승려']],
  sources: [['국사편찬위원회 한국사데이터베이스 · 복신과 도침의 백제 부흥 활동', 'https://db.history.go.kr/ancient/level.do?levelId=sg_006r_0020_0370'], historyEventSource('백강 전투', 'mobile/tg/view.do?ganada=&levelId=tg_001_0150&pageUnit=10&subjectCode=tg_age_20&tabId=01')]
 },
 {
  id: 'fall-of-goguryeo', chapter: 'ancient', date: '668년', title: '고구려 멸망 · 평양성 함락', aliases: ['고구려 멸망', '평양성 전투'],
  summary: '신라와 당의 연합군이 평양성을 함락하자 보장왕이 항복했다.',
  context: '연개소문이 죽은 뒤 지배층 내부의 갈등이 격해졌고, 그 틈을 타 신라와 당이 고구려를 공격했다.',
  people: [['bojang', '평양성이 함락된 뒤 항복한 고구려의 마지막 왕'], ['munmu', '고구려 공격 당시 신라 왕']],
  sources: [aksEventSource('삼국통일', 'E0026483')]
 },
 {
  id: 'silla-tang-war', chapter: 'north-south', date: '670–676년', title: '나당전쟁', aliases: ['매소성 전투', '기벌포 전투', '나·당 전쟁'],
  summary: '백제와 고구려의 옛 영토를 둘러싸고 신라와 당이 전쟁을 벌였다.',
  context: '신라는 매소성 전투와 기벌포 해전을 거치며 당군의 남진을 막았다.',
  people: [['munmu', '당과의 전쟁을 치른 신라 왕']],
  sources: [aksEventSource('나당전쟁', 'E0011307')]
 },
 {
  id: 'wonhyo-commentary', chapter: 'north-south', date: '7세기', title: '원효의 《대승기신론소》 저술', aliases: ['대승기신론소', '원효 불교', '대승기신론'],
  summary: '원효가 《대승기신론》의 뜻과 주요 쟁점을 풀이하는 주석서를 썼다.',
  context: '이 책은 신라 불교 사상을 보여 주는 저술로, 중국과 일본에도 전해졌다.',
  people: [['wonhyo', '《대승기신론소》를 쓴 승려']],
  sources: [aksEventSource('대승기신론소', 'E0014539')]
 },
 {
  id: 'silla-tang-end', chapter: 'north-south', date: '675–676년', title: '매소성·기벌포 전투와 나당전쟁 종결', aliases: ['매소성 전투', '기벌포 해전', '신라 삼국통일'],
  summary: '신라가 675년 매소성 일대와 676년 기벌포에서 당군과 싸웠다.',
  context: '전쟁이 끝난 뒤 신라는 옛 백제 땅과 고구려 남부 일부를 확보했다. 고구려의 옛 영토 전체가 신라에 편입된 것은 아니다.',
  people: [['munmu', '당과의 전쟁 종결 당시 신라 왕']],
  sources: [aksEventSource('나당전쟁', 'E0011307'), historyEventSource('나당전쟁과 전쟁 종결', 'mobile/kc/view.do?levelId=kc_i101220')]
 },
 {
  id: 'silla-gukhak', chapter: 'north-south', date: '682년', title: '신라 국학 설립', aliases: ['국학 설치', '신문왕 국학'],
  summary: '신문왕이 나라에서 운영하는 교육기관인 국학을 세웠다.',
  context: '국학에서는 유교 경전 등을 가르쳐 신라의 관료로 활동할 인재를 길렀다.',
  people: [['sinmun', '국학을 설립한 신라 왕']],
  sources: [historyEventSource('국학의 설립과 독서삼품과 실시', 'mobile/hm/view.do?levelId=hm_039_0010')]
 },
 {
  id: 'balhae-founded', chapter: 'north-south', date: '698년', title: '발해 건국', aliases: ['발해 건국 과정'],
  summary: '대조영이 고구려 유민 등과 함께 동모산 일대에 나라를 세웠다.',
  context: '발해는 이후 옛 고구려의 북부와 만주 동부 일대로 세력을 넓혔다.',
  people: [['ancient-35', '발해를 건국한 인물']],
  sources: [aksEventSource('발해', 'E0021626')]
 },
 {
  id: 'balhae-dengzhou', chapter: 'north-south', date: '732년', title: '발해의 등주 공격', aliases: ['장문휴 등주 공격', '등주 전투'],
  summary: '발해 무왕의 명을 받은 장문휴가 해군을 이끌고 바다를 건너 당의 등주를 공격했다.',
  context: '발해가 당과 대립하던 시기에 산둥반도까지 해군을 보낸 사건이다.',
  people: [['expanded-person-100', '발해 해군을 이끈 장수'], ['ancient-36', '공격을 명령한 발해 무왕']],
  sources: [aksEventSource('장문휴', 'E0048458'), aksEventSource('발해', 'E0021626')]
 },
 {
  id: 'bulguksa-seokguram', chapter: 'north-south', date: '751년경 착공', title: '불국사 중창과 석굴암 조성', aliases: ['불국사', '석굴암', '석불사'],
  summary: '《삼국유사》에 따르면 통일신라의 김대성이 불국사를 중창하고 석불사로 불리던 석굴암을 조성하기 시작했다.',
  context: '두 유적은 통일신라의 불교 신앙과 건축·조각 기술을 보여 주는 대표적인 문화유산이다.',
  people: [['ancient-22', '불국사 중창과 석굴암 조성을 시작한 것으로 기록된 인물']],
  sources: [aksEventSource('경주 불국사', 'E0024933'), historyEventSource('석굴암과 불국사', 'mobile/kc/view.do?code=kc_age_10&levelId=kc_r100440')]
 },
 {
  id: 'balhae-sanggyeong', chapter: 'north-south', date: '8세기 중엽', title: '발해의 상경 천도', aliases: ['상경성', '상경용천부', '발해 수도'],
  summary: '대흠무가 다스리던 때 발해가 수도를 상경으로 옮겼다.',
  context: '상경은 발해의 주요 도성이 됐다. 왕궁과 도로가 일정한 구획을 이루는 계획도시였다.',
  people: [['ancient-37', '상경 천도를 추진한 발해 문왕']],
  sources: [aksEventSource('문왕', 'E0019602'), historyEventSource('발해의 도성 상경성', 'front/hm/view.do?levelId=hm_044_0010&treeId=010304')]
 },
 {
  id: 'balhae-seonwang', chapter: 'north-south', date: '818–830년 재위', title: '발해 선왕의 영토 확장', aliases: ['대인수', '해동성국', '발해 전성기'],
  summary: '선왕 대인수 때 발해가 여러 말갈 집단을 복속시키고 영역을 넓혔다.',
  context: '중국의 사서 《신당서》는 발해를 바다 동쪽의 융성한 나라라는 뜻의 ‘해동성국’으로 불렀다.',
  people: [['balhae-dae-insu', '영토 확장을 이끈 발해 선왕']],
  sources: [aksEventSource('선왕', 'E0028820'), historyEventSource('발해의 전성', 'front/hm/view.do?levelId=hm_030_0060&tabId=01&treeId=010301')]
 },
 {
  id: 'cheonghaejin', chapter: 'north-south', date: '828년', title: '청해진 설치', aliases: ['완도 청해진'],
  summary: '장보고가 신라 왕의 허락을 받아 지금의 완도에 청해진을 설치했다.',
  context: '청해진은 해적을 막고 신라·당·일본을 잇는 해상 교역을 관리하는 거점이 됐다.',
  people: [['ancient-25', '청해진을 설치하고 운영한 인물']],
  sources: [aksEventSource('청해진', 'E0056856'), aksEventSource('장보고', 'E0048474')]
 },
 {
  id: 'later-baekje', chapter: 'north-south', date: '900년', title: '후백제 건국', aliases: ['후백제 성립', '견훤 완산주'],
  summary: '견훤이 완산주를 도읍으로 삼고 후백제를 세웠다.',
  context: '후백제는 신라 말의 혼란 속에서 서남부를 중심으로 성장해 후삼국의 한 축이 됐다.',
  people: [['ancient-32', '후백제를 세운 인물']],
  sources: [aksEventSource('후백제', 'E0065738')]
 },
 {
  id: 'later-goguryeo', chapter: 'north-south', date: '901년', title: '후고구려 건국', aliases: ['태봉', '마진', '궁예 후고구려'],
  summary: '궁예가 송악을 중심으로 후고구려를 세웠다.',
  context: '궁예는 국호를 마진으로 바꾸고 철원으로 수도를 옮겼으며, 이후 다시 태봉으로 국호를 바꿨다.',
  people: [['ancient-33', '후고구려를 건국한 인물']],
  sources: [historyEventSource('후고구려의 궁예', 'front/hm/print.do?levelId=hm_032_0040&treeId=020103')]
 },
 {
  id: 'goryeo-founded', chapter: 'north-south', date: '918년', title: '고려 건국', aliases: ['왕건 고려 개국', '태조 즉위'],
  summary: '궁예를 몰아낸 신하들이 왕건을 왕으로 추대하자 왕건은 새 나라의 이름을 고려로 정했다.',
  context: '왕건은 이듬해 송악으로 수도를 옮겼다. 고려는 935년 신라를 받아들이고 936년 후백제를 무너뜨렸다.',
  people: [['taejo', '고려를 건국한 왕'], ['ancient-33', '왕위에서 쫓겨난 태봉의 왕']],
  sources: [aksEventSource('태조', 'E0059032'), aksEventSource('고려', 'E0003424')]
 },
 {
  id: 'balhae-fall', chapter: 'north-south', date: '926년', title: '발해 멸망', aliases: ['거란 발해 정복', '동단국'],
  summary: '거란군이 발해를 공격해 상경을 함락했고, 발해의 마지막 왕 대인선이 항복했다.',
  context: '거란은 발해의 옛 땅에 동단국을 세웠다. 일부 발해인은 이후 고려로 이주했다.',
  people: [['ancient-38', '거란군에 항복한 발해의 마지막 왕']],
  sources: [aksEventSource('대인선', 'E0014667'), aksEventSource('발해', 'E0021626')]
 },
 {
  id: 'gongsan', chapter: 'north-south', date: '927년', title: '공산 전투', aliases: ['공산 동수 전투', '팔공산 전투'],
  summary: '왕건이 신라를 공격한 견훤의 군대와 공산 동수 일대에서 맞붙었다.',
  context: '고려군은 크게 패했고 왕건은 가까스로 살아 돌아왔다.',
  people: [['taejo', '고려군을 이끈 왕'], ['ancient-32', '후백제군을 이끈 왕'], ['history-expansion-2500-15', '고려군에 참전해 전사한 장수']],
  sources: [aksEventSource('공산전투', 'E0004338')]
 },
 {
  id: 'silla-surrender', chapter: 'north-south', date: '935년', title: '신라 멸망 · 경순왕의 고려 귀부', aliases: ['신라 멸망', '경순왕 항복'],
  summary: '경순왕이 왕건에게 나라를 넘기며 신라가 고려에 편입됐다.',
  context: '후삼국의 경쟁 구도는 이듬해 고려가 후백제까지 무너뜨리면서 끝났다.',
  people: [['ancient-34', '고려에 귀부한 신라의 마지막 왕'], ['taejo', '신라를 받아들인 고려 태조']],
  sources: [aksEventSource('경순왕', 'E0002611'), aksEventSource('후삼국 통일', 'E0065744')]
 },
 {
  id: 'illicheon', chapter: 'north-south', date: '936년', title: '일리천 전투와 후삼국 통일', aliases: ['후삼국 통일', '후백제 멸망'],
  summary: '왕건이 이끄는 고려군이 일리천에서 신검의 후백제군을 격파했다.',
  context: '아들 신검에게 왕위를 빼앗기고 고려로 온 견훤도 왕건과 함께했다.',
  people: [['taejo', '고려군을 이끈 태조'], ['ancient-32', '고려 편에 선 후백제의 건국자'], ['later-singeom', '후백제군을 이끈 마지막 왕']],
  sources: [aksEventSource('일리천전투', 'E0047180'), aksEventSource('후삼국 통일', 'E0065744')]
 },
 {
  id: 'manumission', chapter: 'goryeo', date: '956년', title: '노비안검법 시행', aliases: ['광종 노비안검법', '노비안검'],
  summary: '광종이 노비가 된 경위를 조사해 부당하게 신분이 낮아진 사람들을 양인으로 되돌렸다.',
  context: '이 조치로 호족이 거느리던 일부 노비가 해방됐다. 고려 조정의 권한이 커지는 계기이기도 했다.',
  people: [['gwangjong', '노비안검법을 시행한 고려 왕']],
  sources: [aksEventSource('노비안검법', 'E0012765')]
 },
 {
  id: 'goryeo-exam', chapter: 'goryeo', date: '958년', title: '고려 과거제 도입', aliases: ['광종 과거제', '쌍기', '과거 제도'],
  summary: '광종이 쌍기의 건의를 받아들여 시험으로 관리를 선발하는 과거제를 시행했다.',
  context: '과거는 이후 고려에서 관리가 되는 주요 경로 가운데 하나가 됐다.',
  people: [['gwangjong', '고려에서 과거를 처음 시행한 왕']],
  sources: [aksEventSource('광종', 'E0005220'), historyEventSource('광종과 과거제', 'mobile/kc/view.do?code=kc_age_20&levelId=kc_i200500')]
 },
 {
  id: 'choe-proposal', chapter: 'goryeo', date: '982년', title: '최승로의 시무 28조 건의', aliases: ['시무28조', '최승로 상서문'],
  summary: '최승로가 성종에게 국정 운영을 개선하기 위한 조목을 올렸다.',
  context: '건의에는 지방 통치와 관리 제도, 불교 행사의 운영 등에 관한 의견이 담겼다.',
  people: [['choe-seungro', '시무 28조를 올린 신하'], ['royal-0040-6', '상서문을 받은 고려 왕']],
  sources: [aksEventSource('최승로 상서문', 'E0057434')]
 },
 {
  id: 'seo-hui-talks', chapter: 'goryeo', date: '993년', title: '서희의 거란 담판', aliases: ['서희 담판', '강동 6주', '거란 1차 침입'],
  summary: '거란의 침입 때 서희가 소손녕과 협상해 거란군의 철수를 이끌어 냈다.',
  context: '담판 이후 고려는 압록강 동쪽까지 진출해 강동 6주를 확보했다.',
  people: [['seo-hui', '거란 장수 소손녕과 담판한 고려 관료'], ['royal-0040-6', '담판 당시 고려 왕']],
  sources: [aksEventSource('서희', 'E0028321')]
 },
 {
  id: 'gwiju', chapter: 'goryeo', date: '1019년', title: '귀주대첩', aliases: ['귀주 전투', '거란 3차 침입'],
  summary: '강감찬이 이끈 고려군이 소배압의 거란군을 귀주에서 격파했다.',
  context: '거란의 세 번째 대규모 침입을 물리친 뒤 고려와 거란 사이에 외교 관계가 회복됐다.',
  people: [['gang-gamchan', '고려군의 총지휘관'], ['hyeonjong', '거란의 침입 당시 고려 왕']],
  sources: [historyEventSource('강감찬의 귀주 대첩', 'front/hm/view.do?levelId=hm_048_0030')]
 },
 {
  id: 'nine-fortresses', chapter: 'goryeo', date: '1107–1109년', title: '윤관의 동북 9성 설치', aliases: ['동북9성', '별무반', '윤관 여진 정벌'],
  summary: '윤관이 별무반을 이끌고 여진을 공격한 뒤 동북 지역에 아홉 성을 쌓았다.',
  context: '고려는 여진의 반격과 반환 요구가 이어지자 1109년에 성들을 돌려줬다. 9성의 구체적인 위치는 의견이 엇갈린다.',
  people: [['history-bio-28', '여진 출정과 9성 설치를 이끈 장군']],
  sources: [historyEventSource('동북 9성', 'front/tg/view.do?ganada=&levelId=tg_002_1050&pageUnit=10&treeId=0200'), ['국사편찬위원회 한국사데이터베이스 · 윤관과 동북 9성', 'https://db.history.go.kr/goryeo/level.do?levelId=kr_096r_0010_0030_0100&types=r']]
 },
 {
  id: 'military-uprising', chapter: 'goryeo', date: '1170년', title: '고려 무신정변', aliases: ['무신란', '무신정권', '정중부 정변'],
  summary: '정중부 등이 정변을 일으켜 문신들을 제거하고 의종을 폐위했다.',
  context: '무신이 정치 권력을 장악하는 시기의 출발점이 됐다.',
  people: [['jeong-jungbu', '정변을 주도한 무신'], ['royal-0040-18', '정변으로 폐위된 고려 왕']],
  sources: [aksEventSource('무신란', 'E0019113'), historyEventSource('무신정변', 'front/hm/view.do?levelId=hm_050_0010')]
 },
 {
  id: 'ganghwa-capital', chapter: 'goryeo', date: '1232년', title: '강화도 천도', aliases: ['강화 천도', '몽골 침입'],
  summary: '몽골의 침략에 맞서 고려가 개경에서 강화도로 도읍을 옮겼다.',
  context: '최우가 주도한 강화도 천도 이후 고려 조정은 섬에서 항쟁을 이어갔다.',
  people: [['choe-u', '강화도 천도를 주도한 무신 집권자'], ['royal-0040-23', '천도 당시 고려 왕']],
  sources: [aksEventSource('강화천도', 'E0001532')]
 },
 {
  id: 'tripitaka-recarving', chapter: 'goryeo', date: '13세기 중엽', title: '팔만대장경 판각', aliases: ['재조대장경', '고려대장경', '해인사 대장경판'],
  summary: '고려 조정은 몽골과의 전쟁 중에 소실된 대장경을 다시 만들기 위해 대장경판을 새겼다.',
  context: '고종 재위기에 추진된 이 판각 사업의 결과물이 합천 해인사에 전한다.',
  people: [['royal-0040-23', '대장경을 다시 새길 때 재위한 고려 왕']],
  sources: [aksEventSource('합천 해인사 대장경판', 'E0062711'), historyEventSource('고려 대장경', 'mobile/kc/view.do?levelId=kc_r200500')]
 },
 {
  id: 'sambyeolcho', chapter: 'goryeo', date: '1270–1273년', title: '삼별초 항쟁', aliases: ['삼별초의 난', '삼별초의 항쟁'],
  summary: '고려 조정이 개경으로 돌아가고 삼별초를 해산하려 하자 삼별초가 봉기했다.',
  context: '배중손 등이 이끈 삼별초는 진도로 옮겨 항쟁했고, 뒤이어 제주에서 고려·몽골 연합군에 진압됐다.',
  people: [['bae-jungson', '봉기를 이끌고 진도에 근거지를 둔 장수']],
  sources: [aksEventSource('삼별초항쟁', 'E0026605')]
 },
 {
  id: 'ssangseong', chapter: 'goryeo', date: '1356년', title: '쌍성총관부 수복', aliases: ['쌍성총관부', '공민왕 반원 개혁'],
  summary: '공민왕이 군대를 보내 원이 설치했던 쌍성총관부 지역을 되찾았다.',
  context: '함경도 남부 일대가 다시 고려의 지배 아래 들어왔다.',
  people: [['gongmin', '쌍성총관부 수복을 추진한 고려 왕']],
  sources: [historyEventSource('쌍성총관부의 설치와 수복', 'front/hm/view.do?levelId=hm_053_0040')]
 },
 {
  id: 'land-reform-sindon', chapter: 'goryeo', date: '1366년', title: '전민변정도감 설치', aliases: ['신돈 개혁', '공민왕 전민변정도감'],
  summary: '공민왕이 신돈에게 토지와 노비 문제를 바로잡게 했다.',
  context: '권세가가 불법으로 빼앗은 토지를 돌려주고 부당하게 노비가 된 사람을 양인으로 되돌리는 조치가 이뤄졌다.',
  people: [['gongmin', '도감 설치를 지시한 고려 왕'], ['sindon', '토지와 신분 개혁을 이끈 인물']],
  sources: [historyEventSource('공민왕의 개혁정책과 신돈', 'mobile/hm/view.do?levelId=hm_053_0010')]
 },
 {
  id: 'jinpo', chapter: 'goryeo', date: '1380년', title: '진포 해전', aliases: ['진포대첩', '최무선 화포'],
  summary: '고려 수군이 진포에 들어온 왜구의 선단을 화포로 공격해 격퇴했다.',
  context: '최무선이 화약 제조와 화포 개발을 추진한 뒤, 고려 수군이 이를 실전에 활용한 대표적인 전투다.',
  people: [['choe-museon', '화약과 화포 개발을 추진하고 전투에 참여한 장수']],
  sources: [historyEventSource('최무선과 진포 해전', 'mobile/kc/view.do?levelId=kc_i201320')]
 },
 {
  id: 'wihwado', chapter: 'goryeo', date: '1388년', title: '위화도 회군', aliases: ['요동 정벌 취소'],
  summary: '요동으로 진군하던 이성계와 조민수의 군대가 압록강 위화도에서 방향을 돌려 개경으로 돌아왔다.',
  context: '회군 세력은 요동 정벌을 추진한 최영을 제거하고 정권을 장악했다.',
  people: [['yi-seonggye', '회군을 주도한 장수'], ['history-bio-34', '요동 정벌을 추진한 고려의 장수']],
  sources: [aksEventSource('위화도회군', 'E0041212')]
 },
 {
  id: 'goryeo-fall', chapter: 'goryeo', date: '1392년', title: '고려 멸망 · 공양왕 폐위', aliases: ['고려의 멸망', '공양왕 폐위'],
  summary: '공양왕이 왕위에서 물러나고 이성계가 새 왕위에 오르면서 고려 왕조가 끝났다.',
  context: '위화도 회군 뒤 정권을 장악한 세력이 왕조 교체를 주도했다.',
  people: [['gongyang', '폐위된 고려의 마지막 왕'], ['yi-seonggye', '고려 말 정권을 장악해 새 왕조를 연 인물']],
  sources: [aksEventSource('고려', 'E0003424'), historyEventSource('조선의 건국', 'front/ta/print.do?levelId=ta_m71_0060_0010_0010_0010')]
 },
 {
  id: 'joseon-founded', chapter: 'joseon', date: '1392년', title: '조선 건국', aliases: ['조선 개국'],
  summary: '이성계가 고려 공양왕을 대신해 왕위에 오르며 새 왕조가 출범했다.',
  context: '정도전 등 개혁 세력이 건국에 참여했고, 새 나라의 이름은 뒤이어 조선으로 정해졌다.',
  people: [['yi-seonggye', '조선의 첫 왕'], ['jeong-dojeon', '건국과 새 왕조의 제도 정비에 참여한 관료']],
  sources: [historyEventSource('조선의 건국', 'front/ta/print.do?levelId=ta_m71_0060_0010_0010_0010')]
 },
 {
  id: 'first-princes', chapter: 'joseon', date: '1398년', title: '제1차 왕자의 난', aliases: ['1차 왕자의 난', '무인정사'],
  summary: '이방원이 군사를 일으켜 정도전 등을 제거하고 세자 이방석을 죽였다.',
  context: '이 사건 뒤 태조가 물러나고 둘째 아들 이방과가 정종으로 즉위했다.',
  people: [['bangwon', '정변을 주도한 왕자'], ['jeong-dojeon', '정변 과정에서 살해된 대신'], ['yi-seonggye', '정변 뒤 왕위를 넘긴 태조']],
  sources: [historyEventSource('제1차 왕자의 난', 'mobile/hm/view.do?levelId=hm_074_0010')]
 },
 {
  id: 'jagyeongnu', chapter: 'joseon', date: '1434년', title: '자격루 제작', aliases: ['장영실 물시계', '보루각 자격루'],
  summary: '세종의 명을 받아 장영실 등이 자동으로 시각을 알리는 물시계인 자격루를 제작했다.',
  context: '세종은 자격루를 궁궐의 보루각에 설치해 표준 시계로 사용하게 했다.',
  people: [['jang-yeongsil', '자격루 제작을 주도한 기술자'], ['sejong', '제작을 지시한 왕']],
  sources: [aksEventSource('자격루', 'E0047854'), aksEventSource('장영실', 'E0048697')]
 },
 {
  id: 'hunminjeongeum', chapter: 'joseon', date: '1443년 창제 · 1446년 반포', title: '훈민정음 창제와 반포', aliases: ['한글 창제', '훈민정음 반포', '한글날'],
  summary: '세종이 새 문자 훈민정음을 지어 1443년 완성하고 1446년 반포했다.',
  context: '《훈민정음》 해례본에는 새 문자의 창제 원리와 사용법이 담겼다.',
  people: [['sejong', '훈민정음을 창제하고 반포한 왕']],
  sources: [aksEventSource('훈민정음', 'E0065806')]
 },
 {
  id: 'gyehae', chapter: 'joseon', date: '1443년', title: '계해약조 체결', aliases: ['계해약조', '세견선', '대마도 교역'],
  summary: '조선 조정이 쓰시마 도주와 통교에 관한 약조를 맺었다.',
  context: '조선에 정기적으로 보낼 수 있는 배의 수와 도주에게 지급할 쌀 등의 기준을 정했다.',
  people: [['sejong', '쓰시마와 통교 규칙을 정한 시기의 왕']],
  sources: [aksEventSource('계해약조', 'E0003273')]
 },
 {
  id: 'gyeyu', chapter: 'joseon', date: '1453년', title: '계유정난', aliases: ['계유정변', '수양대군 정변'],
  summary: '수양대군이 김종서 등 단종을 보좌하던 대신을 제거하고 권력을 장악했다.',
  context: '이 정변으로 단종의 왕권이 약해졌고, 수양대군은 1455년 세조로 즉위했다.',
  people: [['sejo', '수양대군으로서 정변을 주도'], ['danjong', '정변 당시 조선 왕'], ['kim-jongseo', '정변 과정에서 살해된 대신']],
  sources: [aksEventSource('계유정난', 'E0003220')]
 },
 {
  id: 'gyeongguk', chapter: 'joseon', date: '1485년', title: '《경국대전》 시행', aliases: ['경국대전 완성', '을사대전'],
  summary: '세조 때 시작한 법전 편찬이 여러 차례 수정된 끝에 성종 때 최종본으로 시행됐다.',
  context: '관직, 재정, 예법, 군사, 형벌, 토목 등의 국가 운영 규칙을 여섯 부문으로 정리했다.',
  people: [['sejo', '법전 편찬을 시작한 왕'], ['joseon-ruler-9', '최종본을 시행한 왕']],
  sources: [historyEventSource('경국대전의 편찬', 'mobile/kc/view.do?levelId=kc_r300100'), aksEventSource('성종', 'E0029554')]
 },
 {
  id: 'jungjong-coup', chapter: 'joseon', date: '1506년', title: '중종반정', aliases: ['중종 반정', '연산군 폐위'],
  summary: '박원종 등이 연산군을 몰아내고 진성대군을 왕으로 추대했다.',
  context: '진성대군이 중종으로 즉위했으며, 정변을 주도한 관료들이 공신에 올랐다.',
  people: [['jungjong', '반정으로 왕위에 오른 진성대군']],
  sources: [aksEventSource('중종반정', 'E0053933')]
 },
 {
  id: 'gimyo', chapter: 'joseon', date: '1519년', title: '기묘사화', aliases: ['조광조 사사', '기묘년 사화'],
  summary: '중종 때 개혁을 추진하던 조광조와 사림이 탄핵을 받아 관직에서 쫓겨났다.',
  context: '조광조는 유배지에서 사사됐다. 사화 이후 그가 추진한 일부 개혁도 중단됐다.',
  people: [['history-bio-38', '사화로 유배돼 사사된 관료'], ['jungjong', '사화 당시 인사를 단행한 왕']],
  sources: [aksEventSource('기묘사화', 'E0008223')]
 },
 {
  id: 'seonghak-sipdo', chapter: 'joseon', date: '1568년', title: '이황의 《성학십도》 편찬', aliases: ['성학십도', '퇴계 이황'],
  summary: '이황이 성리학의 핵심 내용을 열 개의 그림과 설명에 담아 선조에게 올렸다.',
  context: '왕이 수양과 통치의 원리를 일상에서 되새기도록 만든 글이다.',
  people: [['history-bio-39', '《성학십도》를 편찬한 학자']],
  sources: [aksEventSource('성학십도', 'E0029678')]
 },
 {
  id: 'seonghak-jipyo', chapter: 'joseon', date: '1575년', title: '이이의 《성학집요》 저술', aliases: ['성학집요', '율곡 이이'],
  summary: '이이가 유교 경전과 성리학 저술에서 통치에 필요한 내용을 뽑아 선조에게 올렸다.',
  context: '자기 수양에서 가족과 나라를 다스리는 문제까지 왕이 실천할 원리를 정리했다.',
  people: [['history-bio-40', '《성학집요》를 저술한 학자']],
  sources: [aksEventSource('성학집요', 'E0029682'), historyEventSource('이이의 성학집요 저술', 'front/hm/view.do?levelId=hm_094_0060&treeId=020405')]
 },
 {
  id: 'imjin-war', chapter: 'joseon', date: '1592–1598년', title: '임진왜란과 정유재란', aliases: ['임진왜란', '정유재란', '7년 전쟁'],
  summary: '1592년 일본군이 조선을 침공했다. 조선의 관군과 의병, 명의 지원군이 일본군과 싸웠다.',
  context: '강화 교섭이 결렬된 뒤 1597년 일본이 다시 침공했다. 이듬해 일본군이 철수하며 전쟁이 끝났다.',
  people: [['seonjo', '전쟁 당시 조선 왕'], ['ryu-seongryong', '군사 대응과 국정 운영에 참여한 대신'], ['yi-sunsin', '조선 수군을 지휘한 삼도수군통제사']],
  sources: [aksEventSource('임진왜란', 'E0047674'), historyEventSource('임진왜란', 'mobile/kc/view.do?code=kc_age_30&levelId=kc_i305500')]
 },
 {
  id: 'okpo-battle', chapter: 'joseon', date: '1592년', title: '옥포 해전', aliases: ['옥포해전', '임진왜란 첫 해전'],
  summary: '이순신과 원균의 함대가 거제 옥포 앞바다에서 일본 수군을 격파했다.',
  context: '임진왜란이 시작된 뒤 조선 수군이 거둔 첫 해전 승리로 기록된다.',
  people: [['yi-sunsin', '전라좌수사로 조선 수군의 공격을 지휘'], ['won-gyun', '경상우수사로 전투에 참가']],
  sources: [aksEventSource('옥포해전', 'E0038825')]
 },
 {
  id: 'hansan-battle', chapter: 'joseon', date: '1592년', title: '한산도대첩', aliases: ['한산 해전', '한산도 해전', '한산대첩', '임진왜란'],
  summary: '이순신·이억기·원균이 이끈 조선 수군이 한산도 앞바다에서 일본 수군을 격파했다.',
  context: '조선 함대는 견내량에 들어온 일본 함대를 넓은 바다로 유인해 공격했다.',
  people: [['yi-sunsin', '전라좌수사로 조선 수군을 이끈 장수'], ['yi-eokgi', '전라우수사로 해전에 참가한 장수'], ['won-gyun', '경상우수사로 해전에 참가한 장수']],
  works: ['hansan'], sources: [aksEventSource('한산도대첩', 'E0061676')]
 },
 {
  id: 'jinju-battle', chapter: 'joseon', date: '1592년', title: '제1차 진주성 전투', aliases: ['진주대첩', '진주성 전투', '임진왜란'],
  summary: '진주목사 김시민이 군사와 주민을 이끌고 일본군의 진주성 공격을 막아냈다.',
  context: '김시민은 전투 중 총상을 입고 얼마 뒤 사망했다.',
  people: [['history-index-260', '진주성 방어를 지휘한 진주목사']],
  sources: [aksEventSource('김시민', 'E0009658'), aksEventSource('임진왜란', 'E0047674')]
 },
 {
  id: 'haengju-battle', chapter: 'joseon', date: '1593년', title: '행주대첩', aliases: ['행주산성 전투', '임진왜란'],
  summary: '권율이 지휘한 조선군이 행주산성에 진을 치고 일본군의 공격을 물리쳤다.',
  context: '권율 부대는 한양 수복을 위해 북상해 행주에 주둔하고 있었다.',
  people: [['history-index-214', '행주산성을 방어한 조선군 지휘관']],
  sources: [aksEventSource('행주대첩', 'E0062859')]
 },
 {
  id: 'chilcheollyang', chapter: 'joseon', date: '1597년', title: '칠천량 해전', aliases: ['칠천량해전', '칠천량 패전'],
  summary: '원균이 거느린 조선 수군이 거제 칠천량 일대에서 일본 수군의 공격을 받아 크게 패했다.',
  context: '원균과 이억기 등이 전사했다. 이후 이순신이 다시 삼도수군통제사에 임명돼 남은 함대를 수습했다.',
  people: [['won-gyun', '당시 조선 수군을 지휘한 삼도수군통제사'], ['yi-eokgi', '전투 중 전사한 전라우수사']],
  sources: [aksEventSource('칠천량해전', 'E0058551'), aksEventSource('이억기', 'E0045106')]
 },
 {
  id: 'myeongnyang-battle', chapter: 'joseon', date: '1597년', title: '명량대첩', aliases: ['명량해전', '명량 해전', '울돌목 전투', '정유재란'],
  summary: '이순신이 이끈 조선 수군이 진도와 육지 사이의 명량 해협에서 일본 수군을 격파했다.',
  context: '칠천량 패전 뒤 남은 함선을 수습한 조선 수군은 울돌목에서 일본 함대의 진격을 막았다.',
  people: [['yi-sunsin', '조선 수군을 지휘한 삼도수군통제사']],
  works: ['myeongnyang'], sources: [aksEventSource('명량대첩', 'E0018250'), historyEventSource('명량 해전', 'mobile/kc/view.do?levelId=kc_i302300')]
 },
 {
  id: 'noryang-battle', chapter: 'joseon', date: '1598년', title: '노량해전', aliases: ['노량대첩', '노량 해전', '정유재란'],
  summary: '이순신과 명나라 장수 진린의 연합 함대가 노량 앞바다에서 일본 수군과 싸웠다.',
  context: '임진왜란·정유재란의 마지막 해전으로, 이순신은 전투 중 전사했다.',
  people: [['yi-sunsin', '조선 수군을 이끌고 전투 중 전사']],
  works: ['noryang'], sources: [aksEventSource('노량해전', 'E0012716')]
 },
 {
  id: 'daedong-law', chapter: 'joseon', date: '1608년 시작 · 17세기 이후 확대', title: '대동법 시행과 확대', aliases: ['대동법 시행', '공납 개혁'],
  summary: '조선은 지역 특산물을 내던 공납을 쌀이나 포목·동전 등으로 납부하는 대동법을 경기도에서 시행했다.',
  context: '김육은 효종 때 충청도와 전라도로 제도를 확대하는 데 힘썼다.',
  people: [['expanded-person-344', '대동법 확대를 추진한 관료'], ['joseon-ruler-17', '대동법 확대가 추진된 시기의 왕']],
  sources: [historyEventSource('대동법 시행', 'front/hm/view.do?levelId=hm_102_0040'), aksEventSource('김육', 'E0010098')]
 },
 {
  id: 'donguibogam', chapter: 'joseon', date: '1610년 완성 · 1613년 간행', title: '《동의보감》 편찬과 간행', aliases: ['허준 동의보감'],
  summary: '허준이 여러 의학서를 참고해 의학 지식을 정리한 《동의보감》을 완성했다.',
  context: '광해군 때 목활자로 간행됐고, 이후 중국과 일본에도 전해졌다.',
  people: [['expanded-person-263', '편찬을 주도한 의관'], ['joseon-ruler-15', '완성과 간행 당시 조선 왕']],
  works: ['heo-dongui-doc'],
  sources: [aksEventSource('동의보감', 'E0016731'), aksEventSource('허준', 'E0063152')]
 },
 {
  id: 'injo-coup', chapter: 'joseon', date: '1623년', title: '인조반정', aliases: ['인조 반정', '광해군 폐위'],
  summary: '서인계 인사 등이 광해군을 폐위하고 능양군을 왕으로 세웠다.',
  context: '능양군이 인조로 즉위했다. 광해군은 이후 유배됐다.',
  people: [['injo', '능양군으로서 새 왕위에 오름'], ['joseon-ruler-15', '반정으로 폐위된 광해군']],
  sources: [historyEventSource('인조반정', 'mobile/kc/view.do?levelId=kc_i305700')]
 },
 {
  id: 'jeongmyo', chapter: 'joseon', date: '1627년', title: '정묘호란', aliases: ['정묘년 후금 침공', '정묘약조'],
  summary: '후금이 조선을 침공하자 인조가 강화도로 피신했다.',
  context: '조선과 후금은 화의를 맺었다. 양국의 갈등이 이어지다가 1636년에는 병자호란이 일어났다.',
  people: [['injo', '후금의 침공 때 강화도로 피신한 왕']],
  sources: [aksEventSource('정묘호란', 'E0050194')]
 },
 {
  id: 'byeongja-war', chapter: 'joseon', date: '1636–1637년', title: '병자호란', aliases: ['병자년 청 침공', '남한산성', '삼전도의 굴욕'],
  summary: '청이 조선을 침공하자 인조는 남한산성에서 항전하다가 삼전도에서 항복했다.',
  context: '조정에서는 최명길이 강화를 주장했고, 김상헌은 청과의 화의에 반대했다.',
  people: [['injo', '남한산성에서 항전한 조선 왕'], ['choe-myeonggil', '청과의 강화를 주장한 대신'], ['kim-sangheon', '화의에 반대한 대신']],
  sources: [aksEventSource('병자호란', 'E0023151')]
 },
 {
  id: 'baekdu-marker', chapter: 'joseon', date: '1712년', title: '백두산정계비 설치', aliases: ['백두산 정계비', '조청 국경'],
  summary: '조선과 청이 국경을 조사하는 과정에서 백두산 일대에 경계를 표시하는 비석을 세웠다.',
  context: '비문에 적힌 물길 이름의 해석은 훗날 국경 논의에서 쟁점이 됐다.',
  people: [['sukjong', '청과의 국경 조사 당시 조선 왕']],
  sources: [historyEventSource('백두산 정계비', 'mobile/hm/view.do?levelId=hm_099_0090')]
 },
 {
  id: 'equal-military-tax', chapter: 'joseon', date: '1750년', title: '균역법 시행', aliases: ['영조 균역법', '군포 1필'],
  summary: '영조가 백성에게 해마다 군포 두 필을 걷던 부담을 한 필로 줄였다.',
  context: '줄어든 재정 수입을 보충하기 위해 토지 등에 다른 세금을 부과했다.',
  people: [['yeongjo', '군역 부담을 줄이는 개혁을 추진한 왕']],
  sources: [aksEventSource('균역법', 'E0007303')]
 },
 {
  id: 'gyujanggak', chapter: 'joseon', date: '1776년', title: '규장각 설치', aliases: ['정조 규장각', '규장각 설치'],
  summary: '정조가 즉위한 해에 창덕궁에 왕실 도서와 문서를 보관하는 규장각을 설치했다.',
  context: '규장각은 서적 편찬과 인재 양성, 정책 연구에도 관여했다.',
  people: [['jeongjo', '규장각을 설치하고 기능을 확대한 왕']],
  sources: [aksEventSource('규장각', 'E0007273'), historyEventSource('규장각', 'mobile/kc/view.do?levelId=kc_o300100')]
 },
 {
  id: 'suwon-hwaseong', chapter: 'joseon', date: '1794–1796년', title: '수원 화성 축성', aliases: ['수원화성', '화성 건설'],
  summary: '정조가 수원 신도시를 둘러싼 성곽 화성의 건설을 추진했다.',
  context: '축성의 과정과 공사에 쓰인 도구, 인력과 지출 내역은 《화성성역의궤》에 기록됐다.',
  people: [['jeongjo', '수원 화성 건설을 추진한 왕']],
  sources: [['문화체육관광부 · 한국의 세계유산 수원 화성', 'https://www.mcst.go.kr/usr/child/cultureStory/traditional/heritage.jsp?pMenuCD=4102020205']]
 },
 {
  id: 'mongmin', chapter: 'joseon', date: '1818년', title: '정약용의 《목민심서》 완성', aliases: ['목민심서', '다산 정약용'],
  summary: '정약용이 지방 수령이 갖춰야 할 태도와 행정 원칙을 정리했다.',
  context: '수령의 부임부터 조세, 구휼, 재판, 이임까지 지방 행정의 여러 분야를 다뤘다.',
  people: [['history-bio-44', '《목민심서》를 저술한 실학자']],
  sources: [aksEventSource('목민심서', 'E0018631')]
 },
 {
  id: 'daedong-map', chapter: 'joseon', date: '1861년 초간', title: '김정호의 《대동여지도》 간행', aliases: ['대동여지도', '김정호 지도'],
  summary: '김정호가 조선 전역을 그린 목판 지도 《대동여지도》를 간행했다.',
  context: '지도를 여러 첩으로 나눠 접거나 이어 볼 수 있게 만들고 도로, 산줄기, 하천 등을 표시했다.',
  people: [['history-bio-6', '《대동여지도》를 제작하고 간행한 지리학자']],
  sources: [aksEventSource('대동여지도', 'E0014266'), aksEventSource('대동여지도 목판', 'E0069797')]
 },
 {
  id: 'byeongin', chapter: 'joseon', date: '1866년', title: '병인양요', aliases: ['프랑스 강화도 침공', '외규장각 약탈'],
  summary: '병인박해 후 프랑스군이 강화도를 공격했다. 조선군은 문수산성과 정족산성 일대에서 맞섰다.',
  context: '프랑스군은 철수하면서 외규장각 의궤 등 여러 자료를 가져갔다.',
  people: [['history-bio-9', '프랑스군 침공 당시 조선의 집권자']],
  sources: [aksEventSource('병인양요', 'E0023142'), aksEventSource('외규장각의궤', 'E0071554')]
 },
 {
  id: 'shinmiyangyo', chapter: 'joseon', date: '1871년', title: '신미양요', aliases: ['미국 강화도 침공', '광성보 전투'],
  summary: '미국 함대가 강화도 일대를 공격하자 조선군이 광성보 등에서 맞섰다.',
  context: '미군은 강화도의 일부 진지를 점령했으나 조선과 협정을 맺지 못하고 철수했다.',
  people: [['history-bio-9', '미국과의 교섭을 거부한 당시 조선의 집권자']],
  sources: [aksEventSource('신미양요', 'E0032961')]
 },
 {
  id: 'ganghwa-treaty', chapter: 'joseon', date: '1876년', title: '강화도 조약 체결', aliases: ['강화도조약', '조일수호조규'],
  summary: '조선이 일본과 조일수호조규를 맺고 부산과 다른 두 항구를 열기로 했다.',
  context: '일본인의 치외법권 등을 인정한 조약으로, 조선이 개항하는 계기가 됐다.',
  people: [['joseon-ruler-26', '조약 체결 당시 조선 왕']],
  sources: [historyEventSource('강화도 조약', 'mobile/kc/view.do?levelId=kc_i400800')]
 },
 {
  id: 'smallpox-vaccine', chapter: 'joseon', date: '1879년부터', title: '지석영의 종두법 보급', aliases: ['종두법', '우두법', '천연두 예방'],
  summary: '지석영이 근대식 천연두 예방법인 우두 접종을 익혀 국내에 보급하기 시작했다.',
  context: '이후 종두를 가르치는 기관이 생겨 예방접종 기술이 국내에 확산됐다.',
  people: [['history-index-435', '우두 접종 기술을 익혀 보급한 의사']],
  sources: [aksEventSource('지석영', 'E0054254')]
 },
 {
  id: 'imo', chapter: 'joseon', date: '1882년', title: '임오군란', aliases: ['구식 군인 봉기', '임오년 군란'],
  summary: '급료 체불과 차별에 불만을 품은 조선 구식 군인들이 서울에서 봉기했다.',
  context: '흥선대원군이 한때 권력을 되찾았으나, 청군이 개입해 그를 청으로 데려갔다.',
  people: [['history-bio-9', '군란 중 다시 집권했다가 청으로 끌려간 인물'], ['history-bio-8', '군란 때 궁을 피한 왕비']],
  sources: [aksEventSource('임오군란', 'E0047565'), aksEventSource('명성황후', 'E0018297')]
 },
 {
  id: 'donghak', chapter: 'joseon', date: '1894년', title: '동학농민운동', aliases: ['동학농민혁명', '동학운동', '고부봉기', '갑오농민전쟁'],
  summary: '전봉준을 비롯한 동학 지도자와 농민들이 고부 봉기를 시작으로 농민군을 조직했다.',
  context: '농민군은 폐정 개혁을 요구했고, 일본군의 개입 이후 다시 봉기했으나 우금치 전투 등에서 패했다.',
  people: [['jeon-bongjun', '농민군 봉기를 이끈 지도자'], ['kim-gaenam', '농민군 지도자'], ['son-hwajung', '전라도에서 농민군을 이끈 지도자']],
  sources: [aksEventSource('동학운동', 'E0016865')]
 },
 {
  id: 'first-sino-japanese-war', chapter: 'joseon', date: '1894–1895년', title: '청일전쟁과 경복궁 점령', aliases: ['청일전쟁', '경복궁 점령', '풍도 해전', '평양 전투'],
  summary: '일본군이 경복궁을 점령한 뒤 청과 일본이 아산 앞바다와 평양 등에서 전투를 벌였다.',
  context: '전쟁은 일본의 승리로 끝났다. 청과 일본이 맺은 시모노세키조약은 조선에 대한 청의 종주권 주장을 끝내는 계기가 됐다.',
  people: [['joseon-ruler-26', '경복궁 점령과 청일전쟁 당시 조선 왕']],
  sources: [aksEventSource('청일전쟁', 'E0056610'), historyEventSource('청일전쟁의 발발과 전개', 'front/nh/view.do?levelId=nh_040_0020_0010')]
 },
 {
  id: 'gabo', chapter: 'joseon', date: '1894–1896년', title: '갑오개혁', aliases: ['갑오경장', '군국기무처', '개화 개혁'],
  summary: '조선 정부가 군국기무처를 중심으로 관리 선발과 재정, 신분제 등 여러 제도를 고치는 개혁에 착수했다.',
  context: '개혁은 동학농민운동과 청일전쟁, 일본의 내정 개입이 겹친 상황에서 여러 단계로 진행됐다.',
  people: [['joseon-ruler-26', '개혁이 진행된 시기의 조선 왕']],
  sources: [aksEventSource('갑오개혁', 'E0000925'), aksEventSource('군국기무처', 'E0006586')]
 },
 {
  id: 'education-edict', chapter: 'joseon', date: '1895년', title: '교육입국조서 발표', aliases: ['교육조서', '교육 입국 조서'],
  summary: '고종이 국가 발전에서 교육의 중요성을 밝히고 학교 설립과 인재 양성을 강조하는 조서를 내렸다.',
  context: '조서 발표 전후로 소학교와 교원 양성 기관 등 근대 학교 제도를 마련하는 작업이 진행됐다.',
  people: [['joseon-ruler-26', '교육조서를 내린 조선 왕']],
  sources: [aksEventSource('교육조서', 'E0005550'), historyEventSource('교육입국조서 원문과 해설', 'mobile/hm/view.do?levelId=hm_140_0040')]
 },
 {
  id: 'eulmi', chapter: 'joseon', date: '1895년 10월', title: '을미사변', aliases: ['명성황후 시해', '을미년 왕비 시해'],
  summary: '일본 공사 미우라 고로 등이 주도한 세력이 경복궁에 침입해 명성황후를 살해했다.',
  context: '이듬해 고종은 신변의 위협 속에 러시아 공사관으로 거처를 옮겼다.',
  people: [['history-bio-8', '경복궁에서 살해된 조선 왕비'], ['joseon-ruler-26', '사건 당시 조선 왕']],
  sources: [aksEventSource('을미사변', 'E0042948'), aksEventSource('아관파천', 'E0034214')]
 },
 {
  id: 'independence-paper', chapter: 'joseon', date: '1896년', title: '《독립신문》 창간', aliases: ['독립신문 창간', '한글 신문', '서재필 독립신문'],
  summary: '서재필이 한글판과 영문판을 갖춘 《독립신문》을 창간했다.',
  context: '한글 지면은 띄어쓰기를 써 독자의 이해를 도왔고, 국내외 소식과 사회 개혁에 관한 글을 실었다.',
  people: [['seo-jaepil', '신문의 창간과 발행을 주도한 인물']],
  sources: [aksEventSource('독립신문', 'E0015984'), historyEventSource('독립신문 창간', 'front/ht/view.do?levelId=ht_003_0020_0030_0010')]
 },
 {
  id: 'agwan', chapter: 'joseon', date: '1896–1897년', title: '아관파천', aliases: ['러시아 공사관', '고종 아관파천'],
  summary: '을미사변 이후 신변의 위협을 느낀 고종과 왕태자가 러시아 공사관으로 거처를 옮겼다.',
  context: '고종은 이듬해 경운궁으로 돌아온 뒤 대한제국을 선포했다.',
  people: [['joseon-ruler-26', '러시아 공사관으로 옮긴 조선 왕'], ['joseon-ruler-27', '당시 고종과 함께 거처를 옮긴 왕태자']],
  sources: [aksEventSource('아관파천', 'E0034214')]
 },
 {
  id: 'korean-empire', chapter: 'empire', date: '1897년', title: '대한제국 선포', aliases: ['대한제국 수립', '고종 황제 즉위'],
  summary: '고종이 환구단에서 황제에 즉위하고 국호를 대한으로 정했다.',
  context: '제국 선포 뒤 대한제국은 광무 연호를 쓰며 군사·재정·토지 등 여러 분야의 제도를 정비했다.',
  people: [['joseon-ruler-26', '대한제국의 첫 황제']],
  sources: [aksEventSource('대한제국', 'E0015187'), historyEventSource('대한제국 선포', 'mobile/kc/view.do?code=kc_age_40&levelId=kc_r400300')]
 },
 {
  id: 'manmin', chapter: 'empire', date: '1898년', title: '만민공동회 개최', aliases: ['만민 공동회', '독립협회', '관민공동회'],
  summary: '독립협회와 시민들이 서울에서 집회를 열어 외국의 이권 침탈에 반대하고 국정 개혁을 요구했다.',
  context: '그해 열린 관민공동회에서는 관료와 시민이 함께 국정 개혁안을 논의했다.',
  people: [['E0044607', '독립협회 활동에 참여한 인물']],
  sources: [aksEventSource('독립협회', 'E0015993'), historyEventSource('독립협회와 민중 집회', 'mobile/kc/view.do?code=kc_age_40&levelId=kc_n403700')]
 },
 {
  id: 'gwangmu-land', chapter: 'empire', date: '1898년부터', title: '광무 양전과 지계 발급', aliases: ['광무개혁', '양전사업', '지계아문', '토지 조사'],
  summary: '대한제국 정부가 토지의 면적과 소유 관계를 조사하는 양전 사업을 추진했다.',
  context: '조사한 내용을 바탕으로 일부 지역에서는 토지 소유 관계를 적은 지계를 발급했다.',
  people: [['joseon-ruler-26', '양전 사업을 추진한 대한제국 황제']],
  sources: [historyEventSource('광무 양전 및 지계 발급 사업', 'front/nh/print.do?levelId=nh_042_0030_0020_0030&whereStr=')]
 },
 {
  id: 'eulsa', chapter: 'empire', date: '1905년', title: '을사늑약', aliases: ['을사조약', '제2차 한일협약'],
  summary: '일본이 대한제국에 협약 체결을 강요해 외교권을 빼앗고 통감부 설치의 근거를 마련했다.',
  context: '고종은 협약을 승인하지 않았다. 민영환은 강제 체결에 항의하며 순국했다.',
  people: [['joseon-ruler-26', '협약을 승인하지 않은 대한제국 황제'], ['expanded-person-471', '협약에 항의하며 순국한 대한제국 관료']],
  sources: [aksEventSource('을사늑약', 'E0042958'), historyEventSource('을사늑약 원문과 해설', 'front/hm/view.do?levelId=hm_121_0030')]
 },
 {
  id: 'debt-redemption', chapter: 'empire', date: '1907년', title: '국채보상운동', aliases: ['국채보상'],
  summary: '대구에서 시작된 모금 운동이 대한제국의 국채를 갚자는 취지로 전국에 퍼졌다.',
  context: '언론의 보도와 각지의 모금 조직을 통해 시민과 여성 단체 등 여러 계층이 운동에 참여했다.',
  people: [['history-index-470', '대구에서 국채보상운동을 제안하고 추진한 인물']],
  sources: [aksEventSource('국채보상운동', 'E0006527')]
 },
 {
  id: 'hague-envoys', chapter: 'empire', date: '1907년', title: '헤이그 특사 파견', aliases: ['헤이그 밀사', '헤이그 특사 사건'],
  summary: '고종이 이상설·이준·이위종을 네덜란드 헤이그에 보내 을사늑약의 부당함을 알리려 했다.',
  context: '특사들은 만국평화회의에 공식 참석하지 못했으나 현지 언론 등에 대한제국의 입장을 전했다.',
  people: [['joseon-ruler-26', '특사를 파견한 대한제국 황제'], ['lee-sangseol', '헤이그 특사'], ['expanded-person-406', '헤이그 특사'], ['empire-yi-wijong', '헤이그 특사']],
  sources: [aksEventSource('헤이그 특사 사건', 'E0063241')]
 },
 {
  id: 'army-disbanded', chapter: 'empire', date: '1907년 8월', title: '대한제국 군대 해산과 정미의병', aliases: ['군대해산', '정미7조약', '정미의병'],
  summary: '일제가 고종의 강제 퇴위 뒤 대한제국 군대를 해산시켰다.',
  context: '일부 군인은 서울에서 저항하거나 의병에 합류했다. 해산군인의 합류로 의병 부대의 전력이 강화됐다.',
  people: [['joseon-ruler-27', '군대가 강제로 해산될 당시 재위한 대한제국 황제']],
  sources: [aksEventSource('군대해산', 'E0006598'), aksEventSource('정미의병', 'E0050215')]
 },
 {
  id: 'harbin', chapter: 'empire', date: '1909년 10월 26일', title: '하얼빈 의거', aliases: ['안중근 의거', '이토 히로부미 저격'],
  summary: '안중근이 하얼빈역에서 이토 히로부미를 사살했다.',
  context: '안중근은 체포된 뒤 뤼순으로 이송됐고, 이듬해 뤼순감옥에서 사형이 집행됐다.',
  people: [['ahn-junggeun', '하얼빈역 의거를 실행한 독립운동가']],
  sources: [['독립기념관 독립운동인명사전 · 안중근', 'https://search.i815.or.kr/dictionary/detail/print.do?id=676'], historyEventSource('안중근 의거', 'front/nh/print.do?levelId=nh_043_0030_0050_0020_0020')]
 },
 {
  id: 'japanese-annexation', chapter: 'empire', date: '1910년 8월', title: '한일병합조약과 국권 피탈', aliases: ['경술국치', '한일합병', '일제 강제 병합'],
  summary: '일제가 한일병합조약을 강요하고 8월 29일 이를 공포했다.',
  context: '대한제국은 통치권을 빼앗겼다. 일제는 조선총독부를 설치해 식민 통치를 시작했다.',
  people: [['joseon-ruler-27', '국권을 빼앗긴 당시 대한제국 황제']],
  sources: [aksEventSource('한일병합조약', 'E0061926'), historyEventSource('국권 피탈', 'mobile/kc/view.do?code=kc_age_40&levelId=kc_i403100')]
 },
 {
  id: 'korean-grammar', chapter: 'colonial', date: '1910년', title: '주시경의 《국어문법》 간행', aliases: ['국어문법', '주시경 문법'],
  summary: '주시경이 말소리와 문장의 짜임을 설명한 《국어문법》을 펴냈다.',
  context: '순우리말을 활용해 문법 용어를 만들고 한국어의 구조를 체계적으로 설명하려 했다.',
  people: [['person-E0053328', '《국어문법》을 저술한 국어학자']],
  sources: [aksEventSource('국어문법', 'E0006387')]
 },
 {
  id: 'shinheung-academy', chapter: 'colonial', date: '1911년 설립', title: '신흥무관학교 설립', aliases: ['신흥강습소', '신흥무관학교', '신흥중학교'],
  summary: '이회영 등 독립운동가들이 서간도에 신흥강습소를 세워 독립군을 양성했다.',
  context: '교육기관은 이후 신흥무관학교로 발전했고, 졸업생들은 여러 독립군 부대에서 활약했다.',
  people: [['E0046635', '학교 설립에 참여한 독립운동가']],
  sources: [aksEventSource('신흥무관학교', 'E0033613')]
 },
 {
  id: 'hundred-five', chapter: 'colonial', date: '1911–1915년', title: '105인 사건', aliases: ['백오인 사건', '신민회 탄압'],
  summary: '일제가 총독 암살을 모의했다는 혐의로 신민회 관계자와 기독교인 등을 대거 체포했다.',
  context: '1심에서 105명이 유죄 판결을 받았다. 항소심에서 99명이 무죄로 풀려났고, 양기탁 등 나머지 6명은 1915년 특별사면으로 석방됐다.',
  people: [['person-E0035440', '사건으로 체포되어 유죄 판결을 받은 신민회 지도자']],
  sources: [aksEventSource('105인 사건', 'E0022233'), aksEventSource('양기탁', 'E0035440')]
 },
 {
  id: 'korean-painful-history', chapter: 'colonial', date: '1915년', title: '박은식의 《한국통사》 간행', aliases: ['한국통사', '박은식 저술'],
  summary: '박은식이 조선 말의 정세와 일제의 국권 침탈 과정을 서술한 《한국통사》를 중국 상하이에서 펴냈다.',
  context: '근대 한국인의 관점에서 국권 피탈의 과정을 기록한 역사 저술이다.',
  people: [['expanded-person-450', '《한국통사》를 저술한 역사학자']],
  sources: [aksEventSource('한국통사', 'E0061453')]
 },
 {
  id: 'march-first', chapter: 'colonial', date: '1919년 3월 1일부터', title: '3·1운동', aliases: ['삼일운동', '3.1 운동', '아우내 만세운동'],
  summary: '독립선언을 계기로 각지에서 일제 식민 지배에 항의하는 독립 만세 시위가 이어졌다.',
  context: '운동은 다양한 계층과 지역으로 확산됐고, 같은 해 대한민국 임시정부 수립으로 이어졌다.',
  people: [['son-byeonghui', '민족대표 33인으로 참여'], ['hy', '민족대표 33인으로 참여'], ['yu', '충남 천안 아우내 만세운동에 참여']],
  sources: [aksEventSource('3·1운동', 'E0026772')]
 },
 {
  id: 'aunae', chapter: 'colonial', date: '1919년 4월 1일', title: '아우내 장터 만세운동', aliases: ['아우내 만세운동', '천안 병천 만세시위'],
  summary: '충남 천안 아우내 장터에서 주민들이 독립 만세 시위를 벌였다.',
  context: '유관순은 만세운동에 참여했으며, 일제의 시위 진압 뒤 체포돼 옥고를 치렀다.',
  people: [['yu', '아우내 장터 만세운동에 참여한 독립운동가']],
  sources: [aksEventSource('3·1운동', 'E0026772'), aksEventSource('유관순', 'E0041268')]
 },
 {
  id: 'provisional-government', chapter: 'colonial', date: '1919년 4월', title: '대한민국 임시정부 수립', aliases: ['상하이 임시정부', '임시정부 수립'],
  summary: '3·1운동 이후 상하이에서 대한민국 임시정부가 출범했다.',
  context: '같은 해 연해주와 국내에서 추진된 임시정부와의 통합을 거치며 임시정부 체제를 정비했다.',
  people: [['E0044051', '상하이 임시의정원 초대 의장'], ['E0044939', '통합 임시정부의 초대 대통령']],
  sources: [aksEventSource('대한민국 임시정부', 'E0015017')]
 },
 {
  id: 'kang-woogyu', chapter: 'colonial', date: '1919년 9월', title: '강우규의 남대문역 의거', aliases: ['강우규 의거', '사이토 총독'],
  summary: '강우규가 남대문역에서 새 조선총독 사이토 마코토를 겨냥해 폭탄을 던졌다.',
  context: '사이토는 살아남았다. 강우규는 체포돼 이듬해 서대문형무소에서 처형됐다.',
  people: [['E0001298', '남대문역 의거를 실행한 독립운동가']],
  sources: [aksEventSource('강우규', 'E0001298')]
 },
 {
  id: 'womens-patriotic-association', chapter: 'colonial', date: '1919년', title: '대한민국애국부인회 활동', aliases: ['애국부인회', '김마리아 여성 독립운동'],
  summary: '김마리아가 여성들의 독립운동 단체인 대한민국애국부인회의 회장을 맡아 활동을 확대했다.',
  context: '단체는 여러 지역에서 모금한 활동 자금을 대한민국 임시정부에 보내려 했다.',
  people: [['km', '대한민국애국부인회 회장을 맡은 독립운동가']],
  sources: [aksEventSource('김마리아', 'E0009065'), aksEventSource('대한민국애국부인회', 'E0015012')]
 },
 {
  id: 'uijeoldan', chapter: 'colonial', date: '1919년 11월', title: '의열단 결성', aliases: ['김원봉 의열단', '의열단 창립'],
  summary: '김원봉 등이 중국 지린에서 항일 독립운동 단체인 의열단을 조직했다.',
  context: '의열단은 식민 통치 기관과 일제 고위 관리를 겨냥한 의거를 벌였고, 이후 단원 일부는 군사 교육과 조직 활동을 확대했다.',
  people: [['won', '결성을 주도한 독립운동가']],
  sources: [aksEventSource('의열단', 'E0043334'), aksEventSource('김원봉', 'E0010036')]
 },
 {
  id: 'bongodong', chapter: 'colonial', date: '1920년 6월', title: '봉오동 전투', aliases: ['봉오동전투', '봉오동 대첩'],
  summary: '홍범도 등이 이끄는 독립군 연합부대가 만주 봉오동 일대에서 일본군을 격파했다.',
  context: '일본군이 국경을 넘어 독립군을 추격하자 독립군은 봉오동 일대의 지형을 이용해 맞섰다.',
  people: [['hong', '독립군 연합부대의 주요 지휘관']],
  sources: [aksEventSource('봉오동전투', 'E0023974')]
 },
 {
  id: 'cheongsanri', chapter: 'colonial', date: '1920년 10월', title: '청산리 전투', aliases: ['청산리전투', '청산리대첩'],
  summary: '김좌진의 북로군정서군과 홍범도 등이 이끈 독립군 부대들이 청산리 일대에서 일본군과 연이어 싸웠다.',
  context: '백운평과 어랑촌 등 여러 곳에서 벌어진 전투를 묶어 청산리 전투라 부른다.',
  people: [['jw', '북로군정서군 지휘관'], ['hong', '독립군 연합부대의 주요 지휘관']],
  sources: [aksEventSource('청산리대첩', 'E0056468')]
 },
 {
  id: 'na-exhibition', chapter: 'colonial', date: '1921년', title: '나혜석의 첫 개인전', aliases: ['나혜석 개인전', '나혜석 유화'],
  summary: '나혜석이 경성일보사 내청각에서 유화 개인전을 열었다.',
  context: '근대 조선에서 서양화가가 자신의 작품을 한자리에서 소개한 이른 사례로 꼽힌다.',
  people: [['nah', '유화 개인전을 개최한 화가']],
  sources: [aksEventSource('나혜석', 'E0011547'), ['문화포털 예술지식백과 · 나혜석', 'https://www.culture.go.kr/portal/cltKnw/artCont/view.do?knwldgSn=7611&menuNo=200022']]
 },
 {
  id: 'children-magazine', chapter: 'colonial', date: '1923년', title: '잡지 《어린이》 창간', aliases: ['방정환 어린이', '어린이 잡지', '어린이운동'],
  summary: '방정환 등이 어린이 독자를 위한 잡지 《어린이》를 창간했다.',
  context: '잡지에 동화와 동요 등을 실으며 어린이를 위한 문화와 교육 활동을 넓혔다.',
  people: [['bang-jeonghwan', '잡지 창간을 이끈 아동문학가']],
  sources: [aksEventSource('어린이', 'E0035936'), aksEventSource('방정환', 'E0021783')]
 },
 {
  id: 'azaleas', chapter: 'colonial', date: '1925년', title: '김소월 시집 《진달래꽃》 출간', aliases: ['진달래꽃', '김소월 시집'],
  summary: '김소월이 시집 《진달래꽃》을 펴냈다.',
  context: '표제작을 비롯한 시들은 한국어의 말붙임과 민요의 리듬을 살린 작품으로 읽혀 왔다.',
  people: [['E0009535', '시집 《진달래꽃》을 펴낸 시인']],
  sources: [aksEventSource('진달래꽃', 'E0054622')]
 },
 {
  id: 'na-seokju', chapter: 'colonial', date: '1926년 12월', title: '나석주의 동양척식주식회사 의거', aliases: ['나석주 의거', '동척 의거', '식산은행 의거'],
  summary: '나석주가 경성의 조선식산은행과 동양척식주식회사에서 의거를 벌였다.',
  context: '두 기관은 일제의 식민지 금융과 토지 정책을 뒷받침했다.',
  people: [['E0011382', '두 식민 통치 기관을 겨냥한 독립운동가']],
  sources: [aksEventSource('나석주', 'E0011382')]
 },
 {
  id: 'singanhoe', chapter: 'colonial', date: '1927년', title: '신간회 창립', aliases: ['신간회 결성', '민족협동전선'],
  summary: '민족주의 계열과 사회주의 계열의 운동가들이 협력해 신간회를 창립했다.',
  context: '신간회는 전국에 지회를 두고 식민 통치에 맞서는 공개 활동을 펼쳤다.',
  people: [['E0044607', '창립 때 회장으로 선출된 인물']],
  sources: [aksEventSource('신간회', 'E0032606')]
 },
 {
  id: 'lee-bongchang', chapter: 'colonial', date: '1932년 1월 8일', title: '이봉창의 도쿄 의거', aliases: ['이봉창 의거', '사쿠라다몬 의거'],
  summary: '한인애국단원 이봉창이 도쿄에서 일본 천황의 행렬을 향해 폭탄을 던졌다.',
  context: '천황은 다치지 않았고 이봉창은 체포돼 그해 처형됐다.',
  people: [['lee', '도쿄 의거를 실행한 독립운동가'], ['kim', '한인애국단을 조직해 의거를 지원한 독립운동가']],
  sources: [aksEventSource('이봉창', 'E0044475'), historyEventSource('이봉창 의거', 'mobile/kc/view.do?levelId=kc_n403400')]
 },
 {
  id: 'hongkou', chapter: 'colonial', date: '1932년 4월 29일', title: '윤봉길의 상하이 의거', aliases: ['훙커우 공원 의거', '홍커우 공원 의거', '윤봉길 의거'],
  summary: '윤봉길이 상하이 훙커우 공원에서 열린 일본군 행사에서 폭탄을 던졌다.',
  context: '김구가 이끌던 한인애국단이 의거를 준비했고, 사건 이후 중국 내에서 대한민국 임시정부의 활동에 대한 관심이 커졌다.',
  people: [['yun', '훙커우 공원 의거를 실행한 독립운동가'], ['kim', '한인애국단을 조직하고 의거를 준비한 독립운동가']],
  sources: [historyEventSource('윤봉길의 훙커우 공원 의거', 'mobile/kc/view.do?levelId=kc_n403300'), aksEventSource('김구', 'E0008753')]
 },
 {
  id: 'hangul-standard', chapter: 'colonial', date: '1933년', title: '한글 맞춤법 통일안 발표', aliases: ['한글맞춤법통일안', '한글 마춤법 통일안', '조선어학회'],
  summary: '조선어학회가 한글 표기의 공통 기준을 담은 맞춤법 통일안을 발표했다.',
  context: '통일안은 단어의 본래 형태를 드러내는 표기 원칙 등을 제시했다.',
  people: [['person-E0057759', '맞춤법 통일안 제정에 참여한 국어학자'], ['person-E0043805', '조선어학회의 어문 정비 사업을 이끈 국어학자']],
  sources: [aksEventSource('한글맞춤법통일안', 'E0061514')]
 },
 {
  id: 'berlin-marathon', chapter: 'colonial', date: '1936년 8월', title: '손기정의 올림픽 우승과 일장기 말소', aliases: ['1936 베를린 올림픽', '일장기 말소', '손기정 마라톤'],
  summary: '손기정이 베를린 올림픽 마라톤에서 우승했다. 당시에는 식민지 조선 출신 선수로 일본 대표단에 속해 출전했다.',
  context: '국내 신문들이 손기정 사진에서 일장기를 지워 게재하자, 일제는 관련 언론사를 제재했다.',
  people: [['sg', '베를린 올림픽 마라톤에서 우승한 선수']],
  sources: [aksEventSource('손기정', 'E0067205'), aksEventSource('일장기 말소사건', 'E0047311')]
 },
 {
  id: 'volunteer-corps', chapter: 'colonial', date: '1938년', title: '조선의용대 창설', aliases: ['조선의용대 결성', '김원봉 무장 항일'],
  summary: '김원봉 등이 중국 한커우에서 조선의용대를 조직했다.',
  context: '조선의용대는 중국군과 함께 움직이며 일본군을 상대로 선전과 정보 수집 등의 활동을 했다.',
  people: [['won', '조선의용대 대장을 맡은 독립운동가']],
  sources: [aksEventSource('조선의용대', 'E0052178'), historyEventSource('조선의용대 조직', 'front/hm/view.do?levelId=hm_126_0090')]
 },
 {
  id: 'liberation-army', chapter: 'colonial', date: '1940년 9월 17일', title: '한국광복군 창설', aliases: ['한국광복군', '광복군 창설'],
  summary: '대한민국 임시정부가 중국 충칭에서 한국광복군을 창설했다.',
  context: '총사령관 지청천을 중심으로 조직된 광복군은 연합국과 협력해 항일 군사 활동을 벌였다.',
  people: [['jc', '한국광복군 초대 총사령관'], ['kim', '임시정부에서 광복군 창설을 추진한 인물']],
  sources: [aksEventSource('한국광복군', 'E0005134'), aksEventSource('김구', 'E0008753')]
 },
 {
  id: 'language-society', chapter: 'colonial', date: '1942년', title: '조선어학회 사건', aliases: ['조선어학회 수난', '큰사전 편찬 중단'],
  summary: '일제가 국어사전 편찬 활동을 하던 조선어학회 관계자들을 독립운동 혐의로 체포했다.',
  context: '여러 학자가 옥고를 치렀고 사전 편찬은 중단됐다. 광복 뒤 원고를 되찾아 작업을 이어갔다.',
  people: [['person-E0057759', '체포돼 옥고를 치른 조선어학회 회원'], ['person-E0043805', '사건으로 유죄 판결을 받은 조선어학회 인사'], ['expanded-person-426', '사전 편찬에 참여했다가 옥고를 치른 국어학자'], ['expanded-person-447', '일제에 수감된 뒤 옥중에서 사망한 국어학자']],
  sources: [aksEventSource('조선어학회 사건', 'E0052129')]
 },
 {
  id: 'haerye-preserved', chapter: 'colonial', date: '1940년대 초', title: '훈민정음 해례본 수집과 보존', aliases: ['훈민정음 해례본 수집', '간송', '전형필'],
  summary: '전형필이 경북 안동에서 알려진 《훈민정음》 해례본을 입수해 보존했다.',
  context: '해례본은 한글의 창제 배경과 글자를 만든 원리를 보여 주는 자료다.',
  people: [['jeon-hyeongpil', '해례본을 구입해 보존한 수집가']],
  sources: [aksEventSource('훈민정음 해례본', 'E0065805'), ['국립한글박물관 · 훈민정음 해례본의 보존', 'https://www.hangeul.go.kr/webzine/201906/sub1_1.html']]
 },
 {
  id: 'liberation', chapter: 'modern', date: '1945년 8월 15일', title: '8·15 광복', aliases: ['광복절', '일제 해방', '8.15 해방'],
  summary: '일본이 항복을 발표하면서 한국은 일제 식민 지배에서 벗어났다.',
  context: '국내외 독립운동 세력은 새 국가 수립을 준비했다. 중국에서 활동하던 대한민국 임시정부 요인들은 그해 말 귀국했다.',
  people: [['kim', '광복 뒤 임시정부 요인들과 함께 귀국한 당시 임시정부 주석']],
  sources: [historyEventSource('광복 직후 정세와 건국 준비', 'mobile/kc/view.do?levelId=kc_o500100'), historyEventSource('김구와 임시정부 요인의 귀국', 'mobile/kc/view.do?levelId=kc_n400245')]
 },
 {
  id: 'jeju-four-three', chapter: 'modern', date: '1947–1954년', title: '제주 4·3 사건과 진상규명', aliases: ['제주4·3', '제주 사삼', '4·3 특별법', '4·3 정부 사과'],
  summary: '1947년 제주에서 경찰 발포가 일어난 뒤 1948년 4월 3일 무장봉기와 진압이 이어졌다. 이 과정에서 많은 주민이 희생됐다.',
  context: '2000년 특별법이 제정됐고, 진상조사보고서가 확정된 2003년 노무현 대통령이 국가의 책임을 인정하고 사과했다.',
  people: [['E0044939', '정부 수립 이후 진압이 이어지던 시기의 대통령'], ['dj', '진상규명 특별법이 제정될 당시 대통령'], ['nm', '국가의 책임을 인정하고 정부 차원에서 사과한 대통령']],
  sources: [aksEventSource('제주4·3사건', 'E0051439'), historyEventSource('제주 4·3 사건에 대한 정부의 공식 사과', 'mobile/hm/view.do?levelId=hm_145_0110')]
 },
 {
  id: 'yoon-posthumous-poems', chapter: 'modern', date: '1948년', title: '윤동주의 유고시집 출간', aliases: ['하늘과 바람과 별과 시', '윤동주 유고시집'],
  summary: '윤동주가 세상을 떠난 뒤 남긴 원고를 모아 《하늘과 바람과 별과 시》 초판을 펴냈다.',
  context: '〈서시〉와 〈별 헤는 밤〉 등을 담은 시집을 통해 윤동주의 작품이 독자들에게 널리 알려졌다.',
  people: [['yd', '시집에 실린 시를 남긴 시인']],
  works: ['yundong-doc'],
  sources: [aksEventSource('하늘과 바람과 별과 시', 'E0060561'), ['국립세계문자박물관 · 하늘과 바람과 별과 시', 'https://openarchives.mow.or.kr/collection/2104']]
 },
 {
  id: 'rok-government', chapter: 'modern', date: '1948년 8월 15일', title: '대한민국 정부 수립', aliases: ['정부 수립', '제헌국회', '제헌 헌법'],
  summary: '제헌국회가 헌법을 제정하고 이승만을 대통령으로 선출한 뒤 대한민국 정부 수립을 선포했다.',
  context: '제헌국회의원 선거는 같은 해 5월에 실시됐고, 제헌 헌법은 7월 17일 공포됐다.',
  people: [['E0044939', '제헌국회에서 초대 대통령으로 선출'], ['expanded-person-422', '제헌국회 부의장으로 선출']],
  sources: [historyEventSource('대한민국 정부 수립', 'mobile/kc/view.do?levelId=kc_i502100')]
 },
 {
  id: 'land-reform', chapter: 'modern', date: '1949–1950년', title: '농지개혁법 제정과 시행', aliases: ['농지개혁', '유상매수 유상분배'],
  summary: '대한민국 정부가 지주의 농지를 사들여 농사짓는 농민에게 나눠 주는 농지개혁을 추진했다.',
  context: '1949년 농지개혁법을 제정했으며, 이듬해 법을 개정하고 시행 절차를 마련했다.',
  people: [['E0044939', '농지개혁법 제정과 시행 당시 대통령']],
  sources: [historyEventSource('농지 개혁법', 'front/hm/view.do?levelId=hm_154_0050'), ['국가기록원 · 농지 개혁', 'https://theme.archives.go.kr/next/govpo/detail.do?policySeq=300']]
 },
 {
  id: 'kim-gu-assassination', chapter: 'modern', date: '1949년 6월 26일', title: '김구 피살 사건', aliases: ['김구 암살', '경교장 사건', '안두희'],
  summary: '백범 김구가 서울 경교장에서 육군 장교 안두희의 총격을 받고 사망했다.',
  context: '안두희는 군법회의에서 유죄 판결을 받았다. 사건의 배후에 관한 의문은 이후에도 제기됐다.',
  people: [['kim', '경교장에서 피살된 독립운동가']],
  works: ['kbs-history-kim-gu-258'],
  sources: [aksEventSource('김구 암살사건', 'E0075782')]
 },
 {
  id: 'korean-war', chapter: 'modern', date: '1950–1953년', title: '6·25전쟁과 정전협정', aliases: ['한국전쟁', '육이오', '6.25 전쟁', '휴전협정', '판문점 정전협정'],
  summary: '1950년 6월 25일 북한군의 남침으로 전쟁이 시작됐다. 유엔군과 중국군이 개입하면서 전쟁은 장기화했다.',
  context: '1953년 7월 27일 판문점에서 정전협정이 체결됐다. 전쟁은 대규모 인명 피해와 이산가족을 남겼다.',
  people: [['E0044939', '6·25전쟁 당시 대한민국 대통령']],
  sources: [aksEventSource('한국전쟁', 'E0042143'), ['국가기록원 · 6·25전쟁 연표', 'https://theme.archives.go.kr/next/625/process/timeline.do']]
 },
 {
  id: 'march-fifteen', chapter: 'modern', date: '1960년 3월 15일', title: '3·15 부정선거와 마산 시위', aliases: ['3.15 부정선거', '마산 3·15', '315의거'],
  summary: '1960년 정·부통령 선거에서 집권 세력이 조직적으로 부정선거를 벌였다.',
  context: '마산에서 이에 항의하는 시위가 벌어졌고, 이후 전국의 4·19혁명으로 이어졌다.',
  people: [['E0044939', '부정선거 당시 대통령이자 여당 대통령 후보']],
  sources: [aksEventSource('3·15부정선거', 'E0026771'), historyEventSource('3·15 부정선거', 'mobile/kc/view.do?code=kc_age_50&levelId=kc_i500600')]
 },
 {
  id: 'april-revolution', chapter: 'modern', date: '1960년 4월', title: '4·19혁명', aliases: ['4.19 혁명', '사일구 혁명', '3·15 부정선거'],
  summary: '3·15 부정선거에 항의해 학생과 시민이 시위에 나섰고, 이승만이 대통령직에서 물러났다.',
  context: '마산 시위에 참여한 김주열의 사망이 알려지면서 항의가 더욱 커졌다.',
  people: [['E0044939', '혁명 이후 대통령직에서 하야']],
  sources: [historyEventSource('4·19 혁명', 'mobile/kc/view.do?levelId=kc_i500700')]
 },
 {
  id: 'may-coup', chapter: 'modern', date: '1961년 5월 16일', title: '5·16 군사정변', aliases: ['5.16', '5·16 쿠데타'],
  summary: '박정희를 중심으로 한 군인들이 군사정변을 일으켜 장면 내각을 무너뜨렸다.',
  context: '정변 세력은 국가재건최고회의를 구성하고 군정을 실시했다.',
  people: [['park-chunghee', '군사정변을 주도한 군인']],
  sources: [historyEventSource('4·19 혁명과 5·16 군사 정변', 'front/ta/print.do?levelId=ta_m71_0110_0020_0010_0030')]
 },
 {
  id: 'first-economic-plan', chapter: 'modern', date: '1962–1966년', title: '제1차 경제개발 5개년 계획', aliases: ['경제개발5개년계획', '제1차 경제개발계획'],
  summary: '박정희가 이끈 군사정부가 첫 경제개발 5개년 계획을 추진했다.',
  context: '전력과 교통 등 기반 시설을 확충하고 공업 생산을 늘리기 위해 국가가 투자 방향을 정했다.',
  people: [['park-chunghee', '계획 출범 당시 국가재건최고회의 의장']],
  sources: [['국가기록원 · 제1차 경제개발 5개년계획', 'https://theme.archives.go.kr/next/govpo/detail.do?policySeq=305']]
 },
 {
  id: 'japan-treaty', chapter: 'modern', date: '1965년 6월 22일', title: '한일기본조약 체결', aliases: ['한일협정', '한일 국교 정상화', '한·일 기본 조약'],
  summary: '박정희 정부가 일본과 한일기본조약 및 부속 협정을 체결했다.',
  context: '조약으로 양국의 외교 관계가 정상화됐다. 협상과 체결 과정에서는 국내 반대 시위가 이어졌다.',
  people: [['park-chunghee', '조약을 체결한 시기의 대통령']],
  sources: [historyEventSource('한·일 기본 조약과 부속 협정', 'mobile/hm/view.do?levelId=hm_150_0040')]
 },
 {
  id: 'saemaul', chapter: 'modern', date: '1970년부터', title: '새마을운동', aliases: ['새마을 운동', '새마을가꾸기'],
  summary: '박정희 정부가 농촌 생활환경 개선 사업을 시작했고, 이후 새마을운동이 전국으로 확대됐다.',
  context: '초기에는 마을길 정비와 지붕 개량 등 생활 기반을 개선하는 사업이 추진됐다. 이후 소득 증대와 도시·직장 부문으로 범위가 넓어졌다.',
  people: [['park-chunghee', '1970년 지방장관회의에서 마을가꾸기 사업을 제안한 대통령']],
  sources: [historyEventSource('새마을운동', 'mobile/kc/view.do?code=kc_age_50&levelId=kc_i502400'), ['서울기록원 · 새마을운동', 'https://archives.seoul.go.kr/authority/TOPIC-00311']]
 },
 {
  id: 'gyeongbu-expressway', chapter: 'modern', date: '1970년 7월', title: '경부고속도로 전 구간 개통', aliases: ['경부고속도로 개통', '서울 부산 고속도로'],
  summary: '서울과 부산을 잇는 경부고속도로의 전 구간이 개통됐다.',
  context: '남북을 잇는 주요 육상 간선이 생기면서 물류와 지역 간 이동 방식이 바뀌었다.',
  people: [['park-chunghee', '고속도로 건설을 추진한 당시 대통령']],
  sources: [historyEventSource('경부고속도로 개통', 'mobile/kc/view.do?levelId=kc_i501500')]
 },
 {
  id: 'muryeong-tomb-discovery', chapter: 'modern', date: '1971년 7월', title: '백제 무령왕릉 발견', aliases: ['공주 무령왕릉 발굴', '무령왕릉 지석'],
  summary: '충남 공주의 송산리 고분군 배수 공사 중 무령왕릉이 발견됐다.',
  context: '무덤에서 나온 지석에 묻힌 사람과 장례 시기가 기록돼 있어, 피장자가 무령왕과 왕비임을 확인할 수 있었다.',
  people: [['muryeong', '출토된 지석에 기록된 백제 왕']],
  sources: [aksEventSource('무령왕릉 지석', 'E0054249'), ['국가기록원 · 무령왕릉', 'https://theme.archives.go.kr/next/koreaOfRecord/royalTomb.do']]
 },
 {
  id: 'yushin', chapter: 'modern', date: '1972년', title: '10월 유신과 유신헌법', aliases: ['유신체제', '유신헌법', '10월 유신'],
  summary: '박정희가 비상계엄을 선포하고 국회를 해산한 뒤 유신헌법을 도입했다.',
  context: '유신헌법은 대통령을 통일주체국민회의가 간접 선출하게 하고 긴급조치권 등 대통령의 권한을 크게 넓혔다.',
  people: [['park-chunghee', '유신체제를 도입한 대통령']],
  sources: [historyEventSource('유신 체제', 'mobile/kc/view.do?levelId=kc_i500200')]
 },
 {
  id: 'buma', chapter: 'modern', date: '1979년 10월', title: '부마민주항쟁', aliases: ['부마항쟁', '부산 마산 민주항쟁', '부마 민주화 운동'],
  summary: '부산과 마산에서 학생과 시민이 유신체제에 반대하는 시위를 벌였다.',
  context: '김영삼의 국회의원직 제명 등으로 정치적 긴장이 높아진 가운데 항쟁이 일어났고, 정부는 부산에 비상계엄을 선포했다.',
  people: [['ys', '항쟁 직전 국회에서 제명된 야당 총재'], ['park-chunghee', '항쟁에 비상계엄 등으로 대응한 정부의 대통령']],
  sources: [aksEventSource('부마민주항쟁', 'E0024157'), historyEventSource('부마민주항쟁과 유신체제 말기', 'mobile/kc/view.do?levelId=kc_i502300')]
 },
 {
  id: 'october-twenty-six', chapter: 'modern', date: '1979년 10월 26일', title: '10·26 사건', aliases: ['10.26 사태', '박정희 사망', '유신체제 붕괴'],
  summary: '중앙정보부장 김재규가 서울 궁정동에서 박정희 대통령을 총격해 사망하게 했다.',
  context: '최규하 국무총리가 대통령 권한을 대행하기 시작했다.',
  people: [['park-chunghee', '사건으로 사망한 대통령'], ['person-E0081280', '사건 직후 대통령 권한을 대행한 국무총리']],
  works: ['namsan'],
  sources: [aksEventSource('10·26사태', 'E0034013')]
 },
 {
  id: 'december-mutiny', chapter: 'modern', date: '1979년 12월 12일', title: '12·12 군사반란', aliases: ['12.12', '군사반란', '십이십이'],
  summary: '전두환과 노태우 등이 주축이 된 군인들이 육군참모총장 정승화를 강제로 연행하고 군 지휘권을 장악했다.',
  context: '군 내부의 반란을 통해 신군부가 권력을 확대하는 계기가 됐다.',
  people: [['chun-doohwan', '반란을 주도한 보안사령관'], ['roh-taewoo', '반란에 가담한 9사단장']],
  works: ['spring-seoul'],
  sources: [aksEventSource('12·12 군사반란', 'E0034018')]
 },
 {
  id: 'gwangju', chapter: 'modern', date: '1980년 5월 18–27일', title: '5·18민주화운동', aliases: ['5.18', '광주 민주화 운동', '광주민주항쟁', '오일팔'],
  summary: '광주에서 학생과 시민이 비상계엄 확대에 항의했고, 계엄군의 폭력 진압에 맞서 항쟁이 이어졌다.',
  context: '계엄군이 5월 27일 전남도청을 무력 진압했다. 이후 진상 규명과 희생자 명예 회복을 요구하는 움직임이 이어졌다.',
  people: [['chun-doohwan', '비상계엄 확대를 주도한 신군부의 핵심 인물']],
  sources: [aksEventSource('5·18광주민주화운동', 'E0038496'), aksEventSource('5·18특별법', 'E0078661')]
 },
 {
  id: 'june-democracy', chapter: 'modern', date: '1987년 6월', title: '6월 민주항쟁', aliases: ['6월항쟁', '6월 민주화 운동', '6·29 선언', '6.29 선언'],
  summary: '시민들이 대통령 직선제와 민주화를 요구하며 전국에서 시위에 나섰다.',
  context: '노태우가 6·29 선언으로 직선제 개헌 요구를 수용했고, 같은 해 헌법 개정과 대통령 직선제 선거가 이어졌다.',
  people: [['roh-taewoo', '여당 대통령 후보로서 6·29 선언을 발표'], ['chun-doohwan', '4·13 호헌 조치를 발표한 당시 대통령']],
  works: ['film1987'], sources: [aksEventSource('6월항쟁', 'E0068343'), aksEventSource('6·29민주화선언', 'E0042141')]
 },
 {
  id: 'june-declaration', chapter: 'modern', date: '1987년 6월 29일', title: '6·29 민주화 선언', aliases: ['629 선언', '6.29 민주화선언', '대통령 직선제 수용'],
  summary: '6월 민주항쟁이 이어지자 여당 대통령 후보 노태우가 대통령 직선제 개헌 등을 수용하겠다고 발표했다.',
  context: '그해 10월 헌법 개정안이 국민투표로 확정됐고, 12월에 대통령 직선제가 실시됐다.',
  people: [['roh-taewoo', '민주화 요구를 수용하는 선언을 발표한 여당 후보']],
  sources: [aksEventSource('6·29민주화선언', 'E0042141'), historyEventSource('6·29 민주화 선언', 'front/hm/view.do?levelId=hm_151_0050')]
 },
 {
  id: 'seoul-olympics', chapter: 'modern', date: '1988년 9–10월', title: '서울 올림픽 개최', aliases: ['1988 서울올림픽', '88올림픽', '서울올림픽'],
  summary: '서울에서 제24회 하계 올림픽이 열렸다.',
  context: '냉전으로 앞선 두 대회가 불참 사태를 겪었던 것과 달리 미국과 소련을 비롯한 여러 나라가 함께 참가했다.',
  people: [['roh-taewoo', '올림픽 개회 당시 대통령']],
  sources: [historyEventSource('서울 올림픽 개최', 'front/hm/view.do?levelId=hm_165_0020')]
 },
 {
  id: 'un-membership', chapter: 'modern', date: '1991년 9월 17일', title: '남북한 유엔 동시 가입', aliases: ['유엔 동시 가입', '남북 유엔 가입', 'UN 가입'],
  summary: '대한민국과 북한이 유엔 총회의 결의에 따라 같은 날 유엔에 가입했다.',
  context: '대한민국 정부는 가입을 계기로 국제기구에서의 외교 활동 범위를 넓혔다.',
  people: [['roh-taewoo', '유엔 동시 가입 당시 대한민국 대통령']],
  sources: [['외교부 · 국제연합과 한국의 가입', 'https://www.mofa.go.kr/www/wpge/m_3873/contents.do']]
 },
 {
  id: 'real-name-finance', chapter: 'modern', date: '1993년 8월 12일', title: '금융실명제 시행', aliases: ['금융실명제', '금융실명거래'],
  summary: '김영삼 정부가 긴급재정경제명령을 발표해 금융기관을 통한 거래에서 실제 명의를 쓰도록 했다.',
  context: '기존 차명 계좌에는 명의를 전환할 기간을 뒀다. 금융 거래의 투명성을 높이려는 정책이었다.',
  people: [['ys', '긴급재정경제명령을 발표한 대통령']],
  sources: [historyEventSource('금융실명제 실시', 'mobile/kc/view.do?levelId=kc_i501800')]
 },
 {
  id: 'financial-crisis', chapter: 'modern', date: '1997년 말', title: '외환위기와 IMF 구제금융', aliases: ['IMF 외환위기', '1997 외환위기', 'IMF 구제금융'],
  summary: '외화 부족이 심각해지자 김영삼 정부가 국제통화기금에 지원을 요청해 합의했다.',
  context: '뒤이어 출범한 김대중 정부가 구조조정 등 위기 대응 정책을 이어갔다.',
  people: [['ys', 'IMF에 지원을 요청한 정부의 대통령'], ['dj', '이듬해 취임해 위기 대응을 맡은 대통령']],
  sources: [historyEventSource('1997년 외환위기', 'mobile/kc/view.do?levelId=kc_i501300'), ['국가기록원 · 외환위기 극복 정책', 'https://theme.archives.go.kr/next/govpo/detail.do?policySeq=322']]
 },
 {
  id: 'june-fifteen', chapter: 'modern', date: '2000년 6월 15일', title: '6·15 남북 공동선언', aliases: ['6.15 남북 공동 선언', '2000년 남북정상회담', '제1차 남북 정상회담'],
  summary: '평양에서 열린 첫 남북 정상회담에서 김대중 대통령과 김정일 국방위원장이 공동선언을 채택했다.',
  context: '공동선언에는 이산가족 문제 해결과 남북 교류·협력에 관한 합의가 담겼다.',
  people: [['dj', '평양 정상회담에 참석해 공동선언을 채택한 대통령']],
  sources: [historyEventSource('6·15 남북 공동 선언', 'front/hm/view.do?levelId=hm_153_0090')]
 },
 {
  id: 'kim-nobel', chapter: 'modern', date: '2000년 12월 10일', title: '김대중 노벨평화상 수상', aliases: ['김대중 노벨상', '한국인 최초 노벨상'],
  summary: '김대중 대통령이 노르웨이 오슬로에서 노벨평화상을 받았다.',
  context: '한국과 동아시아의 민주주의와 인권, 한반도 평화와 화해를 위해 노력한 점이 수상 이유로 제시됐다.',
  people: [['dj', '2000년 노벨평화상 수상자']],
  sources: [['대통령기록관 · 김대중 대통령의 노벨평화상 수상', 'https://pa.go.kr/portal/online_contents/instant_record/instantRecordDetail.do?seq=30']]
 },
 {
  id: 'roh-impeachment', chapter: 'modern', date: '2004년 3–5월', title: '노무현 대통령 탄핵소추와 기각', aliases: ['노무현 탄핵', '2004헌나1'],
  summary: '국회가 노무현 대통령 탄핵소추안을 의결해 대통령 권한 행사가 정지됐다.',
  context: '헌법재판소가 5월 14일 심판 청구를 기각하면서 노무현 대통령이 직무에 복귀했다.',
  people: [['nm', '탄핵소추 뒤 헌법재판소의 기각 결정으로 복귀한 대통령']],
  sources: [['헌법재판소 · 대통령(노무현) 탄핵 2004헌나1', 'https://www.ccourt.go.kr/site/kor/ex/bbs/View.do?bcIdx=941397&cbIdx=1106']]
 },
 {
  id: 'october-four', chapter: 'modern', date: '2007년 10월 4일', title: '제2차 남북 정상회담과 10·4 선언', aliases: ['10.4 선언', '2007년 남북정상회담', '10·4 남북공동선언'],
  summary: '노무현 대통령과 김정일 국방위원장이 평양에서 정상회담을 열고 10·4 선언을 발표했다.',
  context: '선언에는 한반도 평화체제 논의, 경제 협력, 이산가족 상봉 확대 등이 담겼다.',
  people: [['nm', '평양 정상회담에 참석해 선언에 서명한 대한민국 대통령']],
  sources: [historyEventSource('남북 관계 발전과 평화 번영을 위한 선언', 'front/hm/view.do?levelId=hm_153_0100')]
 },
 {
  id: 'park-impeachment', chapter: 'modern', date: '2016년 12월–2017년 3월', title: '박근혜 대통령 탄핵과 파면', aliases: ['박근혜 탄핵', '박근혜 파면', '2016헌나1'],
  summary: '국회가 박근혜 대통령 탄핵소추안을 통과시켰다.',
  context: '헌법재판소가 2017년 3월 10일 탄핵을 인용해 박근혜 대통령을 파면했다.',
  people: [['president-park-geunhye', '헌법재판소의 파면 결정을 받은 대통령']],
  sources: [['국가법령정보센터 · 대통령(박근혜)탄핵 결정문', 'https://law.go.kr/LSW/detcInfoP.do?detcSeq=54153']]
 },
 {
  id: 'panmunjom-declaration', chapter: 'modern', date: '2018년 4월 27일', title: '남북 정상회담과 판문점 선언', aliases: ['판문점선언', '2018년 남북 정상회담'],
  summary: '문재인 대통령과 김정은 국무위원장이 판문점 평화의집에서 회담하고 판문점 선언을 발표했다.',
  context: '선언에는 남북관계 개선, 군사적 긴장 완화, 한반도의 평화체제 구축과 비핵화에 관한 합의가 담겼다.',
  people: [['moon-jaein-film', '판문점 회담에 참석하고 선언에 서명한 대통령']],
  sources: [aksEventSource('판문점선언', 'E0080601'), ['대한민국 정책브리핑 · 판문점 선언 전문', 'https://www.korea.kr/briefing/presidentView.do?newsId=148850200']]
 },
 {
  id: 'yoon-impeachment', chapter: 'modern', date: '2024년 12월–2025년 4월', title: '12·3 비상계엄과 윤석열 대통령 파면', aliases: ['윤석열 탄핵', '12월 3일 계엄', '12·3 비상계엄', '2024헌나8'],
  summary: '윤석열 대통령이 2024년 12월 3일 비상계엄을 선포했다. 국회가 해제를 요구한 뒤 계엄은 해제됐다.',
  context: '국회는 12월 14일 탄핵소추안을 의결했다. 헌법재판소는 2025년 4월 4일 탄핵을 인용해 윤석열 대통령을 파면했다.',
  people: [['president-yoon-sukyeol', '비상계엄을 선포하고 탄핵심판으로 파면된 대통령']],
  sources: [['헌법재판소 · 대통령(윤석열) 탄핵 2024헌나8', 'https://law.ccourt.go.kr/site/kor/ex/bbs/View.do?bcIdx=4253958&cbIdx=1106']]
 }
];

const foundationRecords = [
 {
  id: 'gojoseon-foundation-record', chapter: 'ancient', era: 'gojoseon',
  date: '건국 전승 · 실제 연대 미확정', title: '고조선 건국 전승 · 단군왕검과 웅녀',
  aliases: ['고조선 건국', '단군', '단군왕검', '웅녀', '단군신화', '환웅'],
  summary: '고려 후기의 《삼국유사》는 단군왕검이 조선을 세웠다는 이야기와 웅녀를 기록했다.',
  context: '단군왕검과 웅녀의 실존과 생몰년을 확정할 동시대 자료는 확인되지 않는다. 통상 인용되는 기원전 2333년은 후대에 정리된 전승상의 연대다. 고조선 자체의 존재와 전개는 다른 문헌과 고고학 자료를 바탕으로 연구한다.',
  people: [],
  sources: [aksEventSource('단군 신화', 'E0013553'), aksEventSource('웅녀', 'E0040541'), historyEventSource('단군 이야기와 고조선 건국', 'front/hm/view.do?levelId=hm_001_0010')]
 },
 {
  id: 'silla-foundation-record', chapter: 'ancient', era: 'silla',
  date: '기원전 57년 · 《삼국사기》의 기준 연대', title: '신라 건국 · 박혁거세 전승',
  aliases: ['신라 건국', '박혁거세', '혁거세', '알영', '사로국', '서라벌'],
  summary: '《삼국사기》는 박혁거세가 경주 일대의 여섯 집단이 추대한 첫 왕이라고 전한다.',
  context: '알에서 태어났다는 대목은 시조 이야기다. 기원전 57년은 《삼국사기》에 따른 연대이며, 경주 사로국이 여러 세력을 통합해 신라로 성장한 과정은 문헌과 고고학 자료를 함께 놓고 연구한다.',
  people: [],
  sources: [historyEventSource('신라의 건국과 시조 이야기', 'front/hm/view.do?levelId=hm_008_0040&tabId=03&treeId=010201'), historyEventSource('시조 혁거세', 'mobile/kc/view.do?code=kc_age_10&levelId=kc_n101900')]
 },
 {
  id: 'goguryeo-foundation-record', chapter: 'ancient', era: 'goguryeo',
  date: '기원전 37년 · 《삼국사기》의 기준 연대', title: '고구려 건국 · 추모왕 기록',
  aliases: ['고구려 건국', '주몽', '추모왕', '동명성왕', '졸본'],
  summary: '광개토왕릉비는 추모왕을 고구려의 시조로 기록한다. 후대 《삼국사기》에는 시조의 이름이 주몽으로 나온다.',
  context: '기원전 37년은 《삼국사기》의 건국 연대다. 광개토왕릉비는 고구려 시대의 금석문이지만 건국 당시 세운 비석은 아니다. 건국자의 신이한 출생 이야기와 고구려 국가 형성에 관한 기록은 구분된다.',
  people: [['jumong', '광개토왕릉비의 추모왕. 후대 《삼국사기》에서는 주몽']],
  sources: [['국사편찬위원회 한국사데이터베이스 · 《삼국사기》 동명성왕 즉위 기사', 'https://db.history.go.kr/ancient/level.do?levelId=sg_013r_0020_0010'], historyEventSource('고구려의 건국', 'mobile/kc/view.do?code=kc_age_10&levelId=kc_i100100'), historyEventSource('광개토왕릉비로 보는 고구려', 'front/hm/view.do?levelId=hm_009_0040&tabId=03&treeId=010201')]
 },
 {
  id: 'baekje-foundation-record', chapter: 'ancient', era: 'baekje',
  date: '기원전 18년 · 《삼국사기》의 기준 연대', title: '백제 건국 · 온조와 비류 기록',
  aliases: ['백제 건국', '온조', '온조왕', '비류', '위례성', '십제'],
  summary: '《삼국사기》는 온조가 위례성에 터를 잡았다는 기사와 비류를 시조로 본 다른 전승을 함께 싣고 있다.',
  context: '기원전 18년은 《삼국사기》에 따른 연대다. 여러 전승이 서로 달라 초기 왕실의 계보와 위례성의 정확한 위치는 단정하기 어렵다.',
  people: [['onjo', '《삼국사기》 백제본기에서 시조로 서술한 왕']],
  sources: [historyEventSource('백제의 건국 이야기', 'front/hm/view.do?levelId=hm_008_0030'), historyEventSource('백제의 기원과 부여 계승 의식', 'mobile/hm/view.do?levelId=hm_008_0070')]
 }
];
