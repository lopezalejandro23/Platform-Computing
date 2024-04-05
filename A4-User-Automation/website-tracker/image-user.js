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
      console.log(`User time extended by ${seconds} seconds. Total time: ${totalTime}`);
      }

// Function to check for image presence, display image name, and extend user presence time
async function checkForImages() 
    {

        const images = await driver.findElements(By.tagName('img'));

        if (images.length == 0)
            {
                console.log('No images found');
             }
        else
            {
                for (let image of images) 
                {
                    let imageName = await image.getAttribute('src');
                    console.log(`Image found: ${imageName}`);
                     await extendUserPresence(10);
                }
            }
    }





      // Main function to check for keyword 'student', images, links, and background colors
      async function main() {

          await checkForImages();

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