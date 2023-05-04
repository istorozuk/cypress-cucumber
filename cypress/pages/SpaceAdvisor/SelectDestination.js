
class selectDestination{
    elements = {
        input_Departing: ()=> cy.get('[data-react-toolbox="date-picker"] label').contains('Departing').parent().children('input'),
        option_Date: ()=> cy.get('[data-react-toolbox="day"]'),
        btn_Ok: ()=> cy.get('[data-react-toolbox="button"]').contains('Ok'),
        input_Returning: ()=> cy.get('[data-react-toolbox="date-picker"] label').contains('Returning').parent().children('input'),
        input_Adults: ()=>cy.get('input[value*="Adults"]'),
        optionLi_Generic: ()=> cy.get('li'),
        optionLi_Children: ()=> cy.get('li').contains('Children').siblings(),
        input_Children: ()=>cy.get('input[value*="Children"]'),
        btn_SelectDestination: ()=>cy.get('button').contains('Select Destination'),
        card_Title:()=>cy.get('[class*=theme__title]'),
        txt_Pasajeros: ()=>cy.get('h3').contains('traveler'),
    };

    completeDeparting(fecha){
        this.elements.input_Departing().click()
        this.elements.option_Date().contains(fecha).click()
        this.elements.btn_Ok().click()
        this.elements.txt_Pasajeros().should('contain', fecha)
    }

    completeReturning(fecha){
        this.elements.input_Returning().click()
        this.elements.option_Date().contains(fecha).click()
        this.elements.btn_Ok().click()
        this.elements.txt_Pasajeros().should('contain', fecha)
    }

    completeAmountPassengers(adults, children){
        this.elements.input_Adults().click({force: true})
        this.elements.optionLi_Generic().contains(adults).click()

        if(children!=="0"){
            this.elements.input_Children().click({force: true})
            this.elements.optionLi_Children().contains(children).click({force: true})
        }

        //Para validar que en el texto aparezca la cantidad de pasajeros que ingresé
        var totalPasajeros = parseInt(adults) + parseInt(children)
        this.elements.txt_Pasajeros().contains(totalPasajeros.toString())
    }

    clickSelectDestination(){
        this.elements.btn_SelectDestination().click()
        cy.url({ timeout: 20000 }).should('include', 'destinations')
    }

    clickBook(planet){
        this.elements.card_Title().contains(planet).parents('div').siblings('[class*="theme__cardActions"]').children('button').contains('Book').click()
        cy.url({ timeout: 20000 }).should('include', 'checkout')
    }
};

module.exports = new selectDestination()