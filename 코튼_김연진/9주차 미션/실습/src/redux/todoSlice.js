import { createSlice } from '@reduxjs/toolkit';

let nextId = 0;
const initialState = []; // {id, text, complete}

export const todoSlice = createSlice({
    name: 'todofunction', // 이 슬라이스 이름
    initialState, // 슬라이스 초기 상태
    reducers: {
        add: (state, action) => {
            // state: 현재 상태값, action: 상태를 변경하기 위한 정보를 담은 객체
            //action은 항상 두 가지 속성을 포함: type(ex: todofunction/add), payload(ex: 새로운 할일)
            nextId++;
            state.push({
                // Redux Toolkit에서는 Immer 라이브러리를 사용하므로 state.push같은 원래는 불변성을 꺠는 코드가 사용 가능
                id: nextId,
                text: action.payload,
                complete: false,
            });
        },
        remove: (state, action) => {
            //action은 항상 두 가지 속성을 포함: type(ex: todofunction/remove), payload(ex: 2 -> 삭제할 아이템의 ID)
            return state.filter((e) => e.id !== action.payload);
        },

        complete: (state, action) => {
            return state.map((e) =>
                e.id === action.payload ? { ...e, complete: !e.complete } : e
            );
        },
    },
});

export const { add, remove, complete } = todoSlice.actions;
// add, remove, complete라는 액션 생성 함수를 자동으로 생성
export default todoSlice.reducer;
// 이 슬라이스의 상태를 변경하는 리듀서 함수
