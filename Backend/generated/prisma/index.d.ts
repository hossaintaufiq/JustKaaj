
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Service_Provider
 * 
 */
export type Service_Provider = $Result.DefaultSelection<Prisma.$Service_ProviderPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model ProviderServices
 * 
 */
export type ProviderServices = $Result.DefaultSelection<Prisma.$ProviderServicesPayload>
/**
 * Model Service_Category
 * 
 */
export type Service_Category = $Result.DefaultSelection<Prisma.$Service_CategoryPayload>
/**
 * Model Parent_category
 * 
 */
export type Parent_category = $Result.DefaultSelection<Prisma.$Parent_categoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  USER: 'USER',
  SERVICE_PROVIDER: 'SERVICE_PROVIDER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const USER_STATUS: {
  ACTIVE: 'ACTIVE',
  BLOCKED: 'BLOCKED',
  DELETED: 'DELETED'
};

export type USER_STATUS = (typeof USER_STATUS)[keyof typeof USER_STATUS]


export const Provider_Status: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE'
};

export type Provider_Status = (typeof Provider_Status)[keyof typeof Provider_Status]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type USER_STATUS = $Enums.USER_STATUS

export const USER_STATUS: typeof $Enums.USER_STATUS

export type Provider_Status = $Enums.Provider_Status

