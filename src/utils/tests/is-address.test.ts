import {
  isCosmosAddress,
  isJunoAddress,
  isOsmosisAddress,
  isPersistenceAddress,
  isAgoricAddress,
  isAkashAddress,
  isAssetMantleAddress,
  isAxelarAddress,
  isBandProtocolAddress,
  isBitCannaAddress,
  isBitsongAddress,
  isCarbonAddress,
  isCerberusAddress,
  isCertikAddress,
  isCheqdAddress,
  isChihuahuaAddress,
  isComdexAddress,
  isCrescentAddress,
  isCronosAddress,
  isDecentrAddress,
  isDigAddress,
  isEvmosAddress,
  isFetchaiAddress,
  isFirmachainAddress,
  isGalaxyAddress,
  isGravityBridgeAddress,
  isInjectiveAddress,
  isIrisAddress,
  isIxoAddress,
  isKavaAddress,
  isKiAddress,
  isKonstellationAddress,
  isLikeCoinAddress,
  isLumAddress,
  isMediblocAddress,
  isMemeAddress,
  isMicrotickAddress,
  isOraichainAddress,
  isProvenanceAddress,
  isRegenAddress,
  isRizonAddress,
  isSecretAddress,
  isSentinelAddress,
  isSifchainAddres,
  isStarnameAddress,
  isTerraAddress,
  isUmeeAddress,
  isVidulumAddress,
  isStargazeAddress,
  stripChainPrefix,
} from "../is-address";

const cosmosAddress = "cosmos1tu46cysy699hzwu9yekdmxgkh4fac3numz2mh0";
const osmosisAddress = "osmo13hjcyl2azrxkemkt5g36swu8lr929m7fwrl9s0";
const starAddress = "stars100a325n9ct4m2egvctrh48zheg2hwl5lr26rzy";
const desmosAddress = "desmos1hl6peeqj9dvs9p2geq0yrk9qdckzv50yeect8v";
const junoAddress = "juno1qp9vtraygwvyt9y2hvp7z9vfrnj6ltphwa6xlv";
const persistenceAddress = "persistence13hjcyl2azrxkemkt5g36swu8lr929m7fg52xge";
const secretAddress = "secret13hjcyl2azrxkemkt5g36swu8lr929m7fyacump";
const regenAddress = "regen1032k3vtuqymk3lfu9zjkeqwzptvjqwsuhg8r75";

