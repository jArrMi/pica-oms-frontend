/**
 * OMS API
 * API for management of products and orders
 * 
 */


/**
 * Peticion de Login
 */
export interface LoginRequest { 
    /**
     * Email del usuario
     */
    userEmail?: string;
    /**
     * Password del usuario
     */
    userPassword?: string;
}
