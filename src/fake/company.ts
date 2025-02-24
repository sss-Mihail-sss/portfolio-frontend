import { faker } from '@faker-js/faker';

import { Company } from '@/types/company';

export function generateCompany(id?: number): Company {
  return {
    id: id,
    name: faker.company.name(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
    description: faker.lorem.paragraph(),
    phone: faker.phone.number(),
    logo: faker.image.url(),
    website: faker.internet.url(),
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
  };
}

export function generateCompanies(count: number = 10): Company[] {
  return Array.from({ length: count }, (_, index) => generateCompany(index));
}
