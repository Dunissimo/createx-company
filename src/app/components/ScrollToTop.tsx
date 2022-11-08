import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
