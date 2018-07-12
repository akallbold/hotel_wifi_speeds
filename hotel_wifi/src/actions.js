

export let changeFormValues = (event) => {
  // console.log("this", this)
  // debugger
  return {
    type:"CHANGE_FORM",
    payload:event.target
  }
}
