const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch({ headless: false}); // open browser
//     const page = await browser.newPage(); // new page
//     await page.goto('http://quotes.toscrape.com/'); // go to the website

//     // await page.waitForSelector('.col-md-8');
//     // await page.waitForNavigation(); // go to another page
//     // await page.waitFor(3000) // delay

//     await page.waitForSelector('.col-md-4'); // to make sure that the class is existed / loaded else bot won't work
//     await page.click('.col-md-4 a'); //click the element with / after this class

//     await page.waitForSelector('#username');
//     await page.type('#username','abcdef', {delay: 750}); // input the value, delay 100 is same as typing speed of a normal person
//     await page.type('#password','password', {delay: 750});

//     await page.click('.btn.btn-primary');
    
    

//     // const title = await page.title();
//     // const url = await page.url();

//     // console.log( title, url);
//     // await browser.close();
// })();

// async function run(){
//     const browser = await puppeteer.launch({headless:false, args: ['--start-fullscreen']})
//     const page = await browser.newPage()
//     await page.goto('https://chercher.tech/practice/frames');
//     // handle frame
//     const frameHandle = await page.$("iframe[id='frame1']");
//     const frame = await frameHandle.contentFrame();
//     // filling form in iframe
//     await frame.type('input', 'chercher tech');
// }
// run()

(async () => {
    const browser = await puppeteer.launch({ headless: false}); // open browser
    const page = await browser.newPage(); // new page
    await page.goto('https://typing-speed-test.aoeu.eu/'); // go to the website
    await page.waitForSelector('.nextword');
    const words = await page.evaluate(() => {
        const wordElements = document.querySelectorAll('.nextword');
        const wordList = [document.querySelector('.currentword').innerText];
        wordElements.forEach((word) => {
            wordList.push(word.innerText);
        });

        return wordList;
    });

    await console.log(words);

    for ( let i=0; i<words.length; i++) {
        await page.type('#input',words[i])
        await page.keyboard.press(String.fromCharCode(32));
    }
})();