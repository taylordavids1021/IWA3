// Export Nwabisa role data
const firstname_a = 'Johannes '
const surname_a = 'Potgieter '
export const role_a = 'Intern'
// Inline data
const display_a = firstname_a + surname_a + role_a; 
// Display data in html, over riding id content
document.getElementById('johannes').innerText = display_a