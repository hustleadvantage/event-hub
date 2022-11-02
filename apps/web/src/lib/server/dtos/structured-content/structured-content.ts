type StructuredContentDto = Eventbrite.StructuredContent;

type ImageDto = Eventbrite.StructuredContent.Image;

type TextDto = Eventbrite.StructuredContent.Text;

type VideoDto = Eventbrite.StructuredContent.Video;

export const toImage = (dto: ImageDto): EventDetailPage.Event.StructuredContent.Image => {
	const {
		id,
		data: { image }
	} = dto;

	const ratio = image.aspect_ratio;
	const height = image.original.height;
	const width = image.original.width;
	const url = image.original.url;

	return {
		_type: 'image',
		id,
		ratio,
		height,
		width,
		url
	};
};

export const toText = (dto: TextDto): EventDetailPage.Event.StructuredContent.Text => {
	const {
		id,
		data: { body }
	} = dto;
	const text = body.text;

	return {
		_type: 'text',
		id,
		value: text
	};
};

export const toVideo = (dto: VideoDto): EventDetailPage.Event.StructuredContent.Video => {
	const {
		id,
		data: { video }
	} = dto;
	const url = video.embed_url;

	return {
		_type: 'video',
		id,
		url
	};
};

export const toPresenter = (dto: StructuredContentDto): App.Event.Content => {
	return dto.modules.map((module) => {
		switch (module.type) {
			case 'image':
				return toImage(module);
			case 'text':
				return toText(module);
			default:
				return toVideo(module);
		}
	});
};
