import pages from '../fixtures/urls.json'

describe('<img> WEBP Format', () => {
    const dataSrc = "/wp-content/uploads";


    context('1920px resolution', () => {
        beforeEach(() => {
          // run these tests as if in a desktop
          // browser with a 720p monitor
          cy.viewport(1920, 720)
        });
                
        pages.staticUrls.forEach(staticUrl => {
        
            
            it(`testing each page: ${staticUrl.url}`, () => {
                
                cy.visit(staticUrl.url)
                
                //“The following error originated from your application code, not from Cypress.”
                cy.on('uncaught:exception', (err, runnable) => {
                    return false
                });

                //Cypress throws an error stating, “Timed out retrying after 4000ms: Expected to find element: #buttondoestexist, but never found it.”
                // Cypress.on('fail', (error, runnable) => {})

                

                //Scroll to the Footer so all images is visible
                cy.get('[data-elementor-type="wp-page"]').scrollIntoView() 
           
                //CHECK if there's background images (background-image)
                // cy.get('.elementor-background-slideshow__slide__image').then($el => {
                    
                //     if($el.length) {
                //         expect($el).to.have.css('background-image').contain(Cypress.env( "devHostUrl" ));
                //     } else {
                //         cy.log('not exists');
                //     }
                // });

                //CHECK if images is in WEBP <img>
                // cy.get('[data-elementor-type="wp-page"]').find('.lazyloaded' || '.elementor-widget-image').each($el => {
                //     if($el.length) {
                //         cy.wrap($el).scrollIntoView();
                //         cy.wrap($el.data('src')).should('include', dataSrc).should('include', '.webp');
                //     }
                // });

                cy.get('[data-elementor-type="wp-page"]')
                .find('img[data-src^="'+dataSrc+'"]')
                .each($el => {
                    cy.wrap($el).scrollIntoView();

                    cy.wrap($el.data('src')).should('include', dataSrc).should('include', '.webp');
                    

                }).then(($el) => {
                    // expect($el).to.have.length(); //true
                    cy.log('not exists');
                });     
                
            });

        })
        
        // it('If Images is in background-image ' + Cypress.env( "devHostUrl" ), () => {
        //     cy.visit('/')
        //     cy.get('.elementor-background-slideshow__slide__image').each($el => {
        //         expect($el).to.have.css('background-image').contain(Cypress.env( "devHostUrl" ));
        //     });
        // });

        // it('If Images is in <img src> is in WEBP format ', () => {
        //     cy.visit('/')
        //     cy.get('[data-elementor-type="wp-page"]').find('.lazyloaded').each($el => {
        //         cy.wrap($el).scrollIntoView();
        //         cy.wrap($el.data('src')).should('include', dataSrc).should('include', '.webp');
        //     });
        // });

    });
})
