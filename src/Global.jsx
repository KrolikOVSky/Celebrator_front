import "../public/notFoundImg.png"

export const mainUrl = "http://0.0.0.0:8081"
export const celebratesUrl = mainUrl
export const birthdayUrl = `${mainUrl}/api`

export const targetToState = (e, birthday) => {
	const id = e.target.id
	const value = e.target.value
	switch (id) {
		case "name":
			birthday.name = value
			break
		case "lastname":
			birthday.lastName = value
			break
		case "midname":
			birthday.midName = value
			break
		case "sex":
			birthday.sex = value
			break
		case "date":
			birthday.date = value
			break
		case "role":
			birthday.role = value
			break
		case "image":
			let file = e.target.files[0]
			let reader = new FileReader();
			reader.onload = () => {
				birthday.image = reader.result
			}
			reader.readAsDataURL(file);
			break
		default:
			console.log("--> Wrong ID")
	}
	return birthday
}
export const checkImg = (image) => {
	let img = image.toString().substring(0, image.toString().indexOf("/"));
	return img === "data:image"
}
export const notFoundImage = "/notFoundImg.png"
export const logo = "/logo.png"
