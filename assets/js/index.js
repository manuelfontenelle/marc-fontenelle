const $ = document

$.addEventListener("DOMContentLoaded", () => {
	const form = $.querySelector("#contact-form")
	const submitButton = $.querySelector("#submit-btn")

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
