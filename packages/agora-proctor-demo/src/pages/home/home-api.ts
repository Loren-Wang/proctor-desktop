import { EduRegion } from "agora-edu-core";

const REACT_APP_AGORA_APP_TOKEN_DOMAIN =
  process.env.REACT_APP_AGORA_APP_TOKEN_DOMAIN;
export class HomeApi {
  static shared = new HomeApi();
  domain = "";
  builderDomain = "";

  setDomainRegion(region: EduRegion) {
    let tokenDomain = "";
    let tokenDomainCollection: any = {};

    try {
      tokenDomainCollection = JSON.parse(`${REACT_APP_AGORA_APP_TOKEN_DOMAIN}`);
    } catch (e) {
      tokenDomain = `${REACT_APP_AGORA_APP_TOKEN_DOMAIN}`;
    }

    if (!tokenDomain && tokenDomainCollection) {
      switch (region) {
        case "CN":
          tokenDomain = tokenDomainCollection["prod_cn"];
          break;
        case "AP":
          tokenDomain = tokenDomainCollection["prod_ap"];
          break;
        case "NA":
          tokenDomain = tokenDomainCollection["prod_na"];
          break;
        case "EU":
          tokenDomain = tokenDomainCollection["prod_eu"];
          break;
      }
    }

    HomeApi.shared.domain = tokenDomain;
  }

  setBuilderDomainRegion(region: EduRegion) {
    let tokenDomain = "";
    let tokenDomainCollection: any = {};

    try {
      tokenDomainCollection = JSON.parse(`${REACT_APP_AGORA_APP_TOKEN_DOMAIN}`);
    } catch (e) {
      tokenDomain = `${REACT_APP_AGORA_APP_TOKEN_DOMAIN}`;
    }

    if (!tokenDomain && tokenDomainCollection) {
      switch (region) {
        case "CN":
          tokenDomain = tokenDomainCollection["prod_cn"];
          break;
        case "AP":
          tokenDomain = tokenDomainCollection["prod_ap"];
          break;
        case "NA":
          tokenDomain = tokenDomainCollection["prod_na"];
          break;
        case "EU":
          tokenDomain = tokenDomainCollection["prod_eu"];
          break;
      }
    }

    HomeApi.shared.builderDomain = tokenDomain;
  }
}
