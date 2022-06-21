const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it('Should return sha when event is string', () => {
    const key = deterministicPartitionKey('string..');
  });

  it('Should return same partitionKey when event object partitionKey is less than 256', () => {
    const key = deterministicPartitionKey({
      commit: '1',
      comment: 'aa',
      partitionKey: 'sameagain'
    });
    expect(key).toBe(JSON.stringify('sameagain'));
  });

  it('should return sha when event object partitionKey is more tha 256', () => {
    const key = deterministicPartitionKey({
      commit: '1',
      comment: 'aa',
      partitionKey: 'masxxxxaadsfadsfasdfsafdasdfsadfsadfsadfsadfsadfasdfasdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
    });
    console.log(key);
  });
});
