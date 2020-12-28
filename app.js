
const url = "http://fasttrack.herokuapp.com/" 

const section = document.querySelector("div#output")
const spaces = []

const apiHeaders = {
    headers: {
        "Accept": "application/json"
    }
}


const loadFile = function(next = '') {
    fetch(`${url}${next}`, apiHeaders)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        section.innerHTML = data.next
        spaces.push(data.next)
        console.log(data.next.unauthorized)
        if (data.next) {
          loadFile(data.next)
        }
      })
      .catch(err => console.error(err))
  }
  loadFile()



