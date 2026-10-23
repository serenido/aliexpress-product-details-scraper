# AliExpress Product Details Scraper API

Get full AliExpress product data from links or ids: every variant with its own price and stock, shipping fee and delivery days for your country, store facts and images.

Runs in the cloud on Apify. No servers, no proxy setup, no code to maintain. **[Open it on Apify](https://apify.com/serenido/aliexpress-product-details)**

**Price:** $1 per 1,000 products. No monthly fee. Apify's free plan gives $5 of usage every month, no credit card needed. [Current price](https://apify.com/serenido/aliexpress-product-details/pricing).

## What you get

- Every variant (SKU) with its own price, old price, stock and image
- Shipping fee, free-shipping flag and delivery days for the country you choose (89 countries, 41 currencies, 16 languages)
- Rating, review count, sold count, store name and store rating
- Flags AliExpress "new shopper" prices, so you never mistake them for normal prices
- Missing or blocked products come back as free rows with a clear status

## Quick start: Python

```bash
pip install -U apify-client
```

```python
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")

run = client.actor("serenido/aliexpress-product-details").call(run_input={
    "productUrls": [
        "https://www.aliexpress.com/item/1005007857239353.html",
        "3256811374070548"
    ],
    "shipTo": "US",
    "currency": "USD",
    "language": "en"
})

for item in client.dataset(run.default_dataset_id).iterate_items():
    print(item)
```

## Quick start: JavaScript (Node.js)

```bash
npm install apify-client
```

```javascript
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
```

## Quick start: one HTTP call

Runs the tool and returns the rows in one request. Good for runs under 5 minutes; for bigger runs use the Python or JavaScript example.

```bash
curl -X POST "https://api.apify.com/v2/acts/serenido~aliexpress-product-details/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"productUrls": ["https://www.aliexpress.com/item/1005007857239353.html", "3256811374070548"], "shipTo": "US", "currency": "USD", "language": "en"}'
```

Get your token in [Apify Console > Settings > API & Integrations](https://console.apify.com/settings/integrations).

## Use it from AI apps (MCP)

Any app that supports remote MCP servers (Claude, ChatGPT, Cursor, VS Code and others) can run this tool for you. Add this server URL: `https://mcp.apify.com?tools=serenido/aliexpress-product-details`. Your Apify account connects on first use. Example config for Cursor:

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=serenido/aliexpress-product-details"
    }
  }
}
```

## Input example

```json
{
  "productUrls": [
    "https://www.aliexpress.com/item/1005007857239353.html",
    "3256811374070548"
  ],
  "shipTo": "US",
  "currency": "USD",
  "language": "en"
}
```

Paste product links or plain product ids. All options are listed on the [input page](https://apify.com/serenido/aliexpress-product-details/input-schema).

## Output example (one row)

```json
{
  "status": "ok",
  "productId": "3256811374070548",
  "title": "46 Inch Burmese Curly Human Hair Wig 7x6 13x6 HD Lace Frontal 200 Density",
  "price": 40.78,
  "priceMax": 248.16,
  "originalPrice": 108.7,
  "discountPct": 62,
  "currency": "USD",
  "isNewShopperDeal": true,
  "rating": 4.9,
  "reviewCount": 724,
  "soldCount": 1000,
  "inStock": true,
  "totalStock": 32497,
  "skuCount": 90,
  "canShip": true,
  "shippingFee": 0,
  "freeShipping": true,
  "deliveryDaysMin": 4,
  "deliveryDaysMax": 9,
  "shipFrom": "United States",
  "skus": [
    {
      "skuId": "12000055922089666",
      "attributes": {
        "Stretched Length": "30inches",
        "Density": "180%"
      },
      "price": 77.77,
      "originalPrice": 193.72,
      "stock": 115,
      "available": true
    }
  ],
  "shipTo": "US",
  "scrapedAt": "2026-10-11T11:09:08Z"
}
```

Download as JSON, CSV or Excel, or connect to Make, Zapier or n8n.

## Use cases

- Dropshipping product research and supplier checks
- Price and stock monitoring per variant
- Shipping cost and delivery time checks for many countries

## More tools by Serenido

- [Weibo Scraper](https://github.com/serenido/weibo-scraper): posts, hot searches, comments and creators. No login.
- [Bilibili Scraper](https://github.com/serenido/bilibili-scraper): videos, comments, danmaku and creators. No login.
- [AliExpress Search Scraper](https://github.com/serenido/aliexpress-search-scraper): price, discount and exact order count for any search.
- [Australian Supermarket Prices: Coles, Woolworths and ALDI](https://github.com/serenido/coles-woolworths-aldi-scraper): Coles, Woolworths and ALDI in one run, with unit prices.
- [Google Trends Scraper](https://github.com/serenido/google-trends-scraper): interest over time, rising queries, regions and Trending Now.
- [Football xG Scraper](https://github.com/serenido/football-xg-scraper): Understat xG tables, matches, shots, players and lineups.
- [Weibo Hot Search Scraper](https://github.com/serenido/weibo-hot-search): the live 微博热搜 list, changes since your last run, top posts per topic.
- [AliExpress Dropshipping Scraper](https://github.com/serenido/aliexpress-dropshipping): winning products with shipping to your country, landed cost and profit.
- [WeChat Official Account Scraper](https://github.com/serenido/wechat-official-account-scraper): 公众号 articles by keyword or link, with full text, account, author and date.

## Support

Found a bug or need a field? Open an issue here or on the [Issues tab on Apify](https://apify.com/serenido/aliexpress-product-details/issues).

Use it only for public data and follow the website's terms and the laws that apply to you. This project is not affiliated with the websites it reads.
