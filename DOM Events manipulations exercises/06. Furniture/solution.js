function solve() {
  let textAreas = Array.from(document.querySelectorAll('textarea'));
  let JSONText = textAreas[0].value;
  let furnitureObject = JSON.parse(JSONText);
  console.log(furnitureObject.name);

}