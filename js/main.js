
document.querySelector('button').addEventListener('click', getFetch)

var localListItem=JSON.parse(localStorage.getItem('books')||"[]");
console.log('localStorage',localListItem)

localListItem.forEach((key)=>{
  const li1 = document.createElement("li");
  li1.textContent = key;
  document.querySelector("ol").appendChild(li1);
})

// console.log(localListItem)
function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`
 
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.title)

        const li = document.createElement('li')
        //add text to li
          li.textContent=data.title
          if(!li.textContent){
            alert('Please Enter ISBN Number Of Book')
          }
          else if(localListItem.includes(li.textContent)){
            alert('This Book is already in List')
          }
          //append the li to the ul
          else{
            document.querySelector('ol').appendChild(li)
            localListItem.push(data.title)
            console.log('testing',localListItem)

            localStorage.setItem('books',JSON.stringify(localListItem))
          }
          
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
      

}
// if(!localStorage.getItem('books')){
//   localStorage.setItem('books', data.title)
// }else{
//  let books = localStorage.getItem('books') + " ; " + data.title 
//  localStorage.setItem('books', books)
// }



