import { useEffect } from "react";

const useEscKey = (callback) => {
  const handleESCKey = (e) => {
    if (e.keyCode === 27) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleESCKey, true);

    return () => {
      document.removeEventListener("keydown", handleESCKey);
    };
  }, []);
};
export default useEscKey;
