// 스토어 역할 파일입니다
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from "./modules/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const create = () => {

    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
        );

        sagaMiddleware.run(rootSaga)
return store;
}

export default create;