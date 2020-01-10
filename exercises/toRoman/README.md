# Convert Numbers to Roman Numerals

Let's write a function called `toRoman` that converts a positive integer to its representation in Roman numerals.

Here's a table of Roman numerals and their corresponding numerical value:

```text
I   1
V   5
X   10
L   50
C   100
D   500
M   1000
```

## Contents <!-- omit in TOC -->

- [Iterations](#iterations)
  - [[v1] Additive Roman Numerals](#v1-additive-roman-numerals)
  - [[v2] Subtractive Roman Numerals](#v2-subtractive-roman-numerals)
- [Writing Roman Numerals](#writing-roman-numerals)
  - [Additive Roman Numerals](#additive-roman-numerals)
  - [Subtractive Roman Numerals](#subtractive-roman-numerals)
- [Learning Goal: Numbers vs Representation](#learning-goal-numbers-vs-representation)

## Iterations

There are two closely-related systems of Roman numerals: additive Roman numerals and subtractive Roman numerals.

Additive Roman numerals are simpler and we will figure out how those work first. If you learned Roman numerals in school you probably learned subtractive Roman numerals. We'll figure those out second.

Complete the iterations in order. Don't rush through them. Anything that confuses you in the first iteration will still confuse you in the second iteration, but it will be harder to address because there's more going on.

If the first iteration seems "too easy", great! Verify that belief by completing it quickly.

### [v1] Additive Roman Numerals

Create a version of `toRoman` that supports additive Roman numerals as described in the [Additive Roman Numerals](#additive-roman-numerals) section below.

### [v2] Subtractive Roman Numerals

Create a version of `toRoman` that supports subtractive Roman numerals as described in the [Subtractive Roman Numerals](#subtractive-roman-numerals) section below.

## Writing Roman Numerals

Below are descriptions of additive and subtractive Roman numerals. The [Wikipedia page on Roman numerals][wiki-roman-numerals] might also be useful.

### Additive Roman Numerals

Here are some examples of Roman numerals, their values, and a description of how that value was calculated:

```text
     I =    1 = 1
    II =    2 = 1 + 1
   III =    3 = 1 + 1 + 1
  IIII =    4 = 1 + 1 + 1 + 1
     V =    5 = 5
    VI =    6 = 5 + 1
    XI =   11 = 10 + 1
   XVI =   16 = 10 + 5 + 1
MMDLXI = 2561 = 1000 + 1000 + 500 + 50 + 10 + 1
CLXXII =  172 = 100 + 50 + 10 + 10 + 1 + 1
```

Each character in a Roman numeral corresponds to a number. To calculate what value the entire numeral, we translate each character into a number and then add those numbers up.
The entire numeral is written left-to-right from largest numeral to smallest.

To convert a number in decimal to a Roman numeral, we go the opposite direction. How many M's do we need? How many D's? How many C's? etc.

### Subtractive Roman Numerals

Writing `VIIII` to represent 9 might feel excessive. There's a "subtractive" convention that allows us to write more compact numerals: if a smaller numeral precedes a larger numeral, we subtract the smaller from the larger rather than adding them.

For example, we would write `IV` for 4 and `IX` for 9. The numbers 1 through 20 would be written:

```text
 I  II  III  IV  V  VI  VII  VIII  IX  X
XI XII XIII XIV XV XVI XVII XVIII XIX XX
```

Likewise, `XL` represents 40, `XC` represents 90, `CD` represents 400, and `CM` represents 900. Since there are no numerals above `M`, something like 4000 is still `MMMM`.

Some examples:

```text
 39  =     XXXIX =   10 +   10 +  10 +  9
246  =    CCXLVI =  100 +  100 +  40 +  5 +  1
789  = DCCLXXXIX =  500 +  100 + 100 + 50 + 10 + 10 + 10 + 9
2421 =   MMCDXXI = 1000 + 1000 + 400 + 10 + 10 +  1
```

**Note**: This can be tricky! Translate some examples decimal numbers by hand before trying to write code. Pay close attention to the choices you're *actually* making. How do you know when to write something like `MCM` for 1900? What are you seeing in the decimal representation that tells you when subtractive notation is called for?

## Learning Goal: Numbers vs Representation

The goal of this exercise is to drive home the difference between a value and how a value is represented. We can represent the number 5 with many symbols:

- 5 (decimal)
- 101 (binary)
- five (English)
- IIIII (tally marks)
- V (Roman numerals)
- ה (Hebrew)
- 五 (Japanese and Chinese)
- A child holding up five fingers when asked, "How old are you?"

These are all *representations* of the number 5 (even the symbol "5" itself). 5 is an abstract concept which represents those properties shared by all possible groups-of-five.

The word is not the thing. The map is not the terrain. *[Ceci n'est pas une pipe][wiki-treachery-of-images].

Different representations have their advantages and disadvantages. Tally marks are great if you're trying to count the number of visitors as they arrive, but not so great if you're trying to multiply large numbers.

[wiki-roman-numerals]: https://en.wikipedia.org/wiki/Roman_numerals
[wiki-treachery-of-images]: https://en.wikipedia.org/wiki/The_Treachery_of_Images
