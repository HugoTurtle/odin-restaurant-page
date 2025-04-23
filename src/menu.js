import { createElement } from "./domHelpers";

export default function menuPageLoad(container) {
    const title = createElement('h1', {text: 'Menu'});
    const menuSection = createElement('section', {id: 'menu'});
    const menuList = createElement('ul');

    const menu = [
        {
            name: 'Baywraps',
            description: 'rolls of thin flat bread stuffed with boiled barley and vegetables',
        },
        {
            name: 'Simberry Jam',
            description: 'according to Palates of Personality, a liking for this jam indicates a spontaneous and impulsive nature as well as a love for the outdoors.',
        },
        {
            name: 'Heartroot Tea',
            description: '',
        },
        {
            name: 'Tinkfans',
            description: '',
        },
        {
            name: 'Mudbeer',
            description: '',
        },
        {
            name: 'Pop\'ems',
            description: 'oily, fried junk food covered in powdered sugar',
        }
    ]

    menu.forEach(({ name, description }) => {
        const menuItem = createElement('li');
        const menuName = createElement('h3', { text: name });
      
        const menuDesc = createElement('p', { text: description });
      
        if (description) {
          menuDesc.classList.add('description');
          menuItem.append(menuName, menuDesc);
        } else {
          menuItem.append(menuName);
        }
      
        menuList.append(menuItem);
      });
    
      menuSection.append(menuList);

    container.append(title, menuSection);
    return container;
}