import { option } from 'fp-ts';

export const toLocationToBeAnnounced = (): App.Event.LocationToBeAnnounced => ({
	_type: 'to_be_announced',
	value: 'To be announced'
});

export const toOnlineLocation = (): App.Event.OnlineLocation => ({
	_type: 'online',
	value: 'Online event'
});

export const toVenue = (props: { address: string; name: string }): App.Event.Venue => ({
	_type: 'venue',
	address: props.address,
	name: props.name
});

export const toPresenter = (event: Eventbrite.Event): App.Event.Location => {
	if (event.online_event) {
		return toOnlineLocation();
	}

	const venueOption = option.fromNullable(event.venue);

	if (option.isNone(venueOption)) {
		return toLocationToBeAnnounced();
	}

	const venue = venueOption.value;

	return toVenue({
		address: `${venue.address.city}, ${venue.address.region}`,
		name: venue.name
	});
};
