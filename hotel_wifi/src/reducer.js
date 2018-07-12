const defaultState = {
  latency: "",
  download_speed: "",
  upload_speed: ""
}

const hotelReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_FORM":
    debugger
      return {...state,[action.payload.name]:action.payload.value}
    default:
      return state
  }
}

export default hotelReducer
