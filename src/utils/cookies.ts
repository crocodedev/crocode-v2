class CookieStore {
  get(name: string): string | undefined {
    if (typeof document === 'undefined') return undefined;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return undefined;
  }

  set(
    name: string,
    value: string,
    options?: { path?: string; maxAge?: number },
  ) {
    if (typeof document === 'undefined') return;
    let cookieStr = `${name}=${value}`;
    if (options?.maxAge) {
      const expires = new Date(
        Date.now() + options.maxAge * 1000,
      ).toUTCString();
      cookieStr += `; expires=${expires}`;
    }
    cookieStr += `; path=${options?.path ?? '/'}`;
    document.cookie = cookieStr;
  }

  delete(name: string, options?: { path?: string }) {
    this.set(name, '', { ...options, maxAge: -1 });
  }
}

export const cookieStore = new CookieStore();

export enum COOKIE {
  ACCESS = 'Access',
}
