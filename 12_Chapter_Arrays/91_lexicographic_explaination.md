## What is Lexicographic?

**Lexicographic** means dictionary order. Two strings are compared one character at a time from the left, and the first character that differs decides which one comes first. That's the order `sort()` uses by default.

```js
["banana", "apple", "cherry"].sort();   // [ 'apple', 'banana', 'cherry' ]
```

`"apple"` comes before `"banana"` because `a` comes before `b`, so the rest of the word doesn't matter.

**Why numbers sort "wrong":** without a compare function, `sort()` turns numbers into strings first and then compares them as text:

```js
[10, 1, 2].sort();   // [ 1, 10, 2 ]
```

- `"10"` vs `"2"`: the first characters are `"1"` and `"2"`, and `"1"` is smaller, so `"10"` comes first. The `0` is never looked at.
- `"1"` vs `"10"`: they match on `"1"`, then `"1"` runs out of characters. The shorter one comes first, the same way "car" comes before "cart" in a dictionary.

**Characters are compared by their character codes, not the alphabet you learned:**

| Character | Code |
|:---------:|:----:|
| `"0"` to `"9"` | 48 to 57 |
| `"A"` to `"Z"` | 65 to 90 |
| `"a"` to `"z"` | 97 to 122 |

So digits come before uppercase letters, and uppercase letters come before lowercase ones:

```js
["banana", "Apple", "cherry"].sort();   // [ 'Apple', 'banana', 'cherry' ]
["b", "B", "a", "A"].sort();            // [ 'A', 'B', 'a', 'b' ]
```

**The fixes:**
- **Numbers:** `.sort((a, b) => a - b)`
- **Text, ignoring case the way people expect:** `.sort((a, b) => a.localeCompare(b))`