const agoricAddress = "agoric1w2fe5lu8jp02xtaxlak0456fjthe588x7cpjpr";
const akashAddress = "akash16q9nt2g98vmtg794qk5dfy278caxw347sz26rs";
const assetMantleAddress = "mantle10pfr9vg8vnvre6r2g6hdct52tutcz94a3vqj5m";
const axelarAddress = "axelar12048f0g2qvm4xdru9knh7qqq4srr5lqxk48jmu";
const bandProtocolAddress = "band1r00x80djyu6wkxpceegmvn5w9nx65prgvpz48t";
const bitCannaAddress = "bcna1z597yn3p332rzf2yks7sgw70kl0pjdqk3x076l";
const bitsongAddress = "bitsong125hdkukw4pu2urhj4nv366q0avdqv24t0vprxs";
const carbonAddress = "swth1fdqkq5gc5x8h6a0j9hamc30stlvea6zldprt6q";
const cerberusAddress = "cerberus1tnmjjj5ugcunyy75q3c3pn62qpwnf50pxcqpp3";
const certikAddress = "certik169zcqjmz5cejx4cm00g9mntn8xvuca866ffvzz";
const cheqdAddress = "cheqd1lg0vwuu888hu4arnt9egtqrm2662kcrtkqz49j";
const chihuahuaAddress = "chihuahua1tgcypttehx3afugys6eq28h0kpmswfkgcuewfw";
const comdexAddress = "comdex1jqd9gjhuk9gzgq2c25escp2zpp3y4q46dyupw4";
const crescentAddress = "cre14lultfckehtszvzw4ehu0apvsr77afvynqnjm6";
const cronosAddress = "cro139nl5fnhlxu2asduu5zqq8zzev0632jl2uupl8";
const decentrAddress = "decentr1s4qkvw76tnaugnrepc0uds75nwu0qfqs2yfkcf";
const digAddress = "dig1dv3v662kd3pp6pxfagck4zyysas82ads7893xq";
const evmosAddress = "evmos1sp9frqwep52chwavv3xd776myy8gyyvkp6n53z";
const fetchaiAddress = "fetch1nx7wwxv260lfrpcj257zqrn8lwjl6jjnqxkmvx";
const firmachainAddress = "firma1p90hu6pqd57xgdauf0l8dwpau73jkk72qz0pcc";
const galaxyAddress = "galaxy1gp957czryfgyvxwn3tfnyy2f0t9g2p4pejtwpx";
const gravityBridgeAddress = "gravity1pvd3uzer0pv4pyc3h7ft9ky082pd3rj3wtzmw5";
const injectiveAddress = "inj1w3psm8a9td2qz06s46cxss03mz5umxaxwwejk5";
const irisAddress = "iaa1543nj4z07vjqztvu3358fr2z2hcp0qtmdghutn";
const ixoAddress = "ixo1kr8v9qt46ysltgmzcrtgyw5ckke83up65svm8e";
const kavaAddress = "kava10aecvtcxwtqxdslkkses5umy08crghxhnh56dp";
const kiAddress = "ki1wx78v65ppxvgnefhfryc8ksja2hqzksm0s6v7z";
const konstellationAddress = "darc16cmu7rvtzrxqxtv84z6u9qgl2272fak8xxaexr";
const likeCoinAddress = "like1juu0p93ygsmzrp3f0pxl6vd5568kwhph02k2rm";
const lumAddress = "lum1yhaswwgg5tz7veknxwaj8vc8rfa9s0nahkjq30";
const mediblocAddress = "panacea16e4zkqtp7k5h43qrcxwk0spmamq3k286vhdzz4";
const memeAddress = "meme1gp957czryfgyvxwn3tfnyy2f0t9g2p4pmjmed7";
const microtickAddress = "micro1pjtxlrflsyqtwyqkay3u5rz3flhchnedxkcjgj";
const oraichainAddress = "orai1uhcwtfntsvk8gpwfxltesyl4e28aalmqvx7typ";
const provenanceAddress = "pb1wswxl3pc44nwjtwkpl0x95u0msc5hf7r0v608t";
const rizonAddress = "rizon1x7x4jl4d755jyc5r5ntphvtma62rgrkk6c2qpl";
const sentinelAddress = "sent1gekth2cj0na7fr2neh2tu50p3a7qwghpdd9du5";
const sifchainAddress = "sif1lnhxf6war6qlldemkqzp0t3g57hpe9a664epyu";
const starnameAddress = "star1478t4fltj689nqu83vsmhz27quk7uggjwe96yk";
const terraAddress = "terra1259cmu5zyklsdkmgstxhwqpe0utfe5hhyygjdc";
const umeeAddress = "umee16qflfas8a9qjuskg9706n0926v8hac6ac5wgun";
const vidulumAddress = "vdl12fyvgnumjfjewp4gue88ryl9zt7ncsh46nkve5"

