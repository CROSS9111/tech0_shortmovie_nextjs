// // context/AuthContext.tsx
// import { createContext, useContext, useState } from "react";

// // Contextの作成
// const AuthContext = createContext(null);

// // Providerコンポーネント
// export const AuthProvider = ({ children }) => {
//   const [authToken, setAuthToken] = useState<string | null>(null);
//   const [refreshToken, setRefreshToken] = useState<string | null>(null);

//   const saveTokens = (token: string, refreshToken: string) => {
//     setAuthToken(token);
//     setRefreshToken(refreshToken);
//   };

//   return (
//     <AuthContext.Provider value={{ authToken, refreshToken, saveTokens }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // カスタムフックでContextの値を取得
// export const useAuth = () => {
//   return useContext(AuthContext);
// };