import { createElement, createInputGroup } from "./domHelpers";

export default function contactPageLoad(container) {

    const title = createElement('h1', {text: 'Contact Us'});

    const info = createElement('section', {id: 'info'});
    const address = createElement('p', {text: '123 Shattered Plains'});
    const area = createElement('p', {text: 'Planet: Roshar'});
    const phoneNumber = createElement('p', {text: '(123) 456-COSMERE 7890', class: 'phone-number'});
    const infoEmail = createElement('p');
    infoEmail.append(
        document.createTextNode('For all other inquiries please email '),
        createElement('br'),
        document.createTextNode('kaladin@stormlightarchive.fake-email')
    )
        
    info.append(area, address, phoneNumber, infoEmail);

    const formContainer = createElement('section', {id: 'form-container'});
    const form = createElement('form', {id: 'contact-form'});

    const fullNameGroup = createInputGroup('Full Name:', 'text', 'username');
    const emailGroup = createInputGroup('Email:', 'email', 'userEmail');
    const messageGroup = createInputGroup('Your Message:', 'text', 'userMsg')

    form.append(fullNameGroup, emailGroup, messageGroup);
    formContainer.append(form);

    const girdWrapper = createElement('div', {class: 'grid-wrapper'});
    girdWrapper.append(info, formContainer);

    container.append(title, girdWrapper);

    return container;
}