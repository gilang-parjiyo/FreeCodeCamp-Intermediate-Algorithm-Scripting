# 📝Convert HTML Entities

1. Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
2. In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
3. The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

---

### 💡 Solution app.js **SwitchCase**

1. Using switch case to find matches character to HTML entities.
2. Using array braces to change character 
---
### 💡 Solution 1 **Object and forin** 
1. Using object instead of switch case.
2. forIn to loop trough string array then loop trough object entities to find matches character.
---
### 💡 Solution 2 **Object and map**
1. Object to hold data entities.
2. Map with operator || 
```js
    .map(entity => entities[entity] || entity)
```
### 💡 Solution 3 **Object and regex**
1. Object to hold entities value.
2. Regex with callback function to replace matches character with entities
```js
    return str.replace(/[<>&"']/g, (entity) => entities[entity])
```
 







