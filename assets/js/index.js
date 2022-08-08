const $ = document

$.addEventListener("DOMContentLoaded", () => {
	const yearSet = () => {
		const year = document.getElementById("yearDisplay")
		const d = new Date().getFullYear()
		year.innerHTML = d
		// year.addEventListener("click", () => {
		// 	console.log("test")
		// })
	}
	yearSet()

	const copyClipboard = () => {
		const mailToCopy = document.getElementById("mailToCopy")
		mailToCopy.addEventListener("click", () => {
			const range = document.createRange()
			range.selectNode(mailToCopy)
			window.getSelection().removeAllRanges() // clear current selection
			window.getSelection().addRange(range) // to select text
			$.execCommand("copy")
			window.getSelection().removeAllRanges() // to deselect
			// console.log("test")
		})
	}
	copyClipboard()

	const copytootTip = () => {
		const mailToCopy = document.getElementById("mailToCopy")
		const tooltipText = document.getElementById("tooltiptext")
		mailToCopy.addEventListener("click", () => {
			tooltipText.innerHTML = "Copié !"
		})
	}
	copytootTip()

	const randomFonction = () => {
		const months = ["deluxe-rose-&-bleue", "February-2", "March-3-2"]
		const random = Math.floor(Math.random() * months.length)
		const randomProject = document.getElementById("random-project")
		const randomProjectLink = document.getElementById("random-project-link")

		if (randomProject != null) {
			randomProject.textContent = (random, months[random].replaceAll("-", " "))
			randomProjectLink.setAttribute(
				"href",
				"./" + (random, months[random]) + ".html"
			)
		}
	}
	randomFonction()

	// }

	//////////////////////////
	const burgerContainer = document.getElementById("burger-container")
	const burgerMenu = document.getElementById("burger")
	const menuLeft = document.getElementById("menu-left")

	burgerContainer.addEventListener("click", () => {
		// console.log("test")
		menuOpen = document.getElementById("menu-open")
		menuClose = document.getElementById("menu-close")

		if (menuOpen.classList.contains("active")) {
			// console.log("test2")
			menuOpen.classList.remove("active")
			menuClose.classList.add("active")
			burgerMenu.classList.add("open")
			menuLeft.classList.add("slide-in")
		} else {
			menuOpen.classList.add("active")
			menuClose.classList.remove("active")
			burgerMenu.classList.remove("open")
			menuLeft.classList.remove("slide-in")
		}
	})

	burgerMenu.addEventListener("click", () => {
		// console.log("test")
		// burgerMenu.toggleClass("open")
		burgerMenu.classList.toggle("open")
	})
	//////////////////////////////////
	const scrollTopFunction = () => {
		const mybutton = document.getElementById("scrollTop")
		mybutton.addEventListener("click", () => {
			console.log("test")
			window.scrollTo({ top: 0, behavior: "smooth" })
			// document.body.scrollTop = 0 // For Safari
			// document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
		})
	}
	scrollTopFunction()
	// const topFunction = () => {
	// 	document.body.scrollTop = 0 // For Safari
	// 	document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
	// }

	const form = $.querySelector("#contact-form")
	const submitButton = $.querySelector("#submit-btn")

	// topFunction()

	// Fonction pour vider les champs du formulaire :
	const cleanForm = () => {
		form.reset()
	}

	// Fonction pour réactiver le bouton d'envoi du formulaire :
	const isEnabled = () => {
		submitButton.removeAttribute("disabled")
		submitButton.classList.remove("disabled-btn")
	}

	// Fonction pour désactiver le bouton d'envoi du formulaire :
	const isDisabled = () => {
		submitButton.setAttribute("disabled", "disabled")
		submitButton.classList.add("disabled-btn")
	}

	// form.addEventListener("submit", async (event) => {
	// 	event.preventDefault()
	// 	isDisabled()

	// 	const data = {
	// 		firstname: $.querySelector("#firstname").value,
	// 		lastname: $.querySelector("#lastname").value,
	// 		email: $.querySelector("#email").value,
	// 		subject: $.querySelector("#subject").value,
	// 		message: $.querySelector("#message").value,
	// 	}

	// 	try {
	// 		// const response = await axios.post("http://localhost:3000/form", data);
	// 		const response = await axios.post(
	// 			"https://formulaire-backend-mf.herokuapp.com/form",
	// 			data
	// 		)

	// 		if (response.status === 200) {
	// 			alert("Votre formulaire a bien été envoyé")
	// 			cleanForm()
	// 			isEnabled()
	// 		}
	// 	} catch (e) {
	// 		if (e.response.data.error === "Missing parameters") {
	// 			alert("Veuillez remplir tous les champs du formulaire")
	// 		} else {
	// 			alert("Une erreur est survenue")
	// 			cleanForm()
	// 		}

	// 		isEnabled()
	// 	}
	// })
})