export const Provider_Status: typeof $Enums.Provider_Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.address.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service_Provider`: Exposes CRUD operations for the **Service_Provider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Service_Providers
    * const service_Providers = await prisma.service_Provider.findMany()
    * ```
    */
  get service_Provider(): Prisma.Service_ProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerServices`: Exposes CRUD operations for the **ProviderServices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderServices
    * const providerServices = await prisma.providerServices.findMany()
    * ```
    */
  get providerServices(): Prisma.ProviderServicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service_Category`: Exposes CRUD operations for the **Service_Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Service_Categories
    * const service_Categories = await prisma.service_Category.findMany()
    * ```
    */
  get service_Category(): Prisma.Service_CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parent_category`: Exposes CRUD operations for the **Parent_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parent_categories
    * const parent_categories = await prisma.parent_category.findMany()
    * ```
    */
  get parent_category(): Prisma.Parent_categoryDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Address: 'Address',
    User: 'User',
    Admin: 'Admin',
    Service_Provider: 'Service_Provider',
    Service: 'Service',
    ProviderServices: 'ProviderServices',
    Service_Category: 'Service_Category',
    Parent_category: 'Parent_category'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "address" | "user" | "admin" | "service_Provider" | "service" | "providerServices" | "service_Category" | "parent_category"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
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
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Service_Provider: {
        payload: Prisma.$Service_ProviderPayload<ExtArgs>
        fields: Prisma.Service_ProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Service_ProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_ProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Service_ProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_ProviderPayload>
          }
          findFirst: {
            args: Prisma.Service_ProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_ProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Service_ProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_ProviderPayload>
          }
          findMany: {
            args: Prisma.Service_ProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_ProviderPayload>[]
          }
          create: {
            args: Prisma.Service_ProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_ProviderPayload>
          }
          createMany: {
            args: Prisma.Service_ProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Service_ProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_ProviderPayload>[]
          }
          delete: {
            args: Prisma.Service_ProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_ProviderPayload>
          }
          update: {
            args: Prisma.Service_ProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_ProviderPayload>
          }
          deleteMany: {
            args: Prisma.Service_ProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Service_ProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Service_ProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_ProviderPayload>[]
          }
          upsert: {
            args: Prisma.Service_ProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_ProviderPayload>
          }
          aggregate: {
            args: Prisma.Service_ProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService_Provider>
          }
          groupBy: {
            args: Prisma.Service_ProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<Service_ProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.Service_ProviderCountArgs<ExtArgs>
            result: $Utils.Optional<Service_ProviderCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      ProviderServices: {
        payload: Prisma.$ProviderServicesPayload<ExtArgs>
        fields: Prisma.ProviderServicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderServicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderServicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicesPayload>
          }
          findFirst: {
            args: Prisma.ProviderServicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderServicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicesPayload>
          }
          findMany: {
            args: Prisma.ProviderServicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicesPayload>[]
          }
          create: {
            args: Prisma.ProviderServicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicesPayload>
          }
          createMany: {
            args: Prisma.ProviderServicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderServicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicesPayload>[]
          }
          delete: {
            args: Prisma.ProviderServicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicesPayload>
          }
          update: {
            args: Prisma.ProviderServicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicesPayload>
          }
          deleteMany: {
            args: Prisma.ProviderServicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderServicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderServicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicesPayload>[]
          }
          upsert: {
            args: Prisma.ProviderServicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicesPayload>
          }
          aggregate: {
            args: Prisma.ProviderServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderServices>
          }
          groupBy: {
            args: Prisma.ProviderServicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderServicesCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderServicesCountAggregateOutputType> | number
          }
        }
      }
      Service_Category: {
        payload: Prisma.$Service_CategoryPayload<ExtArgs>
        fields: Prisma.Service_CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Service_CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Service_CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_CategoryPayload>
          }
          findFirst: {
            args: Prisma.Service_CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Service_CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_CategoryPayload>
          }
          findMany: {
            args: Prisma.Service_CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_CategoryPayload>[]
          }
          create: {
            args: Prisma.Service_CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_CategoryPayload>
          }
          createMany: {
            args: Prisma.Service_CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Service_CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_CategoryPayload>[]
          }
          delete: {
            args: Prisma.Service_CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_CategoryPayload>
          }
          update: {
            args: Prisma.Service_CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_CategoryPayload>
          }
          deleteMany: {
            args: Prisma.Service_CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Service_CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Service_CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_CategoryPayload>[]
          }
          upsert: {
            args: Prisma.Service_CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Service_CategoryPayload>
          }
          aggregate: {
            args: Prisma.Service_CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService_Category>
          }
          groupBy: {
            args: Prisma.Service_CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Service_CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.Service_CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<Service_CategoryCountAggregateOutputType> | number
          }
        }
      }
      Parent_category: {
        payload: Prisma.$Parent_categoryPayload<ExtArgs>
        fields: Prisma.Parent_categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Parent_categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Parent_categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Parent_categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Parent_categoryPayload>
          }
          findFirst: {
            args: Prisma.Parent_categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Parent_categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Parent_categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Parent_categoryPayload>
          }
          findMany: {
            args: Prisma.Parent_categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Parent_categoryPayload>[]
          }
          create: {
            args: Prisma.Parent_categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Parent_categoryPayload>
          }
          createMany: {
            args: Prisma.Parent_categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Parent_categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Parent_categoryPayload>[]
          }
          delete: {
            args: Prisma.Parent_categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Parent_categoryPayload>
          }
          update: {
            args: Prisma.Parent_categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Parent_categoryPayload>
          }
          deleteMany: {
            args: Prisma.Parent_categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Parent_categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Parent_categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Parent_categoryPayload>[]
          }
          upsert: {
            args: Prisma.Parent_categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Parent_categoryPayload>
          }
          aggregate: {
            args: Prisma.Parent_categoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParent_category>
          }
          groupBy: {
            args: Prisma.Parent_categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Parent_categoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.Parent_categoryCountArgs<ExtArgs>
            result: $Utils.Optional<Parent_categoryCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    address?: AddressOmit
    user?: UserOmit
    admin?: AdminOmit
    service_Provider?: Service_ProviderOmit
    service?: ServiceOmit
    providerServices?: ProviderServicesOmit
    service_Category?: Service_CategoryOmit
    parent_category?: Parent_categoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type Service_ProviderCountOutputType
   */

  export type Service_ProviderCountOutputType = {
    providerServices: number
  }

  export type Service_ProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providerServices?: boolean | Service_ProviderCountOutputTypeCountProviderServicesArgs
  }

  // Custom InputTypes
  /**
   * Service_ProviderCountOutputType without action
   */
  export type Service_ProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_ProviderCountOutputType
     */
    select?: Service_ProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Service_ProviderCountOutputType without action
   */
  export type Service_ProviderCountOutputTypeCountProviderServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderServicesWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    providerServices: number
    category: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providerServices?: boolean | ServiceCountOutputTypeCountProviderServicesArgs
    category?: boolean | ServiceCountOutputTypeCountCategoryArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountProviderServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderServicesWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Service_CategoryWhereInput
  }


  /**
   * Count Type Parent_categoryCountOutputType
   */

  export type Parent_categoryCountOutputType = {
    category: number
  }

  export type Parent_categoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Parent_categoryCountOutputTypeCountCategoryArgs
  }

  // Custom InputTypes
  /**
   * Parent_categoryCountOutputType without action
   */
  export type Parent_categoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent_categoryCountOutputType
     */
    select?: Parent_categoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Parent_categoryCountOutputType without action
   */
  export type Parent_categoryCountOutputTypeCountCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Service_CategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    postal_code: number | null
    latitude: number | null
    longitude: number | null
  }

  export type AddressSumAggregateOutputType = {
    postal_code: number | null
    latitude: number | null
    longitude: number | null
  }

  export type AddressMinAggregateOutputType = {
    address_id: string | null
    street_address: string | null
    city: string | null
    state: string | null
    postal_code: number | null
    latitude: number | null
    longitude: number | null
    user_id: string | null
  }

  export type AddressMaxAggregateOutputType = {
    address_id: string | null
    street_address: string | null
    city: string | null
    state: string | null
    postal_code: number | null
    latitude: number | null
    longitude: number | null
    user_id: string | null
  }

  export type AddressCountAggregateOutputType = {
    address_id: number
    street_address: number
    city: number
    state: number
    postal_code: number
    latitude: number
    longitude: number
    user_id: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    postal_code?: true
    latitude?: true
    longitude?: true
  }

  export type AddressSumAggregateInputType = {
    postal_code?: true
    latitude?: true
    longitude?: true
  }

  export type AddressMinAggregateInputType = {
    address_id?: true
    street_address?: true
    city?: true
    state?: true
    postal_code?: true
    latitude?: true
    longitude?: true
    user_id?: true
  }

  export type AddressMaxAggregateInputType = {
    address_id?: true
    street_address?: true
    city?: true
    state?: true
    postal_code?: true
    latitude?: true
    longitude?: true
    user_id?: true
  }

  export type AddressCountAggregateInputType = {
    address_id?: true
    street_address?: true
    city?: true
    state?: true
    postal_code?: true
    latitude?: true
    longitude?: true
    user_id?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    address_id: string
    street_address: string
    city: string
    state: string
    postal_code: number
    latitude: number
    longitude: number
    user_id: string
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address_id?: boolean
    street_address?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    latitude?: boolean
    longitude?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address_id?: boolean
    street_address?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    latitude?: boolean
    longitude?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address_id?: boolean
    street_address?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    latitude?: boolean
    longitude?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    address_id?: boolean
    street_address?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    latitude?: boolean
    longitude?: boolean
    user_id?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"address_id" | "street_address" | "city" | "state" | "postal_code" | "latitude" | "longitude" | "user_id", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      address_id: string
      street_address: string
      city: string
      state: string
      postal_code: number
      latitude: number
      longitude: number
      user_id: string
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `address_id`
     * const addressWithAddress_idOnly = await prisma.address.findMany({ select: { address_id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `address_id`
     * const addressWithAddress_idOnly = await prisma.address.createManyAndReturn({
     *   select: { address_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `address_id`
     * const addressWithAddress_idOnly = await prisma.address.updateManyAndReturn({
     *   select: { address_id: true },
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly address_id: FieldRef<"Address", 'String'>
    readonly street_address: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly postal_code: FieldRef<"Address", 'Int'>
    readonly latitude: FieldRef<"Address", 'Float'>
    readonly longitude: FieldRef<"Address", 'Float'>
    readonly user_id: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    user_id: string | null
    email: string | null
    password: string | null
    fullName: string | null
    phone: string | null
    role: $Enums.UserRole | null
    is_verified: boolean | null
    status: $Enums.USER_STATUS | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: string | null
    email: string | null
    password: string | null
    fullName: string | null
    phone: string | null
    role: $Enums.UserRole | null
    is_verified: boolean | null
    status: $Enums.USER_STATUS | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    email: number
    password: number
    fullName: number
    phone: number
    role: number
    is_verified: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    fullName?: true
    phone?: true
    role?: true
    is_verified?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    fullName?: true
    phone?: true
    role?: true
    is_verified?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    fullName?: true
    phone?: true
    role?: true
    is_verified?: true
    status?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: string
    email: string
    password: string
    fullName: string
    phone: string
    role: $Enums.UserRole
    is_verified: boolean
    status: $Enums.USER_STATUS
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    user_id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    is_verified?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    address?: boolean | User$addressArgs<ExtArgs>
    service_provider?: boolean | User$service_providerArgs<ExtArgs>
    Admin?: boolean | User$AdminArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    is_verified?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    is_verified?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    email?: boolean
    password?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    is_verified?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "email" | "password" | "fullName" | "phone" | "role" | "is_verified" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | User$addressArgs<ExtArgs>
    service_provider?: boolean | User$service_providerArgs<ExtArgs>
    Admin?: boolean | User$AdminArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs> | null
      service_provider: Prisma.$Service_ProviderPayload<ExtArgs> | null
      Admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      email: string
      password: string
      fullName: string
      phone: string
      role: $Enums.UserRole
      is_verified: boolean
      status: $Enums.USER_STATUS
      createdAt: Date
      updatedAt: Date
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
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
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
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
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
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
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
    address<T extends User$addressArgs<ExtArgs> = {}>(args?: Subset<T, User$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    service_provider<T extends User$service_providerArgs<ExtArgs> = {}>(args?: Subset<T, User$service_providerArgs<ExtArgs>>): Prisma__Service_ProviderClient<$Result.GetResult<Prisma.$Service_ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Admin<T extends User$AdminArgs<ExtArgs> = {}>(args?: Subset<T, User$AdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly user_id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly is_verified: FieldRef<"User", 'Boolean'>
    readonly status: FieldRef<"User", 'USER_STATUS'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.address
   */
  export type User$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * User.service_provider
   */
  export type User$service_providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Provider
     */
    select?: Service_ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Provider
     */
    omit?: Service_ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_ProviderInclude<ExtArgs> | null
    where?: Service_ProviderWhereInput
  }

  /**
   * User.Admin
   */
  export type User$AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
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
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    fullName: string | null
    is_deleted: boolean | null
    createdAt: Date | null
    updated: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    fullName: string | null
    is_deleted: boolean | null
    createdAt: Date | null
    updated: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    fullName: number
    is_deleted: number
    createdAt: number
    updated: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    is_deleted?: true
    createdAt?: true
    updated?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    is_deleted?: true
    createdAt?: true
    updated?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    is_deleted?: true
    createdAt?: true
    updated?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    email: string
    fullName: string
    is_deleted: boolean
    createdAt: Date
    updated: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    is_deleted?: boolean
    createdAt?: boolean
    updated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    is_deleted?: boolean
    createdAt?: boolean
    updated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    is_deleted?: boolean
    createdAt?: boolean
    updated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    fullName?: boolean
    is_deleted?: boolean
    createdAt?: boolean
    updated?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fullName" | "is_deleted" | "createdAt" | "updated", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      fullName: string
      is_deleted: boolean
      createdAt: Date
      updated: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly fullName: FieldRef<"Admin", 'String'>
    readonly is_deleted: FieldRef<"Admin", 'Boolean'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updated: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Service_Provider
   */

  export type AggregateService_Provider = {
    _count: Service_ProviderCountAggregateOutputType | null
    _avg: Service_ProviderAvgAggregateOutputType | null
    _sum: Service_ProviderSumAggregateOutputType | null
    _min: Service_ProviderMinAggregateOutputType | null
    _max: Service_ProviderMaxAggregateOutputType | null
  }

  export type Service_ProviderAvgAggregateOutputType = {
    business_license: number | null
    nid_number: number | null
    govt_id_or_tin: number | null
    postal_code: number | null
  }

  export type Service_ProviderSumAggregateOutputType = {
    business_license: number | null
    nid_number: number | null
    govt_id_or_tin: number | null
    postal_code: number | null
  }

  export type Service_ProviderMinAggregateOutputType = {
    id: string | null
    email: string | null
    fullName: string | null
    business_name: string | null
    business_license: number | null
    nid_number: number | null
    govt_id_or_tin: number | null
    facebook_profile: string | null
    website_link: string | null
    area_name: string | null
    postal_code: number | null
    category: string | null
    status: $Enums.Provider_Status | null
    is_apporved: boolean | null
    submitted_at: Date | null
  }

  export type Service_ProviderMaxAggregateOutputType = {
    id: string | null
    email: string | null
    fullName: string | null
    business_name: string | null
    business_license: number | null
    nid_number: number | null
    govt_id_or_tin: number | null
    facebook_profile: string | null
    website_link: string | null
    area_name: string | null
    postal_code: number | null
    category: string | null
    status: $Enums.Provider_Status | null
    is_apporved: boolean | null
    submitted_at: Date | null
  }

  export type Service_ProviderCountAggregateOutputType = {
    id: number
    email: number
    fullName: number
    business_name: number
    business_license: number
    nid_number: number
    govt_id_or_tin: number
    facebook_profile: number
    website_link: number
    area_name: number
    postal_code: number
    category: number
    status: number
    is_apporved: number
    submitted_at: number
    _all: number
  }


  export type Service_ProviderAvgAggregateInputType = {
    business_license?: true
    nid_number?: true
    govt_id_or_tin?: true
    postal_code?: true
  }

  export type Service_ProviderSumAggregateInputType = {
    business_license?: true
    nid_number?: true
    govt_id_or_tin?: true
    postal_code?: true
  }

  export type Service_ProviderMinAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    business_name?: true
    business_license?: true
    nid_number?: true
    govt_id_or_tin?: true
    facebook_profile?: true
    website_link?: true
    area_name?: true
    postal_code?: true
    category?: true
    status?: true
    is_apporved?: true
    submitted_at?: true
  }

  export type Service_ProviderMaxAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    business_name?: true
    business_license?: true
    nid_number?: true
    govt_id_or_tin?: true
    facebook_profile?: true
    website_link?: true
    area_name?: true
    postal_code?: true
    category?: true
    status?: true
    is_apporved?: true
    submitted_at?: true
  }

  export type Service_ProviderCountAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    business_name?: true
    business_license?: true
    nid_number?: true
    govt_id_or_tin?: true
    facebook_profile?: true
    website_link?: true
    area_name?: true
    postal_code?: true
    category?: true
    status?: true
    is_apporved?: true
    submitted_at?: true
    _all?: true
  }

  export type Service_ProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service_Provider to aggregate.
     */
    where?: Service_ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Service_Providers to fetch.
     */
    orderBy?: Service_ProviderOrderByWithRelationInput | Service_ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Service_ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Service_Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Service_Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Service_Providers
    **/
    _count?: true | Service_ProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Service_ProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Service_ProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Service_ProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Service_ProviderMaxAggregateInputType
  }

  export type GetService_ProviderAggregateType<T extends Service_ProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateService_Provider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService_Provider[P]>
      : GetScalarType<T[P], AggregateService_Provider[P]>
  }




  export type Service_ProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Service_ProviderWhereInput
    orderBy?: Service_ProviderOrderByWithAggregationInput | Service_ProviderOrderByWithAggregationInput[]
    by: Service_ProviderScalarFieldEnum[] | Service_ProviderScalarFieldEnum
    having?: Service_ProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Service_ProviderCountAggregateInputType | true
    _avg?: Service_ProviderAvgAggregateInputType
    _sum?: Service_ProviderSumAggregateInputType
    _min?: Service_ProviderMinAggregateInputType
    _max?: Service_ProviderMaxAggregateInputType
  }

  export type Service_ProviderGroupByOutputType = {
    id: string
    email: string
    fullName: string
    business_name: string
    business_license: number
    nid_number: number
    govt_id_or_tin: number
    facebook_profile: string
    website_link: string
    area_name: string
    postal_code: number
    category: string
    status: $Enums.Provider_Status
    is_apporved: boolean
    submitted_at: Date
    _count: Service_ProviderCountAggregateOutputType | null
    _avg: Service_ProviderAvgAggregateOutputType | null
    _sum: Service_ProviderSumAggregateOutputType | null
    _min: Service_ProviderMinAggregateOutputType | null
    _max: Service_ProviderMaxAggregateOutputType | null
  }

  type GetService_ProviderGroupByPayload<T extends Service_ProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Service_ProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Service_ProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Service_ProviderGroupByOutputType[P]>
            : GetScalarType<T[P], Service_ProviderGroupByOutputType[P]>
        }
      >
    >


  export type Service_ProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    business_name?: boolean
    business_license?: boolean
    nid_number?: boolean
    govt_id_or_tin?: boolean
    facebook_profile?: boolean
    website_link?: boolean
    area_name?: boolean
    postal_code?: boolean
    category?: boolean
    status?: boolean
    is_apporved?: boolean
    submitted_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    providerServices?: boolean | Service_Provider$providerServicesArgs<ExtArgs>
    _count?: boolean | Service_ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service_Provider"]>

  export type Service_ProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    business_name?: boolean
    business_license?: boolean
    nid_number?: boolean
    govt_id_or_tin?: boolean
    facebook_profile?: boolean
    website_link?: boolean
    area_name?: boolean
    postal_code?: boolean
    category?: boolean
    status?: boolean
    is_apporved?: boolean
    submitted_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service_Provider"]>

  export type Service_ProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    business_name?: boolean
    business_license?: boolean
    nid_number?: boolean
    govt_id_or_tin?: boolean
    facebook_profile?: boolean
    website_link?: boolean
    area_name?: boolean
    postal_code?: boolean
    category?: boolean
    status?: boolean
    is_apporved?: boolean
    submitted_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service_Provider"]>

  export type Service_ProviderSelectScalar = {
    id?: boolean
    email?: boolean
    fullName?: boolean
    business_name?: boolean
    business_license?: boolean
    nid_number?: boolean
    govt_id_or_tin?: boolean
    facebook_profile?: boolean
    website_link?: boolean
    area_name?: boolean
    postal_code?: boolean
    category?: boolean
    status?: boolean
    is_apporved?: boolean
    submitted_at?: boolean
  }

  export type Service_ProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fullName" | "business_name" | "business_license" | "nid_number" | "govt_id_or_tin" | "facebook_profile" | "website_link" | "area_name" | "postal_code" | "category" | "status" | "is_apporved" | "submitted_at", ExtArgs["result"]["service_Provider"]>
  export type Service_ProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    providerServices?: boolean | Service_Provider$providerServicesArgs<ExtArgs>
    _count?: boolean | Service_ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Service_ProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Service_ProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Service_ProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service_Provider"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      providerServices: Prisma.$ProviderServicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      fullName: string
      business_name: string
      business_license: number
      nid_number: number
      govt_id_or_tin: number
      facebook_profile: string
      website_link: string
      area_name: string
      postal_code: number
      category: string
      status: $Enums.Provider_Status
      is_apporved: boolean
      submitted_at: Date
    }, ExtArgs["result"]["service_Provider"]>
    composites: {}
  }

  type Service_ProviderGetPayload<S extends boolean | null | undefined | Service_ProviderDefaultArgs> = $Result.GetResult<Prisma.$Service_ProviderPayload, S>

  type Service_ProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Service_ProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Service_ProviderCountAggregateInputType | true
    }

  export interface Service_ProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service_Provider'], meta: { name: 'Service_Provider' } }
    /**
     * Find zero or one Service_Provider that matches the filter.
     * @param {Service_ProviderFindUniqueArgs} args - Arguments to find a Service_Provider
     * @example
     * // Get one Service_Provider
     * const service_Provider = await prisma.service_Provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Service_ProviderFindUniqueArgs>(args: SelectSubset<T, Service_ProviderFindUniqueArgs<ExtArgs>>): Prisma__Service_ProviderClient<$Result.GetResult<Prisma.$Service_ProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service_Provider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Service_ProviderFindUniqueOrThrowArgs} args - Arguments to find a Service_Provider
     * @example
     * // Get one Service_Provider
     * const service_Provider = await prisma.service_Provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Service_ProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, Service_ProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Service_ProviderClient<$Result.GetResult<Prisma.$Service_ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service_Provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_ProviderFindFirstArgs} args - Arguments to find a Service_Provider
     * @example
     * // Get one Service_Provider
     * const service_Provider = await prisma.service_Provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Service_ProviderFindFirstArgs>(args?: SelectSubset<T, Service_ProviderFindFirstArgs<ExtArgs>>): Prisma__Service_ProviderClient<$Result.GetResult<Prisma.$Service_ProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service_Provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_ProviderFindFirstOrThrowArgs} args - Arguments to find a Service_Provider
     * @example
     * // Get one Service_Provider
     * const service_Provider = await prisma.service_Provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Service_ProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, Service_ProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__Service_ProviderClient<$Result.GetResult<Prisma.$Service_ProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Service_Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_ProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Service_Providers
     * const service_Providers = await prisma.service_Provider.findMany()
     * 
     * // Get first 10 Service_Providers
     * const service_Providers = await prisma.service_Provider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const service_ProviderWithIdOnly = await prisma.service_Provider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Service_ProviderFindManyArgs>(args?: SelectSubset<T, Service_ProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Service_ProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service_Provider.
     * @param {Service_ProviderCreateArgs} args - Arguments to create a Service_Provider.
     * @example
     * // Create one Service_Provider
     * const Service_Provider = await prisma.service_Provider.create({
     *   data: {
     *     // ... data to create a Service_Provider
     *   }
     * })
     * 
     */
    create<T extends Service_ProviderCreateArgs>(args: SelectSubset<T, Service_ProviderCreateArgs<ExtArgs>>): Prisma__Service_ProviderClient<$Result.GetResult<Prisma.$Service_ProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Service_Providers.
     * @param {Service_ProviderCreateManyArgs} args - Arguments to create many Service_Providers.
     * @example
     * // Create many Service_Providers
     * const service_Provider = await prisma.service_Provider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Service_ProviderCreateManyArgs>(args?: SelectSubset<T, Service_ProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Service_Providers and returns the data saved in the database.
     * @param {Service_ProviderCreateManyAndReturnArgs} args - Arguments to create many Service_Providers.
     * @example
     * // Create many Service_Providers
     * const service_Provider = await prisma.service_Provider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Service_Providers and only return the `id`
     * const service_ProviderWithIdOnly = await prisma.service_Provider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Service_ProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, Service_ProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Service_ProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service_Provider.
     * @param {Service_ProviderDeleteArgs} args - Arguments to delete one Service_Provider.
     * @example
     * // Delete one Service_Provider
     * const Service_Provider = await prisma.service_Provider.delete({
     *   where: {
     *     // ... filter to delete one Service_Provider
     *   }
     * })
     * 
     */
    delete<T extends Service_ProviderDeleteArgs>(args: SelectSubset<T, Service_ProviderDeleteArgs<ExtArgs>>): Prisma__Service_ProviderClient<$Result.GetResult<Prisma.$Service_ProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service_Provider.
     * @param {Service_ProviderUpdateArgs} args - Arguments to update one Service_Provider.
     * @example
     * // Update one Service_Provider
     * const service_Provider = await prisma.service_Provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Service_ProviderUpdateArgs>(args: SelectSubset<T, Service_ProviderUpdateArgs<ExtArgs>>): Prisma__Service_ProviderClient<$Result.GetResult<Prisma.$Service_ProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Service_Providers.
     * @param {Service_ProviderDeleteManyArgs} args - Arguments to filter Service_Providers to delete.
     * @example
     * // Delete a few Service_Providers
     * const { count } = await prisma.service_Provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Service_ProviderDeleteManyArgs>(args?: SelectSubset<T, Service_ProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Service_Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_ProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Service_Providers
     * const service_Provider = await prisma.service_Provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Service_ProviderUpdateManyArgs>(args: SelectSubset<T, Service_ProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Service_Providers and returns the data updated in the database.
     * @param {Service_ProviderUpdateManyAndReturnArgs} args - Arguments to update many Service_Providers.
     * @example
     * // Update many Service_Providers
     * const service_Provider = await prisma.service_Provider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Service_Providers and only return the `id`
     * const service_ProviderWithIdOnly = await prisma.service_Provider.updateManyAndReturn({
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
    updateManyAndReturn<T extends Service_ProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, Service_ProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Service_ProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service_Provider.
     * @param {Service_ProviderUpsertArgs} args - Arguments to update or create a Service_Provider.
     * @example
     * // Update or create a Service_Provider
     * const service_Provider = await prisma.service_Provider.upsert({
     *   create: {
     *     // ... data to create a Service_Provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service_Provider we want to update
     *   }
     * })
     */
    upsert<T extends Service_ProviderUpsertArgs>(args: SelectSubset<T, Service_ProviderUpsertArgs<ExtArgs>>): Prisma__Service_ProviderClient<$Result.GetResult<Prisma.$Service_ProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Service_Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_ProviderCountArgs} args - Arguments to filter Service_Providers to count.
     * @example
     * // Count the number of Service_Providers
     * const count = await prisma.service_Provider.count({
     *   where: {
     *     // ... the filter for the Service_Providers we want to count
     *   }
     * })
    **/
    count<T extends Service_ProviderCountArgs>(
      args?: Subset<T, Service_ProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Service_ProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service_Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_ProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Service_ProviderAggregateArgs>(args: Subset<T, Service_ProviderAggregateArgs>): Prisma.PrismaPromise<GetService_ProviderAggregateType<T>>

    /**
     * Group by Service_Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_ProviderGroupByArgs} args - Group by arguments.
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
      T extends Service_ProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Service_ProviderGroupByArgs['orderBy'] }
        : { orderBy?: Service_ProviderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Service_ProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetService_ProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service_Provider model
   */
  readonly fields: Service_ProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service_Provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Service_ProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    providerServices<T extends Service_Provider$providerServicesArgs<ExtArgs> = {}>(args?: Subset<T, Service_Provider$providerServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Service_Provider model
   */
  interface Service_ProviderFieldRefs {
    readonly id: FieldRef<"Service_Provider", 'String'>
    readonly email: FieldRef<"Service_Provider", 'String'>
    readonly fullName: FieldRef<"Service_Provider", 'String'>
    readonly business_name: FieldRef<"Service_Provider", 'String'>
    readonly business_license: FieldRef<"Service_Provider", 'Int'>
    readonly nid_number: FieldRef<"Service_Provider", 'Int'>
    readonly govt_id_or_tin: FieldRef<"Service_Provider", 'Int'>
    readonly facebook_profile: FieldRef<"Service_Provider", 'String'>
    readonly website_link: FieldRef<"Service_Provider", 'String'>
    readonly area_name: FieldRef<"Service_Provider", 'String'>
    readonly postal_code: FieldRef<"Service_Provider", 'Int'>
    readonly category: FieldRef<"Service_Provider", 'String'>
    readonly status: FieldRef<"Service_Provider", 'Provider_Status'>
    readonly is_apporved: FieldRef<"Service_Provider", 'Boolean'>
    readonly submitted_at: FieldRef<"Service_Provider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service_Provider findUnique
   */
  export type Service_ProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Provider
     */
    select?: Service_ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Provider
     */
    omit?: Service_ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Service_Provider to fetch.
     */
    where: Service_ProviderWhereUniqueInput
  }

  /**
   * Service_Provider findUniqueOrThrow
   */
  export type Service_ProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Provider
     */
    select?: Service_ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Provider
     */
    omit?: Service_ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Service_Provider to fetch.
     */
    where: Service_ProviderWhereUniqueInput
  }

  /**
   * Service_Provider findFirst
   */
  export type Service_ProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Provider
     */
    select?: Service_ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Provider
     */
    omit?: Service_ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Service_Provider to fetch.
     */
    where?: Service_ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Service_Providers to fetch.
     */
    orderBy?: Service_ProviderOrderByWithRelationInput | Service_ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Service_Providers.
     */
    cursor?: Service_ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Service_Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Service_Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Service_Providers.
     */
    distinct?: Service_ProviderScalarFieldEnum | Service_ProviderScalarFieldEnum[]
  }

  /**
   * Service_Provider findFirstOrThrow
   */
  export type Service_ProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Provider
     */
    select?: Service_ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Provider
     */
    omit?: Service_ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Service_Provider to fetch.
     */
    where?: Service_ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Service_Providers to fetch.
     */
    orderBy?: Service_ProviderOrderByWithRelationInput | Service_ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Service_Providers.
     */
    cursor?: Service_ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Service_Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Service_Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Service_Providers.
     */
    distinct?: Service_ProviderScalarFieldEnum | Service_ProviderScalarFieldEnum[]
  }

  /**
   * Service_Provider findMany
   */
  export type Service_ProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Provider
     */
    select?: Service_ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Provider
     */
    omit?: Service_ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Service_Providers to fetch.
     */
    where?: Service_ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Service_Providers to fetch.
     */
    orderBy?: Service_ProviderOrderByWithRelationInput | Service_ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Service_Providers.
     */
    cursor?: Service_ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Service_Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Service_Providers.
     */
    skip?: number
    distinct?: Service_ProviderScalarFieldEnum | Service_ProviderScalarFieldEnum[]
  }

  /**
   * Service_Provider create
   */
  export type Service_ProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Provider
     */
    select?: Service_ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Provider
     */
    omit?: Service_ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_ProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a Service_Provider.
     */
    data: XOR<Service_ProviderCreateInput, Service_ProviderUncheckedCreateInput>
  }

  /**
   * Service_Provider createMany
   */
  export type Service_ProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Service_Providers.
     */
    data: Service_ProviderCreateManyInput | Service_ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service_Provider createManyAndReturn
   */
  export type Service_ProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Provider
     */
    select?: Service_ProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Provider
     */
    omit?: Service_ProviderOmit<ExtArgs> | null
    /**
     * The data used to create many Service_Providers.
     */
    data: Service_ProviderCreateManyInput | Service_ProviderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_ProviderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service_Provider update
   */
  export type Service_ProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Provider
     */
    select?: Service_ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Provider
     */
    omit?: Service_ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_ProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a Service_Provider.
     */
    data: XOR<Service_ProviderUpdateInput, Service_ProviderUncheckedUpdateInput>
    /**
     * Choose, which Service_Provider to update.
     */
    where: Service_ProviderWhereUniqueInput
  }

  /**
   * Service_Provider updateMany
   */
  export type Service_ProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Service_Providers.
     */
    data: XOR<Service_ProviderUpdateManyMutationInput, Service_ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Service_Providers to update
     */
    where?: Service_ProviderWhereInput
    /**
     * Limit how many Service_Providers to update.
     */
    limit?: number
  }

  /**
   * Service_Provider updateManyAndReturn
   */
  export type Service_ProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Provider
     */
    select?: Service_ProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Provider
     */
    omit?: Service_ProviderOmit<ExtArgs> | null
    /**
     * The data used to update Service_Providers.
     */
    data: XOR<Service_ProviderUpdateManyMutationInput, Service_ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Service_Providers to update
     */
    where?: Service_ProviderWhereInput
    /**
     * Limit how many Service_Providers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_ProviderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service_Provider upsert
   */
  export type Service_ProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Provider
     */
    select?: Service_ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Provider
     */
    omit?: Service_ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_ProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the Service_Provider to update in case it exists.
     */
    where: Service_ProviderWhereUniqueInput
    /**
     * In case the Service_Provider found by the `where` argument doesn't exist, create a new Service_Provider with this data.
     */
    create: XOR<Service_ProviderCreateInput, Service_ProviderUncheckedCreateInput>
    /**
     * In case the Service_Provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Service_ProviderUpdateInput, Service_ProviderUncheckedUpdateInput>
  }

  /**
   * Service_Provider delete
   */
  export type Service_ProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Provider
     */
    select?: Service_ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Provider
     */
    omit?: Service_ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_ProviderInclude<ExtArgs> | null
    /**
     * Filter which Service_Provider to delete.
     */
    where: Service_ProviderWhereUniqueInput
  }

  /**
   * Service_Provider deleteMany
   */
  export type Service_ProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service_Providers to delete
     */
    where?: Service_ProviderWhereInput
    /**
     * Limit how many Service_Providers to delete.
     */
    limit?: number
  }

  /**
   * Service_Provider.providerServices
   */
  export type Service_Provider$providerServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderServices
     */
    select?: ProviderServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderServices
     */
    omit?: ProviderServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServicesInclude<ExtArgs> | null
    where?: ProviderServicesWhereInput
    orderBy?: ProviderServicesOrderByWithRelationInput | ProviderServicesOrderByWithRelationInput[]
    cursor?: ProviderServicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderServicesScalarFieldEnum | ProviderServicesScalarFieldEnum[]
  }

  /**
   * Service_Provider without action
   */
  export type Service_ProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Provider
     */
    select?: Service_ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Provider
     */
    omit?: Service_ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_ProviderInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    base_price: number | null
    avg_rating: number | null
  }

  export type ServiceSumAggregateOutputType = {
    base_price: number | null
    avg_rating: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    base_price: number | null
    price_unit: string | null
    estimed_duration: string | null
    is_featured: boolean | null
    avg_rating: number | null
    is_active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    base_price: number | null
    price_unit: string | null
    estimed_duration: string | null
    is_featured: boolean | null
    avg_rating: number | null
    is_active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    title: number
    description: number
    base_price: number
    price_unit: number
    estimed_duration: number
    is_featured: number
    avg_rating: number
    is_active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    base_price?: true
    avg_rating?: true
  }

  export type ServiceSumAggregateInputType = {
    base_price?: true
    avg_rating?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    base_price?: true
    price_unit?: true
    estimed_duration?: true
    is_featured?: true
    avg_rating?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    base_price?: true
    price_unit?: true
    estimed_duration?: true
    is_featured?: true
    avg_rating?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    base_price?: true
    price_unit?: true
    estimed_duration?: true
    is_featured?: true
    avg_rating?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    title: string
    description: string
    base_price: number
    price_unit: string
    estimed_duration: string
    is_featured: boolean
    avg_rating: number
    is_active: boolean
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    base_price?: boolean
    price_unit?: boolean
    estimed_duration?: boolean
    is_featured?: boolean
    avg_rating?: boolean
    is_active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    providerServices?: boolean | Service$providerServicesArgs<ExtArgs>
    category?: boolean | Service$categoryArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    base_price?: boolean
    price_unit?: boolean
    estimed_duration?: boolean
    is_featured?: boolean
    avg_rating?: boolean
    is_active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    base_price?: boolean
    price_unit?: boolean
    estimed_duration?: boolean
    is_featured?: boolean
    avg_rating?: boolean
    is_active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    base_price?: boolean
    price_unit?: boolean
    estimed_duration?: boolean
    is_featured?: boolean
    avg_rating?: boolean
    is_active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "base_price" | "price_unit" | "estimed_duration" | "is_featured" | "avg_rating" | "is_active" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providerServices?: boolean | Service$providerServicesArgs<ExtArgs>
    category?: boolean | Service$categoryArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      providerServices: Prisma.$ProviderServicesPayload<ExtArgs>[]
      category: Prisma.$Service_CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      base_price: number
      price_unit: string
      estimed_duration: string
      is_featured: boolean
      avg_rating: number
      is_active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    providerServices<T extends Service$providerServicesArgs<ExtArgs> = {}>(args?: Subset<T, Service$providerServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends Service$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Service$categoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Service_CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly title: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly base_price: FieldRef<"Service", 'Float'>
    readonly price_unit: FieldRef<"Service", 'String'>
    readonly estimed_duration: FieldRef<"Service", 'String'>
    readonly is_featured: FieldRef<"Service", 'Boolean'>
    readonly avg_rating: FieldRef<"Service", 'Float'>
    readonly is_active: FieldRef<"Service", 'Boolean'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.providerServices
   */
  export type Service$providerServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderServices
     */
    select?: ProviderServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderServices
     */
    omit?: ProviderServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServicesInclude<ExtArgs> | null
    where?: ProviderServicesWhereInput
    orderBy?: ProviderServicesOrderByWithRelationInput | ProviderServicesOrderByWithRelationInput[]
    cursor?: ProviderServicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderServicesScalarFieldEnum | ProviderServicesScalarFieldEnum[]
  }

  /**
   * Service.category
   */
  export type Service$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Category
     */
    select?: Service_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Category
     */
    omit?: Service_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_CategoryInclude<ExtArgs> | null
    where?: Service_CategoryWhereInput
    orderBy?: Service_CategoryOrderByWithRelationInput | Service_CategoryOrderByWithRelationInput[]
    cursor?: Service_CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Service_CategoryScalarFieldEnum | Service_CategoryScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model ProviderServices
   */

  export type AggregateProviderServices = {
    _count: ProviderServicesCountAggregateOutputType | null
    _min: ProviderServicesMinAggregateOutputType | null
    _max: ProviderServicesMaxAggregateOutputType | null
  }

  export type ProviderServicesMinAggregateOutputType = {
    providerId: string | null
    serviceId: string | null
  }

  export type ProviderServicesMaxAggregateOutputType = {
    providerId: string | null
    serviceId: string | null
  }

  export type ProviderServicesCountAggregateOutputType = {
    providerId: number
    serviceId: number
    _all: number
  }


  export type ProviderServicesMinAggregateInputType = {
    providerId?: true
    serviceId?: true
  }

  export type ProviderServicesMaxAggregateInputType = {
    providerId?: true
    serviceId?: true
  }

  export type ProviderServicesCountAggregateInputType = {
    providerId?: true
    serviceId?: true
    _all?: true
  }

  export type ProviderServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderServices to aggregate.
     */
    where?: ProviderServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderServices to fetch.
     */
    orderBy?: ProviderServicesOrderByWithRelationInput | ProviderServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderServices
    **/
    _count?: true | ProviderServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderServicesMaxAggregateInputType
  }

  export type GetProviderServicesAggregateType<T extends ProviderServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderServices[P]>
      : GetScalarType<T[P], AggregateProviderServices[P]>
  }




  export type ProviderServicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderServicesWhereInput
    orderBy?: ProviderServicesOrderByWithAggregationInput | ProviderServicesOrderByWithAggregationInput[]
    by: ProviderServicesScalarFieldEnum[] | ProviderServicesScalarFieldEnum
    having?: ProviderServicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderServicesCountAggregateInputType | true
    _min?: ProviderServicesMinAggregateInputType
    _max?: ProviderServicesMaxAggregateInputType
  }

  export type ProviderServicesGroupByOutputType = {
    providerId: string
    serviceId: string
    _count: ProviderServicesCountAggregateOutputType | null
    _min: ProviderServicesMinAggregateOutputType | null
    _max: ProviderServicesMaxAggregateOutputType | null
  }

  type GetProviderServicesGroupByPayload<T extends ProviderServicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderServicesGroupByOutputType[P]>
        }
      >
    >


  export type ProviderServicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    providerId?: boolean
    serviceId?: boolean
    service_provider?: boolean | Service_ProviderDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerServices"]>

  export type ProviderServicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    providerId?: boolean
    serviceId?: boolean
    service_provider?: boolean | Service_ProviderDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerServices"]>

  export type ProviderServicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    providerId?: boolean
    serviceId?: boolean
    service_provider?: boolean | Service_ProviderDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerServices"]>

  export type ProviderServicesSelectScalar = {
    providerId?: boolean
    serviceId?: boolean
  }

  export type ProviderServicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"providerId" | "serviceId", ExtArgs["result"]["providerServices"]>
  export type ProviderServicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service_provider?: boolean | Service_ProviderDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ProviderServicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service_provider?: boolean | Service_ProviderDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ProviderServicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service_provider?: boolean | Service_ProviderDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ProviderServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderServices"
    objects: {
      service_provider: Prisma.$Service_ProviderPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      providerId: string
      serviceId: string
    }, ExtArgs["result"]["providerServices"]>
    composites: {}
  }

  type ProviderServicesGetPayload<S extends boolean | null | undefined | ProviderServicesDefaultArgs> = $Result.GetResult<Prisma.$ProviderServicesPayload, S>

  type ProviderServicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderServicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderServicesCountAggregateInputType | true
    }

  export interface ProviderServicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderServices'], meta: { name: 'ProviderServices' } }
    /**
     * Find zero or one ProviderServices that matches the filter.
     * @param {ProviderServicesFindUniqueArgs} args - Arguments to find a ProviderServices
     * @example
     * // Get one ProviderServices
     * const providerServices = await prisma.providerServices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderServicesFindUniqueArgs>(args: SelectSubset<T, ProviderServicesFindUniqueArgs<ExtArgs>>): Prisma__ProviderServicesClient<$Result.GetResult<Prisma.$ProviderServicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderServices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderServicesFindUniqueOrThrowArgs} args - Arguments to find a ProviderServices
     * @example
     * // Get one ProviderServices
     * const providerServices = await prisma.providerServices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderServicesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderServicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderServicesClient<$Result.GetResult<Prisma.$ProviderServicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServicesFindFirstArgs} args - Arguments to find a ProviderServices
     * @example
     * // Get one ProviderServices
     * const providerServices = await prisma.providerServices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderServicesFindFirstArgs>(args?: SelectSubset<T, ProviderServicesFindFirstArgs<ExtArgs>>): Prisma__ProviderServicesClient<$Result.GetResult<Prisma.$ProviderServicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderServices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServicesFindFirstOrThrowArgs} args - Arguments to find a ProviderServices
     * @example
     * // Get one ProviderServices
     * const providerServices = await prisma.providerServices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderServicesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderServicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderServicesClient<$Result.GetResult<Prisma.$ProviderServicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderServices
     * const providerServices = await prisma.providerServices.findMany()
     * 
     * // Get first 10 ProviderServices
     * const providerServices = await prisma.providerServices.findMany({ take: 10 })
     * 
     * // Only select the `providerId`
     * const providerServicesWithProviderIdOnly = await prisma.providerServices.findMany({ select: { providerId: true } })
     * 
     */
    findMany<T extends ProviderServicesFindManyArgs>(args?: SelectSubset<T, ProviderServicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderServices.
     * @param {ProviderServicesCreateArgs} args - Arguments to create a ProviderServices.
     * @example
     * // Create one ProviderServices
     * const ProviderServices = await prisma.providerServices.create({
     *   data: {
     *     // ... data to create a ProviderServices
     *   }
     * })
     * 
     */
    create<T extends ProviderServicesCreateArgs>(args: SelectSubset<T, ProviderServicesCreateArgs<ExtArgs>>): Prisma__ProviderServicesClient<$Result.GetResult<Prisma.$ProviderServicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderServices.
     * @param {ProviderServicesCreateManyArgs} args - Arguments to create many ProviderServices.
     * @example
     * // Create many ProviderServices
     * const providerServices = await prisma.providerServices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderServicesCreateManyArgs>(args?: SelectSubset<T, ProviderServicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderServices and returns the data saved in the database.
     * @param {ProviderServicesCreateManyAndReturnArgs} args - Arguments to create many ProviderServices.
     * @example
     * // Create many ProviderServices
     * const providerServices = await prisma.providerServices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderServices and only return the `providerId`
     * const providerServicesWithProviderIdOnly = await prisma.providerServices.createManyAndReturn({
     *   select: { providerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderServicesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderServicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderServicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProviderServices.
     * @param {ProviderServicesDeleteArgs} args - Arguments to delete one ProviderServices.
     * @example
     * // Delete one ProviderServices
     * const ProviderServices = await prisma.providerServices.delete({
     *   where: {
     *     // ... filter to delete one ProviderServices
     *   }
     * })
     * 
     */
    delete<T extends ProviderServicesDeleteArgs>(args: SelectSubset<T, ProviderServicesDeleteArgs<ExtArgs>>): Prisma__ProviderServicesClient<$Result.GetResult<Prisma.$ProviderServicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderServices.
     * @param {ProviderServicesUpdateArgs} args - Arguments to update one ProviderServices.
     * @example
     * // Update one ProviderServices
     * const providerServices = await prisma.providerServices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderServicesUpdateArgs>(args: SelectSubset<T, ProviderServicesUpdateArgs<ExtArgs>>): Prisma__ProviderServicesClient<$Result.GetResult<Prisma.$ProviderServicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderServices.
     * @param {ProviderServicesDeleteManyArgs} args - Arguments to filter ProviderServices to delete.
     * @example
     * // Delete a few ProviderServices
     * const { count } = await prisma.providerServices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderServicesDeleteManyArgs>(args?: SelectSubset<T, ProviderServicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderServices
     * const providerServices = await prisma.providerServices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderServicesUpdateManyArgs>(args: SelectSubset<T, ProviderServicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderServices and returns the data updated in the database.
     * @param {ProviderServicesUpdateManyAndReturnArgs} args - Arguments to update many ProviderServices.
     * @example
     * // Update many ProviderServices
     * const providerServices = await prisma.providerServices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProviderServices and only return the `providerId`
     * const providerServicesWithProviderIdOnly = await prisma.providerServices.updateManyAndReturn({
     *   select: { providerId: true },
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
    updateManyAndReturn<T extends ProviderServicesUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderServicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderServicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProviderServices.
     * @param {ProviderServicesUpsertArgs} args - Arguments to update or create a ProviderServices.
     * @example
     * // Update or create a ProviderServices
     * const providerServices = await prisma.providerServices.upsert({
     *   create: {
     *     // ... data to create a ProviderServices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderServices we want to update
     *   }
     * })
     */
    upsert<T extends ProviderServicesUpsertArgs>(args: SelectSubset<T, ProviderServicesUpsertArgs<ExtArgs>>): Prisma__ProviderServicesClient<$Result.GetResult<Prisma.$ProviderServicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServicesCountArgs} args - Arguments to filter ProviderServices to count.
     * @example
     * // Count the number of ProviderServices
     * const count = await prisma.providerServices.count({
     *   where: {
     *     // ... the filter for the ProviderServices we want to count
     *   }
     * })
    **/
    count<T extends ProviderServicesCountArgs>(
      args?: Subset<T, ProviderServicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProviderServicesAggregateArgs>(args: Subset<T, ProviderServicesAggregateArgs>): Prisma.PrismaPromise<GetProviderServicesAggregateType<T>>

    /**
     * Group by ProviderServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServicesGroupByArgs} args - Group by arguments.
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
      T extends ProviderServicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderServicesGroupByArgs['orderBy'] }
        : { orderBy?: ProviderServicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProviderServicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderServices model
   */
  readonly fields: ProviderServicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderServices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderServicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service_provider<T extends Service_ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Service_ProviderDefaultArgs<ExtArgs>>): Prisma__Service_ProviderClient<$Result.GetResult<Prisma.$Service_ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProviderServices model
   */
  interface ProviderServicesFieldRefs {
    readonly providerId: FieldRef<"ProviderServices", 'String'>
    readonly serviceId: FieldRef<"ProviderServices", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProviderServices findUnique
   */
  export type ProviderServicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderServices
     */
    select?: ProviderServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderServices
     */
    omit?: ProviderServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServicesInclude<ExtArgs> | null
    /**
     * Filter, which ProviderServices to fetch.
     */
    where: ProviderServicesWhereUniqueInput
  }

  /**
   * ProviderServices findUniqueOrThrow
   */
  export type ProviderServicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderServices
     */
    select?: ProviderServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderServices
     */
    omit?: ProviderServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServicesInclude<ExtArgs> | null
    /**
     * Filter, which ProviderServices to fetch.
     */
    where: ProviderServicesWhereUniqueInput
  }

  /**
   * ProviderServices findFirst
   */
  export type ProviderServicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderServices
     */
    select?: ProviderServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderServices
     */
    omit?: ProviderServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServicesInclude<ExtArgs> | null
    /**
     * Filter, which ProviderServices to fetch.
     */
    where?: ProviderServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderServices to fetch.
     */
    orderBy?: ProviderServicesOrderByWithRelationInput | ProviderServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderServices.
     */
    cursor?: ProviderServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderServices.
     */
    distinct?: ProviderServicesScalarFieldEnum | ProviderServicesScalarFieldEnum[]
  }

  /**
   * ProviderServices findFirstOrThrow
   */
  export type ProviderServicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderServices
     */
    select?: ProviderServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderServices
     */
    omit?: ProviderServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServicesInclude<ExtArgs> | null
    /**
     * Filter, which ProviderServices to fetch.
     */
    where?: ProviderServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderServices to fetch.
     */
    orderBy?: ProviderServicesOrderByWithRelationInput | ProviderServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderServices.
     */
    cursor?: ProviderServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderServices.
     */
    distinct?: ProviderServicesScalarFieldEnum | ProviderServicesScalarFieldEnum[]
  }

  /**
   * ProviderServices findMany
   */
  export type ProviderServicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderServices
     */
    select?: ProviderServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderServices
     */
    omit?: ProviderServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServicesInclude<ExtArgs> | null
    /**
     * Filter, which ProviderServices to fetch.
     */
    where?: ProviderServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderServices to fetch.
     */
    orderBy?: ProviderServicesOrderByWithRelationInput | ProviderServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderServices.
     */
    cursor?: ProviderServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderServices.
     */
    skip?: number
    distinct?: ProviderServicesScalarFieldEnum | ProviderServicesScalarFieldEnum[]
  }

  /**
   * ProviderServices create
   */
  export type ProviderServicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderServices
     */
    select?: ProviderServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderServices
     */
    omit?: ProviderServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServicesInclude<ExtArgs> | null
    /**
     * The data needed to create a ProviderServices.
     */
    data: XOR<ProviderServicesCreateInput, ProviderServicesUncheckedCreateInput>
  }

  /**
   * ProviderServices createMany
   */
  export type ProviderServicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderServices.
     */
    data: ProviderServicesCreateManyInput | ProviderServicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderServices createManyAndReturn
   */
  export type ProviderServicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderServices
     */
    select?: ProviderServicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderServices
     */
    omit?: ProviderServicesOmit<ExtArgs> | null
    /**
     * The data used to create many ProviderServices.
     */
    data: ProviderServicesCreateManyInput | ProviderServicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderServices update
   */
  export type ProviderServicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderServices
     */
    select?: ProviderServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderServices
     */
    omit?: ProviderServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServicesInclude<ExtArgs> | null
    /**
     * The data needed to update a ProviderServices.
     */
    data: XOR<ProviderServicesUpdateInput, ProviderServicesUncheckedUpdateInput>
    /**
     * Choose, which ProviderServices to update.
     */
    where: ProviderServicesWhereUniqueInput
  }

  /**
   * ProviderServices updateMany
   */
  export type ProviderServicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderServices.
     */
    data: XOR<ProviderServicesUpdateManyMutationInput, ProviderServicesUncheckedUpdateManyInput>
    /**
     * Filter which ProviderServices to update
     */
    where?: ProviderServicesWhereInput
    /**
     * Limit how many ProviderServices to update.
     */
    limit?: number
  }

  /**
   * ProviderServices updateManyAndReturn
   */
  export type ProviderServicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderServices
     */
    select?: ProviderServicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderServices
     */
    omit?: ProviderServicesOmit<ExtArgs> | null
    /**
     * The data used to update ProviderServices.
     */
    data: XOR<ProviderServicesUpdateManyMutationInput, ProviderServicesUncheckedUpdateManyInput>
    /**
     * Filter which ProviderServices to update
     */
    where?: ProviderServicesWhereInput
    /**
     * Limit how many ProviderServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderServices upsert
   */
  export type ProviderServicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderServices
     */
    select?: ProviderServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderServices
     */
    omit?: ProviderServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServicesInclude<ExtArgs> | null
    /**
     * The filter to search for the ProviderServices to update in case it exists.
     */
    where: ProviderServicesWhereUniqueInput
    /**
     * In case the ProviderServices found by the `where` argument doesn't exist, create a new ProviderServices with this data.
     */
    create: XOR<ProviderServicesCreateInput, ProviderServicesUncheckedCreateInput>
    /**
     * In case the ProviderServices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderServicesUpdateInput, ProviderServicesUncheckedUpdateInput>
  }

  /**
   * ProviderServices delete
   */
  export type ProviderServicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderServices
     */
    select?: ProviderServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderServices
     */
    omit?: ProviderServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServicesInclude<ExtArgs> | null
    /**
     * Filter which ProviderServices to delete.
     */
    where: ProviderServicesWhereUniqueInput
  }

  /**
   * ProviderServices deleteMany
   */
  export type ProviderServicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderServices to delete
     */
    where?: ProviderServicesWhereInput
    /**
     * Limit how many ProviderServices to delete.
     */
    limit?: number
  }

  /**
   * ProviderServices without action
   */
  export type ProviderServicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderServices
     */
    select?: ProviderServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderServices
     */
    omit?: ProviderServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServicesInclude<ExtArgs> | null
  }


  /**
   * Model Service_Category
   */

  export type AggregateService_Category = {
    _count: Service_CategoryCountAggregateOutputType | null
    _min: Service_CategoryMinAggregateOutputType | null
    _max: Service_CategoryMaxAggregateOutputType | null
  }

  export type Service_CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    description: string | null
    is_Active: boolean | null
    parent_categoryId: string | null
    service_id: string | null
  }

  export type Service_CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    description: string | null
    is_Active: boolean | null
    parent_categoryId: string | null
    service_id: string | null
  }

  export type Service_CategoryCountAggregateOutputType = {
    id: number
    name: number
    icon: number
    description: number
    is_Active: number
    parent_categoryId: number
    service_id: number
    _all: number
  }


  export type Service_CategoryMinAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    description?: true
    is_Active?: true
    parent_categoryId?: true
    service_id?: true
  }

  export type Service_CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    description?: true
    is_Active?: true
    parent_categoryId?: true
    service_id?: true
  }

  export type Service_CategoryCountAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    description?: true
    is_Active?: true
    parent_categoryId?: true
    service_id?: true
    _all?: true
  }

  export type Service_CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service_Category to aggregate.
     */
    where?: Service_CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Service_Categories to fetch.
     */
    orderBy?: Service_CategoryOrderByWithRelationInput | Service_CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Service_CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Service_Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Service_Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Service_Categories
    **/
    _count?: true | Service_CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Service_CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Service_CategoryMaxAggregateInputType
  }

  export type GetService_CategoryAggregateType<T extends Service_CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateService_Category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService_Category[P]>
      : GetScalarType<T[P], AggregateService_Category[P]>
  }




  export type Service_CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Service_CategoryWhereInput
    orderBy?: Service_CategoryOrderByWithAggregationInput | Service_CategoryOrderByWithAggregationInput[]
    by: Service_CategoryScalarFieldEnum[] | Service_CategoryScalarFieldEnum
    having?: Service_CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Service_CategoryCountAggregateInputType | true
    _min?: Service_CategoryMinAggregateInputType
    _max?: Service_CategoryMaxAggregateInputType
  }

  export type Service_CategoryGroupByOutputType = {
    id: string
    name: string
    icon: string
    description: string
    is_Active: boolean
    parent_categoryId: string
    service_id: string | null
    _count: Service_CategoryCountAggregateOutputType | null
    _min: Service_CategoryMinAggregateOutputType | null
    _max: Service_CategoryMaxAggregateOutputType | null
  }

  type GetService_CategoryGroupByPayload<T extends Service_CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Service_CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Service_CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Service_CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], Service_CategoryGroupByOutputType[P]>
        }
      >
    >


  export type Service_CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    is_Active?: boolean
    parent_categoryId?: boolean
    service_id?: boolean
    parent_category?: boolean | Parent_categoryDefaultArgs<ExtArgs>
    service?: boolean | Service_Category$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["service_Category"]>

  export type Service_CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    is_Active?: boolean
    parent_categoryId?: boolean
    service_id?: boolean
    parent_category?: boolean | Parent_categoryDefaultArgs<ExtArgs>
    service?: boolean | Service_Category$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["service_Category"]>

  export type Service_CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    is_Active?: boolean
    parent_categoryId?: boolean
    service_id?: boolean
    parent_category?: boolean | Parent_categoryDefaultArgs<ExtArgs>
    service?: boolean | Service_Category$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["service_Category"]>

  export type Service_CategorySelectScalar = {
    id?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    is_Active?: boolean
    parent_categoryId?: boolean
    service_id?: boolean
  }

  export type Service_CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "icon" | "description" | "is_Active" | "parent_categoryId" | "service_id", ExtArgs["result"]["service_Category"]>
  export type Service_CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent_category?: boolean | Parent_categoryDefaultArgs<ExtArgs>
    service?: boolean | Service_Category$serviceArgs<ExtArgs>
  }
  export type Service_CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent_category?: boolean | Parent_categoryDefaultArgs<ExtArgs>
    service?: boolean | Service_Category$serviceArgs<ExtArgs>
  }
  export type Service_CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent_category?: boolean | Parent_categoryDefaultArgs<ExtArgs>
    service?: boolean | Service_Category$serviceArgs<ExtArgs>
  }

  export type $Service_CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service_Category"
    objects: {
      parent_category: Prisma.$Parent_categoryPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      icon: string
      description: string
      is_Active: boolean
      parent_categoryId: string
      service_id: string | null
    }, ExtArgs["result"]["service_Category"]>
    composites: {}
  }

  type Service_CategoryGetPayload<S extends boolean | null | undefined | Service_CategoryDefaultArgs> = $Result.GetResult<Prisma.$Service_CategoryPayload, S>

  type Service_CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Service_CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Service_CategoryCountAggregateInputType | true
    }

  export interface Service_CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service_Category'], meta: { name: 'Service_Category' } }
    /**
     * Find zero or one Service_Category that matches the filter.
     * @param {Service_CategoryFindUniqueArgs} args - Arguments to find a Service_Category
     * @example
     * // Get one Service_Category
     * const service_Category = await prisma.service_Category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Service_CategoryFindUniqueArgs>(args: SelectSubset<T, Service_CategoryFindUniqueArgs<ExtArgs>>): Prisma__Service_CategoryClient<$Result.GetResult<Prisma.$Service_CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service_Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Service_CategoryFindUniqueOrThrowArgs} args - Arguments to find a Service_Category
     * @example
     * // Get one Service_Category
     * const service_Category = await prisma.service_Category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Service_CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, Service_CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Service_CategoryClient<$Result.GetResult<Prisma.$Service_CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service_Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_CategoryFindFirstArgs} args - Arguments to find a Service_Category
     * @example
     * // Get one Service_Category
     * const service_Category = await prisma.service_Category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Service_CategoryFindFirstArgs>(args?: SelectSubset<T, Service_CategoryFindFirstArgs<ExtArgs>>): Prisma__Service_CategoryClient<$Result.GetResult<Prisma.$Service_CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service_Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_CategoryFindFirstOrThrowArgs} args - Arguments to find a Service_Category
     * @example
     * // Get one Service_Category
     * const service_Category = await prisma.service_Category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Service_CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, Service_CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__Service_CategoryClient<$Result.GetResult<Prisma.$Service_CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Service_Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Service_Categories
     * const service_Categories = await prisma.service_Category.findMany()
     * 
     * // Get first 10 Service_Categories
     * const service_Categories = await prisma.service_Category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const service_CategoryWithIdOnly = await prisma.service_Category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Service_CategoryFindManyArgs>(args?: SelectSubset<T, Service_CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Service_CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service_Category.
     * @param {Service_CategoryCreateArgs} args - Arguments to create a Service_Category.
     * @example
     * // Create one Service_Category
     * const Service_Category = await prisma.service_Category.create({
     *   data: {
     *     // ... data to create a Service_Category
     *   }
     * })
     * 
     */
    create<T extends Service_CategoryCreateArgs>(args: SelectSubset<T, Service_CategoryCreateArgs<ExtArgs>>): Prisma__Service_CategoryClient<$Result.GetResult<Prisma.$Service_CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Service_Categories.
     * @param {Service_CategoryCreateManyArgs} args - Arguments to create many Service_Categories.
     * @example
     * // Create many Service_Categories
     * const service_Category = await prisma.service_Category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Service_CategoryCreateManyArgs>(args?: SelectSubset<T, Service_CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Service_Categories and returns the data saved in the database.
     * @param {Service_CategoryCreateManyAndReturnArgs} args - Arguments to create many Service_Categories.
     * @example
     * // Create many Service_Categories
     * const service_Category = await prisma.service_Category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Service_Categories and only return the `id`
     * const service_CategoryWithIdOnly = await prisma.service_Category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Service_CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, Service_CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Service_CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service_Category.
     * @param {Service_CategoryDeleteArgs} args - Arguments to delete one Service_Category.
     * @example
     * // Delete one Service_Category
     * const Service_Category = await prisma.service_Category.delete({
     *   where: {
     *     // ... filter to delete one Service_Category
     *   }
     * })
     * 
     */
    delete<T extends Service_CategoryDeleteArgs>(args: SelectSubset<T, Service_CategoryDeleteArgs<ExtArgs>>): Prisma__Service_CategoryClient<$Result.GetResult<Prisma.$Service_CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service_Category.
     * @param {Service_CategoryUpdateArgs} args - Arguments to update one Service_Category.
     * @example
     * // Update one Service_Category
     * const service_Category = await prisma.service_Category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Service_CategoryUpdateArgs>(args: SelectSubset<T, Service_CategoryUpdateArgs<ExtArgs>>): Prisma__Service_CategoryClient<$Result.GetResult<Prisma.$Service_CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Service_Categories.
     * @param {Service_CategoryDeleteManyArgs} args - Arguments to filter Service_Categories to delete.
     * @example
     * // Delete a few Service_Categories
     * const { count } = await prisma.service_Category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Service_CategoryDeleteManyArgs>(args?: SelectSubset<T, Service_CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Service_Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Service_Categories
     * const service_Category = await prisma.service_Category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Service_CategoryUpdateManyArgs>(args: SelectSubset<T, Service_CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Service_Categories and returns the data updated in the database.
     * @param {Service_CategoryUpdateManyAndReturnArgs} args - Arguments to update many Service_Categories.
     * @example
     * // Update many Service_Categories
     * const service_Category = await prisma.service_Category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Service_Categories and only return the `id`
     * const service_CategoryWithIdOnly = await prisma.service_Category.updateManyAndReturn({
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
    updateManyAndReturn<T extends Service_CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, Service_CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Service_CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service_Category.
     * @param {Service_CategoryUpsertArgs} args - Arguments to update or create a Service_Category.
     * @example
     * // Update or create a Service_Category
     * const service_Category = await prisma.service_Category.upsert({
     *   create: {
     *     // ... data to create a Service_Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service_Category we want to update
     *   }
     * })
     */
    upsert<T extends Service_CategoryUpsertArgs>(args: SelectSubset<T, Service_CategoryUpsertArgs<ExtArgs>>): Prisma__Service_CategoryClient<$Result.GetResult<Prisma.$Service_CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Service_Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_CategoryCountArgs} args - Arguments to filter Service_Categories to count.
     * @example
     * // Count the number of Service_Categories
     * const count = await prisma.service_Category.count({
     *   where: {
     *     // ... the filter for the Service_Categories we want to count
     *   }
     * })
    **/
    count<T extends Service_CategoryCountArgs>(
      args?: Subset<T, Service_CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Service_CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service_Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Service_CategoryAggregateArgs>(args: Subset<T, Service_CategoryAggregateArgs>): Prisma.PrismaPromise<GetService_CategoryAggregateType<T>>

    /**
     * Group by Service_Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Service_CategoryGroupByArgs} args - Group by arguments.
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
      T extends Service_CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Service_CategoryGroupByArgs['orderBy'] }
        : { orderBy?: Service_CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Service_CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetService_CategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service_Category model
   */
  readonly fields: Service_CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service_Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Service_CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent_category<T extends Parent_categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Parent_categoryDefaultArgs<ExtArgs>>): Prisma__Parent_categoryClient<$Result.GetResult<Prisma.$Parent_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends Service_Category$serviceArgs<ExtArgs> = {}>(args?: Subset<T, Service_Category$serviceArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Service_Category model
   */
  interface Service_CategoryFieldRefs {
    readonly id: FieldRef<"Service_Category", 'String'>
    readonly name: FieldRef<"Service_Category", 'String'>
    readonly icon: FieldRef<"Service_Category", 'String'>
    readonly description: FieldRef<"Service_Category", 'String'>
    readonly is_Active: FieldRef<"Service_Category", 'Boolean'>
    readonly parent_categoryId: FieldRef<"Service_Category", 'String'>
    readonly service_id: FieldRef<"Service_Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Service_Category findUnique
   */
  export type Service_CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Category
     */
    select?: Service_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Category
     */
    omit?: Service_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Service_Category to fetch.
     */
    where: Service_CategoryWhereUniqueInput
  }

  /**
   * Service_Category findUniqueOrThrow
   */
  export type Service_CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Category
     */
    select?: Service_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Category
     */
    omit?: Service_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Service_Category to fetch.
     */
    where: Service_CategoryWhereUniqueInput
  }

  /**
   * Service_Category findFirst
   */
  export type Service_CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Category
     */
    select?: Service_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Category
     */
    omit?: Service_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Service_Category to fetch.
     */
    where?: Service_CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Service_Categories to fetch.
     */
    orderBy?: Service_CategoryOrderByWithRelationInput | Service_CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Service_Categories.
     */
    cursor?: Service_CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Service_Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Service_Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Service_Categories.
     */
    distinct?: Service_CategoryScalarFieldEnum | Service_CategoryScalarFieldEnum[]
  }

  /**
   * Service_Category findFirstOrThrow
   */
  export type Service_CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Category
     */
    select?: Service_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Category
     */
    omit?: Service_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Service_Category to fetch.
     */
    where?: Service_CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Service_Categories to fetch.
     */
    orderBy?: Service_CategoryOrderByWithRelationInput | Service_CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Service_Categories.
     */
    cursor?: Service_CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Service_Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Service_Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Service_Categories.
     */
    distinct?: Service_CategoryScalarFieldEnum | Service_CategoryScalarFieldEnum[]
  }

  /**
   * Service_Category findMany
   */
  export type Service_CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Category
     */
    select?: Service_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Category
     */
    omit?: Service_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Service_Categories to fetch.
     */
    where?: Service_CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Service_Categories to fetch.
     */
    orderBy?: Service_CategoryOrderByWithRelationInput | Service_CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Service_Categories.
     */
    cursor?: Service_CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Service_Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Service_Categories.
     */
    skip?: number
    distinct?: Service_CategoryScalarFieldEnum | Service_CategoryScalarFieldEnum[]
  }

  /**
   * Service_Category create
   */
  export type Service_CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Category
     */
    select?: Service_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Category
     */
    omit?: Service_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Service_Category.
     */
    data: XOR<Service_CategoryCreateInput, Service_CategoryUncheckedCreateInput>
  }

  /**
   * Service_Category createMany
   */
  export type Service_CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Service_Categories.
     */
    data: Service_CategoryCreateManyInput | Service_CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service_Category createManyAndReturn
   */
  export type Service_CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Category
     */
    select?: Service_CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Category
     */
    omit?: Service_CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Service_Categories.
     */
    data: Service_CategoryCreateManyInput | Service_CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service_Category update
   */
  export type Service_CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Category
     */
    select?: Service_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Category
     */
    omit?: Service_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Service_Category.
     */
    data: XOR<Service_CategoryUpdateInput, Service_CategoryUncheckedUpdateInput>
    /**
     * Choose, which Service_Category to update.
     */
    where: Service_CategoryWhereUniqueInput
  }

  /**
   * Service_Category updateMany
   */
  export type Service_CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Service_Categories.
     */
    data: XOR<Service_CategoryUpdateManyMutationInput, Service_CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Service_Categories to update
     */
    where?: Service_CategoryWhereInput
    /**
     * Limit how many Service_Categories to update.
     */
    limit?: number
  }

  /**
   * Service_Category updateManyAndReturn
   */
  export type Service_CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Category
     */
    select?: Service_CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Category
     */
    omit?: Service_CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Service_Categories.
     */
    data: XOR<Service_CategoryUpdateManyMutationInput, Service_CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Service_Categories to update
     */
    where?: Service_CategoryWhereInput
    /**
     * Limit how many Service_Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service_Category upsert
   */
  export type Service_CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Category
     */
    select?: Service_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Category
     */
    omit?: Service_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Service_Category to update in case it exists.
     */
    where: Service_CategoryWhereUniqueInput
    /**
     * In case the Service_Category found by the `where` argument doesn't exist, create a new Service_Category with this data.
     */
    create: XOR<Service_CategoryCreateInput, Service_CategoryUncheckedCreateInput>
    /**
     * In case the Service_Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Service_CategoryUpdateInput, Service_CategoryUncheckedUpdateInput>
  }

  /**
   * Service_Category delete
   */
  export type Service_CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Category
     */
    select?: Service_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Category
     */
    omit?: Service_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_CategoryInclude<ExtArgs> | null
    /**
     * Filter which Service_Category to delete.
     */
    where: Service_CategoryWhereUniqueInput
  }

  /**
   * Service_Category deleteMany
   */
  export type Service_CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service_Categories to delete
     */
    where?: Service_CategoryWhereInput
    /**
     * Limit how many Service_Categories to delete.
     */
    limit?: number
  }

  /**
   * Service_Category.service
   */
  export type Service_Category$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
  }

  /**
   * Service_Category without action
   */
  export type Service_CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Category
     */
    select?: Service_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Category
     */
    omit?: Service_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Parent_category
   */

  export type AggregateParent_category = {
    _count: Parent_categoryCountAggregateOutputType | null
    _min: Parent_categoryMinAggregateOutputType | null
    _max: Parent_categoryMaxAggregateOutputType | null
  }

  export type Parent_categoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    description: string | null
    is_Active: boolean | null
  }

  export type Parent_categoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    description: string | null
    is_Active: boolean | null
  }

  export type Parent_categoryCountAggregateOutputType = {
    id: number
    name: number
    icon: number
    description: number
    is_Active: number
    _all: number
  }


  export type Parent_categoryMinAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    description?: true
    is_Active?: true
  }

  export type Parent_categoryMaxAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    description?: true
    is_Active?: true
  }

  export type Parent_categoryCountAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    description?: true
    is_Active?: true
    _all?: true
  }

  export type Parent_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parent_category to aggregate.
     */
    where?: Parent_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parent_categories to fetch.
     */
    orderBy?: Parent_categoryOrderByWithRelationInput | Parent_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Parent_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parent_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parent_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parent_categories
    **/
    _count?: true | Parent_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Parent_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Parent_categoryMaxAggregateInputType
  }

  export type GetParent_categoryAggregateType<T extends Parent_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateParent_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParent_category[P]>
      : GetScalarType<T[P], AggregateParent_category[P]>
  }




  export type Parent_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Parent_categoryWhereInput
    orderBy?: Parent_categoryOrderByWithAggregationInput | Parent_categoryOrderByWithAggregationInput[]
    by: Parent_categoryScalarFieldEnum[] | Parent_categoryScalarFieldEnum
    having?: Parent_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Parent_categoryCountAggregateInputType | true
    _min?: Parent_categoryMinAggregateInputType
    _max?: Parent_categoryMaxAggregateInputType
  }

  export type Parent_categoryGroupByOutputType = {
    id: string
    name: string
    icon: string
    description: string
    is_Active: boolean
    _count: Parent_categoryCountAggregateOutputType | null
    _min: Parent_categoryMinAggregateOutputType | null
    _max: Parent_categoryMaxAggregateOutputType | null
  }

  type GetParent_categoryGroupByPayload<T extends Parent_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Parent_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Parent_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Parent_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], Parent_categoryGroupByOutputType[P]>
        }
      >
    >


  export type Parent_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    is_Active?: boolean
    category?: boolean | Parent_category$categoryArgs<ExtArgs>
    _count?: boolean | Parent_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parent_category"]>

  export type Parent_categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    is_Active?: boolean
  }, ExtArgs["result"]["parent_category"]>

  export type Parent_categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    is_Active?: boolean
  }, ExtArgs["result"]["parent_category"]>

  export type Parent_categorySelectScalar = {
    id?: boolean
    name?: boolean
    icon?: boolean
    description?: boolean
    is_Active?: boolean
  }

  export type Parent_categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "icon" | "description" | "is_Active", ExtArgs["result"]["parent_category"]>
  export type Parent_categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Parent_category$categoryArgs<ExtArgs>
    _count?: boolean | Parent_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Parent_categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Parent_categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Parent_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parent_category"
    objects: {
      category: Prisma.$Service_CategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      icon: string
      description: string
      is_Active: boolean
    }, ExtArgs["result"]["parent_category"]>
    composites: {}
  }

  type Parent_categoryGetPayload<S extends boolean | null | undefined | Parent_categoryDefaultArgs> = $Result.GetResult<Prisma.$Parent_categoryPayload, S>

  type Parent_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Parent_categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Parent_categoryCountAggregateInputType | true
    }

  export interface Parent_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parent_category'], meta: { name: 'Parent_category' } }
    /**
     * Find zero or one Parent_category that matches the filter.
     * @param {Parent_categoryFindUniqueArgs} args - Arguments to find a Parent_category
     * @example
     * // Get one Parent_category
     * const parent_category = await prisma.parent_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Parent_categoryFindUniqueArgs>(args: SelectSubset<T, Parent_categoryFindUniqueArgs<ExtArgs>>): Prisma__Parent_categoryClient<$Result.GetResult<Prisma.$Parent_categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parent_category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Parent_categoryFindUniqueOrThrowArgs} args - Arguments to find a Parent_category
     * @example
     * // Get one Parent_category
     * const parent_category = await prisma.parent_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Parent_categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, Parent_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Parent_categoryClient<$Result.GetResult<Prisma.$Parent_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Parent_categoryFindFirstArgs} args - Arguments to find a Parent_category
     * @example
     * // Get one Parent_category
     * const parent_category = await prisma.parent_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Parent_categoryFindFirstArgs>(args?: SelectSubset<T, Parent_categoryFindFirstArgs<ExtArgs>>): Prisma__Parent_categoryClient<$Result.GetResult<Prisma.$Parent_categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parent_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Parent_categoryFindFirstOrThrowArgs} args - Arguments to find a Parent_category
     * @example
     * // Get one Parent_category
     * const parent_category = await prisma.parent_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Parent_categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, Parent_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__Parent_categoryClient<$Result.GetResult<Prisma.$Parent_categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parent_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Parent_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parent_categories
     * const parent_categories = await prisma.parent_category.findMany()
     * 
     * // Get first 10 Parent_categories
     * const parent_categories = await prisma.parent_category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parent_categoryWithIdOnly = await prisma.parent_category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Parent_categoryFindManyArgs>(args?: SelectSubset<T, Parent_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Parent_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parent_category.
     * @param {Parent_categoryCreateArgs} args - Arguments to create a Parent_category.
     * @example
     * // Create one Parent_category
     * const Parent_category = await prisma.parent_category.create({
     *   data: {
     *     // ... data to create a Parent_category
     *   }
     * })
     * 
     */
    create<T extends Parent_categoryCreateArgs>(args: SelectSubset<T, Parent_categoryCreateArgs<ExtArgs>>): Prisma__Parent_categoryClient<$Result.GetResult<Prisma.$Parent_categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parent_categories.
     * @param {Parent_categoryCreateManyArgs} args - Arguments to create many Parent_categories.
     * @example
     * // Create many Parent_categories
     * const parent_category = await prisma.parent_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Parent_categoryCreateManyArgs>(args?: SelectSubset<T, Parent_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parent_categories and returns the data saved in the database.
     * @param {Parent_categoryCreateManyAndReturnArgs} args - Arguments to create many Parent_categories.
     * @example
     * // Create many Parent_categories
     * const parent_category = await prisma.parent_category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parent_categories and only return the `id`
     * const parent_categoryWithIdOnly = await prisma.parent_category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Parent_categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, Parent_categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Parent_categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parent_category.
     * @param {Parent_categoryDeleteArgs} args - Arguments to delete one Parent_category.
     * @example
     * // Delete one Parent_category
     * const Parent_category = await prisma.parent_category.delete({
     *   where: {
     *     // ... filter to delete one Parent_category
     *   }
     * })
     * 
     */
    delete<T extends Parent_categoryDeleteArgs>(args: SelectSubset<T, Parent_categoryDeleteArgs<ExtArgs>>): Prisma__Parent_categoryClient<$Result.GetResult<Prisma.$Parent_categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parent_category.
     * @param {Parent_categoryUpdateArgs} args - Arguments to update one Parent_category.
     * @example
     * // Update one Parent_category
     * const parent_category = await prisma.parent_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Parent_categoryUpdateArgs>(args: SelectSubset<T, Parent_categoryUpdateArgs<ExtArgs>>): Prisma__Parent_categoryClient<$Result.GetResult<Prisma.$Parent_categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parent_categories.
     * @param {Parent_categoryDeleteManyArgs} args - Arguments to filter Parent_categories to delete.
     * @example
     * // Delete a few Parent_categories
     * const { count } = await prisma.parent_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Parent_categoryDeleteManyArgs>(args?: SelectSubset<T, Parent_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parent_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Parent_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parent_categories
     * const parent_category = await prisma.parent_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Parent_categoryUpdateManyArgs>(args: SelectSubset<T, Parent_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parent_categories and returns the data updated in the database.
     * @param {Parent_categoryUpdateManyAndReturnArgs} args - Arguments to update many Parent_categories.
     * @example
     * // Update many Parent_categories
     * const parent_category = await prisma.parent_category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parent_categories and only return the `id`
     * const parent_categoryWithIdOnly = await prisma.parent_category.updateManyAndReturn({
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
    updateManyAndReturn<T extends Parent_categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, Parent_categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Parent_categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parent_category.
     * @param {Parent_categoryUpsertArgs} args - Arguments to update or create a Parent_category.
     * @example
     * // Update or create a Parent_category
     * const parent_category = await prisma.parent_category.upsert({
     *   create: {
     *     // ... data to create a Parent_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parent_category we want to update
     *   }
     * })
     */
    upsert<T extends Parent_categoryUpsertArgs>(args: SelectSubset<T, Parent_categoryUpsertArgs<ExtArgs>>): Prisma__Parent_categoryClient<$Result.GetResult<Prisma.$Parent_categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parent_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Parent_categoryCountArgs} args - Arguments to filter Parent_categories to count.
     * @example
     * // Count the number of Parent_categories
     * const count = await prisma.parent_category.count({
     *   where: {
     *     // ... the filter for the Parent_categories we want to count
     *   }
     * })
    **/
    count<T extends Parent_categoryCountArgs>(
      args?: Subset<T, Parent_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Parent_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parent_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Parent_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Parent_categoryAggregateArgs>(args: Subset<T, Parent_categoryAggregateArgs>): Prisma.PrismaPromise<GetParent_categoryAggregateType<T>>

    /**
     * Group by Parent_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Parent_categoryGroupByArgs} args - Group by arguments.
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
      T extends Parent_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Parent_categoryGroupByArgs['orderBy'] }
        : { orderBy?: Parent_categoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Parent_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParent_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parent_category model
   */
  readonly fields: Parent_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parent_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Parent_categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Parent_category$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Parent_category$categoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Service_CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Parent_category model
   */
  interface Parent_categoryFieldRefs {
    readonly id: FieldRef<"Parent_category", 'String'>
    readonly name: FieldRef<"Parent_category", 'String'>
    readonly icon: FieldRef<"Parent_category", 'String'>
    readonly description: FieldRef<"Parent_category", 'String'>
    readonly is_Active: FieldRef<"Parent_category", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Parent_category findUnique
   */
  export type Parent_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent_category
     */
    select?: Parent_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent_category
     */
    omit?: Parent_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Parent_categoryInclude<ExtArgs> | null
    /**
     * Filter, which Parent_category to fetch.
     */
    where: Parent_categoryWhereUniqueInput
  }

  /**
   * Parent_category findUniqueOrThrow
   */
  export type Parent_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent_category
     */
    select?: Parent_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent_category
     */
    omit?: Parent_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Parent_categoryInclude<ExtArgs> | null
    /**
     * Filter, which Parent_category to fetch.
     */
    where: Parent_categoryWhereUniqueInput
  }

  /**
   * Parent_category findFirst
   */
  export type Parent_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent_category
     */
    select?: Parent_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent_category
     */
    omit?: Parent_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Parent_categoryInclude<ExtArgs> | null
    /**
     * Filter, which Parent_category to fetch.
     */
    where?: Parent_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parent_categories to fetch.
     */
    orderBy?: Parent_categoryOrderByWithRelationInput | Parent_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parent_categories.
     */
    cursor?: Parent_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parent_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parent_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parent_categories.
     */
    distinct?: Parent_categoryScalarFieldEnum | Parent_categoryScalarFieldEnum[]
  }

  /**
   * Parent_category findFirstOrThrow
   */
  export type Parent_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent_category
     */
    select?: Parent_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent_category
     */
    omit?: Parent_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Parent_categoryInclude<ExtArgs> | null
    /**
     * Filter, which Parent_category to fetch.
     */
    where?: Parent_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parent_categories to fetch.
     */
    orderBy?: Parent_categoryOrderByWithRelationInput | Parent_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parent_categories.
     */
    cursor?: Parent_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parent_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parent_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parent_categories.
     */
    distinct?: Parent_categoryScalarFieldEnum | Parent_categoryScalarFieldEnum[]
  }

  /**
   * Parent_category findMany
   */
  export type Parent_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent_category
     */
    select?: Parent_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent_category
     */
    omit?: Parent_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Parent_categoryInclude<ExtArgs> | null
    /**
     * Filter, which Parent_categories to fetch.
     */
    where?: Parent_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parent_categories to fetch.
     */
    orderBy?: Parent_categoryOrderByWithRelationInput | Parent_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parent_categories.
     */
    cursor?: Parent_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parent_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parent_categories.
     */
    skip?: number
    distinct?: Parent_categoryScalarFieldEnum | Parent_categoryScalarFieldEnum[]
  }

  /**
   * Parent_category create
   */
  export type Parent_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent_category
     */
    select?: Parent_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent_category
     */
    omit?: Parent_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Parent_categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Parent_category.
     */
    data: XOR<Parent_categoryCreateInput, Parent_categoryUncheckedCreateInput>
  }

  /**
   * Parent_category createMany
   */
  export type Parent_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parent_categories.
     */
    data: Parent_categoryCreateManyInput | Parent_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parent_category createManyAndReturn
   */
  export type Parent_categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent_category
     */
    select?: Parent_categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parent_category
     */
    omit?: Parent_categoryOmit<ExtArgs> | null
    /**
     * The data used to create many Parent_categories.
     */
    data: Parent_categoryCreateManyInput | Parent_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parent_category update
   */
  export type Parent_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent_category
     */
    select?: Parent_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent_category
     */
    omit?: Parent_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Parent_categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Parent_category.
     */
    data: XOR<Parent_categoryUpdateInput, Parent_categoryUncheckedUpdateInput>
    /**
     * Choose, which Parent_category to update.
     */
    where: Parent_categoryWhereUniqueInput
  }

  /**
   * Parent_category updateMany
   */
  export type Parent_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parent_categories.
     */
    data: XOR<Parent_categoryUpdateManyMutationInput, Parent_categoryUncheckedUpdateManyInput>
    /**
     * Filter which Parent_categories to update
     */
    where?: Parent_categoryWhereInput
    /**
     * Limit how many Parent_categories to update.
     */
    limit?: number
  }

  /**
   * Parent_category updateManyAndReturn
   */
  export type Parent_categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent_category
     */
    select?: Parent_categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parent_category
     */
    omit?: Parent_categoryOmit<ExtArgs> | null
    /**
     * The data used to update Parent_categories.
     */
    data: XOR<Parent_categoryUpdateManyMutationInput, Parent_categoryUncheckedUpdateManyInput>
    /**
     * Filter which Parent_categories to update
     */
    where?: Parent_categoryWhereInput
    /**
     * Limit how many Parent_categories to update.
     */
    limit?: number
  }

  /**
   * Parent_category upsert
   */
  export type Parent_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent_category
     */
    select?: Parent_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent_category
     */
    omit?: Parent_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Parent_categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Parent_category to update in case it exists.
     */
    where: Parent_categoryWhereUniqueInput
    /**
     * In case the Parent_category found by the `where` argument doesn't exist, create a new Parent_category with this data.
     */
    create: XOR<Parent_categoryCreateInput, Parent_categoryUncheckedCreateInput>
    /**
     * In case the Parent_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Parent_categoryUpdateInput, Parent_categoryUncheckedUpdateInput>
  }

  /**
   * Parent_category delete
   */
  export type Parent_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent_category
     */
    select?: Parent_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent_category
     */
    omit?: Parent_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Parent_categoryInclude<ExtArgs> | null
    /**
     * Filter which Parent_category to delete.
     */
    where: Parent_categoryWhereUniqueInput
  }

  /**
   * Parent_category deleteMany
   */
  export type Parent_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parent_categories to delete
     */
    where?: Parent_categoryWhereInput
    /**
     * Limit how many Parent_categories to delete.
     */
    limit?: number
  }

  /**
   * Parent_category.category
   */
  export type Parent_category$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service_Category
     */
    select?: Service_CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service_Category
     */
    omit?: Service_CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Service_CategoryInclude<ExtArgs> | null
    where?: Service_CategoryWhereInput
    orderBy?: Service_CategoryOrderByWithRelationInput | Service_CategoryOrderByWithRelationInput[]
    cursor?: Service_CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Service_CategoryScalarFieldEnum | Service_CategoryScalarFieldEnum[]
  }

  /**
   * Parent_category without action
   */
  export type Parent_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parent_category
     */
    select?: Parent_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parent_category
     */
    omit?: Parent_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Parent_categoryInclude<ExtArgs> | null
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


  export const AddressScalarFieldEnum: {
    address_id: 'address_id',
    street_address: 'street_address',
    city: 'city',
    state: 'state',
    postal_code: 'postal_code',
    latitude: 'latitude',
    longitude: 'longitude',
    user_id: 'user_id'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    phone: 'phone',
    role: 'role',
    is_verified: 'is_verified',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    is_deleted: 'is_deleted',
    createdAt: 'createdAt',
    updated: 'updated'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const Service_ProviderScalarFieldEnum: {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    business_name: 'business_name',
    business_license: 'business_license',
    nid_number: 'nid_number',
    govt_id_or_tin: 'govt_id_or_tin',
    facebook_profile: 'facebook_profile',
    website_link: 'website_link',
    area_name: 'area_name',
    postal_code: 'postal_code',
    category: 'category',
    status: 'status',
    is_apporved: 'is_apporved',
    submitted_at: 'submitted_at'
  };

  export type Service_ProviderScalarFieldEnum = (typeof Service_ProviderScalarFieldEnum)[keyof typeof Service_ProviderScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    base_price: 'base_price',
    price_unit: 'price_unit',
    estimed_duration: 'estimed_duration',
    is_featured: 'is_featured',
    avg_rating: 'avg_rating',
    is_active: 'is_active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ProviderServicesScalarFieldEnum: {
    providerId: 'providerId',
    serviceId: 'serviceId'
  };

  export type ProviderServicesScalarFieldEnum = (typeof ProviderServicesScalarFieldEnum)[keyof typeof ProviderServicesScalarFieldEnum]


  export const Service_CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    icon: 'icon',
    description: 'description',
    is_Active: 'is_Active',
    parent_categoryId: 'parent_categoryId',
    service_id: 'service_id'
  };

  export type Service_CategoryScalarFieldEnum = (typeof Service_CategoryScalarFieldEnum)[keyof typeof Service_CategoryScalarFieldEnum]


  export const Parent_categoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    icon: 'icon',
    description: 'description',
    is_Active: 'is_Active'
  };

  export type Parent_categoryScalarFieldEnum = (typeof Parent_categoryScalarFieldEnum)[keyof typeof Parent_categoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'USER_STATUS'
   */
  export type EnumUSER_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'USER_STATUS'>
    


  /**
   * Reference to a field of type 'USER_STATUS[]'
   */
  export type ListEnumUSER_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'USER_STATUS[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Provider_Status'
   */
  export type EnumProvider_StatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider_Status'>
    


  /**
   * Reference to a field of type 'Provider_Status[]'
   */
  export type ListEnumProvider_StatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider_Status[]'>
    
  /**
   * Deep Input Types
   */


  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    address_id?: StringFilter<"Address"> | string
    street_address?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    postal_code?: IntFilter<"Address"> | number
    latitude?: FloatFilter<"Address"> | number
    longitude?: FloatFilter<"Address"> | number
    user_id?: StringFilter<"Address"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    address_id?: SortOrder
    street_address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    address_id?: string
    user_id?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    street_address?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    postal_code?: IntFilter<"Address"> | number
    latitude?: FloatFilter<"Address"> | number
    longitude?: FloatFilter<"Address"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "address_id" | "user_id">

  export type AddressOrderByWithAggregationInput = {
    address_id?: SortOrder
    street_address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    user_id?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    address_id?: StringWithAggregatesFilter<"Address"> | string
    street_address?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    state?: StringWithAggregatesFilter<"Address"> | string
    postal_code?: IntWithAggregatesFilter<"Address"> | number
    latitude?: FloatWithAggregatesFilter<"Address"> | number
    longitude?: FloatWithAggregatesFilter<"Address"> | number
    user_id?: StringWithAggregatesFilter<"Address"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    is_verified?: BoolFilter<"User"> | boolean
    status?: EnumUSER_STATUSFilter<"User"> | $Enums.USER_STATUS
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    service_provider?: XOR<Service_ProviderNullableScalarRelationFilter, Service_ProviderWhereInput> | null
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: AddressOrderByWithRelationInput
    service_provider?: Service_ProviderOrderByWithRelationInput
    Admin?: AdminOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    is_verified?: BoolFilter<"User"> | boolean
    status?: EnumUSER_STATUSFilter<"User"> | $Enums.USER_STATUS
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    service_provider?: XOR<Service_ProviderNullableScalarRelationFilter, Service_ProviderWhereInput> | null
    Admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    is_verified?: BoolWithAggregatesFilter<"User"> | boolean
    status?: EnumUSER_STATUSWithAggregatesFilter<"User"> | $Enums.USER_STATUS
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    fullName?: StringFilter<"Admin"> | string
    is_deleted?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updated?: DateTimeFilter<"Admin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    fullName?: StringFilter<"Admin"> | string
    is_deleted?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updated?: DateTimeFilter<"Admin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    fullName?: StringWithAggregatesFilter<"Admin"> | string
    is_deleted?: BoolWithAggregatesFilter<"Admin"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type Service_ProviderWhereInput = {
    AND?: Service_ProviderWhereInput | Service_ProviderWhereInput[]
    OR?: Service_ProviderWhereInput[]
    NOT?: Service_ProviderWhereInput | Service_ProviderWhereInput[]
    id?: StringFilter<"Service_Provider"> | string
    email?: StringFilter<"Service_Provider"> | string
    fullName?: StringFilter<"Service_Provider"> | string
    business_name?: StringFilter<"Service_Provider"> | string
    business_license?: IntFilter<"Service_Provider"> | number
    nid_number?: IntFilter<"Service_Provider"> | number
    govt_id_or_tin?: IntFilter<"Service_Provider"> | number
    facebook_profile?: StringFilter<"Service_Provider"> | string
    website_link?: StringFilter<"Service_Provider"> | string
    area_name?: StringFilter<"Service_Provider"> | string
    postal_code?: IntFilter<"Service_Provider"> | number
    category?: StringFilter<"Service_Provider"> | string
    status?: EnumProvider_StatusFilter<"Service_Provider"> | $Enums.Provider_Status
    is_apporved?: BoolFilter<"Service_Provider"> | boolean
    submitted_at?: DateTimeFilter<"Service_Provider"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    providerServices?: ProviderServicesListRelationFilter
  }

  export type Service_ProviderOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    business_name?: SortOrder
    business_license?: SortOrder
    nid_number?: SortOrder
    govt_id_or_tin?: SortOrder
    facebook_profile?: SortOrder
    website_link?: SortOrder
    area_name?: SortOrder
    postal_code?: SortOrder
    category?: SortOrder
    status?: SortOrder
    is_apporved?: SortOrder
    submitted_at?: SortOrder
    user?: UserOrderByWithRelationInput
    providerServices?: ProviderServicesOrderByRelationAggregateInput
  }

  export type Service_ProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: Service_ProviderWhereInput | Service_ProviderWhereInput[]
    OR?: Service_ProviderWhereInput[]
    NOT?: Service_ProviderWhereInput | Service_ProviderWhereInput[]
    fullName?: StringFilter<"Service_Provider"> | string
    business_name?: StringFilter<"Service_Provider"> | string
    business_license?: IntFilter<"Service_Provider"> | number
    nid_number?: IntFilter<"Service_Provider"> | number
    govt_id_or_tin?: IntFilter<"Service_Provider"> | number
    facebook_profile?: StringFilter<"Service_Provider"> | string
    website_link?: StringFilter<"Service_Provider"> | string
    area_name?: StringFilter<"Service_Provider"> | string
    postal_code?: IntFilter<"Service_Provider"> | number
    category?: StringFilter<"Service_Provider"> | string
    status?: EnumProvider_StatusFilter<"Service_Provider"> | $Enums.Provider_Status
    is_apporved?: BoolFilter<"Service_Provider"> | boolean
    submitted_at?: DateTimeFilter<"Service_Provider"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    providerServices?: ProviderServicesListRelationFilter
  }, "id" | "email">

  export type Service_ProviderOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    business_name?: SortOrder
    business_license?: SortOrder
    nid_number?: SortOrder
    govt_id_or_tin?: SortOrder
    facebook_profile?: SortOrder
    website_link?: SortOrder
    area_name?: SortOrder
    postal_code?: SortOrder
    category?: SortOrder
    status?: SortOrder
    is_apporved?: SortOrder
    submitted_at?: SortOrder
    _count?: Service_ProviderCountOrderByAggregateInput
    _avg?: Service_ProviderAvgOrderByAggregateInput
    _max?: Service_ProviderMaxOrderByAggregateInput
    _min?: Service_ProviderMinOrderByAggregateInput
    _sum?: Service_ProviderSumOrderByAggregateInput
  }

  export type Service_ProviderScalarWhereWithAggregatesInput = {
    AND?: Service_ProviderScalarWhereWithAggregatesInput | Service_ProviderScalarWhereWithAggregatesInput[]
    OR?: Service_ProviderScalarWhereWithAggregatesInput[]
    NOT?: Service_ProviderScalarWhereWithAggregatesInput | Service_ProviderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service_Provider"> | string
    email?: StringWithAggregatesFilter<"Service_Provider"> | string
    fullName?: StringWithAggregatesFilter<"Service_Provider"> | string
    business_name?: StringWithAggregatesFilter<"Service_Provider"> | string
    business_license?: IntWithAggregatesFilter<"Service_Provider"> | number
    nid_number?: IntWithAggregatesFilter<"Service_Provider"> | number
    govt_id_or_tin?: IntWithAggregatesFilter<"Service_Provider"> | number
    facebook_profile?: StringWithAggregatesFilter<"Service_Provider"> | string
    website_link?: StringWithAggregatesFilter<"Service_Provider"> | string
    area_name?: StringWithAggregatesFilter<"Service_Provider"> | string
    postal_code?: IntWithAggregatesFilter<"Service_Provider"> | number
    category?: StringWithAggregatesFilter<"Service_Provider"> | string
    status?: EnumProvider_StatusWithAggregatesFilter<"Service_Provider"> | $Enums.Provider_Status
    is_apporved?: BoolWithAggregatesFilter<"Service_Provider"> | boolean
    submitted_at?: DateTimeWithAggregatesFilter<"Service_Provider"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    title?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    base_price?: FloatFilter<"Service"> | number
    price_unit?: StringFilter<"Service"> | string
    estimed_duration?: StringFilter<"Service"> | string
    is_featured?: BoolFilter<"Service"> | boolean
    avg_rating?: FloatFilter<"Service"> | number
    is_active?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    providerServices?: ProviderServicesListRelationFilter
    category?: Service_CategoryListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    base_price?: SortOrder
    price_unit?: SortOrder
    estimed_duration?: SortOrder
    is_featured?: SortOrder
    avg_rating?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    providerServices?: ProviderServicesOrderByRelationAggregateInput
    category?: Service_CategoryOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    title?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    base_price?: FloatFilter<"Service"> | number
    price_unit?: StringFilter<"Service"> | string
    estimed_duration?: StringFilter<"Service"> | string
    is_featured?: BoolFilter<"Service"> | boolean
    avg_rating?: FloatFilter<"Service"> | number
    is_active?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    providerServices?: ProviderServicesListRelationFilter
    category?: Service_CategoryListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    base_price?: SortOrder
    price_unit?: SortOrder
    estimed_duration?: SortOrder
    is_featured?: SortOrder
    avg_rating?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    title?: StringWithAggregatesFilter<"Service"> | string
    description?: StringWithAggregatesFilter<"Service"> | string
    base_price?: FloatWithAggregatesFilter<"Service"> | number
    price_unit?: StringWithAggregatesFilter<"Service"> | string
    estimed_duration?: StringWithAggregatesFilter<"Service"> | string
    is_featured?: BoolWithAggregatesFilter<"Service"> | boolean
    avg_rating?: FloatWithAggregatesFilter<"Service"> | number
    is_active?: BoolWithAggregatesFilter<"Service"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type ProviderServicesWhereInput = {
    AND?: ProviderServicesWhereInput | ProviderServicesWhereInput[]
    OR?: ProviderServicesWhereInput[]
    NOT?: ProviderServicesWhereInput | ProviderServicesWhereInput[]
    providerId?: StringFilter<"ProviderServices"> | string
    serviceId?: StringFilter<"ProviderServices"> | string
    service_provider?: XOR<Service_ProviderScalarRelationFilter, Service_ProviderWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type ProviderServicesOrderByWithRelationInput = {
    providerId?: SortOrder
    serviceId?: SortOrder
    service_provider?: Service_ProviderOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type ProviderServicesWhereUniqueInput = Prisma.AtLeast<{
    providerId_serviceId?: ProviderServicesProviderIdServiceIdCompoundUniqueInput
    AND?: ProviderServicesWhereInput | ProviderServicesWhereInput[]
    OR?: ProviderServicesWhereInput[]
    NOT?: ProviderServicesWhereInput | ProviderServicesWhereInput[]
    providerId?: StringFilter<"ProviderServices"> | string
    serviceId?: StringFilter<"ProviderServices"> | string
    service_provider?: XOR<Service_ProviderScalarRelationFilter, Service_ProviderWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "providerId_serviceId">

  export type ProviderServicesOrderByWithAggregationInput = {
    providerId?: SortOrder
    serviceId?: SortOrder
    _count?: ProviderServicesCountOrderByAggregateInput
    _max?: ProviderServicesMaxOrderByAggregateInput
    _min?: ProviderServicesMinOrderByAggregateInput
  }

  export type ProviderServicesScalarWhereWithAggregatesInput = {
    AND?: ProviderServicesScalarWhereWithAggregatesInput | ProviderServicesScalarWhereWithAggregatesInput[]
    OR?: ProviderServicesScalarWhereWithAggregatesInput[]
    NOT?: ProviderServicesScalarWhereWithAggregatesInput | ProviderServicesScalarWhereWithAggregatesInput[]
    providerId?: StringWithAggregatesFilter<"ProviderServices"> | string
    serviceId?: StringWithAggregatesFilter<"ProviderServices"> | string
  }

  export type Service_CategoryWhereInput = {
    AND?: Service_CategoryWhereInput | Service_CategoryWhereInput[]
    OR?: Service_CategoryWhereInput[]
    NOT?: Service_CategoryWhereInput | Service_CategoryWhereInput[]
    id?: StringFilter<"Service_Category"> | string
    name?: StringFilter<"Service_Category"> | string
    icon?: StringFilter<"Service_Category"> | string
    description?: StringFilter<"Service_Category"> | string
    is_Active?: BoolFilter<"Service_Category"> | boolean
    parent_categoryId?: StringFilter<"Service_Category"> | string
    service_id?: StringNullableFilter<"Service_Category"> | string | null
    parent_category?: XOR<Parent_categoryScalarRelationFilter, Parent_categoryWhereInput>
    service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
  }

  export type Service_CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    parent_categoryId?: SortOrder
    service_id?: SortOrderInput | SortOrder
    parent_category?: Parent_categoryOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type Service_CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Service_CategoryWhereInput | Service_CategoryWhereInput[]
    OR?: Service_CategoryWhereInput[]
    NOT?: Service_CategoryWhereInput | Service_CategoryWhereInput[]
    name?: StringFilter<"Service_Category"> | string
    icon?: StringFilter<"Service_Category"> | string
    description?: StringFilter<"Service_Category"> | string
    is_Active?: BoolFilter<"Service_Category"> | boolean
    parent_categoryId?: StringFilter<"Service_Category"> | string
    service_id?: StringNullableFilter<"Service_Category"> | string | null
    parent_category?: XOR<Parent_categoryScalarRelationFilter, Parent_categoryWhereInput>
    service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
  }, "id">

  export type Service_CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    parent_categoryId?: SortOrder
    service_id?: SortOrderInput | SortOrder
    _count?: Service_CategoryCountOrderByAggregateInput
    _max?: Service_CategoryMaxOrderByAggregateInput
    _min?: Service_CategoryMinOrderByAggregateInput
  }

  export type Service_CategoryScalarWhereWithAggregatesInput = {
    AND?: Service_CategoryScalarWhereWithAggregatesInput | Service_CategoryScalarWhereWithAggregatesInput[]
    OR?: Service_CategoryScalarWhereWithAggregatesInput[]
    NOT?: Service_CategoryScalarWhereWithAggregatesInput | Service_CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service_Category"> | string
    name?: StringWithAggregatesFilter<"Service_Category"> | string
    icon?: StringWithAggregatesFilter<"Service_Category"> | string
    description?: StringWithAggregatesFilter<"Service_Category"> | string
    is_Active?: BoolWithAggregatesFilter<"Service_Category"> | boolean
    parent_categoryId?: StringWithAggregatesFilter<"Service_Category"> | string
    service_id?: StringNullableWithAggregatesFilter<"Service_Category"> | string | null
  }

  export type Parent_categoryWhereInput = {
    AND?: Parent_categoryWhereInput | Parent_categoryWhereInput[]
    OR?: Parent_categoryWhereInput[]
    NOT?: Parent_categoryWhereInput | Parent_categoryWhereInput[]
    id?: StringFilter<"Parent_category"> | string
    name?: StringFilter<"Parent_category"> | string
    icon?: StringFilter<"Parent_category"> | string
    description?: StringFilter<"Parent_category"> | string
    is_Active?: BoolFilter<"Parent_category"> | boolean
    category?: Service_CategoryListRelationFilter
  }

  export type Parent_categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    category?: Service_CategoryOrderByRelationAggregateInput
  }

  export type Parent_categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Parent_categoryWhereInput | Parent_categoryWhereInput[]
    OR?: Parent_categoryWhereInput[]
    NOT?: Parent_categoryWhereInput | Parent_categoryWhereInput[]
    name?: StringFilter<"Parent_category"> | string
    icon?: StringFilter<"Parent_category"> | string
    description?: StringFilter<"Parent_category"> | string
    is_Active?: BoolFilter<"Parent_category"> | boolean
    category?: Service_CategoryListRelationFilter
  }, "id">

  export type Parent_categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    _count?: Parent_categoryCountOrderByAggregateInput
    _max?: Parent_categoryMaxOrderByAggregateInput
    _min?: Parent_categoryMinOrderByAggregateInput
  }

  export type Parent_categoryScalarWhereWithAggregatesInput = {
    AND?: Parent_categoryScalarWhereWithAggregatesInput | Parent_categoryScalarWhereWithAggregatesInput[]
    OR?: Parent_categoryScalarWhereWithAggregatesInput[]
    NOT?: Parent_categoryScalarWhereWithAggregatesInput | Parent_categoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parent_category"> | string
    name?: StringWithAggregatesFilter<"Parent_category"> | string
    icon?: StringWithAggregatesFilter<"Parent_category"> | string
    description?: StringWithAggregatesFilter<"Parent_category"> | string
    is_Active?: BoolWithAggregatesFilter<"Parent_category"> | boolean
  }

  export type AddressCreateInput = {
    address_id?: string
    street_address: string
    city: string
    state: string
    postal_code: number
    latitude: number
    longitude: number
    user: UserCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    address_id?: string
    street_address: string
    city: string
    state: string
    postal_code: number
    latitude: number
    longitude: number
    user_id: string
  }

  export type AddressUpdateInput = {
    address_id?: StringFieldUpdateOperationsInput | string
    street_address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    address_id?: StringFieldUpdateOperationsInput | string
    street_address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type AddressCreateManyInput = {
    address_id?: string
    street_address: string
    city: string
    state: string
    postal_code: number
    latitude: number
    longitude: number
    user_id: string
  }

  export type AddressUpdateManyMutationInput = {
    address_id?: StringFieldUpdateOperationsInput | string
    street_address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type AddressUncheckedUpdateManyInput = {
    address_id?: StringFieldUpdateOperationsInput | string
    street_address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    user_id?: string
    email: string
    password: string
    fullName: string
    phone: string
    role?: $Enums.UserRole
    is_verified?: boolean
    status?: $Enums.USER_STATUS
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutUserInput
    service_provider?: Service_ProviderCreateNestedOneWithoutUserInput
    Admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: string
    email: string
    password: string
    fullName: string
    phone: string
    role?: $Enums.UserRole
    is_verified?: boolean
    status?: $Enums.USER_STATUS
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutUserInput
    service_provider?: Service_ProviderUncheckedCreateNestedOneWithoutUserInput
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUSER_STATUSFieldUpdateOperationsInput | $Enums.USER_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutUserNestedInput
    service_provider?: Service_ProviderUpdateOneWithoutUserNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUSER_STATUSFieldUpdateOperationsInput | $Enums.USER_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutUserNestedInput
    service_provider?: Service_ProviderUncheckedUpdateOneWithoutUserNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: string
    email: string
    password: string
    fullName: string
    phone: string
    role?: $Enums.UserRole
    is_verified?: boolean
    status?: $Enums.USER_STATUS
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUSER_STATUSFieldUpdateOperationsInput | $Enums.USER_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUSER_STATUSFieldUpdateOperationsInput | $Enums.USER_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    fullName: string
    is_deleted?: boolean
    createdAt?: Date | string
    updated?: Date | string
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    email: string
    fullName: string
    is_deleted?: boolean
    createdAt?: Date | string
    updated?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    email: string
    fullName: string
    is_deleted?: boolean
    createdAt?: Date | string
    updated?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Service_ProviderCreateInput = {
    id?: string
    fullName: string
    business_name: string
    business_license: number
    nid_number: number
    govt_id_or_tin: number
    facebook_profile: string
    website_link: string
    area_name: string
    postal_code: number
    category: string
    status?: $Enums.Provider_Status
    is_apporved?: boolean
    submitted_at?: Date | string
    user: UserCreateNestedOneWithoutService_providerInput
    providerServices?: ProviderServicesCreateNestedManyWithoutService_providerInput
  }

  export type Service_ProviderUncheckedCreateInput = {
    id?: string
    email: string
    fullName: string
    business_name: string
    business_license: number
    nid_number: number
    govt_id_or_tin: number
    facebook_profile: string
    website_link: string
    area_name: string
    postal_code: number
    category: string
    status?: $Enums.Provider_Status
    is_apporved?: boolean
    submitted_at?: Date | string
    providerServices?: ProviderServicesUncheckedCreateNestedManyWithoutService_providerInput
  }

  export type Service_ProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: IntFieldUpdateOperationsInput | number
    nid_number?: IntFieldUpdateOperationsInput | number
    govt_id_or_tin?: IntFieldUpdateOperationsInput | number
    facebook_profile?: StringFieldUpdateOperationsInput | string
    website_link?: StringFieldUpdateOperationsInput | string
    area_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumProvider_StatusFieldUpdateOperationsInput | $Enums.Provider_Status
    is_apporved?: BoolFieldUpdateOperationsInput | boolean
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutService_providerNestedInput
    providerServices?: ProviderServicesUpdateManyWithoutService_providerNestedInput
  }

  export type Service_ProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: IntFieldUpdateOperationsInput | number
    nid_number?: IntFieldUpdateOperationsInput | number
    govt_id_or_tin?: IntFieldUpdateOperationsInput | number
    facebook_profile?: StringFieldUpdateOperationsInput | string
    website_link?: StringFieldUpdateOperationsInput | string
    area_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumProvider_StatusFieldUpdateOperationsInput | $Enums.Provider_Status
    is_apporved?: BoolFieldUpdateOperationsInput | boolean
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServicesUncheckedUpdateManyWithoutService_providerNestedInput
  }

  export type Service_ProviderCreateManyInput = {
    id?: string
    email: string
    fullName: string
    business_name: string
    business_license: number
    nid_number: number
    govt_id_or_tin: number
    facebook_profile: string
    website_link: string
    area_name: string
    postal_code: number
    category: string
    status?: $Enums.Provider_Status
    is_apporved?: boolean
    submitted_at?: Date | string
  }

  export type Service_ProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: IntFieldUpdateOperationsInput | number
    nid_number?: IntFieldUpdateOperationsInput | number
    govt_id_or_tin?: IntFieldUpdateOperationsInput | number
    facebook_profile?: StringFieldUpdateOperationsInput | string
    website_link?: StringFieldUpdateOperationsInput | string
    area_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumProvider_StatusFieldUpdateOperationsInput | $Enums.Provider_Status
    is_apporved?: BoolFieldUpdateOperationsInput | boolean
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Service_ProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: IntFieldUpdateOperationsInput | number
    nid_number?: IntFieldUpdateOperationsInput | number
    govt_id_or_tin?: IntFieldUpdateOperationsInput | number
    facebook_profile?: StringFieldUpdateOperationsInput | string
    website_link?: StringFieldUpdateOperationsInput | string
    area_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumProvider_StatusFieldUpdateOperationsInput | $Enums.Provider_Status
    is_apporved?: BoolFieldUpdateOperationsInput | boolean
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    title: string
    description: string
    base_price: number
    price_unit: string
    estimed_duration: string
    is_featured?: boolean
    avg_rating?: number
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerServices?: ProviderServicesCreateNestedManyWithoutServiceInput
    category?: Service_CategoryCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    base_price: number
    price_unit: string
    estimed_duration: string
    is_featured?: boolean
    avg_rating?: number
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerServices?: ProviderServicesUncheckedCreateNestedManyWithoutServiceInput
    category?: Service_CategoryUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    base_price?: FloatFieldUpdateOperationsInput | number
    price_unit?: StringFieldUpdateOperationsInput | string
    estimed_duration?: StringFieldUpdateOperationsInput | string
    is_featured?: BoolFieldUpdateOperationsInput | boolean
    avg_rating?: FloatFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServicesUpdateManyWithoutServiceNestedInput
    category?: Service_CategoryUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    base_price?: FloatFieldUpdateOperationsInput | number
    price_unit?: StringFieldUpdateOperationsInput | string
    estimed_duration?: StringFieldUpdateOperationsInput | string
    is_featured?: BoolFieldUpdateOperationsInput | boolean
    avg_rating?: FloatFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServicesUncheckedUpdateManyWithoutServiceNestedInput
    category?: Service_CategoryUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    title: string
    description: string
    base_price: number
    price_unit: string
    estimed_duration: string
    is_featured?: boolean
    avg_rating?: number
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    base_price?: FloatFieldUpdateOperationsInput | number
    price_unit?: StringFieldUpdateOperationsInput | string
    estimed_duration?: StringFieldUpdateOperationsInput | string
    is_featured?: BoolFieldUpdateOperationsInput | boolean
    avg_rating?: FloatFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    base_price?: FloatFieldUpdateOperationsInput | number
    price_unit?: StringFieldUpdateOperationsInput | string
    estimed_duration?: StringFieldUpdateOperationsInput | string
    is_featured?: BoolFieldUpdateOperationsInput | boolean
    avg_rating?: FloatFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderServicesCreateInput = {
    service_provider: Service_ProviderCreateNestedOneWithoutProviderServicesInput
    service: ServiceCreateNestedOneWithoutProviderServicesInput
  }

  export type ProviderServicesUncheckedCreateInput = {
    providerId: string
    serviceId: string
  }

  export type ProviderServicesUpdateInput = {
    service_provider?: Service_ProviderUpdateOneRequiredWithoutProviderServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutProviderServicesNestedInput
  }

  export type ProviderServicesUncheckedUpdateInput = {
    providerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderServicesCreateManyInput = {
    providerId: string
    serviceId: string
  }

  export type ProviderServicesUpdateManyMutationInput = {

  }

  export type ProviderServicesUncheckedUpdateManyInput = {
    providerId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type Service_CategoryCreateInput = {
    id?: string
    name: string
    icon: string
    description: string
    is_Active: boolean
    parent_category: Parent_categoryCreateNestedOneWithoutCategoryInput
    service?: ServiceCreateNestedOneWithoutCategoryInput
  }

  export type Service_CategoryUncheckedCreateInput = {
    id?: string
    name: string
    icon: string
    description: string
    is_Active: boolean
    parent_categoryId: string
    service_id?: string | null
  }

  export type Service_CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    parent_category?: Parent_categoryUpdateOneRequiredWithoutCategoryNestedInput
    service?: ServiceUpdateOneWithoutCategoryNestedInput
  }

  export type Service_CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    parent_categoryId?: StringFieldUpdateOperationsInput | string
    service_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Service_CategoryCreateManyInput = {
    id?: string
    name: string
    icon: string
    description: string
    is_Active: boolean
    parent_categoryId: string
    service_id?: string | null
  }

  export type Service_CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Service_CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    parent_categoryId?: StringFieldUpdateOperationsInput | string
    service_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Parent_categoryCreateInput = {
    id?: string
    name: string
    icon: string
    description: string
    is_Active: boolean
    category?: Service_CategoryCreateNestedManyWithoutParent_categoryInput
  }

  export type Parent_categoryUncheckedCreateInput = {
    id?: string
    name: string
    icon: string
    description: string
    is_Active: boolean
    category?: Service_CategoryUncheckedCreateNestedManyWithoutParent_categoryInput
  }

  export type Parent_categoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    category?: Service_CategoryUpdateManyWithoutParent_categoryNestedInput
  }

  export type Parent_categoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    category?: Service_CategoryUncheckedUpdateManyWithoutParent_categoryNestedInput
  }

  export type Parent_categoryCreateManyInput = {
    id?: string
    name: string
    icon: string
    description: string
    is_Active: boolean
  }

  export type Parent_categoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Parent_categoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AddressCountOrderByAggregateInput = {
    address_id?: SortOrder
    street_address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    user_id?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    postal_code?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    address_id?: SortOrder
    street_address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    user_id?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    address_id?: SortOrder
    street_address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    user_id?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    postal_code?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUSER_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_STATUS | EnumUSER_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.USER_STATUS[] | ListEnumUSER_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_STATUS[] | ListEnumUSER_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_STATUSFilter<$PrismaModel> | $Enums.USER_STATUS
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

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type Service_ProviderNullableScalarRelationFilter = {
    is?: Service_ProviderWhereInput | null
    isNot?: Service_ProviderWhereInput | null
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUSER_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_STATUS | EnumUSER_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.USER_STATUS[] | ListEnumUSER_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_STATUS[] | ListEnumUSER_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.USER_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUSER_STATUSFilter<$PrismaModel>
    _max?: NestedEnumUSER_STATUSFilter<$PrismaModel>
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

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    is_deleted?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
  }

  export type EnumProvider_StatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider_Status | EnumProvider_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Provider_Status[] | ListEnumProvider_StatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider_Status[] | ListEnumProvider_StatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProvider_StatusFilter<$PrismaModel> | $Enums.Provider_Status
  }

  export type ProviderServicesListRelationFilter = {
    every?: ProviderServicesWhereInput
    some?: ProviderServicesWhereInput
    none?: ProviderServicesWhereInput
  }

  export type ProviderServicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Service_ProviderCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    business_name?: SortOrder
    business_license?: SortOrder
    nid_number?: SortOrder
    govt_id_or_tin?: SortOrder
    facebook_profile?: SortOrder
    website_link?: SortOrder
    area_name?: SortOrder
    postal_code?: SortOrder
    category?: SortOrder
    status?: SortOrder
    is_apporved?: SortOrder
    submitted_at?: SortOrder
  }

  export type Service_ProviderAvgOrderByAggregateInput = {
    business_license?: SortOrder
    nid_number?: SortOrder
    govt_id_or_tin?: SortOrder
    postal_code?: SortOrder
  }

  export type Service_ProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    business_name?: SortOrder
    business_license?: SortOrder
    nid_number?: SortOrder
    govt_id_or_tin?: SortOrder
    facebook_profile?: SortOrder
    website_link?: SortOrder
    area_name?: SortOrder
    postal_code?: SortOrder
    category?: SortOrder
    status?: SortOrder
    is_apporved?: SortOrder
    submitted_at?: SortOrder
  }

  export type Service_ProviderMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    business_name?: SortOrder
    business_license?: SortOrder
    nid_number?: SortOrder
    govt_id_or_tin?: SortOrder
    facebook_profile?: SortOrder
    website_link?: SortOrder
    area_name?: SortOrder
    postal_code?: SortOrder
    category?: SortOrder
    status?: SortOrder
    is_apporved?: SortOrder
    submitted_at?: SortOrder
  }

  export type Service_ProviderSumOrderByAggregateInput = {
    business_license?: SortOrder
    nid_number?: SortOrder
    govt_id_or_tin?: SortOrder
    postal_code?: SortOrder
  }

  export type EnumProvider_StatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider_Status | EnumProvider_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Provider_Status[] | ListEnumProvider_StatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider_Status[] | ListEnumProvider_StatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProvider_StatusWithAggregatesFilter<$PrismaModel> | $Enums.Provider_Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProvider_StatusFilter<$PrismaModel>
    _max?: NestedEnumProvider_StatusFilter<$PrismaModel>
  }

  export type Service_CategoryListRelationFilter = {
    every?: Service_CategoryWhereInput
    some?: Service_CategoryWhereInput
    none?: Service_CategoryWhereInput
  }

  export type Service_CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    base_price?: SortOrder
    price_unit?: SortOrder
    estimed_duration?: SortOrder
    is_featured?: SortOrder
    avg_rating?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    base_price?: SortOrder
    avg_rating?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    base_price?: SortOrder
    price_unit?: SortOrder
    estimed_duration?: SortOrder
    is_featured?: SortOrder
    avg_rating?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    base_price?: SortOrder
    price_unit?: SortOrder
    estimed_duration?: SortOrder
    is_featured?: SortOrder
    avg_rating?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    base_price?: SortOrder
    avg_rating?: SortOrder
  }

  export type Service_ProviderScalarRelationFilter = {
    is?: Service_ProviderWhereInput
    isNot?: Service_ProviderWhereInput
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ProviderServicesProviderIdServiceIdCompoundUniqueInput = {
    providerId: string
    serviceId: string
  }

  export type ProviderServicesCountOrderByAggregateInput = {
    providerId?: SortOrder
    serviceId?: SortOrder
  }

  export type ProviderServicesMaxOrderByAggregateInput = {
    providerId?: SortOrder
    serviceId?: SortOrder
  }

  export type ProviderServicesMinOrderByAggregateInput = {
    providerId?: SortOrder
    serviceId?: SortOrder
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

  export type Parent_categoryScalarRelationFilter = {
    is?: Parent_categoryWhereInput
    isNot?: Parent_categoryWhereInput
  }

  export type ServiceNullableScalarRelationFilter = {
    is?: ServiceWhereInput | null
    isNot?: ServiceWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Service_CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    parent_categoryId?: SortOrder
    service_id?: SortOrder
  }

  export type Service_CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    parent_categoryId?: SortOrder
    service_id?: SortOrder
  }

  export type Service_CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    parent_categoryId?: SortOrder
    service_id?: SortOrder
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

  export type Parent_categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
  }

  export type Parent_categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
  }

  export type Parent_categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
  }

  export type UserCreateNestedOneWithoutAddressInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    upsert?: UserUpsertWithoutAddressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressInput, UserUpdateWithoutAddressInput>, UserUncheckedUpdateWithoutAddressInput>
  }

  export type AddressCreateNestedOneWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    connect?: AddressWhereUniqueInput
  }

  export type Service_ProviderCreateNestedOneWithoutUserInput = {
    create?: XOR<Service_ProviderCreateWithoutUserInput, Service_ProviderUncheckedCreateWithoutUserInput>
    connectOrCreate?: Service_ProviderCreateOrConnectWithoutUserInput
    connect?: Service_ProviderWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    connect?: AddressWhereUniqueInput
  }

  export type Service_ProviderUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<Service_ProviderCreateWithoutUserInput, Service_ProviderUncheckedCreateWithoutUserInput>
    connectOrCreate?: Service_ProviderCreateOrConnectWithoutUserInput
    connect?: Service_ProviderWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUSER_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.USER_STATUS
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AddressUpdateOneWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    upsert?: AddressUpsertWithoutUserInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutUserInput, AddressUpdateWithoutUserInput>, AddressUncheckedUpdateWithoutUserInput>
  }

  export type Service_ProviderUpdateOneWithoutUserNestedInput = {
    create?: XOR<Service_ProviderCreateWithoutUserInput, Service_ProviderUncheckedCreateWithoutUserInput>
    connectOrCreate?: Service_ProviderCreateOrConnectWithoutUserInput
    upsert?: Service_ProviderUpsertWithoutUserInput
    disconnect?: Service_ProviderWhereInput | boolean
    delete?: Service_ProviderWhereInput | boolean
    connect?: Service_ProviderWhereUniqueInput
    update?: XOR<XOR<Service_ProviderUpdateToOneWithWhereWithoutUserInput, Service_ProviderUpdateWithoutUserInput>, Service_ProviderUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AddressUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    upsert?: AddressUpsertWithoutUserInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutUserInput, AddressUpdateWithoutUserInput>, AddressUncheckedUpdateWithoutUserInput>
  }

  export type Service_ProviderUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<Service_ProviderCreateWithoutUserInput, Service_ProviderUncheckedCreateWithoutUserInput>
    connectOrCreate?: Service_ProviderCreateOrConnectWithoutUserInput
    upsert?: Service_ProviderUpsertWithoutUserInput
    disconnect?: Service_ProviderWhereInput | boolean
    delete?: Service_ProviderWhereInput | boolean
    connect?: Service_ProviderWhereUniqueInput
    update?: XOR<XOR<Service_ProviderUpdateToOneWithWhereWithoutUserInput, Service_ProviderUpdateWithoutUserInput>, Service_ProviderUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserCreateNestedOneWithoutService_providerInput = {
    create?: XOR<UserCreateWithoutService_providerInput, UserUncheckedCreateWithoutService_providerInput>
    connectOrCreate?: UserCreateOrConnectWithoutService_providerInput
    connect?: UserWhereUniqueInput
  }

  export type ProviderServicesCreateNestedManyWithoutService_providerInput = {
    create?: XOR<ProviderServicesCreateWithoutService_providerInput, ProviderServicesUncheckedCreateWithoutService_providerInput> | ProviderServicesCreateWithoutService_providerInput[] | ProviderServicesUncheckedCreateWithoutService_providerInput[]
    connectOrCreate?: ProviderServicesCreateOrConnectWithoutService_providerInput | ProviderServicesCreateOrConnectWithoutService_providerInput[]
    createMany?: ProviderServicesCreateManyService_providerInputEnvelope
    connect?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
  }

  export type ProviderServicesUncheckedCreateNestedManyWithoutService_providerInput = {
    create?: XOR<ProviderServicesCreateWithoutService_providerInput, ProviderServicesUncheckedCreateWithoutService_providerInput> | ProviderServicesCreateWithoutService_providerInput[] | ProviderServicesUncheckedCreateWithoutService_providerInput[]
    connectOrCreate?: ProviderServicesCreateOrConnectWithoutService_providerInput | ProviderServicesCreateOrConnectWithoutService_providerInput[]
    createMany?: ProviderServicesCreateManyService_providerInputEnvelope
    connect?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
  }

  export type EnumProvider_StatusFieldUpdateOperationsInput = {
    set?: $Enums.Provider_Status
  }

  export type UserUpdateOneRequiredWithoutService_providerNestedInput = {
    create?: XOR<UserCreateWithoutService_providerInput, UserUncheckedCreateWithoutService_providerInput>
    connectOrCreate?: UserCreateOrConnectWithoutService_providerInput
    upsert?: UserUpsertWithoutService_providerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutService_providerInput, UserUpdateWithoutService_providerInput>, UserUncheckedUpdateWithoutService_providerInput>
  }

  export type ProviderServicesUpdateManyWithoutService_providerNestedInput = {
    create?: XOR<ProviderServicesCreateWithoutService_providerInput, ProviderServicesUncheckedCreateWithoutService_providerInput> | ProviderServicesCreateWithoutService_providerInput[] | ProviderServicesUncheckedCreateWithoutService_providerInput[]
    connectOrCreate?: ProviderServicesCreateOrConnectWithoutService_providerInput | ProviderServicesCreateOrConnectWithoutService_providerInput[]
    upsert?: ProviderServicesUpsertWithWhereUniqueWithoutService_providerInput | ProviderServicesUpsertWithWhereUniqueWithoutService_providerInput[]
    createMany?: ProviderServicesCreateManyService_providerInputEnvelope
    set?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
    disconnect?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
    delete?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
    connect?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
    update?: ProviderServicesUpdateWithWhereUniqueWithoutService_providerInput | ProviderServicesUpdateWithWhereUniqueWithoutService_providerInput[]
    updateMany?: ProviderServicesUpdateManyWithWhereWithoutService_providerInput | ProviderServicesUpdateManyWithWhereWithoutService_providerInput[]
    deleteMany?: ProviderServicesScalarWhereInput | ProviderServicesScalarWhereInput[]
  }

  export type ProviderServicesUncheckedUpdateManyWithoutService_providerNestedInput = {
    create?: XOR<ProviderServicesCreateWithoutService_providerInput, ProviderServicesUncheckedCreateWithoutService_providerInput> | ProviderServicesCreateWithoutService_providerInput[] | ProviderServicesUncheckedCreateWithoutService_providerInput[]
    connectOrCreate?: ProviderServicesCreateOrConnectWithoutService_providerInput | ProviderServicesCreateOrConnectWithoutService_providerInput[]
    upsert?: ProviderServicesUpsertWithWhereUniqueWithoutService_providerInput | ProviderServicesUpsertWithWhereUniqueWithoutService_providerInput[]
    createMany?: ProviderServicesCreateManyService_providerInputEnvelope
    set?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
    disconnect?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
    delete?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
    connect?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
    update?: ProviderServicesUpdateWithWhereUniqueWithoutService_providerInput | ProviderServicesUpdateWithWhereUniqueWithoutService_providerInput[]
    updateMany?: ProviderServicesUpdateManyWithWhereWithoutService_providerInput | ProviderServicesUpdateManyWithWhereWithoutService_providerInput[]
    deleteMany?: ProviderServicesScalarWhereInput | ProviderServicesScalarWhereInput[]
  }

  export type ProviderServicesCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProviderServicesCreateWithoutServiceInput, ProviderServicesUncheckedCreateWithoutServiceInput> | ProviderServicesCreateWithoutServiceInput[] | ProviderServicesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProviderServicesCreateOrConnectWithoutServiceInput | ProviderServicesCreateOrConnectWithoutServiceInput[]
    createMany?: ProviderServicesCreateManyServiceInputEnvelope
    connect?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
  }

  export type Service_CategoryCreateNestedManyWithoutServiceInput = {
    create?: XOR<Service_CategoryCreateWithoutServiceInput, Service_CategoryUncheckedCreateWithoutServiceInput> | Service_CategoryCreateWithoutServiceInput[] | Service_CategoryUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: Service_CategoryCreateOrConnectWithoutServiceInput | Service_CategoryCreateOrConnectWithoutServiceInput[]
    createMany?: Service_CategoryCreateManyServiceInputEnvelope
    connect?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
  }

  export type ProviderServicesUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProviderServicesCreateWithoutServiceInput, ProviderServicesUncheckedCreateWithoutServiceInput> | ProviderServicesCreateWithoutServiceInput[] | ProviderServicesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProviderServicesCreateOrConnectWithoutServiceInput | ProviderServicesCreateOrConnectWithoutServiceInput[]
    createMany?: ProviderServicesCreateManyServiceInputEnvelope
    connect?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
  }

  export type Service_CategoryUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<Service_CategoryCreateWithoutServiceInput, Service_CategoryUncheckedCreateWithoutServiceInput> | Service_CategoryCreateWithoutServiceInput[] | Service_CategoryUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: Service_CategoryCreateOrConnectWithoutServiceInput | Service_CategoryCreateOrConnectWithoutServiceInput[]
    createMany?: Service_CategoryCreateManyServiceInputEnvelope
    connect?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
  }

  export type ProviderServicesUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ProviderServicesCreateWithoutServiceInput, ProviderServicesUncheckedCreateWithoutServiceInput> | ProviderServicesCreateWithoutServiceInput[] | ProviderServicesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProviderServicesCreateOrConnectWithoutServiceInput | ProviderServicesCreateOrConnectWithoutServiceInput[]
    upsert?: ProviderServicesUpsertWithWhereUniqueWithoutServiceInput | ProviderServicesUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ProviderServicesCreateManyServiceInputEnvelope
    set?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
    disconnect?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
    delete?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
    connect?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
    update?: ProviderServicesUpdateWithWhereUniqueWithoutServiceInput | ProviderServicesUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ProviderServicesUpdateManyWithWhereWithoutServiceInput | ProviderServicesUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ProviderServicesScalarWhereInput | ProviderServicesScalarWhereInput[]
  }

  export type Service_CategoryUpdateManyWithoutServiceNestedInput = {
    create?: XOR<Service_CategoryCreateWithoutServiceInput, Service_CategoryUncheckedCreateWithoutServiceInput> | Service_CategoryCreateWithoutServiceInput[] | Service_CategoryUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: Service_CategoryCreateOrConnectWithoutServiceInput | Service_CategoryCreateOrConnectWithoutServiceInput[]
    upsert?: Service_CategoryUpsertWithWhereUniqueWithoutServiceInput | Service_CategoryUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: Service_CategoryCreateManyServiceInputEnvelope
    set?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
    disconnect?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
    delete?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
    connect?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
    update?: Service_CategoryUpdateWithWhereUniqueWithoutServiceInput | Service_CategoryUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: Service_CategoryUpdateManyWithWhereWithoutServiceInput | Service_CategoryUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: Service_CategoryScalarWhereInput | Service_CategoryScalarWhereInput[]
  }

  export type ProviderServicesUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ProviderServicesCreateWithoutServiceInput, ProviderServicesUncheckedCreateWithoutServiceInput> | ProviderServicesCreateWithoutServiceInput[] | ProviderServicesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProviderServicesCreateOrConnectWithoutServiceInput | ProviderServicesCreateOrConnectWithoutServiceInput[]
    upsert?: ProviderServicesUpsertWithWhereUniqueWithoutServiceInput | ProviderServicesUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ProviderServicesCreateManyServiceInputEnvelope
    set?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
    disconnect?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
    delete?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
    connect?: ProviderServicesWhereUniqueInput | ProviderServicesWhereUniqueInput[]
    update?: ProviderServicesUpdateWithWhereUniqueWithoutServiceInput | ProviderServicesUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ProviderServicesUpdateManyWithWhereWithoutServiceInput | ProviderServicesUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ProviderServicesScalarWhereInput | ProviderServicesScalarWhereInput[]
  }

  export type Service_CategoryUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<Service_CategoryCreateWithoutServiceInput, Service_CategoryUncheckedCreateWithoutServiceInput> | Service_CategoryCreateWithoutServiceInput[] | Service_CategoryUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: Service_CategoryCreateOrConnectWithoutServiceInput | Service_CategoryCreateOrConnectWithoutServiceInput[]
    upsert?: Service_CategoryUpsertWithWhereUniqueWithoutServiceInput | Service_CategoryUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: Service_CategoryCreateManyServiceInputEnvelope
    set?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
    disconnect?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
    delete?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
    connect?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
    update?: Service_CategoryUpdateWithWhereUniqueWithoutServiceInput | Service_CategoryUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: Service_CategoryUpdateManyWithWhereWithoutServiceInput | Service_CategoryUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: Service_CategoryScalarWhereInput | Service_CategoryScalarWhereInput[]
  }

  export type Service_ProviderCreateNestedOneWithoutProviderServicesInput = {
    create?: XOR<Service_ProviderCreateWithoutProviderServicesInput, Service_ProviderUncheckedCreateWithoutProviderServicesInput>
    connectOrCreate?: Service_ProviderCreateOrConnectWithoutProviderServicesInput
    connect?: Service_ProviderWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutProviderServicesInput = {
    create?: XOR<ServiceCreateWithoutProviderServicesInput, ServiceUncheckedCreateWithoutProviderServicesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutProviderServicesInput
    connect?: ServiceWhereUniqueInput
  }

  export type Service_ProviderUpdateOneRequiredWithoutProviderServicesNestedInput = {
    create?: XOR<Service_ProviderCreateWithoutProviderServicesInput, Service_ProviderUncheckedCreateWithoutProviderServicesInput>
    connectOrCreate?: Service_ProviderCreateOrConnectWithoutProviderServicesInput
    upsert?: Service_ProviderUpsertWithoutProviderServicesInput
    connect?: Service_ProviderWhereUniqueInput
    update?: XOR<XOR<Service_ProviderUpdateToOneWithWhereWithoutProviderServicesInput, Service_ProviderUpdateWithoutProviderServicesInput>, Service_ProviderUncheckedUpdateWithoutProviderServicesInput>
  }

  export type ServiceUpdateOneRequiredWithoutProviderServicesNestedInput = {
    create?: XOR<ServiceCreateWithoutProviderServicesInput, ServiceUncheckedCreateWithoutProviderServicesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutProviderServicesInput
    upsert?: ServiceUpsertWithoutProviderServicesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutProviderServicesInput, ServiceUpdateWithoutProviderServicesInput>, ServiceUncheckedUpdateWithoutProviderServicesInput>
  }

  export type Parent_categoryCreateNestedOneWithoutCategoryInput = {
    create?: XOR<Parent_categoryCreateWithoutCategoryInput, Parent_categoryUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: Parent_categoryCreateOrConnectWithoutCategoryInput
    connect?: Parent_categoryWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutCategoryInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput
    connect?: ServiceWhereUniqueInput
  }

  export type Parent_categoryUpdateOneRequiredWithoutCategoryNestedInput = {
    create?: XOR<Parent_categoryCreateWithoutCategoryInput, Parent_categoryUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: Parent_categoryCreateOrConnectWithoutCategoryInput
    upsert?: Parent_categoryUpsertWithoutCategoryInput
    connect?: Parent_categoryWhereUniqueInput
    update?: XOR<XOR<Parent_categoryUpdateToOneWithWhereWithoutCategoryInput, Parent_categoryUpdateWithoutCategoryInput>, Parent_categoryUncheckedUpdateWithoutCategoryInput>
  }

  export type ServiceUpdateOneWithoutCategoryNestedInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput
    upsert?: ServiceUpsertWithoutCategoryInput
    disconnect?: ServiceWhereInput | boolean
    delete?: ServiceWhereInput | boolean
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutCategoryInput, ServiceUpdateWithoutCategoryInput>, ServiceUncheckedUpdateWithoutCategoryInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Service_CategoryCreateNestedManyWithoutParent_categoryInput = {
    create?: XOR<Service_CategoryCreateWithoutParent_categoryInput, Service_CategoryUncheckedCreateWithoutParent_categoryInput> | Service_CategoryCreateWithoutParent_categoryInput[] | Service_CategoryUncheckedCreateWithoutParent_categoryInput[]
    connectOrCreate?: Service_CategoryCreateOrConnectWithoutParent_categoryInput | Service_CategoryCreateOrConnectWithoutParent_categoryInput[]
    createMany?: Service_CategoryCreateManyParent_categoryInputEnvelope
    connect?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
  }

  export type Service_CategoryUncheckedCreateNestedManyWithoutParent_categoryInput = {
    create?: XOR<Service_CategoryCreateWithoutParent_categoryInput, Service_CategoryUncheckedCreateWithoutParent_categoryInput> | Service_CategoryCreateWithoutParent_categoryInput[] | Service_CategoryUncheckedCreateWithoutParent_categoryInput[]
    connectOrCreate?: Service_CategoryCreateOrConnectWithoutParent_categoryInput | Service_CategoryCreateOrConnectWithoutParent_categoryInput[]
    createMany?: Service_CategoryCreateManyParent_categoryInputEnvelope
    connect?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
  }

  export type Service_CategoryUpdateManyWithoutParent_categoryNestedInput = {
    create?: XOR<Service_CategoryCreateWithoutParent_categoryInput, Service_CategoryUncheckedCreateWithoutParent_categoryInput> | Service_CategoryCreateWithoutParent_categoryInput[] | Service_CategoryUncheckedCreateWithoutParent_categoryInput[]
    connectOrCreate?: Service_CategoryCreateOrConnectWithoutParent_categoryInput | Service_CategoryCreateOrConnectWithoutParent_categoryInput[]
    upsert?: Service_CategoryUpsertWithWhereUniqueWithoutParent_categoryInput | Service_CategoryUpsertWithWhereUniqueWithoutParent_categoryInput[]
    createMany?: Service_CategoryCreateManyParent_categoryInputEnvelope
    set?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
    disconnect?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
    delete?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
    connect?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
    update?: Service_CategoryUpdateWithWhereUniqueWithoutParent_categoryInput | Service_CategoryUpdateWithWhereUniqueWithoutParent_categoryInput[]
    updateMany?: Service_CategoryUpdateManyWithWhereWithoutParent_categoryInput | Service_CategoryUpdateManyWithWhereWithoutParent_categoryInput[]
    deleteMany?: Service_CategoryScalarWhereInput | Service_CategoryScalarWhereInput[]
  }

  export type Service_CategoryUncheckedUpdateManyWithoutParent_categoryNestedInput = {
    create?: XOR<Service_CategoryCreateWithoutParent_categoryInput, Service_CategoryUncheckedCreateWithoutParent_categoryInput> | Service_CategoryCreateWithoutParent_categoryInput[] | Service_CategoryUncheckedCreateWithoutParent_categoryInput[]
    connectOrCreate?: Service_CategoryCreateOrConnectWithoutParent_categoryInput | Service_CategoryCreateOrConnectWithoutParent_categoryInput[]
    upsert?: Service_CategoryUpsertWithWhereUniqueWithoutParent_categoryInput | Service_CategoryUpsertWithWhereUniqueWithoutParent_categoryInput[]
    createMany?: Service_CategoryCreateManyParent_categoryInputEnvelope
    set?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
    disconnect?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
    delete?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
    connect?: Service_CategoryWhereUniqueInput | Service_CategoryWhereUniqueInput[]
    update?: Service_CategoryUpdateWithWhereUniqueWithoutParent_categoryInput | Service_CategoryUpdateWithWhereUniqueWithoutParent_categoryInput[]
    updateMany?: Service_CategoryUpdateManyWithWhereWithoutParent_categoryInput | Service_CategoryUpdateManyWithWhereWithoutParent_categoryInput[]
    deleteMany?: Service_CategoryScalarWhereInput | Service_CategoryScalarWhereInput[]
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUSER_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_STATUS | EnumUSER_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.USER_STATUS[] | ListEnumUSER_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_STATUS[] | ListEnumUSER_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_STATUSFilter<$PrismaModel> | $Enums.USER_STATUS
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUSER_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_STATUS | EnumUSER_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.USER_STATUS[] | ListEnumUSER_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_STATUS[] | ListEnumUSER_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.USER_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUSER_STATUSFilter<$PrismaModel>
    _max?: NestedEnumUSER_STATUSFilter<$PrismaModel>
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

  export type NestedEnumProvider_StatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider_Status | EnumProvider_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Provider_Status[] | ListEnumProvider_StatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider_Status[] | ListEnumProvider_StatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProvider_StatusFilter<$PrismaModel> | $Enums.Provider_Status
  }

  export type NestedEnumProvider_StatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider_Status | EnumProvider_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.Provider_Status[] | ListEnumProvider_StatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Provider_Status[] | ListEnumProvider_StatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProvider_StatusWithAggregatesFilter<$PrismaModel> | $Enums.Provider_Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProvider_StatusFilter<$PrismaModel>
    _max?: NestedEnumProvider_StatusFilter<$PrismaModel>
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

  export type UserCreateWithoutAddressInput = {
    user_id?: string
    email: string
    password: string
    fullName: string
    phone: string
    role?: $Enums.UserRole
    is_verified?: boolean
    status?: $Enums.USER_STATUS
    createdAt?: Date | string
    updatedAt?: Date | string
    service_provider?: Service_ProviderCreateNestedOneWithoutUserInput
    Admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressInput = {
    user_id?: string
    email: string
    password: string
    fullName: string
    phone: string
    role?: $Enums.UserRole
    is_verified?: boolean
    status?: $Enums.USER_STATUS
    createdAt?: Date | string
    updatedAt?: Date | string
    service_provider?: Service_ProviderUncheckedCreateNestedOneWithoutUserInput
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
  }

  export type UserUpsertWithoutAddressInput = {
    update: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
  }

  export type UserUpdateWithoutAddressInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUSER_STATUSFieldUpdateOperationsInput | $Enums.USER_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service_provider?: Service_ProviderUpdateOneWithoutUserNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUSER_STATUSFieldUpdateOperationsInput | $Enums.USER_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service_provider?: Service_ProviderUncheckedUpdateOneWithoutUserNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AddressCreateWithoutUserInput = {
    address_id?: string
    street_address: string
    city: string
    state: string
    postal_code: number
    latitude: number
    longitude: number
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    address_id?: string
    street_address: string
    city: string
    state: string
    postal_code: number
    latitude: number
    longitude: number
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type Service_ProviderCreateWithoutUserInput = {
    id?: string
    fullName: string
    business_name: string
    business_license: number
    nid_number: number
    govt_id_or_tin: number
    facebook_profile: string
    website_link: string
    area_name: string
    postal_code: number
    category: string
    status?: $Enums.Provider_Status
    is_apporved?: boolean
    submitted_at?: Date | string
    providerServices?: ProviderServicesCreateNestedManyWithoutService_providerInput
  }

  export type Service_ProviderUncheckedCreateWithoutUserInput = {
    id?: string
    fullName: string
    business_name: string
    business_license: number
    nid_number: number
    govt_id_or_tin: number
    facebook_profile: string
    website_link: string
    area_name: string
    postal_code: number
    category: string
    status?: $Enums.Provider_Status
    is_apporved?: boolean
    submitted_at?: Date | string
    providerServices?: ProviderServicesUncheckedCreateNestedManyWithoutService_providerInput
  }

  export type Service_ProviderCreateOrConnectWithoutUserInput = {
    where: Service_ProviderWhereUniqueInput
    create: XOR<Service_ProviderCreateWithoutUserInput, Service_ProviderUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateWithoutUserInput = {
    id?: string
    fullName: string
    is_deleted?: boolean
    createdAt?: Date | string
    updated?: Date | string
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: string
    fullName: string
    is_deleted?: boolean
    createdAt?: Date | string
    updated?: Date | string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type AddressUpsertWithoutUserInput = {
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutUserInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateWithoutUserInput = {
    address_id?: StringFieldUpdateOperationsInput | string
    street_address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    address_id?: StringFieldUpdateOperationsInput | string
    street_address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type Service_ProviderUpsertWithoutUserInput = {
    update: XOR<Service_ProviderUpdateWithoutUserInput, Service_ProviderUncheckedUpdateWithoutUserInput>
    create: XOR<Service_ProviderCreateWithoutUserInput, Service_ProviderUncheckedCreateWithoutUserInput>
    where?: Service_ProviderWhereInput
  }

  export type Service_ProviderUpdateToOneWithWhereWithoutUserInput = {
    where?: Service_ProviderWhereInput
    data: XOR<Service_ProviderUpdateWithoutUserInput, Service_ProviderUncheckedUpdateWithoutUserInput>
  }

  export type Service_ProviderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: IntFieldUpdateOperationsInput | number
    nid_number?: IntFieldUpdateOperationsInput | number
    govt_id_or_tin?: IntFieldUpdateOperationsInput | number
    facebook_profile?: StringFieldUpdateOperationsInput | string
    website_link?: StringFieldUpdateOperationsInput | string
    area_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumProvider_StatusFieldUpdateOperationsInput | $Enums.Provider_Status
    is_apporved?: BoolFieldUpdateOperationsInput | boolean
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServicesUpdateManyWithoutService_providerNestedInput
  }

  export type Service_ProviderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: IntFieldUpdateOperationsInput | number
    nid_number?: IntFieldUpdateOperationsInput | number
    govt_id_or_tin?: IntFieldUpdateOperationsInput | number
    facebook_profile?: StringFieldUpdateOperationsInput | string
    website_link?: StringFieldUpdateOperationsInput | string
    area_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumProvider_StatusFieldUpdateOperationsInput | $Enums.Provider_Status
    is_apporved?: BoolFieldUpdateOperationsInput | boolean
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServicesUncheckedUpdateManyWithoutService_providerNestedInput
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAdminInput = {
    user_id?: string
    email: string
    password: string
    fullName: string
    phone: string
    role?: $Enums.UserRole
    is_verified?: boolean
    status?: $Enums.USER_STATUS
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutUserInput
    service_provider?: Service_ProviderCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    user_id?: string
    email: string
    password: string
    fullName: string
    phone: string
    role?: $Enums.UserRole
    is_verified?: boolean
    status?: $Enums.USER_STATUS
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutUserInput
    service_provider?: Service_ProviderUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUSER_STATUSFieldUpdateOperationsInput | $Enums.USER_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutUserNestedInput
    service_provider?: Service_ProviderUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUSER_STATUSFieldUpdateOperationsInput | $Enums.USER_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutUserNestedInput
    service_provider?: Service_ProviderUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutService_providerInput = {
    user_id?: string
    email: string
    password: string
    fullName: string
    phone: string
    role?: $Enums.UserRole
    is_verified?: boolean
    status?: $Enums.USER_STATUS
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutUserInput
    Admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutService_providerInput = {
    user_id?: string
    email: string
    password: string
    fullName: string
    phone: string
    role?: $Enums.UserRole
    is_verified?: boolean
    status?: $Enums.USER_STATUS
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutUserInput
    Admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutService_providerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutService_providerInput, UserUncheckedCreateWithoutService_providerInput>
  }

  export type ProviderServicesCreateWithoutService_providerInput = {
    service: ServiceCreateNestedOneWithoutProviderServicesInput
  }

  export type ProviderServicesUncheckedCreateWithoutService_providerInput = {
    serviceId: string
  }

  export type ProviderServicesCreateOrConnectWithoutService_providerInput = {
    where: ProviderServicesWhereUniqueInput
    create: XOR<ProviderServicesCreateWithoutService_providerInput, ProviderServicesUncheckedCreateWithoutService_providerInput>
  }

  export type ProviderServicesCreateManyService_providerInputEnvelope = {
    data: ProviderServicesCreateManyService_providerInput | ProviderServicesCreateManyService_providerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutService_providerInput = {
    update: XOR<UserUpdateWithoutService_providerInput, UserUncheckedUpdateWithoutService_providerInput>
    create: XOR<UserCreateWithoutService_providerInput, UserUncheckedCreateWithoutService_providerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutService_providerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutService_providerInput, UserUncheckedUpdateWithoutService_providerInput>
  }

  export type UserUpdateWithoutService_providerInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUSER_STATUSFieldUpdateOperationsInput | $Enums.USER_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutUserNestedInput
    Admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutService_providerInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUSER_STATUSFieldUpdateOperationsInput | $Enums.USER_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutUserNestedInput
    Admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProviderServicesUpsertWithWhereUniqueWithoutService_providerInput = {
    where: ProviderServicesWhereUniqueInput
    update: XOR<ProviderServicesUpdateWithoutService_providerInput, ProviderServicesUncheckedUpdateWithoutService_providerInput>
    create: XOR<ProviderServicesCreateWithoutService_providerInput, ProviderServicesUncheckedCreateWithoutService_providerInput>
  }

  export type ProviderServicesUpdateWithWhereUniqueWithoutService_providerInput = {
    where: ProviderServicesWhereUniqueInput
    data: XOR<ProviderServicesUpdateWithoutService_providerInput, ProviderServicesUncheckedUpdateWithoutService_providerInput>
  }

  export type ProviderServicesUpdateManyWithWhereWithoutService_providerInput = {
    where: ProviderServicesScalarWhereInput
    data: XOR<ProviderServicesUpdateManyMutationInput, ProviderServicesUncheckedUpdateManyWithoutService_providerInput>
  }

  export type ProviderServicesScalarWhereInput = {
    AND?: ProviderServicesScalarWhereInput | ProviderServicesScalarWhereInput[]
    OR?: ProviderServicesScalarWhereInput[]
    NOT?: ProviderServicesScalarWhereInput | ProviderServicesScalarWhereInput[]
    providerId?: StringFilter<"ProviderServices"> | string
    serviceId?: StringFilter<"ProviderServices"> | string
  }

  export type ProviderServicesCreateWithoutServiceInput = {
    service_provider: Service_ProviderCreateNestedOneWithoutProviderServicesInput
  }

  export type ProviderServicesUncheckedCreateWithoutServiceInput = {
    providerId: string
  }

  export type ProviderServicesCreateOrConnectWithoutServiceInput = {
    where: ProviderServicesWhereUniqueInput
    create: XOR<ProviderServicesCreateWithoutServiceInput, ProviderServicesUncheckedCreateWithoutServiceInput>
  }

  export type ProviderServicesCreateManyServiceInputEnvelope = {
    data: ProviderServicesCreateManyServiceInput | ProviderServicesCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type Service_CategoryCreateWithoutServiceInput = {
    id?: string
    name: string
    icon: string
    description: string
    is_Active: boolean
    parent_category: Parent_categoryCreateNestedOneWithoutCategoryInput
  }

  export type Service_CategoryUncheckedCreateWithoutServiceInput = {
    id?: string
    name: string
    icon: string
    description: string
    is_Active: boolean
    parent_categoryId: string
  }

  export type Service_CategoryCreateOrConnectWithoutServiceInput = {
    where: Service_CategoryWhereUniqueInput
    create: XOR<Service_CategoryCreateWithoutServiceInput, Service_CategoryUncheckedCreateWithoutServiceInput>
  }

  export type Service_CategoryCreateManyServiceInputEnvelope = {
    data: Service_CategoryCreateManyServiceInput | Service_CategoryCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ProviderServicesUpsertWithWhereUniqueWithoutServiceInput = {
    where: ProviderServicesWhereUniqueInput
    update: XOR<ProviderServicesUpdateWithoutServiceInput, ProviderServicesUncheckedUpdateWithoutServiceInput>
    create: XOR<ProviderServicesCreateWithoutServiceInput, ProviderServicesUncheckedCreateWithoutServiceInput>
  }

  export type ProviderServicesUpdateWithWhereUniqueWithoutServiceInput = {
    where: ProviderServicesWhereUniqueInput
    data: XOR<ProviderServicesUpdateWithoutServiceInput, ProviderServicesUncheckedUpdateWithoutServiceInput>
  }

  export type ProviderServicesUpdateManyWithWhereWithoutServiceInput = {
    where: ProviderServicesScalarWhereInput
    data: XOR<ProviderServicesUpdateManyMutationInput, ProviderServicesUncheckedUpdateManyWithoutServiceInput>
  }

  export type Service_CategoryUpsertWithWhereUniqueWithoutServiceInput = {
    where: Service_CategoryWhereUniqueInput
    update: XOR<Service_CategoryUpdateWithoutServiceInput, Service_CategoryUncheckedUpdateWithoutServiceInput>
    create: XOR<Service_CategoryCreateWithoutServiceInput, Service_CategoryUncheckedCreateWithoutServiceInput>
  }

  export type Service_CategoryUpdateWithWhereUniqueWithoutServiceInput = {
    where: Service_CategoryWhereUniqueInput
    data: XOR<Service_CategoryUpdateWithoutServiceInput, Service_CategoryUncheckedUpdateWithoutServiceInput>
  }

  export type Service_CategoryUpdateManyWithWhereWithoutServiceInput = {
    where: Service_CategoryScalarWhereInput
    data: XOR<Service_CategoryUpdateManyMutationInput, Service_CategoryUncheckedUpdateManyWithoutServiceInput>
  }

  export type Service_CategoryScalarWhereInput = {
    AND?: Service_CategoryScalarWhereInput | Service_CategoryScalarWhereInput[]
    OR?: Service_CategoryScalarWhereInput[]
    NOT?: Service_CategoryScalarWhereInput | Service_CategoryScalarWhereInput[]
    id?: StringFilter<"Service_Category"> | string
    name?: StringFilter<"Service_Category"> | string
    icon?: StringFilter<"Service_Category"> | string
    description?: StringFilter<"Service_Category"> | string
    is_Active?: BoolFilter<"Service_Category"> | boolean
    parent_categoryId?: StringFilter<"Service_Category"> | string
    service_id?: StringNullableFilter<"Service_Category"> | string | null
  }

  export type Service_ProviderCreateWithoutProviderServicesInput = {
    id?: string
    fullName: string
    business_name: string
    business_license: number
    nid_number: number
    govt_id_or_tin: number
    facebook_profile: string
    website_link: string
    area_name: string
    postal_code: number
    category: string
    status?: $Enums.Provider_Status
    is_apporved?: boolean
    submitted_at?: Date | string
    user: UserCreateNestedOneWithoutService_providerInput
  }

  export type Service_ProviderUncheckedCreateWithoutProviderServicesInput = {
    id?: string
    email: string
    fullName: string
    business_name: string
    business_license: number
    nid_number: number
    govt_id_or_tin: number
    facebook_profile: string
    website_link: string
    area_name: string
    postal_code: number
    category: string
    status?: $Enums.Provider_Status
    is_apporved?: boolean
    submitted_at?: Date | string
  }

  export type Service_ProviderCreateOrConnectWithoutProviderServicesInput = {
    where: Service_ProviderWhereUniqueInput
    create: XOR<Service_ProviderCreateWithoutProviderServicesInput, Service_ProviderUncheckedCreateWithoutProviderServicesInput>
  }

  export type ServiceCreateWithoutProviderServicesInput = {
    id?: string
    title: string
    description: string
    base_price: number
    price_unit: string
    estimed_duration: string
    is_featured?: boolean
    avg_rating?: number
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: Service_CategoryCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutProviderServicesInput = {
    id?: string
    title: string
    description: string
    base_price: number
    price_unit: string
    estimed_duration: string
    is_featured?: boolean
    avg_rating?: number
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: Service_CategoryUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutProviderServicesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutProviderServicesInput, ServiceUncheckedCreateWithoutProviderServicesInput>
  }

  export type Service_ProviderUpsertWithoutProviderServicesInput = {
    update: XOR<Service_ProviderUpdateWithoutProviderServicesInput, Service_ProviderUncheckedUpdateWithoutProviderServicesInput>
    create: XOR<Service_ProviderCreateWithoutProviderServicesInput, Service_ProviderUncheckedCreateWithoutProviderServicesInput>
    where?: Service_ProviderWhereInput
  }

  export type Service_ProviderUpdateToOneWithWhereWithoutProviderServicesInput = {
    where?: Service_ProviderWhereInput
    data: XOR<Service_ProviderUpdateWithoutProviderServicesInput, Service_ProviderUncheckedUpdateWithoutProviderServicesInput>
  }

  export type Service_ProviderUpdateWithoutProviderServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: IntFieldUpdateOperationsInput | number
    nid_number?: IntFieldUpdateOperationsInput | number
    govt_id_or_tin?: IntFieldUpdateOperationsInput | number
    facebook_profile?: StringFieldUpdateOperationsInput | string
    website_link?: StringFieldUpdateOperationsInput | string
    area_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumProvider_StatusFieldUpdateOperationsInput | $Enums.Provider_Status
    is_apporved?: BoolFieldUpdateOperationsInput | boolean
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutService_providerNestedInput
  }

  export type Service_ProviderUncheckedUpdateWithoutProviderServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_license?: IntFieldUpdateOperationsInput | number
    nid_number?: IntFieldUpdateOperationsInput | number
    govt_id_or_tin?: IntFieldUpdateOperationsInput | number
    facebook_profile?: StringFieldUpdateOperationsInput | string
    website_link?: StringFieldUpdateOperationsInput | string
    area_name?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumProvider_StatusFieldUpdateOperationsInput | $Enums.Provider_Status
    is_apporved?: BoolFieldUpdateOperationsInput | boolean
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUpsertWithoutProviderServicesInput = {
    update: XOR<ServiceUpdateWithoutProviderServicesInput, ServiceUncheckedUpdateWithoutProviderServicesInput>
    create: XOR<ServiceCreateWithoutProviderServicesInput, ServiceUncheckedCreateWithoutProviderServicesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutProviderServicesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutProviderServicesInput, ServiceUncheckedUpdateWithoutProviderServicesInput>
  }

  export type ServiceUpdateWithoutProviderServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    base_price?: FloatFieldUpdateOperationsInput | number
    price_unit?: StringFieldUpdateOperationsInput | string
    estimed_duration?: StringFieldUpdateOperationsInput | string
    is_featured?: BoolFieldUpdateOperationsInput | boolean
    avg_rating?: FloatFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: Service_CategoryUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutProviderServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    base_price?: FloatFieldUpdateOperationsInput | number
    price_unit?: StringFieldUpdateOperationsInput | string
    estimed_duration?: StringFieldUpdateOperationsInput | string
    is_featured?: BoolFieldUpdateOperationsInput | boolean
    avg_rating?: FloatFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: Service_CategoryUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type Parent_categoryCreateWithoutCategoryInput = {
    id?: string
    name: string
    icon: string
    description: string
    is_Active: boolean
  }

  export type Parent_categoryUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    icon: string
    description: string
    is_Active: boolean
  }

  export type Parent_categoryCreateOrConnectWithoutCategoryInput = {
    where: Parent_categoryWhereUniqueInput
    create: XOR<Parent_categoryCreateWithoutCategoryInput, Parent_categoryUncheckedCreateWithoutCategoryInput>
  }

  export type ServiceCreateWithoutCategoryInput = {
    id?: string
    title: string
    description: string
    base_price: number
    price_unit: string
    estimed_duration: string
    is_featured?: boolean
    avg_rating?: number
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerServices?: ProviderServicesCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    description: string
    base_price: number
    price_unit: string
    estimed_duration: string
    is_featured?: boolean
    avg_rating?: number
    is_active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerServices?: ProviderServicesUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
  }

  export type Parent_categoryUpsertWithoutCategoryInput = {
    update: XOR<Parent_categoryUpdateWithoutCategoryInput, Parent_categoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<Parent_categoryCreateWithoutCategoryInput, Parent_categoryUncheckedCreateWithoutCategoryInput>
    where?: Parent_categoryWhereInput
  }

  export type Parent_categoryUpdateToOneWithWhereWithoutCategoryInput = {
    where?: Parent_categoryWhereInput
    data: XOR<Parent_categoryUpdateWithoutCategoryInput, Parent_categoryUncheckedUpdateWithoutCategoryInput>
  }

  export type Parent_categoryUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Parent_categoryUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceUpsertWithoutCategoryInput = {
    update: XOR<ServiceUpdateWithoutCategoryInput, ServiceUncheckedUpdateWithoutCategoryInput>
    create: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutCategoryInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutCategoryInput, ServiceUncheckedUpdateWithoutCategoryInput>
  }

  export type ServiceUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    base_price?: FloatFieldUpdateOperationsInput | number
    price_unit?: StringFieldUpdateOperationsInput | string
    estimed_duration?: StringFieldUpdateOperationsInput | string
    is_featured?: BoolFieldUpdateOperationsInput | boolean
    avg_rating?: FloatFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServicesUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    base_price?: FloatFieldUpdateOperationsInput | number
    price_unit?: StringFieldUpdateOperationsInput | string
    estimed_duration?: StringFieldUpdateOperationsInput | string
    is_featured?: BoolFieldUpdateOperationsInput | boolean
    avg_rating?: FloatFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServicesUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type Service_CategoryCreateWithoutParent_categoryInput = {
    id?: string
    name: string
    icon: string
    description: string
    is_Active: boolean
    service?: ServiceCreateNestedOneWithoutCategoryInput
  }

  export type Service_CategoryUncheckedCreateWithoutParent_categoryInput = {
    id?: string
    name: string
    icon: string
    description: string
    is_Active: boolean
    service_id?: string | null
  }

  export type Service_CategoryCreateOrConnectWithoutParent_categoryInput = {
    where: Service_CategoryWhereUniqueInput
    create: XOR<Service_CategoryCreateWithoutParent_categoryInput, Service_CategoryUncheckedCreateWithoutParent_categoryInput>
  }

  export type Service_CategoryCreateManyParent_categoryInputEnvelope = {
    data: Service_CategoryCreateManyParent_categoryInput | Service_CategoryCreateManyParent_categoryInput[]
    skipDuplicates?: boolean
  }

  export type Service_CategoryUpsertWithWhereUniqueWithoutParent_categoryInput = {
    where: Service_CategoryWhereUniqueInput
    update: XOR<Service_CategoryUpdateWithoutParent_categoryInput, Service_CategoryUncheckedUpdateWithoutParent_categoryInput>
    create: XOR<Service_CategoryCreateWithoutParent_categoryInput, Service_CategoryUncheckedCreateWithoutParent_categoryInput>
  }

  export type Service_CategoryUpdateWithWhereUniqueWithoutParent_categoryInput = {
    where: Service_CategoryWhereUniqueInput
    data: XOR<Service_CategoryUpdateWithoutParent_categoryInput, Service_CategoryUncheckedUpdateWithoutParent_categoryInput>
  }

  export type Service_CategoryUpdateManyWithWhereWithoutParent_categoryInput = {
    where: Service_CategoryScalarWhereInput
    data: XOR<Service_CategoryUpdateManyMutationInput, Service_CategoryUncheckedUpdateManyWithoutParent_categoryInput>
  }

  export type ProviderServicesCreateManyService_providerInput = {
    serviceId: string
  }

  export type ProviderServicesUpdateWithoutService_providerInput = {
    service?: ServiceUpdateOneRequiredWithoutProviderServicesNestedInput
  }

  export type ProviderServicesUncheckedUpdateWithoutService_providerInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderServicesUncheckedUpdateManyWithoutService_providerInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderServicesCreateManyServiceInput = {
    providerId: string
  }

  export type Service_CategoryCreateManyServiceInput = {
    id?: string
    name: string
    icon: string
    description: string
    is_Active: boolean
    parent_categoryId: string
  }

  export type ProviderServicesUpdateWithoutServiceInput = {
    service_provider?: Service_ProviderUpdateOneRequiredWithoutProviderServicesNestedInput
  }

  export type ProviderServicesUncheckedUpdateWithoutServiceInput = {
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderServicesUncheckedUpdateManyWithoutServiceInput = {
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type Service_CategoryUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    parent_category?: Parent_categoryUpdateOneRequiredWithoutCategoryNestedInput
  }

  export type Service_CategoryUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    parent_categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type Service_CategoryUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    parent_categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type Service_CategoryCreateManyParent_categoryInput = {
    id?: string
    name: string
    icon: string
    description: string
    is_Active: boolean
    service_id?: string | null
  }

  export type Service_CategoryUpdateWithoutParent_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    service?: ServiceUpdateOneWithoutCategoryNestedInput
  }

  export type Service_CategoryUncheckedUpdateWithoutParent_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    service_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Service_CategoryUncheckedUpdateManyWithoutParent_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    service_id?: NullableStringFieldUpdateOperationsInput | string | null
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