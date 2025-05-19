import * as cheerio from "cheerio";
import * as axios from "axios";

const main = () => {
  const $ = cheerio.load('<h2 class="title">Hello world</h2>');
  console.log("Hello");
};

main();
