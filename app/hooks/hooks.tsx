import { useEffect, useState } from 'react';

type ColorScheme = 'light' | 'dark';

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
    
    if (typeof window !== 'undefined') {
      const savedScheme = localStorage.getItem('color-scheme') as ColorScheme | null;
      if (savedScheme) return savedScheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.style.colorScheme = colorScheme;
    document.documentElement.classList.toggle('dark', colorScheme === 'dark');
    
    localStorage.setItem('color-scheme', colorScheme);
  }, [colorScheme]);

  const toggleColorScheme = () => {
    setColorScheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return { colorScheme, toggleColorScheme };
}