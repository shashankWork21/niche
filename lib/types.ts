export interface FormState {
  success: boolean;
  errors?: {
    [key: string]: {
      errors: string[];
    };
  };
  redirectTo?: string;
  resultParams?: {
    ids: {
      [key: string]: number;
    };
    razorpayId?: string;
    invoiceUrl?: string;
    invoiceNumber?: string;
  };
}
