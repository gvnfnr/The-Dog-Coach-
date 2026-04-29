import LegalLayout from '../components/LegalLayout';

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-text-slate">1. Acceptance of Terms</h2>
        <p>By accessing or using The Dog Coach website and services, you agree to be bound by these Terms of Service. These terms are governed by Swiss law and relevant international standards.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-text-slate">2. Service Description</h2>
        <p>The Dog Coach provides AI-powered behavioral coaching for dogs. Our service is educational in nature and does not replace professional veterinary advice or specialized aggressive dog rehabilitation that may require physical intervention.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-text-slate">3. Company Information</h2>
        <p>
          Discover Group Sàrl<br />
          Chemin des Champs Blancs 58<br />
          1279 Chavannes-de-Bogis, Switzerland<br />
          Email: contact@thedogcoach.co
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-text-slate">4. Subscription and Payments</h2>
        <p>Subscriptions automatically renew unless cancelled. Payments are processed securely via Stripe. You may cancel at any time through your dashboard.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-text-slate">5. User Conduct</h2>
        <p>You agree to use the service for personal, non-commercial purposes only and to follow positive reinforcement methods as suggested by the AI Coach.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-text-slate">6. Limitation of Liability</h2>
        <p>Discover Group Sàrl is not liable for any injuries or damages resulting from the use of our coaching techniques. Dog behavior can be unpredictable; owners assume all risks.</p>
      </section>

      <p className="text-sm italic pt-8 border-t border-gray-100">Last updated: April 28, 2026</p>
    </LegalLayout>
  );
}
