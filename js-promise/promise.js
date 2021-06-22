const pending = 'pending';
const fulfilled = 'fulfilled';
const rejected = 'rejected';


class Promise {
  constructor(executor) {
    this.state = pending;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    let resolve = value => {
      if (this.state === pending) {
        this.state = fulfilled;
        this.value = value;
        this.onResolvedCallbacks.forEach(fn => fn(this.value))
      }
      // this.state = fulfilled;
      // this.value = value;
    };
    let reject = reason => {
      if (this.state === pending) {
        this.state = rejected;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn(this.reason))
      }
    };

    try {
      executor(resolve, reject);      
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state === fulfilled) {
      onFulfilled(this.value)
    }

    if (this.state === rejected) {
      onRejected(this.reason)
    }

    if (this.state === pending) {
      this.onResolvedCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }
  }
}

module.exports = Promise