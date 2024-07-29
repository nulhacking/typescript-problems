import { Equal, Expect } from "../helpers/type-utils";

type Generic<T> = {
  [K in keyof T]?: T[K] | null;
};

interface User {
  id: number;
  name: string;
  email: string;
}

const user1: Generic<User> = {
  id: null,
  name: "John Doe",
};

const user2: Generic<Pick<User, "id" | "name">> = {
  id: null,
  name: "John Doe",
};

type tests = [
  Expect<
    Equal<
      typeof user1,
      {
        id?: number | null | undefined;
        name?: string | null | undefined;
        email?: string | null | undefined;
      }
    >
  >,
  Expect<
    Equal<
      typeof user2,
      {
        id?: number | null | undefined;
        name?: string | null | undefined;
      }
    >
  >
];
