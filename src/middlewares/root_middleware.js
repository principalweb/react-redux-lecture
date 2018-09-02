import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();

const middleware = [
    thunkMiddleware,
    process.env.NODE_ENV !== 'production' && loggerMiddleware,
].filter(Boolean);

const RootMiddleware = applyMiddleware(...middleware);

export default RootMiddleware;