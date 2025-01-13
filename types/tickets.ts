export interface PricingTier {
  name: string;
  features: string[];
  paymentLink: string;
}

export interface CityPricing {
  [key: string]: PricingTier[];
}