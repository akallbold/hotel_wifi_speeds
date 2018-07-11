const defaultState = {
  currentArticle:{}
}

const hotelReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "TBD":
      return {...state,currentArticle:action.payload}

    default:
      return state
  }
}

export default hotelReducer
