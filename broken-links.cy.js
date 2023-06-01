describe('Test Broken Links', () => {
    context('1920px resolution', () => {
        beforeEach(() => {
          // run these tests as if in a desktop
          // browser with a 720p monitor
          cy.viewport(1920, 720)
        });
        
        it('Migration to Dev Env.(' + Cypress.env( "devHostUrl" ) + ') is completed', () => {

            cy.visit('/')

            cy.get('#ae-primary-nav-popup').find('a').click();
            
            cy.get('a[href^="'+Cypress.env( "devHostUrl" )+'"]' || 'a:not([href^="#"])' || 'a:not([href*=mailto:"])' || 'a:not([aria-label="homepage"])').each($url => {
                if ($url.prop('href').length > 0) {
                    const message = $url.text()
                    expect($url, message).to.have.attr("href").not.contain("undefined");
                }
            });
        });
    
        it('Check Social Media and MyAngloEastern URL: ' + Cypress.env( "devHostUrl" ), () => {
    
            cy.visit('/')
            
            cy.get('a:not([href^="'+Cypress.env( "devHostUrl" )+'"])' || 'a:not([href^="#"])' || 'a:not([href*=mailto:"])' || 'a:not([aria-label="homepage"])').each($url => {
                if ($url.prop('href').length > 0) {
                    const message = $url.text()
                    expect($url, message).to.have.attr("href").not.contain("undefined");
                }
            });
    
        });

        it('Check all Blank URL', () => {
    
            cy.visit('/')
            
            cy.get('a[href^="#"]' || 'a:not([href*=mailto:"])').each($url => {
                if ($url.prop('href').length > 0) {
                    const message = $url.text()
                    expect($url, message).to.have.attr("href").not.contain("include", "#");
                    // cy.log($url.prop('href'));
                }
            });
    
        });

        /**
         *  NOTE: Enable this test case to check if there's existing old URL env.
         *  For Migration/Deployment
         * 
         */
        
        // it('Incorrect Base URL :' + Cypress.env( "localhostUrl" ), () => {

        //     cy.visit('/')

        //     cy.get('#ae-primary-nav-popup').find('a').click();
            
        //     cy.get('a[href^="'+Cypress.env( "localhostUrl" )+'"]' || 'a:not([href^="#"])' || 'a:not([href*=mailto:"])' || 'a:not([aria-label="homepage"])').each($url => {
        //         if ($url.prop('href').length > 0) {
        //             const message = $url.text()
        //             expect($url, message).to.have.attr("href").not.contain("undefined");
        //         }
        //     });
        // });

    });
})
