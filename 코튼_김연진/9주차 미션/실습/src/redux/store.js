import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';

export default configureStore({
    reducer: {
        todo: todoSlice,
    },
});

// store: 전역 상태가 저장되는 장소
// reducer: 이전 상태와 동작을 받아 새 상태를 리턴하는 순수함수 (Action과 State를 받아 새 상태를 return)
// 순수함수??: 동일한 인자가 들어오면 항상 같은 값이 나와야 하고 return 값으로만 소통하고 외부의 데이터 구조를 변형하는 호출을 허용하지 않는 함수
