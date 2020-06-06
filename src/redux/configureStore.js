import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { initialFeedback } from './forms';

const rootReducer = combineReducers({
  dishes: Dishes,
  comments: Comments,
  promotions: Promotions,
  leaders: Leaders,
  ...createForms({
    feedback: initialFeedback,
  }),
});

export const ConfigureStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
};
