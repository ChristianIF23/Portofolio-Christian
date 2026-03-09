// Typing animation

const text = [
"Software Developer",
"Full Stack Developer",
"Backend Engineer",
"Tech Enthusiast"
]

let count = 0
let index = 0
let currentText = ""
let letter = ""

function type(){

if(count === text.length){
count = 0
}

currentText = text[count]

letter = currentText.slice(0, ++index)

document.getElementById("typing").textContent = letter

if(letter.length === currentText.length){

count++
index = 0

setTimeout(type,1500)

}else{

setTimeout(type,80)

}

}

type()


// Load GitHub repositories

fetch("https://api.github.com/users/ChristianIF23/repos")
.then(res => res.json())
.then(data => {

const container = document.getElementById("repo-container")

data.slice(0,6).forEach(repo => {

const card = document.createElement("div")

card.className = "repo-card"

card.innerHTML = `

<img src="https://opengraph.githubassets.com/1/ChristianIF23/${repo.name}">

<h3>${repo.name}</h3>

<p>${repo.description || "No description available"}</p>

<a href="${repo.html_url}" target="_blank">View Repository</a>

`

container.appendChild(card)

})

})