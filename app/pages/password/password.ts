const table = document.getElementById('table');
const tableContainer = document.getElementById('TableContainer');
const subTableContainer = document.getElementById('SubContainer');
const tbody = document.getElementById('tableBody');
const addBtn = document.getElementById('addBtn');

export function handleAddData(){
    const platform = prompt('Enter platform name');
    const username = prompt('Enter username');
    const password = prompt('Enter password');
    
    const newRow = document.createElement('tr');
    newRow.className = 'TableRow w-full h-10 text-xs border border-black';
    
    const platformCell = document.createElement('td');
    platformCell.className = 'TableCell w-1/4 h-full text-center border border-black';
    platformCell.textContent = platform;
    
    const usernameCell = document.createElement('td');
    usernameCell.className = 'TableCell w-1/4 h-full text-center border border-black';
    usernameCell.textContent = username;
    
    const passwordCell = document.createElement('td');
    passwordCell.className = 'TableCell w-1/4 h-full text-center border border-black';
    passwordCell.textContent = password;
    
    const editCell = document.createElement('td');
    editCell.className = 'TableCell w-1/4 h-full text-center border border-black';
    
    const editBtn = document.createElement('button');
    editBtn.className = 'EditBtn w-full h-9 font-mono bg-transparent lg:text-sm text-gray-600 hover:text-zinc-800 min-w-fit rounded-full flex items-center justify-center';
    editBtn.type = 'submit';
    editBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7m0-7h7m-7-7V2m0 7H5m7 0V5" />
        </svg>
        Edit
    `;
    
    editCell.appendChild(editBtn);
    newRow.appendChild(platformCell);
    newRow.appendChild(usernameCell);
    newRow.appendChild(passwordCell);
    newRow.appendChild(editCell);
    
    // if (tbody){
    //     tbody.appendChild(newRow);
    // }
    if (table && tbody){
        tbody.appendChild(newRow);
        table.appendChild(tbody);
    }
}