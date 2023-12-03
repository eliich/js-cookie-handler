const fs = require('fs');

function readAndModifyCookies(filePath) {
    try {
        let cookiesRaw = fs.readFileSync(filePath, 'utf8');
        let cookies = JSON.parse(cookiesRaw);

        cookies.forEach(cookie => {
            if (!['Strict', 'Lax', 'None'].includes(cookie.sameSite)) {
                cookie.sameSite = 'None';
            }
        });

        return cookies;
    } catch (e) {
        console.error(`An error occurred: ${e}`);
        return null;
    }
}

module.exports = { readAndModifyCookies }; // Export the function
