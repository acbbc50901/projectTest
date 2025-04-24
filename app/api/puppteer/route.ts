import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

// GET
export async function GET() {
  try {
    const browser = await puppeteer.launch({headless: true}); // 開啟瀏覽器
    const page = await browser.newPage(); // 開啟新分頁
    await page.goto('https://www.besttour.com.tw/e_web/country?v=13'); // 前往 特定網址
    
    const products = await page.$$eval('.box', (products) => {
      return products.map((product) => {
        const img = product.querySelector('img')?.getAttribute('data-src')?.trim() || '';
        const title = product.querySelector('.travelTitle')?.textContent?.trim() || ''; // 抓取價格
        const price = product.querySelector('.price_B.color_main')?.childNodes[0]?.nodeValue?.trim() || '';
        const city = product.querySelector('.city')?.textContent?.trim() || '';

        return { img, price, title, city }; // 整合成一個物件
      });
    });
    console.log(products, products.length);

    console.log('已成功前往 Google!');
    return NextResponse.json({ message: "成功前往!" });

  } catch (error) {
    return NextResponse.json({msg: '錯誤', error: error})
  }
}

// POST
export async function POST() {
  try {
    const browser = await puppeteer.launch({headless: true}); // 開啟瀏覽器
    const page = await browser.newPage(); // 開啟新分頁
    await page.goto(''); // 前往 特定網址
    
    const products = await page.$$eval('.box', (products) => {
      return products.map((product) => {
        const img = product.querySelector('img')?.getAttribute('data-src')?.trim() || '';
        const title = product.querySelector('.travelTitle')?.textContent?.trim() || ''; // 抓取價格
        const price = product.querySelector('.price_B.color_main')?.childNodes[0]?.nodeValue?.trim() || '';
        const city = product.querySelector('.city')?.textContent?.trim() || '';

        return { img, price, title, city }; // 整合成一個物件
      });
    });
    console.log(products);

    console.log('已成功前往 Google!');
    return NextResponse.json({ message: "成功前往!" , products});

  } catch (error) {
    return NextResponse.json({msg: '錯誤', error: error})
  }
}