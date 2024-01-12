import { getWelcomeMessage } from './model.js';
import { setMessageContent } from './view.js';

const msg = getWelcomeMessage('student');
console.log(msg);

setMessageContent(msg);
