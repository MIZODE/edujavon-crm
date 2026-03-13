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
     * User's Full name
     * @example "John Doe"
     */
    fullName: string;
    /**
     * User's password
     * @example "password123"
     */
    password: string;
}

/**
 * Send verification code DTO
 */
export interface SendCodeDto {
    /**
     * User's phone number
     * @example "+998901234567"
     */
    phone: string;
}

/**
 * Verify code DTO
 */
export interface VerifyCodeDto {
    /**
     * User's phone number
     * @example "+998901234567"
     */
    phone: string;
    /**
     * 6-digit verification code
     * @example "123456"
     */
    code: string;
}

/**
 * Log Out DTO
 */
export interface LogOutDto {
    /**
     * User's refresh token
     * @example "refresh_token"
     */
    refreshToken: string;
}
