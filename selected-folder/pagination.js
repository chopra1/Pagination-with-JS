//debugger
const array = [  //this runs first 
  { id: "01", name: "Aashish", department: 'Web' },
  { id: "02", name: "Aman", department: 'Web' },
  { id: "03", name: "Aashutosh", department: 'Mobile' },
  { id: "04", name: "Akash", department: 'Sales' },
  { id: "05", name: "Akshay", department: 'Web' },
  { id: "06", name: "Abhishek", department: 'Sales' },
  { id: "07", name: "Bharat", department: 'Business Development' },
  { id: "08", name: "Bhushan", department: 'Marketing' },
  { id: "09", name: "Bansal", department: 'Canteen' },
  { id: "10", name: "Bhavin", department: 'Web' },
  { id: "11", name: "Bhavesh", department: 'Mobile' },
  { id: "12", name: "Chetan", department: 'Web' },
  { id: "13", name: "Chirag", department: 'Mobile' },
  { id: "14", name: "Chandan", department: 'Sales' },
  { id: "15", name: "Chitesh", department: 'Marketing' },
  { id: "16", name: "Dhushyant", department: 'HR' },
  { id: "17", name: "Dhiraj", department: 'Business Development' },
  { id: "18", name: "Dharshan", department: 'Marketing' },
  { id: "19", name: "Dhananand", department: 'Cyber Security' },
  { id: "20", name: "Ellis", department: 'Web' },
  { id: "21", name: "Elam", department: 'Mobile' },
  { id: "22", name: "Eshan", department: 'Web' },
  { id: "23", name: "Farhan", department: 'Marketing' },
  { id: "24", name: "Faizal", department: 'Mobile' },
  { id: "25", name: "Fahad", department: 'Web' },
  { id: "26", name: "Firoz", department: 'Sales' },
  { id: "27", name: "Ghyan", department: 'Web' },
  { id: "28", name: "Ganesh", department: 'Marketing' },
  { id: "29", name: "Gajjar", department: 'Reception' },
  { id: "30", name: "Hitesh", department: 'Admin' },
  { id: "31", name: "Hiren", department: 'Marketing' },
  { id: "32", name: "Hemal", department: 'Admin' },
  { id: "33", name: "Himanshu", department: 'Reception' },
  { id: "34", name: "Hardik", department: 'Marketing' },
  { id: "35", name: "Hitanshu", department: 'Web' },
  { id: "36", name: "Iqbal", department: 'Sales' },
  { id: "37", name: "Isha", department: 'Admin' },
  { id: "38", name: "Ishika", department: 'Mobile' },
  { id: "39", name: "Ishani", department: 'Business Development' },
  { id: "40", name: "Ishan", department: 'Marketing' },
  { id: "41", name: "Ishwar", department: 'Admin' },
  { id: "42", name: "Jatin", department: 'Web' },
  { id: "43", name: "Jiyansh", department: 'Mobile' },
  { id: "44", name: "Jignesh", department: 'Sales' },
  { id: "45", name: "Jainil", department: 'Gaming' },
  { id: "46", name: "Jai", department: 'Web' },
  { id: "47", name: "Jay", department: 'Business Development' },
  { id: "48", name: "Jagdish", department: 'Marketing' },
  { id: "49", name: "Jagat", department: 'Admin' },
  { id: "50", name: "Jaishri", department: 'Sales' },
  { id: "51", name: "Jalpa", department: 'Mobile' },
  { id: "52", name: "Jayraj", department: 'Web' },
  { id: "53", name: "Kiran", department: 'Manangement' },
  { id: "54", name: "Karan", department: 'Web' },
  { id: "55", name: "Kumar", department: 'Sales' },
  { id: "56", name: "Khanna", department: 'Admin' },
  { id: "57", name: "Kapoor", department: 'Business Development' },
  { id: "58", name: "Kishore", department: 'Marketing' },
  { id: "59", name: "Kapil", department: 'Canteen' },
  { id: "60", name: "Kantilal", department: 'Admin' },
  { id: "61", name: "Kanjan", department: 'Marketing' },
  { id: "62", name: "Lakhan", department: 'Web' },
  { id: "63", name: "Lucky", department: 'Mobile' },
  { id: "64", name: "Lakshman", department: 'Cyber Security' },
  { id: "65", name: "Lakwinder", department: 'Web' },
  { id: "66", name: "Lala", department: 'Sales' },
  { id: "67", name: "Loha", department: 'Business Development' },
  { id: "68", name: "Mayank", department: 'Marketing' },
  { id: "69", name: "Mani", department: 'Canteen' },
  { id: "70", name: "Manish", department: 'Web' },
  { id: "71", name: "Mohit", department: 'Sales' },
  { id: "72", name: "Mohan", department: 'Web' },
  { id: "73", name: "Manek", department: 'Mobile' },
  { id: "74", name: "Mohammad", department: 'Sales' },
  { id: "75", name: "Mukul", department: 'Business Development' },
  { id: "76", name: "Michel", department: 'Sales' },
  { id: "77", name: "Messy", department: 'Business Development' },
  { id: "78", name: "Neha", department: 'Admin' },
  { id: "79", name: "Naina", department: 'Sales' },
  { id: "80", name: "Naman", department: 'Web' },
  { id: "81", name: "Nikhil", department: 'Web' },
  { id: "82", name: "Nayan", department: 'Mobile' },
  { id: "83", name: "Nikita", department: 'Reception' },
  { id: "84", name: "Opinder", department: 'Sales' },
  { id: "85", name: "Om", department: 'Web' },
  { id: "86", name: "Omkar", department: 'Web' },
  { id: "87", name: "Onam", department: 'Business Development' },
  { id: "88", name: "Patrik", department: 'Marketing' },
  { id: "89", name: "Paras", department: 'Cyber Security' },
  { id: "90", name: "Piyush", department: 'Web' },
  { id: "91", name: "Patel", department: 'Business Development' },
  { id: "92", name: "Priyanshu", department: 'Web' },
  { id: "93", name: "Priya", department: 'Mobile' },
  { id: "94", name: "Prakash", department: 'Sales' },
  { id: "95", name: "Rohit", department: 'Web' },
  { id: "96", name: "Rohan", department: 'Sales' },
  { id: "97", name: "Raman", department: 'Business Development' },
  { id: "98", name: "Rishi", department: 'Marketing' },
  { id: "99", name: "Raghav", department: 'Cyber Security' },
  { id: "100", name: "Roshan", department: 'Web' }
]

