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
    /**
     * Remember me flag
     */
    rememberMe?: boolean;
}

/**
 * Register Init DTO
 */
export interface RegisterInitDto {
    /**
     * User's phone number
     * @example "+998901234567"
     */
    phone: string;
    /**
     * User's Telegram Chat ID
     * @example "123456789"
     */
    telegramChatId?: string;
}

/**
 * Registration Verify DTO
 */
export interface RegisterVerifyDto {
    /**
     * Temporary ID from init
     * @example "temp_uuid_here"
     */
    tempId: string;
    /**
     * 6-digit verification code
     * @example "123456"
     */
    code: string;
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
    /**
     * User's password confirm
     * @example "password123"
     */
    passwordConfirm: string;
    /**
     * Date of birth (optional)
     * @example "2000-01-15"
     */
    dateOfBirth?: string;
    /**
     * City (optional)
     * @example "Tashkent"
     */
    city?: string;
}

/**
 * Log Out DTO
 */
export interface LogOutDto {
    /**
     * Revoke all sessions flag
     */
    revokeAll?: boolean;
}
