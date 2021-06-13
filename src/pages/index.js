import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Skus from "../components/Products/Skus"
import CartOverview from "../components/CartOverview"

import { CartProvider } from "use-shopping-cart"
import getStripe from "../utils/stripejs"

const stripePromise = getStripe()

const cartContainerStyles = {
  display: "flex",
  justifyContent: "space-between",
}

const CartExample = () => {
  const url = typeof window !== "undefined" ? window.location.origin : ""
  return (
    <Layout>
      <Seo title="Cart Example" />
      <CartProvider
        mode="client-only"
        stripe={stripePromise}
        successUrl={`${url}/success/`}
        cancelUrl={`${url}/`}
        currency="GBP"
        allowedCountries={["GB"]}
        billingAddressCollection={true}
      >
        <div style={cartContainerStyles}>
          <h1 style={{ color: "#0e5e83" }}>Oggy Clothes UK</h1>
          <CartOverview />
        </div>
        <Skus />
      </CartProvider>
    </Layout>
  )
}

export default CartExample
