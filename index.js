const express = require("express")
const app = express()
const cors = require("cors")

// Middleware
app.use(cors())
app.use(express.static("public"))

const bookQuotes = {
	1: {
		quote:
			"Libraries were full of ideas ― perhaps the most dangerous and powerful of all weapons.",
		book: "Throne of Glass",
	},
	2: {
		quote:
			"No. I can survive well enough on my own— if given the proper reading material.",
		book: "Throne of Glass",
	},
	3: {
		quote: "…her dearest friends are characters in books.",
		book: "Heir of Fire",
	},
	4: {
		quote:
			"Life isn’t easy, no matter where you are. You’ll make choices you think are right, and then suffer for them.",
		book: "The Assasins Blade",
	},
	5: {
		quote:
			"Sometimes, the wicked will tell us things just to confuse us–to haunt our thoughts long after we’ve faced them.",
		book: "Throne of Glass",
	},
	6: {
		quote: "You’re afraid. Of yourself more than anyone else in the world.",
		book: "Kingdom of Ash",
	},
	7: {
		quote:
			"It would not take a monster to destroy a monster ― but light, light to drive out darkness.",
		book: "Heir of Fire",
	},
	8: {
		quote: "The world, will be saved and remade by dreamers",
		book: "Empire of Storms",
	},
	9: {
		quote:
			"But just remember that this fear of yours? It means you have something worth fighting for – something you care so greatly for that losing it is the worst thing you can imagine.",
		book: "Kingdom of Ash",
	},
	10: {
		quote:
			"If you can learn to endure pain, you can survive anything. Some people learn to embrace it- to love it. Some endure it through drowning it in sorrow, or by making themselves forget. Others turn it into anger.",
		book: "The Assasins Blade",
	},
	11: {
		quote:
			"You could rattle the stars,you could do anything, if only you dared. And deep down, you know it, too. That’s what scares you most.",
		book: "Crown of Midnight",
	},
	12: {
		quote:
			"Each of the scars, the chipped teeth and broken claws, the mutilated tail—­they ­weren’t the markings of a victim. Oh, no. They ­were the trophies of a survivor.",
		book: "Heir of Fire",
	},
	13: {
		quote: " Magic makes people dangerous. ",
		book: "Queen of Shadows",
	},
	14: {
		quote:
			"I once lived in fear of other people. I let other people walk all over me just because I was too afraid of the consequences for refusing. I did not know how to refuse.",
		book: "Tower of Dawn",
	},
	15: {
		quote: "The fear of loss … it can destroy you as much as the loss itself.",
		book: "Empire of Storms",
	},
	16: {
		quote:
			"Her mother placed a phantom hand over Aelin’s heart. It is the strength of this that matters. No matter where you are, no matter how far, this will lead you home.",
		book: "Kingdom of Ash",
	},
	17: {
		quote:
			"She made herself look. To face down that place of pain and despair. It would always leave a mark, a stain on her, but she would not let it define her. Hers was not a story of darkness. This would not be the story. She would fold it into herself, this place, this fear, but it would not be the whole story. It would not be her story.",
		book: "Kingdom of Ash",
	},
	18: {
		quote: "Everybody is something. Even the most common witch has her coven.",
		book: "Queen of Shadows",
	},
	19: {
		quote:
			"You’re remarkably judgmental.What’s the point in having a mind if you don’t use it to make judgments? What’s the point in having a heart if you don’t use it to spare others from the harsh judgments of your mind?",
		book: "Throne of Glass",
	},
	20: {
		quote:
			"Fireheart—­why do you cry? Because I am lost, and I do not know the way.",
		book: "Heir of Fire",
	},
	21: {
		quote:
			"Spirit that could not be broken. You do not yield. She would endure it again, if asked. She would do it. Every brutal hour and bit of agony. And it would hurt, and she would scream, but she’d face it. Survive against it.",
		book: "Kingdom Of Ash",
	},
	22: {
		quote: "Lets go rattle the stars.",
		book: "Queen of Shadows",
	},
	
}

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html")
})

app.get("/quotes/:id", (req, res) => {
	const id = req.params.id
	if (bookQuotes[id]) {
		res.json(bookQuotes[id])
	} else {
		res.json({
      error: "No quotes from this book!",
    })
	}
})

app.get("/quotes", (req, res) => {
	res.json(bookQuotes)
})

app.get("/random", (req, res) => {
	// Get random from 1 to number of quotes!
  let r = Math.floor(Math.random() * Object.keys(bookQuotes).length + 1)
	console.log(+r)
	res.json(bookQuotes[r])
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
