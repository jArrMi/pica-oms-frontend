/**
 * OMS API
 * API for management of products and orders
 * 
 */


export interface PaymentForm { 
    /**
     * Numero del medio de pago
     */
    number?: string;
    /**
     * Tipo de medio de pago
     */
    type?: PaymentForm.TypeEnum;
}
export namespace PaymentForm {
    export type TypeEnum = 'VISA' | 'MasterCard' | 'AMEX' | 'Discover' | 'PayPal' | 'PSE';
    export const TypeEnum = {
        VISA: 'VISA' as TypeEnum,
        MasterCard: 'MasterCard' as TypeEnum,
        AMEX: 'AMEX' as TypeEnum,
        Discover: 'Discover' as TypeEnum,
        PayPal: 'PayPal' as TypeEnum,
        PSE: 'PSE' as TypeEnum
    };
}
