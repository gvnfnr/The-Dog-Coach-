import React from 'react';

interface PaymentTrustStripProps {
  className?: string;
  grayscale?: boolean;
}

export const PaymentTrustStrip: React.FC<PaymentTrustStripProps> = ({ className, grayscale = true }) => {
  // Payment icon URLs provided by user
  const icons = [
    'https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/1.png',
    'https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/2.png',
    'https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/3.png',
    'https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/5.png',
    'https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/9.png',
    'https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/10.png',
    'https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/22.png',
    'https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/23.png'
  ];
  
  return (
    <div className={`flex flex-wrap gap-4 items-center justify-center ${className}`}>
      {icons.map((url, i) => (
        <img 
          key={i}
          src={url}
          alt="Secure Payment Provider"
          className={`h-[25px] w-auto object-contain transition-all duration-300 hover:grayscale-0 hover:opacity-100 ${grayscale ? 'grayscale opacity-70' : ''}`}
          referrerPolicy="no-referrer"
        />
      ))}
    </div>
  );
};
