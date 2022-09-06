import { LanguageEnum, LaunchOption } from "agora-proctor-sdk";
import { getBrowserLanguage, GlobalStorage } from "../utils";
import { EduRegion } from "agora-edu-core";
import { action, autorun, observable, toJS } from "mobx";
import { changeLanguage } from "~ui-kit";
import { ToastType } from "agora-proctor-sdk/lib/agora-proctor-sdk/src/infra/stores/common/share-ui";

export type HomeLaunchOption = Omit<LaunchOption, "listener"> & {
  appId: string;
  sdkDomain: string;
  region: EduRegion;
  curService?: string;
  scenes?: any;
};
const regionKey = `home_store_demo_launch_region`;
const launchKey = `home_store_demo_launch_options`;
const languageKey = `home_store_demo_launch_language`;

export const getRegion = (): EduRegion => {
  return (
    GlobalStorage.read(regionKey) ||
    regionByLang[getBrowserLanguage()] ||
    EduRegion.NA
  );
};

export const getLanguage = (): LanguageEnum => {
  return GlobalStorage.read(languageKey) || getBrowserLanguage() || "en";
};

const regionByLang = {
  zh: EduRegion.CN,
  en: EduRegion.NA,
};

export const clearHomeOption = () => {
  GlobalStorage.clear(launchKey);
  GlobalStorage.clear(regionKey);
  GlobalStorage.clear(languageKey);
};

export class HomeStore {
  launchOption!: HomeLaunchOption;

  @observable
  region: EduRegion = EduRegion.NA;

  @observable
  language: LanguageEnum = "en";

  @observable
  toastList: ToastType[] = [];

  constructor() {
    this.launchOption = GlobalStorage.read(launchKey) || {};
    this.setRegion(getRegion());
    this.setLanguage(getLanguage());
    autorun(() => {
      if (this.region) {
        GlobalStorage.save(regionKey, this.region);
      } else {
        GlobalStorage.clear(regionKey);
      }
      if (this.language) {
        GlobalStorage.save(languageKey, this.language);
      } else {
        GlobalStorage.clear(languageKey);
      }
    });
  }

  @action.bound
  addToast(toast: ToastType) {
    this.toastList.push(toast);
  }

  @action.bound
  removeToast(id: string) {
    this.toastList = this.toastList.filter((it) => it.id != id);
  }

  @action
  setRegion = (region: EduRegion) => {
    this.region = region;
  };

  @action
  setLanguage = (language: LanguageEnum) => {
    this.language = language;
    changeLanguage(language);
    this.launchOption.language = language;
  };

  @action
  setLaunchConfig(payload: HomeLaunchOption) {
    this.launchOption = payload;
    if (payload.region) {
      this.region = payload.region;
    }
    GlobalStorage.save(regionKey, toJS(this.region));
    GlobalStorage.save(launchKey, this.launchOption);
  }

  get launchConfig() {
    const config = GlobalStorage.read(launchKey) || {};
    config.region = GlobalStorage.read(regionKey);
    config.language = GlobalStorage.read(regionKey);
    return config;
  }

  clear() {
    clearHomeOption();
    this.region = getRegion();
    this.language = getLanguage();
    this.launchOption = GlobalStorage.read(launchKey) || {};
  }
}
