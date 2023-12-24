const Befunge = require('befunge93');
const fs = require('fs');
const directoryPath = "/root/app/main.bf"

if (!directoryPath) {
  console.error('Veuillez spécifier un chemin de répertoire en argument.');
  process.exit(1);
}

async function main() {
    const befunge = new Befunge();
    const code = fs.readFileSync(directoryPath, 'utf8');
    befunge.run(code).then((result) => {
        console.log(result);
    }).catch(() => {
        console.error("");
    });
}

main();
