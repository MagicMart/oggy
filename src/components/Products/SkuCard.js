import React from "react"
import styled from "styled-components"

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"

// import { skucard, button, price } from "../../styles/skucard.module.css"

const SkucardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  margin-bottom: 1rem;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  background-color: #fff;
  border-radius: 6px;
  max-width: 200px;

  h2 {
    font-size: 2rem;
  }

  .price {
    font-weight: bold;
  }

  .button {
    font-size: 2rem;
    text-align: center;
    color: black;
    outline: none;
    padding: 12px;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
    background-color: rgb(255, 178, 56);
    border-radius: 6px;
    letter-spacing: 1.5px;
    box-shadow: 0 8px #999;
  }

  .button:hover {
    background-color: bisque;
    cursor: pointer;
  }

  .button:active {
    background-color: #3e8e41;
    color: white;
    box-shadow: 0 3px #666;
    transform: translateY(5px);
  }
`

const SkuCard = ({ sku }) => {
  const { addItem } = useShoppingCart()
  return (
    <SkucardStyles>
      <img src={sku.image} alt={sku.description} />
      <h2>{sku.name}</h2>
      <p className="price">
        Price:{" "}
        {formatCurrencyString({
          value: parseInt(sku.price),
          currency: sku.currency,
        })}
      </p>
      <p>{sku.description}</p>
      <button className="button" onClick={() => addItem(sku)}>
        ADD TO CART
      </button>
    </SkucardStyles>
  )
}

export default SkuCard
