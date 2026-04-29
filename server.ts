import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  let stripe: Stripe | null = null;
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (stripeKey) {
    stripe = new Stripe(stripeKey);
  }

  app.use(express.json());

  // API routes
  app.post("/api/create-checkout-session", async (req, res) => {
    if (!stripe) {
      return res.status(500).json({ error: "Stripe is not configured. Please add STRIPE_SECRET_KEY to your environment variables." });
    }

    const { planId } = req.body;

    let priceData;
    let mode: "payment" | "subscription" = "payment";

    switch (planId) {
      case 'reset':
        priceData = {
          currency: 'eur',
          product_data: {
            name: 'Behavioral Reset',
            description: 'Targeted behavioral correction with expert-verified protocols (6 Months Access)',
          },
          unit_amount: 7900, // €79.00
        };
        mode = "payment";
        break;
      case 'full':
        priceData = {
          currency: 'eur',
          product_data: {
            name: 'Full Access (Annual)',
            description: 'Universal AI Coach, Lifetime Plan Updates, Multi-dog Profiles, Priority Video Support',
          },
          unit_amount: 14900, // €149.00
        };
        mode = "payment";
        break;
      case 'monthly':
        priceData = {
          currency: 'eur',
          product_data: {
            name: 'Monthly Plan',
            description: 'Adaptive 14-day Plan, 24/7 AI Coach Chat, Basic Progress Tracking',
          },
          unit_amount: 2900, // €29.00
          recurring: { interval: 'month' },
        };
        mode = "subscription";
        break;
      default:
        return res.status(400).json({ error: "Invalid plan ID" });
    }

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: priceData as any,
            quantity: 1,
          },
        ],
        mode: mode,
        success_url: `${process.env.APP_URL || 'http://localhost:3000'}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.APP_URL || 'http://localhost:3000'}/pricing`,
      });

      res.json({ url: session.url });
    } catch (error: any) {
      console.error('Stripe Error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
