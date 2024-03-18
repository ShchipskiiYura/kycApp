import {useRoute} from '@react-navigation/native';
import React from 'react';
import WebView from 'react-native-webview';

const WebViewScreen = props => {
  const {params} = useRoute();

  const link = params?.link;

  const handleNavigationState = async newNavState => {
    console.log(
      'handleNavigationState newNavState',
      JSON.stringify(newNavState),
    );
  };

  const handleWebViewMessage = event => {
    console.log(
      'handleWebViewMessage event data',
      JSON.stringify(event.nativeEvent.data),
    );
  };

  return (
    <WebView
      source={{
        uri: link || '',
      }}
      useWebKit
      originWhitelist={['*']}
      bounces
      allowsInlineMediaPlayback
      mediaPlaybackRequiresUserAction={false}
      startInLoadingState
      allowsFullscreenVideo
      mediaCapturePermissionGrantType="grant"
      autoManageStatusBarEnabled={false}
      useWebView2
      incognito
      onNavigationStateChange={handleNavigationState}
      onMessage={handleWebViewMessage}
    />
  );
};

export default WebViewScreen;
