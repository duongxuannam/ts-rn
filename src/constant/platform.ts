import {Platform as NativePlatform} from 'react-native';

export const PLATFORM = NativePlatform.OS;
export const isAndroid = PLATFORM === 'android';
export const isIos = PLATFORM === 'ios';
