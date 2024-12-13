import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout.tsx';
import { routes } from './navigation/routes';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}; 