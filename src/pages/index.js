import React from "react"
import "@stripe/stripe-js"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Skus from "../components/Products/Skus"
import CartOverview from "../components/CartOverview"

import { CartProvider } from "use-shopping-cart"
import getStripe from "../utils/stripejs"

const stripePromise = getStripe()

const CartExample = () => {
  const url = typeof window !== "undefined" ? window.location.origin : ""
  return (
    <Layout>
      <Seo title="Cart Example" />
      <h1>Clothes line</h1>
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
