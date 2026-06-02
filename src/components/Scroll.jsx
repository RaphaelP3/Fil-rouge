import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Scroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force le scroll tout en haut de la page de manière instantanée
    window.scrollTo(0, 0);
  }, [pathname]); // Se déclenche à chaque changement d'URL

  return null; // Ce composant ne gère que de la logique, il n'affiche rien
}