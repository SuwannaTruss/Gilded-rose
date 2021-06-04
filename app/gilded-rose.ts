export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }
    
    updateQuality() {
        let products = this.items;
        for (let i = 0; i < products.length; i++) {
            if (products[i].name != 'Aged Brie' && products[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (products[i].quality > 0) {
                    if (products[i].name != 'Sulfuras, Hand of Ragnaros') {
                        products[i].quality = products[i].quality - 1
                    }
                }
            } else {
                if (products[i].quality < 50) {
                    products[i].quality = products[i].quality + 1
                    if (products[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (products[i].sellIn < 11) {
                            if (products[i].quality < 50) {
                                products[i].quality = products[i].quality + 1
                            }
                        }
                        if (products[i].sellIn < 6) {
                            if (products[i].quality < 50) {
                                products[i].quality = products[i].quality + 1
                            }
                        }
                    }
                }
            }
            if (products[i].name != 'Sulfuras, Hand of Ragnaros') {
                products[i].sellIn = products[i].sellIn - 1;
            }
            if (products[i].sellIn < 0) {
                if (products[i].name != 'Aged Brie') {
                    if (products[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (products[i].quality > 0) {
                            if (products[i].name != 'Sulfuras, Hand of Ragnaros') {
                                products[i].quality = products[i].quality - 1
                            }
                        }
                    } else {
                        products[i].quality = products[i].quality - products[i].quality
                    }
                } else {
                    if (products[i].quality < 50) {
                        products[i].quality = products[i].quality + 1
                    }
                }
            }
        }

        return products;
    }
}
