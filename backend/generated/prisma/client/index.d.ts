
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model Author
 * 
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>
/**
 * Model BookAuthor
 * 
 */
export type BookAuthor = $Result.DefaultSelection<Prisma.$BookAuthorPayload>
/**
 * Model Publisher
 * 
 */
export type Publisher = $Result.DefaultSelection<Prisma.$PublisherPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model BookGenre
 * 
 */
export type BookGenre = $Result.DefaultSelection<Prisma.$BookGenrePayload>
/**
 * Model BookCopy
 * 
 */
export type BookCopy = $Result.DefaultSelection<Prisma.$BookCopyPayload>
/**
 * Model InventoryLog
 * 
 */
export type InventoryLog = $Result.DefaultSelection<Prisma.$InventoryLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Action: {
  User_LOGIN: 'User_LOGIN',
  User_LOGOUT: 'User_LOGOUT',
  USER_CREATE: 'USER_CREATE',
  USER_UPDATE: 'USER_UPDATE',
  USER_DELETE: 'USER_DELETE'
};

export type Action = (typeof Action)[keyof typeof Action]


export const Role: {
  SUPERVISOR: 'SUPERVISOR',
  ADMIN: 'ADMIN',
  OWNER: 'OWNER',
  MANAGER: 'MANAGER',
  LIBRARIAN: 'LIBRARIAN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  DELETED: 'DELETED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const AgeCategory: {
  CHILDREN: 'CHILDREN',
  TEEN: 'TEEN',
  ADULT: 'ADULT'
};

export type AgeCategory = (typeof AgeCategory)[keyof typeof AgeCategory]


export const CoverType: {
  HARD: 'HARD',
  SOFT: 'SOFT'
};

export type CoverType = (typeof CoverType)[keyof typeof CoverType]


export const BookCondition: {
  NEW: 'NEW',
  GOOD: 'GOOD',
  SATISFACTORY: 'SATISFACTORY',
  POOR: 'POOR'
};

export type BookCondition = (typeof BookCondition)[keyof typeof BookCondition]


export const CopyStatus: {
  AVAILABLE: 'AVAILABLE',
  RESERVED: 'RESERVED',
  ON_RENT: 'ON_RENT',
  LOST: 'LOST',
  DAMAGED: 'DAMAGED',
  UNDER_REPAIR: 'UNDER_REPAIR',
  WITHDRAWN: 'WITHDRAWN',
  IN_TRANSIT: 'IN_TRANSIT'
};

export type CopyStatus = (typeof CopyStatus)[keyof typeof CopyStatus]


export const InventoryAction: {
  BOOKS_ADDED: 'BOOKS_ADDED',
  COPY_STATUS_CHANGED: 'COPY_STATUS_CHANGED',
  LOCATION_CHANGED: 'LOCATION_CHANGED',
  COPY_TRANSFERRED: 'COPY_TRANSFERRED',
  COPY_REPAIRED: 'COPY_REPAIRED',
  COPY_WITHDRAWN: 'COPY_WITHDRAWN'
};

export type InventoryAction = (typeof InventoryAction)[keyof typeof InventoryAction]

}

export type Action = $Enums.Action

export const Action: typeof $Enums.Action

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type AgeCategory = $Enums.AgeCategory

export const AgeCategory: typeof $Enums.AgeCategory

export type CoverType = $Enums.CoverType

export const CoverType: typeof $Enums.CoverType

export type BookCondition = $Enums.BookCondition

export const BookCondition: typeof $Enums.BookCondition

export type CopyStatus = $Enums.CopyStatus

export const CopyStatus: typeof $Enums.CopyStatus

export type InventoryAction = $Enums.InventoryAction

