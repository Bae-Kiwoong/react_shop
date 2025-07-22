import { configureStore, createSlice} from "@reduxjs/toolkit";
import cart from "./cartSlice";


const test = createSlice({
  name: 'test',
  initialState: 'hello',
})

const item = createSlice({
  name: 'item',
  initialState: ['apple','banana']
})


const num = createSlice({
  name: 'num',
  initialState: 1,
  reducers:{
    changeNum(){//리듀쓰안에 변경함수 ,로 여러개 가능
      return 10
    },
    plusNum(state){//설정을 안하면 state가 기존 기본값을 불러옴
      return state + 1;
    },
    nPlusNum(state,action){// 기존값 , 받을 매개변수
      return state + action.payload;//payload : 외부에서 사용시 설정값을 받아줌
    }
  }
})
const obj = createSlice({
  name: 'obj',
  initialState: {name: 'hong', age: 20},
  reducers:{
    changeAge(state , action){
      state.age = action.payload;
    }//리덕스에서는 옵젝,배열에 상관없이 원하는 키를 바로 바꿀수 있음
  } //useState에서는 배열이나 옵젝이면 임시변수에 깨고 넣어서 set으로 처리
})

//변경함수도 외부(다른컴포넌트)에서 사용할수 있게 따로 내보내줘야함 액션으로 꺼내옴
export const {changeNum,plusNum, nPlusNum} = num.actions
export const { changeAge } = obj.actions
export const { addCount, addItem, removeItem } = cart.actions


export default configureStore({
reducer: {
    test: test.reducer,
    item: item.reducer,
    cart: cart.reducer,
    num: num.reducer,
    obj: obj.reducer,
}

})
