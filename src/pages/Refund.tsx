import LegalLayout from '../components/LegalLayout';

export default function Refund() {
  return (
    <LegalLayout title="Refund Policy">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-text-slate">1. 14-Day Money Back Guarantee</h2>
        <p>We are confident in the effectiveness of our AI Coach. If you use the plan and do not see any improvement in your dog's behavior within the first 14 days of your initial subscription, we will provide a full refund.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-text-slate">2. Refund Eligibility</h2>
        <p>To be eligible for a refund, you must have completed at least 5 of the suggested training missions in your plan. This helps us ensure the methodology was given a fair trial.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-text-slate">3. How to Request a Refund</h2>
        <p>Please send an email to <span className="font-bold text-primary-neural">contact@thedogcoach.co</span> with your account details and a brief description of why the plan did not meet your expectations.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-text-slate">4. Processing Time</h2>
        <p>Once approved, refunds are processed within 5-10 business days and will be credited back to your original payment method via Stripe.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-text-slate">5. Annual vs Monthly Plans</h2>
        <p>Our guarantee applies to the first purchase of either a monthly or annual plan. Subsequent renewals are not eligible for the 14-day guarantee.</p>
      </section>

      <p className="text-sm italic pt-8 border-t border-gray-100">Last updated: April 28, 2026</p>
      <p className="text-sm text-gray-400">Discover Group Sàrl</p>
    </LegalLayout>
  );
}
