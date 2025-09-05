let container = document.createElement('div');
container.style.flexWrap = 'wrap';
container.style.display = 'flex';
container.style.gap = '10px';
container.style.margin = '20px';

document.body.appendChild(container);

for (let i = 1; i <= 12; i++) {
    let box = document.createElement('div');
    box.style.width = '200px';
    box.style.height = '140px';
    box.style.margin = '20px';
    box.style.backgroundColor = '#f0f0f0';
    box.style.padding = '10px';
    box.style.borderRadius = '8px';
    

    let title = document.createElement('h1');
    title.innerText = 'Title' + i;

    let desc = document.createElement('p');
    desc.innerText = 'This is my p number ' + i;


    box.appendChild(title);
    box.appendChild(desc);
    container.appendChild(box);
}