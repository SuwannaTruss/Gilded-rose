import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    // it('should foo', function () {
    //     const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    //     const items = gildedRose.updateQuality();
    //     expect(items[0].name).to.equal('foo');
    // });

    it('Aged Brie should increase up to 50 and no more', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 1, 0), new Item('Aged Brie', 5, 50)]);
        const items = gildedRose.updateQuality();
        console.log(items);
        expect(items[0].quality).to.equal(1);
        expect(items[1].quality).to.equal(50);
    });

})

