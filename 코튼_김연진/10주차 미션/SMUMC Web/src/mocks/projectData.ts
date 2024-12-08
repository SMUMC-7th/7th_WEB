// mockData.js

interface Project {
    name: string;
    description: string;
    theme: string[];
    img: string | null;
    member: string[];
    id: number;
    year: number;
    github: string | null;
    release: string | null;
}
const PROJECTS = [
    {
        id: 1,
        name: '가치더치(TogeDutch)',
        description: '부담스러운 배달 최소 금액 + 배달 팁 공유 서비스',
        theme: ['ANDROID', 'SPRING'],
        github: 'https://github.com/UMC-TogeDutch-Project',
        year: 3,
        member: ['하비/이승주'],
        stack: ['Kotlin', 'Spring'],
        img: '/3year/가치더치/가치더치.png',
        release: 'https://www.makeus.in/8dc44d59-645d-4203-bdb4-9398bb0031df',
    },
    {
        id: 2,
        name: 'Waither',
        description: '개개인 맞춤형 날씨 앱 : 나만의 기상비서, Waither',
        theme: ['IOS', 'SPRING'],
        github: 'https://github.com/Waither-Project/Waither-FE',
        year: 3,
        member: [
            '니니/김유빈',
            '다우니/최다경',
            '동키/김동현',
            '세헌/호세헌',
            '포트/조현준',
            '해누/김현우',
        ],
        stack: ['Swift', 'Spring'],
        img: '/3year/Waither/Waither.jpeg',
        release: 'https://www.makeus.in/e046ab3f-95f2-4210-913b-fae4a4251e53',
    },
    {
        id: 3,
        name: '그로밋',
        description: '깃허브 커밋으로 키우는 나만의 다마고치',
        theme: ['IOS', 'SPRING'],
        github: 'https://github.com/TeamGromit',
        year: 3,
        member: ['솔솔/이한솔'],
        stack: ['Swift', 'Spring'],
        img: '/3year/다마고치/다마고치.png',
        release: 'https://www.makeus.in/cfe1c32d-89df-43b1-a136-843c3943dbb0',
    },
    {
        id: 4,
        name: 'Linky-B',
        description: '마음 맞는 선후배 매칭 서비스',
        theme: ['ANDROID', 'SPRING'],
        github: '',
        year: 3,
        member: ['퍼플/김동욱', '마크/이기탁', '케빈/김근식'],
        stack: ['Kotlin', 'Spring'],
        img: '/3year/링키비/링키비.jpg',
        release: '',
    },
    {
        id: 5,
        name: 'CO+DEV',
        description: '개발자와 디자이너가 모이든 공간, CO+DEV',
        theme: ['ANDROID', 'SPRING'],
        github: 'https://github.com/CoDEVumc',
        year: 3,
        member: ['앨리/양서영', '환/이환수', '원스/김유정'],
        stack: ['Kotlin', 'Spring'],
        img: '/3year/CODEV/CODEV.jpg',
        release: '',
    },
    {
        id: 6,
        name: '담소',
        description: '흡연구역, 더이상 힘들게 찾지 말고 쉽고 간편하게 찾자!',
        theme: ['IOS', 'SPRING'],
        github: '',
        year: 3,
        member: ['무너/문정호', '레이/윤채영', '민팍/박민희'],
        stack: ['Swift', 'Spring'],
        img: '/3year/담소/담소.jpg',
        release: '',
    },
    {
        id: 7,
        name: '동네친구',
        description: '함께 살아가는 자취생활의 힘',
        theme: ['ANDROID', 'SPRING'],
        github: 'https://github.com/DongnaeFriend',
        year: 4,
        member: ['링키/윤수빈', '동키/김동현'],
        stack: ['KOTLIN', 'SPRING'],
        img: '/4year/동네친구/동네친구.png',
        release: 'https://www.makeus.in/924a9232-80d1-4354-b6e9-b0763b81eb10',
    },
    {
        id: 8,
        name: 'POSESTION',
        description: '뚝딱이들을 위한 사진 포즈 가이드',
        theme: ['ANDROID', 'NODE'],
        github: null,
        year: 4,
        member: ['원스/김유정', '코코/최진규'],
        stack: ['KOTLIN', 'NODE'],
        img: '/4year/Posestion/Posestion.png',
        release: 'https://www.makeus.in/e41624c5-9fd1-4b8d-be1a-ea1b1105298c',
    },
    {
        id: 9,
        name: 'Pinple',
        description:
            '핫플, 얼마나 많이 붐빌까? 가보기 전에 Pinple로 미리 확인하자!',
        theme: ['ANDROID', 'NODE'],
        github: null,
        year: 4,
        member: ['와제/정여진', '예닝/문예윤'],
        stack: ['KOTLIN', 'NODE'],
        img: '/4year/pinple/Pinple.png',
        release: 'https://www.makeus.in/a9caff6e-8ce7-4a1f-8dad-4f29e3e046fb',
    },
    {
        id: 10,
        name: 'ARMANAGE',
        description: '알바 시간과 급여, 서류 등 이제 한번에 관리, ARMANAGE',
        theme: ['ANDROID', 'SPRING'],
        github: null,
        year: 4,
        member: [
            '검정/권혁찬',
            '디채/김채연',
            '이네/설인혜',
            '윤/권오윤',
            '제이미/김준환',
        ],
        stack: ['KOTLIN', 'SPRING'],
        img: '/4year/ARMANAGE/ARMANAGE.png',
        release: null,
    },
    {
        id: 11,
        name: 'puppyfriend',
        description: '나의 사랑스러운 댕댕이에게 산책 친구를',
        theme: ['ANDROID', 'SPRING'],
        github: 'PuppyFriend',
        year: 4,
        member: ['엘레나/권유정', '우현/이현우'],
        stack: ['KOTLIN', 'SPRING'],
        img: null,
        release: null,
    },
    {
        id: 12,
        name: '퀸텟:Quintet',
        description: '행복을 위한 5가지 요소 관리앱',
        theme: ['IOS', 'NODE'],
        github: null,
        year: 4,
        member: ['주니/김영준', '폴/김필규', '딩동/이동현'],
        stack: ['SWIFT', 'NODE'],
        img: '/4year/퀸텟/퀸텟.png',
        release: 'https://www.makeus.in/4d141c41-5f49-4dc6-8b49-b0c7144ca79a',
    },
    {
        id: 13,
        name: '바른이',
        description: '모든 치아교정 정보를 한 눈에',
        theme: ['IOS', 'SPRING'],
        github: null,
        year: 4,
        member: ['니니/김유빈', '피딕/황인성', '세헌/호세헌', '해누/김현우'],
        stack: ['SWIFT', 'SPRING'],
        img: '/4year/바른이/바른이.png',
        release: 'https://www.makeus.in/4d141c41-5f49-4dc6-8b49-b0c7144ca79a',
    },
    {
        id: 14,
        name: '뮤넥팅(Mu:necting)',
        description: '음악으로 연결하다',
        theme: ['IOS', 'SPRING'],
        github: null,
        year: 4,
        member: ['깐/김가은', '지토/이현호', '스히/백서희', '한뉴/한유성'],
        stack: ['SWIFT', 'SPRING'],
        img: '/4year/뮤넥팅/뮤넥팅.png',
        release: 'https://www.makeus.in/62b0399d-8986-4097-ab84-0e79f5472d68',
    },
    {
        id: 15,
        name: '홈푸파(홈푸드파이터)',
        description: '가진 것만으로 요리하기',
        theme: ['WEB', 'NODE'],
        github: 'https://github.com/HomeFoodFighter',
        year: 4,
        member: [
            '매튜/김용민',
            '아마다/조재석',
            '우비/박원우',
            '민팍/박민희',
            '쫑/김종한',
            '하나빈/이원빈',
            '뻔뻔/김건',
        ],
        stack: ['REACT', 'NODE'],
        img: '/4year/홈푸파/홈푸파.png',
        release: 'https://www.makeus.in/839dd620-1b83-40f5-aa7c-8cc6e4c09e66',
    },
    {
        id: 16,
        name: 'Festie',
        description: '나와 취향이 맞는 친구도 사귀고, 페스티벌도 보러가고!',
        theme: ['WEB', 'SPRING'],
        github: null,
        year: 4,
        member: ['덕구/이다슬', '포디/정서현', '케빈/김근식'],
        stack: ['REACT', 'SPRING'],
        img: '/4year/festie/festie.png',
        release: 'https://www.makeus.in/b840fac8-6171-430a-9328-f3735352c976',
    },
    {
        id: 17,
        name: 'Healody',
        description: '힐로디로 추적하는 나와 우리 가족의 건강',
        theme: ['WEB', 'SPRING'],
        github: null,
        year: 4,
        member: [
            '디아/전지민',
            '데이빗/김태영',
            '제이/김영재',
            '지구/안지수',
            '린니/이혜린',
            '제이스/임재영',
            '사하/윤근수',
        ],
        stack: ['REACT', 'SPRING'],
        img: '/4year/healody/healody.png',
        release: 'https://www.makeus.in/3b82ef8f-8398-465f-9dc6-31f383742005',
    },
    {
        id: 18,
        name: 'TODIS',
        description: '날씨앱 하나로 옷 코디까지 쉽고 빠르게',
        theme: ['WEB', 'SPRING'],
        github: null,
        year: 4,
        member: ['블루/최민주', '하비/이승주'],
        stack: ['REACT', 'SPRING'],
        img: null,
        release: 'https://www.makeus.in/7dc138b3-7738-42a9-aa25-a36f85e4b847',
    },
    {
        id: 19,
        name: '여행의 이유',
        description:
            '나를 알고 너를 알고 여행지를 알면, 막막한 여행도 지피지기 백전백승',
        theme: ['WEB', 'NODE'],
        github: 'https://github.com/Here-You',
        year: 5,
        member: ['매튜/김용민', '다라/차다인', '예닝/문예윤'],
        stack: ['REACT', 'NODE'],
        img: '/5year/여행의이유/여행의이유.png',
        release: 'https://www.here-you.com/',
    },
    {
        id: 20,
        name: '고민친구',
        description: '세상의 모든 고민이 거쳐가는 공간, 고민친구',
        theme: ['WEB', 'SPRING'],
        github: null,
        year: 5,
        member: ['데이빗/김태영', '데브/이지민', '구리/박상우'],
        stack: ['REACT', 'SPRING'],
        img: '/5year/고민친구/고민친구.png',
        release: '',
    },
    {
        id: 21,
        name: 'AboutMe',
        description: '다양한 나, 다양한 관계의 시작',
        theme: ['ANDROID', 'SPRING'],
        github: null,
        year: 5,
        member: [
            '파스텔/정서연',
            '다에몬/정승원',
            '하나/최가나',
            '렉스/변성호',
        ],
        stack: ['KOTLIN', 'SPRING'],
        img: '/5year/AboutMe/AboutMe.png',
        release: '',
    },
    {
        id: 22,
        name: 'Draw Desktop',
        description:
            '개성 있게 간편하면서 직관적으로 바탕 화면을 꾸밀 수 있는 요소를 제공',
        theme: ['WEB', 'NODE'],
        github: null,
        year: 5,
        member: ['루시퍼/박세현', '냥젤리/김훈', '뻔뻔/김건'],
        stack: ['REACT', 'NODE'],
        img: '/5year/DrawDesktop/DrawDesktop.png',
        release: '',
    },
    {
        id: 23,
        name: 'Rhythm Palette',
        description: '#음악공유 #이미지생성 #SNS',
        theme: ['WEB', 'SPRING'],
        github: null,
        year: 5,
        member: ['엘레나/권유정', '우현/이현우', '사하/윤근수'],
        stack: ['REACT', 'SPRING'],
        img: '/5year/RhythmPalette/RhythmPalette.png',
        release: '',
    },
    {
        id: 24,
        name: 'Writeroom',
        description: '자유로운 창작의 공간',
        theme: ['WEB', 'SPRING'],
        github: null,
        year: 5,
        member: ['레이튼/박지환', '주디/이연주'],
        stack: ['REACT', 'SPRING'],
        img: '/5year/Writeroom/Writeroom.png',
        release: '',
    },
    {
        id: 25,
        name: '다온',
        description: '암환자들을 위한 하루 기록 서비스',
        theme: ['ANDROID', 'NODE'],
        github: null,
        year: 5,
        member: ['검정/권혁찬', '하늘/강호준'],
        stack: ['KOTLIN', 'NODE'],
        img: '/5year/다온/다온.png',
        release: '',
    },
    {
        id: 26,
        name: '더 굿즈',
        description: '개인 판매자 대상 온라인 주문서 플랫폼',
        theme: ['WEB', 'SPRING'],
        github: null,
        year: 5,
        member: ['도톨이/하지수', '시로/박선균', '주니/김형준'],
        stack: ['REACT', 'SPRING'],
        img: '/5year/더굿즈/더굿즈.png',
        release: '',
    },
    {
        id: 27,
        name: '아브아브',
        description: '레크레이션 종합 플랫폼 서비스',
        theme: ['WEB', 'SPRING'],
        github: null,
        year: 5,
        member: ['제이미/김준환'],
        stack: ['REACT', 'SPRING'],
        img: '/5year/아브아브/아브아브.png',
        release: '',
    },
    {
        id: 28,
        name: '메메',
        description: '나만의 메이크업 메이트',
        theme: ['IOS', 'SPRING'],
        github: 'https://github.com/MEME-UMC',
        year: 5,
        member: ['딩동/이동현', '제이스/임재영', '요비/김승엽'],
        stack: ['SWIFT', 'SPRING'],
        img: '/5year/메메/메메.png',
        release: '',
    },
    {
        id: 29,
        name: '마플',
        description: '사용자 저장 장소 기반 기록 + 일정 관리 서비스 : 마플',
        theme: ['IOS', 'NODE'],
        github: null,
        year: 5,
        member: ['도요/김영준'],
        stack: ['SWIFT', 'NODE'],
        img: '/5year/마플/마플.png',
        release: '',
    },
    {
        id: 30,
        name: '스포너스',
        description: '기업과 대학생이 만나는 자리',
        theme: ['IOS', 'SPRING'],
        github: 'https://github.com/spon-us',
        year: 5,
        member: ['가니/박가은', '니니/김유빈', '피딕/황인성', '세헌/호세헌'],
        stack: ['SWIFT', 'SPRING'],
        img: '/5year/스포너스/sponus.png',
        release: '',
    },
    {
        id: 31,
        name: '이사.ZIP',
        description: '이사를 위한 정보',
        theme: ['ANDROID', 'SPRING'],
        github: null,
        year: 5,
        member: ['러츠/강다희', '마린/강바다'],
        stack: ['KOTLIN', 'SPRING'],
        img: '/5year/이사/이사.png',
        release: '',
    },
];

const PROJECTS_YEAR = ['All', 5, 4, 3];

export { PROJECTS, PROJECTS_YEAR };
export type { Project };
