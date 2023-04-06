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
array[100] = {id: '101', name: "Sunil", department: 'Admin'};
array.push({id:'102', name:"Suraj", department:"Web"});
array[array.length] = {id: '103', name: 'Sailesh', department: 'Networking'};
length = array.push({id: '104', name: 'Shakshi', department: 'Cyber Security'});

//deletion of curent array element
array.pop();
array.shift();


const tableBody = document.querySelector("#myTable tbody");
const pagination = document.querySelector("#pagination");
const search = document.querySelector('#search')

let currentPage = 1; 
let itemsPerPage = 10;
    
function createTable(array) {
    let totalPages = Math.ceil(array.length / itemsPerPage);    
    tableBody.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage, end = start + itemsPerPage;
    const paginatedArray = array.slice(start, end)       
               
    for (let i = 0; i < paginatedArray.length; i++) {
        let row = `<tr>
                <td>${paginatedArray[i].id}</td>
                <td>${paginatedArray[i].name}</td>
                <td>${paginatedArray[i].department}</td>
                </tr>`
        tableBody.innerHTML += row;
    }
    pagination.innerHTML = " ";

    const prev = document.createElement("button")
    prev.innerHTML = "Prev";
    prev.addEventListener("click", () => {
        currentPage--;
        if (currentPage < 1) currentPage = 1; createTable(array)
    })
    if (array != "") pagination.appendChild(prev)
  

    for (let i = 1; i <= totalPages; i++) {
        const pageNo = document.createElement('button')
        pageNo.innerHTML = i
        if (i == currentPage) pageNo.classList.add('active')
        pageNo.addEventListener("click", () => {
            currentPage = i;
            createTable(array)                         
        })
        pagination.appendChild(pageNo)
    }
            
    const next = document.createElement('button')
    next.innerHTML = "Next"
    next.addEventListener("click", () => {
        currentPage++
        if (currentPage > totalPages) currentPage = totalPages;
        createTable(array)
    })

    if (array != "") pagination.appendChild(next);
}
createTable(array)


function searchTable(searchValue, sameData) {
    let filteredsameData = []
    for (let i = 0; i < sameData.length; i++) {
        var searchValue = searchValue.toLowerCase()
        let namearray = sameData[i].name.toLowerCase()
        if (namearray.includes(searchValue)) filteredsameData.push(sameData[i])  
    }
    return filteredsameData;
}

function display(array) {
    const searchValue = search.value
    let sameData = searchTable(searchValue, array)                 
    createTable(sameData)
}
    