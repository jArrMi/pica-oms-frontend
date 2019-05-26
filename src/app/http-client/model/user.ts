/**
 * OMS API
 * API for management of products and orders
 * 
 */
import { Rol } from './rol';


/**
 * Objeto que representa un usuario del OMS
 */
export interface User { 
    /**
     * ID del usuario
     */
    userId?: number;
    /**
     * Email del usuario
     */
    email?: string;
    /**
     * Password del usuario
     */
    password?: string;
    /**
     * Rol(es) del usuario
     */
    rol?: Array<Rol>;
}
