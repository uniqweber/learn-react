import { Route, Routes } from "react-router";
import { routes } from "./routes/routes";
import Layout from "./components/shared/Layout";
const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          {routes.map(({ path, Element, id }) => (
            <Route key={id} path={path} element={<Element />}>
              {/* {subRoute &&
              subRoute.map(({ id, index, path, Element }) => (
                <Route key={id} {...(index ? { index: true } : { path })} element={<Element />}></Route>
              ))} */}
            </Route>
          ))}
        </Routes>
      </Layout>
    </>
  );
};
export default App;
