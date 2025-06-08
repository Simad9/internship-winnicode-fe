import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import AxiosInterceptor from "./auth/AxiosInterceptor";
import { AuthProvider } from "./features/auth/api/AuthProvider"

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AxiosInterceptor />
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
