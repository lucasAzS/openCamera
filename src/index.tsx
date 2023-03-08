import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'open-camera' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const OpenCamera = NativeModules.OpenCamera
  ? NativeModules.OpenCamera
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export interface Bundle {
  text: string;
}

export function openCamera() {
  return OpenCamera.openCamera()
    .then((result: boolean) => console.log(result))
    .catch((error: string) => console.error(error));
}

export function openAndLog(bundle: Bundle) {
  return OpenCamera.openAndLog(bundle);
}
