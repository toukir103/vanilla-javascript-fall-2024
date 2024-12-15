const generateBtn = document.getElementById('calculate-btn');
const numberInput = document.getElementById('score');
const tableBody = document.getElementById('tableBody');
const resetBtn = document.getElementById('reset-btn');

resetBtn.addEventListener('click', function () {
    numberInput.value = '';
    tableBody.innerHTML = '';
});

function cleanTable() {
    tableBody.innerHTML = '';
}


generateBtn.addEventListener('click', function () {
    const num = parseInt(numberInput.value);
    cleanTable();
    generateTable(num);


});



function generateTable(num) {
    for (let i = 1; i <= 10; i++) {
        const tableRow = generateRow(num, i);
        tableBody.appendChild(tableRow);
    }

}

function generateRow(num, mult) {
    const tableRow = document.createElement('tr');
    const tableCells = [];
    for (let i = 1; i <= 5; i++) {
        const tableCell = document.createElement('td');
        tableCells.push(tableCell);

    }


    tableCells[0].innerText = num;
    tableCells[1].innerText = ' x ';
    tableCells[2].innerText = mult;
    tableCells[3].innerText = ' = ';
    tableCells[4].innerText = num * mult;

    for (let i = 0; i < 5; i++) {
        tableRow.appendChild(tableCells[i]);
    }
    return tableRow;
}


