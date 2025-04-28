import { createElement } from "./domHelpers";

export default function menuPageLoad(container) {
    const title = createElement('h1', {text: 'Menu'});
    const menuSection = createElement('section', {id: 'menu'});
    const menuList = createElement('ul');

    const menu = [
        {
            name: 'Baywraps',
            price: 10,
            description: 'rolls of thin flat bread stuffed with boiled barley and vegetables',
        },
        {
            name: 'Simberry Jam',
            price: 4,
            description: 'according to Palates of Personality, a liking for this jam indicates a spontaneous and impulsive nature as well as a love for the outdoors.',
        },
        {
            name: 'Heartroot Tea',
            price: 2,
            description: '',
        },
        {
            name: 'Tinkfans',
            price: 3,
            description: '',
        },
        {
            name: 'Mudbeer',
            price: 4,
            description: '',
        },
        {
            name: 'Pop\'ems',
            price: 5,
            description: 'oily, fried junk food covered in powdered sugar',
        }
    ]

    menu.forEach(({ name, price, description }) => {
        const listItem = createElement('li')
        const menuItemContainer = createElement('div', {class: 'menu-item-container'});
        const menuName = createElement('h3', { text: name });
        const menuPrice = createElement('p', {text: price});

        menuItemContainer.append(menuName, menuPrice);
        listItem.append(menuItemContainer);
      
        if (description) {
            const menuDesc = createElement('p', { text: description, class:'description'});
            listItem.append(menuDesc);
        }
      
        menuList.append(listItem);
      });
    
      menuSection.append(menuList);

    container.append(title, menuSection);
    return container;
}