// export * from "./login/LoginPage";
// export * from "./main/MainPage";
// export * from "./signup/SignupPage";

// index.js 로 모아서 export 하면 한줄로 import 가능 {page1, page2, ...} from "여기"
export { default as LoginPage } from "./login/LoginPage";
export { default as MainPage } from "./main/MainPage";
export { default as SignupPage } from "./signup/SignupPage";
export { default as SearchPage } from "./search/SearchPage";
export { default as CategoryPage } from "./category/CategoryPage";
export { default as PopularPage } from "./movie_popular/PopularPage";
export { default as NowPlayingPage } from "./movie_nowplaying/NowPlayingPage";
export { default as TopRatedPage } from "./movie_toprated/TopRatedPage";
export { default as UpComingPage } from "./movie_upcoming/UpcomingPage";
export { default as MovieDetailPage } from "./movie_detail/MovieDetailPage";
