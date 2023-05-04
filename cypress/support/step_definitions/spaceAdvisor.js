import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import SelectDestination from "../../pages/SpaceAdvisor/SelectDestination";
import Checkout from "../../pages/SpaceAdvisor/Checkout";

Given("I get into SpaceAdvisor homepage", function () {
    cy.visit("/")
});

Then("I select departing and returning dates", function (dataData){
    dataData.hashes().forEach((row) => {
        SelectDestination.completeDeparting(row.Departing)
        SelectDestination.completeReturning(row.Returning)
    })
});

Then("I select the amount of adults and children passengers", function(dataPassengers){
    dataPassengers.hashes().forEach((row)=>{
        SelectDestination.completeAmountPassengers(row.Adults,row.Children)
    })
})

Then("I click on the Select Destination button", function(){
    SelectDestination.clickSelectDestination()
})

Then("I click on the option of the planet {string}",(planet)=>{
    SelectDestination.clickBook(planet)
})

Then ("I complete the checkout", function(){
    Checkout.completarNombre('Luis Perez')
    Checkout.completarMail('luisperez@mail.com')
    Checkout.completarNumSeguridadSocial('112-23-3444')
    Checkout.completarTelefono('12341234')
})

Then("I upload a file", function(){
    Checkout.cargarArchivo()
})

Then("I agree terms and conditions", function(){
    Checkout.aceptarTyC()
})