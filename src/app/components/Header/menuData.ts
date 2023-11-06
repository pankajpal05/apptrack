export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "#",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "#",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "#",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "#",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "#",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "#",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "#",
        newTab: false,
      },
    ],
  },
];
export default menuData;
