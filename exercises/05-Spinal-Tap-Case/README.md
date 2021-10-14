# 📝Spinal Tap Case

1. Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


---

### 💡 Solution
1. `(?=[A-B])` = Matches a group after the main expression without including it in the result. good when using it for split.
2. replace(/([a-z])([A-Z])/, $1 $2), good for want to insert character between two matching regex in example we insert space.