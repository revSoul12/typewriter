
//Loop through each character at a time
//Use process.stdout.write to eliminate break
//Add break in end of loop
//Set time delay in printing subsequent elements to 50ms

//MY CODE
const sentence = "hello there from lighthouse labs";
  for(let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      if (i < sentence.length - 1) {
        process.stdout.write(sentence[i]);
      } else if (i === sentence.length - 1) {
        process.stdout.write(sentence[i] + '\n');
      } 
    }, i * 50)
  }


//KEVIN Y'S CODE
/*
const sentence = "hello there from lighthouse labs";
​
  for(let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);  
    }, i*50)
  }
  setTimeout(() => {
    console.log('\n');
  }, sentence.length*50)
  
*/
