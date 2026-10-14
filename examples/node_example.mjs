import { ApifyClient } from "apify-client";

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const run = await client.actor("serenido/aliexpress-product-details").call({
    "productUrls": [
        "https://www.aliexpress.com/item/1005007857239353.html",
        "3256811374070548"
    ],
    "shipTo": "US",
    "currency": "USD",
    "language": "en"
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
