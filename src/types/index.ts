import {
  CarouselSchema,
  CartSchema,
  OrderItemSchema,
  ProductInputSchema,
  ShippingAddressSchema,
  UserInputSchema,
  UserNameSchema,
  UserSignInSchema,
  UserSignUpSchema,
} from "@/lib/validator";
import { z } from "zod";
import { SettingInputSchema } from '@/lib/validator';

export type IProductInput = z.infer<typeof ProductInputSchema>;

export type Data = {
  settings: ISettingInput[];
  products: IProductInput[];
  users: IUserInput[];
  headerMenus: {
    name: string;
    href: string;
  }[];
  carousels: {
    image: string;
    url: string;
    title: string;
    buttonCaption: string;
    isPublished: boolean;
  }[];
};
export type OrderItem = z.infer<typeof OrderItemSchema>;
export type Cart = z.infer<typeof CartSchema>;
export type ShippingAddress = z.infer<typeof ShippingAddressSchema>;

// user
export type IUserInput = z.infer<typeof UserInputSchema>
export type IUserSignIn = z.infer<typeof UserSignInSchema>
export type IUserSignUp = z.infer<typeof UserSignUpSchema>
export type IUserName = z.infer<typeof UserNameSchema>
//setting
export type ISettingInput = z.infer<typeof SettingInputSchema>
export type ICarousel = z.infer<typeof CarouselSchema>;


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

/* export type Data = {
  settings: ISettingInput[]
  webPages: IWebPageInput[]
  users: IUserInput[]
  products: IProductInput[]
  reviews: {
    title: string
    rating: number
    comment: string
  }[] */