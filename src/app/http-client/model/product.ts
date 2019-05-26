/**
 * OMS API
 * API for management of products and orders
 * 
 */


export interface Product { 
    /**
     * Id del producto
     */
    id?: number;
    /**
     * ID del espectaculo
     */
    espectacle?: number;
    /**
     * Fecha del espectaculo
     */
    dateSpectacle?: string;
    /**
     * Ciudad del espectaculo
     */
    citySpectacle?: string;
    /**
     * Fecha de llegada
     */
    startDate?: string;
    /**
     * Fecha de salida
     */
    endDate?: string;
    /**
     * Tipo de transporte
     */
    transportType?: number;
    /**
     * Tipo de espectaculo
     */
    spectacleType?: number;
    /**
     * Tipo de hospedaje
     */
    hostType?: number;
}
