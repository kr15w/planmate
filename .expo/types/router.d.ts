/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/Budget` | `/(tabs)/Explore` | `/..\frontend\hooks\useColorScheme` | `/..\frontend\hooks\useColorScheme.web` | `/..\frontend\hooks\useThemeColor` | `/Budget` | `/Explore` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
