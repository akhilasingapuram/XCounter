describe('SpellCheckApp Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');
    });
  
      it('should suggest correct spelling for a misspelled word', () => {
        cy.get('textarea').type('wrok');
        cy.contains('Did you mean: work?').should('exist');
      });
  
      it('should not suggest anything for correctly spelled words', () => {
        cy.get('textarea').type('I work hard');
        cy.get('body').should('not.contain', 'Did you mean:');
      });
  
      it('should suggest correct spelling for multiple misspelled words', () => {
        cy.get('textarea').type('For exampl');
        cy.contains('Did you mean: example?').should('exist');
      });
  
      it('should handle empty text input gracefully', () => {
        cy.get('textarea').clear();
        cy.get('body').should('not.contain', 'Did you mean:');
      });
  
      it('should handle case-insensitive spell checking', () => {
        cy.get('textarea').type('Teh quick brown fox');
        cy.contains('Did you mean: the?').should('exist');
      });
  });