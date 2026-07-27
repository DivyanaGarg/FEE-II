const a = {
    name: "Divyana",
    city: "Chandigarh"
}
console.log(Object.keys(a));
console.log(Object.values(a));
console.log(Object.entries(a)); //2D matrix with key value pair

Object.keys(a).forEach((item) => console.log(a[item]));
Object.keys(a).forEach((_, index) => console.log(a[index]));


//Object destructuring
const {name} = a;
console.log(name);


//DOM - document object module
//internal process, all tags behave like objects and nodes as well
//12 types of nodes- element, text, comment, attribute etc etc

//html - parse - dom - cssom - layout - veiw