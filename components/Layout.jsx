import NavBar from "./NavBar";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

const Layout = ({ title, children, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    //router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className={dark ? "bg-dark" : ""}>
      <NavBar />

      <main className="container py-4">
        {title && 
        
        <h1 className = "text-center">
        {title}  
        </h1>}

        {children}
      </main>

      {footer ? (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h2> JSmith Angel</h2>
            <p> 2000- {new Date().getFullYear()}</p>
            <h6> &copy; All Rights Reserved</h6>
          </div>
        </footer>
      ) : null}
    </div>
  );
};

export default Layout;
