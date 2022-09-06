import './style.css';
import { addResource } from '../../components/i18n';
import { EduRegion, EduRoleTypeEnum, EduRoomTypeEnum } from 'agora-edu-core';

// addResource();

const REACT_APP_AGORA_APP_SDK_DOMAIN = process.env.REACT_APP_AGORA_APP_SDK_DOMAIN;
const REACT_APP_AGORA_APP_ID = process.env.REACT_APP_AGORA_APP_ID;
const REACT_APP_AGORA_APP_CERTIFICATE = process.env.REACT_APP_AGORA_APP_CERTIFICATE;

declare global {
  interface Window {
    __launchRegion: string;
    __launchLanguage: string;
    __launchRoomName: string;
    __launchUserName: string;
    __launchRoleType: string;
    __launchRoomType: string;
    __launchCompanyId: string;
    __launchProjectId: string;
  }
}

export const HomePage = () => {
  return <div>Home</div>
};
