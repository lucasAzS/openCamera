package com.opencamera

import android.app.Activity
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import android.content.Intent
import android.provider.MediaStore

class OpenCameraModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

   companion object {
    const val NAME = "OpenCamera"

        const val OPEN_CAMERA_REQUEST_CODE = 1
    }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  fun openCamera(promise: Promise ) {
    val currentActivity = currentActivity ?: return
    try {
            val intent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)
            currentActivity.startActivityForResult(intent, OPEN_CAMERA_REQUEST_CODE)
            promise.resolve(true)
        } catch (e: Exception) {
            promise.reject(e)
        }
  }



}
