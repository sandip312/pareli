// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import ProductsPage from './ProductsCard/page';
// import Products from './products/page';
// import './styles/styles.css';

// const Home = () => {
//   const router = useRouter();

//   const handleRouting = (action) => {
//     router.push(action);
//   };

//   return (
//     <div className="Body">
//       <nav>
//         <div className="Header">
//           <div className="logo">pareli</div>
//           <div className="Header-buttons">
//             <button onClick={() => handleRouting('/login')}>Login</button>
//             <button onClick={() => handleRouting('/register')}>Register</button>
//           </div>
//         </div>
//       </nav>
//       <main className="AddProduct-btn">
//         {/* <div>
//           <button onClick={() => handleRouting('/Products')}>AddProduct</button>
//         </div> */}
//         <br />
//         <div>
//           <Link href="/ProductsPage">Products Page</Link>
//         </div>
//         <ProductsPage />
//         <Products/>
//       </main>
//       <footer></footer>
//     </div>
//   );
// };

// export default Home;
