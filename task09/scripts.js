function addNode(parernt, tag, child) {
    if (!(parernt instanceof HTMLElement)) {
        throw new Error('First argument should be an HTMLElement');
    }
    if (typeof child !== 'function') {
        throw new Error('Second argument should be a function which returns an HTMLElement');
    }

    const node = document.createElement(tag);
    child(node);
    parernt.appendChild(node);

    return node;
}

// header
addNode(document.body, 'h1', function(h1) {
    h1.textContent = 'DOM Manipulation Task';
    h1.style.fontSize = '50px';
    h1.style.color = 'black';
    h1.style.letterSpacing = '4px';
    
    return h1;
});

let boxes = [
    { color: 'lightgreen', text: 'Updated Box 1' },
    { color: 'lightblue', text: 'Updated Box 2' },
    { color: 'lightblue', text: 'Updated Box 3' },
];

// draw boxes
boxes.forEach(box => {
    addNode(document.body, 'div', function(div) {
        div.style.width = '100vw - 60px';
        div.style.height = '150px';
        div.style.backgroundColor = box.color;
        div.style.border = '4px solid blue';
        div.style.borderRadius = '2px';

        div.style.marginLeft = '30px';
        div.style.marginRight = '30px';
        div.style.marginBottom = '30px';

        div.style.paddingTop = '20px';
        div.style.paddingBottom = '20px';
        div.style.paddingLeft = '40px';
        div.style.paddingRight = '40px';

        div.style.boxSizing = 'border-box';

        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.fontSize = '30px';
        div.style.color = 'black';
        div.textContent = box.text;

        div.addEventListener('mouseenter', function() {
            div.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
            div.style.transform = 'scale(1.03)';
            div.style.transition = 'box-shadow 0.2s, transform 0.2s';
        });
        div.addEventListener('mouseleave', function() {
            div.style.boxShadow = '';
            div.style.transform = '';
        });
        
        return div;
    });
});

// add list
let listElement = addNode(document.body, 'ul', function(ul) {
    ul.style.listStyleType = 'disc';
    ul.style.paddingLeft = '95px';
    ul.style.fontSize = '20px';
    ul.style.color = 'black';

    return ul;
});

let listItems = ['Item 2', 'Item 3'];
listItems.forEach(itemText => { 
    addNode(listElement, 'li', function(li) {
        li.textContent = itemText;
        return li;
    });
});

