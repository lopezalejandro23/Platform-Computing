const {Builder, By, Key, until} = require('selenium-webdriver');

(async function firstTest() {
 

    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000');

        const websiteName = await driver.getTitle();
        console.log(`Current website: ${websiteName}`);
  
// Function to extend user presence time and display user time
        async function extendUserPresence(seconds) 
          {
            await driver.sleep(seconds * 1000); // Wait for specified seconds
            let totalTime = await driver.executeScript('return new Date().toLocaleTimeString();');
            console.log(`User time extended by ${seconds} seconds. Current time: ${totalTime}`);
          }
    
// Function to check for image presence, display image name, and extend user presence time
async function checkForButtons() 
    {
        const buttonElements = await driver.findElements(By.tagName('button'));

        if (buttonElements.length == 0)
            {
                console.log('No buttons found');
             }
        else
            {
                for (let i = 0; i < buttonElements.length; i++) {
                    const buttonName = await buttonElements[i].getText();
                    console.log('Button found with name:', buttonName);
                    await extendUserPresence(10);
                }
            }
    }

      // Main function to check for any button
async function main() 
      {
          await checkForButtons();
      }

// Call the main function
await main();


    }
    catch (e) {
      console.log(e)
    }
    //finally {
      //  await driver.quit();
    //}
})();