import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

Then('the products should be sorted by name in Swedish alphabetical order', function () {
  const products = this.json.results;
  const names = products.map(product => product.name);
  for (let i = 0; i < names.length - 1; i++) {
    expect(names[i].localeCompare(names[i + 1], 'sv', { sensitivity: 'base' })).to.be.at.most(0);
  }
});
