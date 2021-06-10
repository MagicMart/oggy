import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Skus from "../components/Products/Skus"
import CartOverview from "../components/CartOverview"

import { loadStripe } from "@stripe/stripe-js"
import { CartProvider } from "use-shopping-cart"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const CartExample = () => {
  const url = typeof window !== "undefined" ? window.location.origin : ""
  return (
    <Layout>
      <SEO title="Cart Example" />
      <h1>Checkout with cart example</h1>
      <h2>
        With{" "}
        <a href="https://use-shopping-cart.netlify.app/">use-shopping-cart</a>
      </h2>
      <CartProvider
        mode="client-only"
        stripe={stripePromise}
        successUrl={`${url}/page-2/`}
        cancelUrl={`${url}/`}
        currency="GBP"
        allowedCountries={["GB"]}
        billingAddressCollection={true}
      >
        <CartOverview />
        <Skus />
      </CartProvider>
    </Layout>
  )
}

export default CartExample
