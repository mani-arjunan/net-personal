const fs = require('fs')

console.log(
  new URL(
    "https://panels-cdn.imgix.net/content/a~davidimel_fb27611e/Turbo~Mode.jpg?expires=1728262583176&fm=jpg&s=fd6696ac36f9d8805d0daae3b1aff01c",
  ).pathname,
);

// (async function () {
//   const d = await fetch(
//     "https://panels-cdn.imgix.net/content/a~davidimel_fb27611e/Turbo~Mode.jpg?expires=1728262583176&fm=jpg&s=fd6696ac36f9d8805d0daae3b1aff01c",
//   );
//
//   const a = await d.arrayBuffer();
//
//   console.log(Buffer.from(a))
//   console.log(a)
//   await fs.promises.writeFile('./sample.jpg', Buffer.from(a))
// })();

console.log('V'.charCodeAt(0))
