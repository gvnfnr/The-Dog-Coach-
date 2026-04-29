import React from 'react';

interface PaymentTrustStripProps {
  className?: string;
  grayscale?: boolean;
}

export const PaymentTrustStrip: React.FC<PaymentTrustStripProps> = ({ className, grayscale = true }) => {
  // Payment icon URLs provided by user
  const icons = [
    'https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/assets/VISA.png',
    'https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/assets/MASTERCARD.png',
    'https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/assets/MAESTRO.png',
    'https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/assets/PAYPAL.png',
    'https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/assets/WORLDPAY.png',
    'https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/assets/DINERSCLUB.png',
    'https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/assets/AMERCIANEXPRESS.png',
    'https://raw.githubusercontent.com/gvnfnr/The-Dog-Coach-/main/src/assets/APPLEPAY.png'
  ];
  
  return (
    <div className={`flex flex-wrap gap-2 items-center justify-center ${className}`}>
      {icons.map((url, i) => (
        <img 
          key={i}
          src={url}
          alt="Secure Payment Provider"
          className="h-[25px] w-auto object-contain transition-all duration-300 opacity-80"
          style={{ margin: '5px' }}
          referrerPolicy="no-referrer"
        />
      ))}
    </div>
  );
};
