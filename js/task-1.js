const numberOfCategoriesElem = document.querySelectorAll('ul#categories li.item');
console.dir(`Number of categories: ${numberOfCategoriesElem.length}`);

numberOfCategoriesElem.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('li').length;
    console.log(`Category: ${title}; Elements: ${elements} `);
});
