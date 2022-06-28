const shopping = document.getElementById('shopping-list');
const shopItems = ['uova', 'pane', 'latte', 'biscotti', 'pasta', 'affettati', 'formaggio','verdura', 'frutta'];

let listItems = '';

//CICLO FOR

// for(i = 0; i < shopItems.length; i++){
//     listItems += `<li>${shopItems[i]}</li>`;
// }

// shopping.innerHTML = listItems;


//CICLO WHILE

let i = 0;
while(i < shopItems.length){
    listItems += `<li>${shopItems[i]}</li>`;

    i++;
}

shopping.innerHTML = listItems;
