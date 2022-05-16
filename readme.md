<p align="center">
  <a><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/ringed-planet_1fa90.png" title="Logo"/></a>
</p>
<p align="center">
  <b>
    Essential Cosmos
  </b>
  <br>
  <i>Ultralight Cosmos utilities for JS and TS</i>
  <br>
</p>

---

<br>

<br>

- 🏎 [The TINIEST code size possible](https://bundlephobia.com/package/essential-cosmos)
- ʦ Fully typed with TypeScript (also works with JavaScript)
- 🌲 Tree-shaking and no side-effects
- 🙌 Supports multiple JS versions (CommonJS and ESM)
  - ✅ Node 16, 14, 12, & 10
  - ✅ Web

<br/>

## More Info

![](https://badgen.net/bundlephobia/minzip/essential-cosmos) ![](https://badgen.net/bundlephobia/tree-shaking/essential-cosmos) ![](https://img.shields.io/npm/v/essential-cosmos) ![](https://badgen.net/bundlephobia/dependency-count/essential-cosmos)

<br/>

## Install

```sh
npm install --save essential-cosmos # TypeScript types load automatically

# or if you prefer yarn
yarn add essential-cosmos # TypeScript types load automatically
```

<br/>

## Utils (do not require connecting to a node)

```typescript
import { isCosmosAddress } from 'essential-cosmos';

// or in a commonJS environment
const { isCosmosAddress } = require('essential-cosmos');
```

#### `isCosmosAddress`

Returns a boolean

```typescript
isCosmosAddress(address:string): Boolean
```

<details>
  <summary>View Example</summary>

```typescript
import { isCosmosAddress } from 'essential-cosmos';

isCosmosAddress('cosmos15hmqrc245kryaehxlch7scl9d9znxa58qkpjet');
// true

isCosmosAddress('osmo100a325n9ct4m2egvctrh48zheg2hwl5lr26rzy');
// false
```

</details>

## Support List

- isCosmosAddress
- isJunoAddress
- isOsmosisAddress
- isPersistenceAddress
- isAgoricAddress
- isAkashAddress
- isAssetMantleAddress
- isAxelarAddress
- isBandProtocolAddress
- isBitCannaAddress
- isBitsongAddress
- isCarbonAddress
- isCerberusAddress
- isCertikAddress
- isCheqdAddress
- isChihuahuaAddress
- isComdexAddress
- isCrescentAddress
- isCronosAddress
- isDecentrAddress
- isDigAddress
- isEvmosAddress
- isFetchaiAddress
- isFirmachainAddress
- isGalaxyAddress
- isGravityBridgeAddress
- isInjectiveAddress
- isIrisAddress
- isIxoAddress
- isKavaAddress
- isKiAddress
- isKonstellationAddress
- isLikeCoinAddress
- isLumAddress
- isMediblocAddress
- isMemeAddress
- isMicrotickAddress
- isOraichainAddress
- isProvenanceAddress
- isRegenAddress
- isRizonAddress
- isSecretAddress
- isSentinelAddress
- isSifchainAddres
- isStarnameAddress
- isTerraAddress
- isUmeeAddress
- isVidulumAddress
- isStargazeAddress