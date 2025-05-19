import * as cheerio from "cheerio";
import axios from "axios";

let arrayRecipes = [];

const createRecipe = (title, description, $) => {
  for (let index = 0; index < title.length; index++) {
    let cleanedDescription = $(description[index])
      .text()
      .replace(/[\n\t]/g, "")
      .trim();
    let recipe = {
      name: $(title[index]).text(),
      description: cleanedDescription,
    };
    arrayRecipes.push(recipe);
  }
  console.log(arrayRecipes);
};

const main = async () => {
  for (let index = 0; index <= 3; index++) {
    const cheerioDocsResponse = await axios.get(
      `https://paulinacocina.net/recetas/page/${index}`
    );
    const cheerioDocs = cheerioDocsResponse.data;
    const $ = cheerio.load(cheerioDocs);

    const recipeTitle = $("h3.elementor-heading-title").toArray();
    const recipeDescription = $(
      `div > div.elementor-widget-theme-post-excerpt > div`
    ).toArray();

    createRecipe(recipeTitle, recipeDescription, $);
  }
};

main();
