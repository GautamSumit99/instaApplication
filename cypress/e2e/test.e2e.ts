
/// <reference types="cypress" />
describe('Instagram Stories Feature', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('displays the story list', () => {
      cy.get('.story-list').should('exist');
    });
  
    it('opens a story on tap and auto-advances after 5 seconds', () => {
      // Tap the first story
      cy.get('.story-list img').first().click();
      // Verify story viewer is displayed
      cy.get('.story-viewer img').should('be.visible');
      // Wait for 5 seconds and verify auto-advance (this may require a stubbed timer)
      cy.wait(5100);
      cy.get('.story-viewer img').should('have.attr', 'src').and('include', 'story2');
    });
  
    it('navigates correctly on left/right tap', () => {
      // Open first story
      cy.get('.story-list img').first().click();
      // Tap right half to go next
      cy.get('.story-viewer').click('right');
      cy.get('.story-viewer img').should('have.attr', 'src').and('include', 'story2');
      // Tap left half to go back
      cy.get('.story-viewer').click('left');
      cy.get('.story-viewer img').should('have.attr', 'src').and('include', 'story1');
    });
  });

  export{};
  