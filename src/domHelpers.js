export function createElement(tag, options = {}) {
    const element = document.createElement(tag);
    if (options.text) element.textContent = options.text;
    if (options.id) element.id = options.id;
    if (options.className) element.classList.add(options.className);
    if (options.attrs) {
        for (const [key, value] of Object.entries(options.attrs)) {
            element.setAttribute(key, value);
        }
    }
    return element;
}
export function createInputGroup(labelText, type, name) {
    const wrapper = createElement('div', { className: 'input-container' });
    const label = createElement('label', { text: labelText });
    const input = createElement('input', {
        attrs: { type, name }
    });
    wrapper.append(label, input);
    return wrapper;
}