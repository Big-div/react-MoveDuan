import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'
let middleware = applyMiddleware(thunk)

if (process.env.NODE_ENV === "development") {
  middleware = composeWithDevTools(middleware);
}

// 创建store对象
const store = createStore(reducers, middleware);

export default store;
