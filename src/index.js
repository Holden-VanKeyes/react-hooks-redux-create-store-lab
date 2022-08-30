// Note: createStore and candyReducer must be exported for the tests to run

function createStore(reducer) {
  let state
  // write your createStore code here
  //   The createStore function should return an object with two methods -
  //   getState, dispatch.
  // getState should return the current state.
  // dispatch should take in an action, update the state using the reducer,
  // and call the render function.
  function dispatch(action) {
    state = candyReducer(state, action)
    render()
  }
  function getState() {
    return state
  }
  return {
    dispatch,
    getState,
  }
}

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'candies/add':
      return [...state, action.candy]
    default:
      return state
  }
}

function render() {
  let container = document.getElementById('container')
  if (store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
}

// Use your createStore function and the functions provided here to create a store.
// Once the store is created, call an initial dispatch.
let store = createStore(candyReducer)
store.dispatch({ type: 'candies/add', candy: ['snickers', 'twix', 'peeps'] })
