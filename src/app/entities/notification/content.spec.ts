import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade.');
    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    //passing the content value through a callback
    expect(() => new Content('Test')).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    //passing the content value through a callback
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
