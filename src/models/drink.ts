export class Drink{
  name: string;
  image: string;
  ingredients: string;
  howtomix: string;

  constructor( name, image, ingredients, howtomix){
    this.name = name;
    this.image = image;
    this.ingredients = ingredients;
    this.howtomix = howtomix;
    return this;
  }

}
