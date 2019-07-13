import { getGreeting } from '../support/app.po';

describe('nestjs-typeorm', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to nestjs-typeorm!');
  });
});
