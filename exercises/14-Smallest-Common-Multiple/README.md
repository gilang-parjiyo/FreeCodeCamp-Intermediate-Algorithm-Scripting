# 📝Smallest Common Multiple

1. Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
2. The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

---

### 💡 Solution app.js **WhileLoop Every**

1. Create Setup sort array, step, rangee of array.
2. Create variable to hold increment smallest common value
3. While loop with array.every method to check every number  is divisible.
---

### 💡 Solution 1 **Formula UpperBound & ForLoop**
1. Setup min, max, range of array
2. Create upperBound smalles common possible.
```js
for (let i = min; i <= max; i++) upperBound *= i
```
3. Nested for loop to check multiple value is divisible by all number in range.
4. Check if range and number of divisble number is equal.
---

### 💡 Solution 2 **ES6 Loop Every**
1. Create setup min, max, range, upperbound
2. For loop and array every method to check all number in range is divisible.
### 💡 **Note**
New 
```js
let range = Array(max - min + 1).fill(0).map((v, i) => i + min)
```







