/**
 * OMS API
 * API for management of products and orders
 * 
 */
import { Product } from './product';


/**
 * Objeto que representa una promocion
 */
export interface Campaign { 
    /**
     * ID de la promocion
     */
    campaignID?: number;
    /**
     * Nombre de la promocion
     */
    campaignName?: string;
    /**
     * Fecha inicio promocion
     */
    campaingStartDate?: string;
    /**
     * Fecha fin promocion
     */
    campaingEndDate?: string;
    /**
     * URL de imagen de la promocion
     */
    campaingImage?: string;
    /**
     * Producto de la promocion
     */
    campaignProduct?: Product;
    /**
     * Estatus de la promocion
     */
    campaingActive?: boolean;
}
