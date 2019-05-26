/**
 * OMS API
 * API for management of products and orders
 * 
 */


/**
 * Resumen del profit por ordenes en un mes
 */
export interface OrderProfitResume { 
    /**
     * Mes del resumen
     */
    month?: number;
    /**
     * Year del resumen
     */
    year?: number;
    /**
     * Numero de ordenes para el periodo
     */
    numberOfOrders?: number;
    /**
     * Total facturado
     */
    total?: number;
}