//insertion of new array elements
array[100] = { id: '101', name: "Sunil", department: 'Admin' };
array.push({ id: '102', name: "Suraj", department: "Web" });
array[array.length] = { id: '103', name: 'Sailesh', department: 'Networking' };
length = array.push({ id: '104', name: 'Shakshi', department: 'Cyber Security' });

//deletion of curent array element
array.pop();
array.shift();

//delete value of array that stored in between.
index = array.findIndex(x => x.id === '100')
//console.log(index); //index=98
array.splice(98, 1);

//initializing variables
var tableBody = document.querySelector('#myTable tbody');  //querySelector(): Returns the first element that matches a specified CSS selector(s) in the document.
const pagination = document.querySelector("#pagination");
const search = document.querySelector('#mysearch');
const select = document.getElementById('mySelect');

let currentPage = 1;
let rowsPerPage = 10;

//convert js data into table format
function createTable(array) {
  let totalPages = Math.ceil(array.length / rowsPerPage);   //11
  const start = (currentPage - 1) * rowsPerPage;            //first displaying index number in each case
  const end = start + rowsPerPage;                          //last displaying index number
  const paginatedArray = array.slice(start, end)            //new array will be created acording th start and end

  tableBody.innerHTML = " ";                               //The innerHTML property of elements reads and updates the HTML or  "" text that is inside the element.
  for (let i = 0; i < paginatedArray.length; i++) {
    let rows = `<tr>
                <td>${paginatedArray[i].id}</td>
                <td>${paginatedArray[i].name}</td>
                <td>${paginatedArray[i].department}</td>
                </tr>`
    tableBody.innerHTML += rows;                             //this will add a row after row continue...
    //table is an element and innerHTML are the contents within the element.  
    //The Element property (.innerHTML) method gets or sets the HTML. Setting the value of innerHTML removes all of the element's descendants and replaces them with nodes constructed by parsing the HTML
  }
  pagination.innerHTML = "";

  //to select number of rows displaying on the screen
 function selectChange(){
   rowsPerPage = Number(select.value);
   createTable(array);
}
select.addEventListener("change", selectChange);

  //function for previous button functionality
  const prev = document.createElement("button")              //document.createElement -> creates an Element node (prev btn)
  prev.innerHTML = "Prev";                                   //set the html button element previous
  prev.addEventListener("click", () => {                     //onclick of prev btn current page will move backwards.
    currentPage--;
    if (currentPage < 1) {
      currentPage = 1;                             //currentpage will not get changed if at page No. 1
    }
    createTable(array)
  }
  )

  //for hiding prev button if at page 1
  if (currentPage == 1) {
    prev.style.visibility = 'hidden';
  } else {
    prev.style.visibility = 'visible';
  }
  if (array != "") { pagination.appendChild(prev) };

  //for adding individual buttons in the pagination and making them active too.
  for (let i = 1; i <= totalPages; i++) {
    const pageNo = document.createElement('button')
    pageNo.innerHTML = i
    if (i == currentPage) {
      pageNo.classList.add('active')
    }

    //Add dots between first 2 and last 2 buttons
    if (i == currentPage + 2 && i <= totalPages - 1) {
      const dots = document.createElement('span');
      dots.innerHTML = ". . .";
      pagination.appendChild(dots);
    }
    if ((i >= currentPage + 2 && i < totalPages - 1) || (i < currentPage && i <= totalPages)) continue
    //continue for every current page first 2 digits and last two digits. 
    if (currentPage == totalPages && currentPage >= 4) {         //if i click to the last number than it will show 1,2..
      const dots = document.createElement('span')
      dots.innerHTML = ". . ."
      const first = document.createElement('button')
      first.innerHTML = 1;
      const second = document.createElement('button')
      second.innerHTML = 2;
      first.addEventListener('click', () => {
        currentPage = 1;
        createTable(array);
      })
      second.addEventListener('click', () => {
        currentPage = 2;
        createTable(array)
      })
      pagination.appendChild(first);
      pagination.appendChild(second);
      pagination.appendChild(dots);
    }
    pageNo.addEventListener("click", () => {   //attach an event handler to the document
      currentPage = i;
      createTable(array)
    })
    if (array != "") { pagination.appendChild(pageNo) };
  }

  //function for next button functionality.
  const next = document.createElement('button')
  next.innerHTML = "Next"
  next.addEventListener("click", () => {
    currentPage++                                //onclick of next btn current page will move forward.
    if (currentPage > totalPages) {
      currentPage = totalPages;                  //if current page is last then it will not go ahead.
    }
    createTable(array)
  })

  if (currentPage == totalPages) {
    next.style.visibility = 'hidden';
  } else {
    next.style.visibility = 'visible';
  }
  if (array != "") pagination.appendChild(next);

  //If searched data is not available
  if (array == "") {
    let dataUnavail = document.createElement('h1');
    dataUnavail.innerHTML = "No Records Found";
    dataUnavail.setAttribute("id", "dataUnavail");
    dataUnavail.setAttribute("name", "dataUnavail");
    dataUnavail.setAttribute("department", "dataUnavil");
    pagination.appendChild(dataUnavail);
  }
}
createTable(array);

