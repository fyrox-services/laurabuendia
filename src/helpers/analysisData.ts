export function analysisData() {
  const userAgent = window.navigator.userAgent;
  const originUrl = window.location.origin + window.location.pathname;

  const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const device = isMobile ? 'móvil' : 'ordenador';

  // Navegador
  let browser = 'Desconocido';
  if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) browser = 'Chrome';
  else if (userAgent.includes('Firefox')) browser = 'Firefox';
  else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) browser = 'Safari';
  else if (userAgent.includes('Edg')) browser = 'Edge';
  else if (userAgent.includes('Opera') || userAgent.includes('OPR')) browser = 'Opera';

  // Sistema operativo
  let os = 'Desconocido';
  if (/Windows NT/i.test(userAgent)) os = 'Windows';
  else if (/Mac OS X/i.test(userAgent)) os = 'macOS';
  else if (/Android/i.test(userAgent)) os = 'Android';
  else if (/iPhone|iPad|iPod/i.test(userAgent)) os = 'iOS';
  else if (/Linux/i.test(userAgent)) os = 'Linux';

  return {
    originUrl,
    device,
    browser,
    os
  };
}
