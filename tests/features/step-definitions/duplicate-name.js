import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

Then('it should contain duplicate', async function () {
  const response = await this.response;
  products = response.data.results;

  expect(products.length).to.be.greaterThan(0);

  const names = products.map(product => product.name);

  const nameSet = new Set();
  let duplicate = false;
  for (const name of names) {
    if (nameSet.has(name)) {
      console.log(`Duplicate found: ${name}`);
      duplicate = true;
      break;
    }
    nameSet.add(name);
  }

  expect(duplicate).to.be.true;
});