const CATEGORY = [
  {
    id: 1,
    text: '현재 상영 중인',
    img_path:
      'https://cdn.pixabay.com/photo/2024/02/12/17/49/theater-8569119_1280.jpg',
    url_path: '/movies/category/now_playing',
  },
  {
    id: 2,
    text: '인기 있는',
    img_path:
      'https://cdn.pixabay.com/photo/2016/06/22/11/10/box-1472804_1280.png',
    url_path: '/movies/category/popular',
  },
  {
    id: 3,
    text: '높은 평가를 받은',
    img_path:
      'https://cdn.pixabay.com/photo/2015/05/06/03/56/blue-754864_1280.png',
    url_path: '/movies/category/top_rated',
  },
  {
    id: 4,
    text: '개봉 예정 중인',
    img_path:
      'https://cdn.pixabay.com/photo/2015/08/13/23/47/background-image-887729_1280.jpg',
    url_path: '/movies/category/upcoming',
  },
];

const LOGIN_FORM = [
  {
    id: 'email',
    title: '아이디',
    type: 'email',
    placeholder: '이메일을 입력해주세요!',
    name: 'email',
  },
  {
    id: 'password',
    title: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력해주세요!',
    name: 'password',
  },
];

const SIGNUP_FORM = [
  {
    id: 'email',
    title: '아이디',
    type: 'email',
    placeholder: '이메일을 입력해주세요!',
    name: 'email',
  },
  {
    id: 'password',
    title: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력해주세요!',
    name: 'password',
  },
  {
    id: 'passwordCheck',
    title: '비밀번호 확인',
    type: 'password',
    placeholder: '비밀번호를 다시 입력해주세요!',
    name: 'passwordCheck',
  },
];

const USERSEX = [
  { id: 'male', value: '남자', label: '남자' },
  { id: 'female', value: '여자', label: '여자' },
  { id: 'none', value: '선택 안함', label: '선택 안함' },
];

export { CATEGORY, LOGIN_FORM, SIGNUP_FORM, USERSEX };
