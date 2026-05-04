import { useState, useEffect } from 'react';

export function usePremium() {
  const [isPremium, setIsPremium] = useState<boolean>(() => {
    return localStorage.getItem('credora_premium') === 'true';
  });

  const upgradeToPremium = () => {
    localStorage.setItem('credora_premium', 'true');
    setIsPremium(true);
  };

  const resetPremium = () => {
    localStorage.removeItem('credora_premium');
    setIsPremium(false);
  };

  return { isPremium, upgradeToPremium, resetPremium };
}
