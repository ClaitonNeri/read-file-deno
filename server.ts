const filename = "./2003.json";

const file = await Deno.open(filename);
await Deno.copy(file, Deno.stdout);
file.close();

console.log(file);
