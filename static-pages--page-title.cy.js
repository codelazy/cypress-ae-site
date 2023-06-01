import pages from '../fixtures/urls.json'

describe('<h1> Title font-size: 64px (4rem)', () => {
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
                
                cy.get('#hero-carousel-with-breadcrumbs', { timeout: 10000 }).find('.elementor-heading-title').each( ($el, index, $list) => {
                
                    cy.log($el.text());
                    cy.get($el).should('have.css', 'font-size', '64px');
                    cy.get($el).should('have.css', 'line-height', '64px');
                    cy.get($el).should('have.css', 'font-weight', '700');
                }).then(($list) => {
                    // expect($list).to.have.length(10); //true
                    cy.log('no <h3> section');
                });
                
            });


        })
        
    });
})
