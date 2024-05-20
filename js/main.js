const apiKey = process.env.API_KEY

let today = new Date();
let yyyy = today.getFullYear();
let mm = String(today.getMonth() + 1).padStart(2, '0');
let dd = String(today.getDate()).padStart(2, '0');
today = `${yyyy}-${mm}-${dd}`
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${today}`
fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if( data.media_type === 'image' ){
          document.querySelector('img').src = data.url
        }
        else if( data.media_type === 'video' ){ 
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('h2').innerText = data.title
        
        document.querySelector('p').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


document.getElementById('date').addEventListener('click', getFetch)
document.getElementById('rndm').addEventListener('click', getRndm)

function getFetch(){
  
  const choice = document.querySelector('input').value
  const url = ``

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if( data.media_type === 'image' ){
          document.querySelector('img').src = data.url
          document.querySelector('iframe').style.display = 'none'
        }
        else if( data.media_type === 'video' ){ 
          document.querySelector('iframe').src = data.url
          document.querySelector('img').style.display = 'none'
        }
        document.querySelector('h2').innerText = data.title
        
        document.querySelector('p').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getRndm(){
  const url = ``

  fetch(url)
      .then(res => res.json())
      .then(data => {
        data = data[0]
        if( data.media_type === 'image' ){
          document.querySelector('img').src = data.url
          document.querySelector('iframe').style.display = 'none'
        }
        else if( data.media_type === 'video' ){ 
          document.querySelector('iframe').src = data.url
          document.querySelector('img').style.display = 'none'
        }
        document.querySelector('h2').innerText = data.title
        document.querySelector('p').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}