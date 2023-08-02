// Export Nwabisa role data
const firstname_b = 'Alex '
const surname_b = 'Naidoo '
export const role_b = 'Head of Marketing'
// Inline data
const display_b = firstname_b + surname_b + role_b
// Display data in html, over riding id content
document.getElementById('alex').innerText = display_b