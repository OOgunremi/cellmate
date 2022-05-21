import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1Kzh3dFHtIwdR0mhwYCKGBGq" },
          { shipping_rate: "shr_1Kzh1YFHtIwdR0mh11VciczS" },
        ],
        line_items: req.body.cartItems.map((item) => {
          return {
            price_data: {
              currency: "cad",
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      };

      // add user email to the stripe data if user is logged in
      if (req.body.user) params["customer_email"] = req.body.user.email;

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
