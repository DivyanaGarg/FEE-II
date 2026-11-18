import { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./index.css";

function App() {
  const products = [
    {
      id: 1,
      name: "MacBook Neo",
      description: "Powerful laptop for work and study.",
      price: "80,000",
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-neo-color-unselect-202603-gallery-1_FMT_WHH?wid=690&hei=720&fmt=jpeg&qlt=90&.v=1771350451299",
    },

    {
      id: 2,
      name: "iPhone",
      description: "A powerful smartphone with a stunning display.",
      price: "70,000",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600",
    },

    {
      id: 3,
      name: "Aipods Max",
      description: "Best sound qua;ity for you",
      price: "12,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCqjr-J936DFDDE-SuRZfYXxLhFrr8CMHn8k4diM49w&s=10",
    },

    {
      id: 4,
      name: "Apple watch",
      description: "Track your fitness and connect your phone.",
      price: "15,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XU7PYJJZUL5vsRdmDPDN8xRWGkArYneyIf32DXZwTA&s=10",
    },

    {
      id: 5,
      name: "MacBook",
      description: "Fully powered laptop",
      price: "1,20,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOT2cWq-Vi2meFlAs4PfI0MqheDL0MYOIWoQ2kJcBHRQ&s=10",
    },

    {
      id: 6,
      name: "Charger",
      description: "Fast charging for all your devices.",
      price: "900",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIYQXrW12msGx-Jt_cVlGNOD8nLm5PT_En97w1Vvv6w&s=10",
    },
  ];
  const [search, setSearch] = useState("");
  const [priceSort, setPriceSort] = useState("");

  const visibleProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    ).sort((a, b) => {
      const priceA = Number(a.price.replaceAll(",", ""));
      const priceB = Number(b.price.replaceAll(",", ""));

      if (priceSort === "low-to-high") return priceA - priceB;
      if (priceSort === "high-to-low") return priceB - priceA;
      return 0;
    });

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="container">
      <h1>Our Products</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={handleSearchChange}
      />

      <label htmlFor="price-sort">Sort by price: </label>
      <select
        id="price-sort"
        value={priceSort}
        onChange={(e) => setPriceSort(e.target.value)}
      >
        <option value="">Default order</option>
        <option value="low-to-high">Low to high</option>
        <option value="high-to-low">High to low</option>
      </select>

      <div className="product-container">
        {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
          />
        ))}
      </div>
    </div>
  );
}



// import { useState } from "react";
// import Display from './Display';
// function App(){
//   // let count = 45;
//   // const [count, setCount] = useState(10); //hook
//   const [name, setName] = useState("Aman");
//   const [theme, setTheme] = useState("dark");
//   const [student, setStudent] = useState({name:"Divyana", age:20})
//   const [fruit, setFruit] = useState(["apple", "banana", "mango"]);
//   function handleClick(){
//     // setCount(count+1);
//     // setCount(count+1);
//     // setCount(count+1);
//     // // React does not +3 in count, it runs all functions at the same time, hence, it shows just +1

//     setCount (prev=>prev+1);
//     setCount (prev=>prev+1);
//     setCount (prev=>prev+1);
//   }
//   function handleName(){
//     setName(name == "Aman" ? "Rahul" : "Aman");
//   }

//   function handleTheme(){
//     setTheme(theme == "dark" ? "light" : "dark");
//   }
//   function handleLastName(){
//     setStudent({...student, lastName:"Garg"});
//   }
//   function handleFruits(){
//     setFruit([...fruit, "orange"]);
//   }

//   const [count, dispatch] = useReducer(useReducer, 0);
//   const[email, setEmail] = useState("");
//   const[password, setPassword] = useState("");
//   const[age, setAge] = useState(0);
//   function handleEmail(e){
//     // console.log(e);
//     setEmail(e.taget.value);
//   }
//   function handlePassword(e){
//     // console.log(e.target);
//     setPassword(e.target.value);
//   }
//   function handleAge(e){
//     sessionStorage(e.target.value);
//   }
//   function handleSubmit(e){
//     e.preventDefault();
//     console.log(email, password, age);
//   }
// // we can combine all these as 
//   return(
//     <>
//     <div className={theme == "light"?"light":"dark"} style={{border:"2px solid red"}}>
//     <button onClick = {handleTheme}>Change Theme</button>
//     <h1>Count: {count} </h1>
//     <button onClick ={handleClick}>Add</button>
//     <Display count = {count}/>
//     <h1>Name: <span className={name == "Aman"? "red":"green"}>{name}</span></h1>
//     <button onClick={handleName}>Change Name</button>
//     <p>{student.name}</p>
//     <p>{student.age}</p>
//     <p>{student.lastName?student.lastName:"We do not have a lastname"}</p>
//     <button onClick={handleLastName}>Add last Name</button>
//     <ul>
//       {/* {fruit.map(fruit=><li>{fruit}</li>)}
//       {fruit.map(fruit=>{
//         return <li key={fruit}>{fruit}</li>
//       })} */}
//       {fruit.map((fruit, index)=>{
//         return <li key={index}>{fruit}</li>
//       })}
//       <button onClick={handleFruits}>Add fruits</button>
//     </ul>
//     {/* {products.filter((product)=>product.price>=50000).map((product)=>{
//     return(<p>{product.name}</p>)})} */}
    

//     <form onSubmit={handleSubmit}>
//       <label>Email: </label>
//       <input type="email" onChange={handleEmail}></input>
//       <label>Password: </label>
//       <input type="password" onChange={handlePassword}></input>
//       <label>Age: </label>
//       <input type="number" min="0" max="50" onChange={handleAge}></input>
//       <button type="submit"> Submit </button>
//     </form>

//   </div>
//     </>
//   )
// }


export default App;
