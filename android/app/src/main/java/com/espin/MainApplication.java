package com.espin;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.reactlibrary.RNPayTmPackage;
import com.lewin.qrcode.QRScanReaderPackage;
import com.imagepicker.ImagePickerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import org.reactnative.camera.RNCameraPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import cl.json.RNSharePackage;
import cl.json.ShareApplication;
import java.util.Arrays;
import java.util.List;
import com.airbnb.android.react.maps.MapsPackage;
public class MainApplication extends Application implements ShareApplication, ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNPayTmPackage(),
            new QRScanReaderPackage(),
            new ImagePickerPackage(),
            new VectorIconsPackage(),
            new RNCameraPackage(),
          new MapsPackage(),
          new RNSharePackage()

      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
     public String getFileProviderAuthority() {
            return "com.espin.provider";
     }

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }

}
