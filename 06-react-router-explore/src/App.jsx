import { Route, Routes } from "react-router";
import Layout from "./components/shared/Layout";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          {routes.map(({ path, Element, id, subRoute }) => (
            <Route key={id} path={path} element={<Element />}>
              {subRoute &&
                subRoute.map(({ id, index, path, Element, childrenSubRoute }) => (
                  <Route key={id} {...(index ? { index: true } : { path })} element={<Element />}>
                    {childrenSubRoute &&
                      childrenSubRoute.map(({ id, index, path, Element }) => (
                        <Route key={id} {...(index ? { index: true } : { path })} element={<Element />} />
                      ))}
                  </Route>
                ))}
            </Route>
          ))}
        </Routes>
      </Layout>
    </>
  );
};
export default App;
