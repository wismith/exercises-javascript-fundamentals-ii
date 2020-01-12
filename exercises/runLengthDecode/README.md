# Run-Length Decode

**Note**: Do [runLengthEncode](../runLengthEncode) first.

Let's write a function `runLengthDecode` that decompresses run-length encoded data. As with `runLengthEncode`, we'll assume that the original string didn't contain any numbers. This sidesteps any ambiguity in the run-length encoded data.

In general, the following condition should hold:

```javascript
runLengthDecode(runLengthEncode('Apple pies are delicious')) === 'Apple pies are delicious';
runLengthDecode(runLengthEncode(input)) === input;
```
