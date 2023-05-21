
describe( 'Run a pull', function() {
	// Go to WordPress login page and login.
	beforeEach( function() {
		cy.visit( '/wp-admin/' );
		cy.wait( 2000 );
		cy.get( '#user_login' ).type( Cypress.env( "wpUser" ) );
		cy.get( '#user_pass' ).type( Cypress.env( "wpPassword" ) );
		cy.get( '#wp-submit' ).click();
	} );
	
	it( 'can run a pull', function() {
		cy.wait( 2000 );
		cy.url().should('eq', 'http://localhost/ae_wp_dev_v2/wp-admin/');
	} );
});