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

// Function to check if content contains keyword 'student'
     async function checkForStudentKeyword() 
       {
         let content = await driver.findElement(By.tagName('body')).getText();
          if (content.includes('student')) 
            {
              console.log('Keyword "student" is found in the content');
              await extendUserPresence(10);
            }
          else
            {
              console.log('Keyword "student" is NOT found in the content');
            }
            
        }

// Function to check for image presence, display image name, and extend user presence time
async function checkForImages() {
  let images = await driver.findElements(By.tagName('img'));
 
  for (let image of images) {
      let imageName = await image.getAttribute('src');
      console.log(`Image found: ${imageName}`);
      await extendUserPresence(10);
  }
}

     // Function to check for link presence, display link name, and extend user presence time
     async function checkForLinks() {
      let links = await driver.findElements(By.tagName('a'));
      for (let link of links) {
          let linkName = await link.getAttribute('href');
          console.log(`Link found: ${linkName}`);
          await extendUserPresence(10);
      }
  }

        // Function to check for background color presence, display color name, and extend user presence time
        async function checkForBackgroundColors() {
          let elements = await driver.findElements(By.css('*'));
          for (let element of elements) {
              let backgroundColor = await element.getCssValue('background-color');
              console.log(`Background color found: ${backgroundColor}`);
              await extendUserPresence(10);
          }
      }

      // Main function to check for keyword 'student', images, links, and background colors
      async function main() {
          await checkForStudentKeyword();
          await checkForImages();
          await checkForLinks();
          await checkForBackgroundColors();
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