describe("cosmos network checkers", () => {
  it("isCosmosAddress", () => {
    expect(isCosmosAddress(cosmosAddress)).toBe(true);
    expect(isCosmosAddress(junoAddress)).toBe(false);
  });
  it("isJunoAddress", () => {
    expect(isJunoAddress(junoAddress)).toBe(true);
    expect(isJunoAddress(cosmosAddress)).toBe(false);
  });
  it("isOsmosisAddress", () => {
    expect(isOsmosisAddress(osmosisAddress)).toBe(true);
    expect(isOsmosisAddress(starAddress)).toBe(false);
  });
  it("isPersistenceAddress", () => {
    expect(isPersistenceAddress(persistenceAddress)).toBe(true);
    expect(isPersistenceAddress(cosmosAddress)).toBe(false);
  });
  it("isAgoricAddress", () => {
    expect(isAgoricAddress(agoricAddress)).toBe(true);
    expect(isAgoricAddress(cosmosAddress)).toBe(false);
  });
  it("isAkashAddress", () => {
    expect(isAkashAddress(akashAddress)).toBe(true);
    expect(isAkashAddress(cosmosAddress)).toBe(false);
  });
  it("isAssetMantleAddress", () => {
    expect(isAssetMantleAddress(assetMantleAddress)).toBe(true);
    expect(isAssetMantleAddress(cosmosAddress)).toBe(false);
  });
  it("isAxelarAddress", () => {
    expect(isAxelarAddress(axelarAddress)).toBe(true);
    expect(isAxelarAddress(cosmosAddress)).toBe(false);
  });
  it("isBandProtocolAddress", () => {
    expect(isBandProtocolAddress(bandProtocolAddress)).toBe(true);
    expect(isBandProtocolAddress(cosmosAddress)).toBe(false);
  });
  it("isBitCannaAddress", () => {
    expect(isBitCannaAddress(bitCannaAddress)).toBe(true);
    expect(isBitCannaAddress(cosmosAddress)).toBe(false);
  });
  it("isBitsongAddress", () => {
    expect(isBitsongAddress(bitsongAddress)).toBe(true);
    expect(isBitsongAddress(cosmosAddress)).toBe(false);
  });
  it("isCarbonAddress", () => {
    expect(isCarbonAddress(carbonAddress)).toBe(true);
    expect(isCarbonAddress(cosmosAddress)).toBe(false);
  });
  it("isCerberusAddress", () => {
    expect(isCerberusAddress(cerberusAddress)).toBe(true);
    expect(isCerberusAddress(cosmosAddress)).toBe(false);
  });
  it("isCertikAddress", () => {
    expect(isCertikAddress(certikAddress)).toBe(true);
    expect(isCertikAddress(cosmosAddress)).toBe(false);
  });
  it("isCheqdAddress", () => {
    expect(isCheqdAddress(cheqdAddress)).toBe(true);
    expect(isCheqdAddress(cosmosAddress)).toBe(false);
  });
  it("isChihuahuaAddress", () => {
    expect(isChihuahuaAddress(chihuahuaAddress)).toBe(true);
    expect(isChihuahuaAddress(cosmosAddress)).toBe(false);
  });
  it("isComdexAddress", () => {
    expect(isComdexAddress(comdexAddress)).toBe(true);
    expect(isComdexAddress(cosmosAddress)).toBe(false);
  });
  it("isCrescentAddress", () => {
    expect(isCrescentAddress(crescentAddress)).toBe(true);
    expect(isCrescentAddress(cosmosAddress)).toBe(false);
  });
  it("isCronosAddress", () => {
    expect(isCronosAddress(cronosAddress)).toBe(true);
    expect(isCronosAddress(cosmosAddress)).toBe(false);
  });
  it("isDecentrAddress", () => {
    expect(isDecentrAddress(decentrAddress)).toBe(true);
    expect(isDecentrAddress(cosmosAddress)).toBe(false);
  });
  it("isDigAddress", () => {
    expect(isDigAddress(digAddress)).toBe(true);
    expect(isDigAddress(cosmosAddress)).toBe(false);
  });
  it("isEvmosAddress", () => {
    expect(isEvmosAddress(evmosAddress)).toBe(true);
    expect(isEvmosAddress(cosmosAddress)).toBe(false);
  });
  it("isFetchaiAddress", () => {
    expect(isFetchaiAddress(fetchaiAddress)).toBe(true);
    expect(isFetchaiAddress(cosmosAddress)).toBe(false);
  });
  it("isFirmachainAddress", () => {
    expect(isFirmachainAddress(firmachainAddress)).toBe(true);
    expect(isFirmachainAddress(cosmosAddress)).toBe(false);
  });
  it("isGalaxyAddress", () => {
    expect(isGalaxyAddress(galaxyAddress)).toBe(true);
    expect(isGalaxyAddress(cosmosAddress)).toBe(false);
  });
  it("isGravityBridgeAddress", () => {
    expect(isGravityBridgeAddress(gravityBridgeAddress)).toBe(true);
    expect(isGravityBridgeAddress(cosmosAddress)).toBe(false);
  });
  it("isInjectiveAddress", () => {
    expect(isInjectiveAddress(injectiveAddress)).toBe(true);
    expect(isInjectiveAddress(cosmosAddress)).toBe(false);
  });
  it("isIrisAddress", () => {
    expect(isIrisAddress(irisAddress)).toBe(true);
    expect(isIrisAddress(cosmosAddress)).toBe(false);
  });
  it("isIxoAddress", () => {
    expect(isIxoAddress(ixoAddress)).toBe(true);
    expect(isIxoAddress(cosmosAddress)).toBe(false);
  });
  it("isKavaAddress", () => {
    expect(isKavaAddress(kavaAddress)).toBe(true);
    expect(isKavaAddress(cosmosAddress)).toBe(false);
  });
  it("isKiAddress", () => {
    expect(isKiAddress(kiAddress)).toBe(true);
    expect(isKiAddress(cosmosAddress)).toBe(false);
  });
  it("isKonstellationAddress", () => {
    expect(isKonstellationAddress(konstellationAddress)).toBe(true);
    expect(isKonstellationAddress(cosmosAddress)).toBe(false);
  });
  it("isLikeCoinAddress", () => {
    expect(isLikeCoinAddress(likeCoinAddress)).toBe(true);
    expect(isLikeCoinAddress(cosmosAddress)).toBe(false);
  });
  it("isLumAddress", () => {
    expect(isLumAddress(lumAddress)).toBe(true);
    expect(isLumAddress(cosmosAddress)).toBe(false);
  });
  it("isMediblocAddress", () => {
    expect(isMediblocAddress(mediblocAddress)).toBe(true);
    expect(isMediblocAddress(cosmosAddress)).toBe(false);
  });
  it("isMemeAddress", () => {
    expect(isMemeAddress(memeAddress)).toBe(true);
    expect(isMemeAddress(cosmosAddress)).toBe(false);
  });
  it("isMicrotickAddress", () => {
    expect(isMicrotickAddress(microtickAddress)).toBe(true);
    expect(isMicrotickAddress(cosmosAddress)).toBe(false);
  });
  it("isOraichainAddress", () => {
    expect(isOraichainAddress(oraichainAddress)).toBe(true);
    expect(isOraichainAddress(cosmosAddress)).toBe(false);
  });
  it("isProvenanceAddress", () => {
    expect(isProvenanceAddress(provenanceAddress)).toBe(true);
    expect(isProvenanceAddress(cosmosAddress)).toBe(false);
  });
  it("isRegenAddress", () => {
    expect(isRegenAddress(regenAddress)).toBe(true);
    expect(isRegenAddress(cosmosAddress)).toBe(false);
  });
  it("isRizonAddress", () => {
    expect(isRizonAddress(rizonAddress)).toBe(true);
    expect(isRizonAddress(cosmosAddress)).toBe(false);
  });
  it("isSecretAddress", () => {
    expect(isSecretAddress(secretAddress)).toBe(true);
    expect(isSecretAddress(cosmosAddress)).toBe(false);
  });
  it("isSentinelAddress", () => {
    expect(isSentinelAddress(sentinelAddress)).toBe(true);
    expect(isSentinelAddress(cosmosAddress)).toBe(false);
  });
  it("isSifchainAddres", () => {
    expect(isSifchainAddres(sifchainAddress)).toBe(true);
    expect(isSifchainAddres(cosmosAddress)).toBe(false);
  });
  it("isStarnameAddress", () => {
    expect(isStarnameAddress(starnameAddress)).toBe(true);
    expect(isStarnameAddress(cosmosAddress)).toBe(false);
  });
  it("isTerraAddress", () => {
    expect(isTerraAddress(terraAddress)).toBe(true);
    expect(isTerraAddress(cosmosAddress)).toBe(false);
  });
  it("isUmeeAddress", () => {
    expect(isUmeeAddress(umeeAddress)).toBe(true);
    expect(isUmeeAddress(cosmosAddress)).toBe(false);
  });
  it("isVidulumAddress", () => {
    expect(isVidulumAddress(vidulumAddress)).toBe(true);
    expect(isVidulumAddress(cosmosAddress)).toBe(false);
  });
  it("isStargazeAddress", () => {
    expect(isStargazeAddress(starAddress)).toBe(true);
    expect(isStargazeAddress(cosmosAddress)).toBe(false);
  });
});

