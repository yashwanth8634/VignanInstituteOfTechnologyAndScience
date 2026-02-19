
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'facilities.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Fix: Remove backslash before backtick
// In regex, backslash is special, so \\ matches one backslash.
// We want to match literal backslash followed by literal backtick.
// So /\\`/g matches \`
content = content.replace(/\\`/g, '`');

// Also remove backslash before ${ just in case
content = content.replace(/\\\$\{/g, '${');

fs.writeFileSync(filePath, content);
console.log('Fixed facilities.ts');