//function for searching the data wrote in search box
function display(array) {
  const searchValue = search.value.toLowerCase()                      //what we search that value will save in lower case.
  let sameData = searchTable(searchValue, array)
  currentPage = 1;
  createTable(sameData);                                              //new table will be created only displaying the same data.
}

function searchTable(searchValue, sameData) {
  let filteredsameData = [];
  for (let i = 0; i < sameData.length; i++) {
    let idarray = sameData[i].id
    let namearray = sameData[i].name.toLowerCase();
    let departmentarray = sameData[i].department.toLowerCase();

    if (idarray.includes(searchValue)) {
      filteredsameData.push(sameData[i]);
    }
    else if (namearray.includes(searchValue)) {
      filteredsameData.push(sameData[i]);
    }
    else if (departmentarray.includes(searchValue)) {
      filteredsameData.push(sameData[i]);
    }
  }
  return filteredsameData;
}

//sorting of data
function sortTable(column) {  //'column' is used to specify all columns    
  //assign required parameters
  var rows, switching, i, x, y, shouldSwitch, direction, switchcount = 0;
  switching = true;
  //Set the sorting direction to descending:
  direction = "descending";
  //loop that will continue until no switching has been done
  while (switching) {
    //A "While" Loop is used to repeat a specific block of code an unknown number of times, until a condition is met. 
    rows = tableBody.rows;

    for (i = 0; i < (rows.length - 1); i++) {
      //Get the two elements you want to compare, one from current row and one from the next
      x = rows[i].getElementsByTagName("td")[column];
      y = rows[i + 1].getElementsByTagName("td")[column];
      //check if the two rows should switch place, based on the direction of ascending or descending:
      if (direction == "ascending") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop.
          shouldSwitch = true;
          break;
        }
      } else if (direction == "descending") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop.
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      //If a switch has been marked, make the switch and mark that a switch has been done:
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      //If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.
      if (switchcount == 0 && direction == "descending") {
        direction = "ascending";
        switching = true;
      }
    }
  }
}
