import React from 'react';

interface PaymentTrustStripProps {
  className?: string;
  grayscale?: boolean;
}

export const PaymentTrustStrip: React.FC<PaymentTrustStripProps> = ({ className, grayscale = true }) => {
  // Payment icon filenames provided by user
  const icons = ['1.png', '2.png', '3.png', '5.png', '9.png', '10.png', '22.png', '23.png'];
  
  return (
    <div className={`flex flex-wrap gap-4 items-center justify-center ${className}`}>
      {icons.map((icon, i) => (
        <img 
          key={i}
          src={`/src/${icon}`}
          alt="Secure Payment Provider"
          className={`h-[25px] md:h-[30px] w-auto object-contain transition-all duration-300 hover:grayscale-0 hover:opacity-100 ${grayscale ? 'grayscale opacity-70' : ''}`}
          referrerPolicy="no-referrer"
        />
      ))}
    </div>
  );
};
