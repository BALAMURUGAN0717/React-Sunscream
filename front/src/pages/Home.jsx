// import React from 'react';
// import '../App.css';
// const HO =()=>{
// const products = [
//   {
//     id: 1,
//     tag: "BESTSELLER",
//     skin: "All Skin Types",
//     name: "Vitamin C + E Sunscreen SPF 50+ PA++++",
//     reviews: 1564,
//        img :"https://www.dotandkey.com/products/dot-key-vitamin-c-e-spf-50-pa-face-sunscreen-for-glowing-skin-uv-protection-for-dull-skin"

   
//   },
//   // {
//   //   id: 2,
//   //   tag: "BESTSELLER",
//   //   skin: "Oily & Combination Skin",
//   //   name: "Watermelon Sunscreen SPF 50+ PA++++",
//   //   reviews: 1148,
//   // },
//   // {
//   //   id: 3,
//   //   tag: "BESTSELLER",
//   //   skin: "All Skin Types",
//   //   name: "Strawberry Dew Tinted Sunscreen SPF 50+ PA++++",
//   //   reviews: 1027,
//   //   img: "https://via.placeholder.com/300?text=Strawberry"
//   // }
// ];


//   return (
//     <div className="main-container">

//       {/* LEFT — Product List */}
//       <div className="left">
//         {products.map((item) => (
//           <div className="product-card" key={item.id}>
//             <div className="tag">{item.tag}</div>

//             <img src={item.img} className="product-img" alt={item.name} />

//             <p className="skin">{item.skin}</p>
//             <h4>{item.name}</h4>

//             <p className="reviews">⭐ 4.8 ({item.reviews})</p>
//           </div>
//         ))}
//       </div>

//       {/* RIGHT — Categories */}
//       <div className="right">
//         <button className="category active">Sunscreen</button>
//         {/* <button className="category">Moisturizer</button>
//         <button className="category">Serum</button>
//         <button className="category">Facewash</button> */}
//       </div>
      
//     </div>
//   );
// }
// export default HO