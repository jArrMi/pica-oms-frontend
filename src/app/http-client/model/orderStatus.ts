/**
 * OMS API
 * API for management of products and orders
 * 
 */


/**
 * Objeto que representa el status de una orden
 */
export interface OrderStatus { 
    /**
     * fasf
     */
    status?: OrderStatus.StatusEnum;
}
export namespace OrderStatus {
    export type StatusEnum = 'CREATED' | 'PAYMENT_VALIDATED' | 'SELLER_VALIDATED' | 'TRANSPORT_READY' | 'LODGING_READY' | 'PAYED' | 'CONFIRMED' | 'ACCOUNTED';
    export const StatusEnum = {
        CREATED: 'CREATED' as StatusEnum,
        PAYMENTVALIDATED: 'PAYMENT_VALIDATED' as StatusEnum,
        SELLERVALIDATED: 'SELLER_VALIDATED' as StatusEnum,
        TRANSPORTREADY: 'TRANSPORT_READY' as StatusEnum,
        LODGINGREADY: 'LODGING_READY' as StatusEnum,
        PAYED: 'PAYED' as StatusEnum,
        CONFIRMED: 'CONFIRMED' as StatusEnum,
        ACCOUNTED: 'ACCOUNTED' as StatusEnum
    };
}
