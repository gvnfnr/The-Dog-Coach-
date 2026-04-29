import React from 'react';
import visaLogo from '../assets/VISA.png';
import mastercardLogo from '../assets/MASTERCARD.png';
import maestroLogo from '../assets/MAESTRO.png';
import paypalLogo from '../assets/PAYPAL.png';
import worldpayLogo from '../assets/WORLDPAY.png';
import dinersLogo from '../assets/DINERSCLUB.png';
import amexLogo from '../assets/AMERCIANEXPRESS.png';
import applepayLogo from '../assets/APPLEPAY.png';

interface PaymentTrustStripProps {
    className?: string;
    grayscale?: boolean;
}

const icons = [
  { src: visaLogo, alt: 'Visa' },
  { src: mastercardLogo, alt: 'Mastercard' },
  { src: maestroLogo, alt: 'Maestro' },
  { src: paypalLogo, alt: 'PayPal' },
  { src: worldpayLogo, alt: 'WorldPay' },
  { src: dinersLogo, alt: 'Diners Club' },
  { src: amexLogo, alt: 'American Express' },
  { src: applepayLogo, alt: 'Apple Pay' },
  ];

export const PaymentTrustStrip: React.FC<PaymentTrustStripProps> = ({ className = '', grayscale = false }) => {
    return (
          <div className={`flex flex-wrap gap-2 items-center justify-center ${className}`}>
            {icons.map((icon, i) => (
                    <img
                                key={i}
                                src={icon.src}
                                alt={icon.alt}
                                className="h-[25px] w-auto object-contain transition-all duration-300 opacity-80"
                                style={{ margin: '5px', filter: grayscale ? 'grayscale(1)' : 'none' }}
                                referrerPolicy="no-referrer"
                              />
                  ))}
          </div>div>
        );
};
