export default function initialPageLoad(container) {

    const title = document.createElement('h1');
        title.textContent = 'The Cosmere'

    const headline = document.createElement('section');
        headline.id = 'headline';

        const headlineGreeting = document.createElement('h2');
        headlineGreeting.textContent = 'Welcome to The Cosmere';

        const headlineSentence = document.createElement('p');
        headlineSentence.textContent = 'Explore foods from across the Cosmere';
        
        headline.append(headlineGreeting, headlineSentence);

    const userReview = document.createElement('section');
        userReview.id = 'user-reviews';

        const userReviewHeading = document.createElement('h2');
        userReviewHeading.textContent = 'User Reviews'

        const userReviewArticle = document.createElement('article');
        userReviewArticle.classList.add('user-review');

        const userReviewSentence = document.createElement('p');
        userReviewSentence.textContent = 'Some user comment about the food.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

        const user = document.createElement('p');
        user.classList.add('user');
        user.textContent = '- Rock the Horneater';

        userReviewArticle.append(userReviewSentence, user);
        userReview.append(userReviewHeading, userReviewArticle);

    const hoursOfOperation = document.createElement('section');
        hoursOfOperation.id = 'hours-of-operation';

        const hoursOfOperationHeading = document.createElement('h2');
        hoursOfOperationHeading.textContent = 'Hours of Operation';

        const hoursOfOperationList = document.createElement('ul');

            const sunday = document.createElement('li');
                sunday.textContent = 'Sunday: 8:00 am - 10:00 pm';
            const monday = document.createElement('li');
                monday.textContent = 'Monday: 8:00 am - 8:00 pm';
            const tuesday = document.createElement('li');
                tuesday.textContent = 'Tuesday: 8:00 am - 8:00 pm';
            const wednesday = document.createElement('li');
                wednesday.textContent = 'Wednesday: 8:00 am - 8:00 pm';
            const thursday = document.createElement('li');
                thursday.textContent = 'Thursday: 8:00 am - 8:00 pm';
            const friday = document.createElement('li');
                friday.textContent = 'Friday: 8:00 am - 8:00 pm';
            const saturday = document.createElement('li');
                saturday.textContent = 'Saturday: 8:00 am - 10:00 pm';

        hoursOfOperationList.append(sunday, monday, tuesday, wednesday, thursday, friday, saturday);
        hoursOfOperation.append(hoursOfOperationHeading, hoursOfOperationList);

    const location = document.createElement('section');
        location.id = 'location';
        const locationHeading = document.createElement('h2');
        locationHeading.textContent = 'Location'

        const address = document.createElement('p');
        address.textContent = '123 Random Street';
        location.append(locationHeading, address);

    container.append(title, headline, userReview, hoursOfOperation, location);

    return container;
}