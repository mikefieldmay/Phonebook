import { SortPipe } from './sort.pipe';

describe('SortPipe', () => {
  let pipe: SortPipe;
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
  let order: string;


    beforeAll(() => {
      pipe = new SortPipe();
    });

    it('creates an instance', () => {
      expect(pipe).toBeTruthy();
    });

    it('sorts an array a to z', () => {
      order = 'aToZ';
      const transformedArray = pipe.transform(array, order);
      expect(transformedArray[0]).toBe(contactTwo);
    });

    it('sorts an array z to a', () => {
      order = 'zToA';
      const transformedArray = pipe.transform(array, order);
      expect(transformedArray[0]).toBe(contactOne);
    });
});
