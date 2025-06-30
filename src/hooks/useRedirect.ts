import { useRouter } from 'next/router';
import { useEffect } from 'react';

type RedirectItem = {
  fromPath: string;
  toPath: string;
  statusCode: number;
};

const useRedirect = (allRedirects: RedirectItem[] | undefined) => {
  const router = useRouter();
  const currentPath = router.asPath;

  useEffect(() => {
    if (!allRedirects) {
      return;
    }

    const currentPathname =
      currentPath.split('?')[0].replace(/\/+$/, '') || '/';

    const redirectItem = allRedirects.find((item) => {
      try {
        const fromPath = new URL(item.fromPath).pathname;
        const normalizedFromPath = fromPath.replace(/\/+$/, '') || '/';
        return (
          normalizedFromPath.toLowerCase() === currentPathname.toLowerCase()
        );
      } catch (e) {
        console.error(e);
        const normalizedFromPath = item.fromPath.replace(/\/+$/, '') || '/';
        return (
          normalizedFromPath.toLowerCase() === currentPathname.toLowerCase()
        );
      }
    });

    if (redirectItem) {
      // router.replace(redirectItem.toPath);
    }
  }, [allRedirects, currentPath, router]);
};

export default useRedirect;
