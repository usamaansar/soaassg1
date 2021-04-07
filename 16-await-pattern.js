const { readFile, writeFile } = require('fs').promises
/*const util = require('util')
 const readFilePromise = util.promisify(readFile)
 const writeFilePromise = util.promisify(writeFile)*/

const start = async () => {
  try {
    const first = await readFile('./content/subfolder/first.txt', 'utf8')
    const second = await readFile('./content/subfolder/second.txt', 'utf8')
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
     const result_mind=readFile('./content/result-mind-grenade.txt','utf8');
     console.log(result_mind);
   // console.log(first, second)
     // console.log('1')
    
  } catch (error) {
    console.log('h')
  }
}

start()

 /*const getText = (path) => {
   return new Promise((resolve, reject) => {
     readFile(path, 'utf8', (err, data) => {
        if (err) {
         reject(err)
      } else {
       resolve(data)
     }
    })
  })
 }
 getText('./content/subfolder/first.txt')
  .then((result) => console.log(result))
   .catch((err) => console.log(err))*/
