const path = require('path')
const fs = require('fs')


const folder1800 = path.join(__dirname, '1800');
const folder2000 = path.join(__dirname, '2000');
const folderboys = path.join(__dirname, 'boys');
const foldergirls = path.join(__dirname, 'girls');


const move = (fromPath, toPath) => {
    fs.readdir(fromPath, (err, data) => {
        data.forEach(file => {
            fs.rename(path.join(fromPath, file), path.join(toPath, file), () => {
            })

        });

        const sortByGender = (dirPath, boysDir, girlsDir) => {
            fs.readdir(dirPath, (err, files) => {
                files?.forEach(file => {
                    fs.readFile(path.join(dirPath, file), (err, data) => {
                        const {gender} = JSON.parse(data);
                        move(dirPath, gender === 'male' ? boysDir : girlsDir, file);
                    })
                })
            })

    };

        sortByGender(folder2000,foldergirls,folderboys);
        sortByGender(folder1800,folderboys,foldergirls);

         // move(folder1800, folder2000);
         // move(folder2000, folder1800);


