// import Tasks, { TaskStatus } from "./task.js";
//
// const options = [
// ];
//
// const args = process.argv.slice(2); // Probably change this to 1 if its not through pnpm and through the bin but whatever
// const option = options.find((value) => value === args[0]);
//
console.log("GH");
try {
  const resp = await fetch("https://api.github.com/users/EllisTran/events");
  const data = await resp.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
