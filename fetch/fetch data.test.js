const fetchData = require('./fetch data');

test('the data is received', () => {
  return fetchData().then(data => {
    expect(data).toBe('data received');
  });
});

