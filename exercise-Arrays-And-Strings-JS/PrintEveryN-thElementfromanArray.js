function returnNthElm(input, num) {
  for (let i = 0; i < input.length; i++) {
    if (i % num == 0) {
      console.log(input[i]);
    }
  }
}


returnNthElm(["dsa", "asd", "test", "tset"], 2);
