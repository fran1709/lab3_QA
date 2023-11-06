import 'cypress-xpath';

describe('Nombre de Usuario', function () {
    beforeEach(function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        // Visita Decasa Web Page
        cy.visit('https://www.decasa.cr').wait(200);
        // Da click en Habitación
        cy.xpath('/html/body/div[1]/div[3]/div/div/div[3]/div/div/div[1]/div/div/div').wait(200).click()
        // Da click en Habitación almohada abrazable.
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/ul/li[2]/div/div[1]/a/img').wait(200).click()
        // Da click en añadir al carrito.
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/div[2]/div/div[1]/div/div/div[2]/div/div/form/div[2]/button').wait(200).click()
        // Espera a que el número de elementos en el carrito cambie
        cy.xpath('/html/body/div[1]/header/div/div/div[4]/ul/li[2]/a/span[1]', { timeout: 10000 }).should('not.have.text', '0')  
        //Da click en el carrito.
        cy.xpath('/html/body/div[1]/header/div/div/div[4]/ul/li[2]/a/i').wait(200).click()
        // Da click en pagar
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div/div[2]/div/div[3]/div/div/a').wait(200).click()
    });
    afterEach(function () {
        // Recarga la Página
        cy.reload();
    });
    it('Caso de Prueba #1 - Nombre Válido', function(){
        // Escribiendo en Nombre
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[1]/span/input').type("Hugo");
        // Escribiendo en Apellidos
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[2]/span/input').type("Pérez");
        // Click en ComboBox Pronvincia
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[4]/span/span').wait(200).click();
        // Escribe San y da enter luego verifica si está San José seleccionado.
        cy.xpath('/html/body/span/span/span[1]/input').type("San{enter}").then(() =>{
            cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[4]/span/span/span[1]/span/span[1]').should('contain', 'San José');
        })
        // Click en ComboBox Cantón/Distrito
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[5]/span/span').wait(200).click();
        // Selección de Distrito
        cy.xpath('/html/body/span/span/span[1]/input').type("Cang{enter}").wait(200).then(() =>{
            cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[5]/span/span/span[1]/span/span[1]').should('contain', 'Acosta, Cangrejal');
        })
        // Escribiendo Dirección
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[6]/span/input').type("Tecnológico de Costa Rica");
        // Escribiendo Teléfono
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[7]/span/input').type("12345678");
        // Escribiendo Email
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[8]/span/input').type("usuario@dominio.com");
        // Escribiendo Código Postal
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[9]/span/input').type("28001");
        // Escribiendo Contraseña
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[2]/div/p/span/input').type("tecprueba_qa123");
        // Aceptando terminos
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[2]/div/div/div/div/div/p').wait(1000).should('be.visible').click();
        // Click en Realizar pedido y verificación
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[2]/div/div/div/div/button').click().wait(200)
    });
    it('Caso de Prueba #2 - Nombre Inválido', function(){
        // Nombre en blanco
        //cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[1]/span/input').type("");
        // Escribiendo en Apellidos
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[2]/span/input').type("Pérez");
        // Click en ComboBox
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[4]/span/span').wait(200).click();
        // Escribe Li y da enter luego verifica si está Limón seleccionado.
        cy.xpath('/html/body/span/span/span[1]/input').type("Li{enter}").then(() =>{
            cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[4]/span/span/span[1]/span/span[1]').should('contain', 'Limón');
        })
        // Click en ComboBox Cantón/Distrito
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[5]/span/span').wait(200).click();
        // Selección de Distrito
        cy.xpath('/html/body/span/span/span[1]/input').type("Dua{enter}").then(() =>{
            cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[5]/span/span/span[1]/span/span[1]').should('contain', 'Guácimo, Duacarí');
        })
        // Escribiendo Dirección
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[6]/span/input').type("Tecnológico de Costa Rica");
        // Escribiendo Teléfono
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[7]/span/input').type("12345678");
        // Escribiendo Email
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[8]/span/input').type("usuario@dominio.com");
        // Escribiendo Código Postal
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[1]/div/p[9]/span/input').type("28001");
        // Escribiendo Contraseña
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[1]/div[1]/div[2]/div/p/span/input').type("tecprueba_qa123");
        // Aceptando terminos
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[2]/div/div/div/div/div/p').wait(1000).should('be.visible').click();
        // Click en Realizar pedido y verificación
        cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div/div[2]/div/div/div/div/button').click().wait(200).then(() =>{
            cy.xpath('/html/body/div[1]/div[4]/div/div/div/main/article/div/div[1]/form/div[1]/ul/li').should('contain', 'Facturación Nombre es un campo requerido.');
        })
    });
});