export function setupCounter() {
  // string
  let name = "Sarah";
  console.log(name)
  // name = 2;
  // name = true;

  // number
  let num = 2;
  console.log(num)
  // num = "Two";


  // boolean
  let isPresent = true;
  console.log(isPresent);
  // isPresent = 2;

  // arrays
  let arr = [1, 2, 3, 4, 5];
  console.log(arr);
  // arr = "a";

  // objects
  let obj = {name: "sarah", age: 20};
  console.log(obj);
  // obj = 2;

  // unions
  let age: number | string | boolean;
  age = 3;
  age = "Two";
  age = true;
  console.log(age);

  // type aliases
  // cannot be extended
  type Animal = {
    name: string;
    breed: string;
    age: number;
    isAlive: boolean;
  }
  function exampleAnimal(anime: Animal){
    console.log("This cute animal is called " + anime.name + " and it is a  " + anime.breed + " aged " + anime.age + " years old.")
  }
  exampleAnimal({name: "Luna", breed: "Scotish Cat",age: 4, isAlive: true })

  // interfaces
  interface Pet {
    name: string;
    owner: string;
    age: number
  }
  function getPet(pet: Pet){
    console.log("This pet is called " + pet.name + " owned by " +  pet.owner+ " and it is " + pet.age + " years old.")
  }
  getPet({name: "Debby", owner: "Ken", age: 5})
  
  interface Dog extends Pet {
    color: string
  }
  function getDog(dog: Dog){
    console.log("This dog is called " + dog.name + " and it is " + dog.color + " in color." )
  }
  getDog({name: "Bosco", owner: "Tim", age: 8, color: "brown"})
}
