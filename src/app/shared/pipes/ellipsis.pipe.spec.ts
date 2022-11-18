import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  
  it('create an instance', () => {
    const pipe = new EllipsisPipe();
    expect(pipe).toBeTruthy();
  });

  // testing "random text" with no params mentioned
  it('transforms "random text" to "random text" when no params mentioned', () => {
    const pipe = new EllipsisPipe();
    const transformedText = pipe.transform('random text');
    expect(transformedText).toBe('random text');
  });

  // testing whether the "random text" is transforming to "random tex..." or not
  it('should tranform "random text" to "random tex..."', () => {
    const pipe = new EllipsisPipe();
    const transformedText = pipe.transform('random text', 10);
    expect(transformedText).toBe('random tex...');
  });

  // testing to show undefined if no value is passed
  it('should show undefined if no value is passed', () => {
    const pipe = new EllipsisPipe();
    expect(pipe.transform('')).toBe('Value is empty');
  });
});
