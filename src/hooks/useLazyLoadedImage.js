import React from "react";

const useLazyLoadedImage = (src) => {
	const [sourceLoaded, setSourceLoaded] = React.useState(null)

	React.useEffect(() => {
		const img = new Image()
		img.src = src
		img.onload = () => setSourceLoaded(src)
	}, [src])

	return sourceLoaded 
}

export {
	useLazyLoadedImage
};
