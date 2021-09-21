const spinArray = ['/ ', '- ', '\\ ', '| ', '\/ ', '\\ ', '| \n'];
let counter = 300;
for (let i = 0 ;i < spinArray.length; i++){
  setTimeout(() => {
    process.stdout.write('\r'+spinArray[i]);
  },  counter);
  counter += 200;
}