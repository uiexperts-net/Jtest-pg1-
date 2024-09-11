const getUser = require('./user');

test('user object should have a name and age', () => {
  const user = getUser();
  expect(user).toEqual({
    name: 'John Doe',
    age: 30,
  });
});

