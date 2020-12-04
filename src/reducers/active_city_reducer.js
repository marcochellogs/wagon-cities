import cities from '../data/cities.js'

export default function (state, action) {
  if (state === undefined) {
    return cities[0];
  }

  switch(action.type) {
    case 'SELECT_CITY':
      return action.payload;
    default:
      return state;
  }
}
