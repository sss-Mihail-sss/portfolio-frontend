import { faker } from '@faker-js/faker';

export const fakeJobs = Array.from({ length: 100 }).map((_, index) => ({
  id: index,
  title: faker.commerce.productName(),
}));
