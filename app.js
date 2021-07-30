const myModule = require('./data.js');

console.log(">>> Section 1 result below")

// return records with count more than three and required reason
const filteredArray = myModule.send_log_data.filter((element) => {
  return element.count > 3 && (element.reason === 'sendFailure' || element.reason === 'buildError');
})

// filter out duplicates and return only the sendFailure one
const result = filteredArray.filter((v,i,a)=>a.findIndex(t=>(t.emailName === v.emailName && t.count===v.count && t.reason === "sendFailure"))===i)

// display result
console.log(result);


console.log(">>> Section 2 result below")
// copying directory with its file structure
const { promises: fs } = require("fs")
const path = require("path")

async function copyDir(src, dest) {
    await fs.mkdir(dest, { recursive: true });
    let entries = await fs.readdir(src, { withFileTypes: true });

    for (let entry of entries) {
        let srcPath = path.join(src, entry.name);
        let destPath = path.join(dest, entry.name);

        entry.isDirectory() ?
            await copyDir(srcPath, destPath) :
            await fs.copyFile(srcPath, destPath);
    }
};
copyDir("./prod", "./backup");
console.log("Backup folder copied Successfully!");

// copying content from dev to prod
const fse = require("fs");
const src = "./dev/components/cta.txt";
const dest = "./prod/components/cta.txt";

fse.copyFile(src, dest, (error) => {
  // incase of any error
  if (error) {
    console.error(error);
    return;
  }

  console.log("Content copied Successfully!");
});

console.log(">>> Section 3 result below")

// retreiving content
const devContent = myModule.template_data.dev_env[0].content
const prodContent = myModule.template_data.prod_env[0].content

// pushing content to dev html file
fse.writeFile("./dev/templates/transactional.html", devContent, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The development content was inserted!");
});

// pushing content to prod html file
fse.writeFile("./prod/templates/transactional.html", devContent, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The production content was inserted!");
});
