import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;
  const contactOne = {
    name: 'Oleta Level',
    phone_number: '+442032960159',
    address: '10 London Wall, London EC2M 6SA, UK'
  };
  const contactTwo = {
    name: 'Mike Field-May',
    phone_number: '+442032960159',
    address: '1 Dummy Street, London EC2M 6SA, UK'
  };
  const array = [contactOne, contactTwo];
  let filterString: string;
  let propName: string;


    beforeAll(() => {
      pipe = new FilterPipe();
    });

    it('creates an instance', () => {
      expect(pipe).toBeTruthy();
    });

    it('shortens a string longer than the default and add ...', () => {
      filterString = 'mike';
      propName = 'name';
      const transformedArray = pipe.transform(array, filterString, propName);
      expect(transformedArray.length).toBe(1);
    });
});
