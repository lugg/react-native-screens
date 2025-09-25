import { ViewProps } from 'react-native';
export interface NativeProps extends ViewProps {
    edges?: Readonly<{
        top: boolean;
        right: boolean;
        bottom: boolean;
        left: boolean;
    }>;
}
declare const _default: import("react-native/Libraries/Utilities/codegenNativeComponent").NativeComponentType<NativeProps>;
export default _default;
//# sourceMappingURL=SafeAreaViewNativeComponent.d.ts.map