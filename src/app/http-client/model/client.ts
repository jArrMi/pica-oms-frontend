/**
 * OMS API
 * API for management of products and orders
 * 
 */
import { PaymentForm } from './paymentForm';


export interface Client { 
    /**
     * ID del cliente
     */
    custId?: number;
    /**
     * Primer nombre del cliente
     */
    firstName?: string;
    /**
     * Apellido del cliente
     */
    lastName?: string;
    /**
     * Numero de telefono del cliente
     */
    phoneNumber?: string;
    /**
     * Email del cliente
     */
    email?: string;
    /**
     * Password del cliente
     */
    password?: string;
    /**
     * Categoria del cliente
     */
    category?: Client.CategoryEnum;
    /**
     * Medio de pago del cliente
     */
    payment?: PaymentForm;
}
export namespace Client {
    export type CategoryEnum = 'SILVER' | 'GOLD' | 'PLATINUM';
    export const CategoryEnum = {
        SILVER: 'SILVER' as CategoryEnum,
        GOLD: 'GOLD' as CategoryEnum,
        PLATINUM: 'PLATINUM' as CategoryEnum
    };
}
