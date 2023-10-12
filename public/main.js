const allText = document.querySelector(".all_qoutes")
const singleText = document.querySelector(".single_qoutes")
const randomText = document.querySelector(".random_q")

singleText.addEventListener("click", (e) => {
	navigator.clipboard.writeText(singleText.innerText).then(
		() => {
			console.log("Done!")
			singleText.style.backgroundColor = "#ac92a6ff"
		},
		() => {
			console.error("Failed")
		}
	)
})
allText.addEventListener("click", (e) => {
	navigator.clipboard.writeText(allText.innerText).then(
		() => {
			console.log("Done!")
			allText.style.backgroundColor = "#ac92a6ff"
		},
		() => {
			console.error("Failed")
		}
	)
})

randomText.addEventListener("click", (e) => {
	navigator.clipboard.writeText(randomText.innerText).then(
		() => {
			console.log("Done!")
			randomText.style.backgroundColor = "#ac92a6ff"
		},
		() => {
			console.error("Failed")
		}
	)
})

// API fetch to get random displayed on screen.
const display = document.querySelector(".random_display")
async function getQoute() {
	const res = await fetch(`https://throneofglass.cyclic.app/random/`)
	const data = await res.json()
	display.innerText = data.quote
}

getQoute()
