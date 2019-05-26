/**
 * OMS API
 * API for management of products and orders
 * 
 */
import { OrderStatus } from './orderStatus';
import { Product } from './product';


/**
 * Objeto que representa una orden
 */
export interface Order { 
    /**
     * Id de la orden
     */
    orderId?: number;
    /**
     * Status de la orden
     */
    orderStatus?: OrderStatus;
    /**
     * Id del cliente al que le pertenece la orden
     */
    clientId?: number;
    /**
     * Id del espectaculo al que pertenece la orden
     */
    spectacleId?: number;
    /**
     * Lista de productos de la orden
     */
    products?: Array<Product>;
    /**
     * Fecha de la orden
     */
    date?: Date;
    /**
     * Precio de la orden
     */
    price?: number;
    /**
     * Comentarios acerca de la orden
     */
    comments?: string;
}
