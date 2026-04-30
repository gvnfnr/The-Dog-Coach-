import React from 'react';

interface PaymentTrustStripProps {
    className?: string;
    grayscale?: boolean;
}

export const PaymentTrustStrip: React.FC<PaymentTrustStripProps> = ({ className, grayscale = true }) => {
    const icons = [
      { src: '/assets/VISA.png', alt: 'Visa' },
      { src: '/assets/MASTERCARD.png', alt: 'Mastercard' },
      { src: '/assets/MAESTRO.png', alt: 'Maestro' },
      { src: '/assets/PAYPAL.png', alt: 'PayPal' },
      { src: '/assets/WORLDPAY.png', alt: 'WorldPay' },
      { src: '/assets/DINERSCLUB.png', alt: 'Diners Club' },
      { src: '/assets/AMERICANEXPRESS.png', alt: 'American Express' },
      { src: '/assets/APPLEPAY.png', alt: 'Apple Pay' },
        ];

    return (
          <div className={`flex flex-wrap gap-2 items-center justify-center ${className}`}>
            {icons.map((icon, i) => (
                    <img
                                key={i}
                                src={icon.src}
                                alt={icon.alt}
                                className="h-[25px] w-auto object-contain transition-all duration-300 opacity-80"
                                style={{ margin: '5px' }}
                              />
                  ))}
          </div>
            );
};
