import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

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