export const InventoryAction: typeof $Enums.InventoryAction

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AuditLogs
 * const auditLogs = await prisma.auditLog.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AuditLogs
   * const auditLogs = await prisma.auditLog.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookAuthor`: Exposes CRUD operations for the **BookAuthor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookAuthors
    * const bookAuthors = await prisma.bookAuthor.findMany()
    * ```
    */
  get bookAuthor(): Prisma.BookAuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publisher`: Exposes CRUD operations for the **Publisher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publishers
    * const publishers = await prisma.publisher.findMany()
    * ```
    */
  get publisher(): Prisma.PublisherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookGenre`: Exposes CRUD operations for the **BookGenre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookGenres
    * const bookGenres = await prisma.bookGenre.findMany()
    * ```
    */
  get bookGenre(): Prisma.BookGenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookCopy`: Exposes CRUD operations for the **BookCopy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookCopies
    * const bookCopies = await prisma.bookCopy.findMany()
    * ```
    */
  get bookCopy(): Prisma.BookCopyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryLog`: Exposes CRUD operations for the **InventoryLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryLogs
    * const inventoryLogs = await prisma.inventoryLog.findMany()
    * ```
    */
  get inventoryLog(): Prisma.InventoryLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AuditLog: 'AuditLog',
    Permission: 'Permission',
    Session: 'Session',
    User: 'User',
    File: 'File',
    Book: 'Book',
    Author: 'Author',
    BookAuthor: 'BookAuthor',
    Publisher: 'Publisher',
    Genre: 'Genre',
    BookGenre: 'BookGenre',
    BookCopy: 'BookCopy',
    InventoryLog: 'InventoryLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "auditLog" | "permission" | "session" | "user" | "file" | "book" | "author" | "bookAuthor" | "publisher" | "genre" | "bookGenre" | "bookCopy" | "inventoryLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>
        fields: Prisma.AuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      BookAuthor: {
        payload: Prisma.$BookAuthorPayload<ExtArgs>
        fields: Prisma.BookAuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookAuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookAuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          findFirst: {
            args: Prisma.BookAuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookAuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          findMany: {
            args: Prisma.BookAuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>[]
          }
          create: {
            args: Prisma.BookAuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          createMany: {
            args: Prisma.BookAuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookAuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>[]
          }
          delete: {
            args: Prisma.BookAuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          update: {
            args: Prisma.BookAuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          deleteMany: {
            args: Prisma.BookAuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookAuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookAuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>[]
          }
          upsert: {
            args: Prisma.BookAuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookAuthorPayload>
          }
          aggregate: {
            args: Prisma.BookAuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookAuthor>
          }
          groupBy: {
            args: Prisma.BookAuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookAuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookAuthorCountArgs<ExtArgs>
            result: $Utils.Optional<BookAuthorCountAggregateOutputType> | number
          }
        }
      }
      Publisher: {
        payload: Prisma.$PublisherPayload<ExtArgs>
        fields: Prisma.PublisherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublisherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublisherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          findFirst: {
            args: Prisma.PublisherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublisherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          findMany: {
            args: Prisma.PublisherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>[]
          }
          create: {
            args: Prisma.PublisherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          createMany: {
            args: Prisma.PublisherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublisherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>[]
          }
          delete: {
            args: Prisma.PublisherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          update: {
            args: Prisma.PublisherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          deleteMany: {
            args: Prisma.PublisherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublisherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublisherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>[]
          }
          upsert: {
            args: Prisma.PublisherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          aggregate: {
            args: Prisma.PublisherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublisher>
          }
          groupBy: {
            args: Prisma.PublisherGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublisherGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublisherCountArgs<ExtArgs>
            result: $Utils.Optional<PublisherCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      BookGenre: {
        payload: Prisma.$BookGenrePayload<ExtArgs>
        fields: Prisma.BookGenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookGenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookGenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          findFirst: {
            args: Prisma.BookGenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookGenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          findMany: {
            args: Prisma.BookGenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>[]
          }
          create: {
            args: Prisma.BookGenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          createMany: {
            args: Prisma.BookGenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookGenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>[]
          }
          delete: {
            args: Prisma.BookGenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          update: {
            args: Prisma.BookGenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          deleteMany: {
            args: Prisma.BookGenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookGenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookGenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>[]
          }
          upsert: {
            args: Prisma.BookGenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          aggregate: {
            args: Prisma.BookGenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookGenre>
          }
          groupBy: {
            args: Prisma.BookGenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookGenreCountArgs<ExtArgs>
            result: $Utils.Optional<BookGenreCountAggregateOutputType> | number
          }
        }
      }
      BookCopy: {
        payload: Prisma.$BookCopyPayload<ExtArgs>
        fields: Prisma.BookCopyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookCopyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCopyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookCopyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCopyPayload>
          }
          findFirst: {
            args: Prisma.BookCopyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCopyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookCopyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCopyPayload>
          }
          findMany: {
            args: Prisma.BookCopyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCopyPayload>[]
          }
          create: {
            args: Prisma.BookCopyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCopyPayload>
          }
          createMany: {
            args: Prisma.BookCopyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCopyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCopyPayload>[]
          }
          delete: {
            args: Prisma.BookCopyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCopyPayload>
          }
          update: {
            args: Prisma.BookCopyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCopyPayload>
          }
          deleteMany: {
            args: Prisma.BookCopyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookCopyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookCopyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCopyPayload>[]
          }
          upsert: {
            args: Prisma.BookCopyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookCopyPayload>
          }
          aggregate: {
            args: Prisma.BookCopyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookCopy>
          }
          groupBy: {
            args: Prisma.BookCopyGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookCopyGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCopyCountArgs<ExtArgs>
            result: $Utils.Optional<BookCopyCountAggregateOutputType> | number
          }
        }
      }
      InventoryLog: {
        payload: Prisma.$InventoryLogPayload<ExtArgs>
        fields: Prisma.InventoryLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          findFirst: {
            args: Prisma.InventoryLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          findMany: {
            args: Prisma.InventoryLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>[]
          }
          create: {
            args: Prisma.InventoryLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          createMany: {
            args: Prisma.InventoryLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>[]
          }
          delete: {
            args: Prisma.InventoryLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          update: {
            args: Prisma.InventoryLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          deleteMany: {
            args: Prisma.InventoryLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>[]
          }
          upsert: {
            args: Prisma.InventoryLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryLogPayload>
          }
          aggregate: {
            args: Prisma.InventoryLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryLog>
          }
          groupBy: {
            args: Prisma.InventoryLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryLogCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    auditLog?: AuditLogOmit
    permission?: PermissionOmit
    session?: SessionOmit
    user?: UserOmit
    file?: FileOmit
    book?: BookOmit
    author?: AuthorOmit
    bookAuthor?: BookAuthorOmit
    publisher?: PublisherOmit
    genre?: GenreOmit
    bookGenre?: BookGenreOmit
    bookCopy?: BookCopyOmit
    inventoryLog?: InventoryLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    AuditLog: number
    Session: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AuditLog?: boolean | UserCountOutputTypeCountAuditLogArgs
    Session?: boolean | UserCountOutputTypeCountSessionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    authors: number
    genres: number
    copies: number
    inventoryLogs: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authors?: boolean | BookCountOutputTypeCountAuthorsArgs
    genres?: boolean | BookCountOutputTypeCountGenresArgs
    copies?: boolean | BookCountOutputTypeCountCopiesArgs
    inventoryLogs?: boolean | BookCountOutputTypeCountInventoryLogsArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountAuthorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookAuthorWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookGenreWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountCopiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookCopyWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountInventoryLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryLogWhereInput
  }


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    books: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | AuthorCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookAuthorWhereInput
  }


  /**
   * Count Type PublisherCountOutputType
   */

  export type PublisherCountOutputType = {
    books: number
  }

  export type PublisherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | PublisherCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * PublisherCountOutputType without action
   */
  export type PublisherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherCountOutputType
     */
    select?: PublisherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublisherCountOutputType without action
   */
  export type PublisherCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    children: number
    books: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | GenreCountOutputTypeCountChildrenArgs
    books?: boolean | GenreCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookGenreWhereInput
  }


  /**
   * Count Type BookCopyCountOutputType
   */

  export type BookCopyCountOutputType = {
    inventoryLogs: number
  }

  export type BookCopyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryLogs?: boolean | BookCopyCountOutputTypeCountInventoryLogsArgs
  }

  // Custom InputTypes
  /**
   * BookCopyCountOutputType without action
   */
  export type BookCopyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCopyCountOutputType
     */
    select?: BookCopyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCopyCountOutputType without action
   */
  export type BookCopyCountOutputTypeCountInventoryLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogAvgAggregateOutputType = {
    userId: number | null
  }

  export type AuditLogSumAggregateOutputType = {
    userId: number | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: number | null
    action: $Enums.Action | null
    resource: string | null
    resourceId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    action: $Enums.Action | null
    resource: string | null
    resourceId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    resource: number
    resourceId: number
    oldValue: number
    newValue: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type AuditLogAvgAggregateInputType = {
    userId?: true
  }

  export type AuditLogSumAggregateInputType = {
    userId?: true
  }

  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    oldValue?: true
    newValue?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _avg?: AuditLogAvgAggregateInputType
    _sum?: AuditLogSumAggregateInputType
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: number | null
    action: $Enums.Action
    resource: string
    resourceId: string | null
    oldValue: JsonValue | null
    newValue: JsonValue | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    oldValue?: boolean
    newValue?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    User?: boolean | AuditLog$UserArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    oldValue?: boolean
    newValue?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    User?: boolean | AuditLog$UserArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    oldValue?: boolean
    newValue?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    User?: boolean | AuditLog$UserArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    oldValue?: boolean
    newValue?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "resource" | "resourceId" | "oldValue" | "newValue" | "ipAddress" | "userAgent" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | AuditLog$UserArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | AuditLog$UserArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | AuditLog$UserArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number | null
      action: $Enums.Action
      resource: string
      resourceId: string | null
      oldValue: Prisma.JsonValue | null
      newValue: Prisma.JsonValue | null
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends AuditLog$UserArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'Int'>
    readonly action: FieldRef<"AuditLog", 'Action'>
    readonly resource: FieldRef<"AuditLog", 'String'>
    readonly resourceId: FieldRef<"AuditLog", 'String'>
    readonly oldValue: FieldRef<"AuditLog", 'Json'>
    readonly newValue: FieldRef<"AuditLog", 'Json'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly userAgent: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.User
   */
  export type AuditLog$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionMinAggregateOutputType = {
    id: string | null
    resource: string | null
    action: string | null
    description: string | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: string | null
    resource: string | null
    action: string | null
    description: string | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    resource: number
    action: number
    description: number
    _all: number
  }


  export type PermissionMinAggregateInputType = {
    id?: true
    resource?: true
    action?: true
    description?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    resource?: true
    action?: true
    description?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    resource?: true
    action?: true
    description?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: string
    resource: string
    action: string
    description: string | null
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resource?: boolean
    action?: boolean
    description?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resource?: boolean
    action?: boolean
    description?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resource?: boolean
    action?: boolean
    description?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    resource?: boolean
    action?: boolean
    description?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resource" | "action" | "description", ExtArgs["result"]["permission"]>

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resource: string
      action: string
      description: string | null
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'String'>
    readonly resource: FieldRef<"Permission", 'String'>
    readonly action: FieldRef<"Permission", 'String'>
    readonly description: FieldRef<"Permission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: number | null
    refreshToken: string | null
    deviceInfo: string | null
    ipAddress: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    refreshToken: string | null
    deviceInfo: string | null
    ipAddress: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    refreshToken: number
    deviceInfo: number
    ipAddress: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    deviceInfo?: true
    ipAddress?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    deviceInfo?: true
    ipAddress?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    refreshToken?: true
    deviceInfo?: true
    ipAddress?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: number
    refreshToken: string
    deviceInfo: string | null
    ipAddress: string | null
    expiresAt: Date
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    refreshToken?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "refreshToken" | "deviceInfo" | "ipAddress" | "expiresAt" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      refreshToken: string
      deviceInfo: string | null
      ipAddress: string | null
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'Int'>
    readonly refreshToken: FieldRef<"Session", 'String'>
    readonly deviceInfo: FieldRef<"Session", 'String'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    phone: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    avatar: string | null
    isActive: boolean | null
    isVerified: boolean | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    chatId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    phone: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    avatar: string | null
    isActive: boolean | null
    isVerified: boolean | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    chatId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phone: number
    password: number
    firstName: number
    lastName: number
    avatar: number
    isActive: number
    isVerified: number
    role: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    chatId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    phone?: true
    password?: true
    firstName?: true
    lastName?: true
    avatar?: true
    isActive?: true
    isVerified?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    chatId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phone?: true
    password?: true
    firstName?: true
    lastName?: true
    avatar?: true
    isActive?: true
    isVerified?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    chatId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phone?: true
    password?: true
    firstName?: true
    lastName?: true
    avatar?: true
    isActive?: true
    isVerified?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    chatId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    phone: string | null
    password: string
    firstName: string
    lastName: string
    avatar: string | null
    isActive: boolean
    isVerified: boolean
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    chatId: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    isActive?: boolean
    isVerified?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    chatId?: boolean
    AuditLog?: boolean | User$AuditLogArgs<ExtArgs>
    Session?: boolean | User$SessionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    isActive?: boolean
    isVerified?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    chatId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    isActive?: boolean
    isVerified?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    chatId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    phone?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    isActive?: boolean
    isVerified?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    chatId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "password" | "firstName" | "lastName" | "avatar" | "isActive" | "isVerified" | "role" | "createdAt" | "updatedAt" | "deletedAt" | "chatId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AuditLog?: boolean | User$AuditLogArgs<ExtArgs>
    Session?: boolean | User$SessionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      AuditLog: Prisma.$AuditLogPayload<ExtArgs>[]
      Session: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      phone: string | null
      password: string
      firstName: string
      lastName: string
      avatar: string | null
      isActive: boolean
      isVerified: boolean
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
      chatId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AuditLog<T extends User$AuditLogArgs<ExtArgs> = {}>(args?: Subset<T, User$AuditLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Session<T extends User$SessionArgs<ExtArgs> = {}>(args?: Subset<T, User$SessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly chatId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.AuditLog
   */
  export type User$AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User.Session
   */
  export type User$SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    size: number | null
  }

  export type FileSumAggregateOutputType = {
    size: number | null
  }

  export type FileMinAggregateOutputType = {
    id: string | null
    path: string | null
    size: number | null
    mimeType: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileMaxAggregateOutputType = {
    id: string | null
    path: string | null
    size: number | null
    mimeType: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    path: number
    size: number
    mimeType: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    size?: true
  }

  export type FileSumAggregateInputType = {
    size?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    path?: true
    size?: true
    mimeType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    path?: true
    size?: true
    mimeType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    path?: true
    size?: true
    mimeType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: string
    path: string
    size: number
    mimeType: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    size?: boolean
    mimeType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    size?: boolean
    mimeType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["file"]>

  export type FileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    size?: boolean
    mimeType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    path?: boolean
    size?: boolean
    mimeType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "size" | "mimeType" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["file"]>

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      path: string
      size: number
      mimeType: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FileUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the File model
   */
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'String'>
    readonly path: FieldRef<"File", 'String'>
    readonly size: FieldRef<"File", 'Int'>
    readonly mimeType: FieldRef<"File", 'String'>
    readonly status: FieldRef<"File", 'Status'>
    readonly createdAt: FieldRef<"File", 'DateTime'>
    readonly updatedAt: FieldRef<"File", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File updateManyAndReturn
   */
  export type FileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    publishYear: number | null
    pageCount: number | null
    weight: number | null
    height: number | null
    width: number | null
    thickness: number | null
    seriesNumber: number | null
    seriesTotal: number | null
  }

  export type BookSumAggregateOutputType = {
    publishYear: number | null
    pageCount: number | null
    weight: number | null
    height: number | null
    width: number | null
    thickness: number | null
    seriesNumber: number | null
    seriesTotal: number | null
  }

  export type BookMinAggregateOutputType = {
    id: string | null
    isbn10: string | null
    isbn13: string | null
    titleUz: string | null
    titleRu: string | null
    titleEn: string | null
    publisherId: string | null
    publishYear: number | null
    pageCount: number | null
    ageCategory: $Enums.AgeCategory | null
    coverType: $Enums.CoverType | null
    shortDescription: string | null
    fullDescription: string | null
    coverImageUrl: string | null
    coverThumbnailUrl: string | null
    weight: number | null
    height: number | null
    width: number | null
    thickness: number | null
    seriesName: string | null
    seriesNumber: number | null
    seriesTotal: number | null
    ddcCode: string | null
    udcCode: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type BookMaxAggregateOutputType = {
    id: string | null
    isbn10: string | null
    isbn13: string | null
    titleUz: string | null
    titleRu: string | null
    titleEn: string | null
    publisherId: string | null
    publishYear: number | null
    pageCount: number | null
    ageCategory: $Enums.AgeCategory | null
    coverType: $Enums.CoverType | null
    shortDescription: string | null
    fullDescription: string | null
    coverImageUrl: string | null
    coverThumbnailUrl: string | null
    weight: number | null
    height: number | null
    width: number | null
    thickness: number | null
    seriesName: string | null
    seriesNumber: number | null
    seriesTotal: number | null
    ddcCode: string | null
    udcCode: string | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    isbn10: number
    isbn13: number
    titleUz: number
    titleRu: number
    titleEn: number
    publisherId: number
    publishYear: number
    languages: number
    pageCount: number
    ageCategory: number
    coverType: number
    shortDescription: number
    fullDescription: number
    coverImageUrl: number
    coverThumbnailUrl: number
    weight: number
    height: number
    width: number
    thickness: number
    seriesName: number
    seriesNumber: number
    seriesTotal: number
    ddcCode: number
    udcCode: number
    tags: number
    createdBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    publishYear?: true
    pageCount?: true
    weight?: true
    height?: true
    width?: true
    thickness?: true
    seriesNumber?: true
    seriesTotal?: true
  }

  export type BookSumAggregateInputType = {
    publishYear?: true
    pageCount?: true
    weight?: true
    height?: true
    width?: true
    thickness?: true
    seriesNumber?: true
    seriesTotal?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    isbn10?: true
    isbn13?: true
    titleUz?: true
    titleRu?: true
    titleEn?: true
    publisherId?: true
    publishYear?: true
    pageCount?: true
    ageCategory?: true
    coverType?: true
    shortDescription?: true
    fullDescription?: true
    coverImageUrl?: true
    coverThumbnailUrl?: true
    weight?: true
    height?: true
    width?: true
    thickness?: true
    seriesName?: true
    seriesNumber?: true
    seriesTotal?: true
    ddcCode?: true
    udcCode?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    isbn10?: true
    isbn13?: true
    titleUz?: true
    titleRu?: true
    titleEn?: true
    publisherId?: true
    publishYear?: true
    pageCount?: true
    ageCategory?: true
    coverType?: true
    shortDescription?: true
    fullDescription?: true
    coverImageUrl?: true
    coverThumbnailUrl?: true
    weight?: true
    height?: true
    width?: true
    thickness?: true
    seriesName?: true
    seriesNumber?: true
    seriesTotal?: true
    ddcCode?: true
    udcCode?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    isbn10?: true
    isbn13?: true
    titleUz?: true
    titleRu?: true
    titleEn?: true
    publisherId?: true
    publishYear?: true
    languages?: true
    pageCount?: true
    ageCategory?: true
    coverType?: true
    shortDescription?: true
    fullDescription?: true
    coverImageUrl?: true
    coverThumbnailUrl?: true
    weight?: true
    height?: true
    width?: true
    thickness?: true
    seriesName?: true
    seriesNumber?: true
    seriesTotal?: true
    ddcCode?: true
    udcCode?: true
    tags?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: string
    isbn10: string | null
    isbn13: string
    titleUz: string
    titleRu: string | null
    titleEn: string | null
    publisherId: string
    publishYear: number
    languages: string[]
    pageCount: number | null
    ageCategory: $Enums.AgeCategory
    coverType: $Enums.CoverType
    shortDescription: string | null
    fullDescription: string | null
    coverImageUrl: string | null
    coverThumbnailUrl: string | null
    weight: number | null
    height: number | null
    width: number | null
    thickness: number | null
    seriesName: string | null
    seriesNumber: number | null
    seriesTotal: number | null
    ddcCode: string | null
    udcCode: string | null
    tags: string[]
    createdBy: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isbn10?: boolean
    isbn13?: boolean
    titleUz?: boolean
    titleRu?: boolean
    titleEn?: boolean
    publisherId?: boolean
    publishYear?: boolean
    languages?: boolean
    pageCount?: boolean
    ageCategory?: boolean
    coverType?: boolean
    shortDescription?: boolean
    fullDescription?: boolean
    coverImageUrl?: boolean
    coverThumbnailUrl?: boolean
    weight?: boolean
    height?: boolean
    width?: boolean
    thickness?: boolean
    seriesName?: boolean
    seriesNumber?: boolean
    seriesTotal?: boolean
    ddcCode?: boolean
    udcCode?: boolean
    tags?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
    authors?: boolean | Book$authorsArgs<ExtArgs>
    genres?: boolean | Book$genresArgs<ExtArgs>
    copies?: boolean | Book$copiesArgs<ExtArgs>
    inventoryLogs?: boolean | Book$inventoryLogsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isbn10?: boolean
    isbn13?: boolean
    titleUz?: boolean
    titleRu?: boolean
    titleEn?: boolean
    publisherId?: boolean
    publishYear?: boolean
    languages?: boolean
    pageCount?: boolean
    ageCategory?: boolean
    coverType?: boolean
    shortDescription?: boolean
    fullDescription?: boolean
    coverImageUrl?: boolean
    coverThumbnailUrl?: boolean
    weight?: boolean
    height?: boolean
    width?: boolean
    thickness?: boolean
    seriesName?: boolean
    seriesNumber?: boolean
    seriesTotal?: boolean
    ddcCode?: boolean
    udcCode?: boolean
    tags?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isbn10?: boolean
    isbn13?: boolean
    titleUz?: boolean
    titleRu?: boolean
    titleEn?: boolean
    publisherId?: boolean
    publishYear?: boolean
    languages?: boolean
    pageCount?: boolean
    ageCategory?: boolean
    coverType?: boolean
    shortDescription?: boolean
    fullDescription?: boolean
    coverImageUrl?: boolean
    coverThumbnailUrl?: boolean
    weight?: boolean
    height?: boolean
    width?: boolean
    thickness?: boolean
    seriesName?: boolean
    seriesNumber?: boolean
    seriesTotal?: boolean
    ddcCode?: boolean
    udcCode?: boolean
    tags?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    isbn10?: boolean
    isbn13?: boolean
    titleUz?: boolean
    titleRu?: boolean
    titleEn?: boolean
    publisherId?: boolean
    publishYear?: boolean
    languages?: boolean
    pageCount?: boolean
    ageCategory?: boolean
    coverType?: boolean
    shortDescription?: boolean
    fullDescription?: boolean
    coverImageUrl?: boolean
    coverThumbnailUrl?: boolean
    weight?: boolean
    height?: boolean
    width?: boolean
    thickness?: boolean
    seriesName?: boolean
    seriesNumber?: boolean
    seriesTotal?: boolean
    ddcCode?: boolean
    udcCode?: boolean
    tags?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isbn10" | "isbn13" | "titleUz" | "titleRu" | "titleEn" | "publisherId" | "publishYear" | "languages" | "pageCount" | "ageCategory" | "coverType" | "shortDescription" | "fullDescription" | "coverImageUrl" | "coverThumbnailUrl" | "weight" | "height" | "width" | "thickness" | "seriesName" | "seriesNumber" | "seriesTotal" | "ddcCode" | "udcCode" | "tags" | "createdBy" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
    authors?: boolean | Book$authorsArgs<ExtArgs>
    genres?: boolean | Book$genresArgs<ExtArgs>
    copies?: boolean | Book$copiesArgs<ExtArgs>
    inventoryLogs?: boolean | Book$inventoryLogsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
  }
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      publisher: Prisma.$PublisherPayload<ExtArgs>
      authors: Prisma.$BookAuthorPayload<ExtArgs>[]
      genres: Prisma.$BookGenrePayload<ExtArgs>[]
      copies: Prisma.$BookCopyPayload<ExtArgs>[]
      inventoryLogs: Prisma.$InventoryLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isbn10: string | null
      isbn13: string
      titleUz: string
      titleRu: string | null
      titleEn: string | null
      publisherId: string
      publishYear: number
      languages: string[]
      pageCount: number | null
      ageCategory: $Enums.AgeCategory
      coverType: $Enums.CoverType
      shortDescription: string | null
      fullDescription: string | null
      coverImageUrl: string | null
      coverThumbnailUrl: string | null
      weight: number | null
      height: number | null
      width: number | null
      thickness: number | null
      seriesName: string | null
      seriesNumber: number | null
      seriesTotal: number | null
      ddcCode: string | null
      udcCode: string | null
      tags: string[]
      createdBy: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publisher<T extends PublisherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublisherDefaultArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    authors<T extends Book$authorsArgs<ExtArgs> = {}>(args?: Subset<T, Book$authorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    genres<T extends Book$genresArgs<ExtArgs> = {}>(args?: Subset<T, Book$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    copies<T extends Book$copiesArgs<ExtArgs> = {}>(args?: Subset<T, Book$copiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookCopyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventoryLogs<T extends Book$inventoryLogsArgs<ExtArgs> = {}>(args?: Subset<T, Book$inventoryLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'String'>
    readonly isbn10: FieldRef<"Book", 'String'>
    readonly isbn13: FieldRef<"Book", 'String'>
    readonly titleUz: FieldRef<"Book", 'String'>
    readonly titleRu: FieldRef<"Book", 'String'>
    readonly titleEn: FieldRef<"Book", 'String'>
    readonly publisherId: FieldRef<"Book", 'String'>
    readonly publishYear: FieldRef<"Book", 'Int'>
    readonly languages: FieldRef<"Book", 'String[]'>
    readonly pageCount: FieldRef<"Book", 'Int'>
    readonly ageCategory: FieldRef<"Book", 'AgeCategory'>
    readonly coverType: FieldRef<"Book", 'CoverType'>
    readonly shortDescription: FieldRef<"Book", 'String'>
    readonly fullDescription: FieldRef<"Book", 'String'>
    readonly coverImageUrl: FieldRef<"Book", 'String'>
    readonly coverThumbnailUrl: FieldRef<"Book", 'String'>
    readonly weight: FieldRef<"Book", 'Int'>
    readonly height: FieldRef<"Book", 'Int'>
    readonly width: FieldRef<"Book", 'Int'>
    readonly thickness: FieldRef<"Book", 'Int'>
    readonly seriesName: FieldRef<"Book", 'String'>
    readonly seriesNumber: FieldRef<"Book", 'Int'>
    readonly seriesTotal: FieldRef<"Book", 'Int'>
    readonly ddcCode: FieldRef<"Book", 'String'>
    readonly udcCode: FieldRef<"Book", 'String'>
    readonly tags: FieldRef<"Book", 'String[]'>
    readonly createdBy: FieldRef<"Book", 'String'>
    readonly createdAt: FieldRef<"Book", 'DateTime'>
    readonly updatedAt: FieldRef<"Book", 'DateTime'>
    readonly deletedAt: FieldRef<"Book", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.authors
   */
  export type Book$authorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    where?: BookAuthorWhereInput
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    cursor?: BookAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[]
  }

  /**
   * Book.genres
   */
  export type Book$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    where?: BookGenreWhereInput
    orderBy?: BookGenreOrderByWithRelationInput | BookGenreOrderByWithRelationInput[]
    cursor?: BookGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookGenreScalarFieldEnum | BookGenreScalarFieldEnum[]
  }

  /**
   * Book.copies
   */
  export type Book$copiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCopy
     */
    select?: BookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCopy
     */
    omit?: BookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCopyInclude<ExtArgs> | null
    where?: BookCopyWhereInput
    orderBy?: BookCopyOrderByWithRelationInput | BookCopyOrderByWithRelationInput[]
    cursor?: BookCopyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookCopyScalarFieldEnum | BookCopyScalarFieldEnum[]
  }

  /**
   * Book.inventoryLogs
   */
  export type Book$inventoryLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    where?: InventoryLogWhereInput
    orderBy?: InventoryLogOrderByWithRelationInput | InventoryLogOrderByWithRelationInput[]
    cursor?: InventoryLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryLogScalarFieldEnum | InventoryLogScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    biography: string | null
    birthDate: Date | null
    nationality: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    biography: string | null
    birthDate: Date | null
    nationality: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    biography: number
    birthDate: number
    nationality: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthorMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    biography?: true
    birthDate?: true
    nationality?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    biography?: true
    birthDate?: true
    nationality?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    biography?: true
    birthDate?: true
    nationality?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithAggregationInput | AuthorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    biography: string | null
    birthDate: Date | null
    nationality: string | null
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: AuthorCountAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    biography?: boolean
    birthDate?: boolean
    nationality?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    books?: boolean | Author$booksArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    biography?: boolean
    birthDate?: boolean
    nationality?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    biography?: boolean
    birthDate?: boolean
    nationality?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    biography?: boolean
    birthDate?: boolean
    nationality?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "biography" | "birthDate" | "nationality" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["author"]>
  export type AuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Author$booksArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Author"
    objects: {
      books: Prisma.$BookAuthorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      biography: string | null
      birthDate: Date | null
      nationality: string | null
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type AuthorGetPayload<S extends boolean | null | undefined | AuthorDefaultArgs> = $Result.GetResult<Prisma.$AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorFindManyArgs>(args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends AuthorCreateArgs>(args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorCreateManyArgs>(args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends AuthorDeleteArgs>(args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorUpdateArgs>(args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorDeleteManyArgs>(args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorUpdateManyArgs>(args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Author model
   */
  readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Author$booksArgs<ExtArgs> = {}>(args?: Subset<T, Author$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Author model
   */
  interface AuthorFieldRefs {
    readonly id: FieldRef<"Author", 'String'>
    readonly firstName: FieldRef<"Author", 'String'>
    readonly lastName: FieldRef<"Author", 'String'>
    readonly biography: FieldRef<"Author", 'String'>
    readonly birthDate: FieldRef<"Author", 'DateTime'>
    readonly nationality: FieldRef<"Author", 'String'>
    readonly avatarUrl: FieldRef<"Author", 'String'>
    readonly createdAt: FieldRef<"Author", 'DateTime'>
    readonly updatedAt: FieldRef<"Author", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author updateManyAndReturn
   */
  export type AuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to delete.
     */
    limit?: number
  }

  /**
   * Author.books
   */
  export type Author$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    where?: BookAuthorWhereInput
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    cursor?: BookAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[]
  }

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
  }


  /**
   * Model BookAuthor
   */

  export type AggregateBookAuthor = {
    _count: BookAuthorCountAggregateOutputType | null
    _avg: BookAuthorAvgAggregateOutputType | null
    _sum: BookAuthorSumAggregateOutputType | null
    _min: BookAuthorMinAggregateOutputType | null
    _max: BookAuthorMaxAggregateOutputType | null
  }

  export type BookAuthorAvgAggregateOutputType = {
    authorOrder: number | null
  }

  export type BookAuthorSumAggregateOutputType = {
    authorOrder: number | null
  }

  export type BookAuthorMinAggregateOutputType = {
    bookId: string | null
    authorId: string | null
    authorOrder: number | null
  }

  export type BookAuthorMaxAggregateOutputType = {
    bookId: string | null
    authorId: string | null
    authorOrder: number | null
  }

  export type BookAuthorCountAggregateOutputType = {
    bookId: number
    authorId: number
    authorOrder: number
    _all: number
  }


  export type BookAuthorAvgAggregateInputType = {
    authorOrder?: true
  }

  export type BookAuthorSumAggregateInputType = {
    authorOrder?: true
  }

  export type BookAuthorMinAggregateInputType = {
    bookId?: true
    authorId?: true
    authorOrder?: true
  }

  export type BookAuthorMaxAggregateInputType = {
    bookId?: true
    authorId?: true
    authorOrder?: true
  }

  export type BookAuthorCountAggregateInputType = {
    bookId?: true
    authorId?: true
    authorOrder?: true
    _all?: true
  }

  export type BookAuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookAuthor to aggregate.
     */
    where?: BookAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookAuthors to fetch.
     */
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookAuthors
    **/
    _count?: true | BookAuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookAuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookAuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookAuthorMaxAggregateInputType
  }

  export type GetBookAuthorAggregateType<T extends BookAuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateBookAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookAuthor[P]>
      : GetScalarType<T[P], AggregateBookAuthor[P]>
  }




  export type BookAuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookAuthorWhereInput
    orderBy?: BookAuthorOrderByWithAggregationInput | BookAuthorOrderByWithAggregationInput[]
    by: BookAuthorScalarFieldEnum[] | BookAuthorScalarFieldEnum
    having?: BookAuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookAuthorCountAggregateInputType | true
    _avg?: BookAuthorAvgAggregateInputType
    _sum?: BookAuthorSumAggregateInputType
    _min?: BookAuthorMinAggregateInputType
    _max?: BookAuthorMaxAggregateInputType
  }

  export type BookAuthorGroupByOutputType = {
    bookId: string
    authorId: string
    authorOrder: number
    _count: BookAuthorCountAggregateOutputType | null
    _avg: BookAuthorAvgAggregateOutputType | null
    _sum: BookAuthorSumAggregateOutputType | null
    _min: BookAuthorMinAggregateOutputType | null
    _max: BookAuthorMaxAggregateOutputType | null
  }

  type GetBookAuthorGroupByPayload<T extends BookAuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookAuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookAuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookAuthorGroupByOutputType[P]>
            : GetScalarType<T[P], BookAuthorGroupByOutputType[P]>
        }
      >
    >


  export type BookAuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    authorId?: boolean
    authorOrder?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookAuthor"]>

  export type BookAuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    authorId?: boolean
    authorOrder?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookAuthor"]>

  export type BookAuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    authorId?: boolean
    authorOrder?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookAuthor"]>

  export type BookAuthorSelectScalar = {
    bookId?: boolean
    authorId?: boolean
    authorOrder?: boolean
  }

  export type BookAuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bookId" | "authorId" | "authorOrder", ExtArgs["result"]["bookAuthor"]>
  export type BookAuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }
  export type BookAuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }
  export type BookAuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    author?: boolean | AuthorDefaultArgs<ExtArgs>
  }

  export type $BookAuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookAuthor"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      author: Prisma.$AuthorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      bookId: string
      authorId: string
      authorOrder: number
    }, ExtArgs["result"]["bookAuthor"]>
    composites: {}
  }

  type BookAuthorGetPayload<S extends boolean | null | undefined | BookAuthorDefaultArgs> = $Result.GetResult<Prisma.$BookAuthorPayload, S>

  type BookAuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookAuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookAuthorCountAggregateInputType | true
    }

  export interface BookAuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookAuthor'], meta: { name: 'BookAuthor' } }
    /**
     * Find zero or one BookAuthor that matches the filter.
     * @param {BookAuthorFindUniqueArgs} args - Arguments to find a BookAuthor
     * @example
     * // Get one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookAuthorFindUniqueArgs>(args: SelectSubset<T, BookAuthorFindUniqueArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookAuthor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookAuthorFindUniqueOrThrowArgs} args - Arguments to find a BookAuthor
     * @example
     * // Get one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookAuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, BookAuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookAuthor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorFindFirstArgs} args - Arguments to find a BookAuthor
     * @example
     * // Get one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookAuthorFindFirstArgs>(args?: SelectSubset<T, BookAuthorFindFirstArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookAuthor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorFindFirstOrThrowArgs} args - Arguments to find a BookAuthor
     * @example
     * // Get one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookAuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, BookAuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookAuthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookAuthors
     * const bookAuthors = await prisma.bookAuthor.findMany()
     * 
     * // Get first 10 BookAuthors
     * const bookAuthors = await prisma.bookAuthor.findMany({ take: 10 })
     * 
     * // Only select the `bookId`
     * const bookAuthorWithBookIdOnly = await prisma.bookAuthor.findMany({ select: { bookId: true } })
     * 
     */
    findMany<T extends BookAuthorFindManyArgs>(args?: SelectSubset<T, BookAuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookAuthor.
     * @param {BookAuthorCreateArgs} args - Arguments to create a BookAuthor.
     * @example
     * // Create one BookAuthor
     * const BookAuthor = await prisma.bookAuthor.create({
     *   data: {
     *     // ... data to create a BookAuthor
     *   }
     * })
     * 
     */
    create<T extends BookAuthorCreateArgs>(args: SelectSubset<T, BookAuthorCreateArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookAuthors.
     * @param {BookAuthorCreateManyArgs} args - Arguments to create many BookAuthors.
     * @example
     * // Create many BookAuthors
     * const bookAuthor = await prisma.bookAuthor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookAuthorCreateManyArgs>(args?: SelectSubset<T, BookAuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookAuthors and returns the data saved in the database.
     * @param {BookAuthorCreateManyAndReturnArgs} args - Arguments to create many BookAuthors.
     * @example
     * // Create many BookAuthors
     * const bookAuthor = await prisma.bookAuthor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookAuthors and only return the `bookId`
     * const bookAuthorWithBookIdOnly = await prisma.bookAuthor.createManyAndReturn({
     *   select: { bookId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookAuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, BookAuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookAuthor.
     * @param {BookAuthorDeleteArgs} args - Arguments to delete one BookAuthor.
     * @example
     * // Delete one BookAuthor
     * const BookAuthor = await prisma.bookAuthor.delete({
     *   where: {
     *     // ... filter to delete one BookAuthor
     *   }
     * })
     * 
     */
    delete<T extends BookAuthorDeleteArgs>(args: SelectSubset<T, BookAuthorDeleteArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookAuthor.
     * @param {BookAuthorUpdateArgs} args - Arguments to update one BookAuthor.
     * @example
     * // Update one BookAuthor
     * const bookAuthor = await prisma.bookAuthor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookAuthorUpdateArgs>(args: SelectSubset<T, BookAuthorUpdateArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookAuthors.
     * @param {BookAuthorDeleteManyArgs} args - Arguments to filter BookAuthors to delete.
     * @example
     * // Delete a few BookAuthors
     * const { count } = await prisma.bookAuthor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookAuthorDeleteManyArgs>(args?: SelectSubset<T, BookAuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookAuthors
     * const bookAuthor = await prisma.bookAuthor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookAuthorUpdateManyArgs>(args: SelectSubset<T, BookAuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookAuthors and returns the data updated in the database.
     * @param {BookAuthorUpdateManyAndReturnArgs} args - Arguments to update many BookAuthors.
     * @example
     * // Update many BookAuthors
     * const bookAuthor = await prisma.bookAuthor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookAuthors and only return the `bookId`
     * const bookAuthorWithBookIdOnly = await prisma.bookAuthor.updateManyAndReturn({
     *   select: { bookId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookAuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, BookAuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookAuthor.
     * @param {BookAuthorUpsertArgs} args - Arguments to update or create a BookAuthor.
     * @example
     * // Update or create a BookAuthor
     * const bookAuthor = await prisma.bookAuthor.upsert({
     *   create: {
     *     // ... data to create a BookAuthor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookAuthor we want to update
     *   }
     * })
     */
    upsert<T extends BookAuthorUpsertArgs>(args: SelectSubset<T, BookAuthorUpsertArgs<ExtArgs>>): Prisma__BookAuthorClient<$Result.GetResult<Prisma.$BookAuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorCountArgs} args - Arguments to filter BookAuthors to count.
     * @example
     * // Count the number of BookAuthors
     * const count = await prisma.bookAuthor.count({
     *   where: {
     *     // ... the filter for the BookAuthors we want to count
     *   }
     * })
    **/
    count<T extends BookAuthorCountArgs>(
      args?: Subset<T, BookAuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookAuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAuthorAggregateArgs>(args: Subset<T, BookAuthorAggregateArgs>): Prisma.PrismaPromise<GetBookAuthorAggregateType<T>>

    /**
     * Group by BookAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookAuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookAuthorGroupByArgs['orderBy'] }
        : { orderBy?: BookAuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookAuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookAuthor model
   */
  readonly fields: BookAuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookAuthor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookAuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends AuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorDefaultArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookAuthor model
   */
  interface BookAuthorFieldRefs {
    readonly bookId: FieldRef<"BookAuthor", 'String'>
    readonly authorId: FieldRef<"BookAuthor", 'String'>
    readonly authorOrder: FieldRef<"BookAuthor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookAuthor findUnique
   */
  export type BookAuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BookAuthor to fetch.
     */
    where: BookAuthorWhereUniqueInput
  }

  /**
   * BookAuthor findUniqueOrThrow
   */
  export type BookAuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BookAuthor to fetch.
     */
    where: BookAuthorWhereUniqueInput
  }

  /**
   * BookAuthor findFirst
   */
  export type BookAuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BookAuthor to fetch.
     */
    where?: BookAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookAuthors to fetch.
     */
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookAuthors.
     */
    cursor?: BookAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookAuthors.
     */
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[]
  }

  /**
   * BookAuthor findFirstOrThrow
   */
  export type BookAuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BookAuthor to fetch.
     */
    where?: BookAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookAuthors to fetch.
     */
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookAuthors.
     */
    cursor?: BookAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookAuthors.
     */
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[]
  }

  /**
   * BookAuthor findMany
   */
  export type BookAuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter, which BookAuthors to fetch.
     */
    where?: BookAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookAuthors to fetch.
     */
    orderBy?: BookAuthorOrderByWithRelationInput | BookAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookAuthors.
     */
    cursor?: BookAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookAuthors.
     */
    skip?: number
    distinct?: BookAuthorScalarFieldEnum | BookAuthorScalarFieldEnum[]
  }

  /**
   * BookAuthor create
   */
  export type BookAuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a BookAuthor.
     */
    data: XOR<BookAuthorCreateInput, BookAuthorUncheckedCreateInput>
  }

  /**
   * BookAuthor createMany
   */
  export type BookAuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookAuthors.
     */
    data: BookAuthorCreateManyInput | BookAuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookAuthor createManyAndReturn
   */
  export type BookAuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * The data used to create many BookAuthors.
     */
    data: BookAuthorCreateManyInput | BookAuthorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookAuthor update
   */
  export type BookAuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a BookAuthor.
     */
    data: XOR<BookAuthorUpdateInput, BookAuthorUncheckedUpdateInput>
    /**
     * Choose, which BookAuthor to update.
     */
    where: BookAuthorWhereUniqueInput
  }

  /**
   * BookAuthor updateMany
   */
  export type BookAuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookAuthors.
     */
    data: XOR<BookAuthorUpdateManyMutationInput, BookAuthorUncheckedUpdateManyInput>
    /**
     * Filter which BookAuthors to update
     */
    where?: BookAuthorWhereInput
    /**
     * Limit how many BookAuthors to update.
     */
    limit?: number
  }

  /**
   * BookAuthor updateManyAndReturn
   */
  export type BookAuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * The data used to update BookAuthors.
     */
    data: XOR<BookAuthorUpdateManyMutationInput, BookAuthorUncheckedUpdateManyInput>
    /**
     * Filter which BookAuthors to update
     */
    where?: BookAuthorWhereInput
    /**
     * Limit how many BookAuthors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookAuthor upsert
   */
  export type BookAuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the BookAuthor to update in case it exists.
     */
    where: BookAuthorWhereUniqueInput
    /**
     * In case the BookAuthor found by the `where` argument doesn't exist, create a new BookAuthor with this data.
     */
    create: XOR<BookAuthorCreateInput, BookAuthorUncheckedCreateInput>
    /**
     * In case the BookAuthor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookAuthorUpdateInput, BookAuthorUncheckedUpdateInput>
  }

  /**
   * BookAuthor delete
   */
  export type BookAuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
    /**
     * Filter which BookAuthor to delete.
     */
    where: BookAuthorWhereUniqueInput
  }

  /**
   * BookAuthor deleteMany
   */
  export type BookAuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookAuthors to delete
     */
    where?: BookAuthorWhereInput
    /**
     * Limit how many BookAuthors to delete.
     */
    limit?: number
  }

  /**
   * BookAuthor without action
   */
  export type BookAuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookAuthor
     */
    select?: BookAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookAuthor
     */
    omit?: BookAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookAuthorInclude<ExtArgs> | null
  }


  /**
   * Model Publisher
   */

  export type AggregatePublisher = {
    _count: PublisherCountAggregateOutputType | null
    _min: PublisherMinAggregateOutputType | null
    _max: PublisherMaxAggregateOutputType | null
  }

  export type PublisherMinAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    website: string | null
    createdAt: Date | null
  }

  export type PublisherMaxAggregateOutputType = {
    id: string | null
    name: string | null
    country: string | null
    website: string | null
    createdAt: Date | null
  }

  export type PublisherCountAggregateOutputType = {
    id: number
    name: number
    country: number
    website: number
    createdAt: number
    _all: number
  }


  export type PublisherMinAggregateInputType = {
    id?: true
    name?: true
    country?: true
    website?: true
    createdAt?: true
  }

  export type PublisherMaxAggregateInputType = {
    id?: true
    name?: true
    country?: true
    website?: true
    createdAt?: true
  }

  export type PublisherCountAggregateInputType = {
    id?: true
    name?: true
    country?: true
    website?: true
    createdAt?: true
    _all?: true
  }

  export type PublisherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publisher to aggregate.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publishers
    **/
    _count?: true | PublisherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublisherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublisherMaxAggregateInputType
  }

  export type GetPublisherAggregateType<T extends PublisherAggregateArgs> = {
        [P in keyof T & keyof AggregatePublisher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublisher[P]>
      : GetScalarType<T[P], AggregatePublisher[P]>
  }




  export type PublisherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublisherWhereInput
    orderBy?: PublisherOrderByWithAggregationInput | PublisherOrderByWithAggregationInput[]
    by: PublisherScalarFieldEnum[] | PublisherScalarFieldEnum
    having?: PublisherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublisherCountAggregateInputType | true
    _min?: PublisherMinAggregateInputType
    _max?: PublisherMaxAggregateInputType
  }

  export type PublisherGroupByOutputType = {
    id: string
    name: string
    country: string | null
    website: string | null
    createdAt: Date
    _count: PublisherCountAggregateOutputType | null
    _min: PublisherMinAggregateOutputType | null
    _max: PublisherMaxAggregateOutputType | null
  }

  type GetPublisherGroupByPayload<T extends PublisherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublisherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublisherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublisherGroupByOutputType[P]>
            : GetScalarType<T[P], PublisherGroupByOutputType[P]>
        }
      >
    >


  export type PublisherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    website?: boolean
    createdAt?: boolean
    books?: boolean | Publisher$booksArgs<ExtArgs>
    _count?: boolean | PublisherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publisher"]>

  export type PublisherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    website?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["publisher"]>

  export type PublisherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    country?: boolean
    website?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["publisher"]>

  export type PublisherSelectScalar = {
    id?: boolean
    name?: boolean
    country?: boolean
    website?: boolean
    createdAt?: boolean
  }

  export type PublisherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "country" | "website" | "createdAt", ExtArgs["result"]["publisher"]>
  export type PublisherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Publisher$booksArgs<ExtArgs>
    _count?: boolean | PublisherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PublisherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PublisherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PublisherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publisher"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      country: string | null
      website: string | null
      createdAt: Date
    }, ExtArgs["result"]["publisher"]>
    composites: {}
  }

  type PublisherGetPayload<S extends boolean | null | undefined | PublisherDefaultArgs> = $Result.GetResult<Prisma.$PublisherPayload, S>

  type PublisherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublisherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublisherCountAggregateInputType | true
    }

  export interface PublisherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publisher'], meta: { name: 'Publisher' } }
    /**
     * Find zero or one Publisher that matches the filter.
     * @param {PublisherFindUniqueArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublisherFindUniqueArgs>(args: SelectSubset<T, PublisherFindUniqueArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Publisher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublisherFindUniqueOrThrowArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublisherFindUniqueOrThrowArgs>(args: SelectSubset<T, PublisherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publisher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindFirstArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublisherFindFirstArgs>(args?: SelectSubset<T, PublisherFindFirstArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publisher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindFirstOrThrowArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublisherFindFirstOrThrowArgs>(args?: SelectSubset<T, PublisherFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Publishers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publishers
     * const publishers = await prisma.publisher.findMany()
     * 
     * // Get first 10 Publishers
     * const publishers = await prisma.publisher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publisherWithIdOnly = await prisma.publisher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublisherFindManyArgs>(args?: SelectSubset<T, PublisherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Publisher.
     * @param {PublisherCreateArgs} args - Arguments to create a Publisher.
     * @example
     * // Create one Publisher
     * const Publisher = await prisma.publisher.create({
     *   data: {
     *     // ... data to create a Publisher
     *   }
     * })
     * 
     */
    create<T extends PublisherCreateArgs>(args: SelectSubset<T, PublisherCreateArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Publishers.
     * @param {PublisherCreateManyArgs} args - Arguments to create many Publishers.
     * @example
     * // Create many Publishers
     * const publisher = await prisma.publisher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublisherCreateManyArgs>(args?: SelectSubset<T, PublisherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publishers and returns the data saved in the database.
     * @param {PublisherCreateManyAndReturnArgs} args - Arguments to create many Publishers.
     * @example
     * // Create many Publishers
     * const publisher = await prisma.publisher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publishers and only return the `id`
     * const publisherWithIdOnly = await prisma.publisher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublisherCreateManyAndReturnArgs>(args?: SelectSubset<T, PublisherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Publisher.
     * @param {PublisherDeleteArgs} args - Arguments to delete one Publisher.
     * @example
     * // Delete one Publisher
     * const Publisher = await prisma.publisher.delete({
     *   where: {
     *     // ... filter to delete one Publisher
     *   }
     * })
     * 
     */
    delete<T extends PublisherDeleteArgs>(args: SelectSubset<T, PublisherDeleteArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Publisher.
     * @param {PublisherUpdateArgs} args - Arguments to update one Publisher.
     * @example
     * // Update one Publisher
     * const publisher = await prisma.publisher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublisherUpdateArgs>(args: SelectSubset<T, PublisherUpdateArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Publishers.
     * @param {PublisherDeleteManyArgs} args - Arguments to filter Publishers to delete.
     * @example
     * // Delete a few Publishers
     * const { count } = await prisma.publisher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublisherDeleteManyArgs>(args?: SelectSubset<T, PublisherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publishers
     * const publisher = await prisma.publisher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublisherUpdateManyArgs>(args: SelectSubset<T, PublisherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publishers and returns the data updated in the database.
     * @param {PublisherUpdateManyAndReturnArgs} args - Arguments to update many Publishers.
     * @example
     * // Update many Publishers
     * const publisher = await prisma.publisher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Publishers and only return the `id`
     * const publisherWithIdOnly = await prisma.publisher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublisherUpdateManyAndReturnArgs>(args: SelectSubset<T, PublisherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Publisher.
     * @param {PublisherUpsertArgs} args - Arguments to update or create a Publisher.
     * @example
     * // Update or create a Publisher
     * const publisher = await prisma.publisher.upsert({
     *   create: {
     *     // ... data to create a Publisher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publisher we want to update
     *   }
     * })
     */
    upsert<T extends PublisherUpsertArgs>(args: SelectSubset<T, PublisherUpsertArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Publishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherCountArgs} args - Arguments to filter Publishers to count.
     * @example
     * // Count the number of Publishers
     * const count = await prisma.publisher.count({
     *   where: {
     *     // ... the filter for the Publishers we want to count
     *   }
     * })
    **/
    count<T extends PublisherCountArgs>(
      args?: Subset<T, PublisherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublisherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublisherAggregateArgs>(args: Subset<T, PublisherAggregateArgs>): Prisma.PrismaPromise<GetPublisherAggregateType<T>>

    /**
     * Group by Publisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublisherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublisherGroupByArgs['orderBy'] }
        : { orderBy?: PublisherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublisherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublisherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publisher model
   */
  readonly fields: PublisherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publisher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublisherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Publisher$booksArgs<ExtArgs> = {}>(args?: Subset<T, Publisher$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Publisher model
   */
  interface PublisherFieldRefs {
    readonly id: FieldRef<"Publisher", 'String'>
    readonly name: FieldRef<"Publisher", 'String'>
    readonly country: FieldRef<"Publisher", 'String'>
    readonly website: FieldRef<"Publisher", 'String'>
    readonly createdAt: FieldRef<"Publisher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Publisher findUnique
   */
  export type PublisherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher findUniqueOrThrow
   */
  export type PublisherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher findFirst
   */
  export type PublisherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publishers.
     */
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * Publisher findFirstOrThrow
   */
  export type PublisherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publishers.
     */
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * Publisher findMany
   */
  export type PublisherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publishers to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * Publisher create
   */
  export type PublisherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * The data needed to create a Publisher.
     */
    data: XOR<PublisherCreateInput, PublisherUncheckedCreateInput>
  }

  /**
   * Publisher createMany
   */
  export type PublisherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publishers.
     */
    data: PublisherCreateManyInput | PublisherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publisher createManyAndReturn
   */
  export type PublisherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * The data used to create many Publishers.
     */
    data: PublisherCreateManyInput | PublisherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publisher update
   */
  export type PublisherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * The data needed to update a Publisher.
     */
    data: XOR<PublisherUpdateInput, PublisherUncheckedUpdateInput>
    /**
     * Choose, which Publisher to update.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher updateMany
   */
  export type PublisherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publishers.
     */
    data: XOR<PublisherUpdateManyMutationInput, PublisherUncheckedUpdateManyInput>
    /**
     * Filter which Publishers to update
     */
    where?: PublisherWhereInput
    /**
     * Limit how many Publishers to update.
     */
    limit?: number
  }

  /**
   * Publisher updateManyAndReturn
   */
  export type PublisherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * The data used to update Publishers.
     */
    data: XOR<PublisherUpdateManyMutationInput, PublisherUncheckedUpdateManyInput>
    /**
     * Filter which Publishers to update
     */
    where?: PublisherWhereInput
    /**
     * Limit how many Publishers to update.
     */
    limit?: number
  }

  /**
   * Publisher upsert
   */
  export type PublisherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * The filter to search for the Publisher to update in case it exists.
     */
    where: PublisherWhereUniqueInput
    /**
     * In case the Publisher found by the `where` argument doesn't exist, create a new Publisher with this data.
     */
    create: XOR<PublisherCreateInput, PublisherUncheckedCreateInput>
    /**
     * In case the Publisher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublisherUpdateInput, PublisherUncheckedUpdateInput>
  }

  /**
   * Publisher delete
   */
  export type PublisherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter which Publisher to delete.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher deleteMany
   */
  export type PublisherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publishers to delete
     */
    where?: PublisherWhereInput
    /**
     * Limit how many Publishers to delete.
     */
    limit?: number
  }

  /**
   * Publisher.books
   */
  export type Publisher$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Publisher without action
   */
  export type PublisherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    parentId: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    parentId: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    description: number
    parentId: number
    _all: number
  }


  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    parentId?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    parentId?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    parentId?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: string
    name: string
    description: string | null
    parentId: string | null
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    parentId?: boolean
    parent?: boolean | Genre$parentArgs<ExtArgs>
    children?: boolean | Genre$childrenArgs<ExtArgs>
    books?: boolean | Genre$booksArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    parentId?: boolean
    parent?: boolean | Genre$parentArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    parentId?: boolean
    parent?: boolean | Genre$parentArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    parentId?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "parentId", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Genre$parentArgs<ExtArgs>
    children?: boolean | Genre$childrenArgs<ExtArgs>
    books?: boolean | Genre$booksArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Genre$parentArgs<ExtArgs>
  }
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Genre$parentArgs<ExtArgs>
  }

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      parent: Prisma.$GenrePayload<ExtArgs> | null
      children: Prisma.$GenrePayload<ExtArgs>[]
      books: Prisma.$BookGenrePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      parentId: string | null
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Genre$parentArgs<ExtArgs> = {}>(args?: Subset<T, Genre$parentArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Genre$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Genre$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    books<T extends Genre$booksArgs<ExtArgs> = {}>(args?: Subset<T, Genre$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'String'>
    readonly name: FieldRef<"Genre", 'String'>
    readonly description: FieldRef<"Genre", 'String'>
    readonly parentId: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.parent
   */
  export type Genre$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    where?: GenreWhereInput
  }

  /**
   * Genre.children
   */
  export type Genre$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    cursor?: GenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre.books
   */
  export type Genre$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    where?: BookGenreWhereInput
    orderBy?: BookGenreOrderByWithRelationInput | BookGenreOrderByWithRelationInput[]
    cursor?: BookGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookGenreScalarFieldEnum | BookGenreScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model BookGenre
   */

  export type AggregateBookGenre = {
    _count: BookGenreCountAggregateOutputType | null
    _min: BookGenreMinAggregateOutputType | null
    _max: BookGenreMaxAggregateOutputType | null
  }

  export type BookGenreMinAggregateOutputType = {
    bookId: string | null
    genreId: string | null
    isPrimary: boolean | null
  }

  export type BookGenreMaxAggregateOutputType = {
    bookId: string | null
    genreId: string | null
    isPrimary: boolean | null
  }

  export type BookGenreCountAggregateOutputType = {
    bookId: number
    genreId: number
    isPrimary: number
    _all: number
  }


  export type BookGenreMinAggregateInputType = {
    bookId?: true
    genreId?: true
    isPrimary?: true
  }

  export type BookGenreMaxAggregateInputType = {
    bookId?: true
    genreId?: true
    isPrimary?: true
  }

  export type BookGenreCountAggregateInputType = {
    bookId?: true
    genreId?: true
    isPrimary?: true
    _all?: true
  }

  export type BookGenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookGenre to aggregate.
     */
    where?: BookGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookGenres to fetch.
     */
    orderBy?: BookGenreOrderByWithRelationInput | BookGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookGenres
    **/
    _count?: true | BookGenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookGenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookGenreMaxAggregateInputType
  }

  export type GetBookGenreAggregateType<T extends BookGenreAggregateArgs> = {
        [P in keyof T & keyof AggregateBookGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookGenre[P]>
      : GetScalarType<T[P], AggregateBookGenre[P]>
  }




  export type BookGenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookGenreWhereInput
    orderBy?: BookGenreOrderByWithAggregationInput | BookGenreOrderByWithAggregationInput[]
    by: BookGenreScalarFieldEnum[] | BookGenreScalarFieldEnum
    having?: BookGenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookGenreCountAggregateInputType | true
    _min?: BookGenreMinAggregateInputType
    _max?: BookGenreMaxAggregateInputType
  }

  export type BookGenreGroupByOutputType = {
    bookId: string
    genreId: string
    isPrimary: boolean
    _count: BookGenreCountAggregateOutputType | null
    _min: BookGenreMinAggregateOutputType | null
    _max: BookGenreMaxAggregateOutputType | null
  }

  type GetBookGenreGroupByPayload<T extends BookGenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGenreGroupByOutputType[P]>
            : GetScalarType<T[P], BookGenreGroupByOutputType[P]>
        }
      >
    >


  export type BookGenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    genreId?: boolean
    isPrimary?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookGenre"]>

  export type BookGenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    genreId?: boolean
    isPrimary?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookGenre"]>

  export type BookGenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookId?: boolean
    genreId?: boolean
    isPrimary?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookGenre"]>

  export type BookGenreSelectScalar = {
    bookId?: boolean
    genreId?: boolean
    isPrimary?: boolean
  }

  export type BookGenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bookId" | "genreId" | "isPrimary", ExtArgs["result"]["bookGenre"]>
  export type BookGenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }
  export type BookGenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }
  export type BookGenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }

  export type $BookGenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookGenre"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      genre: Prisma.$GenrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      bookId: string
      genreId: string
      isPrimary: boolean
    }, ExtArgs["result"]["bookGenre"]>
    composites: {}
  }

  type BookGenreGetPayload<S extends boolean | null | undefined | BookGenreDefaultArgs> = $Result.GetResult<Prisma.$BookGenrePayload, S>

  type BookGenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookGenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookGenreCountAggregateInputType | true
    }

  export interface BookGenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookGenre'], meta: { name: 'BookGenre' } }
    /**
     * Find zero or one BookGenre that matches the filter.
     * @param {BookGenreFindUniqueArgs} args - Arguments to find a BookGenre
     * @example
     * // Get one BookGenre
     * const bookGenre = await prisma.bookGenre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookGenreFindUniqueArgs>(args: SelectSubset<T, BookGenreFindUniqueArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookGenre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookGenreFindUniqueOrThrowArgs} args - Arguments to find a BookGenre
     * @example
     * // Get one BookGenre
     * const bookGenre = await prisma.bookGenre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookGenreFindUniqueOrThrowArgs>(args: SelectSubset<T, BookGenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookGenre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreFindFirstArgs} args - Arguments to find a BookGenre
     * @example
     * // Get one BookGenre
     * const bookGenre = await prisma.bookGenre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookGenreFindFirstArgs>(args?: SelectSubset<T, BookGenreFindFirstArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookGenre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreFindFirstOrThrowArgs} args - Arguments to find a BookGenre
     * @example
     * // Get one BookGenre
     * const bookGenre = await prisma.bookGenre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookGenreFindFirstOrThrowArgs>(args?: SelectSubset<T, BookGenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookGenres
     * const bookGenres = await prisma.bookGenre.findMany()
     * 
     * // Get first 10 BookGenres
     * const bookGenres = await prisma.bookGenre.findMany({ take: 10 })
     * 
     * // Only select the `bookId`
     * const bookGenreWithBookIdOnly = await prisma.bookGenre.findMany({ select: { bookId: true } })
     * 
     */
    findMany<T extends BookGenreFindManyArgs>(args?: SelectSubset<T, BookGenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookGenre.
     * @param {BookGenreCreateArgs} args - Arguments to create a BookGenre.
     * @example
     * // Create one BookGenre
     * const BookGenre = await prisma.bookGenre.create({
     *   data: {
     *     // ... data to create a BookGenre
     *   }
     * })
     * 
     */
    create<T extends BookGenreCreateArgs>(args: SelectSubset<T, BookGenreCreateArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookGenres.
     * @param {BookGenreCreateManyArgs} args - Arguments to create many BookGenres.
     * @example
     * // Create many BookGenres
     * const bookGenre = await prisma.bookGenre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookGenreCreateManyArgs>(args?: SelectSubset<T, BookGenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookGenres and returns the data saved in the database.
     * @param {BookGenreCreateManyAndReturnArgs} args - Arguments to create many BookGenres.
     * @example
     * // Create many BookGenres
     * const bookGenre = await prisma.bookGenre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookGenres and only return the `bookId`
     * const bookGenreWithBookIdOnly = await prisma.bookGenre.createManyAndReturn({
     *   select: { bookId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookGenreCreateManyAndReturnArgs>(args?: SelectSubset<T, BookGenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookGenre.
     * @param {BookGenreDeleteArgs} args - Arguments to delete one BookGenre.
     * @example
     * // Delete one BookGenre
     * const BookGenre = await prisma.bookGenre.delete({
     *   where: {
     *     // ... filter to delete one BookGenre
     *   }
     * })
     * 
     */
    delete<T extends BookGenreDeleteArgs>(args: SelectSubset<T, BookGenreDeleteArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookGenre.
     * @param {BookGenreUpdateArgs} args - Arguments to update one BookGenre.
     * @example
     * // Update one BookGenre
     * const bookGenre = await prisma.bookGenre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookGenreUpdateArgs>(args: SelectSubset<T, BookGenreUpdateArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookGenres.
     * @param {BookGenreDeleteManyArgs} args - Arguments to filter BookGenres to delete.
     * @example
     * // Delete a few BookGenres
     * const { count } = await prisma.bookGenre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookGenreDeleteManyArgs>(args?: SelectSubset<T, BookGenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookGenres
     * const bookGenre = await prisma.bookGenre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookGenreUpdateManyArgs>(args: SelectSubset<T, BookGenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookGenres and returns the data updated in the database.
     * @param {BookGenreUpdateManyAndReturnArgs} args - Arguments to update many BookGenres.
     * @example
     * // Update many BookGenres
     * const bookGenre = await prisma.bookGenre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookGenres and only return the `bookId`
     * const bookGenreWithBookIdOnly = await prisma.bookGenre.updateManyAndReturn({
     *   select: { bookId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookGenreUpdateManyAndReturnArgs>(args: SelectSubset<T, BookGenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookGenre.
     * @param {BookGenreUpsertArgs} args - Arguments to update or create a BookGenre.
     * @example
     * // Update or create a BookGenre
     * const bookGenre = await prisma.bookGenre.upsert({
     *   create: {
     *     // ... data to create a BookGenre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookGenre we want to update
     *   }
     * })
     */
    upsert<T extends BookGenreUpsertArgs>(args: SelectSubset<T, BookGenreUpsertArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreCountArgs} args - Arguments to filter BookGenres to count.
     * @example
     * // Count the number of BookGenres
     * const count = await prisma.bookGenre.count({
     *   where: {
     *     // ... the filter for the BookGenres we want to count
     *   }
     * })
    **/
    count<T extends BookGenreCountArgs>(
      args?: Subset<T, BookGenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookGenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookGenreAggregateArgs>(args: Subset<T, BookGenreAggregateArgs>): Prisma.PrismaPromise<GetBookGenreAggregateType<T>>

    /**
     * Group by BookGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGenreGroupByArgs['orderBy'] }
        : { orderBy?: BookGenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookGenre model
   */
  readonly fields: BookGenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookGenre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookGenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookGenre model
   */
  interface BookGenreFieldRefs {
    readonly bookId: FieldRef<"BookGenre", 'String'>
    readonly genreId: FieldRef<"BookGenre", 'String'>
    readonly isPrimary: FieldRef<"BookGenre", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BookGenre findUnique
   */
  export type BookGenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter, which BookGenre to fetch.
     */
    where: BookGenreWhereUniqueInput
  }

  /**
   * BookGenre findUniqueOrThrow
   */
  export type BookGenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter, which BookGenre to fetch.
     */
    where: BookGenreWhereUniqueInput
  }

  /**
   * BookGenre findFirst
   */
  export type BookGenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter, which BookGenre to fetch.
     */
    where?: BookGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookGenres to fetch.
     */
    orderBy?: BookGenreOrderByWithRelationInput | BookGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookGenres.
     */
    cursor?: BookGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookGenres.
     */
    distinct?: BookGenreScalarFieldEnum | BookGenreScalarFieldEnum[]
  }

  /**
   * BookGenre findFirstOrThrow
   */
  export type BookGenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter, which BookGenre to fetch.
     */
    where?: BookGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookGenres to fetch.
     */
    orderBy?: BookGenreOrderByWithRelationInput | BookGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookGenres.
     */
    cursor?: BookGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookGenres.
     */
    distinct?: BookGenreScalarFieldEnum | BookGenreScalarFieldEnum[]
  }

  /**
   * BookGenre findMany
   */
  export type BookGenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter, which BookGenres to fetch.
     */
    where?: BookGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookGenres to fetch.
     */
    orderBy?: BookGenreOrderByWithRelationInput | BookGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookGenres.
     */
    cursor?: BookGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookGenres.
     */
    skip?: number
    distinct?: BookGenreScalarFieldEnum | BookGenreScalarFieldEnum[]
  }

  /**
   * BookGenre create
   */
  export type BookGenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * The data needed to create a BookGenre.
     */
    data: XOR<BookGenreCreateInput, BookGenreUncheckedCreateInput>
  }

  /**
   * BookGenre createMany
   */
  export type BookGenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookGenres.
     */
    data: BookGenreCreateManyInput | BookGenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookGenre createManyAndReturn
   */
  export type BookGenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * The data used to create many BookGenres.
     */
    data: BookGenreCreateManyInput | BookGenreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookGenre update
   */
  export type BookGenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * The data needed to update a BookGenre.
     */
    data: XOR<BookGenreUpdateInput, BookGenreUncheckedUpdateInput>
    /**
     * Choose, which BookGenre to update.
     */
    where: BookGenreWhereUniqueInput
  }

  /**
   * BookGenre updateMany
   */
  export type BookGenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookGenres.
     */
    data: XOR<BookGenreUpdateManyMutationInput, BookGenreUncheckedUpdateManyInput>
    /**
     * Filter which BookGenres to update
     */
    where?: BookGenreWhereInput
    /**
     * Limit how many BookGenres to update.
     */
    limit?: number
  }

  /**
   * BookGenre updateManyAndReturn
   */
  export type BookGenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * The data used to update BookGenres.
     */
    data: XOR<BookGenreUpdateManyMutationInput, BookGenreUncheckedUpdateManyInput>
    /**
     * Filter which BookGenres to update
     */
    where?: BookGenreWhereInput
    /**
     * Limit how many BookGenres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookGenre upsert
   */
  export type BookGenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * The filter to search for the BookGenre to update in case it exists.
     */
    where: BookGenreWhereUniqueInput
    /**
     * In case the BookGenre found by the `where` argument doesn't exist, create a new BookGenre with this data.
     */
    create: XOR<BookGenreCreateInput, BookGenreUncheckedCreateInput>
    /**
     * In case the BookGenre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookGenreUpdateInput, BookGenreUncheckedUpdateInput>
  }

  /**
   * BookGenre delete
   */
  export type BookGenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter which BookGenre to delete.
     */
    where: BookGenreWhereUniqueInput
  }

  /**
   * BookGenre deleteMany
   */
  export type BookGenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookGenres to delete
     */
    where?: BookGenreWhereInput
    /**
     * Limit how many BookGenres to delete.
     */
    limit?: number
  }

  /**
   * BookGenre without action
   */
  export type BookGenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
  }


  /**
   * Model BookCopy
   */

  export type AggregateBookCopy = {
    _count: BookCopyCountAggregateOutputType | null
    _avg: BookCopyAvgAggregateOutputType | null
    _sum: BookCopySumAggregateOutputType | null
    _min: BookCopyMinAggregateOutputType | null
    _max: BookCopyMaxAggregateOutputType | null
  }

  export type BookCopyAvgAggregateOutputType = {
    copyNumber: number | null
    locationRow: number | null
    locationPosition: number | null
    price: Decimal | null
  }

  export type BookCopySumAggregateOutputType = {
    copyNumber: number | null
    locationRow: number | null
    locationPosition: number | null
    price: Decimal | null
  }

  export type BookCopyMinAggregateOutputType = {
    id: string | null
    bookId: string | null
    branchId: string | null
    copyNumber: number | null
    barcode: string | null
    qrCode: string | null
    qrCodeUrl: string | null
    condition: $Enums.BookCondition | null
    status: $Enums.CopyStatus | null
    statusChangedAt: Date | null
    statusChangedBy: string | null
    statusReason: string | null
    locationRoom: string | null
    locationShelf: string | null
    locationRow: number | null
    locationSide: string | null
    locationPosition: number | null
    purchaseDate: Date | null
    price: Decimal | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookCopyMaxAggregateOutputType = {
    id: string | null
    bookId: string | null
    branchId: string | null
    copyNumber: number | null
    barcode: string | null
    qrCode: string | null
    qrCodeUrl: string | null
    condition: $Enums.BookCondition | null
    status: $Enums.CopyStatus | null
    statusChangedAt: Date | null
    statusChangedBy: string | null
    statusReason: string | null
    locationRoom: string | null
    locationShelf: string | null
    locationRow: number | null
    locationSide: string | null
    locationPosition: number | null
    purchaseDate: Date | null
    price: Decimal | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookCopyCountAggregateOutputType = {
    id: number
    bookId: number
    branchId: number
    copyNumber: number
    barcode: number
    qrCode: number
    qrCodeUrl: number
    condition: number
    status: number
    statusChangedAt: number
    statusChangedBy: number
    statusReason: number
    locationRoom: number
    locationShelf: number
    locationRow: number
    locationSide: number
    locationPosition: number
    purchaseDate: number
    price: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookCopyAvgAggregateInputType = {
    copyNumber?: true
    locationRow?: true
    locationPosition?: true
    price?: true
  }

  export type BookCopySumAggregateInputType = {
    copyNumber?: true
    locationRow?: true
    locationPosition?: true
    price?: true
  }

  export type BookCopyMinAggregateInputType = {
    id?: true
    bookId?: true
    branchId?: true
    copyNumber?: true
    barcode?: true
    qrCode?: true
    qrCodeUrl?: true
    condition?: true
    status?: true
    statusChangedAt?: true
    statusChangedBy?: true
    statusReason?: true
    locationRoom?: true
    locationShelf?: true
    locationRow?: true
    locationSide?: true
    locationPosition?: true
    purchaseDate?: true
    price?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookCopyMaxAggregateInputType = {
    id?: true
    bookId?: true
    branchId?: true
    copyNumber?: true
    barcode?: true
    qrCode?: true
    qrCodeUrl?: true
    condition?: true
    status?: true
    statusChangedAt?: true
    statusChangedBy?: true
    statusReason?: true
    locationRoom?: true
    locationShelf?: true
    locationRow?: true
    locationSide?: true
    locationPosition?: true
    purchaseDate?: true
    price?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookCopyCountAggregateInputType = {
    id?: true
    bookId?: true
    branchId?: true
    copyNumber?: true
    barcode?: true
    qrCode?: true
    qrCodeUrl?: true
    condition?: true
    status?: true
    statusChangedAt?: true
    statusChangedBy?: true
    statusReason?: true
    locationRoom?: true
    locationShelf?: true
    locationRow?: true
    locationSide?: true
    locationPosition?: true
    purchaseDate?: true
    price?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookCopyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookCopy to aggregate.
     */
    where?: BookCopyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookCopies to fetch.
     */
    orderBy?: BookCopyOrderByWithRelationInput | BookCopyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookCopyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookCopies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookCopies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookCopies
    **/
    _count?: true | BookCopyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookCopyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookCopySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookCopyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookCopyMaxAggregateInputType
  }

  export type GetBookCopyAggregateType<T extends BookCopyAggregateArgs> = {
        [P in keyof T & keyof AggregateBookCopy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookCopy[P]>
      : GetScalarType<T[P], AggregateBookCopy[P]>
  }




  export type BookCopyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookCopyWhereInput
    orderBy?: BookCopyOrderByWithAggregationInput | BookCopyOrderByWithAggregationInput[]
    by: BookCopyScalarFieldEnum[] | BookCopyScalarFieldEnum
    having?: BookCopyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCopyCountAggregateInputType | true
    _avg?: BookCopyAvgAggregateInputType
    _sum?: BookCopySumAggregateInputType
    _min?: BookCopyMinAggregateInputType
    _max?: BookCopyMaxAggregateInputType
  }

  export type BookCopyGroupByOutputType = {
    id: string
    bookId: string
    branchId: string
    copyNumber: number
    barcode: string
    qrCode: string | null
    qrCodeUrl: string | null
    condition: $Enums.BookCondition
    status: $Enums.CopyStatus
    statusChangedAt: Date | null
    statusChangedBy: string | null
    statusReason: string | null
    locationRoom: string | null
    locationShelf: string | null
    locationRow: number | null
    locationSide: string | null
    locationPosition: number | null
    purchaseDate: Date | null
    price: Decimal | null
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: BookCopyCountAggregateOutputType | null
    _avg: BookCopyAvgAggregateOutputType | null
    _sum: BookCopySumAggregateOutputType | null
    _min: BookCopyMinAggregateOutputType | null
    _max: BookCopyMaxAggregateOutputType | null
  }

  type GetBookCopyGroupByPayload<T extends BookCopyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookCopyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookCopyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookCopyGroupByOutputType[P]>
            : GetScalarType<T[P], BookCopyGroupByOutputType[P]>
        }
      >
    >


  export type BookCopySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    branchId?: boolean
    copyNumber?: boolean
    barcode?: boolean
    qrCode?: boolean
    qrCodeUrl?: boolean
    condition?: boolean
    status?: boolean
    statusChangedAt?: boolean
    statusChangedBy?: boolean
    statusReason?: boolean
    locationRoom?: boolean
    locationShelf?: boolean
    locationRow?: boolean
    locationSide?: boolean
    locationPosition?: boolean
    purchaseDate?: boolean
    price?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    inventoryLogs?: boolean | BookCopy$inventoryLogsArgs<ExtArgs>
    _count?: boolean | BookCopyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookCopy"]>

  export type BookCopySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    branchId?: boolean
    copyNumber?: boolean
    barcode?: boolean
    qrCode?: boolean
    qrCodeUrl?: boolean
    condition?: boolean
    status?: boolean
    statusChangedAt?: boolean
    statusChangedBy?: boolean
    statusReason?: boolean
    locationRoom?: boolean
    locationShelf?: boolean
    locationRow?: boolean
    locationSide?: boolean
    locationPosition?: boolean
    purchaseDate?: boolean
    price?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookCopy"]>

  export type BookCopySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    branchId?: boolean
    copyNumber?: boolean
    barcode?: boolean
    qrCode?: boolean
    qrCodeUrl?: boolean
    condition?: boolean
    status?: boolean
    statusChangedAt?: boolean
    statusChangedBy?: boolean
    statusReason?: boolean
    locationRoom?: boolean
    locationShelf?: boolean
    locationRow?: boolean
    locationSide?: boolean
    locationPosition?: boolean
    purchaseDate?: boolean
    price?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookCopy"]>

  export type BookCopySelectScalar = {
    id?: boolean
    bookId?: boolean
    branchId?: boolean
    copyNumber?: boolean
    barcode?: boolean
    qrCode?: boolean
    qrCodeUrl?: boolean
    condition?: boolean
    status?: boolean
    statusChangedAt?: boolean
    statusChangedBy?: boolean
    statusReason?: boolean
    locationRoom?: boolean
    locationShelf?: boolean
    locationRow?: boolean
    locationSide?: boolean
    locationPosition?: boolean
    purchaseDate?: boolean
    price?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookCopyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "branchId" | "copyNumber" | "barcode" | "qrCode" | "qrCodeUrl" | "condition" | "status" | "statusChangedAt" | "statusChangedBy" | "statusReason" | "locationRoom" | "locationShelf" | "locationRow" | "locationSide" | "locationPosition" | "purchaseDate" | "price" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["bookCopy"]>
  export type BookCopyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    inventoryLogs?: boolean | BookCopy$inventoryLogsArgs<ExtArgs>
    _count?: boolean | BookCopyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookCopyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookCopyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $BookCopyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookCopy"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      inventoryLogs: Prisma.$InventoryLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookId: string
      branchId: string
      copyNumber: number
      barcode: string
      qrCode: string | null
      qrCodeUrl: string | null
      condition: $Enums.BookCondition
      status: $Enums.CopyStatus
      statusChangedAt: Date | null
      statusChangedBy: string | null
      statusReason: string | null
      locationRoom: string | null
      locationShelf: string | null
      locationRow: number | null
      locationSide: string | null
      locationPosition: number | null
      purchaseDate: Date | null
      price: Prisma.Decimal | null
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookCopy"]>
    composites: {}
  }

  type BookCopyGetPayload<S extends boolean | null | undefined | BookCopyDefaultArgs> = $Result.GetResult<Prisma.$BookCopyPayload, S>

  type BookCopyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookCopyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCopyCountAggregateInputType | true
    }

  export interface BookCopyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookCopy'], meta: { name: 'BookCopy' } }
    /**
     * Find zero or one BookCopy that matches the filter.
     * @param {BookCopyFindUniqueArgs} args - Arguments to find a BookCopy
     * @example
     * // Get one BookCopy
     * const bookCopy = await prisma.bookCopy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookCopyFindUniqueArgs>(args: SelectSubset<T, BookCopyFindUniqueArgs<ExtArgs>>): Prisma__BookCopyClient<$Result.GetResult<Prisma.$BookCopyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookCopy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookCopyFindUniqueOrThrowArgs} args - Arguments to find a BookCopy
     * @example
     * // Get one BookCopy
     * const bookCopy = await prisma.bookCopy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookCopyFindUniqueOrThrowArgs>(args: SelectSubset<T, BookCopyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookCopyClient<$Result.GetResult<Prisma.$BookCopyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookCopy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCopyFindFirstArgs} args - Arguments to find a BookCopy
     * @example
     * // Get one BookCopy
     * const bookCopy = await prisma.bookCopy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookCopyFindFirstArgs>(args?: SelectSubset<T, BookCopyFindFirstArgs<ExtArgs>>): Prisma__BookCopyClient<$Result.GetResult<Prisma.$BookCopyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookCopy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCopyFindFirstOrThrowArgs} args - Arguments to find a BookCopy
     * @example
     * // Get one BookCopy
     * const bookCopy = await prisma.bookCopy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookCopyFindFirstOrThrowArgs>(args?: SelectSubset<T, BookCopyFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookCopyClient<$Result.GetResult<Prisma.$BookCopyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookCopies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCopyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookCopies
     * const bookCopies = await prisma.bookCopy.findMany()
     * 
     * // Get first 10 BookCopies
     * const bookCopies = await prisma.bookCopy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookCopyWithIdOnly = await prisma.bookCopy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookCopyFindManyArgs>(args?: SelectSubset<T, BookCopyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookCopyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookCopy.
     * @param {BookCopyCreateArgs} args - Arguments to create a BookCopy.
     * @example
     * // Create one BookCopy
     * const BookCopy = await prisma.bookCopy.create({
     *   data: {
     *     // ... data to create a BookCopy
     *   }
     * })
     * 
     */
    create<T extends BookCopyCreateArgs>(args: SelectSubset<T, BookCopyCreateArgs<ExtArgs>>): Prisma__BookCopyClient<$Result.GetResult<Prisma.$BookCopyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookCopies.
     * @param {BookCopyCreateManyArgs} args - Arguments to create many BookCopies.
     * @example
     * // Create many BookCopies
     * const bookCopy = await prisma.bookCopy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCopyCreateManyArgs>(args?: SelectSubset<T, BookCopyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookCopies and returns the data saved in the database.
     * @param {BookCopyCreateManyAndReturnArgs} args - Arguments to create many BookCopies.
     * @example
     * // Create many BookCopies
     * const bookCopy = await prisma.bookCopy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookCopies and only return the `id`
     * const bookCopyWithIdOnly = await prisma.bookCopy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCopyCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCopyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookCopyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookCopy.
     * @param {BookCopyDeleteArgs} args - Arguments to delete one BookCopy.
     * @example
     * // Delete one BookCopy
     * const BookCopy = await prisma.bookCopy.delete({
     *   where: {
     *     // ... filter to delete one BookCopy
     *   }
     * })
     * 
     */
    delete<T extends BookCopyDeleteArgs>(args: SelectSubset<T, BookCopyDeleteArgs<ExtArgs>>): Prisma__BookCopyClient<$Result.GetResult<Prisma.$BookCopyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookCopy.
     * @param {BookCopyUpdateArgs} args - Arguments to update one BookCopy.
     * @example
     * // Update one BookCopy
     * const bookCopy = await prisma.bookCopy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookCopyUpdateArgs>(args: SelectSubset<T, BookCopyUpdateArgs<ExtArgs>>): Prisma__BookCopyClient<$Result.GetResult<Prisma.$BookCopyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookCopies.
     * @param {BookCopyDeleteManyArgs} args - Arguments to filter BookCopies to delete.
     * @example
     * // Delete a few BookCopies
     * const { count } = await prisma.bookCopy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookCopyDeleteManyArgs>(args?: SelectSubset<T, BookCopyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookCopies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCopyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookCopies
     * const bookCopy = await prisma.bookCopy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookCopyUpdateManyArgs>(args: SelectSubset<T, BookCopyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookCopies and returns the data updated in the database.
     * @param {BookCopyUpdateManyAndReturnArgs} args - Arguments to update many BookCopies.
     * @example
     * // Update many BookCopies
     * const bookCopy = await prisma.bookCopy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookCopies and only return the `id`
     * const bookCopyWithIdOnly = await prisma.bookCopy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookCopyUpdateManyAndReturnArgs>(args: SelectSubset<T, BookCopyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookCopyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookCopy.
     * @param {BookCopyUpsertArgs} args - Arguments to update or create a BookCopy.
     * @example
     * // Update or create a BookCopy
     * const bookCopy = await prisma.bookCopy.upsert({
     *   create: {
     *     // ... data to create a BookCopy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookCopy we want to update
     *   }
     * })
     */
    upsert<T extends BookCopyUpsertArgs>(args: SelectSubset<T, BookCopyUpsertArgs<ExtArgs>>): Prisma__BookCopyClient<$Result.GetResult<Prisma.$BookCopyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookCopies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCopyCountArgs} args - Arguments to filter BookCopies to count.
     * @example
     * // Count the number of BookCopies
     * const count = await prisma.bookCopy.count({
     *   where: {
     *     // ... the filter for the BookCopies we want to count
     *   }
     * })
    **/
    count<T extends BookCopyCountArgs>(
      args?: Subset<T, BookCopyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCopyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookCopy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCopyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookCopyAggregateArgs>(args: Subset<T, BookCopyAggregateArgs>): Prisma.PrismaPromise<GetBookCopyAggregateType<T>>

    /**
     * Group by BookCopy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCopyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookCopyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookCopyGroupByArgs['orderBy'] }
        : { orderBy?: BookCopyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookCopyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookCopyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookCopy model
   */
  readonly fields: BookCopyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookCopy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookCopyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventoryLogs<T extends BookCopy$inventoryLogsArgs<ExtArgs> = {}>(args?: Subset<T, BookCopy$inventoryLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookCopy model
   */
  interface BookCopyFieldRefs {
    readonly id: FieldRef<"BookCopy", 'String'>
    readonly bookId: FieldRef<"BookCopy", 'String'>
    readonly branchId: FieldRef<"BookCopy", 'String'>
    readonly copyNumber: FieldRef<"BookCopy", 'Int'>
    readonly barcode: FieldRef<"BookCopy", 'String'>
    readonly qrCode: FieldRef<"BookCopy", 'String'>
    readonly qrCodeUrl: FieldRef<"BookCopy", 'String'>
    readonly condition: FieldRef<"BookCopy", 'BookCondition'>
    readonly status: FieldRef<"BookCopy", 'CopyStatus'>
    readonly statusChangedAt: FieldRef<"BookCopy", 'DateTime'>
    readonly statusChangedBy: FieldRef<"BookCopy", 'String'>
    readonly statusReason: FieldRef<"BookCopy", 'String'>
    readonly locationRoom: FieldRef<"BookCopy", 'String'>
    readonly locationShelf: FieldRef<"BookCopy", 'String'>
    readonly locationRow: FieldRef<"BookCopy", 'Int'>
    readonly locationSide: FieldRef<"BookCopy", 'String'>
    readonly locationPosition: FieldRef<"BookCopy", 'Int'>
    readonly purchaseDate: FieldRef<"BookCopy", 'DateTime'>
    readonly price: FieldRef<"BookCopy", 'Decimal'>
    readonly createdBy: FieldRef<"BookCopy", 'String'>
    readonly createdAt: FieldRef<"BookCopy", 'DateTime'>
    readonly updatedAt: FieldRef<"BookCopy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookCopy findUnique
   */
  export type BookCopyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCopy
     */
    select?: BookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCopy
     */
    omit?: BookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCopyInclude<ExtArgs> | null
    /**
     * Filter, which BookCopy to fetch.
     */
    where: BookCopyWhereUniqueInput
  }

  /**
   * BookCopy findUniqueOrThrow
   */
  export type BookCopyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCopy
     */
    select?: BookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCopy
     */
    omit?: BookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCopyInclude<ExtArgs> | null
    /**
     * Filter, which BookCopy to fetch.
     */
    where: BookCopyWhereUniqueInput
  }

  /**
   * BookCopy findFirst
   */
  export type BookCopyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCopy
     */
    select?: BookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCopy
     */
    omit?: BookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCopyInclude<ExtArgs> | null
    /**
     * Filter, which BookCopy to fetch.
     */
    where?: BookCopyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookCopies to fetch.
     */
    orderBy?: BookCopyOrderByWithRelationInput | BookCopyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookCopies.
     */
    cursor?: BookCopyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookCopies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookCopies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookCopies.
     */
    distinct?: BookCopyScalarFieldEnum | BookCopyScalarFieldEnum[]
  }

  /**
   * BookCopy findFirstOrThrow
   */
  export type BookCopyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCopy
     */
    select?: BookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCopy
     */
    omit?: BookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCopyInclude<ExtArgs> | null
    /**
     * Filter, which BookCopy to fetch.
     */
    where?: BookCopyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookCopies to fetch.
     */
    orderBy?: BookCopyOrderByWithRelationInput | BookCopyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookCopies.
     */
    cursor?: BookCopyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookCopies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookCopies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookCopies.
     */
    distinct?: BookCopyScalarFieldEnum | BookCopyScalarFieldEnum[]
  }

  /**
   * BookCopy findMany
   */
  export type BookCopyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCopy
     */
    select?: BookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCopy
     */
    omit?: BookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCopyInclude<ExtArgs> | null
    /**
     * Filter, which BookCopies to fetch.
     */
    where?: BookCopyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookCopies to fetch.
     */
    orderBy?: BookCopyOrderByWithRelationInput | BookCopyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookCopies.
     */
    cursor?: BookCopyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookCopies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookCopies.
     */
    skip?: number
    distinct?: BookCopyScalarFieldEnum | BookCopyScalarFieldEnum[]
  }

  /**
   * BookCopy create
   */
  export type BookCopyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCopy
     */
    select?: BookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCopy
     */
    omit?: BookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCopyInclude<ExtArgs> | null
    /**
     * The data needed to create a BookCopy.
     */
    data: XOR<BookCopyCreateInput, BookCopyUncheckedCreateInput>
  }

  /**
   * BookCopy createMany
   */
  export type BookCopyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookCopies.
     */
    data: BookCopyCreateManyInput | BookCopyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookCopy createManyAndReturn
   */
  export type BookCopyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCopy
     */
    select?: BookCopySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookCopy
     */
    omit?: BookCopyOmit<ExtArgs> | null
    /**
     * The data used to create many BookCopies.
     */
    data: BookCopyCreateManyInput | BookCopyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCopyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookCopy update
   */
  export type BookCopyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCopy
     */
    select?: BookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCopy
     */
    omit?: BookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCopyInclude<ExtArgs> | null
    /**
     * The data needed to update a BookCopy.
     */
    data: XOR<BookCopyUpdateInput, BookCopyUncheckedUpdateInput>
    /**
     * Choose, which BookCopy to update.
     */
    where: BookCopyWhereUniqueInput
  }

  /**
   * BookCopy updateMany
   */
  export type BookCopyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookCopies.
     */
    data: XOR<BookCopyUpdateManyMutationInput, BookCopyUncheckedUpdateManyInput>
    /**
     * Filter which BookCopies to update
     */
    where?: BookCopyWhereInput
    /**
     * Limit how many BookCopies to update.
     */
    limit?: number
  }

  /**
   * BookCopy updateManyAndReturn
   */
  export type BookCopyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCopy
     */
    select?: BookCopySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookCopy
     */
    omit?: BookCopyOmit<ExtArgs> | null
    /**
     * The data used to update BookCopies.
     */
    data: XOR<BookCopyUpdateManyMutationInput, BookCopyUncheckedUpdateManyInput>
    /**
     * Filter which BookCopies to update
     */
    where?: BookCopyWhereInput
    /**
     * Limit how many BookCopies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCopyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookCopy upsert
   */
  export type BookCopyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCopy
     */
    select?: BookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCopy
     */
    omit?: BookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCopyInclude<ExtArgs> | null
    /**
     * The filter to search for the BookCopy to update in case it exists.
     */
    where: BookCopyWhereUniqueInput
    /**
     * In case the BookCopy found by the `where` argument doesn't exist, create a new BookCopy with this data.
     */
    create: XOR<BookCopyCreateInput, BookCopyUncheckedCreateInput>
    /**
     * In case the BookCopy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookCopyUpdateInput, BookCopyUncheckedUpdateInput>
  }

  /**
   * BookCopy delete
   */
  export type BookCopyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCopy
     */
    select?: BookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCopy
     */
    omit?: BookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCopyInclude<ExtArgs> | null
    /**
     * Filter which BookCopy to delete.
     */
    where: BookCopyWhereUniqueInput
  }

  /**
   * BookCopy deleteMany
   */
  export type BookCopyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookCopies to delete
     */
    where?: BookCopyWhereInput
    /**
     * Limit how many BookCopies to delete.
     */
    limit?: number
  }

  /**
   * BookCopy.inventoryLogs
   */
  export type BookCopy$inventoryLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    where?: InventoryLogWhereInput
    orderBy?: InventoryLogOrderByWithRelationInput | InventoryLogOrderByWithRelationInput[]
    cursor?: InventoryLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryLogScalarFieldEnum | InventoryLogScalarFieldEnum[]
  }

  /**
   * BookCopy without action
   */
  export type BookCopyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCopy
     */
    select?: BookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCopy
     */
    omit?: BookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCopyInclude<ExtArgs> | null
  }


  /**
   * Model InventoryLog
   */

  export type AggregateInventoryLog = {
    _count: InventoryLogCountAggregateOutputType | null
    _avg: InventoryLogAvgAggregateOutputType | null
    _sum: InventoryLogSumAggregateOutputType | null
    _min: InventoryLogMinAggregateOutputType | null
    _max: InventoryLogMaxAggregateOutputType | null
  }

  export type InventoryLogAvgAggregateOutputType = {
    quantity: number | null
  }

  export type InventoryLogSumAggregateOutputType = {
    quantity: number | null
  }

  export type InventoryLogMinAggregateOutputType = {
    id: string | null
    bookId: string | null
    copyId: string | null
    branchId: string | null
    action: $Enums.InventoryAction | null
    oldStatus: string | null
    newStatus: string | null
    quantity: number | null
    reason: string | null
    notes: string | null
    performedBy: string | null
    performedAt: Date | null
  }

  export type InventoryLogMaxAggregateOutputType = {
    id: string | null
    bookId: string | null
    copyId: string | null
    branchId: string | null
    action: $Enums.InventoryAction | null
    oldStatus: string | null
    newStatus: string | null
    quantity: number | null
    reason: string | null
    notes: string | null
    performedBy: string | null
    performedAt: Date | null
  }

  export type InventoryLogCountAggregateOutputType = {
    id: number
    bookId: number
    copyId: number
    branchId: number
    action: number
    oldStatus: number
    newStatus: number
    oldLocation: number
    newLocation: number
    quantity: number
    reason: number
    notes: number
    metadata: number
    performedBy: number
    performedAt: number
    _all: number
  }


  export type InventoryLogAvgAggregateInputType = {
    quantity?: true
  }

  export type InventoryLogSumAggregateInputType = {
    quantity?: true
  }

  export type InventoryLogMinAggregateInputType = {
    id?: true
    bookId?: true
    copyId?: true
    branchId?: true
    action?: true
    oldStatus?: true
    newStatus?: true
    quantity?: true
    reason?: true
    notes?: true
    performedBy?: true
    performedAt?: true
  }

  export type InventoryLogMaxAggregateInputType = {
    id?: true
    bookId?: true
    copyId?: true
    branchId?: true
    action?: true
    oldStatus?: true
    newStatus?: true
    quantity?: true
    reason?: true
    notes?: true
    performedBy?: true
    performedAt?: true
  }

  export type InventoryLogCountAggregateInputType = {
    id?: true
    bookId?: true
    copyId?: true
    branchId?: true
    action?: true
    oldStatus?: true
    newStatus?: true
    oldLocation?: true
    newLocation?: true
    quantity?: true
    reason?: true
    notes?: true
    metadata?: true
    performedBy?: true
    performedAt?: true
    _all?: true
  }

  export type InventoryLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryLog to aggregate.
     */
    where?: InventoryLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLogs to fetch.
     */
    orderBy?: InventoryLogOrderByWithRelationInput | InventoryLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryLogs
    **/
    _count?: true | InventoryLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryLogMaxAggregateInputType
  }

  export type GetInventoryLogAggregateType<T extends InventoryLogAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryLog[P]>
      : GetScalarType<T[P], AggregateInventoryLog[P]>
  }




  export type InventoryLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryLogWhereInput
    orderBy?: InventoryLogOrderByWithAggregationInput | InventoryLogOrderByWithAggregationInput[]
    by: InventoryLogScalarFieldEnum[] | InventoryLogScalarFieldEnum
    having?: InventoryLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryLogCountAggregateInputType | true
    _avg?: InventoryLogAvgAggregateInputType
    _sum?: InventoryLogSumAggregateInputType
    _min?: InventoryLogMinAggregateInputType
    _max?: InventoryLogMaxAggregateInputType
  }

  export type InventoryLogGroupByOutputType = {
    id: string
    bookId: string | null
    copyId: string | null
    branchId: string | null
    action: $Enums.InventoryAction
    oldStatus: string | null
    newStatus: string | null
    oldLocation: JsonValue | null
    newLocation: JsonValue | null
    quantity: number | null
    reason: string | null
    notes: string | null
    metadata: JsonValue | null
    performedBy: string
    performedAt: Date
    _count: InventoryLogCountAggregateOutputType | null
    _avg: InventoryLogAvgAggregateOutputType | null
    _sum: InventoryLogSumAggregateOutputType | null
    _min: InventoryLogMinAggregateOutputType | null
    _max: InventoryLogMaxAggregateOutputType | null
  }

  type GetInventoryLogGroupByPayload<T extends InventoryLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryLogGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryLogGroupByOutputType[P]>
        }
      >
    >


  export type InventoryLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    copyId?: boolean
    branchId?: boolean
    action?: boolean
    oldStatus?: boolean
    newStatus?: boolean
    oldLocation?: boolean
    newLocation?: boolean
    quantity?: boolean
    reason?: boolean
    notes?: boolean
    metadata?: boolean
    performedBy?: boolean
    performedAt?: boolean
    book?: boolean | InventoryLog$bookArgs<ExtArgs>
    copy?: boolean | InventoryLog$copyArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryLog"]>

  export type InventoryLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    copyId?: boolean
    branchId?: boolean
    action?: boolean
    oldStatus?: boolean
    newStatus?: boolean
    oldLocation?: boolean
    newLocation?: boolean
    quantity?: boolean
    reason?: boolean
    notes?: boolean
    metadata?: boolean
    performedBy?: boolean
    performedAt?: boolean
    book?: boolean | InventoryLog$bookArgs<ExtArgs>
    copy?: boolean | InventoryLog$copyArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryLog"]>

  export type InventoryLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    copyId?: boolean
    branchId?: boolean
    action?: boolean
    oldStatus?: boolean
    newStatus?: boolean
    oldLocation?: boolean
    newLocation?: boolean
    quantity?: boolean
    reason?: boolean
    notes?: boolean
    metadata?: boolean
    performedBy?: boolean
    performedAt?: boolean
    book?: boolean | InventoryLog$bookArgs<ExtArgs>
    copy?: boolean | InventoryLog$copyArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryLog"]>

  export type InventoryLogSelectScalar = {
    id?: boolean
    bookId?: boolean
    copyId?: boolean
    branchId?: boolean
    action?: boolean
    oldStatus?: boolean
    newStatus?: boolean
    oldLocation?: boolean
    newLocation?: boolean
    quantity?: boolean
    reason?: boolean
    notes?: boolean
    metadata?: boolean
    performedBy?: boolean
    performedAt?: boolean
  }

  export type InventoryLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "copyId" | "branchId" | "action" | "oldStatus" | "newStatus" | "oldLocation" | "newLocation" | "quantity" | "reason" | "notes" | "metadata" | "performedBy" | "performedAt", ExtArgs["result"]["inventoryLog"]>
  export type InventoryLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | InventoryLog$bookArgs<ExtArgs>
    copy?: boolean | InventoryLog$copyArgs<ExtArgs>
  }
  export type InventoryLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | InventoryLog$bookArgs<ExtArgs>
    copy?: boolean | InventoryLog$copyArgs<ExtArgs>
  }
  export type InventoryLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | InventoryLog$bookArgs<ExtArgs>
    copy?: boolean | InventoryLog$copyArgs<ExtArgs>
  }

  export type $InventoryLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryLog"
    objects: {
      book: Prisma.$BookPayload<ExtArgs> | null
      copy: Prisma.$BookCopyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookId: string | null
      copyId: string | null
      branchId: string | null
      action: $Enums.InventoryAction
      oldStatus: string | null
      newStatus: string | null
      oldLocation: Prisma.JsonValue | null
      newLocation: Prisma.JsonValue | null
      quantity: number | null
      reason: string | null
      notes: string | null
      metadata: Prisma.JsonValue | null
      performedBy: string
      performedAt: Date
    }, ExtArgs["result"]["inventoryLog"]>
    composites: {}
  }

  type InventoryLogGetPayload<S extends boolean | null | undefined | InventoryLogDefaultArgs> = $Result.GetResult<Prisma.$InventoryLogPayload, S>

  type InventoryLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryLogCountAggregateInputType | true
    }

  export interface InventoryLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryLog'], meta: { name: 'InventoryLog' } }
    /**
     * Find zero or one InventoryLog that matches the filter.
     * @param {InventoryLogFindUniqueArgs} args - Arguments to find a InventoryLog
     * @example
     * // Get one InventoryLog
     * const inventoryLog = await prisma.inventoryLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryLogFindUniqueArgs>(args: SelectSubset<T, InventoryLogFindUniqueArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryLogFindUniqueOrThrowArgs} args - Arguments to find a InventoryLog
     * @example
     * // Get one InventoryLog
     * const inventoryLog = await prisma.inventoryLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryLogFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogFindFirstArgs} args - Arguments to find a InventoryLog
     * @example
     * // Get one InventoryLog
     * const inventoryLog = await prisma.inventoryLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryLogFindFirstArgs>(args?: SelectSubset<T, InventoryLogFindFirstArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogFindFirstOrThrowArgs} args - Arguments to find a InventoryLog
     * @example
     * // Get one InventoryLog
     * const inventoryLog = await prisma.inventoryLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryLogFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryLogs
     * const inventoryLogs = await prisma.inventoryLog.findMany()
     * 
     * // Get first 10 InventoryLogs
     * const inventoryLogs = await prisma.inventoryLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryLogWithIdOnly = await prisma.inventoryLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryLogFindManyArgs>(args?: SelectSubset<T, InventoryLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryLog.
     * @param {InventoryLogCreateArgs} args - Arguments to create a InventoryLog.
     * @example
     * // Create one InventoryLog
     * const InventoryLog = await prisma.inventoryLog.create({
     *   data: {
     *     // ... data to create a InventoryLog
     *   }
     * })
     * 
     */
    create<T extends InventoryLogCreateArgs>(args: SelectSubset<T, InventoryLogCreateArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryLogs.
     * @param {InventoryLogCreateManyArgs} args - Arguments to create many InventoryLogs.
     * @example
     * // Create many InventoryLogs
     * const inventoryLog = await prisma.inventoryLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryLogCreateManyArgs>(args?: SelectSubset<T, InventoryLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryLogs and returns the data saved in the database.
     * @param {InventoryLogCreateManyAndReturnArgs} args - Arguments to create many InventoryLogs.
     * @example
     * // Create many InventoryLogs
     * const inventoryLog = await prisma.inventoryLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryLogs and only return the `id`
     * const inventoryLogWithIdOnly = await prisma.inventoryLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryLogCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryLog.
     * @param {InventoryLogDeleteArgs} args - Arguments to delete one InventoryLog.
     * @example
     * // Delete one InventoryLog
     * const InventoryLog = await prisma.inventoryLog.delete({
     *   where: {
     *     // ... filter to delete one InventoryLog
     *   }
     * })
     * 
     */
    delete<T extends InventoryLogDeleteArgs>(args: SelectSubset<T, InventoryLogDeleteArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryLog.
     * @param {InventoryLogUpdateArgs} args - Arguments to update one InventoryLog.
     * @example
     * // Update one InventoryLog
     * const inventoryLog = await prisma.inventoryLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryLogUpdateArgs>(args: SelectSubset<T, InventoryLogUpdateArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryLogs.
     * @param {InventoryLogDeleteManyArgs} args - Arguments to filter InventoryLogs to delete.
     * @example
     * // Delete a few InventoryLogs
     * const { count } = await prisma.inventoryLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryLogDeleteManyArgs>(args?: SelectSubset<T, InventoryLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryLogs
     * const inventoryLog = await prisma.inventoryLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryLogUpdateManyArgs>(args: SelectSubset<T, InventoryLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryLogs and returns the data updated in the database.
     * @param {InventoryLogUpdateManyAndReturnArgs} args - Arguments to update many InventoryLogs.
     * @example
     * // Update many InventoryLogs
     * const inventoryLog = await prisma.inventoryLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryLogs and only return the `id`
     * const inventoryLogWithIdOnly = await prisma.inventoryLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryLogUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryLog.
     * @param {InventoryLogUpsertArgs} args - Arguments to update or create a InventoryLog.
     * @example
     * // Update or create a InventoryLog
     * const inventoryLog = await prisma.inventoryLog.upsert({
     *   create: {
     *     // ... data to create a InventoryLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryLog we want to update
     *   }
     * })
     */
    upsert<T extends InventoryLogUpsertArgs>(args: SelectSubset<T, InventoryLogUpsertArgs<ExtArgs>>): Prisma__InventoryLogClient<$Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogCountArgs} args - Arguments to filter InventoryLogs to count.
     * @example
     * // Count the number of InventoryLogs
     * const count = await prisma.inventoryLog.count({
     *   where: {
     *     // ... the filter for the InventoryLogs we want to count
     *   }
     * })
    **/
    count<T extends InventoryLogCountArgs>(
      args?: Subset<T, InventoryLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryLogAggregateArgs>(args: Subset<T, InventoryLogAggregateArgs>): Prisma.PrismaPromise<GetInventoryLogAggregateType<T>>

    /**
     * Group by InventoryLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryLogGroupByArgs['orderBy'] }
        : { orderBy?: InventoryLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryLog model
   */
  readonly fields: InventoryLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends InventoryLog$bookArgs<ExtArgs> = {}>(args?: Subset<T, InventoryLog$bookArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    copy<T extends InventoryLog$copyArgs<ExtArgs> = {}>(args?: Subset<T, InventoryLog$copyArgs<ExtArgs>>): Prisma__BookCopyClient<$Result.GetResult<Prisma.$BookCopyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryLog model
   */
  interface InventoryLogFieldRefs {
    readonly id: FieldRef<"InventoryLog", 'String'>
    readonly bookId: FieldRef<"InventoryLog", 'String'>
    readonly copyId: FieldRef<"InventoryLog", 'String'>
    readonly branchId: FieldRef<"InventoryLog", 'String'>
    readonly action: FieldRef<"InventoryLog", 'InventoryAction'>
    readonly oldStatus: FieldRef<"InventoryLog", 'String'>
    readonly newStatus: FieldRef<"InventoryLog", 'String'>
    readonly oldLocation: FieldRef<"InventoryLog", 'Json'>
    readonly newLocation: FieldRef<"InventoryLog", 'Json'>
    readonly quantity: FieldRef<"InventoryLog", 'Int'>
    readonly reason: FieldRef<"InventoryLog", 'String'>
    readonly notes: FieldRef<"InventoryLog", 'String'>
    readonly metadata: FieldRef<"InventoryLog", 'Json'>
    readonly performedBy: FieldRef<"InventoryLog", 'String'>
    readonly performedAt: FieldRef<"InventoryLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryLog findUnique
   */
  export type InventoryLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLog to fetch.
     */
    where: InventoryLogWhereUniqueInput
  }

  /**
   * InventoryLog findUniqueOrThrow
   */
  export type InventoryLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLog to fetch.
     */
    where: InventoryLogWhereUniqueInput
  }

  /**
   * InventoryLog findFirst
   */
  export type InventoryLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLog to fetch.
     */
    where?: InventoryLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLogs to fetch.
     */
    orderBy?: InventoryLogOrderByWithRelationInput | InventoryLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryLogs.
     */
    cursor?: InventoryLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryLogs.
     */
    distinct?: InventoryLogScalarFieldEnum | InventoryLogScalarFieldEnum[]
  }

  /**
   * InventoryLog findFirstOrThrow
   */
  export type InventoryLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLog to fetch.
     */
    where?: InventoryLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLogs to fetch.
     */
    orderBy?: InventoryLogOrderByWithRelationInput | InventoryLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryLogs.
     */
    cursor?: InventoryLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryLogs.
     */
    distinct?: InventoryLogScalarFieldEnum | InventoryLogScalarFieldEnum[]
  }

  /**
   * InventoryLog findMany
   */
  export type InventoryLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter, which InventoryLogs to fetch.
     */
    where?: InventoryLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryLogs to fetch.
     */
    orderBy?: InventoryLogOrderByWithRelationInput | InventoryLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryLogs.
     */
    cursor?: InventoryLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryLogs.
     */
    skip?: number
    distinct?: InventoryLogScalarFieldEnum | InventoryLogScalarFieldEnum[]
  }

  /**
   * InventoryLog create
   */
  export type InventoryLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryLog.
     */
    data: XOR<InventoryLogCreateInput, InventoryLogUncheckedCreateInput>
  }

  /**
   * InventoryLog createMany
   */
  export type InventoryLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryLogs.
     */
    data: InventoryLogCreateManyInput | InventoryLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryLog createManyAndReturn
   */
  export type InventoryLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryLogs.
     */
    data: InventoryLogCreateManyInput | InventoryLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryLog update
   */
  export type InventoryLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryLog.
     */
    data: XOR<InventoryLogUpdateInput, InventoryLogUncheckedUpdateInput>
    /**
     * Choose, which InventoryLog to update.
     */
    where: InventoryLogWhereUniqueInput
  }

  /**
   * InventoryLog updateMany
   */
  export type InventoryLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryLogs.
     */
    data: XOR<InventoryLogUpdateManyMutationInput, InventoryLogUncheckedUpdateManyInput>
    /**
     * Filter which InventoryLogs to update
     */
    where?: InventoryLogWhereInput
    /**
     * Limit how many InventoryLogs to update.
     */
    limit?: number
  }

  /**
   * InventoryLog updateManyAndReturn
   */
  export type InventoryLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * The data used to update InventoryLogs.
     */
    data: XOR<InventoryLogUpdateManyMutationInput, InventoryLogUncheckedUpdateManyInput>
    /**
     * Filter which InventoryLogs to update
     */
    where?: InventoryLogWhereInput
    /**
     * Limit how many InventoryLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryLog upsert
   */
  export type InventoryLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryLog to update in case it exists.
     */
    where: InventoryLogWhereUniqueInput
    /**
     * In case the InventoryLog found by the `where` argument doesn't exist, create a new InventoryLog with this data.
     */
    create: XOR<InventoryLogCreateInput, InventoryLogUncheckedCreateInput>
    /**
     * In case the InventoryLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryLogUpdateInput, InventoryLogUncheckedUpdateInput>
  }

  /**
   * InventoryLog delete
   */
  export type InventoryLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
    /**
     * Filter which InventoryLog to delete.
     */
    where: InventoryLogWhereUniqueInput
  }

  /**
   * InventoryLog deleteMany
   */
  export type InventoryLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryLogs to delete
     */
    where?: InventoryLogWhereInput
    /**
     * Limit how many InventoryLogs to delete.
     */
    limit?: number
  }

  /**
   * InventoryLog.book
   */
  export type InventoryLog$bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
  }

  /**
   * InventoryLog.copy
   */
  export type InventoryLog$copyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCopy
     */
    select?: BookCopySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookCopy
     */
    omit?: BookCopyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookCopyInclude<ExtArgs> | null
    where?: BookCopyWhereInput
  }

  /**
   * InventoryLog without action
   */
  export type InventoryLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryLog
     */
    select?: InventoryLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryLog
     */
    omit?: InventoryLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    resource: 'resource',
    resourceId: 'resourceId',
    oldValue: 'oldValue',
    newValue: 'newValue',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    resource: 'resource',
    action: 'action',
    description: 'description'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    refreshToken: 'refreshToken',
    deviceInfo: 'deviceInfo',
    ipAddress: 'ipAddress',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    avatar: 'avatar',
    isActive: 'isActive',
    isVerified: 'isVerified',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    chatId: 'chatId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    path: 'path',
    size: 'size',
    mimeType: 'mimeType',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    isbn10: 'isbn10',
    isbn13: 'isbn13',
    titleUz: 'titleUz',
    titleRu: 'titleRu',
    titleEn: 'titleEn',
    publisherId: 'publisherId',
    publishYear: 'publishYear',
    languages: 'languages',
    pageCount: 'pageCount',
    ageCategory: 'ageCategory',
    coverType: 'coverType',
    shortDescription: 'shortDescription',
    fullDescription: 'fullDescription',
    coverImageUrl: 'coverImageUrl',
    coverThumbnailUrl: 'coverThumbnailUrl',
    weight: 'weight',
    height: 'height',
    width: 'width',
    thickness: 'thickness',
    seriesName: 'seriesName',
    seriesNumber: 'seriesNumber',
    seriesTotal: 'seriesTotal',
    ddcCode: 'ddcCode',
    udcCode: 'udcCode',
    tags: 'tags',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    biography: 'biography',
    birthDate: 'birthDate',
    nationality: 'nationality',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const BookAuthorScalarFieldEnum: {
    bookId: 'bookId',
    authorId: 'authorId',
    authorOrder: 'authorOrder'
  };

  export type BookAuthorScalarFieldEnum = (typeof BookAuthorScalarFieldEnum)[keyof typeof BookAuthorScalarFieldEnum]


  export const PublisherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    country: 'country',
    website: 'website',
    createdAt: 'createdAt'
  };

  export type PublisherScalarFieldEnum = (typeof PublisherScalarFieldEnum)[keyof typeof PublisherScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    parentId: 'parentId'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const BookGenreScalarFieldEnum: {
    bookId: 'bookId',
    genreId: 'genreId',
    isPrimary: 'isPrimary'
  };

  export type BookGenreScalarFieldEnum = (typeof BookGenreScalarFieldEnum)[keyof typeof BookGenreScalarFieldEnum]


  export const BookCopyScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    branchId: 'branchId',
    copyNumber: 'copyNumber',
    barcode: 'barcode',
    qrCode: 'qrCode',
    qrCodeUrl: 'qrCodeUrl',
    condition: 'condition',
    status: 'status',
    statusChangedAt: 'statusChangedAt',
    statusChangedBy: 'statusChangedBy',
    statusReason: 'statusReason',
    locationRoom: 'locationRoom',
    locationShelf: 'locationShelf',
    locationRow: 'locationRow',
    locationSide: 'locationSide',
    locationPosition: 'locationPosition',
    purchaseDate: 'purchaseDate',
    price: 'price',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookCopyScalarFieldEnum = (typeof BookCopyScalarFieldEnum)[keyof typeof BookCopyScalarFieldEnum]


  export const InventoryLogScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    copyId: 'copyId',
    branchId: 'branchId',
    action: 'action',
    oldStatus: 'oldStatus',
    newStatus: 'newStatus',
    oldLocation: 'oldLocation',
    newLocation: 'newLocation',
    quantity: 'quantity',
    reason: 'reason',
    notes: 'notes',
    metadata: 'metadata',
    performedBy: 'performedBy',
    performedAt: 'performedAt'
  };

  export type InventoryLogScalarFieldEnum = (typeof InventoryLogScalarFieldEnum)[keyof typeof InventoryLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Action'
   */
  export type EnumActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Action'>
    


  /**
   * Reference to a field of type 'Action[]'
   */
  export type ListEnumActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Action[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'AgeCategory'
   */
  export type EnumAgeCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgeCategory'>
    


  /**
   * Reference to a field of type 'AgeCategory[]'
   */
  export type ListEnumAgeCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgeCategory[]'>
    


  /**
   * Reference to a field of type 'CoverType'
   */
  export type EnumCoverTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoverType'>
    


  /**
   * Reference to a field of type 'CoverType[]'
   */
  export type ListEnumCoverTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoverType[]'>
    


  /**
   * Reference to a field of type 'BookCondition'
   */
  export type EnumBookConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookCondition'>
    


  /**
   * Reference to a field of type 'BookCondition[]'
   */
  export type ListEnumBookConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookCondition[]'>
    


  /**
   * Reference to a field of type 'CopyStatus'
   */
  export type EnumCopyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CopyStatus'>
    


  /**
   * Reference to a field of type 'CopyStatus[]'
   */
  export type ListEnumCopyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CopyStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'InventoryAction'
   */
  export type EnumInventoryActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryAction'>
    


  /**
   * Reference to a field of type 'InventoryAction[]'
   */
  export type ListEnumInventoryActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InventoryAction[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: IntNullableFilter<"AuditLog"> | number | null
    action?: EnumActionFilter<"AuditLog"> | $Enums.Action
    resource?: StringFilter<"AuditLog"> | string
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    oldValue?: JsonNullableFilter<"AuditLog">
    newValue?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: IntNullableFilter<"AuditLog"> | number | null
    action?: EnumActionFilter<"AuditLog"> | $Enums.Action
    resource?: StringFilter<"AuditLog"> | string
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    oldValue?: JsonNullableFilter<"AuditLog">
    newValue?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _avg?: AuditLogAvgOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
    _sum?: AuditLogSumOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: IntNullableWithAggregatesFilter<"AuditLog"> | number | null
    action?: EnumActionWithAggregatesFilter<"AuditLog"> | $Enums.Action
    resource?: StringWithAggregatesFilter<"AuditLog"> | string
    resourceId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    oldValue?: JsonNullableWithAggregatesFilter<"AuditLog">
    newValue?: JsonNullableWithAggregatesFilter<"AuditLog">
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: StringFilter<"Permission"> | string
    resource?: StringFilter<"Permission"> | string
    action?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    resource?: SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    resource_action?: PermissionResourceActionCompoundUniqueInput
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    resource?: StringFilter<"Permission"> | string
    action?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
  }, "id" | "resource_action">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    resource?: SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Permission"> | string
    resource?: StringWithAggregatesFilter<"Permission"> | string
    action?: StringWithAggregatesFilter<"Permission"> | string
    description?: StringNullableWithAggregatesFilter<"Permission"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    refreshToken?: StringFilter<"Session"> | string
    deviceInfo?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    deviceInfo?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    refreshToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: IntFilter<"Session"> | number
    deviceInfo?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "refreshToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    deviceInfo?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: IntWithAggregatesFilter<"Session"> | number
    refreshToken?: StringWithAggregatesFilter<"Session"> | string
    deviceInfo?: StringNullableWithAggregatesFilter<"Session"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    chatId?: StringNullableFilter<"User"> | string | null
    AuditLog?: AuditLogListRelationFilter
    Session?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    chatId?: SortOrderInput | SortOrder
    AuditLog?: AuditLogOrderByRelationAggregateInput
    Session?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    chatId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    AuditLog?: AuditLogListRelationFilter
    Session?: SessionListRelationFilter
  }, "id" | "phone" | "chatId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    chatId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    chatId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: StringFilter<"File"> | string
    path?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    mimeType?: StringFilter<"File"> | string
    status?: EnumStatusFilter<"File"> | $Enums.Status
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    path?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    mimeType?: StringFilter<"File"> | string
    status?: EnumStatusFilter<"File"> | $Enums.Status
    createdAt?: DateTimeFilter<"File"> | Date | string
    updatedAt?: DateTimeFilter<"File"> | Date | string
  }, "id">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"File"> | string
    path?: StringWithAggregatesFilter<"File"> | string
    size?: IntWithAggregatesFilter<"File"> | number
    mimeType?: StringWithAggregatesFilter<"File"> | string
    status?: EnumStatusWithAggregatesFilter<"File"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: StringFilter<"Book"> | string
    isbn10?: StringNullableFilter<"Book"> | string | null
    isbn13?: StringFilter<"Book"> | string
    titleUz?: StringFilter<"Book"> | string
    titleRu?: StringNullableFilter<"Book"> | string | null
    titleEn?: StringNullableFilter<"Book"> | string | null
    publisherId?: StringFilter<"Book"> | string
    publishYear?: IntFilter<"Book"> | number
    languages?: StringNullableListFilter<"Book">
    pageCount?: IntNullableFilter<"Book"> | number | null
    ageCategory?: EnumAgeCategoryFilter<"Book"> | $Enums.AgeCategory
    coverType?: EnumCoverTypeFilter<"Book"> | $Enums.CoverType
    shortDescription?: StringNullableFilter<"Book"> | string | null
    fullDescription?: StringNullableFilter<"Book"> | string | null
    coverImageUrl?: StringNullableFilter<"Book"> | string | null
    coverThumbnailUrl?: StringNullableFilter<"Book"> | string | null
    weight?: IntNullableFilter<"Book"> | number | null
    height?: IntNullableFilter<"Book"> | number | null
    width?: IntNullableFilter<"Book"> | number | null
    thickness?: IntNullableFilter<"Book"> | number | null
    seriesName?: StringNullableFilter<"Book"> | string | null
    seriesNumber?: IntNullableFilter<"Book"> | number | null
    seriesTotal?: IntNullableFilter<"Book"> | number | null
    ddcCode?: StringNullableFilter<"Book"> | string | null
    udcCode?: StringNullableFilter<"Book"> | string | null
    tags?: StringNullableListFilter<"Book">
    createdBy?: StringFilter<"Book"> | string
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Book"> | Date | string | null
    publisher?: XOR<PublisherScalarRelationFilter, PublisherWhereInput>
    authors?: BookAuthorListRelationFilter
    genres?: BookGenreListRelationFilter
    copies?: BookCopyListRelationFilter
    inventoryLogs?: InventoryLogListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    isbn10?: SortOrderInput | SortOrder
    isbn13?: SortOrder
    titleUz?: SortOrder
    titleRu?: SortOrderInput | SortOrder
    titleEn?: SortOrderInput | SortOrder
    publisherId?: SortOrder
    publishYear?: SortOrder
    languages?: SortOrder
    pageCount?: SortOrderInput | SortOrder
    ageCategory?: SortOrder
    coverType?: SortOrder
    shortDescription?: SortOrderInput | SortOrder
    fullDescription?: SortOrderInput | SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    coverThumbnailUrl?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    thickness?: SortOrderInput | SortOrder
    seriesName?: SortOrderInput | SortOrder
    seriesNumber?: SortOrderInput | SortOrder
    seriesTotal?: SortOrderInput | SortOrder
    ddcCode?: SortOrderInput | SortOrder
    udcCode?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    publisher?: PublisherOrderByWithRelationInput
    authors?: BookAuthorOrderByRelationAggregateInput
    genres?: BookGenreOrderByRelationAggregateInput
    copies?: BookCopyOrderByRelationAggregateInput
    inventoryLogs?: InventoryLogOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    isbn10?: string
    isbn13?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    titleUz?: StringFilter<"Book"> | string
    titleRu?: StringNullableFilter<"Book"> | string | null
    titleEn?: StringNullableFilter<"Book"> | string | null
    publisherId?: StringFilter<"Book"> | string
    publishYear?: IntFilter<"Book"> | number
    languages?: StringNullableListFilter<"Book">
    pageCount?: IntNullableFilter<"Book"> | number | null
    ageCategory?: EnumAgeCategoryFilter<"Book"> | $Enums.AgeCategory
    coverType?: EnumCoverTypeFilter<"Book"> | $Enums.CoverType
    shortDescription?: StringNullableFilter<"Book"> | string | null
    fullDescription?: StringNullableFilter<"Book"> | string | null
    coverImageUrl?: StringNullableFilter<"Book"> | string | null
    coverThumbnailUrl?: StringNullableFilter<"Book"> | string | null
    weight?: IntNullableFilter<"Book"> | number | null
    height?: IntNullableFilter<"Book"> | number | null
    width?: IntNullableFilter<"Book"> | number | null
    thickness?: IntNullableFilter<"Book"> | number | null
    seriesName?: StringNullableFilter<"Book"> | string | null
    seriesNumber?: IntNullableFilter<"Book"> | number | null
    seriesTotal?: IntNullableFilter<"Book"> | number | null
    ddcCode?: StringNullableFilter<"Book"> | string | null
    udcCode?: StringNullableFilter<"Book"> | string | null
    tags?: StringNullableListFilter<"Book">
    createdBy?: StringFilter<"Book"> | string
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Book"> | Date | string | null
    publisher?: XOR<PublisherScalarRelationFilter, PublisherWhereInput>
    authors?: BookAuthorListRelationFilter
    genres?: BookGenreListRelationFilter
    copies?: BookCopyListRelationFilter
    inventoryLogs?: InventoryLogListRelationFilter
  }, "id" | "isbn10" | "isbn13">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    isbn10?: SortOrderInput | SortOrder
    isbn13?: SortOrder
    titleUz?: SortOrder
    titleRu?: SortOrderInput | SortOrder
    titleEn?: SortOrderInput | SortOrder
    publisherId?: SortOrder
    publishYear?: SortOrder
    languages?: SortOrder
    pageCount?: SortOrderInput | SortOrder
    ageCategory?: SortOrder
    coverType?: SortOrder
    shortDescription?: SortOrderInput | SortOrder
    fullDescription?: SortOrderInput | SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    coverThumbnailUrl?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    thickness?: SortOrderInput | SortOrder
    seriesName?: SortOrderInput | SortOrder
    seriesNumber?: SortOrderInput | SortOrder
    seriesTotal?: SortOrderInput | SortOrder
    ddcCode?: SortOrderInput | SortOrder
    udcCode?: SortOrderInput | SortOrder
    tags?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Book"> | string
    isbn10?: StringNullableWithAggregatesFilter<"Book"> | string | null
    isbn13?: StringWithAggregatesFilter<"Book"> | string
    titleUz?: StringWithAggregatesFilter<"Book"> | string
    titleRu?: StringNullableWithAggregatesFilter<"Book"> | string | null
    titleEn?: StringNullableWithAggregatesFilter<"Book"> | string | null
    publisherId?: StringWithAggregatesFilter<"Book"> | string
    publishYear?: IntWithAggregatesFilter<"Book"> | number
    languages?: StringNullableListFilter<"Book">
    pageCount?: IntNullableWithAggregatesFilter<"Book"> | number | null
    ageCategory?: EnumAgeCategoryWithAggregatesFilter<"Book"> | $Enums.AgeCategory
    coverType?: EnumCoverTypeWithAggregatesFilter<"Book"> | $Enums.CoverType
    shortDescription?: StringNullableWithAggregatesFilter<"Book"> | string | null
    fullDescription?: StringNullableWithAggregatesFilter<"Book"> | string | null
    coverImageUrl?: StringNullableWithAggregatesFilter<"Book"> | string | null
    coverThumbnailUrl?: StringNullableWithAggregatesFilter<"Book"> | string | null
    weight?: IntNullableWithAggregatesFilter<"Book"> | number | null
    height?: IntNullableWithAggregatesFilter<"Book"> | number | null
    width?: IntNullableWithAggregatesFilter<"Book"> | number | null
    thickness?: IntNullableWithAggregatesFilter<"Book"> | number | null
    seriesName?: StringNullableWithAggregatesFilter<"Book"> | string | null
    seriesNumber?: IntNullableWithAggregatesFilter<"Book"> | number | null
    seriesTotal?: IntNullableWithAggregatesFilter<"Book"> | number | null
    ddcCode?: StringNullableWithAggregatesFilter<"Book"> | string | null
    udcCode?: StringNullableWithAggregatesFilter<"Book"> | string | null
    tags?: StringNullableListFilter<"Book">
    createdBy?: StringWithAggregatesFilter<"Book"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Book"> | Date | string | null
  }

  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    id?: StringFilter<"Author"> | string
    firstName?: StringFilter<"Author"> | string
    lastName?: StringFilter<"Author"> | string
    biography?: StringNullableFilter<"Author"> | string | null
    birthDate?: DateTimeNullableFilter<"Author"> | Date | string | null
    nationality?: StringNullableFilter<"Author"> | string | null
    avatarUrl?: StringNullableFilter<"Author"> | string | null
    createdAt?: DateTimeFilter<"Author"> | Date | string
    updatedAt?: DateTimeFilter<"Author"> | Date | string
    books?: BookAuthorListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    biography?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    books?: BookAuthorOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    firstName?: StringFilter<"Author"> | string
    lastName?: StringFilter<"Author"> | string
    biography?: StringNullableFilter<"Author"> | string | null
    birthDate?: DateTimeNullableFilter<"Author"> | Date | string | null
    nationality?: StringNullableFilter<"Author"> | string | null
    avatarUrl?: StringNullableFilter<"Author"> | string | null
    createdAt?: DateTimeFilter<"Author"> | Date | string
    updatedAt?: DateTimeFilter<"Author"> | Date | string
    books?: BookAuthorListRelationFilter
  }, "id">

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    biography?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    OR?: AuthorScalarWhereWithAggregatesInput[]
    NOT?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Author"> | string
    firstName?: StringWithAggregatesFilter<"Author"> | string
    lastName?: StringWithAggregatesFilter<"Author"> | string
    biography?: StringNullableWithAggregatesFilter<"Author"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Author"> | Date | string | null
    nationality?: StringNullableWithAggregatesFilter<"Author"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Author"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Author"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Author"> | Date | string
  }

  export type BookAuthorWhereInput = {
    AND?: BookAuthorWhereInput | BookAuthorWhereInput[]
    OR?: BookAuthorWhereInput[]
    NOT?: BookAuthorWhereInput | BookAuthorWhereInput[]
    bookId?: StringFilter<"BookAuthor"> | string
    authorId?: StringFilter<"BookAuthor"> | string
    authorOrder?: IntFilter<"BookAuthor"> | number
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
  }

  export type BookAuthorOrderByWithRelationInput = {
    bookId?: SortOrder
    authorId?: SortOrder
    authorOrder?: SortOrder
    book?: BookOrderByWithRelationInput
    author?: AuthorOrderByWithRelationInput
  }

  export type BookAuthorWhereUniqueInput = Prisma.AtLeast<{
    bookId_authorId?: BookAuthorBookIdAuthorIdCompoundUniqueInput
    AND?: BookAuthorWhereInput | BookAuthorWhereInput[]
    OR?: BookAuthorWhereInput[]
    NOT?: BookAuthorWhereInput | BookAuthorWhereInput[]
    bookId?: StringFilter<"BookAuthor"> | string
    authorId?: StringFilter<"BookAuthor"> | string
    authorOrder?: IntFilter<"BookAuthor"> | number
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
  }, "bookId_authorId">

  export type BookAuthorOrderByWithAggregationInput = {
    bookId?: SortOrder
    authorId?: SortOrder
    authorOrder?: SortOrder
    _count?: BookAuthorCountOrderByAggregateInput
    _avg?: BookAuthorAvgOrderByAggregateInput
    _max?: BookAuthorMaxOrderByAggregateInput
    _min?: BookAuthorMinOrderByAggregateInput
    _sum?: BookAuthorSumOrderByAggregateInput
  }

  export type BookAuthorScalarWhereWithAggregatesInput = {
    AND?: BookAuthorScalarWhereWithAggregatesInput | BookAuthorScalarWhereWithAggregatesInput[]
    OR?: BookAuthorScalarWhereWithAggregatesInput[]
    NOT?: BookAuthorScalarWhereWithAggregatesInput | BookAuthorScalarWhereWithAggregatesInput[]
    bookId?: StringWithAggregatesFilter<"BookAuthor"> | string
    authorId?: StringWithAggregatesFilter<"BookAuthor"> | string
    authorOrder?: IntWithAggregatesFilter<"BookAuthor"> | number
  }

  export type PublisherWhereInput = {
    AND?: PublisherWhereInput | PublisherWhereInput[]
    OR?: PublisherWhereInput[]
    NOT?: PublisherWhereInput | PublisherWhereInput[]
    id?: StringFilter<"Publisher"> | string
    name?: StringFilter<"Publisher"> | string
    country?: StringNullableFilter<"Publisher"> | string | null
    website?: StringNullableFilter<"Publisher"> | string | null
    createdAt?: DateTimeFilter<"Publisher"> | Date | string
    books?: BookListRelationFilter
  }

  export type PublisherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    books?: BookOrderByRelationAggregateInput
  }

  export type PublisherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PublisherWhereInput | PublisherWhereInput[]
    OR?: PublisherWhereInput[]
    NOT?: PublisherWhereInput | PublisherWhereInput[]
    country?: StringNullableFilter<"Publisher"> | string | null
    website?: StringNullableFilter<"Publisher"> | string | null
    createdAt?: DateTimeFilter<"Publisher"> | Date | string
    books?: BookListRelationFilter
  }, "id" | "name">

  export type PublisherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PublisherCountOrderByAggregateInput
    _max?: PublisherMaxOrderByAggregateInput
    _min?: PublisherMinOrderByAggregateInput
  }

  export type PublisherScalarWhereWithAggregatesInput = {
    AND?: PublisherScalarWhereWithAggregatesInput | PublisherScalarWhereWithAggregatesInput[]
    OR?: PublisherScalarWhereWithAggregatesInput[]
    NOT?: PublisherScalarWhereWithAggregatesInput | PublisherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Publisher"> | string
    name?: StringWithAggregatesFilter<"Publisher"> | string
    country?: StringNullableWithAggregatesFilter<"Publisher"> | string | null
    website?: StringNullableWithAggregatesFilter<"Publisher"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Publisher"> | Date | string
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: StringFilter<"Genre"> | string
    name?: StringFilter<"Genre"> | string
    description?: StringNullableFilter<"Genre"> | string | null
    parentId?: StringNullableFilter<"Genre"> | string | null
    parent?: XOR<GenreNullableScalarRelationFilter, GenreWhereInput> | null
    children?: GenreListRelationFilter
    books?: BookGenreListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    parent?: GenreOrderByWithRelationInput
    children?: GenreOrderByRelationAggregateInput
    books?: BookGenreOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    description?: StringNullableFilter<"Genre"> | string | null
    parentId?: StringNullableFilter<"Genre"> | string | null
    parent?: XOR<GenreNullableScalarRelationFilter, GenreWhereInput> | null
    children?: GenreListRelationFilter
    books?: BookGenreListRelationFilter
  }, "id" | "name">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: GenreCountOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Genre"> | string
    name?: StringWithAggregatesFilter<"Genre"> | string
    description?: StringNullableWithAggregatesFilter<"Genre"> | string | null
    parentId?: StringNullableWithAggregatesFilter<"Genre"> | string | null
  }

  export type BookGenreWhereInput = {
    AND?: BookGenreWhereInput | BookGenreWhereInput[]
    OR?: BookGenreWhereInput[]
    NOT?: BookGenreWhereInput | BookGenreWhereInput[]
    bookId?: StringFilter<"BookGenre"> | string
    genreId?: StringFilter<"BookGenre"> | string
    isPrimary?: BoolFilter<"BookGenre"> | boolean
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
  }

  export type BookGenreOrderByWithRelationInput = {
    bookId?: SortOrder
    genreId?: SortOrder
    isPrimary?: SortOrder
    book?: BookOrderByWithRelationInput
    genre?: GenreOrderByWithRelationInput
  }

  export type BookGenreWhereUniqueInput = Prisma.AtLeast<{
    bookId_genreId?: BookGenreBookIdGenreIdCompoundUniqueInput
    AND?: BookGenreWhereInput | BookGenreWhereInput[]
    OR?: BookGenreWhereInput[]
    NOT?: BookGenreWhereInput | BookGenreWhereInput[]
    bookId?: StringFilter<"BookGenre"> | string
    genreId?: StringFilter<"BookGenre"> | string
    isPrimary?: BoolFilter<"BookGenre"> | boolean
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
  }, "bookId_genreId">

  export type BookGenreOrderByWithAggregationInput = {
    bookId?: SortOrder
    genreId?: SortOrder
    isPrimary?: SortOrder
    _count?: BookGenreCountOrderByAggregateInput
    _max?: BookGenreMaxOrderByAggregateInput
    _min?: BookGenreMinOrderByAggregateInput
  }

  export type BookGenreScalarWhereWithAggregatesInput = {
    AND?: BookGenreScalarWhereWithAggregatesInput | BookGenreScalarWhereWithAggregatesInput[]
    OR?: BookGenreScalarWhereWithAggregatesInput[]
    NOT?: BookGenreScalarWhereWithAggregatesInput | BookGenreScalarWhereWithAggregatesInput[]
    bookId?: StringWithAggregatesFilter<"BookGenre"> | string
    genreId?: StringWithAggregatesFilter<"BookGenre"> | string
    isPrimary?: BoolWithAggregatesFilter<"BookGenre"> | boolean
  }

  export type BookCopyWhereInput = {
    AND?: BookCopyWhereInput | BookCopyWhereInput[]
    OR?: BookCopyWhereInput[]
    NOT?: BookCopyWhereInput | BookCopyWhereInput[]
    id?: StringFilter<"BookCopy"> | string
    bookId?: StringFilter<"BookCopy"> | string
    branchId?: StringFilter<"BookCopy"> | string
    copyNumber?: IntFilter<"BookCopy"> | number
    barcode?: StringFilter<"BookCopy"> | string
    qrCode?: StringNullableFilter<"BookCopy"> | string | null
    qrCodeUrl?: StringNullableFilter<"BookCopy"> | string | null
    condition?: EnumBookConditionFilter<"BookCopy"> | $Enums.BookCondition
    status?: EnumCopyStatusFilter<"BookCopy"> | $Enums.CopyStatus
    statusChangedAt?: DateTimeNullableFilter<"BookCopy"> | Date | string | null
    statusChangedBy?: StringNullableFilter<"BookCopy"> | string | null
    statusReason?: StringNullableFilter<"BookCopy"> | string | null
    locationRoom?: StringNullableFilter<"BookCopy"> | string | null
    locationShelf?: StringNullableFilter<"BookCopy"> | string | null
    locationRow?: IntNullableFilter<"BookCopy"> | number | null
    locationSide?: StringNullableFilter<"BookCopy"> | string | null
    locationPosition?: IntNullableFilter<"BookCopy"> | number | null
    purchaseDate?: DateTimeNullableFilter<"BookCopy"> | Date | string | null
    price?: DecimalNullableFilter<"BookCopy"> | Decimal | DecimalJsLike | number | string | null
    createdBy?: StringFilter<"BookCopy"> | string
    createdAt?: DateTimeFilter<"BookCopy"> | Date | string
    updatedAt?: DateTimeFilter<"BookCopy"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    inventoryLogs?: InventoryLogListRelationFilter
  }

  export type BookCopyOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    branchId?: SortOrder
    copyNumber?: SortOrder
    barcode?: SortOrder
    qrCode?: SortOrderInput | SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    condition?: SortOrder
    status?: SortOrder
    statusChangedAt?: SortOrderInput | SortOrder
    statusChangedBy?: SortOrderInput | SortOrder
    statusReason?: SortOrderInput | SortOrder
    locationRoom?: SortOrderInput | SortOrder
    locationShelf?: SortOrderInput | SortOrder
    locationRow?: SortOrderInput | SortOrder
    locationSide?: SortOrderInput | SortOrder
    locationPosition?: SortOrderInput | SortOrder
    purchaseDate?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    book?: BookOrderByWithRelationInput
    inventoryLogs?: InventoryLogOrderByRelationAggregateInput
  }

  export type BookCopyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    barcode?: string
    qrCode?: string
    AND?: BookCopyWhereInput | BookCopyWhereInput[]
    OR?: BookCopyWhereInput[]
    NOT?: BookCopyWhereInput | BookCopyWhereInput[]
    bookId?: StringFilter<"BookCopy"> | string
    branchId?: StringFilter<"BookCopy"> | string
    copyNumber?: IntFilter<"BookCopy"> | number
    qrCodeUrl?: StringNullableFilter<"BookCopy"> | string | null
    condition?: EnumBookConditionFilter<"BookCopy"> | $Enums.BookCondition
    status?: EnumCopyStatusFilter<"BookCopy"> | $Enums.CopyStatus
    statusChangedAt?: DateTimeNullableFilter<"BookCopy"> | Date | string | null
    statusChangedBy?: StringNullableFilter<"BookCopy"> | string | null
    statusReason?: StringNullableFilter<"BookCopy"> | string | null
    locationRoom?: StringNullableFilter<"BookCopy"> | string | null
    locationShelf?: StringNullableFilter<"BookCopy"> | string | null
    locationRow?: IntNullableFilter<"BookCopy"> | number | null
    locationSide?: StringNullableFilter<"BookCopy"> | string | null
    locationPosition?: IntNullableFilter<"BookCopy"> | number | null
    purchaseDate?: DateTimeNullableFilter<"BookCopy"> | Date | string | null
    price?: DecimalNullableFilter<"BookCopy"> | Decimal | DecimalJsLike | number | string | null
    createdBy?: StringFilter<"BookCopy"> | string
    createdAt?: DateTimeFilter<"BookCopy"> | Date | string
    updatedAt?: DateTimeFilter<"BookCopy"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    inventoryLogs?: InventoryLogListRelationFilter
  }, "id" | "barcode" | "qrCode">

  export type BookCopyOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    branchId?: SortOrder
    copyNumber?: SortOrder
    barcode?: SortOrder
    qrCode?: SortOrderInput | SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    condition?: SortOrder
    status?: SortOrder
    statusChangedAt?: SortOrderInput | SortOrder
    statusChangedBy?: SortOrderInput | SortOrder
    statusReason?: SortOrderInput | SortOrder
    locationRoom?: SortOrderInput | SortOrder
    locationShelf?: SortOrderInput | SortOrder
    locationRow?: SortOrderInput | SortOrder
    locationSide?: SortOrderInput | SortOrder
    locationPosition?: SortOrderInput | SortOrder
    purchaseDate?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookCopyCountOrderByAggregateInput
    _avg?: BookCopyAvgOrderByAggregateInput
    _max?: BookCopyMaxOrderByAggregateInput
    _min?: BookCopyMinOrderByAggregateInput
    _sum?: BookCopySumOrderByAggregateInput
  }

  export type BookCopyScalarWhereWithAggregatesInput = {
    AND?: BookCopyScalarWhereWithAggregatesInput | BookCopyScalarWhereWithAggregatesInput[]
    OR?: BookCopyScalarWhereWithAggregatesInput[]
    NOT?: BookCopyScalarWhereWithAggregatesInput | BookCopyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookCopy"> | string
    bookId?: StringWithAggregatesFilter<"BookCopy"> | string
    branchId?: StringWithAggregatesFilter<"BookCopy"> | string
    copyNumber?: IntWithAggregatesFilter<"BookCopy"> | number
    barcode?: StringWithAggregatesFilter<"BookCopy"> | string
    qrCode?: StringNullableWithAggregatesFilter<"BookCopy"> | string | null
    qrCodeUrl?: StringNullableWithAggregatesFilter<"BookCopy"> | string | null
    condition?: EnumBookConditionWithAggregatesFilter<"BookCopy"> | $Enums.BookCondition
    status?: EnumCopyStatusWithAggregatesFilter<"BookCopy"> | $Enums.CopyStatus
    statusChangedAt?: DateTimeNullableWithAggregatesFilter<"BookCopy"> | Date | string | null
    statusChangedBy?: StringNullableWithAggregatesFilter<"BookCopy"> | string | null
    statusReason?: StringNullableWithAggregatesFilter<"BookCopy"> | string | null
    locationRoom?: StringNullableWithAggregatesFilter<"BookCopy"> | string | null
    locationShelf?: StringNullableWithAggregatesFilter<"BookCopy"> | string | null
    locationRow?: IntNullableWithAggregatesFilter<"BookCopy"> | number | null
    locationSide?: StringNullableWithAggregatesFilter<"BookCopy"> | string | null
    locationPosition?: IntNullableWithAggregatesFilter<"BookCopy"> | number | null
    purchaseDate?: DateTimeNullableWithAggregatesFilter<"BookCopy"> | Date | string | null
    price?: DecimalNullableWithAggregatesFilter<"BookCopy"> | Decimal | DecimalJsLike | number | string | null
    createdBy?: StringWithAggregatesFilter<"BookCopy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BookCopy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BookCopy"> | Date | string
  }

  export type InventoryLogWhereInput = {
    AND?: InventoryLogWhereInput | InventoryLogWhereInput[]
    OR?: InventoryLogWhereInput[]
    NOT?: InventoryLogWhereInput | InventoryLogWhereInput[]
    id?: StringFilter<"InventoryLog"> | string
    bookId?: StringNullableFilter<"InventoryLog"> | string | null
    copyId?: StringNullableFilter<"InventoryLog"> | string | null
    branchId?: StringNullableFilter<"InventoryLog"> | string | null
    action?: EnumInventoryActionFilter<"InventoryLog"> | $Enums.InventoryAction
    oldStatus?: StringNullableFilter<"InventoryLog"> | string | null
    newStatus?: StringNullableFilter<"InventoryLog"> | string | null
    oldLocation?: JsonNullableFilter<"InventoryLog">
    newLocation?: JsonNullableFilter<"InventoryLog">
    quantity?: IntNullableFilter<"InventoryLog"> | number | null
    reason?: StringNullableFilter<"InventoryLog"> | string | null
    notes?: StringNullableFilter<"InventoryLog"> | string | null
    metadata?: JsonNullableFilter<"InventoryLog">
    performedBy?: StringFilter<"InventoryLog"> | string
    performedAt?: DateTimeFilter<"InventoryLog"> | Date | string
    book?: XOR<BookNullableScalarRelationFilter, BookWhereInput> | null
    copy?: XOR<BookCopyNullableScalarRelationFilter, BookCopyWhereInput> | null
  }

  export type InventoryLogOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrderInput | SortOrder
    copyId?: SortOrderInput | SortOrder
    branchId?: SortOrderInput | SortOrder
    action?: SortOrder
    oldStatus?: SortOrderInput | SortOrder
    newStatus?: SortOrderInput | SortOrder
    oldLocation?: SortOrderInput | SortOrder
    newLocation?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    performedBy?: SortOrder
    performedAt?: SortOrder
    book?: BookOrderByWithRelationInput
    copy?: BookCopyOrderByWithRelationInput
  }

  export type InventoryLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryLogWhereInput | InventoryLogWhereInput[]
    OR?: InventoryLogWhereInput[]
    NOT?: InventoryLogWhereInput | InventoryLogWhereInput[]
    bookId?: StringNullableFilter<"InventoryLog"> | string | null
    copyId?: StringNullableFilter<"InventoryLog"> | string | null
    branchId?: StringNullableFilter<"InventoryLog"> | string | null
    action?: EnumInventoryActionFilter<"InventoryLog"> | $Enums.InventoryAction
    oldStatus?: StringNullableFilter<"InventoryLog"> | string | null
    newStatus?: StringNullableFilter<"InventoryLog"> | string | null
    oldLocation?: JsonNullableFilter<"InventoryLog">
    newLocation?: JsonNullableFilter<"InventoryLog">
    quantity?: IntNullableFilter<"InventoryLog"> | number | null
    reason?: StringNullableFilter<"InventoryLog"> | string | null
    notes?: StringNullableFilter<"InventoryLog"> | string | null
    metadata?: JsonNullableFilter<"InventoryLog">
    performedBy?: StringFilter<"InventoryLog"> | string
    performedAt?: DateTimeFilter<"InventoryLog"> | Date | string
    book?: XOR<BookNullableScalarRelationFilter, BookWhereInput> | null
    copy?: XOR<BookCopyNullableScalarRelationFilter, BookCopyWhereInput> | null
  }, "id">

  export type InventoryLogOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrderInput | SortOrder
    copyId?: SortOrderInput | SortOrder
    branchId?: SortOrderInput | SortOrder
    action?: SortOrder
    oldStatus?: SortOrderInput | SortOrder
    newStatus?: SortOrderInput | SortOrder
    oldLocation?: SortOrderInput | SortOrder
    newLocation?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    performedBy?: SortOrder
    performedAt?: SortOrder
    _count?: InventoryLogCountOrderByAggregateInput
    _avg?: InventoryLogAvgOrderByAggregateInput
    _max?: InventoryLogMaxOrderByAggregateInput
    _min?: InventoryLogMinOrderByAggregateInput
    _sum?: InventoryLogSumOrderByAggregateInput
  }

  export type InventoryLogScalarWhereWithAggregatesInput = {
    AND?: InventoryLogScalarWhereWithAggregatesInput | InventoryLogScalarWhereWithAggregatesInput[]
    OR?: InventoryLogScalarWhereWithAggregatesInput[]
    NOT?: InventoryLogScalarWhereWithAggregatesInput | InventoryLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryLog"> | string
    bookId?: StringNullableWithAggregatesFilter<"InventoryLog"> | string | null
    copyId?: StringNullableWithAggregatesFilter<"InventoryLog"> | string | null
    branchId?: StringNullableWithAggregatesFilter<"InventoryLog"> | string | null
    action?: EnumInventoryActionWithAggregatesFilter<"InventoryLog"> | $Enums.InventoryAction
    oldStatus?: StringNullableWithAggregatesFilter<"InventoryLog"> | string | null
    newStatus?: StringNullableWithAggregatesFilter<"InventoryLog"> | string | null
    oldLocation?: JsonNullableWithAggregatesFilter<"InventoryLog">
    newLocation?: JsonNullableWithAggregatesFilter<"InventoryLog">
    quantity?: IntNullableWithAggregatesFilter<"InventoryLog"> | number | null
    reason?: StringNullableWithAggregatesFilter<"InventoryLog"> | string | null
    notes?: StringNullableWithAggregatesFilter<"InventoryLog"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"InventoryLog">
    performedBy?: StringWithAggregatesFilter<"InventoryLog"> | string
    performedAt?: DateTimeWithAggregatesFilter<"InventoryLog"> | Date | string
  }

  export type AuditLogCreateInput = {
    id: string
    action: $Enums.Action
    resource: string
    resourceId?: string | null
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    User?: UserCreateNestedOneWithoutAuditLogInput
  }

  export type AuditLogUncheckedCreateInput = {
    id: string
    userId?: number | null
    action: $Enums.Action
    resource: string
    resourceId?: string | null
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutAuditLogNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id: string
    userId?: number | null
    action: $Enums.Action
    resource: string
    resourceId?: string | null
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateInput = {
    id: string
    resource: string
    action: string
    description?: string | null
  }

  export type PermissionUncheckedCreateInput = {
    id: string
    resource: string
    action: string
    description?: string | null
  }

  export type PermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionCreateManyInput = {
    id: string
    resource: string
    action: string
    description?: string | null
  }

  export type PermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id: string
    refreshToken: string
    deviceInfo?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    userId: number
    refreshToken: string
    deviceInfo?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    userId: number
    refreshToken: string
    deviceInfo?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    avatar?: string | null
    isActive?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    chatId?: string | null
    AuditLog?: AuditLogCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    avatar?: string | null
    isActive?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    chatId?: string | null
    AuditLog?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    AuditLog?: AuditLogUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    AuditLog?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    avatar?: string | null
    isActive?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    chatId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileCreateInput = {
    id?: string
    path: string
    size: number
    mimeType: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUncheckedCreateInput = {
    id?: string
    path: string
    size: number
    mimeType: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateManyInput = {
    id?: string
    path: string
    size: number
    mimeType: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateInput = {
    id?: string
    isbn10?: string | null
    isbn13: string
    titleUz: string
    titleRu?: string | null
    titleEn?: string | null
    publishYear: number
    languages?: BookCreatelanguagesInput | string[]
    pageCount?: number | null
    ageCategory?: $Enums.AgeCategory
    coverType?: $Enums.CoverType
    shortDescription?: string | null
    fullDescription?: string | null
    coverImageUrl?: string | null
    coverThumbnailUrl?: string | null
    weight?: number | null
    height?: number | null
    width?: number | null
    thickness?: number | null
    seriesName?: string | null
    seriesNumber?: number | null
    seriesTotal?: number | null
    ddcCode?: string | null
    udcCode?: string | null
    tags?: BookCreatetagsInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    publisher: PublisherCreateNestedOneWithoutBooksInput
    authors?: BookAuthorCreateNestedManyWithoutBookInput
    genres?: BookGenreCreateNestedManyWithoutBookInput
    copies?: BookCopyCreateNestedManyWithoutBookInput
    inventoryLogs?: InventoryLogCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: string
    isbn10?: string | null
    isbn13: string
    titleUz: string
    titleRu?: string | null
    titleEn?: string | null
    publisherId: string
    publishYear: number
    languages?: BookCreatelanguagesInput | string[]
    pageCount?: number | null
    ageCategory?: $Enums.AgeCategory
    coverType?: $Enums.CoverType
    shortDescription?: string | null
    fullDescription?: string | null
    coverImageUrl?: string | null
    coverThumbnailUrl?: string | null
    weight?: number | null
    height?: number | null
    width?: number | null
    thickness?: number | null
    seriesName?: string | null
    seriesNumber?: number | null
    seriesTotal?: number | null
    ddcCode?: string | null
    udcCode?: string | null
    tags?: BookCreatetagsInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput
    genres?: BookGenreUncheckedCreateNestedManyWithoutBookInput
    copies?: BookCopyUncheckedCreateNestedManyWithoutBookInput
    inventoryLogs?: InventoryLogUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isbn10?: NullableStringFieldUpdateOperationsInput | string | null
    isbn13?: StringFieldUpdateOperationsInput | string
    titleUz?: StringFieldUpdateOperationsInput | string
    titleRu?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: NullableStringFieldUpdateOperationsInput | string | null
    publishYear?: IntFieldUpdateOperationsInput | number
    languages?: BookUpdatelanguagesInput | string[]
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    coverType?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    thickness?: NullableIntFieldUpdateOperationsInput | number | null
    seriesName?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNumber?: NullableIntFieldUpdateOperationsInput | number | null
    seriesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    ddcCode?: NullableStringFieldUpdateOperationsInput | string | null
    udcCode?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BookUpdatetagsInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publisher?: PublisherUpdateOneRequiredWithoutBooksNestedInput
    authors?: BookAuthorUpdateManyWithoutBookNestedInput
    genres?: BookGenreUpdateManyWithoutBookNestedInput
    copies?: BookCopyUpdateManyWithoutBookNestedInput
    inventoryLogs?: InventoryLogUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isbn10?: NullableStringFieldUpdateOperationsInput | string | null
    isbn13?: StringFieldUpdateOperationsInput | string
    titleUz?: StringFieldUpdateOperationsInput | string
    titleRu?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: NullableStringFieldUpdateOperationsInput | string | null
    publisherId?: StringFieldUpdateOperationsInput | string
    publishYear?: IntFieldUpdateOperationsInput | number
    languages?: BookUpdatelanguagesInput | string[]
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    coverType?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    thickness?: NullableIntFieldUpdateOperationsInput | number | null
    seriesName?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNumber?: NullableIntFieldUpdateOperationsInput | number | null
    seriesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    ddcCode?: NullableStringFieldUpdateOperationsInput | string | null
    udcCode?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BookUpdatetagsInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput
    genres?: BookGenreUncheckedUpdateManyWithoutBookNestedInput
    copies?: BookCopyUncheckedUpdateManyWithoutBookNestedInput
    inventoryLogs?: InventoryLogUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: string
    isbn10?: string | null
    isbn13: string
    titleUz: string
    titleRu?: string | null
    titleEn?: string | null
    publisherId: string
    publishYear: number
    languages?: BookCreatelanguagesInput | string[]
    pageCount?: number | null
    ageCategory?: $Enums.AgeCategory
    coverType?: $Enums.CoverType
    shortDescription?: string | null
    fullDescription?: string | null
    coverImageUrl?: string | null
    coverThumbnailUrl?: string | null
    weight?: number | null
    height?: number | null
    width?: number | null
    thickness?: number | null
    seriesName?: string | null
    seriesNumber?: number | null
    seriesTotal?: number | null
    ddcCode?: string | null
    udcCode?: string | null
    tags?: BookCreatetagsInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isbn10?: NullableStringFieldUpdateOperationsInput | string | null
    isbn13?: StringFieldUpdateOperationsInput | string
    titleUz?: StringFieldUpdateOperationsInput | string
    titleRu?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: NullableStringFieldUpdateOperationsInput | string | null
    publishYear?: IntFieldUpdateOperationsInput | number
    languages?: BookUpdatelanguagesInput | string[]
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    coverType?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    thickness?: NullableIntFieldUpdateOperationsInput | number | null
    seriesName?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNumber?: NullableIntFieldUpdateOperationsInput | number | null
    seriesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    ddcCode?: NullableStringFieldUpdateOperationsInput | string | null
    udcCode?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BookUpdatetagsInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isbn10?: NullableStringFieldUpdateOperationsInput | string | null
    isbn13?: StringFieldUpdateOperationsInput | string
    titleUz?: StringFieldUpdateOperationsInput | string
    titleRu?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: NullableStringFieldUpdateOperationsInput | string | null
    publisherId?: StringFieldUpdateOperationsInput | string
    publishYear?: IntFieldUpdateOperationsInput | number
    languages?: BookUpdatelanguagesInput | string[]
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    coverType?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    thickness?: NullableIntFieldUpdateOperationsInput | number | null
    seriesName?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNumber?: NullableIntFieldUpdateOperationsInput | number | null
    seriesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    ddcCode?: NullableStringFieldUpdateOperationsInput | string | null
    udcCode?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BookUpdatetagsInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthorCreateInput = {
    id?: string
    firstName: string
    lastName: string
    biography?: string | null
    birthDate?: Date | string | null
    nationality?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookAuthorCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    biography?: string | null
    birthDate?: Date | string | null
    nationality?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookAuthorUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookAuthorUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookAuthorUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    biography?: string | null
    birthDate?: Date | string | null
    nationality?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookAuthorCreateInput = {
    authorOrder?: number
    book: BookCreateNestedOneWithoutAuthorsInput
    author: AuthorCreateNestedOneWithoutBooksInput
  }

  export type BookAuthorUncheckedCreateInput = {
    bookId: string
    authorId: string
    authorOrder?: number
  }

  export type BookAuthorUpdateInput = {
    authorOrder?: IntFieldUpdateOperationsInput | number
    book?: BookUpdateOneRequiredWithoutAuthorsNestedInput
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookAuthorUncheckedUpdateInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorOrder?: IntFieldUpdateOperationsInput | number
  }

  export type BookAuthorCreateManyInput = {
    bookId: string
    authorId: string
    authorOrder?: number
  }

  export type BookAuthorUpdateManyMutationInput = {
    authorOrder?: IntFieldUpdateOperationsInput | number
  }

  export type BookAuthorUncheckedUpdateManyInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorOrder?: IntFieldUpdateOperationsInput | number
  }

  export type PublisherCreateInput = {
    id?: string
    name: string
    country?: string | null
    website?: string | null
    createdAt?: Date | string
    books?: BookCreateNestedManyWithoutPublisherInput
  }

  export type PublisherUncheckedCreateInput = {
    id?: string
    name: string
    country?: string | null
    website?: string | null
    createdAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutPublisherInput
  }

  export type PublisherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutPublisherNestedInput
  }

  export type PublisherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutPublisherNestedInput
  }

  export type PublisherCreateManyInput = {
    id?: string
    name: string
    country?: string | null
    website?: string | null
    createdAt?: Date | string
  }

  export type PublisherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreCreateInput = {
    id?: string
    name: string
    description?: string | null
    parent?: GenreCreateNestedOneWithoutChildrenInput
    children?: GenreCreateNestedManyWithoutParentInput
    books?: BookGenreCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    parentId?: string | null
    children?: GenreUncheckedCreateNestedManyWithoutParentInput
    books?: BookGenreUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: GenreUpdateOneWithoutChildrenNestedInput
    children?: GenreUpdateManyWithoutParentNestedInput
    books?: BookGenreUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: GenreUncheckedUpdateManyWithoutParentNestedInput
    books?: BookGenreUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    parentId?: string | null
  }

  export type GenreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookGenreCreateInput = {
    isPrimary?: boolean
    book: BookCreateNestedOneWithoutGenresInput
    genre: GenreCreateNestedOneWithoutBooksInput
  }

  export type BookGenreUncheckedCreateInput = {
    bookId: string
    genreId: string
    isPrimary?: boolean
  }

  export type BookGenreUpdateInput = {
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    book?: BookUpdateOneRequiredWithoutGenresNestedInput
    genre?: GenreUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookGenreUncheckedUpdateInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookGenreCreateManyInput = {
    bookId: string
    genreId: string
    isPrimary?: boolean
  }

  export type BookGenreUpdateManyMutationInput = {
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookGenreUncheckedUpdateManyInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookCopyCreateInput = {
    id?: string
    branchId: string
    copyNumber: number
    barcode: string
    qrCode?: string | null
    qrCodeUrl?: string | null
    condition?: $Enums.BookCondition
    status?: $Enums.CopyStatus
    statusChangedAt?: Date | string | null
    statusChangedBy?: string | null
    statusReason?: string | null
    locationRoom?: string | null
    locationShelf?: string | null
    locationRow?: number | null
    locationSide?: string | null
    locationPosition?: number | null
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    book: BookCreateNestedOneWithoutCopiesInput
    inventoryLogs?: InventoryLogCreateNestedManyWithoutCopyInput
  }

  export type BookCopyUncheckedCreateInput = {
    id?: string
    bookId: string
    branchId: string
    copyNumber: number
    barcode: string
    qrCode?: string | null
    qrCodeUrl?: string | null
    condition?: $Enums.BookCondition
    status?: $Enums.CopyStatus
    statusChangedAt?: Date | string | null
    statusChangedBy?: string | null
    statusReason?: string | null
    locationRoom?: string | null
    locationShelf?: string | null
    locationRow?: number | null
    locationSide?: string | null
    locationPosition?: number | null
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryLogs?: InventoryLogUncheckedCreateNestedManyWithoutCopyInput
  }

  export type BookCopyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    copyNumber?: IntFieldUpdateOperationsInput | number
    barcode?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumBookConditionFieldUpdateOperationsInput | $Enums.BookCondition
    status?: EnumCopyStatusFieldUpdateOperationsInput | $Enums.CopyStatus
    statusChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusChangedBy?: NullableStringFieldUpdateOperationsInput | string | null
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    locationRoom?: NullableStringFieldUpdateOperationsInput | string | null
    locationShelf?: NullableStringFieldUpdateOperationsInput | string | null
    locationRow?: NullableIntFieldUpdateOperationsInput | number | null
    locationSide?: NullableStringFieldUpdateOperationsInput | string | null
    locationPosition?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutCopiesNestedInput
    inventoryLogs?: InventoryLogUpdateManyWithoutCopyNestedInput
  }

  export type BookCopyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    copyNumber?: IntFieldUpdateOperationsInput | number
    barcode?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumBookConditionFieldUpdateOperationsInput | $Enums.BookCondition
    status?: EnumCopyStatusFieldUpdateOperationsInput | $Enums.CopyStatus
    statusChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusChangedBy?: NullableStringFieldUpdateOperationsInput | string | null
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    locationRoom?: NullableStringFieldUpdateOperationsInput | string | null
    locationShelf?: NullableStringFieldUpdateOperationsInput | string | null
    locationRow?: NullableIntFieldUpdateOperationsInput | number | null
    locationSide?: NullableStringFieldUpdateOperationsInput | string | null
    locationPosition?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryLogs?: InventoryLogUncheckedUpdateManyWithoutCopyNestedInput
  }

  export type BookCopyCreateManyInput = {
    id?: string
    bookId: string
    branchId: string
    copyNumber: number
    barcode: string
    qrCode?: string | null
    qrCodeUrl?: string | null
    condition?: $Enums.BookCondition
    status?: $Enums.CopyStatus
    statusChangedAt?: Date | string | null
    statusChangedBy?: string | null
    statusReason?: string | null
    locationRoom?: string | null
    locationShelf?: string | null
    locationRow?: number | null
    locationSide?: string | null
    locationPosition?: number | null
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookCopyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    copyNumber?: IntFieldUpdateOperationsInput | number
    barcode?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumBookConditionFieldUpdateOperationsInput | $Enums.BookCondition
    status?: EnumCopyStatusFieldUpdateOperationsInput | $Enums.CopyStatus
    statusChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusChangedBy?: NullableStringFieldUpdateOperationsInput | string | null
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    locationRoom?: NullableStringFieldUpdateOperationsInput | string | null
    locationShelf?: NullableStringFieldUpdateOperationsInput | string | null
    locationRow?: NullableIntFieldUpdateOperationsInput | number | null
    locationSide?: NullableStringFieldUpdateOperationsInput | string | null
    locationPosition?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCopyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    copyNumber?: IntFieldUpdateOperationsInput | number
    barcode?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumBookConditionFieldUpdateOperationsInput | $Enums.BookCondition
    status?: EnumCopyStatusFieldUpdateOperationsInput | $Enums.CopyStatus
    statusChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusChangedBy?: NullableStringFieldUpdateOperationsInput | string | null
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    locationRoom?: NullableStringFieldUpdateOperationsInput | string | null
    locationShelf?: NullableStringFieldUpdateOperationsInput | string | null
    locationRow?: NullableIntFieldUpdateOperationsInput | number | null
    locationSide?: NullableStringFieldUpdateOperationsInput | string | null
    locationPosition?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLogCreateInput = {
    id?: string
    branchId?: string | null
    action: $Enums.InventoryAction
    oldStatus?: string | null
    newStatus?: string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: number | null
    reason?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy: string
    performedAt?: Date | string
    book?: BookCreateNestedOneWithoutInventoryLogsInput
    copy?: BookCopyCreateNestedOneWithoutInventoryLogsInput
  }

  export type InventoryLogUncheckedCreateInput = {
    id?: string
    bookId?: string | null
    copyId?: string | null
    branchId?: string | null
    action: $Enums.InventoryAction
    oldStatus?: string | null
    newStatus?: string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: number | null
    reason?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy: string
    performedAt?: Date | string
  }

  export type InventoryLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null
    newStatus?: NullableStringFieldUpdateOperationsInput | string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneWithoutInventoryLogsNestedInput
    copy?: BookCopyUpdateOneWithoutInventoryLogsNestedInput
  }

  export type InventoryLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    copyId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null
    newStatus?: NullableStringFieldUpdateOperationsInput | string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLogCreateManyInput = {
    id?: string
    bookId?: string | null
    copyId?: string | null
    branchId?: string | null
    action: $Enums.InventoryAction
    oldStatus?: string | null
    newStatus?: string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: number | null
    reason?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy: string
    performedAt?: Date | string
  }

  export type InventoryLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null
    newStatus?: NullableStringFieldUpdateOperationsInput | string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    copyId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null
    newStatus?: NullableStringFieldUpdateOperationsInput | string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumActionFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionFilter<$PrismaModel> | $Enums.Action
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionWithAggregatesFilter<$PrismaModel> | $Enums.Action
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionFilter<$PrismaModel>
    _max?: NestedEnumActionFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PermissionResourceActionCompoundUniqueInput = {
    resource: string
    action: string
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    resource?: SortOrder
    action?: SortOrder
    description?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    resource?: SortOrder
    action?: SortOrder
    description?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    resource?: SortOrder
    action?: SortOrder
    description?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    deviceInfo?: SortOrder
    ipAddress?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    deviceInfo?: SortOrder
    ipAddress?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    refreshToken?: SortOrder
    deviceInfo?: SortOrder
    ipAddress?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    chatId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    chatId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    chatId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumAgeCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeCategory | EnumAgeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AgeCategory[] | ListEnumAgeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeCategory[] | ListEnumAgeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeCategoryFilter<$PrismaModel> | $Enums.AgeCategory
  }

  export type EnumCoverTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CoverType | EnumCoverTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CoverType[] | ListEnumCoverTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoverType[] | ListEnumCoverTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCoverTypeFilter<$PrismaModel> | $Enums.CoverType
  }

  export type PublisherScalarRelationFilter = {
    is?: PublisherWhereInput
    isNot?: PublisherWhereInput
  }

  export type BookAuthorListRelationFilter = {
    every?: BookAuthorWhereInput
    some?: BookAuthorWhereInput
    none?: BookAuthorWhereInput
  }

  export type BookGenreListRelationFilter = {
    every?: BookGenreWhereInput
    some?: BookGenreWhereInput
    none?: BookGenreWhereInput
  }

  export type BookCopyListRelationFilter = {
    every?: BookCopyWhereInput
    some?: BookCopyWhereInput
    none?: BookCopyWhereInput
  }

  export type InventoryLogListRelationFilter = {
    every?: InventoryLogWhereInput
    some?: InventoryLogWhereInput
    none?: InventoryLogWhereInput
  }

  export type BookAuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookGenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCopyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    isbn10?: SortOrder
    isbn13?: SortOrder
    titleUz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    publisherId?: SortOrder
    publishYear?: SortOrder
    languages?: SortOrder
    pageCount?: SortOrder
    ageCategory?: SortOrder
    coverType?: SortOrder
    shortDescription?: SortOrder
    fullDescription?: SortOrder
    coverImageUrl?: SortOrder
    coverThumbnailUrl?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    width?: SortOrder
    thickness?: SortOrder
    seriesName?: SortOrder
    seriesNumber?: SortOrder
    seriesTotal?: SortOrder
    ddcCode?: SortOrder
    udcCode?: SortOrder
    tags?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    publishYear?: SortOrder
    pageCount?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    width?: SortOrder
    thickness?: SortOrder
    seriesNumber?: SortOrder
    seriesTotal?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    isbn10?: SortOrder
    isbn13?: SortOrder
    titleUz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    publisherId?: SortOrder
    publishYear?: SortOrder
    pageCount?: SortOrder
    ageCategory?: SortOrder
    coverType?: SortOrder
    shortDescription?: SortOrder
    fullDescription?: SortOrder
    coverImageUrl?: SortOrder
    coverThumbnailUrl?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    width?: SortOrder
    thickness?: SortOrder
    seriesName?: SortOrder
    seriesNumber?: SortOrder
    seriesTotal?: SortOrder
    ddcCode?: SortOrder
    udcCode?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    isbn10?: SortOrder
    isbn13?: SortOrder
    titleUz?: SortOrder
    titleRu?: SortOrder
    titleEn?: SortOrder
    publisherId?: SortOrder
    publishYear?: SortOrder
    pageCount?: SortOrder
    ageCategory?: SortOrder
    coverType?: SortOrder
    shortDescription?: SortOrder
    fullDescription?: SortOrder
    coverImageUrl?: SortOrder
    coverThumbnailUrl?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    width?: SortOrder
    thickness?: SortOrder
    seriesName?: SortOrder
    seriesNumber?: SortOrder
    seriesTotal?: SortOrder
    ddcCode?: SortOrder
    udcCode?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    publishYear?: SortOrder
    pageCount?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    width?: SortOrder
    thickness?: SortOrder
    seriesNumber?: SortOrder
    seriesTotal?: SortOrder
  }

  export type EnumAgeCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeCategory | EnumAgeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AgeCategory[] | ListEnumAgeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeCategory[] | ListEnumAgeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AgeCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgeCategoryFilter<$PrismaModel>
    _max?: NestedEnumAgeCategoryFilter<$PrismaModel>
  }

  export type EnumCoverTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoverType | EnumCoverTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CoverType[] | ListEnumCoverTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoverType[] | ListEnumCoverTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCoverTypeWithAggregatesFilter<$PrismaModel> | $Enums.CoverType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoverTypeFilter<$PrismaModel>
    _max?: NestedEnumCoverTypeFilter<$PrismaModel>
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    biography?: SortOrder
    birthDate?: SortOrder
    nationality?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    biography?: SortOrder
    birthDate?: SortOrder
    nationality?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    biography?: SortOrder
    birthDate?: SortOrder
    nationality?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type AuthorScalarRelationFilter = {
    is?: AuthorWhereInput
    isNot?: AuthorWhereInput
  }

  export type BookAuthorBookIdAuthorIdCompoundUniqueInput = {
    bookId: string
    authorId: string
  }

  export type BookAuthorCountOrderByAggregateInput = {
    bookId?: SortOrder
    authorId?: SortOrder
    authorOrder?: SortOrder
  }

  export type BookAuthorAvgOrderByAggregateInput = {
    authorOrder?: SortOrder
  }

  export type BookAuthorMaxOrderByAggregateInput = {
    bookId?: SortOrder
    authorId?: SortOrder
    authorOrder?: SortOrder
  }

  export type BookAuthorMinOrderByAggregateInput = {
    bookId?: SortOrder
    authorId?: SortOrder
    authorOrder?: SortOrder
  }

  export type BookAuthorSumOrderByAggregateInput = {
    authorOrder?: SortOrder
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublisherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
  }

  export type PublisherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
  }

  export type PublisherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    country?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
  }

  export type GenreNullableScalarRelationFilter = {
    is?: GenreWhereInput | null
    isNot?: GenreWhereInput | null
  }

  export type GenreListRelationFilter = {
    every?: GenreWhereInput
    some?: GenreWhereInput
    none?: GenreWhereInput
  }

  export type GenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parentId?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parentId?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parentId?: SortOrder
  }

  export type GenreScalarRelationFilter = {
    is?: GenreWhereInput
    isNot?: GenreWhereInput
  }

  export type BookGenreBookIdGenreIdCompoundUniqueInput = {
    bookId: string
    genreId: string
  }

  export type BookGenreCountOrderByAggregateInput = {
    bookId?: SortOrder
    genreId?: SortOrder
    isPrimary?: SortOrder
  }

  export type BookGenreMaxOrderByAggregateInput = {
    bookId?: SortOrder
    genreId?: SortOrder
    isPrimary?: SortOrder
  }

  export type BookGenreMinOrderByAggregateInput = {
    bookId?: SortOrder
    genreId?: SortOrder
    isPrimary?: SortOrder
  }

  export type EnumBookConditionFilter<$PrismaModel = never> = {
    equals?: $Enums.BookCondition | EnumBookConditionFieldRefInput<$PrismaModel>
    in?: $Enums.BookCondition[] | ListEnumBookConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookCondition[] | ListEnumBookConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumBookConditionFilter<$PrismaModel> | $Enums.BookCondition
  }

  export type EnumCopyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CopyStatus | EnumCopyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CopyStatus[] | ListEnumCopyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CopyStatus[] | ListEnumCopyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCopyStatusFilter<$PrismaModel> | $Enums.CopyStatus
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BookCopyCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    branchId?: SortOrder
    copyNumber?: SortOrder
    barcode?: SortOrder
    qrCode?: SortOrder
    qrCodeUrl?: SortOrder
    condition?: SortOrder
    status?: SortOrder
    statusChangedAt?: SortOrder
    statusChangedBy?: SortOrder
    statusReason?: SortOrder
    locationRoom?: SortOrder
    locationShelf?: SortOrder
    locationRow?: SortOrder
    locationSide?: SortOrder
    locationPosition?: SortOrder
    purchaseDate?: SortOrder
    price?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookCopyAvgOrderByAggregateInput = {
    copyNumber?: SortOrder
    locationRow?: SortOrder
    locationPosition?: SortOrder
    price?: SortOrder
  }

  export type BookCopyMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    branchId?: SortOrder
    copyNumber?: SortOrder
    barcode?: SortOrder
    qrCode?: SortOrder
    qrCodeUrl?: SortOrder
    condition?: SortOrder
    status?: SortOrder
    statusChangedAt?: SortOrder
    statusChangedBy?: SortOrder
    statusReason?: SortOrder
    locationRoom?: SortOrder
    locationShelf?: SortOrder
    locationRow?: SortOrder
    locationSide?: SortOrder
    locationPosition?: SortOrder
    purchaseDate?: SortOrder
    price?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookCopyMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    branchId?: SortOrder
    copyNumber?: SortOrder
    barcode?: SortOrder
    qrCode?: SortOrder
    qrCodeUrl?: SortOrder
    condition?: SortOrder
    status?: SortOrder
    statusChangedAt?: SortOrder
    statusChangedBy?: SortOrder
    statusReason?: SortOrder
    locationRoom?: SortOrder
    locationShelf?: SortOrder
    locationRow?: SortOrder
    locationSide?: SortOrder
    locationPosition?: SortOrder
    purchaseDate?: SortOrder
    price?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookCopySumOrderByAggregateInput = {
    copyNumber?: SortOrder
    locationRow?: SortOrder
    locationPosition?: SortOrder
    price?: SortOrder
  }

  export type EnumBookConditionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookCondition | EnumBookConditionFieldRefInput<$PrismaModel>
    in?: $Enums.BookCondition[] | ListEnumBookConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookCondition[] | ListEnumBookConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumBookConditionWithAggregatesFilter<$PrismaModel> | $Enums.BookCondition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookConditionFilter<$PrismaModel>
    _max?: NestedEnumBookConditionFilter<$PrismaModel>
  }

  export type EnumCopyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CopyStatus | EnumCopyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CopyStatus[] | ListEnumCopyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CopyStatus[] | ListEnumCopyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCopyStatusWithAggregatesFilter<$PrismaModel> | $Enums.CopyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCopyStatusFilter<$PrismaModel>
    _max?: NestedEnumCopyStatusFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumInventoryActionFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryAction | EnumInventoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryAction[] | ListEnumInventoryActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryAction[] | ListEnumInventoryActionFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryActionFilter<$PrismaModel> | $Enums.InventoryAction
  }

  export type BookNullableScalarRelationFilter = {
    is?: BookWhereInput | null
    isNot?: BookWhereInput | null
  }

  export type BookCopyNullableScalarRelationFilter = {
    is?: BookCopyWhereInput | null
    isNot?: BookCopyWhereInput | null
  }

  export type InventoryLogCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    copyId?: SortOrder
    branchId?: SortOrder
    action?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    oldLocation?: SortOrder
    newLocation?: SortOrder
    quantity?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    metadata?: SortOrder
    performedBy?: SortOrder
    performedAt?: SortOrder
  }

  export type InventoryLogAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type InventoryLogMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    copyId?: SortOrder
    branchId?: SortOrder
    action?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    quantity?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    performedBy?: SortOrder
    performedAt?: SortOrder
  }

  export type InventoryLogMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    copyId?: SortOrder
    branchId?: SortOrder
    action?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    quantity?: SortOrder
    reason?: SortOrder
    notes?: SortOrder
    performedBy?: SortOrder
    performedAt?: SortOrder
  }

  export type InventoryLogSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EnumInventoryActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryAction | EnumInventoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryAction[] | ListEnumInventoryActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryAction[] | ListEnumInventoryActionFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryActionWithAggregatesFilter<$PrismaModel> | $Enums.InventoryAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryActionFilter<$PrismaModel>
    _max?: NestedEnumInventoryActionFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAuditLogInput = {
    create?: XOR<UserCreateWithoutAuditLogInput, UserUncheckedCreateWithoutAuditLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumActionFieldUpdateOperationsInput = {
    set?: $Enums.Action
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutAuditLogNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogInput, UserUncheckedCreateWithoutAuditLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogInput
    upsert?: UserUpsertWithoutAuditLogInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogInput, UserUpdateWithoutAuditLogInput>, UserUncheckedUpdateWithoutAuditLogInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionInput, UserUpdateWithoutSessionInput>, UserUncheckedUpdateWithoutSessionInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type BookCreatelanguagesInput = {
    set: string[]
  }

  export type BookCreatetagsInput = {
    set: string[]
  }

  export type PublisherCreateNestedOneWithoutBooksInput = {
    create?: XOR<PublisherCreateWithoutBooksInput, PublisherUncheckedCreateWithoutBooksInput>
    connectOrCreate?: PublisherCreateOrConnectWithoutBooksInput
    connect?: PublisherWhereUniqueInput
  }

  export type BookAuthorCreateNestedManyWithoutBookInput = {
    create?: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput> | BookAuthorCreateWithoutBookInput[] | BookAuthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutBookInput | BookAuthorCreateOrConnectWithoutBookInput[]
    createMany?: BookAuthorCreateManyBookInputEnvelope
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
  }

  export type BookGenreCreateNestedManyWithoutBookInput = {
    create?: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput> | BookGenreCreateWithoutBookInput[] | BookGenreUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutBookInput | BookGenreCreateOrConnectWithoutBookInput[]
    createMany?: BookGenreCreateManyBookInputEnvelope
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
  }

  export type BookCopyCreateNestedManyWithoutBookInput = {
    create?: XOR<BookCopyCreateWithoutBookInput, BookCopyUncheckedCreateWithoutBookInput> | BookCopyCreateWithoutBookInput[] | BookCopyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookCopyCreateOrConnectWithoutBookInput | BookCopyCreateOrConnectWithoutBookInput[]
    createMany?: BookCopyCreateManyBookInputEnvelope
    connect?: BookCopyWhereUniqueInput | BookCopyWhereUniqueInput[]
  }

  export type InventoryLogCreateNestedManyWithoutBookInput = {
    create?: XOR<InventoryLogCreateWithoutBookInput, InventoryLogUncheckedCreateWithoutBookInput> | InventoryLogCreateWithoutBookInput[] | InventoryLogUncheckedCreateWithoutBookInput[]
    connectOrCreate?: InventoryLogCreateOrConnectWithoutBookInput | InventoryLogCreateOrConnectWithoutBookInput[]
    createMany?: InventoryLogCreateManyBookInputEnvelope
    connect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
  }

  export type BookAuthorUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput> | BookAuthorCreateWithoutBookInput[] | BookAuthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutBookInput | BookAuthorCreateOrConnectWithoutBookInput[]
    createMany?: BookAuthorCreateManyBookInputEnvelope
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
  }

  export type BookGenreUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput> | BookGenreCreateWithoutBookInput[] | BookGenreUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutBookInput | BookGenreCreateOrConnectWithoutBookInput[]
    createMany?: BookGenreCreateManyBookInputEnvelope
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
  }

  export type BookCopyUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookCopyCreateWithoutBookInput, BookCopyUncheckedCreateWithoutBookInput> | BookCopyCreateWithoutBookInput[] | BookCopyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookCopyCreateOrConnectWithoutBookInput | BookCopyCreateOrConnectWithoutBookInput[]
    createMany?: BookCopyCreateManyBookInputEnvelope
    connect?: BookCopyWhereUniqueInput | BookCopyWhereUniqueInput[]
  }

  export type InventoryLogUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<InventoryLogCreateWithoutBookInput, InventoryLogUncheckedCreateWithoutBookInput> | InventoryLogCreateWithoutBookInput[] | InventoryLogUncheckedCreateWithoutBookInput[]
    connectOrCreate?: InventoryLogCreateOrConnectWithoutBookInput | InventoryLogCreateOrConnectWithoutBookInput[]
    createMany?: InventoryLogCreateManyBookInputEnvelope
    connect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
  }

  export type BookUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumAgeCategoryFieldUpdateOperationsInput = {
    set?: $Enums.AgeCategory
  }

  export type EnumCoverTypeFieldUpdateOperationsInput = {
    set?: $Enums.CoverType
  }

  export type BookUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PublisherUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<PublisherCreateWithoutBooksInput, PublisherUncheckedCreateWithoutBooksInput>
    connectOrCreate?: PublisherCreateOrConnectWithoutBooksInput
    upsert?: PublisherUpsertWithoutBooksInput
    connect?: PublisherWhereUniqueInput
    update?: XOR<XOR<PublisherUpdateToOneWithWhereWithoutBooksInput, PublisherUpdateWithoutBooksInput>, PublisherUncheckedUpdateWithoutBooksInput>
  }

  export type BookAuthorUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput> | BookAuthorCreateWithoutBookInput[] | BookAuthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutBookInput | BookAuthorCreateOrConnectWithoutBookInput[]
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutBookInput | BookAuthorUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookAuthorCreateManyBookInputEnvelope
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    update?: BookAuthorUpdateWithWhereUniqueWithoutBookInput | BookAuthorUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookAuthorUpdateManyWithWhereWithoutBookInput | BookAuthorUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
  }

  export type BookGenreUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput> | BookGenreCreateWithoutBookInput[] | BookGenreUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutBookInput | BookGenreCreateOrConnectWithoutBookInput[]
    upsert?: BookGenreUpsertWithWhereUniqueWithoutBookInput | BookGenreUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookGenreCreateManyBookInputEnvelope
    set?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    disconnect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    delete?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    update?: BookGenreUpdateWithWhereUniqueWithoutBookInput | BookGenreUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookGenreUpdateManyWithWhereWithoutBookInput | BookGenreUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookGenreScalarWhereInput | BookGenreScalarWhereInput[]
  }

  export type BookCopyUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookCopyCreateWithoutBookInput, BookCopyUncheckedCreateWithoutBookInput> | BookCopyCreateWithoutBookInput[] | BookCopyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookCopyCreateOrConnectWithoutBookInput | BookCopyCreateOrConnectWithoutBookInput[]
    upsert?: BookCopyUpsertWithWhereUniqueWithoutBookInput | BookCopyUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookCopyCreateManyBookInputEnvelope
    set?: BookCopyWhereUniqueInput | BookCopyWhereUniqueInput[]
    disconnect?: BookCopyWhereUniqueInput | BookCopyWhereUniqueInput[]
    delete?: BookCopyWhereUniqueInput | BookCopyWhereUniqueInput[]
    connect?: BookCopyWhereUniqueInput | BookCopyWhereUniqueInput[]
    update?: BookCopyUpdateWithWhereUniqueWithoutBookInput | BookCopyUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookCopyUpdateManyWithWhereWithoutBookInput | BookCopyUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookCopyScalarWhereInput | BookCopyScalarWhereInput[]
  }

  export type InventoryLogUpdateManyWithoutBookNestedInput = {
    create?: XOR<InventoryLogCreateWithoutBookInput, InventoryLogUncheckedCreateWithoutBookInput> | InventoryLogCreateWithoutBookInput[] | InventoryLogUncheckedCreateWithoutBookInput[]
    connectOrCreate?: InventoryLogCreateOrConnectWithoutBookInput | InventoryLogCreateOrConnectWithoutBookInput[]
    upsert?: InventoryLogUpsertWithWhereUniqueWithoutBookInput | InventoryLogUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: InventoryLogCreateManyBookInputEnvelope
    set?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    disconnect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    delete?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    connect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    update?: InventoryLogUpdateWithWhereUniqueWithoutBookInput | InventoryLogUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: InventoryLogUpdateManyWithWhereWithoutBookInput | InventoryLogUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: InventoryLogScalarWhereInput | InventoryLogScalarWhereInput[]
  }

  export type BookAuthorUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput> | BookAuthorCreateWithoutBookInput[] | BookAuthorUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutBookInput | BookAuthorCreateOrConnectWithoutBookInput[]
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutBookInput | BookAuthorUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookAuthorCreateManyBookInputEnvelope
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    update?: BookAuthorUpdateWithWhereUniqueWithoutBookInput | BookAuthorUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookAuthorUpdateManyWithWhereWithoutBookInput | BookAuthorUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
  }

  export type BookGenreUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput> | BookGenreCreateWithoutBookInput[] | BookGenreUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutBookInput | BookGenreCreateOrConnectWithoutBookInput[]
    upsert?: BookGenreUpsertWithWhereUniqueWithoutBookInput | BookGenreUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookGenreCreateManyBookInputEnvelope
    set?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    disconnect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    delete?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    update?: BookGenreUpdateWithWhereUniqueWithoutBookInput | BookGenreUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookGenreUpdateManyWithWhereWithoutBookInput | BookGenreUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookGenreScalarWhereInput | BookGenreScalarWhereInput[]
  }

  export type BookCopyUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookCopyCreateWithoutBookInput, BookCopyUncheckedCreateWithoutBookInput> | BookCopyCreateWithoutBookInput[] | BookCopyUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookCopyCreateOrConnectWithoutBookInput | BookCopyCreateOrConnectWithoutBookInput[]
    upsert?: BookCopyUpsertWithWhereUniqueWithoutBookInput | BookCopyUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookCopyCreateManyBookInputEnvelope
    set?: BookCopyWhereUniqueInput | BookCopyWhereUniqueInput[]
    disconnect?: BookCopyWhereUniqueInput | BookCopyWhereUniqueInput[]
    delete?: BookCopyWhereUniqueInput | BookCopyWhereUniqueInput[]
    connect?: BookCopyWhereUniqueInput | BookCopyWhereUniqueInput[]
    update?: BookCopyUpdateWithWhereUniqueWithoutBookInput | BookCopyUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookCopyUpdateManyWithWhereWithoutBookInput | BookCopyUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookCopyScalarWhereInput | BookCopyScalarWhereInput[]
  }

  export type InventoryLogUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<InventoryLogCreateWithoutBookInput, InventoryLogUncheckedCreateWithoutBookInput> | InventoryLogCreateWithoutBookInput[] | InventoryLogUncheckedCreateWithoutBookInput[]
    connectOrCreate?: InventoryLogCreateOrConnectWithoutBookInput | InventoryLogCreateOrConnectWithoutBookInput[]
    upsert?: InventoryLogUpsertWithWhereUniqueWithoutBookInput | InventoryLogUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: InventoryLogCreateManyBookInputEnvelope
    set?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    disconnect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    delete?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    connect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    update?: InventoryLogUpdateWithWhereUniqueWithoutBookInput | InventoryLogUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: InventoryLogUpdateManyWithWhereWithoutBookInput | InventoryLogUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: InventoryLogScalarWhereInput | InventoryLogScalarWhereInput[]
  }

  export type BookAuthorCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput> | BookAuthorCreateWithoutAuthorInput[] | BookAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutAuthorInput | BookAuthorCreateOrConnectWithoutAuthorInput[]
    createMany?: BookAuthorCreateManyAuthorInputEnvelope
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
  }

  export type BookAuthorUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput> | BookAuthorCreateWithoutAuthorInput[] | BookAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutAuthorInput | BookAuthorCreateOrConnectWithoutAuthorInput[]
    createMany?: BookAuthorCreateManyAuthorInputEnvelope
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
  }

  export type BookAuthorUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput> | BookAuthorCreateWithoutAuthorInput[] | BookAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutAuthorInput | BookAuthorCreateOrConnectWithoutAuthorInput[]
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutAuthorInput | BookAuthorUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookAuthorCreateManyAuthorInputEnvelope
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    update?: BookAuthorUpdateWithWhereUniqueWithoutAuthorInput | BookAuthorUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookAuthorUpdateManyWithWhereWithoutAuthorInput | BookAuthorUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
  }

  export type BookAuthorUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput> | BookAuthorCreateWithoutAuthorInput[] | BookAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookAuthorCreateOrConnectWithoutAuthorInput | BookAuthorCreateOrConnectWithoutAuthorInput[]
    upsert?: BookAuthorUpsertWithWhereUniqueWithoutAuthorInput | BookAuthorUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookAuthorCreateManyAuthorInputEnvelope
    set?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    disconnect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    delete?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    connect?: BookAuthorWhereUniqueInput | BookAuthorWhereUniqueInput[]
    update?: BookAuthorUpdateWithWhereUniqueWithoutAuthorInput | BookAuthorUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookAuthorUpdateManyWithWhereWithoutAuthorInput | BookAuthorUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutAuthorsInput = {
    create?: XOR<BookCreateWithoutAuthorsInput, BookUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: BookCreateOrConnectWithoutAuthorsInput
    connect?: BookWhereUniqueInput
  }

  export type AuthorCreateNestedOneWithoutBooksInput = {
    create?: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput
    connect?: AuthorWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutAuthorsNestedInput = {
    create?: XOR<BookCreateWithoutAuthorsInput, BookUncheckedCreateWithoutAuthorsInput>
    connectOrCreate?: BookCreateOrConnectWithoutAuthorsInput
    upsert?: BookUpsertWithoutAuthorsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutAuthorsInput, BookUpdateWithoutAuthorsInput>, BookUncheckedUpdateWithoutAuthorsInput>
  }

  export type AuthorUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput
    upsert?: AuthorUpsertWithoutBooksInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutBooksInput, AuthorUpdateWithoutBooksInput>, AuthorUncheckedUpdateWithoutBooksInput>
  }

  export type BookCreateNestedManyWithoutPublisherInput = {
    create?: XOR<BookCreateWithoutPublisherInput, BookUncheckedCreateWithoutPublisherInput> | BookCreateWithoutPublisherInput[] | BookUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: BookCreateOrConnectWithoutPublisherInput | BookCreateOrConnectWithoutPublisherInput[]
    createMany?: BookCreateManyPublisherInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutPublisherInput = {
    create?: XOR<BookCreateWithoutPublisherInput, BookUncheckedCreateWithoutPublisherInput> | BookCreateWithoutPublisherInput[] | BookUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: BookCreateOrConnectWithoutPublisherInput | BookCreateOrConnectWithoutPublisherInput[]
    createMany?: BookCreateManyPublisherInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<BookCreateWithoutPublisherInput, BookUncheckedCreateWithoutPublisherInput> | BookCreateWithoutPublisherInput[] | BookUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: BookCreateOrConnectWithoutPublisherInput | BookCreateOrConnectWithoutPublisherInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutPublisherInput | BookUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: BookCreateManyPublisherInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutPublisherInput | BookUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: BookUpdateManyWithWhereWithoutPublisherInput | BookUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<BookCreateWithoutPublisherInput, BookUncheckedCreateWithoutPublisherInput> | BookCreateWithoutPublisherInput[] | BookUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: BookCreateOrConnectWithoutPublisherInput | BookCreateOrConnectWithoutPublisherInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutPublisherInput | BookUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: BookCreateManyPublisherInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutPublisherInput | BookUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: BookUpdateManyWithWhereWithoutPublisherInput | BookUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type GenreCreateNestedOneWithoutChildrenInput = {
    create?: XOR<GenreCreateWithoutChildrenInput, GenreUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: GenreCreateOrConnectWithoutChildrenInput
    connect?: GenreWhereUniqueInput
  }

  export type GenreCreateNestedManyWithoutParentInput = {
    create?: XOR<GenreCreateWithoutParentInput, GenreUncheckedCreateWithoutParentInput> | GenreCreateWithoutParentInput[] | GenreUncheckedCreateWithoutParentInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutParentInput | GenreCreateOrConnectWithoutParentInput[]
    createMany?: GenreCreateManyParentInputEnvelope
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type BookGenreCreateNestedManyWithoutGenreInput = {
    create?: XOR<BookGenreCreateWithoutGenreInput, BookGenreUncheckedCreateWithoutGenreInput> | BookGenreCreateWithoutGenreInput[] | BookGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutGenreInput | BookGenreCreateOrConnectWithoutGenreInput[]
    createMany?: BookGenreCreateManyGenreInputEnvelope
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
  }

  export type GenreUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<GenreCreateWithoutParentInput, GenreUncheckedCreateWithoutParentInput> | GenreCreateWithoutParentInput[] | GenreUncheckedCreateWithoutParentInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutParentInput | GenreCreateOrConnectWithoutParentInput[]
    createMany?: GenreCreateManyParentInputEnvelope
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type BookGenreUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<BookGenreCreateWithoutGenreInput, BookGenreUncheckedCreateWithoutGenreInput> | BookGenreCreateWithoutGenreInput[] | BookGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutGenreInput | BookGenreCreateOrConnectWithoutGenreInput[]
    createMany?: BookGenreCreateManyGenreInputEnvelope
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
  }

  export type GenreUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<GenreCreateWithoutChildrenInput, GenreUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: GenreCreateOrConnectWithoutChildrenInput
    upsert?: GenreUpsertWithoutChildrenInput
    disconnect?: GenreWhereInput | boolean
    delete?: GenreWhereInput | boolean
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutChildrenInput, GenreUpdateWithoutChildrenInput>, GenreUncheckedUpdateWithoutChildrenInput>
  }

  export type GenreUpdateManyWithoutParentNestedInput = {
    create?: XOR<GenreCreateWithoutParentInput, GenreUncheckedCreateWithoutParentInput> | GenreCreateWithoutParentInput[] | GenreUncheckedCreateWithoutParentInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutParentInput | GenreCreateOrConnectWithoutParentInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutParentInput | GenreUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: GenreCreateManyParentInputEnvelope
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutParentInput | GenreUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutParentInput | GenreUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type BookGenreUpdateManyWithoutGenreNestedInput = {
    create?: XOR<BookGenreCreateWithoutGenreInput, BookGenreUncheckedCreateWithoutGenreInput> | BookGenreCreateWithoutGenreInput[] | BookGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutGenreInput | BookGenreCreateOrConnectWithoutGenreInput[]
    upsert?: BookGenreUpsertWithWhereUniqueWithoutGenreInput | BookGenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: BookGenreCreateManyGenreInputEnvelope
    set?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    disconnect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    delete?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    update?: BookGenreUpdateWithWhereUniqueWithoutGenreInput | BookGenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: BookGenreUpdateManyWithWhereWithoutGenreInput | BookGenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: BookGenreScalarWhereInput | BookGenreScalarWhereInput[]
  }

  export type GenreUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<GenreCreateWithoutParentInput, GenreUncheckedCreateWithoutParentInput> | GenreCreateWithoutParentInput[] | GenreUncheckedCreateWithoutParentInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutParentInput | GenreCreateOrConnectWithoutParentInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutParentInput | GenreUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: GenreCreateManyParentInputEnvelope
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutParentInput | GenreUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutParentInput | GenreUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type BookGenreUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<BookGenreCreateWithoutGenreInput, BookGenreUncheckedCreateWithoutGenreInput> | BookGenreCreateWithoutGenreInput[] | BookGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutGenreInput | BookGenreCreateOrConnectWithoutGenreInput[]
    upsert?: BookGenreUpsertWithWhereUniqueWithoutGenreInput | BookGenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: BookGenreCreateManyGenreInputEnvelope
    set?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    disconnect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    delete?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    update?: BookGenreUpdateWithWhereUniqueWithoutGenreInput | BookGenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: BookGenreUpdateManyWithWhereWithoutGenreInput | BookGenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: BookGenreScalarWhereInput | BookGenreScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutGenresInput = {
    create?: XOR<BookCreateWithoutGenresInput, BookUncheckedCreateWithoutGenresInput>
    connectOrCreate?: BookCreateOrConnectWithoutGenresInput
    connect?: BookWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutBooksInput = {
    create?: XOR<GenreCreateWithoutBooksInput, GenreUncheckedCreateWithoutBooksInput>
    connectOrCreate?: GenreCreateOrConnectWithoutBooksInput
    connect?: GenreWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutGenresNestedInput = {
    create?: XOR<BookCreateWithoutGenresInput, BookUncheckedCreateWithoutGenresInput>
    connectOrCreate?: BookCreateOrConnectWithoutGenresInput
    upsert?: BookUpsertWithoutGenresInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutGenresInput, BookUpdateWithoutGenresInput>, BookUncheckedUpdateWithoutGenresInput>
  }

  export type GenreUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<GenreCreateWithoutBooksInput, GenreUncheckedCreateWithoutBooksInput>
    connectOrCreate?: GenreCreateOrConnectWithoutBooksInput
    upsert?: GenreUpsertWithoutBooksInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutBooksInput, GenreUpdateWithoutBooksInput>, GenreUncheckedUpdateWithoutBooksInput>
  }

  export type BookCreateNestedOneWithoutCopiesInput = {
    create?: XOR<BookCreateWithoutCopiesInput, BookUncheckedCreateWithoutCopiesInput>
    connectOrCreate?: BookCreateOrConnectWithoutCopiesInput
    connect?: BookWhereUniqueInput
  }

  export type InventoryLogCreateNestedManyWithoutCopyInput = {
    create?: XOR<InventoryLogCreateWithoutCopyInput, InventoryLogUncheckedCreateWithoutCopyInput> | InventoryLogCreateWithoutCopyInput[] | InventoryLogUncheckedCreateWithoutCopyInput[]
    connectOrCreate?: InventoryLogCreateOrConnectWithoutCopyInput | InventoryLogCreateOrConnectWithoutCopyInput[]
    createMany?: InventoryLogCreateManyCopyInputEnvelope
    connect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
  }

  export type InventoryLogUncheckedCreateNestedManyWithoutCopyInput = {
    create?: XOR<InventoryLogCreateWithoutCopyInput, InventoryLogUncheckedCreateWithoutCopyInput> | InventoryLogCreateWithoutCopyInput[] | InventoryLogUncheckedCreateWithoutCopyInput[]
    connectOrCreate?: InventoryLogCreateOrConnectWithoutCopyInput | InventoryLogCreateOrConnectWithoutCopyInput[]
    createMany?: InventoryLogCreateManyCopyInputEnvelope
    connect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
  }

  export type EnumBookConditionFieldUpdateOperationsInput = {
    set?: $Enums.BookCondition
  }

  export type EnumCopyStatusFieldUpdateOperationsInput = {
    set?: $Enums.CopyStatus
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BookUpdateOneRequiredWithoutCopiesNestedInput = {
    create?: XOR<BookCreateWithoutCopiesInput, BookUncheckedCreateWithoutCopiesInput>
    connectOrCreate?: BookCreateOrConnectWithoutCopiesInput
    upsert?: BookUpsertWithoutCopiesInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutCopiesInput, BookUpdateWithoutCopiesInput>, BookUncheckedUpdateWithoutCopiesInput>
  }

  export type InventoryLogUpdateManyWithoutCopyNestedInput = {
    create?: XOR<InventoryLogCreateWithoutCopyInput, InventoryLogUncheckedCreateWithoutCopyInput> | InventoryLogCreateWithoutCopyInput[] | InventoryLogUncheckedCreateWithoutCopyInput[]
    connectOrCreate?: InventoryLogCreateOrConnectWithoutCopyInput | InventoryLogCreateOrConnectWithoutCopyInput[]
    upsert?: InventoryLogUpsertWithWhereUniqueWithoutCopyInput | InventoryLogUpsertWithWhereUniqueWithoutCopyInput[]
    createMany?: InventoryLogCreateManyCopyInputEnvelope
    set?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    disconnect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    delete?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    connect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    update?: InventoryLogUpdateWithWhereUniqueWithoutCopyInput | InventoryLogUpdateWithWhereUniqueWithoutCopyInput[]
    updateMany?: InventoryLogUpdateManyWithWhereWithoutCopyInput | InventoryLogUpdateManyWithWhereWithoutCopyInput[]
    deleteMany?: InventoryLogScalarWhereInput | InventoryLogScalarWhereInput[]
  }

  export type InventoryLogUncheckedUpdateManyWithoutCopyNestedInput = {
    create?: XOR<InventoryLogCreateWithoutCopyInput, InventoryLogUncheckedCreateWithoutCopyInput> | InventoryLogCreateWithoutCopyInput[] | InventoryLogUncheckedCreateWithoutCopyInput[]
    connectOrCreate?: InventoryLogCreateOrConnectWithoutCopyInput | InventoryLogCreateOrConnectWithoutCopyInput[]
    upsert?: InventoryLogUpsertWithWhereUniqueWithoutCopyInput | InventoryLogUpsertWithWhereUniqueWithoutCopyInput[]
    createMany?: InventoryLogCreateManyCopyInputEnvelope
    set?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    disconnect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    delete?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    connect?: InventoryLogWhereUniqueInput | InventoryLogWhereUniqueInput[]
    update?: InventoryLogUpdateWithWhereUniqueWithoutCopyInput | InventoryLogUpdateWithWhereUniqueWithoutCopyInput[]
    updateMany?: InventoryLogUpdateManyWithWhereWithoutCopyInput | InventoryLogUpdateManyWithWhereWithoutCopyInput[]
    deleteMany?: InventoryLogScalarWhereInput | InventoryLogScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutInventoryLogsInput = {
    create?: XOR<BookCreateWithoutInventoryLogsInput, BookUncheckedCreateWithoutInventoryLogsInput>
    connectOrCreate?: BookCreateOrConnectWithoutInventoryLogsInput
    connect?: BookWhereUniqueInput
  }

  export type BookCopyCreateNestedOneWithoutInventoryLogsInput = {
    create?: XOR<BookCopyCreateWithoutInventoryLogsInput, BookCopyUncheckedCreateWithoutInventoryLogsInput>
    connectOrCreate?: BookCopyCreateOrConnectWithoutInventoryLogsInput
    connect?: BookCopyWhereUniqueInput
  }

  export type EnumInventoryActionFieldUpdateOperationsInput = {
    set?: $Enums.InventoryAction
  }

  export type BookUpdateOneWithoutInventoryLogsNestedInput = {
    create?: XOR<BookCreateWithoutInventoryLogsInput, BookUncheckedCreateWithoutInventoryLogsInput>
    connectOrCreate?: BookCreateOrConnectWithoutInventoryLogsInput
    upsert?: BookUpsertWithoutInventoryLogsInput
    disconnect?: BookWhereInput | boolean
    delete?: BookWhereInput | boolean
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutInventoryLogsInput, BookUpdateWithoutInventoryLogsInput>, BookUncheckedUpdateWithoutInventoryLogsInput>
  }

  export type BookCopyUpdateOneWithoutInventoryLogsNestedInput = {
    create?: XOR<BookCopyCreateWithoutInventoryLogsInput, BookCopyUncheckedCreateWithoutInventoryLogsInput>
    connectOrCreate?: BookCopyCreateOrConnectWithoutInventoryLogsInput
    upsert?: BookCopyUpsertWithoutInventoryLogsInput
    disconnect?: BookCopyWhereInput | boolean
    delete?: BookCopyWhereInput | boolean
    connect?: BookCopyWhereUniqueInput
    update?: XOR<XOR<BookCopyUpdateToOneWithWhereWithoutInventoryLogsInput, BookCopyUpdateWithoutInventoryLogsInput>, BookCopyUncheckedUpdateWithoutInventoryLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumActionFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionFilter<$PrismaModel> | $Enums.Action
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionWithAggregatesFilter<$PrismaModel> | $Enums.Action
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionFilter<$PrismaModel>
    _max?: NestedEnumActionFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumAgeCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeCategory | EnumAgeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AgeCategory[] | ListEnumAgeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeCategory[] | ListEnumAgeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeCategoryFilter<$PrismaModel> | $Enums.AgeCategory
  }

  export type NestedEnumCoverTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CoverType | EnumCoverTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CoverType[] | ListEnumCoverTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoverType[] | ListEnumCoverTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCoverTypeFilter<$PrismaModel> | $Enums.CoverType
  }

  export type NestedEnumAgeCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgeCategory | EnumAgeCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AgeCategory[] | ListEnumAgeCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgeCategory[] | ListEnumAgeCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAgeCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AgeCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgeCategoryFilter<$PrismaModel>
    _max?: NestedEnumAgeCategoryFilter<$PrismaModel>
  }

  export type NestedEnumCoverTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoverType | EnumCoverTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CoverType[] | ListEnumCoverTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoverType[] | ListEnumCoverTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCoverTypeWithAggregatesFilter<$PrismaModel> | $Enums.CoverType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoverTypeFilter<$PrismaModel>
    _max?: NestedEnumCoverTypeFilter<$PrismaModel>
  }

  export type NestedEnumBookConditionFilter<$PrismaModel = never> = {
    equals?: $Enums.BookCondition | EnumBookConditionFieldRefInput<$PrismaModel>
    in?: $Enums.BookCondition[] | ListEnumBookConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookCondition[] | ListEnumBookConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumBookConditionFilter<$PrismaModel> | $Enums.BookCondition
  }

  export type NestedEnumCopyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CopyStatus | EnumCopyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CopyStatus[] | ListEnumCopyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CopyStatus[] | ListEnumCopyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCopyStatusFilter<$PrismaModel> | $Enums.CopyStatus
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumBookConditionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookCondition | EnumBookConditionFieldRefInput<$PrismaModel>
    in?: $Enums.BookCondition[] | ListEnumBookConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookCondition[] | ListEnumBookConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumBookConditionWithAggregatesFilter<$PrismaModel> | $Enums.BookCondition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookConditionFilter<$PrismaModel>
    _max?: NestedEnumBookConditionFilter<$PrismaModel>
  }

  export type NestedEnumCopyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CopyStatus | EnumCopyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CopyStatus[] | ListEnumCopyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CopyStatus[] | ListEnumCopyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCopyStatusWithAggregatesFilter<$PrismaModel> | $Enums.CopyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCopyStatusFilter<$PrismaModel>
    _max?: NestedEnumCopyStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumInventoryActionFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryAction | EnumInventoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryAction[] | ListEnumInventoryActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryAction[] | ListEnumInventoryActionFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryActionFilter<$PrismaModel> | $Enums.InventoryAction
  }

  export type NestedEnumInventoryActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InventoryAction | EnumInventoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.InventoryAction[] | ListEnumInventoryActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.InventoryAction[] | ListEnumInventoryActionFieldRefInput<$PrismaModel>
    not?: NestedEnumInventoryActionWithAggregatesFilter<$PrismaModel> | $Enums.InventoryAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInventoryActionFilter<$PrismaModel>
    _max?: NestedEnumInventoryActionFilter<$PrismaModel>
  }

  export type UserCreateWithoutAuditLogInput = {
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    avatar?: string | null
    isActive?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    chatId?: string | null
    Session?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogInput = {
    id?: number
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    avatar?: string | null
    isActive?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    chatId?: string | null
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogInput, UserUncheckedCreateWithoutAuditLogInput>
  }

  export type UserUpsertWithoutAuditLogInput = {
    update: XOR<UserUpdateWithoutAuditLogInput, UserUncheckedUpdateWithoutAuditLogInput>
    create: XOR<UserCreateWithoutAuditLogInput, UserUncheckedCreateWithoutAuditLogInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogInput, UserUncheckedUpdateWithoutAuditLogInput>
  }

  export type UserUpdateWithoutAuditLogInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionInput = {
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    avatar?: string | null
    isActive?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    chatId?: string | null
    AuditLog?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: number
    phone?: string | null
    password: string
    firstName: string
    lastName: string
    avatar?: string | null
    isActive?: boolean
    isVerified?: boolean
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    chatId?: string | null
    AuditLog?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    AuditLog?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    AuditLog?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuditLogCreateWithoutUserInput = {
    id: string
    action: $Enums.Action
    resource: string
    resourceId?: string | null
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id: string
    action: $Enums.Action
    resource: string
    resourceId?: string | null
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    refreshToken: string
    deviceInfo?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    refreshToken: string
    deviceInfo?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: IntNullableFilter<"AuditLog"> | number | null
    action?: EnumActionFilter<"AuditLog"> | $Enums.Action
    resource?: StringFilter<"AuditLog"> | string
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    oldValue?: JsonNullableFilter<"AuditLog">
    newValue?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    refreshToken?: StringFilter<"Session"> | string
    deviceInfo?: StringNullableFilter<"Session"> | string | null
    ipAddress?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type PublisherCreateWithoutBooksInput = {
    id?: string
    name: string
    country?: string | null
    website?: string | null
    createdAt?: Date | string
  }

  export type PublisherUncheckedCreateWithoutBooksInput = {
    id?: string
    name: string
    country?: string | null
    website?: string | null
    createdAt?: Date | string
  }

  export type PublisherCreateOrConnectWithoutBooksInput = {
    where: PublisherWhereUniqueInput
    create: XOR<PublisherCreateWithoutBooksInput, PublisherUncheckedCreateWithoutBooksInput>
  }

  export type BookAuthorCreateWithoutBookInput = {
    authorOrder?: number
    author: AuthorCreateNestedOneWithoutBooksInput
  }

  export type BookAuthorUncheckedCreateWithoutBookInput = {
    authorId: string
    authorOrder?: number
  }

  export type BookAuthorCreateOrConnectWithoutBookInput = {
    where: BookAuthorWhereUniqueInput
    create: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput>
  }

  export type BookAuthorCreateManyBookInputEnvelope = {
    data: BookAuthorCreateManyBookInput | BookAuthorCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BookGenreCreateWithoutBookInput = {
    isPrimary?: boolean
    genre: GenreCreateNestedOneWithoutBooksInput
  }

  export type BookGenreUncheckedCreateWithoutBookInput = {
    genreId: string
    isPrimary?: boolean
  }

  export type BookGenreCreateOrConnectWithoutBookInput = {
    where: BookGenreWhereUniqueInput
    create: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput>
  }

  export type BookGenreCreateManyBookInputEnvelope = {
    data: BookGenreCreateManyBookInput | BookGenreCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BookCopyCreateWithoutBookInput = {
    id?: string
    branchId: string
    copyNumber: number
    barcode: string
    qrCode?: string | null
    qrCodeUrl?: string | null
    condition?: $Enums.BookCondition
    status?: $Enums.CopyStatus
    statusChangedAt?: Date | string | null
    statusChangedBy?: string | null
    statusReason?: string | null
    locationRoom?: string | null
    locationShelf?: string | null
    locationRow?: number | null
    locationSide?: string | null
    locationPosition?: number | null
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryLogs?: InventoryLogCreateNestedManyWithoutCopyInput
  }

  export type BookCopyUncheckedCreateWithoutBookInput = {
    id?: string
    branchId: string
    copyNumber: number
    barcode: string
    qrCode?: string | null
    qrCodeUrl?: string | null
    condition?: $Enums.BookCondition
    status?: $Enums.CopyStatus
    statusChangedAt?: Date | string | null
    statusChangedBy?: string | null
    statusReason?: string | null
    locationRoom?: string | null
    locationShelf?: string | null
    locationRow?: number | null
    locationSide?: string | null
    locationPosition?: number | null
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryLogs?: InventoryLogUncheckedCreateNestedManyWithoutCopyInput
  }

  export type BookCopyCreateOrConnectWithoutBookInput = {
    where: BookCopyWhereUniqueInput
    create: XOR<BookCopyCreateWithoutBookInput, BookCopyUncheckedCreateWithoutBookInput>
  }

  export type BookCopyCreateManyBookInputEnvelope = {
    data: BookCopyCreateManyBookInput | BookCopyCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type InventoryLogCreateWithoutBookInput = {
    id?: string
    branchId?: string | null
    action: $Enums.InventoryAction
    oldStatus?: string | null
    newStatus?: string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: number | null
    reason?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy: string
    performedAt?: Date | string
    copy?: BookCopyCreateNestedOneWithoutInventoryLogsInput
  }

  export type InventoryLogUncheckedCreateWithoutBookInput = {
    id?: string
    copyId?: string | null
    branchId?: string | null
    action: $Enums.InventoryAction
    oldStatus?: string | null
    newStatus?: string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: number | null
    reason?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy: string
    performedAt?: Date | string
  }

  export type InventoryLogCreateOrConnectWithoutBookInput = {
    where: InventoryLogWhereUniqueInput
    create: XOR<InventoryLogCreateWithoutBookInput, InventoryLogUncheckedCreateWithoutBookInput>
  }

  export type InventoryLogCreateManyBookInputEnvelope = {
    data: InventoryLogCreateManyBookInput | InventoryLogCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type PublisherUpsertWithoutBooksInput = {
    update: XOR<PublisherUpdateWithoutBooksInput, PublisherUncheckedUpdateWithoutBooksInput>
    create: XOR<PublisherCreateWithoutBooksInput, PublisherUncheckedCreateWithoutBooksInput>
    where?: PublisherWhereInput
  }

  export type PublisherUpdateToOneWithWhereWithoutBooksInput = {
    where?: PublisherWhereInput
    data: XOR<PublisherUpdateWithoutBooksInput, PublisherUncheckedUpdateWithoutBooksInput>
  }

  export type PublisherUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookAuthorUpsertWithWhereUniqueWithoutBookInput = {
    where: BookAuthorWhereUniqueInput
    update: XOR<BookAuthorUpdateWithoutBookInput, BookAuthorUncheckedUpdateWithoutBookInput>
    create: XOR<BookAuthorCreateWithoutBookInput, BookAuthorUncheckedCreateWithoutBookInput>
  }

  export type BookAuthorUpdateWithWhereUniqueWithoutBookInput = {
    where: BookAuthorWhereUniqueInput
    data: XOR<BookAuthorUpdateWithoutBookInput, BookAuthorUncheckedUpdateWithoutBookInput>
  }

  export type BookAuthorUpdateManyWithWhereWithoutBookInput = {
    where: BookAuthorScalarWhereInput
    data: XOR<BookAuthorUpdateManyMutationInput, BookAuthorUncheckedUpdateManyWithoutBookInput>
  }

  export type BookAuthorScalarWhereInput = {
    AND?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
    OR?: BookAuthorScalarWhereInput[]
    NOT?: BookAuthorScalarWhereInput | BookAuthorScalarWhereInput[]
    bookId?: StringFilter<"BookAuthor"> | string
    authorId?: StringFilter<"BookAuthor"> | string
    authorOrder?: IntFilter<"BookAuthor"> | number
  }

  export type BookGenreUpsertWithWhereUniqueWithoutBookInput = {
    where: BookGenreWhereUniqueInput
    update: XOR<BookGenreUpdateWithoutBookInput, BookGenreUncheckedUpdateWithoutBookInput>
    create: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput>
  }

  export type BookGenreUpdateWithWhereUniqueWithoutBookInput = {
    where: BookGenreWhereUniqueInput
    data: XOR<BookGenreUpdateWithoutBookInput, BookGenreUncheckedUpdateWithoutBookInput>
  }

  export type BookGenreUpdateManyWithWhereWithoutBookInput = {
    where: BookGenreScalarWhereInput
    data: XOR<BookGenreUpdateManyMutationInput, BookGenreUncheckedUpdateManyWithoutBookInput>
  }

  export type BookGenreScalarWhereInput = {
    AND?: BookGenreScalarWhereInput | BookGenreScalarWhereInput[]
    OR?: BookGenreScalarWhereInput[]
    NOT?: BookGenreScalarWhereInput | BookGenreScalarWhereInput[]
    bookId?: StringFilter<"BookGenre"> | string
    genreId?: StringFilter<"BookGenre"> | string
    isPrimary?: BoolFilter<"BookGenre"> | boolean
  }

  export type BookCopyUpsertWithWhereUniqueWithoutBookInput = {
    where: BookCopyWhereUniqueInput
    update: XOR<BookCopyUpdateWithoutBookInput, BookCopyUncheckedUpdateWithoutBookInput>
    create: XOR<BookCopyCreateWithoutBookInput, BookCopyUncheckedCreateWithoutBookInput>
  }

  export type BookCopyUpdateWithWhereUniqueWithoutBookInput = {
    where: BookCopyWhereUniqueInput
    data: XOR<BookCopyUpdateWithoutBookInput, BookCopyUncheckedUpdateWithoutBookInput>
  }

  export type BookCopyUpdateManyWithWhereWithoutBookInput = {
    where: BookCopyScalarWhereInput
    data: XOR<BookCopyUpdateManyMutationInput, BookCopyUncheckedUpdateManyWithoutBookInput>
  }

  export type BookCopyScalarWhereInput = {
    AND?: BookCopyScalarWhereInput | BookCopyScalarWhereInput[]
    OR?: BookCopyScalarWhereInput[]
    NOT?: BookCopyScalarWhereInput | BookCopyScalarWhereInput[]
    id?: StringFilter<"BookCopy"> | string
    bookId?: StringFilter<"BookCopy"> | string
    branchId?: StringFilter<"BookCopy"> | string
    copyNumber?: IntFilter<"BookCopy"> | number
    barcode?: StringFilter<"BookCopy"> | string
    qrCode?: StringNullableFilter<"BookCopy"> | string | null
    qrCodeUrl?: StringNullableFilter<"BookCopy"> | string | null
    condition?: EnumBookConditionFilter<"BookCopy"> | $Enums.BookCondition
    status?: EnumCopyStatusFilter<"BookCopy"> | $Enums.CopyStatus
    statusChangedAt?: DateTimeNullableFilter<"BookCopy"> | Date | string | null
    statusChangedBy?: StringNullableFilter<"BookCopy"> | string | null
    statusReason?: StringNullableFilter<"BookCopy"> | string | null
    locationRoom?: StringNullableFilter<"BookCopy"> | string | null
    locationShelf?: StringNullableFilter<"BookCopy"> | string | null
    locationRow?: IntNullableFilter<"BookCopy"> | number | null
    locationSide?: StringNullableFilter<"BookCopy"> | string | null
    locationPosition?: IntNullableFilter<"BookCopy"> | number | null
    purchaseDate?: DateTimeNullableFilter<"BookCopy"> | Date | string | null
    price?: DecimalNullableFilter<"BookCopy"> | Decimal | DecimalJsLike | number | string | null
    createdBy?: StringFilter<"BookCopy"> | string
    createdAt?: DateTimeFilter<"BookCopy"> | Date | string
    updatedAt?: DateTimeFilter<"BookCopy"> | Date | string
  }

  export type InventoryLogUpsertWithWhereUniqueWithoutBookInput = {
    where: InventoryLogWhereUniqueInput
    update: XOR<InventoryLogUpdateWithoutBookInput, InventoryLogUncheckedUpdateWithoutBookInput>
    create: XOR<InventoryLogCreateWithoutBookInput, InventoryLogUncheckedCreateWithoutBookInput>
  }

  export type InventoryLogUpdateWithWhereUniqueWithoutBookInput = {
    where: InventoryLogWhereUniqueInput
    data: XOR<InventoryLogUpdateWithoutBookInput, InventoryLogUncheckedUpdateWithoutBookInput>
  }

  export type InventoryLogUpdateManyWithWhereWithoutBookInput = {
    where: InventoryLogScalarWhereInput
    data: XOR<InventoryLogUpdateManyMutationInput, InventoryLogUncheckedUpdateManyWithoutBookInput>
  }

  export type InventoryLogScalarWhereInput = {
    AND?: InventoryLogScalarWhereInput | InventoryLogScalarWhereInput[]
    OR?: InventoryLogScalarWhereInput[]
    NOT?: InventoryLogScalarWhereInput | InventoryLogScalarWhereInput[]
    id?: StringFilter<"InventoryLog"> | string
    bookId?: StringNullableFilter<"InventoryLog"> | string | null
    copyId?: StringNullableFilter<"InventoryLog"> | string | null
    branchId?: StringNullableFilter<"InventoryLog"> | string | null
    action?: EnumInventoryActionFilter<"InventoryLog"> | $Enums.InventoryAction
    oldStatus?: StringNullableFilter<"InventoryLog"> | string | null
    newStatus?: StringNullableFilter<"InventoryLog"> | string | null
    oldLocation?: JsonNullableFilter<"InventoryLog">
    newLocation?: JsonNullableFilter<"InventoryLog">
    quantity?: IntNullableFilter<"InventoryLog"> | number | null
    reason?: StringNullableFilter<"InventoryLog"> | string | null
    notes?: StringNullableFilter<"InventoryLog"> | string | null
    metadata?: JsonNullableFilter<"InventoryLog">
    performedBy?: StringFilter<"InventoryLog"> | string
    performedAt?: DateTimeFilter<"InventoryLog"> | Date | string
  }

  export type BookAuthorCreateWithoutAuthorInput = {
    authorOrder?: number
    book: BookCreateNestedOneWithoutAuthorsInput
  }

  export type BookAuthorUncheckedCreateWithoutAuthorInput = {
    bookId: string
    authorOrder?: number
  }

  export type BookAuthorCreateOrConnectWithoutAuthorInput = {
    where: BookAuthorWhereUniqueInput
    create: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput>
  }

  export type BookAuthorCreateManyAuthorInputEnvelope = {
    data: BookAuthorCreateManyAuthorInput | BookAuthorCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type BookAuthorUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BookAuthorWhereUniqueInput
    update: XOR<BookAuthorUpdateWithoutAuthorInput, BookAuthorUncheckedUpdateWithoutAuthorInput>
    create: XOR<BookAuthorCreateWithoutAuthorInput, BookAuthorUncheckedCreateWithoutAuthorInput>
  }

  export type BookAuthorUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BookAuthorWhereUniqueInput
    data: XOR<BookAuthorUpdateWithoutAuthorInput, BookAuthorUncheckedUpdateWithoutAuthorInput>
  }

  export type BookAuthorUpdateManyWithWhereWithoutAuthorInput = {
    where: BookAuthorScalarWhereInput
    data: XOR<BookAuthorUpdateManyMutationInput, BookAuthorUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BookCreateWithoutAuthorsInput = {
    id?: string
    isbn10?: string | null
    isbn13: string
    titleUz: string
    titleRu?: string | null
    titleEn?: string | null
    publishYear: number
    languages?: BookCreatelanguagesInput | string[]
    pageCount?: number | null
    ageCategory?: $Enums.AgeCategory
    coverType?: $Enums.CoverType
    shortDescription?: string | null
    fullDescription?: string | null
    coverImageUrl?: string | null
    coverThumbnailUrl?: string | null
    weight?: number | null
    height?: number | null
    width?: number | null
    thickness?: number | null
    seriesName?: string | null
    seriesNumber?: number | null
    seriesTotal?: number | null
    ddcCode?: string | null
    udcCode?: string | null
    tags?: BookCreatetagsInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    publisher: PublisherCreateNestedOneWithoutBooksInput
    genres?: BookGenreCreateNestedManyWithoutBookInput
    copies?: BookCopyCreateNestedManyWithoutBookInput
    inventoryLogs?: InventoryLogCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutAuthorsInput = {
    id?: string
    isbn10?: string | null
    isbn13: string
    titleUz: string
    titleRu?: string | null
    titleEn?: string | null
    publisherId: string
    publishYear: number
    languages?: BookCreatelanguagesInput | string[]
    pageCount?: number | null
    ageCategory?: $Enums.AgeCategory
    coverType?: $Enums.CoverType
    shortDescription?: string | null
    fullDescription?: string | null
    coverImageUrl?: string | null
    coverThumbnailUrl?: string | null
    weight?: number | null
    height?: number | null
    width?: number | null
    thickness?: number | null
    seriesName?: string | null
    seriesNumber?: number | null
    seriesTotal?: number | null
    ddcCode?: string | null
    udcCode?: string | null
    tags?: BookCreatetagsInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    genres?: BookGenreUncheckedCreateNestedManyWithoutBookInput
    copies?: BookCopyUncheckedCreateNestedManyWithoutBookInput
    inventoryLogs?: InventoryLogUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutAuthorsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutAuthorsInput, BookUncheckedCreateWithoutAuthorsInput>
  }

  export type AuthorCreateWithoutBooksInput = {
    id?: string
    firstName: string
    lastName: string
    biography?: string | null
    birthDate?: Date | string | null
    nationality?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorUncheckedCreateWithoutBooksInput = {
    id?: string
    firstName: string
    lastName: string
    biography?: string | null
    birthDate?: Date | string | null
    nationality?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthorCreateOrConnectWithoutBooksInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
  }

  export type BookUpsertWithoutAuthorsInput = {
    update: XOR<BookUpdateWithoutAuthorsInput, BookUncheckedUpdateWithoutAuthorsInput>
    create: XOR<BookCreateWithoutAuthorsInput, BookUncheckedCreateWithoutAuthorsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutAuthorsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutAuthorsInput, BookUncheckedUpdateWithoutAuthorsInput>
  }

  export type BookUpdateWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isbn10?: NullableStringFieldUpdateOperationsInput | string | null
    isbn13?: StringFieldUpdateOperationsInput | string
    titleUz?: StringFieldUpdateOperationsInput | string
    titleRu?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: NullableStringFieldUpdateOperationsInput | string | null
    publishYear?: IntFieldUpdateOperationsInput | number
    languages?: BookUpdatelanguagesInput | string[]
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    coverType?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    thickness?: NullableIntFieldUpdateOperationsInput | number | null
    seriesName?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNumber?: NullableIntFieldUpdateOperationsInput | number | null
    seriesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    ddcCode?: NullableStringFieldUpdateOperationsInput | string | null
    udcCode?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BookUpdatetagsInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publisher?: PublisherUpdateOneRequiredWithoutBooksNestedInput
    genres?: BookGenreUpdateManyWithoutBookNestedInput
    copies?: BookCopyUpdateManyWithoutBookNestedInput
    inventoryLogs?: InventoryLogUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isbn10?: NullableStringFieldUpdateOperationsInput | string | null
    isbn13?: StringFieldUpdateOperationsInput | string
    titleUz?: StringFieldUpdateOperationsInput | string
    titleRu?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: NullableStringFieldUpdateOperationsInput | string | null
    publisherId?: StringFieldUpdateOperationsInput | string
    publishYear?: IntFieldUpdateOperationsInput | number
    languages?: BookUpdatelanguagesInput | string[]
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    coverType?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    thickness?: NullableIntFieldUpdateOperationsInput | number | null
    seriesName?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNumber?: NullableIntFieldUpdateOperationsInput | number | null
    seriesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    ddcCode?: NullableStringFieldUpdateOperationsInput | string | null
    udcCode?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BookUpdatetagsInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genres?: BookGenreUncheckedUpdateManyWithoutBookNestedInput
    copies?: BookCopyUncheckedUpdateManyWithoutBookNestedInput
    inventoryLogs?: InventoryLogUncheckedUpdateManyWithoutBookNestedInput
  }

  export type AuthorUpsertWithoutBooksInput = {
    update: XOR<AuthorUpdateWithoutBooksInput, AuthorUncheckedUpdateWithoutBooksInput>
    create: XOR<AuthorCreateWithoutBooksInput, AuthorUncheckedCreateWithoutBooksInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutBooksInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutBooksInput, AuthorUncheckedUpdateWithoutBooksInput>
  }

  export type AuthorUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateWithoutPublisherInput = {
    id?: string
    isbn10?: string | null
    isbn13: string
    titleUz: string
    titleRu?: string | null
    titleEn?: string | null
    publishYear: number
    languages?: BookCreatelanguagesInput | string[]
    pageCount?: number | null
    ageCategory?: $Enums.AgeCategory
    coverType?: $Enums.CoverType
    shortDescription?: string | null
    fullDescription?: string | null
    coverImageUrl?: string | null
    coverThumbnailUrl?: string | null
    weight?: number | null
    height?: number | null
    width?: number | null
    thickness?: number | null
    seriesName?: string | null
    seriesNumber?: number | null
    seriesTotal?: number | null
    ddcCode?: string | null
    udcCode?: string | null
    tags?: BookCreatetagsInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authors?: BookAuthorCreateNestedManyWithoutBookInput
    genres?: BookGenreCreateNestedManyWithoutBookInput
    copies?: BookCopyCreateNestedManyWithoutBookInput
    inventoryLogs?: InventoryLogCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutPublisherInput = {
    id?: string
    isbn10?: string | null
    isbn13: string
    titleUz: string
    titleRu?: string | null
    titleEn?: string | null
    publishYear: number
    languages?: BookCreatelanguagesInput | string[]
    pageCount?: number | null
    ageCategory?: $Enums.AgeCategory
    coverType?: $Enums.CoverType
    shortDescription?: string | null
    fullDescription?: string | null
    coverImageUrl?: string | null
    coverThumbnailUrl?: string | null
    weight?: number | null
    height?: number | null
    width?: number | null
    thickness?: number | null
    seriesName?: string | null
    seriesNumber?: number | null
    seriesTotal?: number | null
    ddcCode?: string | null
    udcCode?: string | null
    tags?: BookCreatetagsInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput
    genres?: BookGenreUncheckedCreateNestedManyWithoutBookInput
    copies?: BookCopyUncheckedCreateNestedManyWithoutBookInput
    inventoryLogs?: InventoryLogUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutPublisherInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutPublisherInput, BookUncheckedCreateWithoutPublisherInput>
  }

  export type BookCreateManyPublisherInputEnvelope = {
    data: BookCreateManyPublisherInput | BookCreateManyPublisherInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutPublisherInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutPublisherInput, BookUncheckedUpdateWithoutPublisherInput>
    create: XOR<BookCreateWithoutPublisherInput, BookUncheckedCreateWithoutPublisherInput>
  }

  export type BookUpdateWithWhereUniqueWithoutPublisherInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutPublisherInput, BookUncheckedUpdateWithoutPublisherInput>
  }

  export type BookUpdateManyWithWhereWithoutPublisherInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutPublisherInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: StringFilter<"Book"> | string
    isbn10?: StringNullableFilter<"Book"> | string | null
    isbn13?: StringFilter<"Book"> | string
    titleUz?: StringFilter<"Book"> | string
    titleRu?: StringNullableFilter<"Book"> | string | null
    titleEn?: StringNullableFilter<"Book"> | string | null
    publisherId?: StringFilter<"Book"> | string
    publishYear?: IntFilter<"Book"> | number
    languages?: StringNullableListFilter<"Book">
    pageCount?: IntNullableFilter<"Book"> | number | null
    ageCategory?: EnumAgeCategoryFilter<"Book"> | $Enums.AgeCategory
    coverType?: EnumCoverTypeFilter<"Book"> | $Enums.CoverType
    shortDescription?: StringNullableFilter<"Book"> | string | null
    fullDescription?: StringNullableFilter<"Book"> | string | null
    coverImageUrl?: StringNullableFilter<"Book"> | string | null
    coverThumbnailUrl?: StringNullableFilter<"Book"> | string | null
    weight?: IntNullableFilter<"Book"> | number | null
    height?: IntNullableFilter<"Book"> | number | null
    width?: IntNullableFilter<"Book"> | number | null
    thickness?: IntNullableFilter<"Book"> | number | null
    seriesName?: StringNullableFilter<"Book"> | string | null
    seriesNumber?: IntNullableFilter<"Book"> | number | null
    seriesTotal?: IntNullableFilter<"Book"> | number | null
    ddcCode?: StringNullableFilter<"Book"> | string | null
    udcCode?: StringNullableFilter<"Book"> | string | null
    tags?: StringNullableListFilter<"Book">
    createdBy?: StringFilter<"Book"> | string
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Book"> | Date | string | null
  }

  export type GenreCreateWithoutChildrenInput = {
    id?: string
    name: string
    description?: string | null
    parent?: GenreCreateNestedOneWithoutChildrenInput
    books?: BookGenreCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    description?: string | null
    parentId?: string | null
    books?: BookGenreUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreCreateOrConnectWithoutChildrenInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutChildrenInput, GenreUncheckedCreateWithoutChildrenInput>
  }

  export type GenreCreateWithoutParentInput = {
    id?: string
    name: string
    description?: string | null
    children?: GenreCreateNestedManyWithoutParentInput
    books?: BookGenreCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    description?: string | null
    children?: GenreUncheckedCreateNestedManyWithoutParentInput
    books?: BookGenreUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreCreateOrConnectWithoutParentInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutParentInput, GenreUncheckedCreateWithoutParentInput>
  }

  export type GenreCreateManyParentInputEnvelope = {
    data: GenreCreateManyParentInput | GenreCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type BookGenreCreateWithoutGenreInput = {
    isPrimary?: boolean
    book: BookCreateNestedOneWithoutGenresInput
  }

  export type BookGenreUncheckedCreateWithoutGenreInput = {
    bookId: string
    isPrimary?: boolean
  }

  export type BookGenreCreateOrConnectWithoutGenreInput = {
    where: BookGenreWhereUniqueInput
    create: XOR<BookGenreCreateWithoutGenreInput, BookGenreUncheckedCreateWithoutGenreInput>
  }

  export type BookGenreCreateManyGenreInputEnvelope = {
    data: BookGenreCreateManyGenreInput | BookGenreCreateManyGenreInput[]
    skipDuplicates?: boolean
  }

  export type GenreUpsertWithoutChildrenInput = {
    update: XOR<GenreUpdateWithoutChildrenInput, GenreUncheckedUpdateWithoutChildrenInput>
    create: XOR<GenreCreateWithoutChildrenInput, GenreUncheckedCreateWithoutChildrenInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutChildrenInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutChildrenInput, GenreUncheckedUpdateWithoutChildrenInput>
  }

  export type GenreUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: GenreUpdateOneWithoutChildrenNestedInput
    books?: BookGenreUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    books?: BookGenreUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreUpsertWithWhereUniqueWithoutParentInput = {
    where: GenreWhereUniqueInput
    update: XOR<GenreUpdateWithoutParentInput, GenreUncheckedUpdateWithoutParentInput>
    create: XOR<GenreCreateWithoutParentInput, GenreUncheckedCreateWithoutParentInput>
  }

  export type GenreUpdateWithWhereUniqueWithoutParentInput = {
    where: GenreWhereUniqueInput
    data: XOR<GenreUpdateWithoutParentInput, GenreUncheckedUpdateWithoutParentInput>
  }

  export type GenreUpdateManyWithWhereWithoutParentInput = {
    where: GenreScalarWhereInput
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyWithoutParentInput>
  }

  export type GenreScalarWhereInput = {
    AND?: GenreScalarWhereInput | GenreScalarWhereInput[]
    OR?: GenreScalarWhereInput[]
    NOT?: GenreScalarWhereInput | GenreScalarWhereInput[]
    id?: StringFilter<"Genre"> | string
    name?: StringFilter<"Genre"> | string
    description?: StringNullableFilter<"Genre"> | string | null
    parentId?: StringNullableFilter<"Genre"> | string | null
  }

  export type BookGenreUpsertWithWhereUniqueWithoutGenreInput = {
    where: BookGenreWhereUniqueInput
    update: XOR<BookGenreUpdateWithoutGenreInput, BookGenreUncheckedUpdateWithoutGenreInput>
    create: XOR<BookGenreCreateWithoutGenreInput, BookGenreUncheckedCreateWithoutGenreInput>
  }

  export type BookGenreUpdateWithWhereUniqueWithoutGenreInput = {
    where: BookGenreWhereUniqueInput
    data: XOR<BookGenreUpdateWithoutGenreInput, BookGenreUncheckedUpdateWithoutGenreInput>
  }

  export type BookGenreUpdateManyWithWhereWithoutGenreInput = {
    where: BookGenreScalarWhereInput
    data: XOR<BookGenreUpdateManyMutationInput, BookGenreUncheckedUpdateManyWithoutGenreInput>
  }

  export type BookCreateWithoutGenresInput = {
    id?: string
    isbn10?: string | null
    isbn13: string
    titleUz: string
    titleRu?: string | null
    titleEn?: string | null
    publishYear: number
    languages?: BookCreatelanguagesInput | string[]
    pageCount?: number | null
    ageCategory?: $Enums.AgeCategory
    coverType?: $Enums.CoverType
    shortDescription?: string | null
    fullDescription?: string | null
    coverImageUrl?: string | null
    coverThumbnailUrl?: string | null
    weight?: number | null
    height?: number | null
    width?: number | null
    thickness?: number | null
    seriesName?: string | null
    seriesNumber?: number | null
    seriesTotal?: number | null
    ddcCode?: string | null
    udcCode?: string | null
    tags?: BookCreatetagsInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    publisher: PublisherCreateNestedOneWithoutBooksInput
    authors?: BookAuthorCreateNestedManyWithoutBookInput
    copies?: BookCopyCreateNestedManyWithoutBookInput
    inventoryLogs?: InventoryLogCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutGenresInput = {
    id?: string
    isbn10?: string | null
    isbn13: string
    titleUz: string
    titleRu?: string | null
    titleEn?: string | null
    publisherId: string
    publishYear: number
    languages?: BookCreatelanguagesInput | string[]
    pageCount?: number | null
    ageCategory?: $Enums.AgeCategory
    coverType?: $Enums.CoverType
    shortDescription?: string | null
    fullDescription?: string | null
    coverImageUrl?: string | null
    coverThumbnailUrl?: string | null
    weight?: number | null
    height?: number | null
    width?: number | null
    thickness?: number | null
    seriesName?: string | null
    seriesNumber?: number | null
    seriesTotal?: number | null
    ddcCode?: string | null
    udcCode?: string | null
    tags?: BookCreatetagsInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput
    copies?: BookCopyUncheckedCreateNestedManyWithoutBookInput
    inventoryLogs?: InventoryLogUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutGenresInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutGenresInput, BookUncheckedCreateWithoutGenresInput>
  }

  export type GenreCreateWithoutBooksInput = {
    id?: string
    name: string
    description?: string | null
    parent?: GenreCreateNestedOneWithoutChildrenInput
    children?: GenreCreateNestedManyWithoutParentInput
  }

  export type GenreUncheckedCreateWithoutBooksInput = {
    id?: string
    name: string
    description?: string | null
    parentId?: string | null
    children?: GenreUncheckedCreateNestedManyWithoutParentInput
  }

  export type GenreCreateOrConnectWithoutBooksInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutBooksInput, GenreUncheckedCreateWithoutBooksInput>
  }

  export type BookUpsertWithoutGenresInput = {
    update: XOR<BookUpdateWithoutGenresInput, BookUncheckedUpdateWithoutGenresInput>
    create: XOR<BookCreateWithoutGenresInput, BookUncheckedCreateWithoutGenresInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutGenresInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutGenresInput, BookUncheckedUpdateWithoutGenresInput>
  }

  export type BookUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    isbn10?: NullableStringFieldUpdateOperationsInput | string | null
    isbn13?: StringFieldUpdateOperationsInput | string
    titleUz?: StringFieldUpdateOperationsInput | string
    titleRu?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: NullableStringFieldUpdateOperationsInput | string | null
    publishYear?: IntFieldUpdateOperationsInput | number
    languages?: BookUpdatelanguagesInput | string[]
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    coverType?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    thickness?: NullableIntFieldUpdateOperationsInput | number | null
    seriesName?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNumber?: NullableIntFieldUpdateOperationsInput | number | null
    seriesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    ddcCode?: NullableStringFieldUpdateOperationsInput | string | null
    udcCode?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BookUpdatetagsInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publisher?: PublisherUpdateOneRequiredWithoutBooksNestedInput
    authors?: BookAuthorUpdateManyWithoutBookNestedInput
    copies?: BookCopyUpdateManyWithoutBookNestedInput
    inventoryLogs?: InventoryLogUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    isbn10?: NullableStringFieldUpdateOperationsInput | string | null
    isbn13?: StringFieldUpdateOperationsInput | string
    titleUz?: StringFieldUpdateOperationsInput | string
    titleRu?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: NullableStringFieldUpdateOperationsInput | string | null
    publisherId?: StringFieldUpdateOperationsInput | string
    publishYear?: IntFieldUpdateOperationsInput | number
    languages?: BookUpdatelanguagesInput | string[]
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    coverType?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    thickness?: NullableIntFieldUpdateOperationsInput | number | null
    seriesName?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNumber?: NullableIntFieldUpdateOperationsInput | number | null
    seriesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    ddcCode?: NullableStringFieldUpdateOperationsInput | string | null
    udcCode?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BookUpdatetagsInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput
    copies?: BookCopyUncheckedUpdateManyWithoutBookNestedInput
    inventoryLogs?: InventoryLogUncheckedUpdateManyWithoutBookNestedInput
  }

  export type GenreUpsertWithoutBooksInput = {
    update: XOR<GenreUpdateWithoutBooksInput, GenreUncheckedUpdateWithoutBooksInput>
    create: XOR<GenreCreateWithoutBooksInput, GenreUncheckedCreateWithoutBooksInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutBooksInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutBooksInput, GenreUncheckedUpdateWithoutBooksInput>
  }

  export type GenreUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: GenreUpdateOneWithoutChildrenNestedInput
    children?: GenreUpdateManyWithoutParentNestedInput
  }

  export type GenreUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: GenreUncheckedUpdateManyWithoutParentNestedInput
  }

  export type BookCreateWithoutCopiesInput = {
    id?: string
    isbn10?: string | null
    isbn13: string
    titleUz: string
    titleRu?: string | null
    titleEn?: string | null
    publishYear: number
    languages?: BookCreatelanguagesInput | string[]
    pageCount?: number | null
    ageCategory?: $Enums.AgeCategory
    coverType?: $Enums.CoverType
    shortDescription?: string | null
    fullDescription?: string | null
    coverImageUrl?: string | null
    coverThumbnailUrl?: string | null
    weight?: number | null
    height?: number | null
    width?: number | null
    thickness?: number | null
    seriesName?: string | null
    seriesNumber?: number | null
    seriesTotal?: number | null
    ddcCode?: string | null
    udcCode?: string | null
    tags?: BookCreatetagsInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    publisher: PublisherCreateNestedOneWithoutBooksInput
    authors?: BookAuthorCreateNestedManyWithoutBookInput
    genres?: BookGenreCreateNestedManyWithoutBookInput
    inventoryLogs?: InventoryLogCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutCopiesInput = {
    id?: string
    isbn10?: string | null
    isbn13: string
    titleUz: string
    titleRu?: string | null
    titleEn?: string | null
    publisherId: string
    publishYear: number
    languages?: BookCreatelanguagesInput | string[]
    pageCount?: number | null
    ageCategory?: $Enums.AgeCategory
    coverType?: $Enums.CoverType
    shortDescription?: string | null
    fullDescription?: string | null
    coverImageUrl?: string | null
    coverThumbnailUrl?: string | null
    weight?: number | null
    height?: number | null
    width?: number | null
    thickness?: number | null
    seriesName?: string | null
    seriesNumber?: number | null
    seriesTotal?: number | null
    ddcCode?: string | null
    udcCode?: string | null
    tags?: BookCreatetagsInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput
    genres?: BookGenreUncheckedCreateNestedManyWithoutBookInput
    inventoryLogs?: InventoryLogUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutCopiesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutCopiesInput, BookUncheckedCreateWithoutCopiesInput>
  }

  export type InventoryLogCreateWithoutCopyInput = {
    id?: string
    branchId?: string | null
    action: $Enums.InventoryAction
    oldStatus?: string | null
    newStatus?: string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: number | null
    reason?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy: string
    performedAt?: Date | string
    book?: BookCreateNestedOneWithoutInventoryLogsInput
  }

  export type InventoryLogUncheckedCreateWithoutCopyInput = {
    id?: string
    bookId?: string | null
    branchId?: string | null
    action: $Enums.InventoryAction
    oldStatus?: string | null
    newStatus?: string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: number | null
    reason?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy: string
    performedAt?: Date | string
  }

  export type InventoryLogCreateOrConnectWithoutCopyInput = {
    where: InventoryLogWhereUniqueInput
    create: XOR<InventoryLogCreateWithoutCopyInput, InventoryLogUncheckedCreateWithoutCopyInput>
  }

  export type InventoryLogCreateManyCopyInputEnvelope = {
    data: InventoryLogCreateManyCopyInput | InventoryLogCreateManyCopyInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithoutCopiesInput = {
    update: XOR<BookUpdateWithoutCopiesInput, BookUncheckedUpdateWithoutCopiesInput>
    create: XOR<BookCreateWithoutCopiesInput, BookUncheckedCreateWithoutCopiesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutCopiesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutCopiesInput, BookUncheckedUpdateWithoutCopiesInput>
  }

  export type BookUpdateWithoutCopiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    isbn10?: NullableStringFieldUpdateOperationsInput | string | null
    isbn13?: StringFieldUpdateOperationsInput | string
    titleUz?: StringFieldUpdateOperationsInput | string
    titleRu?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: NullableStringFieldUpdateOperationsInput | string | null
    publishYear?: IntFieldUpdateOperationsInput | number
    languages?: BookUpdatelanguagesInput | string[]
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    coverType?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    thickness?: NullableIntFieldUpdateOperationsInput | number | null
    seriesName?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNumber?: NullableIntFieldUpdateOperationsInput | number | null
    seriesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    ddcCode?: NullableStringFieldUpdateOperationsInput | string | null
    udcCode?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BookUpdatetagsInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publisher?: PublisherUpdateOneRequiredWithoutBooksNestedInput
    authors?: BookAuthorUpdateManyWithoutBookNestedInput
    genres?: BookGenreUpdateManyWithoutBookNestedInput
    inventoryLogs?: InventoryLogUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutCopiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    isbn10?: NullableStringFieldUpdateOperationsInput | string | null
    isbn13?: StringFieldUpdateOperationsInput | string
    titleUz?: StringFieldUpdateOperationsInput | string
    titleRu?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: NullableStringFieldUpdateOperationsInput | string | null
    publisherId?: StringFieldUpdateOperationsInput | string
    publishYear?: IntFieldUpdateOperationsInput | number
    languages?: BookUpdatelanguagesInput | string[]
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    coverType?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    thickness?: NullableIntFieldUpdateOperationsInput | number | null
    seriesName?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNumber?: NullableIntFieldUpdateOperationsInput | number | null
    seriesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    ddcCode?: NullableStringFieldUpdateOperationsInput | string | null
    udcCode?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BookUpdatetagsInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput
    genres?: BookGenreUncheckedUpdateManyWithoutBookNestedInput
    inventoryLogs?: InventoryLogUncheckedUpdateManyWithoutBookNestedInput
  }

  export type InventoryLogUpsertWithWhereUniqueWithoutCopyInput = {
    where: InventoryLogWhereUniqueInput
    update: XOR<InventoryLogUpdateWithoutCopyInput, InventoryLogUncheckedUpdateWithoutCopyInput>
    create: XOR<InventoryLogCreateWithoutCopyInput, InventoryLogUncheckedCreateWithoutCopyInput>
  }

  export type InventoryLogUpdateWithWhereUniqueWithoutCopyInput = {
    where: InventoryLogWhereUniqueInput
    data: XOR<InventoryLogUpdateWithoutCopyInput, InventoryLogUncheckedUpdateWithoutCopyInput>
  }

  export type InventoryLogUpdateManyWithWhereWithoutCopyInput = {
    where: InventoryLogScalarWhereInput
    data: XOR<InventoryLogUpdateManyMutationInput, InventoryLogUncheckedUpdateManyWithoutCopyInput>
  }

  export type BookCreateWithoutInventoryLogsInput = {
    id?: string
    isbn10?: string | null
    isbn13: string
    titleUz: string
    titleRu?: string | null
    titleEn?: string | null
    publishYear: number
    languages?: BookCreatelanguagesInput | string[]
    pageCount?: number | null
    ageCategory?: $Enums.AgeCategory
    coverType?: $Enums.CoverType
    shortDescription?: string | null
    fullDescription?: string | null
    coverImageUrl?: string | null
    coverThumbnailUrl?: string | null
    weight?: number | null
    height?: number | null
    width?: number | null
    thickness?: number | null
    seriesName?: string | null
    seriesNumber?: number | null
    seriesTotal?: number | null
    ddcCode?: string | null
    udcCode?: string | null
    tags?: BookCreatetagsInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    publisher: PublisherCreateNestedOneWithoutBooksInput
    authors?: BookAuthorCreateNestedManyWithoutBookInput
    genres?: BookGenreCreateNestedManyWithoutBookInput
    copies?: BookCopyCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutInventoryLogsInput = {
    id?: string
    isbn10?: string | null
    isbn13: string
    titleUz: string
    titleRu?: string | null
    titleEn?: string | null
    publisherId: string
    publishYear: number
    languages?: BookCreatelanguagesInput | string[]
    pageCount?: number | null
    ageCategory?: $Enums.AgeCategory
    coverType?: $Enums.CoverType
    shortDescription?: string | null
    fullDescription?: string | null
    coverImageUrl?: string | null
    coverThumbnailUrl?: string | null
    weight?: number | null
    height?: number | null
    width?: number | null
    thickness?: number | null
    seriesName?: string | null
    seriesNumber?: number | null
    seriesTotal?: number | null
    ddcCode?: string | null
    udcCode?: string | null
    tags?: BookCreatetagsInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authors?: BookAuthorUncheckedCreateNestedManyWithoutBookInput
    genres?: BookGenreUncheckedCreateNestedManyWithoutBookInput
    copies?: BookCopyUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutInventoryLogsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutInventoryLogsInput, BookUncheckedCreateWithoutInventoryLogsInput>
  }

  export type BookCopyCreateWithoutInventoryLogsInput = {
    id?: string
    branchId: string
    copyNumber: number
    barcode: string
    qrCode?: string | null
    qrCodeUrl?: string | null
    condition?: $Enums.BookCondition
    status?: $Enums.CopyStatus
    statusChangedAt?: Date | string | null
    statusChangedBy?: string | null
    statusReason?: string | null
    locationRoom?: string | null
    locationShelf?: string | null
    locationRow?: number | null
    locationSide?: string | null
    locationPosition?: number | null
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    book: BookCreateNestedOneWithoutCopiesInput
  }

  export type BookCopyUncheckedCreateWithoutInventoryLogsInput = {
    id?: string
    bookId: string
    branchId: string
    copyNumber: number
    barcode: string
    qrCode?: string | null
    qrCodeUrl?: string | null
    condition?: $Enums.BookCondition
    status?: $Enums.CopyStatus
    statusChangedAt?: Date | string | null
    statusChangedBy?: string | null
    statusReason?: string | null
    locationRoom?: string | null
    locationShelf?: string | null
    locationRow?: number | null
    locationSide?: string | null
    locationPosition?: number | null
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookCopyCreateOrConnectWithoutInventoryLogsInput = {
    where: BookCopyWhereUniqueInput
    create: XOR<BookCopyCreateWithoutInventoryLogsInput, BookCopyUncheckedCreateWithoutInventoryLogsInput>
  }

  export type BookUpsertWithoutInventoryLogsInput = {
    update: XOR<BookUpdateWithoutInventoryLogsInput, BookUncheckedUpdateWithoutInventoryLogsInput>
    create: XOR<BookCreateWithoutInventoryLogsInput, BookUncheckedCreateWithoutInventoryLogsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutInventoryLogsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutInventoryLogsInput, BookUncheckedUpdateWithoutInventoryLogsInput>
  }

  export type BookUpdateWithoutInventoryLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isbn10?: NullableStringFieldUpdateOperationsInput | string | null
    isbn13?: StringFieldUpdateOperationsInput | string
    titleUz?: StringFieldUpdateOperationsInput | string
    titleRu?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: NullableStringFieldUpdateOperationsInput | string | null
    publishYear?: IntFieldUpdateOperationsInput | number
    languages?: BookUpdatelanguagesInput | string[]
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    coverType?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    thickness?: NullableIntFieldUpdateOperationsInput | number | null
    seriesName?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNumber?: NullableIntFieldUpdateOperationsInput | number | null
    seriesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    ddcCode?: NullableStringFieldUpdateOperationsInput | string | null
    udcCode?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BookUpdatetagsInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publisher?: PublisherUpdateOneRequiredWithoutBooksNestedInput
    authors?: BookAuthorUpdateManyWithoutBookNestedInput
    genres?: BookGenreUpdateManyWithoutBookNestedInput
    copies?: BookCopyUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutInventoryLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isbn10?: NullableStringFieldUpdateOperationsInput | string | null
    isbn13?: StringFieldUpdateOperationsInput | string
    titleUz?: StringFieldUpdateOperationsInput | string
    titleRu?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: NullableStringFieldUpdateOperationsInput | string | null
    publisherId?: StringFieldUpdateOperationsInput | string
    publishYear?: IntFieldUpdateOperationsInput | number
    languages?: BookUpdatelanguagesInput | string[]
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    coverType?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    thickness?: NullableIntFieldUpdateOperationsInput | number | null
    seriesName?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNumber?: NullableIntFieldUpdateOperationsInput | number | null
    seriesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    ddcCode?: NullableStringFieldUpdateOperationsInput | string | null
    udcCode?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BookUpdatetagsInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput
    genres?: BookGenreUncheckedUpdateManyWithoutBookNestedInput
    copies?: BookCopyUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCopyUpsertWithoutInventoryLogsInput = {
    update: XOR<BookCopyUpdateWithoutInventoryLogsInput, BookCopyUncheckedUpdateWithoutInventoryLogsInput>
    create: XOR<BookCopyCreateWithoutInventoryLogsInput, BookCopyUncheckedCreateWithoutInventoryLogsInput>
    where?: BookCopyWhereInput
  }

  export type BookCopyUpdateToOneWithWhereWithoutInventoryLogsInput = {
    where?: BookCopyWhereInput
    data: XOR<BookCopyUpdateWithoutInventoryLogsInput, BookCopyUncheckedUpdateWithoutInventoryLogsInput>
  }

  export type BookCopyUpdateWithoutInventoryLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    copyNumber?: IntFieldUpdateOperationsInput | number
    barcode?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumBookConditionFieldUpdateOperationsInput | $Enums.BookCondition
    status?: EnumCopyStatusFieldUpdateOperationsInput | $Enums.CopyStatus
    statusChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusChangedBy?: NullableStringFieldUpdateOperationsInput | string | null
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    locationRoom?: NullableStringFieldUpdateOperationsInput | string | null
    locationShelf?: NullableStringFieldUpdateOperationsInput | string | null
    locationRow?: NullableIntFieldUpdateOperationsInput | number | null
    locationSide?: NullableStringFieldUpdateOperationsInput | string | null
    locationPosition?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutCopiesNestedInput
  }

  export type BookCopyUncheckedUpdateWithoutInventoryLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    copyNumber?: IntFieldUpdateOperationsInput | number
    barcode?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumBookConditionFieldUpdateOperationsInput | $Enums.BookCondition
    status?: EnumCopyStatusFieldUpdateOperationsInput | $Enums.CopyStatus
    statusChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusChangedBy?: NullableStringFieldUpdateOperationsInput | string | null
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    locationRoom?: NullableStringFieldUpdateOperationsInput | string | null
    locationShelf?: NullableStringFieldUpdateOperationsInput | string | null
    locationRow?: NullableIntFieldUpdateOperationsInput | number | null
    locationSide?: NullableStringFieldUpdateOperationsInput | string | null
    locationPosition?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id: string
    action: $Enums.Action
    resource: string
    resourceId?: string | null
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    refreshToken: string
    deviceInfo?: string | null
    ipAddress?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookAuthorCreateManyBookInput = {
    authorId: string
    authorOrder?: number
  }

  export type BookGenreCreateManyBookInput = {
    genreId: string
    isPrimary?: boolean
  }

  export type BookCopyCreateManyBookInput = {
    id?: string
    branchId: string
    copyNumber: number
    barcode: string
    qrCode?: string | null
    qrCodeUrl?: string | null
    condition?: $Enums.BookCondition
    status?: $Enums.CopyStatus
    statusChangedAt?: Date | string | null
    statusChangedBy?: string | null
    statusReason?: string | null
    locationRoom?: string | null
    locationShelf?: string | null
    locationRow?: number | null
    locationSide?: string | null
    locationPosition?: number | null
    purchaseDate?: Date | string | null
    price?: Decimal | DecimalJsLike | number | string | null
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryLogCreateManyBookInput = {
    id?: string
    copyId?: string | null
    branchId?: string | null
    action: $Enums.InventoryAction
    oldStatus?: string | null
    newStatus?: string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: number | null
    reason?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy: string
    performedAt?: Date | string
  }

  export type BookAuthorUpdateWithoutBookInput = {
    authorOrder?: IntFieldUpdateOperationsInput | number
    author?: AuthorUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookAuthorUncheckedUpdateWithoutBookInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    authorOrder?: IntFieldUpdateOperationsInput | number
  }

  export type BookAuthorUncheckedUpdateManyWithoutBookInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    authorOrder?: IntFieldUpdateOperationsInput | number
  }

  export type BookGenreUpdateWithoutBookInput = {
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    genre?: GenreUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookGenreUncheckedUpdateWithoutBookInput = {
    genreId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookGenreUncheckedUpdateManyWithoutBookInput = {
    genreId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookCopyUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    copyNumber?: IntFieldUpdateOperationsInput | number
    barcode?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumBookConditionFieldUpdateOperationsInput | $Enums.BookCondition
    status?: EnumCopyStatusFieldUpdateOperationsInput | $Enums.CopyStatus
    statusChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusChangedBy?: NullableStringFieldUpdateOperationsInput | string | null
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    locationRoom?: NullableStringFieldUpdateOperationsInput | string | null
    locationShelf?: NullableStringFieldUpdateOperationsInput | string | null
    locationRow?: NullableIntFieldUpdateOperationsInput | number | null
    locationSide?: NullableStringFieldUpdateOperationsInput | string | null
    locationPosition?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryLogs?: InventoryLogUpdateManyWithoutCopyNestedInput
  }

  export type BookCopyUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    copyNumber?: IntFieldUpdateOperationsInput | number
    barcode?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumBookConditionFieldUpdateOperationsInput | $Enums.BookCondition
    status?: EnumCopyStatusFieldUpdateOperationsInput | $Enums.CopyStatus
    statusChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusChangedBy?: NullableStringFieldUpdateOperationsInput | string | null
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    locationRoom?: NullableStringFieldUpdateOperationsInput | string | null
    locationShelf?: NullableStringFieldUpdateOperationsInput | string | null
    locationRow?: NullableIntFieldUpdateOperationsInput | number | null
    locationSide?: NullableStringFieldUpdateOperationsInput | string | null
    locationPosition?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryLogs?: InventoryLogUncheckedUpdateManyWithoutCopyNestedInput
  }

  export type BookCopyUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    copyNumber?: IntFieldUpdateOperationsInput | number
    barcode?: StringFieldUpdateOperationsInput | string
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumBookConditionFieldUpdateOperationsInput | $Enums.BookCondition
    status?: EnumCopyStatusFieldUpdateOperationsInput | $Enums.CopyStatus
    statusChangedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusChangedBy?: NullableStringFieldUpdateOperationsInput | string | null
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    locationRoom?: NullableStringFieldUpdateOperationsInput | string | null
    locationShelf?: NullableStringFieldUpdateOperationsInput | string | null
    locationRow?: NullableIntFieldUpdateOperationsInput | number | null
    locationSide?: NullableStringFieldUpdateOperationsInput | string | null
    locationPosition?: NullableIntFieldUpdateOperationsInput | number | null
    purchaseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLogUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null
    newStatus?: NullableStringFieldUpdateOperationsInput | string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    copy?: BookCopyUpdateOneWithoutInventoryLogsNestedInput
  }

  export type InventoryLogUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    copyId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null
    newStatus?: NullableStringFieldUpdateOperationsInput | string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLogUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    copyId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null
    newStatus?: NullableStringFieldUpdateOperationsInput | string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookAuthorCreateManyAuthorInput = {
    bookId: string
    authorOrder?: number
  }

  export type BookAuthorUpdateWithoutAuthorInput = {
    authorOrder?: IntFieldUpdateOperationsInput | number
    book?: BookUpdateOneRequiredWithoutAuthorsNestedInput
  }

  export type BookAuthorUncheckedUpdateWithoutAuthorInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    authorOrder?: IntFieldUpdateOperationsInput | number
  }

  export type BookAuthorUncheckedUpdateManyWithoutAuthorInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    authorOrder?: IntFieldUpdateOperationsInput | number
  }

  export type BookCreateManyPublisherInput = {
    id?: string
    isbn10?: string | null
    isbn13: string
    titleUz: string
    titleRu?: string | null
    titleEn?: string | null
    publishYear: number
    languages?: BookCreatelanguagesInput | string[]
    pageCount?: number | null
    ageCategory?: $Enums.AgeCategory
    coverType?: $Enums.CoverType
    shortDescription?: string | null
    fullDescription?: string | null
    coverImageUrl?: string | null
    coverThumbnailUrl?: string | null
    weight?: number | null
    height?: number | null
    width?: number | null
    thickness?: number | null
    seriesName?: string | null
    seriesNumber?: number | null
    seriesTotal?: number | null
    ddcCode?: string | null
    udcCode?: string | null
    tags?: BookCreatetagsInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BookUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    isbn10?: NullableStringFieldUpdateOperationsInput | string | null
    isbn13?: StringFieldUpdateOperationsInput | string
    titleUz?: StringFieldUpdateOperationsInput | string
    titleRu?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: NullableStringFieldUpdateOperationsInput | string | null
    publishYear?: IntFieldUpdateOperationsInput | number
    languages?: BookUpdatelanguagesInput | string[]
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    coverType?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    thickness?: NullableIntFieldUpdateOperationsInput | number | null
    seriesName?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNumber?: NullableIntFieldUpdateOperationsInput | number | null
    seriesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    ddcCode?: NullableStringFieldUpdateOperationsInput | string | null
    udcCode?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BookUpdatetagsInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authors?: BookAuthorUpdateManyWithoutBookNestedInput
    genres?: BookGenreUpdateManyWithoutBookNestedInput
    copies?: BookCopyUpdateManyWithoutBookNestedInput
    inventoryLogs?: InventoryLogUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    isbn10?: NullableStringFieldUpdateOperationsInput | string | null
    isbn13?: StringFieldUpdateOperationsInput | string
    titleUz?: StringFieldUpdateOperationsInput | string
    titleRu?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: NullableStringFieldUpdateOperationsInput | string | null
    publishYear?: IntFieldUpdateOperationsInput | number
    languages?: BookUpdatelanguagesInput | string[]
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    coverType?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    thickness?: NullableIntFieldUpdateOperationsInput | number | null
    seriesName?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNumber?: NullableIntFieldUpdateOperationsInput | number | null
    seriesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    ddcCode?: NullableStringFieldUpdateOperationsInput | string | null
    udcCode?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BookUpdatetagsInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authors?: BookAuthorUncheckedUpdateManyWithoutBookNestedInput
    genres?: BookGenreUncheckedUpdateManyWithoutBookNestedInput
    copies?: BookCopyUncheckedUpdateManyWithoutBookNestedInput
    inventoryLogs?: InventoryLogUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    isbn10?: NullableStringFieldUpdateOperationsInput | string | null
    isbn13?: StringFieldUpdateOperationsInput | string
    titleUz?: StringFieldUpdateOperationsInput | string
    titleRu?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: NullableStringFieldUpdateOperationsInput | string | null
    publishYear?: IntFieldUpdateOperationsInput | number
    languages?: BookUpdatelanguagesInput | string[]
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    ageCategory?: EnumAgeCategoryFieldUpdateOperationsInput | $Enums.AgeCategory
    coverType?: EnumCoverTypeFieldUpdateOperationsInput | $Enums.CoverType
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    fullDescription?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverThumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    thickness?: NullableIntFieldUpdateOperationsInput | number | null
    seriesName?: NullableStringFieldUpdateOperationsInput | string | null
    seriesNumber?: NullableIntFieldUpdateOperationsInput | number | null
    seriesTotal?: NullableIntFieldUpdateOperationsInput | number | null
    ddcCode?: NullableStringFieldUpdateOperationsInput | string | null
    udcCode?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: BookUpdatetagsInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GenreCreateManyParentInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type BookGenreCreateManyGenreInput = {
    bookId: string
    isPrimary?: boolean
  }

  export type GenreUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    children?: GenreUpdateManyWithoutParentNestedInput
    books?: BookGenreUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    children?: GenreUncheckedUpdateManyWithoutParentNestedInput
    books?: BookGenreUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookGenreUpdateWithoutGenreInput = {
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    book?: BookUpdateOneRequiredWithoutGenresNestedInput
  }

  export type BookGenreUncheckedUpdateWithoutGenreInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookGenreUncheckedUpdateManyWithoutGenreInput = {
    bookId?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InventoryLogCreateManyCopyInput = {
    id?: string
    bookId?: string | null
    branchId?: string | null
    action: $Enums.InventoryAction
    oldStatus?: string | null
    newStatus?: string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: number | null
    reason?: string | null
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy: string
    performedAt?: Date | string
  }

  export type InventoryLogUpdateWithoutCopyInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null
    newStatus?: NullableStringFieldUpdateOperationsInput | string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneWithoutInventoryLogsNestedInput
  }

  export type InventoryLogUncheckedUpdateWithoutCopyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null
    newStatus?: NullableStringFieldUpdateOperationsInput | string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryLogUncheckedUpdateManyWithoutCopyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: EnumInventoryActionFieldUpdateOperationsInput | $Enums.InventoryAction
    oldStatus?: NullableStringFieldUpdateOperationsInput | string | null
    newStatus?: NullableStringFieldUpdateOperationsInput | string | null
    oldLocation?: NullableJsonNullValueInput | InputJsonValue
    newLocation?: NullableJsonNullValueInput | InputJsonValue
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}