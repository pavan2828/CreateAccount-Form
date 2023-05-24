let tableE = document.getElementById('table');
let jsonData;

// Function to fetch and load the JSON data
function fetchJSONData() {
    return new Promise((resolve, reject) => {
        fetch('usersData.json')
            .then(response => response.json())
            .then(data => {
                // Assign the loaded data to the global variable
                jsonData = data;
                resolve();
            })
            .catch(error => {
                reject(error);
            });
    });
}

function createRowInTable(i) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    td1.textContent = i.id;
    td2.textContent = i.username;
    td3.textContent = i.desgignation;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tableE.appendChild(tr);
}

// Call the fetchJSONData function to load the JSON data
fetchJSONData()
    .then(() => {
        // Access and manipulate the jsonData variable outside the function
        for (let i of jsonData) {
            createRowInTable(i);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Function to filter the table based on search input
function filterTable() {
    let searchValue = document.getElementById('Search').value.toLowerCase();
    let rows = tableE.getElementsByTagName('tr');

    for (let row of rows) {
        let id = row.cells[0].textContent
        let username = row.cells[1].textContent.toLowerCase();
        let designation = row.cells[2].textContent.toLowerCase();

        if (id.includes(searchValue)||
            username.includes(searchValue) ||
            designation.includes(searchValue)
        ) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}

// Add event listener to the search button
document.querySelector('button').addEventListener('click', filterTable);


