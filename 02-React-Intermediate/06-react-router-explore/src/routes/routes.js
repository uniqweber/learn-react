import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../pages/dashboard/Dashboard";
import Bengali from "../pages/dashboard/Language/Bengali";
import English from "../pages/dashboard/Language/English";
import Language from "../pages/dashboard/Language";
import Overview from "../pages/dashboard/Overview";
import PostDetails from "../pages/dashboard/placeholder/PostDetails";
import Placeholder from "../pages/dashboard/Placeholder";
import Profile from "../pages/dashboard/Profile";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AllPost from "../pages/dashboard/placeholder/AllPost";

export const routes = [
  { id: 1, path: "", Element: Home },
  { id: 2, path: "/about", Element: About },
  { id: 3, path: "/contact", Element: Contact },
  {
    id: 4,
    path: "/dashboard",
    Element: Dashboard,
    subRoute: [
      { id: 5, index: true, Element: Overview },
      { id: 6, path: "profile", Element: Profile },
      {
        id: 7,
        path: "language",
        Element: Language,
        childrenSubRoute: [
          { id: 8, index: true, Element: Bengali },
          { id: 9, path: "english", Element: English },
        ],
      },
      {
        id: 10,
        path: "placeholder",
        Element: Placeholder,
        childrenSubRoute: [
          { id: 11, index: true, Element: AllPost },
          { id: 12, path: ":id", Element: PostDetails },
        ],
      },
    ],
  },

  { id: 15, path: "*", Element: NotFound },
];
