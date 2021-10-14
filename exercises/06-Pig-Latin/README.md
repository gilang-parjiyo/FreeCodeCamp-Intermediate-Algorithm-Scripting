# 📝Pig Latin

1. Pig Latin is a way of altering English Words. The rules are as follows:

2. If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
   
3. If a word begins with a vowel, just add way at the end.


---

### 💡 Solution app.js chain ternary operation
1. chain ternary operation : 
    ```js
    return conditional ? true : conditional ? true : false
    ````
---

### 💡 Solution 1 IndexOf and Regex
1. don't forget to use * **`Matches 0 or more of the preceding token.`** if you want to match more than one character at once.
2. don't forget to use + **`Matches 1 or more of the preceding token.`** if you wnat to match at least one.
3. don't forget to use flags **g** to match more than one character.
4. This how to use indexOf from match()
    ```js
    str.indexOf(str.match(/\w/)[0])
    ````
---

### 💡 Solution 2 substring
1. get character in match()
   ```js
   let consonant = str.match(^[^AIUEO]/)[0];
   ```
2. using substring to get character after matches pattern.
   ```js
   str.substring(consonant.length);
   ``` 
---

### 💡 Solution 3 Chain Replace
1. **$&** will insert the matched substing 
    ```js
    return string.replace(/^[AIUEO]\w*/i, '$&way')
    ```
2. the difference when using * and + is : 
    ```js
        .replace(/(^[^AIUEO]+)(\w*)/i, "$2$1ay") // if using 'rhytm' and pattern * will return rhythm
        .replace(/(^[^AIUEO]+)(\w+)/i, "$2$1ay") // if using 'rhytm' and pattern + will return mrhyth because at least one character will be used by pattern +;
    ```
3. The replacement string can include the following special replacement patterns
- `$$`	Inserts a "$".
- `$&`	Inserts the matched substring.
- $`	Inserts the portion of the string that precedes the matched substring.
- $'	Inserts the portion of the string that follows the matched substring.

---
### 💡 Solution 4 Recrusive

```js
function translatePigLatin(str = '', charpos = 0) { // Charpos track character position
    return ['a', 'i', 'u', 'e', 'o'].includes(str[0]) ? // Check first character is vowel ?
        str + (charpos === 0 ? 'way' : 'ay') // Condition add way if first character vowel else add ay;
        : charpos === str.length // check there is vowel ?
            ? str + 'ay' // add ay if there is no vowel
            : translatePigLatin(str.slice(1) + str[0], charpos += 1) // Invoke tranlatePiglatin with move first character to last and update character position.
}
```