describe("stripChainPrefix", () => {
  it("strips prefix of known chains", () => {
    expect(stripChainPrefix(cosmosAddress)).toBe(
      "tu46cysy699hzwu9yekdmxgkh4fac3numz2mh0",
    );
    expect(stripChainPrefix(osmosisAddress)).toBe(
      "3hjcyl2azrxkemkt5g36swu8lr929m7fwrl9s0",
    );
    expect(stripChainPrefix(starAddress)).toBe(
      "00a325n9ct4m2egvctrh48zheg2hwl5lr26rzy",
    );
    expect(stripChainPrefix(desmosAddress)).toBe(
      "hl6peeqj9dvs9p2geq0yrk9qdckzv50yeect8v",
    );
    expect(stripChainPrefix(junoAddress)).toBe(
      "qp9vtraygwvyt9y2hvp7z9vfrnj6ltphwa6xlv",
    );
    expect(stripChainPrefix(persistenceAddress)).toBe(
      "3hjcyl2azrxkemkt5g36swu8lr929m7fg52xge",
    );
    expect(stripChainPrefix(secretAddress)).toBe(
      "3hjcyl2azrxkemkt5g36swu8lr929m7fyacump",
    );
    expect(stripChainPrefix(regenAddress)).toBe(
      "032k3vtuqymk3lfu9zjkeqwzptvjqwsuhg8r75",
    );
    expect(stripChainPrefix(agoricAddress)).toBe(
      "w2fe5lu8jp02xtaxlak0456fjthe588x7cpjpr",
    );
    expect(stripChainPrefix(akashAddress)).toBe(
      "6q9nt2g98vmtg794qk5dfy278caxw347sz26rs",
    );
    expect(stripChainPrefix(assetMantleAddress)).toBe(
      "0pfr9vg8vnvre6r2g6hdct52tutcz94a3vqj5m",
    );
    expect(stripChainPrefix(axelarAddress)).toBe(
      "2048f0g2qvm4xdru9knh7qqq4srr5lqxk48jmu",
    );
    expect(stripChainPrefix(bandProtocolAddress)).toBe(
      "r00x80djyu6wkxpceegmvn5w9nx65prgvpz48t",
    );
    expect(stripChainPrefix(bitCannaAddress)).toBe(
      "z597yn3p332rzf2yks7sgw70kl0pjdqk3x076l",
    );
    expect(stripChainPrefix(bitsongAddress)).toBe(
      "25hdkukw4pu2urhj4nv366q0avdqv24t0vprxs",
    );
    expect(stripChainPrefix(carbonAddress)).toBe(
      "fdqkq5gc5x8h6a0j9hamc30stlvea6zldprt6q",
    );
    expect(stripChainPrefix(cerberusAddress)).toBe(
      "tnmjjj5ugcunyy75q3c3pn62qpwnf50pxcqpp3",
    );
    expect(stripChainPrefix(certikAddress)).toBe(
      "69zcqjmz5cejx4cm00g9mntn8xvuca866ffvzz",
    );
    expect(stripChainPrefix(cheqdAddress)).toBe(
      "lg0vwuu888hu4arnt9egtqrm2662kcrtkqz49j",
    );
    expect(stripChainPrefix(chihuahuaAddress)).toBe(
      "tgcypttehx3afugys6eq28h0kpmswfkgcuewfw",
    );
    expect(stripChainPrefix(comdexAddress)).toBe(
      "jqd9gjhuk9gzgq2c25escp2zpp3y4q46dyupw4",
    );
    expect(stripChainPrefix(crescentAddress)).toBe(
      "4lultfckehtszvzw4ehu0apvsr77afvynqnjm6",
    );
    expect(stripChainPrefix(cronosAddress)).toBe(
      "39nl5fnhlxu2asduu5zqq8zzev0632jl2uupl8",
    );
    expect(stripChainPrefix(decentrAddress)).toBe(
      "s4qkvw76tnaugnrepc0uds75nwu0qfqs2yfkcf",
    );
    expect(stripChainPrefix(digAddress)).toBe(
      "dv3v662kd3pp6pxfagck4zyysas82ads7893xq",
    );
    expect(stripChainPrefix(evmosAddress)).toBe(
      "sp9frqwep52chwavv3xd776myy8gyyvkp6n53z",
    );
    expect(stripChainPrefix(fetchaiAddress)).toBe(
      "nx7wwxv260lfrpcj257zqrn8lwjl6jjnqxkmvx",
    );
    expect(stripChainPrefix(firmachainAddress)).toBe(
      "p90hu6pqd57xgdauf0l8dwpau73jkk72qz0pcc",
    );
    expect(stripChainPrefix(galaxyAddress)).toBe(
      "gp957czryfgyvxwn3tfnyy2f0t9g2p4pejtwpx",
    );
    expect(stripChainPrefix(gravityBridgeAddress)).toBe(
      "pvd3uzer0pv4pyc3h7ft9ky082pd3rj3wtzmw5",
    );
    expect(stripChainPrefix(injectiveAddress)).toBe(
      "w3psm8a9td2qz06s46cxss03mz5umxaxwwejk5",
    );
    expect(stripChainPrefix(irisAddress)).toBe(
      "543nj4z07vjqztvu3358fr2z2hcp0qtmdghutn",
    );
    expect(stripChainPrefix(ixoAddress)).toBe(
      "kr8v9qt46ysltgmzcrtgyw5ckke83up65svm8e",
    );
    expect(stripChainPrefix(kavaAddress)).toBe(
      "0aecvtcxwtqxdslkkses5umy08crghxhnh56dp",
    );
    expect(stripChainPrefix(kiAddress)).toBe(
      "wx78v65ppxvgnefhfryc8ksja2hqzksm0s6v7z",
    );
    expect(stripChainPrefix(konstellationAddress)).toBe(
      "6cmu7rvtzrxqxtv84z6u9qgl2272fak8xxaexr",
    );
    expect(stripChainPrefix(likeCoinAddress)).toBe(
      "juu0p93ygsmzrp3f0pxl6vd5568kwhph02k2rm",
    );
    expect(stripChainPrefix(lumAddress)).toBe(
      "yhaswwgg5tz7veknxwaj8vc8rfa9s0nahkjq30",
    );
    expect(stripChainPrefix(mediblocAddress)).toBe(
      "6e4zkqtp7k5h43qrcxwk0spmamq3k286vhdzz4",
    );
    expect(stripChainPrefix(memeAddress)).toBe(
      "gp957czryfgyvxwn3tfnyy2f0t9g2p4pmjmed7",
    );
    expect(stripChainPrefix(microtickAddress)).toBe(
      "pjtxlrflsyqtwyqkay3u5rz3flhchnedxkcjgj",
    );
    expect(stripChainPrefix(oraichainAddress)).toBe(
      "uhcwtfntsvk8gpwfxltesyl4e28aalmqvx7typ",
    );
    expect(stripChainPrefix(provenanceAddress)).toBe(
      "wswxl3pc44nwjtwkpl0x95u0msc5hf7r0v608t",
    );
    expect(stripChainPrefix(rizonAddress)).toBe(
      "x7x4jl4d755jyc5r5ntphvtma62rgrkk6c2qpl",
    );
    expect(stripChainPrefix(sentinelAddress)).toBe(
      "gekth2cj0na7fr2neh2tu50p3a7qwghpdd9du5",
    );
    expect(stripChainPrefix(sifchainAddress)).toBe(
      "lnhxf6war6qlldemkqzp0t3g57hpe9a664epyu",
    );
    expect(stripChainPrefix(starnameAddress)).toBe(
      "478t4fltj689nqu83vsmhz27quk7uggjwe96yk",
    );
    expect(stripChainPrefix(terraAddress)).toBe(
      "259cmu5zyklsdkmgstxhwqpe0utfe5hhyygjdc",
    );
    expect(stripChainPrefix(umeeAddress)).toBe(
      "6qflfas8a9qjuskg9706n0926v8hac6ac5wgun",
    );
    expect(stripChainPrefix(vidulumAddress)).toBe(
      "2fyvgnumjfjewp4gue88ryl9zt7ncsh46nkve5",
    );
  });
  it("strips prefix of unsaved chain (infers the prefix)", () => {
    expect(
      stripChainPrefix("earnifi100a325n9ct4m2egvctrh48zheg2hwl5lr26rzy"),
    ).toBe("00a325n9ct4m2egvctrh48zheg2hwl5lr26rzy");
  });
});
