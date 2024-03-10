const {Builder, By, Key, until} = require('selenium-webdriver');

(async function firstTest() {
 

    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000');

        const websiteName = await driver.getTitle();
        console.log(`Current website: ${websiteName}`);
        
        // Get the start time when the user landed on the website
        const startTime = new Date();

        // Check every 5 seconds how long the user has been on the website
        setInterval(() => {
            const currentTime = new Date();
            const elapsedTime = (currentTime - startTime) / 1000; // time in seconds

            console.log(`User has been on this website for ${elapsedTime} seconds`);
        }, 5000); // Interval set to 5 seconds

        // Keep the browser open for monitoring time on website
        await driver.wait(until.elementLocated(By.css('body')), 60000);
    } 
    catch (e) {
      console.log(e)
    }
    //finally {
      //  await driver.quit();
    //}
})();