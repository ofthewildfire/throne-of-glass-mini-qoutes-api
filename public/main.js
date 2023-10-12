const allText = document.querySelector(".all_qoutes")
const singleText = document.querySelector(".single_qoutes")

singleText.addEventListener("click", (e) => {
	navigator.clipboard.writeText(singleText.innerText).then(
		() => {
			console.log("Content copied to clipboard")
			/* Resolved - text copied to clipboard successfully */
		},
		() => {
			console.error("Failed to copy")
			/* Rejected - text failed to copy to the clipboard */
		}
	)
})
allText.addEventListener("click", (e) => console.log(e.target))
