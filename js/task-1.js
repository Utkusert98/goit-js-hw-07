const categoriesList = document.querySelector('#categories');  
const categoriesCount = categoriesList.children.length; 
console.log(`There are ${categoriesCount} categories in the book!`);  

const categories = categoriesList.querySelectorAll('.item'); 
categories.forEach(category => {     
    const title = category.querySelector('h2').textContent;      
    const itemsCount = category.querySelectorAll('li').length;     
    console.log(`Category: ${title}, Items: ${itemsCount}`); 
});
