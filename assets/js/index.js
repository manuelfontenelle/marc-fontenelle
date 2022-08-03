const $ = document

$.addEventListener("DOMContentLoaded", () => {
	// $(".burger2").click(function () {
	// 	$(".burger2").toggleClass("open")
	// })
	burgerContainer = document.getElementById("burger-container")
	burgerMenu = document.getElementById("burger")
	menuLeft = document.getElementById("menu-left")

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

	mybutton = document.getElementById("scrollTop")
	mybutton.addEventListener("click", () => {
		document.body.scrollTop = 0 // For Safari
		document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
	})
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

	form.addEventListener("submit", async (event) => {
		event.preventDefault()
		isDisabled()

		const data = {
			firstname: $.querySelector("#firstname").value,
			lastname: $.querySelector("#lastname").value,
			email: $.querySelector("#email").value,
			subject: $.querySelector("#subject").value,
			message: $.querySelector("#message").value,
		}

		try {
			// const response = await axios.post("http://localhost:3000/form", data);
			const response = await axios.post(
				"https://formulaire-backend-mf.herokuapp.com/form",
				data
			)

			if (response.status === 200) {
				alert("Votre formulaire a bien été envoyé")
				cleanForm()
				isEnabled()
			}
		} catch (e) {
			if (e.response.data.error === "Missing parameters") {
				alert("Veuillez remplir tous les champs du formulaire")
			} else {
				alert("Une erreur est survenue")
				cleanForm()
			}

			isEnabled()
		}
	})
})
