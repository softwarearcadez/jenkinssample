const {Builder, By, Key, until} = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');

(async function example() {
  
const options = new Options().setChromeBinaryPath('/usr/bin/google-chrome');

const driver = await new Builder()
                 .forBrowser('chrome')
                 .setChromeOptions(options.headless())
                 .build();
  
  try {
    await driver.get('http://www.google.com/ncr');
    console.log("I'm being executed");
    await driver.takeScreenshot().then(
    function(image) {
        require('fs').writeFileSync('captured_image_3.png', image, 'base64');
        }
    );
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 10000);
    await driver.takeScreenshot().then(
    function(image) {
        require('fs').writeFileSync('results.png', image, 'base64');
        }
    );
  } finally {
    await driver.quit();
  }
})();
