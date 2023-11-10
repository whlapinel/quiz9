window.addEventListener("load", chainPromises);

async function chainPromises() {
  try {
    result1 = await func1();
    result2 = await func2(result1);
    result3 = await func3(result2);
  } 
  catch(err) {
    console.log(err.message);
  }
}

  function func1() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        console.log('Time flies like an arrow.');
        resolve();
      }, 1000);
    });
  }

  function func2() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        console.log('Fruit flies like?');
        resolve();
      }, 1000);
    });
  }

  function func3() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        console.log('A banana!');
        resolve();
      }, 2000);
    });
  }



