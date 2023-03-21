import { useEffect, useRef, useState } from "react";
import DesktopStoreFilter from "./DesktopStoreFilter";
import MobileStoreFilter from "./MobileStoreFilter";

export default function StoreFilter() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return windowSize.innerWidth < 950 ? (
    <MobileStoreFilter />
  ) : (
    <DesktopStoreFilter />
  );
}
