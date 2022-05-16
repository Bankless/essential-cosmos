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
  persistence: {
    prefix: 'persistence1',
  },
  agoric: {
    prefix: 'agoric1',
  },
  akash: {
    prefix: 'akash1',
  },
  assetMantle: {
    prefix: 'mantle1',
  },
  axelar: {
    prefix: 'axelar1',
  },
  bandProtocol: {
    prefix: 'band1',
  },
  bitCanna: {
    prefix: 'bcna1',
  },
  bitsong: {
    prefix: 'bitsong1',
  },
  carbon: {
    prefix: 'swth1',
  },
  cerberus: {
    prefix: 'cerberus1',
  },
  certik: {
    prefix: 'certik1',
  },
  cheqd: {
    prefix: 'cheqd1',
  },
  chihuahua: {
    prefix: 'chihuahua1',
  },
  comdex: {
    prefix: 'comdex1',
  },
  crescent: {
    prefix: 'cre1',
  },
  cronos: {
    prefix: 'cro1',
  },
  decentr: {
    prefix: 'decentr1',
  },
  dig: {
    prefix: 'dig1',
  },
  evmos: {
    prefix: 'evmos1',
  },
  fetchai: {
    prefix: 'fetch1',
  },
  firmachain: {
    prefix: 'firma1',
  },
  galaxy: {
    prefix: 'galaxy1',
  },
  gravityBridge: {
    prefix: 'gravity1',
  },
  injective: {
    prefix: 'inj1',
  },
  iris: {
    prefix: 'iaa1',
  },
  ixo: {
    prefix: 'ixo1',
  },
  kava: {
    prefix: 'kava1',
  },
  ki: {
    prefix: 'ki1',
  },
  konstellation: {
    prefix: 'darc1',
  },
  likeCoin: {
    prefix: 'like1',
  },
  lum: {
    prefix: 'lum1',
  },
  medibloc: {
    prefix: 'panacea1',
  },
  meme: {
    prefix: 'meme1',
  },
  microtick: {
    prefix: 'micro1',
  },
  oraichain: {
    prefix: 'orai1',
  },
  provenance: {
    prefix: 'pb1',
  },
  rizon: {
    prefix: 'rizon1',
  },
  sentinel: {
    prefix: 'sent1',
  },
  sifchain: {
    prefix: 'sif1',
  },
  starname: {
    prefix: 'star1',
  },
  terra: {
    prefix: 'terra1',
  },
  umee: {
    prefix: 'umee1',
  },
  vidulum: {
    prefix: 'vdl1',
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
export const isPersistenceAddress = buildChainAddressValidator('persistence');
export const isStargazeAddress = buildChainAddressValidator('stargaze');
export const isAgoricAddress = buildChainAddressValidator('agoric');
export const isAkashAddress = buildChainAddressValidator('akash');
export const isAssetMantleAddress = buildChainAddressValidator('assetMantle');
export const isAxelarAddress = buildChainAddressValidator('axelar');
export const isBandProtocolAddress = buildChainAddressValidator('bandProtocol');
export const isBitCannaAddress = buildChainAddressValidator('bitCanna');
export const isBitsongAddress = buildChainAddressValidator('bitsong');
export const isCarbonAddress = buildChainAddressValidator('carbon');
export const isCerberusAddress = buildChainAddressValidator('cerberus');
export const isCertikAddress = buildChainAddressValidator('certik');
export const isCheqdAddress = buildChainAddressValidator('cheqd');
export const isChihuahuaAddress = buildChainAddressValidator('chihuahua');
export const isComdexAddress = buildChainAddressValidator('comdex');
export const isCrescentAddress = buildChainAddressValidator('crescent');
export const isCronosAddress = buildChainAddressValidator('cronos');
export const isDecentrAddress = buildChainAddressValidator('decentr');
export const isDigAddress = buildChainAddressValidator('dig');
export const isEvmosAddress = buildChainAddressValidator('evmos');
export const isFetchaiAddress = buildChainAddressValidator('fetchai');
export const isFirmachainAddress = buildChainAddressValidator('firmachain');
export const isGalaxyAddress = buildChainAddressValidator('galaxy');
export const isGravityBridgeAddress =
  buildChainAddressValidator('gravityBridge');
export const isInjectiveAddress = buildChainAddressValidator('injective');
export const isIrisAddress = buildChainAddressValidator('iris');
export const isIxoAddress = buildChainAddressValidator('ixo');
export const isKavaAddress = buildChainAddressValidator('kava');
export const isKiAddress = buildChainAddressValidator('ki');
export const isKonstellationAddress =
  buildChainAddressValidator('konstellation');
export const isLikeCoinAddress = buildChainAddressValidator('likeCoin');
export const isLumAddress = buildChainAddressValidator('lum');
export const isMediblocAddress = buildChainAddressValidator('medibloc');
export const isMemeAddress = buildChainAddressValidator('meme');
export const isMicrotickAddress = buildChainAddressValidator('microtick');
export const isOraichainAddress = buildChainAddressValidator('oraichain');
export const isProvenanceAddress = buildChainAddressValidator('provenance');
export const isRizonAddress = buildChainAddressValidator('rizon');
export const isSentinelAddress = buildChainAddressValidator('sentinel');
export const isSifchainAddres = buildChainAddressValidator('sifchain');
export const isStarnameAddress = buildChainAddressValidator('starname');
export const isTerraAddress = buildChainAddressValidator('terra');
export const isUmeeAddress = buildChainAddressValidator('umee');
export const isVidulumAddress = buildChainAddressValidator('vidulum');
