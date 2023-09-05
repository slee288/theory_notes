const bcrypt = require("bcrypt");

async function saltPassword() {
    const saltedPw = await new Promise((resolve, reject) => {
        bcrypt.genSalt(3, (err, salt) => {
            if(err) reject(err);
            resolve(new Promise((resolve, reject) => {
                resolve(async () => await bcrypt.hash("this is password", salt));
            }))
        })
    })

    return saltedPw;
}

(async function() {
    const newSalt = await saltPassword();
    newSalt().then(hash => console.log("hash value", hash)).catch(err => console.error(err))
})()