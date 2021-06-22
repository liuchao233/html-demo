
var Promise = require('./promise')

test('sync executor onFulfilled', () => {
  const onFulfilled = jest.fn();
  const onRejected = jest.fn();
  new Promise(function(resolve, reject) {
    resolve("hello")
  })
  .then(onFulfilled, onRejected)
  expect(onFulfilled).toBeCalledWith(expect.stringMatching('hello'))
  expect(onRejected).not.toBeCalled();
})  

test('sync executor onRejected', () => {
  const onFulfilled = jest.fn();
  const onRejected = jest.fn();
  new Promise(function(resolve, reject) {
    reject("hello")
  })
  .then(onFulfilled, onRejected)
  expect(onRejected).toBeCalledWith(expect.stringMatching('hello'))
  expect(onFulfilled).not.toBeCalled();
})

test('sync executor can catch error', () => {
  const onFulfilled = jest.fn();
  const onRejected = jest.fn();
  
  new Promise(function(resolve, reject) {
    throw new Error("hello")
  })
  .then(onFulfilled, onRejected)
  expect(onRejected).toBeCalledWith(expect.any(Error))
  expect(onFulfilled).not.toBeCalled();
})

// async

test('async executor onFulfilled', () => {
  const onFulfilled = jest.fn();
  const onRejected = jest.fn();
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve("hello")
    });
  })
  .then(onFulfilled, onRejected)

  setTimeout(() => {
    expect(onFulfilled).toBeCalledWith(expect.stringMatching('hello'))
    expect(onRejected).not.toBeCalled();
  });
})  

test('async executor onRejected', () => {
  const onFulfilled = jest.fn();
  const onRejected = jest.fn();
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      reject("hello")
    });
  })
  .then(onFulfilled, onRejected)
  setTimeout(() => {
    expect(onRejected).toBeCalledWith(expect.stringMatching('hello'))
    expect(onFulfilled).not.toBeCalled();
  });
})

// test('async executor can catch error', () => {
//   const onFulfilled = jest.fn();
//   const onRejected = jest.fn();
  
//   new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       throw new Error("hello")
//     });
//   })
//   .then(onFulfilled, onRejected)
//   setTimeout(() => {
//     expect(onRejected).toBeCalledWith(expect.any(Error))
//     expect(onFulfilled).not.toBeCalled();
//   });
// })