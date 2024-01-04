let backItem = localStorage.getItem('item');
console.log(backItem);
let listItem=backItem?JSON.parse(backItem):[
  {
    item:'',
    date:'',
  },
  
];

displayItem();

function toDoLest(){
 let  getElement = document.querySelector('#input_todo');
 let  getdate = document.querySelector('#todo_date');
 let toDoItem = getElement.value;
 let toDoDate = getdate.value;
 if (toDoItem !== '' || toDoDate !== '') {
  listItem.push({item:toDoItem,date:toDoDate});
 getElement.value=" ";
 getdate.value=" ";
 displayItem();

}else{
  alert('Enter your information plaese!')
}
 
}

function displayItem(){
  localStorage.setItem('item',JSON.stringify(listItem));
  let displayContainer = document.querySelector('.todo_container');
  let newItem = '';
  // undo="";
  for(i=0; i<listItem.length;i++){
    let theItem = listItem[i].item;
    let theDate = listItem[i].date;
    newItem +=`
    <span>${theItem}</span>
    <span>${theDate}</span>
    <button class="btn_f_todo" onclick="deleteItem(${i});undo=listItem.splice(${i}, 1);">delete</button>           
    `; 
  }
  displayContainer.innerHTML = newItem;
}
let undo;
function deleteItem(index) {
   listItem.splice(index, 1);
   displayItem();
}


// function toDoLest() {
//   let getElement = document.querySelector('#input_todo');
//   let getdate = document.querySelector('#todo_date');
//   let toDoItem = getElement.value.trim();  // Trim to remove leading/trailing whitespaces
//   let toDoDate = getdate.value.trim();

//   if (toDoItem === '' || toDoDate === '') {
//     alert('Please enter both the item and date.');
//     return;  // Do not proceed if either field is empty
//   }

//   listItem.push({ item: toDoItem, date: toDoDate });
//   getElement.value = '';
//   getdate.value = '';
//   displayItem();
// }
