const exec = require('child_process').exec;
// find duplicates
// concat these first and remove the other file
// then move the files to the correct fodlder 
exec('mv -i ~/Desktop/notesy/* ~/Desktop/notesyMacBookPro/', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
	process.argv.forEach((val, index) => {
		  console.log(`${index}: ${val}`);
	});
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

//alias imac="mv -i ~/Desktop/notesyMacBookPro/* ~/Desktop/notesy/"
//something along these lines to make my alias still work
//alias macbookpro="node ~/Desktop/test.js -i ~/Desktop/notesy/* ~/Desktop/notesyMacBookPro/"
