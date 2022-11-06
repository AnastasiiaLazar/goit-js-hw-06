const categoriesItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItems.length}`);
console.log('');


categoriesItems.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
    if (item !== categoriesItems[categoriesItems.length - 1]) {
        console.log('');
    }
});