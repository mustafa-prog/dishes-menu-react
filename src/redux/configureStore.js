import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// For react-redux-form
import { createForms } from 'react-redux-form';

// we are importing all reducers
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

// For fetching and posting we need thunk
import thunk from 'redux-thunk';

// again for react-redux-form
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
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
};
