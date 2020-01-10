# Convert Number to English Words

We're going to write a function `numberToEnglish` that takes a non-negative integer as input and returns a string containing the English equivalent.

For example:

```javascript
numberToEnglish(100);     // => 'one hundred'
numberToEnglish(5491);    // => 'five thousand four hundred ninety one'
numberToEnglish(12345);   // => 'twelve thousand three hundred forty five'
numberToEnglish(9456012); // => 'nine million four hundred fifty six thousand twelve'
```

## Contents <!-- omit in toc -->

- [Start Simple](#start-simple)
- [(Possibly) Helpful Functions](#possibly-helpful-functions)
- [Iterations](#iterations)
  - [[v1] Support for 0 to 19](#v1-support-for-0-to-19)
  - [[v2] Support for 0 to 99](#v2-support-for-0-to-99)
  - [[v3] Support for 0 to 999](#v3-support-for-0-to-999)
  - [[v4] Support for 0 to 999999](#v4-support-for-0-to-999999)
  - [[v5] Support for 0 to 999999999 and above.](#v5-support-for-0-to-999999999-and-above)

## Start Simple

Remember, if you're getting lost in the code:

1. Slow down
1. Work out simple examples you know you can do without a computer
1. Pay close attention to what you're doing to solve the problem and why

## (Possibly) Helpful Functions

You might find these built-in functions helpful:

1. [Math.floor][mdn-math-floor]
1. [The modulus/remainder operator: `%`][mdn-remainder]

## Iterations

This exercise is complex enough that it's worth tackling special cases first before we try to tackle the general case.

### [v1] Support for `0` to `19`

This iteration is complete. See [numberToEnglish.js](./numberToEnglish.js).

We wrote a helper function called `smallNumberToEnglish` that takes in a number below 20 and returns the appropriate string. The function throws an error if you try to give it a number larger than 19.

Rather than using 20 lines of `if/else` statements, it uses an array of English names as a lookup table. That is:

- The string at index `0` of the lookup array is `'zero'`
- The string at index `1` of the lookup array `'one`
- The string at index `14` of the lookup array is `'fourteen'`
- etc.

When dealing with many consecutive numbers, an array is often clearer and more concise than a long list of `if/else` conditionals.

### [v2] Support for `0` to `99`

Add support for *any* one-or-two-digit number, not just those smaller than 20. You are free to achieve this however you want:

1. Modify `smallNumberToEnglish` to support it directly
1. Create another helper function to handle numbers 20 and up that calls `smallNumberToEnglish` to do its work
1. Something else of your design

If you find yourself writing logic to handle the case where `num` is `0` in many locations, consider handling it right at the top of `numberToEnglish`. If you do that then you can guarantee that `num > 0` when you call `smallNumberToEnglish(num)`.

### [v3] Support for `0` to `999`

Add support for numbers smaller than 1,000. What would it take to to modify `smallNumberToEnglish` to handle 3-digit numbers? What about handling

### [v4] Support for `0` to `999999`

Add support for numbers smaller than 1,000,000.

### [v5] Support for `0` to `999999999` and above.

By this point, you should be within striking distance of the the general pattern. Add support for more powers of 1000 (million, billion, trillion, etc.) You choose how large of a number to support.

[mdn-math-floor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
[mdn-remainder]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder
