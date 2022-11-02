export const toPresenter = (image: Eventbrite.Event.Image) => ({
	ratio: image.aspect_ratio,
	height: image.original.height,
	width: image.original.width,
	url: image.original.url
});
