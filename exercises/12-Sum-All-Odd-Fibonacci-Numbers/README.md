# 📝Sum All Odd Fibonacci Numbers

1. Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
2. The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers
3. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

---

### 💡 Solution app.js **While, Array, Filter, Reduce**

1. Create condition when num < 0.
2. create variable **to hold step array**.
3. While loop to set next fib and unshift to arrFib.
4. Using array filter and reduce to sum all odd number fibonanci 
---

### 💡 Solution 1 **While Loop**
1. create variable setup for curr, prev and result;
2. while loop with condition if number odd add to result.
3. set previous and next loop

### 💡 Solution 2 **For Loop**
1. For loop with increment next and current fibonancy in for parentheses 
```js
     for (let n1 = 0, n2 = 1; n2 <= num; n2 += n1, n1 = n2 - n1)
```
2. Formula to add odd numbers to sumOddFibs, without using if statement
```js
sumOddFibs += n2 * (n2 % 2)
```








