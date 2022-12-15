import { Category } from './category';

describe('Notification category', () => {
  it('should be able to create a notification content', () => {
    const content = new Category('Category Test.');
    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification category with less than 5 characters', () => {
    //passing the content value through a callback
    expect(() => new Category('Test')).toThrow();
  });

  it('should not be able to create a notification category with more than 20 characters', () => {
    //passing the content value through a callback
    expect(() => new Category('a'.repeat(21))).toThrow();
  });
});
