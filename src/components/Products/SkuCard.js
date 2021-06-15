import React from "react"

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"

import { skucard, button, price } from "../../styles/skucard.module.css"

const SkuCard = ({ sku }) => {
  const { addItem } = useShoppingCart()
  return (
    <div className={skucard}>
      <img src={sku.image} alt={sku.description} />
      <h2>{sku.name}</h2>
      <p className={price}>
        Price:{" "}
        {formatCurrencyString({
          value: parseInt(sku.price),
          currency: sku.currency,
        })}
      </p>
      <p>{sku.description}</p>
      <button className={button} onClick={() => addItem(sku)}>
        ADD TO CART
      </button>
    </div>
  )
}

export default SkuCard
