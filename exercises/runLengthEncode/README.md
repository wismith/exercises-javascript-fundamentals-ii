# Run-Length Encoding

This exercise is meant to explore the basic idea behind file compression using a very naive naive type of compression called ***run-length encoding***. Run-length encoding is often abbreviated RLE.

See [the Wikipedia entry on run-length encoding][wiki-run-length-encoding].

## How RLE Works

The idea behind run-length encoding is to take a string and replace all repeated sequences of characters with the number of times that character is repeated followed by the character itself.

Here are some examples:

| String                           | Run-length encoded string |
|:---------------------------------|:--------------------------|
| `WWWWWWAAAAAAWWWWWWAAAAAABBBBBB` | `6W6A6W6A6B`              |
| `ABABCCCC`                       | `1A1B1A1B4C`              |
| `ZZZZZZZZZZZZZZZZZ`              | `17Z`                     |
| `AJHRN`                          | `1A1J1H1R1N`              |

As you can see, the encoded strings contain all the information necessary to reconstruct the original string. Most of encoded strings are shortr, but some (like `AJHRN`) are actually longer.

Whether RLE-encoded strings are smaller than the original depends on what the strings look like. For some data it works very well, for other data it doesn't work well at all.

## The Spirit of Compression

RLE is a simple compression algorithm that highlights how more complicated compression algorithms work: take advantage of redundancies in the data to represent the same information using less space.

Because RLE can sometimes *increase* the size of your data, it's not a great general-purpose compression algorithm. That doesn't mean it shouldn't ever be used, only that it's use is situational. If you can guarantee the data is something RLE can compress well then it might be worth it.

RLE works great when there are large sections of repeated data. You can imagine using RLE to compress things other than text, e.g., images. In this case, "large sections of repeated data" might mean large runs of a single color in an image.

For example, most [fax machines][wiki-fax] use run-length encoding to compress the image before sending it over the phone line. This works well because faxed documents tend to be almost entirely white.

[wiki-run-length-encoding]: https://en.wikipedia.org/wiki/Run-length_encoding
[wiki-fax]: https://en.wikipedia.org/wiki/Fax
