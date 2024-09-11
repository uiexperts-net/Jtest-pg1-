function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('data received');
      }, 1000);
    });
  }
  
  module.exports = fetchData;
  