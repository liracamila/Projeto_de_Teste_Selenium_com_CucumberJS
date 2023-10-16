const {Given, Then, When, Before, After} = require('@cucumber/cucumber');

const assert = require('assert')
const webdriver = require('selenium-webdriver');

//SETUP CHROME DRIVER
var chrome = require('selenium-webdriver/chrome');
const ChromeDriver = require('chromedriver');
const {By} = require('selenium-webdriver');
var options   = new chrome.Options().headless();
let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    //.setChromeOptions(options)
    .build();

    Given('que o usuario esteja pagina principal', {timeout: 30 * 1000}, async () => { 
        await driver.get("http://publicazo.insprak.com/")
        await driver.manage().window().setRect({ width: 1050, height: 700 })
        });

    When('o usuario pesquisa um servico', {timeout: 30 * 1000}, async () => { 
        await driver.findElement(By.id("search")).click()
        await driver.findElement(By.id("search")).sendKeys("aulas")
        await driver.findElement(By.name("commit")).click()
        await driver.findElement(By.css(".col-md-4:nth-child(1) .panel-body")).click()
      });

    Then('sao exibidos os servicos cadastrados na plataforma', {timeout: 30 * 1000}, async () => { 
        assert(await driver.findElement(By.linkText("Aulas de Teste de Software")).getText() == "Aulas de Teste de Software")
        await driver.close()
      });