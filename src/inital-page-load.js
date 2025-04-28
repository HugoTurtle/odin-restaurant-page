import { createElement } from "./domHelpers";

export default function initialPageLoad(container) {

    const title = createElement('h1', {text: 'The Cosmere'});

    //Headline section
    const headline = createElement('section', {id: 'headline'});
    const headlineGreeting = createElement('h2', {text: 'Welcome to The Cosmere'});
    const headlineSentence = createElement('p', {text: 'Explore foods from across the Cosmere'});
        
    headline.append(headlineGreeting, headlineSentence);

    //User Reviews section
    const userReview = createElement('section', {id: 'user-reviews'});
    const userReviewHeading = createElement('h2', {text: 'User Reviews'});
    const userReviewArticle = createElement('article', {class: 'user-review'});
    const userReviewSentence = createElement('p', {text: 'Some user comment about the food.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'});
    const user = createElement('p', {text: '- Rock the Horneater', class: 'user'});

    userReviewArticle.append(userReviewSentence, user);
    userReview.append(userReviewHeading, userReviewArticle);

    // Hours of Operation section
    const hoursOfOperation = createElement('section', { id: 'hours-of-operation' });
    const hoursOfOperationHeading = createElement('h2', { text: 'Hours of Operation' });
    const hoursOfOperationList = createElement('ul');

    const days = [
        'Sunday: 8:00 am - 10:00 pm',
        'Monday: 8:00 am - 8:00 pm',
        'Tuesday: 8:00 am - 8:00 pm',
        'Wednesday: 8:00 am - 8:00 pm',
        'Thursday: 8:00 am - 8:00 pm',
        'Friday: 8:00 am - 8:00 pm',
        'Saturday: 8:00 am - 10:00 pm'
    ];

    const dayListItems = days.map(day => createElement('li', { text: day }));
    hoursOfOperationList.append(...dayListItems);
    hoursOfOperation.append(hoursOfOperationHeading, hoursOfOperationList);

    // Location section
    const location = createElement('section', { id: 'location' });
    const locationInfoContainer = createElement('div', {class: 'container'});
    const locationHeading = createElement('h2', { text: 'Location' });
    const area = createElement('p', {text: 'Planet: Roshar'});
    const address = createElement('p', { text: '123 Shattered Plains' });
    
    locationInfoContainer.append(area, address);
    location.append(locationHeading, locationInfoContainer);

    // Append everything to the container
    container.append(title, headline, userReview, hoursOfOperation, location);

    return container;
}