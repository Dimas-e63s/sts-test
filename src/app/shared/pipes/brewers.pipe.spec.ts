import { ResponseData } from '../data.service';
import { BrewersPipe } from './brewers.pipe';

describe('BrewersPipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new BrewersPipe();

  it('transforms brewers response to array of unique brewers', () => {
    const brewers: ResponseData[] = [
      {
        product_id: 127031,
        name: 'Mad Jack Mixer',
        size: '12  ×  Can 355ml',
        price: '23',
        beer_id: 127,
        image_url:
          'http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/sbs/brand/18636-MJ-Family-Can-TBS-322x344.jpg?itok=v_mQRmR1',
        category: 'Domestic Specialty',
        abv: '5.0',
        style: 'N/A',
        attributes: 'N/A',
        type: 'Lager',
        brewer: 'Molson',
        country: 'Canada',
        on_sale: false,
      },
      {
        product_id: 590173,
        name: 'Busch Light',
        size: '15  ×  Can 355 ml',
        price: '27.50',
        beer_id: 590,
        image_url:
          'http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/sbs/brand/TBS_Brand_Lockups_BUSCH_LT.jpg?itok=1qCx6QFu',
        category: 'Value',
        abv: '4.0',
        style: 'N/A',
        attributes: 'N/A',
        type: 'Lager',
        brewer: 'Labatt',
        country: 'Canada',
        on_sale: false,
      },
    ];
    expect(pipe.transform(brewers)).toEqual(new Set(['Molson', 'Labatt']));
  });
});
