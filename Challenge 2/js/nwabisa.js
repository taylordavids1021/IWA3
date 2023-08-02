// Export Nwabisa role data
const firstname = 'Nwabisa '
const surname = 'Gabe '
export const role = 'CEO'
// Inline data
const display = firstname + surname + role 
// Display data in html, over riding id content
document.getElementById('nwabisa').innerText = display