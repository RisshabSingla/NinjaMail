const puppeteer = require('puppeteer');

async function scrapeEmailIds() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the webpage
  await page.goto('https://contacts.zoho.com/home.zc#contacts');

  // Wait for the email IDs to load (You may need to adjust the selector and wait time based on the webpage structure)
  await page.waitForSelector('.email');

  // Extract email IDs
  const emailIds = await page.$$eval('.email', (elements: Element[]) => elements.map(element => element.textContent));

  // Close the browser
  await browser.close();

  return emailIds;
}

// Example usage
scrapeEmailIds()
  .then(emailIds => {
    console.log('Email IDs:', emailIds);
  })
  .catch(error => {
    console.error('Error:', error);
  });
