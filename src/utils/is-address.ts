export const cosmosNetworks = {
  cosmos: {
    prefix: 'cosmos1',
  },
  osmosis: {
    prefix: 'osmo1',
  },
  stargaze: {
    prefix: 'stars1',
  },
  desmos: {
    prefix: 'desmos1',
  },
  juno: {
    prefix: 'juno1',
  },
  regen: {
    prefix: 'regen1',
  },
  secret: {
    prefix: 'secret1',
  },
} as const;

// remove all network prefixes from any cosmos chain address
export const stripChainPrefix = (address: string): string =>
  address.replace(/^.*1/, '');

const isIBCAddressProperLength = (address: string): boolean => {
  const strippedAddress = stripChainPrefix(address);
  return strippedAddress.length === 38;
};

const buildChainAddressValidator = (
  chain: keyof typeof cosmosNetworks,
): ((address: string) => boolean) => {
  return (address) => {
    const isCosmos = address.startsWith(cosmosNetworks[chain].prefix);
    return isCosmos && isIBCAddressProperLength(address);
  };
};

export const isCosmosAddress = buildChainAddressValidator('cosmos');
export const isOsmosisAddress = buildChainAddressValidator('osmosis');
export const isJunoAddress = buildChainAddressValidator('juno');
export const isSecretAddress = buildChainAddressValidator('secret');
export const isRegenAddress = buildChainAddressValidator('regen');
