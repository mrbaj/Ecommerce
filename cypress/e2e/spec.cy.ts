describe('Login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200'); // Assumes your login page route is '/login'
  });

  it('should allow user to type in username and password fields', () => {
    cy.get('input[placeholder="Username"]').type('testuser');
    cy.get('input[placeholder="Password"]').type('testpass');
  });

  it('should allow user to sign in', () => {
    cy.get('input[placeholder="Username"]').type('testuser');
    cy.get('input[placeholder="Password"]').type('testpass');
    cy.contains('Sign In').click();
    cy.url().should('eq', 'http://localhost:4200/home'); // Assumes successful login should redirect to '/home'
  });

  it('should allow user to sign out', () => {
    // Assumes user is already logged in
    cy.get('button[color="warn"]').click();
    cy.url().should('eq', 'http://localhost:4200/login'); // Assumes successful logout should redirect to '/login'
  });
});
