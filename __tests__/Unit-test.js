import dexReducer from '../util/reducers';
import { getFruit } from '../util/actions';
import GET_FRUITS from '../util/actions';


describe('dexReducer', () => {
  it('returns the initial state', () => {
    expect(dexReducer(undefined, {})).toMatchSnapshot();
  });
  it('handles the getFruit action', () => {
    expect(dexReducer({}, getFruit())).toMatchSnapshot();
  });
});



