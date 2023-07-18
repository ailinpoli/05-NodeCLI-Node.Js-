const startTime = new Date();

setTimeout(function () {
  const endTime = new Date();
  console.log("Time elapsed: ", endTime - startTime, "ms");
}, 500);

while (new Date() - startTime < 1200) {}
