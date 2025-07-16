const categoriesList = document.querySelector('#categories');

const categoriesCount = categoriesList.children.length;
console.log(`У книзі є ${categoriesCount} категорії!`);

const categories = categoriesList.querySelectorAll('.item');
categories.forEach(categories => {
    const title = categories.querySelector('h2').textContent;

    const itemsCount = categories.querySelectorAll('li').length;
    console.log(`Категорії: ${title}, Героїв: ${itemsCount}`)
})