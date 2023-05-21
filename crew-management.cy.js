describe("Crew Management Page",  function() {
    beforeEach( function() {
      cy.visit(Cypress.env("localhostUrl")+'our-services/by-offering/crew-management/');
    });

    context('720p resolution', () => {
        beforeEach(() => {
          // run these tests as if in a desktop
          // browser with a 720p monitor
          cy.viewport(1280, 720);
        })
    
        //Header Menu
        it('Header Menu Show All (show Secondary Menu) - Desktop', () => {
          cy.get('#header-nav-sticky').should('be.visible');
        //   cy.get('#header-nav-sticky').should('have.class', 'elementor-hidden-mobile').should('not.be.visible')
        });

        //Page Title
        it("Heading Title has font size: 64px (4rem)", function () {
            cy.get('.elementor-heading-title').should('have.css', 'font-size', '64px');
            cy.get('.elementor-heading-title').should('have.css', 'line-height', '64px');
            cy.get('.elementor-heading-title').should('have.css', 'font-weight', '700');
        });
      
        //Featured Image
        it("Has Featured Image in WEBP format", function() {
          cy.get('.ae-featured-img--page').find('img').should('be.visible').should('have.attr', 'src').should('include', '.webp');
        });
        

        //Heading Title Section
        it("H3 Heading Title Sections font-size 44px (2.75rem)", function() {
            cy.get('.ae-light-theme [data-element_type="widget"]').find('h3').should('have.length', 10).each( ($el, index, $list) => {
                cy.wrap($el).should('have.css', 'font-size', '44px');
                cy.wrap($el).should('have.css', 'line-height', '60px');
                cy.wrap($el).should('have.css', 'font-weight', '600');
            }).then(($list) => {
                expect($list).to.have.length(10); //true
            });
        });
    });

    context('iphone-5 resolution', () => {
        beforeEach(() => {
          // run these tests as if in a mobile browser
          // and ensure our responsive UI is correct
          cy.viewport('iphone-5')
        })
    
        // it('displays mobile menu on click', () => {
        //   cy.get('nav .desktop-menu').should('not.be.visible')
        //   cy.get('nav .mobile-menu')
        //     .should('be.visible')
        //     .find('i.hamburger')
        //     .click()
    
        //   cy.get('ul.slideout-menu').should('be.visible')
        // })

        //Header Menu
        it('Header Menu (hide secondary menu) - Mobile', () => {
            // cy.get('#header-nav-sticky').should('be.visible');
            cy.get('#header-nav-sticky').should('have.class', 'elementor-hidden-mobile').should('not.be.visible')
        });

        //Page Title
        it("Heading Title has font size: 40px (2.5rem)", function () {
            cy.get('.elementor-heading-title').should('have.css', 'font-size', '40px');
            cy.get('.elementor-heading-title').should('have.css', 'line-height', '52px');
            cy.get('.elementor-heading-title').should('have.css', 'font-weight', '700');
        });
        
        //Featured Image
        it("Has Featured Image", function() {
            cy.get('.ae-featured-img--page').find('img').should('be.visible').should('have.attr', 'src');
        });

        //Heading Title Section
        it("H3 Heading Title Sections font-size 30px (2.75rem)", function() {
            cy.get('.ae-light-theme [data-element_type="widget"]').find('h3').should('have.length', 10).each( ($el, index, $list) => {
                cy.wrap($el).should('have.css', 'font-size', '30px');
                cy.wrap($el).should('have.css', 'line-height', '60px');
                cy.wrap($el).should('have.css', 'font-weight', '600');
            }).then(($list) => {
                expect($list).to.have.length(10); //true
            });
        });
        
    })


  })