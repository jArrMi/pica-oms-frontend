/**
 * OMS API
 * API for management of products and orders
 * 
 */
import { Product } from './product';


export interface Spectacle { 
    /**
     * ID del espectaculo
     */
    id?: number;
    /**
     * Nombre del espectaculo
     */
    name?: string;
    /**
     * Productos asociados al espectaculo
     */
    products?: Array<Product>;
}
