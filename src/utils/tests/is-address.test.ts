import {
  isCosmosAddress,
  isJunoAddress,
  isOsmosisAddress,
  stripChainPrefix,
} from '../is-address';

const cosmosAddress = 'cosmos1tu46cysy699hzwu9yekdmxgkh4fac3numz2mh0';
const osmosisAddress = 'osmo13hjcyl2azrxkemkt5g36swu8lr929m7fwrl9s0';
const starAddress = 'stars100a325n9ct4m2egvctrh48zheg2hwl5lr26rzy';
const desmosAddress = 'desmos1hl6peeqj9dvs9p2geq0yrk9qdckzv50yeect8v';
const junoAddress = 'juno1qp9vtraygwvyt9y2hvp7z9vfrnj6ltphwa6xlv';
const secretAddress = 'secret13hjcyl2azrxkemkt5g36swu8lr929m7fyacump';
const regenAddress = 'regen1032k3vtuqymk3lfu9zjkeqwzptvjqwsuhg8r75';

describe('cosmos network checkers', () => {
  it('isCosmosAddress', () => {
    expect(isCosmosAddress(cosmosAddress)).toBe(true);
    expect(isCosmosAddress(junoAddress)).toBe(false);
  });
  it('isJunoAddress', () => {
    expect(isJunoAddress(junoAddress)).toBe(true);
    expect(isJunoAddress(cosmosAddress)).toBe(false);
  });
  it('isOsmosisAddress', () => {
    expect(isOsmosisAddress(osmosisAddress)).toBe(true);
    expect(isOsmosisAddress(starAddress)).toBe(false);
  });
});

describe('stripChainPrefix', () => {
  it('strips prefix of known chains', () => {
    expect(stripChainPrefix(cosmosAddress)).toBe(
      'tu46cysy699hzwu9yekdmxgkh4fac3numz2mh0',
    );
    expect(stripChainPrefix(starAddress)).toBe(
      '00a325n9ct4m2egvctrh48zheg2hwl5lr26rzy',
    );
    expect(stripChainPrefix(desmosAddress)).toBe(
      'hl6peeqj9dvs9p2geq0yrk9qdckzv50yeect8v',
    );
    expect(stripChainPrefix(junoAddress)).toBe(
      'qp9vtraygwvyt9y2hvp7z9vfrnj6ltphwa6xlv',
    );
  });
  it('strips prefix of unsaved chain (infers the prefix)', () => {
    expect(
      stripChainPrefix('earnifi100a325n9ct4m2egvctrh48zheg2hwl5lr26rzy'),
    ).toBe('00a325n9ct4m2egvctrh48zheg2hwl5lr26rzy');
  });
});
