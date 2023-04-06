const tableBody = document.querySelector("#myTable tbody");
const paginationDiv = document.querySelector("#pagination");  //assigning html id 
const search = document.querySelector('#search')

var currentPage = 1, itemsPerPage = 5;   //asigning currentPage and itemsPerPage
 
//For Displaying Searched Value
function display(data) {               //data is the student details that we gathered from pagination1.js file
    const searchValue = search.value
    var matchedData = searchTable(searchValue, data)                      //search Display onkeyup
    buildTable(matchedData)
}

//For Searching And Get Matched Value
function searchTable(searchValue, matchedData) {
    var filteredMatchedData = []

    for (let i = 0; i < matchedData.length; i++) {
        var searchValue = searchValue.toLowerCase()
        let nameData = matchedData[i].Name.toLowerCase()
        if (nameData.includes(searchValue)) filteredMatchedData.push(matchedData[i])   //for matching the search matchedData and the matchedData in the table
    }
    return filteredMatchedData;
}

//For Table Building    
function buildTable(data) {
    let totalPages = Math.ceil(data.length / itemsPerPage);    //for calculating how many page required for the pagination
    tableBody.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage, end = start + itemsPerPage;  //for Starting point and ending pointing for the array which need for the slicing.
    const paginatedArray = data.slice(start, end)        //slice for the taking only required items
               
    for (let i = 0; i < paginatedArray.length; i++) {
        let row = `<tr>
                <td>${paginatedArray[i].Sr}</td>
                <td>${paginatedArray[i].Name}</td>
                <td>${paginatedArray[i].Performance}</td>
                </tr>
        `
        tableBody.innerHTML += row;
    }
    paginationDiv.innerHTML = " "

//For No Data Found
    if (data == "") {
        let noData = document.createElement('h1');
        noData.innerHTML = "OOPS!  No Data Records Found"        //showing this msg if no matchedData is found
        noData.setAttribute("id", "noData")                        //set attribute
        paginationDiv.appendChild(noData)
    }

//Prev Button
    const prev = document.createElement("a")
    prev.innerHTML = "Prev";
    prev.addEventListener("click", () => {
        currentPage--;
        if (currentPage < 1) currentPage = 1; buildTable(data)
    })
    if (data != "") paginationDiv.appendChild(prev)                 //for hiding prev if no matcheddata is found
  
//Page Number Pagination
    for (let i = 1; i <= totalPages; i++) {
        const pageNo = document.createElement('a')
        pageNo.innerHTML = i
        if (i == currentPage) pageNo.classList.add('active')
        if (i == currentPage + 2 && i <= totalPages - 2) {          //for putting ... in between 1,2 and last two number
            const dott = document.createElement('span')
            dott.innerHTML = "..."
            paginationDiv.appendChild(dott)
        }
        if ((i >= currentPage + 2 && i < totalPages - 1) || (i < currentPage && i <= totalPages) ) continue       //for showing 1,2 and last two number      //for showing only cureent element and next to that
        if (currentPage == totalPages && currentPage >= 4) {                                      //if i click to the last number than it will show 1,2..
            const dott = document.createElement('span')
            dott.innerHTML = "..."
            const first = document.createElement('a')
            first.innerHTML = 1;
            const second = document.createElement('a')
            second.innerHTML = 2;
            first.addEventListener('click', () => {
                currentPage = 1;
                buildTable(data)
            })
            second.addEventListener('click', () => {
                currentPage = 2;
                buildTable(data)
            })
            paginationDiv.appendChild(first)
            paginationDiv.appendChild(second)
            paginationDiv.appendChild(dott)
        }
        pageNo.addEventListener("click", () => {
            currentPage = i;
            buildTable(data)                         //clicking event 
        })
        paginationDiv.appendChild(pageNo)
    } 
            
//Next Button
    const next = document.createElement('a')
    next.innerHTML = "Next"
    next.addEventListener("click", () => {
        currentPage++
        if (currentPage > totalPages) currentPage = totalPages;
        buildTable(data)
    })

    if (data != "") paginationDiv.appendChild(next)  //hiding next if no matcheddata is found
}
buildTable(data)

