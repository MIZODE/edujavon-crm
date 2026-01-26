import { Prisma } from "@prisma/client";

// ===============================
// CREATE INPUTS
// ===============================
export type UserCreateInput = Prisma.UserCreateInput;
export type ProductCreateInput = Prisma.ProductCreateInput;
export type OrderCreateInput = Prisma.OrderCreateInput;

// ===============================
// UPDATE INPUTS
// ===============================
export type UserUpdateInput = Prisma.UserUpdateInput;
export type ProductUpdateInput = Prisma.ProductUpdateInput;

// ===============================
// PAYLOAD TYPES (relations bilan)
// ===============================
export type UserWithOrders = Prisma.UserGetPayload<{
  include: { orders: true };
}>;

export type OrderWithItems = Prisma.OrderGetPayload<{
  include: {
    orderItems: { include: { product: true } };
    user: true;
  };
}>;

// ===============================
// MODEL TYPES
// ===============================
export type {
  User,
  Product,
  Order,
  OrderItem,
} from "@prisma/client";