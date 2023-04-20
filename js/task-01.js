const list = document.querySelector("#categories");

const total = [...list.children].length;
console.log(`Number of categories: ${total}`);

[...list.children].forEach(item => {
    const categoryName = item.firstElementChild.textContent;
    console.log(`Category: ${categoryName}`);

    const elements = item.lastElementChild;
    const quantity = [...elements.children].length;
    console.log(`Elements: ${quantity}`);
})
