
describe( 'Run a pull', function() {
	// Go to WordPress login page and login.
	beforeEach( function() {
		cy.visit( '/wp-admin/' );
		cy.wait( 2000 );
		cy.get( '#user_login' ).type( Cypress.env( "wpUser" ) );
		cy.get( '#user_pass' ).type( Cypress.env( "wpPassword" ) );
		cy.get( '#wp-submit' ).click();
	} );
	
	// it( 'can run a pull', function() {
	// 	cy.wait( 2000 );
	// 	cy.url().should('eq', 'http://localhost/ae_wp_dev_v2/wp-admin/');
	// } );
    it("WEBP must be enabled", function () {
        cy.get('#adminmenu').find('#menu-tools').trigger('mouseover').should('be.visible').find('a[href="site-health.php"]').click({force: true});
        cy.get('.site-health-view-passed').click({force: true}).should('be.visible').parents('.health-check-body').find('.health-check-accordion-heading').find('.title').contains('Your site supports WebP');
    });
});