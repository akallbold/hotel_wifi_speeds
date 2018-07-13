

export let changeFormValues = (event) => {
  return {
    type:"CHANGE_FORM",
    payload:event.target
  }
}

export let submitForm = (upload, download, latency) => {
  fetchSubmitForm(upload, download, latency)
  return {
    type:"CLEAR_FORM"  }
}

export function fetchSubmitForm(upload, download, latency) {
  debugger
  fetch(`http://localhost:3000/hotel`, {
    method:"POST",
    headers:{ "Content-Type": "application/json" },
    body: JSON.stringify({
      name:"Hotel 1",
      downloadSpeed: download,
      uploadSpeed: upload,
      latency: latency
    })
  }).then(response => response.json())
}
