class Checkout{
    elements ={
        input_Name: ()=> cy.get('span').contains('Name').parent().children('input'),
        input_Email: ()=> cy.get('span').contains('Email').parent().children('input'),
        input_SocialSecurity: ()=> cy.get('span').contains('Social Security').parent().children('input'),
        input_Phone: ()=> cy.get('span').contains('Phone').parent().children('input'),
        input_UploadFile: ()=> cy.get('.CustomerInfo__dropzone-box___27VMo').parent().children('input'),
        check_TC:()=> cy.get('span').contains('I agree to the terms and conditions').siblings('input')
    }

    completarNombre(nombre){
        this.elements.input_Name().type(nombre)
    }

    completarMail(mail){
        this.elements.input_Email().type(mail)
    }

    completarNumSeguridadSocial(num){
        this.elements.input_SocialSecurity().type(num)
    }
    
    completarTelefono(tel){
        this.elements.input_Phone().type(tel)
    }

    cargarArchivo(){
        this.elements.input_UploadFile().selectFile('cypress/support/archivoPrueba.txt',{force: true})
    }

    aceptarTyC(){
        this.elements.check_TC().click({force: true}).should('be.checked')
    }
}
module.exports = new Checkout()