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
        createElement('a', {
            text: 'kaladin@stormlightarchive.fake-email',
            class: 'email-link',
            attrs: {
                href: 'https://github.com/HugoTurtle',
                target: '_blank',
                rel: 'noopener noreferrer'
            }
        })
    );
        
    info.append(area, address, phoneNumber, infoEmail);

    const formContainer = createElement('section', {id: 'form-container'});
    const form = createElement('form', {id: 'contact-form'});

    const fullNameGroup = createInputGroup('Full Name:', 'text', 'username');
    const emailGroup = createInputGroup('Email:', 'email', 'userEmail');
    const messageGroup = createElement('div', {class:'input-container'});
    const msgLabel = createElement('label', {text:'Your Message:'})
    const msgTextArea = createElement('textarea');

    messageGroup.append(msgLabel, msgTextArea);

    const formButton = createElement('button', {text: 'SEND', class:'contact-button'});

    form.append(fullNameGroup, emailGroup, messageGroup, formButton);
    formContainer.append(form);

    const girdWrapper = createElement('div', {class: 'grid-wrapper'});
    girdWrapper.append(info, formContainer);

    container.append(title, girdWrapper);

    return container;
}