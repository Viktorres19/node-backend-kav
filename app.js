const fs = require('fs');

fs.readFile('./test.txt', 'utf-8', (error, data) => {
    // fs.writeFile('./files/test2.txt', `${data} New text!`, (error) => { //it will be an error if forder or file don't exist
    /* fs.writeFile('./test2.txt', `${data} New text!`, (error) => {
        error ? console.log(error) : null
    }); */
    // and now 1st create firectory and then push a file in here
    /* fs.mkdir('./files', () => {
        fs.writeFile('./files/test2.txt', `${data} New text!`, (error) => { // 2nd create file in it
            error ? console.log(error) : null
        });
    }); */

    // 0.1 clean up file
    if (fs.existsSync('./files/test2.txt')) {
        fs.unlink('./files/test2.txt', () => {});
    }
    // 0.2 clean up folder
    if (fs.existsSync('./files')) {
        fs.rmdir('./files', () => {});
    }
    // to be more precise we can use 2 sync operations
    fs.mkdirSync('./files', () => {}); // 1 create folder
    // thanks to this I use only order of operations without embeddedness
    fs.writeFileSync('./files/test2.txt', `${data} New text!`, (error) => { // 2 add file
        error ? console.log(error) : null
    });
    // 3 delete file
    setTimeout(() => {
        // check if file exists
        if (fs.existsSync('./files/test2.txt')) {
            fs.unlink('./files/test2.txt', () => {});
        }
    }, 4000);
    // 4 delete folder
    setTimeout(() => {
        if (fs.existsSync('./files')) {
            fs.rmdir('./files', () => {});
        }
    }, 6000);

});

// to work with directories and folders it exists method mkdir
/* fs.mkdir('./files', () => { // will be created 'files' directory

}); */