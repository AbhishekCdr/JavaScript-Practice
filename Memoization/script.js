// Memoization is a form of caching where the return value of a function is cached based on its parameters. If the parameter of that function is not changed, the cached version of the function is returned.

function memoizedAddTo256() {
  var cache = {};

  return function (num) {
    if (num in cache) {
      console.log("cached value");
      return cache[num];
    } else {
      cache[num] = num + 256;
      return cache[num];
    }
  };
}

var memoizedfunc = memoizedAddTo256();

console.log(memoizedfunc(20));
console.log(memoizedfunc(20));

//Note- Although using memoization saves time, it results in larger consumption of memory since we are storing all the computed results
