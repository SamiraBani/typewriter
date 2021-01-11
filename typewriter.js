const sentence = "hello there from lighthouse labs\n";
let count = 50;

for (const char of sentence) {
   setTimeout(() => {
      process.stdout.write(char);
    }, count)
    count += 50;
   
 }