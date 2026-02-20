/**
 * Login credentials DTO
 */
export interface LoginDto {
    /**
     * User's phone number
     * @example "+998901234567"
     */
    phone: string;
    /**
     * User's password
     * @example "password123"
     */
    password: string;
}

/**
 * Registration details DTO
 */
export interface RegisterDto {
    /**
     * User's phone number
     * @example "+998901234567"
     */
    phone: string;
    /**
     * User's first name
     * @example "John"
     */
    firstName: string;
    /**
     * User's last name
     * @example "Doe"
     */
    lastName: string;
    /**
     * User's password
     * @example "password123"
     */
    password: string;
}
