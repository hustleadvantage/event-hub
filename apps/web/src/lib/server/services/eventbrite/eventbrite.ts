import { SECRETS } from '$server/secrets';
import { Eventbrite } from 'eventbrite';

export default Eventbrite.create({
	key: SECRETS.EVENTBRITE.API_KEY
});
