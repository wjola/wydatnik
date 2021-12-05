import { useEffect, useState } from "react";

const useDeviceClass = () => {
  const [deviceClass, setDeviceClass] = useState("desktop");

  const calculateDeviceClass = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 400) {
      setDeviceClass("smartphone-small");
    } else if (windowWidth < 600) {
      setDeviceClass("smartphone");
    } else if (windowWidth < 1000) {
      setDeviceClass("tablet");
    } else if (windowWidth >= 1000) {
      setDeviceClass("desktop");
    }
  };

  useEffect(() => {
    calculateDeviceClass();
    window.addEventListener("resize", calculateDeviceClass);

    return () => {
      window.removeEventListener("resize", calculateDeviceClass);
    };
  }, []);

  return deviceClass;
};

export default useDeviceClass;
