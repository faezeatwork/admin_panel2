<<<<<<< HEAD
// import { createContext, useState } from "react";

// export const CategoryContext = createContext({
//   editId: null,
//   setEditId: () => {},
// });

// export const CategoryContextContainer = ({ children }) => {
//   const [editId, setEditId] = useState('test context');

//   return (
//     <CategoryContext.Provider
//       value={{
//         editId,
//         setEditId,
//       }}
//     >
//       {children}
//     </CategoryContext.Provider>
//   );
// };
=======
import { createContext, useState } from "react";

export const CategoryContext = createContext({
  editId: null,
  setEditId: () => {},
});

export const CategoryContextContainer = ({ children }) => {
  const [editId, setEditId] = useState('test context');

  return (
    <CategoryContext.Provider
      value={{
        editId,
        setEditId,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
