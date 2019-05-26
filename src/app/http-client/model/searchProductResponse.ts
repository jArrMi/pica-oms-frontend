/**
 * OMS API
 * API for management of products and orders
 * 
 */
import { Product } from './product';


/**
 * Respuesta de consulta de productos
 */
export interface SearchProductResponse { 
    /**
     * Lista de productos
     */
    products?: Array<Product>;
}
