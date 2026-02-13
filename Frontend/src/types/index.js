// Type definitions as JSDoc comments for reference

/**
 * @typedef {'admin' | 'librarian' | 'reader'} UserRole
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string} phone
 * @property {UserRole} role
 * @property {string} [branchId]
 * @property {string} [avatar]
 * @property {'active' | 'blocked'} status
 * @property {string} createdAt
 */

/**
 * @typedef {Object} Book
 * @property {string} id
 * @property {string} title
 * @property {string} author
 * @property {string} isbn
 * @property {string} genre
 * @property {string} language
 * @property {number} publishYear
 * @property {string} coverImage
 * @property {string} description
 * @property {number} availableCopies
 * @property {number} totalCopies
 */

/**
 * @typedef {Object} Reservation
 * @property {string} id
 * @property {string} bookId
 * @property {string} userId
 * @property {'pending' | 'ready' | 'expired' | 'completed'} status
 * @property {string} branchId
 * @property {string} createdAt
 * @property {string} expiresAt
 */

/**
 * @typedef {Object} Rent
 * @property {string} id
 * @property {string} bookCopyId
 * @property {string} userId
 * @property {string} staffId
 * @property {string} startDate
 * @property {string} dueDate
 * @property {string} [returnDate]
 * @property {'active' | 'overdue' | 'returned'} status
 * @property {number} [fine]
 */

export {};
