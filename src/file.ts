import axios from 'axios';

class AxiosPaymentGateway {
  private readonly baseUrl: string;

  constructor(baseUrl = 'https://api.payment-gateway.com') {
    this.baseUrl = baseUrl;
  }

  async charge(amount: number): Promise<boolean> {
    try {
      const response = await axios.post(`${this.baseUrl}/charges`, { amount });
      return response.status === 200;
    } catch {
      return false;
    }
  }
}

class PaymentProcessor {
  constructor(
    private readonly paymentGateway: AxiosPaymentGateway,
    private readonly userEmail: string,
  ) {}

  async processPayment(amount: number, customerType: string): Promise<number> {
    amount = this.calculateDiscount(amount, customerType);

    if (await this.paymentGateway.charge(amount)) {
      console.log(`Payment of ${amount} processed successfully.`);
      this.sendEmail(amount);
    } else {
      console.log(`Payment of ${amount} failed.`);
    }
    return amount;
  }

  sendEmail(amount: number): void {
    console.log(`Sending to ${this.userEmail} for payment of ${amount}`);
  }

  calculateDiscount(
    amount: number,
    customerType: string,
    customDiscount?: number,
  ): number {
    let discount = 0;
    if (customerType === 'regular') {
      discount = amount * 0.1;
    } else if (customerType === 'vip') {
      discount = amount * 0.2;
    } else if (customerType === 'special') {
      discount = amount * 0.4;
    } else if (customDiscount) {
      discount = amount * customDiscount;
    }
    return amount - discount;
  }
}

// Example usage
const gateway = new AxiosPaymentGateway();
const processor = new PaymentProcessor(gateway, 'user@example.com');
processor.processPayment(100, 'vip').then(console.log);