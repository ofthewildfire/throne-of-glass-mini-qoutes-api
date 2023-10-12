const allText = document.querySelector(".all_qoutes")
const singleText = document.querySelector(".single_qoutes")
const randomText = document.querySelector(".random_q")

singleText.addEventListener("click", (e) => {
	navigator.clipboard.writeText(singleText.innerText).then(
		() => {
			console.log("Done!")
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
		},
		() => {
			console.error("Failed")
		}
	)
})
