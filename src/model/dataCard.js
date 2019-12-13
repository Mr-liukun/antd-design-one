import request from '../util/request';

export default {
  namespace : "one",
  state : {
    list : [],
   // inputValue : ''
  },

  effects : {
    *queryItems( { _ }, {call, put}) {
      const url = 'http://localhost:9999/';
      const zc = yield call(request, url);
      //console.log(zc);
      yield put({type: 'addNewItem', zc});
    }
  },

  reducers: {
    addNewItem(state, {type, zc}) {
      const newList = zc;
      return {
        list: newList,
      }
    }
  },
}