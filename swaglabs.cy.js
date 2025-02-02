describe("Test Suit - Swag Labs", () => {
    it("validacin de inicio de pagina", () => { 

        cy.visit("https://www.saucedemo.com")
        
    })

    it("validacion de inicio de sesion", () => {

        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click("bottom")
    })

    it("validacion de visibilidad de productos",() => {

        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click("bottom")
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should("be.visible")
        cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').should("be.visible")
        cy.get('[data-test="item-1-title-link"] > [data-test="inventory-item-name"]').should("be.visible")
        cy.get('[data-test="item-5-title-link"] > [data-test="inventory-item-name"]').should("be.visible")
        cy.get('[data-test="item-2-title-link"] > [data-test="inventory-item-name"]').should("be.visible")
        cy.get('[data-test="item-2-title-link"] > [data-test="inventory-item-name"]').should("be.visible")
    })

    it("validacion para agrerar y remover articulos al carro de compras",() => {

        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click("bottom")
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click("bottom")
        cy.get('[data-test="add-to-cart"]').click("bottom")
        cy.get('[data-test="shopping-cart-link"]').click("bottom")
        cy.get('[data-test="remove-sauce-labs-backpack"]').click("bottom")

    })

    it.only("Validacion para hacer hacer checkout",() => {

        cy.visit("https://www.saucedemo.com")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click("bottom")
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click("bottom")
        cy.get('[data-test="add-to-cart"]').click("bottom")
        cy.get('[data-test="shopping-cart-link"]').click("bottom")
        cy.get('[data-test="checkout"]').click("bottom")
        cy.get('[data-test="firstName"]').type("Juan")
        cy.get('[data-test="lastName"]').type("Perez")
        cy.get('[data-test="postalCode"]').type("1234")
        cy.get('[data-test="continue"]').click("bottom")
        cy.get('[data-test="finish"]').click("bottom")
        cy.get('[data-test="complete-header"]').should("be.visible")

    })








})