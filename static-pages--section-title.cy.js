import pages from '../fixtures/urls.json'

describe('<H3> Section Title font-size: 44px (2.75rem)', () => {
    const dataSrc = "/wp-content/uploads";


    context('1920px resolution', () => {
        beforeEach(() => {
          // run these tests as if in a desktop
          // browser with a 720p monitor
          cy.viewport(1920, 720)
        });
                
        pages.staticUrls.forEach(staticUrl => {
        
            
            it(`${staticUrl.url}`, () => {
                
                cy.visit(staticUrl.url)
                
                //“The following error originated from your application code, not from Cypress.”
                cy.on('uncaught:exception', (err, runnable) => {
                    return false
                });

                //Heading Title Section
                cy.get('[data-elementor-type="wp-page"]').find('h3').each( ($el, index, $list) => {
                    cy.log($el.text());
                    cy.wrap($el).should('have.css', 'font-size', '44px');
                    cy.wrap($el).should('have.css', 'line-height', '60px');
                    cy.wrap($el).should('have.css', 'font-weight', '600');
                }).then(($list) => {
                    // expect($list).to.have.length(10); //true
                    cy.log('no <h3> section');
                });
            
            });


        })
        
    });
})
