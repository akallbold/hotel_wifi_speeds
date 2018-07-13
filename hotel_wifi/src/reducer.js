const defaultState = {
  latency: "",
  download_speed: "",
  upload_speed: ""
}

const hotelReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_FORM":
      return {...state,[action.payload.name]:action.payload.value}
    case "CLEAR_FORM":
      return {...state,latency: "", download_speed: "", upload_speed: ""}
    default:
      return state
  }
}

export default hotelReducer
