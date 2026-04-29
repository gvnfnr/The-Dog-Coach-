import LegalLayout from '../components/LegalLayout';

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-text-slate">1. Data Protection Overview</h2>
        <p>We take your privacy seriously. This policy compliant with the EU General Data Protection Regulation (GDPR), the Swiss Federal Act on Data Protection (nLPD), and US privacy standards (including CCPA/CPRA).</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-text-slate">2. Data Controller</h2>
        <p>
          Discover Group Sàrl<br />
          Chemin des Champs Blancs 58<br />
          1279 Chavannes-de-Bogis, Switzerland<br />
          Contact: contact@thedogcoach.co
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-text-slate">3. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Identity Data:</strong> Name, dog's name, dog's breed.</li>
          <li><strong>Contact Data:</strong> Email address.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, usage patterns.</li>
          <li><strong>Behavioral Data:</strong> Quiz answers and training progress logs.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-text-slate">4. How We Use Your Data</h2>
        <p>We use your data to generate personalized AI training plans, process payments, and improve our AI algorithm. We do not sell your personal data to third parties.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-text-slate">5. Your Rights</h2>
        <p>Under GDPR and nLPD, you have the right to access, rectify, or erase your data, as well as the right to data portability. You can contact us at any time to exercise these rights.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-text-slate">6. Data Security</h2>
        <p>We implement industry-standard security measures to protect your data. All payments are handled by Stripe, and we do not store full credit card information.</p>
      </section>

      <p className="text-sm italic pt-8 border-t border-gray-100">Last updated: April 28, 2026</p>
    </LegalLayout>
  );
}
