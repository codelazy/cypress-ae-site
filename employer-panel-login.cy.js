
describe( 'Employer Panel Login', function() {
	// Go to Employer Panel login page and login.
	beforeEach( function() {
		cy.visit( '/employer-panel/' );
		// cy.wait( 2000 );
		cy.get( '#user_login' ).type( Cypress.env( "employerUser" ) );
		cy.get( '#user_password' ).type( Cypress.env( "employerPassword" ) );
		cy.get( '#wpjb_submit' ).click();
	} );
	
	it.only( 'Can Login - Correct URL', function() {
		cy.url().should('eq', Cypress.env( "devHostUrl" )+'/employer-panel/');
	} );
});