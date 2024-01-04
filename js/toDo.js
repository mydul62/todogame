
let listItem=[
  {
    item:'Your note',
    date:'date',
  },
  
];

displayItem();

function toDoLest(){
 let  getElement = document.querySelector('#input_todo');
 let  getdate = document.querySelector('#todo_date');
 let toDoItem = getElement.value;
 let toDoDate = getdate.value;
 listItem.push({item:toDoItem,date:toDoDate});
 getElement.value=" ";
 getdate.value=" ";
 displayItem();

}

function displayItem(){
  let displayContainer = document.querySelector('.todo_container');
  let newItem = '';
  for(i=0; i<listItem.length;i++){
    let theItem = listItem[i].item;
    let theDate = listItem[i].date;
    newItem +=`
    <span>${theItem}</span>
    <span>${theDate}</span>
    <button class="btn_f_todo" onclick="deleteItem(${i})">delete</button>           
    `; 
  }
  displayContainer.innerHTML = newItem;
}
function deleteItem(index) {
  listItem.splice(index, 1);
  displayItem();
}