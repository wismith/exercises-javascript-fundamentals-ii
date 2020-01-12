# Format Seconds

We're doing to write a function called `formatSeconds` that takes an integer (representing some number of seconds)  and returns a nicely-formatted string describing larger chunks of time.

It will work like this:

```javascript
formatSeconds(45);      // => '45s'
formatSeconds(175);     // => '2m 55s'
formatSeconds(1234);    // => '20m 34s'
formatSeconds(10815);   // => '3h 0m 15s';
formatSeconds(12345);   // => '3h 25m 45s'
formatSeconds(1210459); // => '2w 0h 14m 19s'
```

Imagine you wrote a countdown clock program. Underneath the hood, it will likely hold a count of the number of seconds remaining in the countdown.

As the clock counts down, you'd probably want to display the something more user-friendly than the absolute number of seconds left.
