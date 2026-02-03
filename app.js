// unit 01

// readline is a MODULE in NodeJs for user interactions
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter your name: ", (name) => {
//   console.log(`My name is ${name}`);
//   rl.close();
// });

// rl.on("close", () => {
//   console.log("Interface closed !");
//   process.exit(0);
// });

// unit 02

// Write & Read a file with fs synchronously
const fs = require("fs");

// let inText = fs.readFileSync("./files/input.txt", "utf-8");
// console.log(inText);

// let content = "This is the output text";
// fs.writeFileSync("./files/output.txt", content);

// Write & Read a file with fs asynchronously
// fs.readFile("./files/text1.txt", "utf-8", (err1, data1) => {
//   console.log(data1);
//   fs.readFile(`./files/${data1}.txt`, "utf-8", (err2, data2) => {
//     console.log(data2);
//     fs.readFile(`./files/${data2}.txt`, "utf-8", (err2, data3) => {
//       console.log(data3);
//     });
//   });
// });
// console.log('This console log is a prove that this code is run asynchronously (because he run before the callback functions up !)')

// unit 03

// Creating simple web server
const http = require("http");
// const html = fs.readFileSync("./template/index.html", "utf-8");
// const server = http.createServer((req, res) => {
//   console.log("New request !");
// res.write('Hello from Node.js server')
//   res.end(html);
// });
// Start a server
// server.listen(8000, "127.0.0.1", () => {
//   console.log("Server has started !");
// });

// unit 04

// Creating routes in node js

// Converting a JSON file into JS objects READY to be used !
const products = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));

// Html files
const html = fs.readFileSync("./templates/index.html", "utf-8");
const productHtml = fs.readFileSync("./templates/product.html", "utf-8");
const productDetailsHtml = fs.readFileSync(
  "./templates/productDetails.html",
  "utf-8",
);

// Products array
// let productsHtmlArr = products.map((prod) => {
//   let output = productHtml.replace("{{%NAME%}}", prod.model);
//   output = output.replace("{{%STORAGE%}}", prod.storage);
//   output = output.replace("{{%RAM%}}", prod.ram);
//   output = output.replace("{{%PRICE%}}", prod.price);
//   output = output.replace("{{%AVAILABLE%}}", prod.available);

//   return output;
// });

// Reusable function
// function productsReusableHtml(template, prod) {
//   let output = template.replace("{{%NAME%}}", prod.model);
//   output = output.replace("{{%STORAGE%}}", prod.storage);
//   output = output.replace("{{%RAM%}}", prod.ram);
//   output = output.replace("{{%PRICE%}}", prod.price);
//   output = output.replace("{{%AVAILABLE%}}", prod.available);
//   output = output.replace("{{%CAMERA%}}", prod.camera);
//   output = output.replace("{{%BATTERY%}}", prod.battery);
//   output = output.replace("{{%ID%}}", prod.id);

//   return output;
// }

// Creating a custom module in the productsReusableHtml.js file
const productsReusableHtml = require('./modules/productsReusableHtml')

// The routes is here :
let url = require("url");
// const server = http.createServer((req, res) => {
  // Extracting query string from a url using a parse() method
//   let { query, pathname: path } = url.parse(req.url, true);

//   if (path === "/" || path === "/home") {
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     });
//     res.end(html.replace("{{%CONTENT%}}", "This is the Home page"));
//   } else if (path === "/contact") {
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//     });
//     res.end(html.replace("{{%CONTENT%}}", "This is the Contact page"));
//   } else if (path === "/products") {
//     if (!query.id) {
//       res.writeHead(200, {
//         "Content-Type": "text/html",
//       });
//       let productsHtmlArr = products.map((prod) => {
//         return productsReusableHtml(productHtml, prod);
//       });
//       res.end(html.replace("{{%CONTENT%}}", productsHtmlArr.join("")));
//     } else {
//       let prod = products[query.id];
//       let productDetailsHtmlResponse = productsReusableHtml(
//         productDetailsHtml,
//         prod,
//       );
//       res.end(html.replace("{{%CONTENT%}}", productDetailsHtmlResponse));
//     }
//   } else {
//     res.writeHead(404, {
//       "Content-Type": "text/html",
//     });
//     res.end(html.replace("{{%CONTENT%}}", "Error 404: Page not found"));
//   }
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Server has started !");
// });


// unit 05

// The event driven architecture (event emitter => event listener => event handler)

// event emitter 
const server = http.createServer()

// event listener 'on()' / event handler 'callback function'
server.on('request', (req, res) => {
    // Extracting query string from a url using a parse() method
  let { query, pathname: path } = url.parse(req.url, true);

  if (path === "/" || path === "/home") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(html.replace("{{%CONTENT%}}", "This is the Home page"));
  } else if (path === "/contact") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end(html.replace("{{%CONTENT%}}", "This is the Contact page"));
  } else if (path === "/products") {
    if (!query.id) {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      let productsHtmlArr = products.map((prod) => {
        return productsReusableHtml(productHtml, prod);
      });
      res.end(html.replace("{{%CONTENT%}}", productsHtmlArr.join("")));
    } else {
      let prod = products[query.id];
      let productDetailsHtmlResponse = productsReusableHtml(
        productDetailsHtml,
        prod,
      );
      res.end(html.replace("{{%CONTENT%}}", productDetailsHtmlResponse));
    }
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
    });
    res.end(html.replace("{{%CONTENT%}}", "Error 404: Page not found"));
  }
})

server.listen(8000, "127.0.0.1", () => {
  console.log("Server has started !");
});


const events = require('events')

let myEmitter = new events.EventEmitter()

myEmitter.on('user created', (id, name) => {
    console.log(`The user ${name} with id ${id} has been created !`)
})

myEmitter.emit('user created', 1, 'Imad')