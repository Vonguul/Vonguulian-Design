import { useEffect, useState } from "react";

export function useNavigation() {
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, []);

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return { goBack, scrollToTop, canGoBack };
}
