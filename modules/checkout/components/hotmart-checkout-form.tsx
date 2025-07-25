"use client";

import { useEffect, useRef } from "react";

export interface HotmartCheckoutProps {
  userEmail: string;
  userName: string;
  hotmartOfferCode: string;
}
export default function HotmartCheckout(props: HotmartCheckoutProps) {
  const checkoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
    script.async = true;
    script.onload = () => {
      //@ts-ignore
      const elements = window.checkoutElements?.init("inlineCheckout", {
        offer: props.hotmartOfferCode,
        prefilledInfo: {
          name: props.userName,
          email: props.userEmail,
        },
      });
      elements?.mount("#inline_checkout");
    };

    document.body.appendChild(script);
  }, []);

  return <div id="inline_checkout" ref={checkoutRef} />;
}
