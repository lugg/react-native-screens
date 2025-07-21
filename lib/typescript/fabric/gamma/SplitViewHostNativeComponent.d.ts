/// <reference types="react-native/types/modules/Codegen" />
import type { ViewProps } from 'react-native';
import type { DirectEventHandler, Int32, WithDefault } from 'react-native/Libraries/Types/CodegenTypes';
type GenericEmptyEvent = Readonly<{}>;
export type SplitViewDisplayModeButtonVisibility = 'always' | 'automatic' | 'never';
export type SplitViewSplitBehavior = 'automatic' | 'displace' | 'overlay' | 'tile';
export type SplitViewPrimaryEdge = 'leading' | 'trailing';
export type SplitViewDisplayMode = 'automatic' | 'secondaryOnly' | 'oneBesideSecondary' | 'oneOverSecondary' | 'twoBesideSecondary' | 'twoOverSecondary' | 'twoDisplaceSecondary';
interface ColumnMetrics {
    minimumPrimaryColumnWidth?: WithDefault<Int32, -1>;
    maximumPrimaryColumnWidth?: WithDefault<Int32, -1>;
    preferredPrimaryColumnWidth?: WithDefault<Int32, -1>;
    minimumSupplementaryColumnWidth?: WithDefault<Int32, -1>;
    maximumSupplementaryColumnWidth?: WithDefault<Int32, -1>;
    preferredSupplementaryColumnWidth?: WithDefault<Int32, -1>;
    minimumSecondaryColumnWidth?: WithDefault<Int32, -1>;
    preferredSecondaryColumnWidth?: WithDefault<Int32, -1>;
    minimumInspectorColumnWidth?: WithDefault<Int32, -1>;
    maximumInspectorColumnWidth?: WithDefault<Int32, -1>;
    preferredInspectorColumnWidth?: WithDefault<Int32, -1>;
}
export interface NativeProps extends ViewProps {
    displayMode?: WithDefault<SplitViewDisplayMode, 'automatic'>;
    splitBehavior?: WithDefault<SplitViewSplitBehavior, 'automatic'>;
    primaryEdge?: WithDefault<SplitViewPrimaryEdge, 'leading'>;
    showSecondaryToggleButton?: WithDefault<boolean, false>;
    displayModeButtonVisibility?: WithDefault<SplitViewDisplayModeButtonVisibility, 'automatic'>;
    columnMetrics?: ColumnMetrics;
    presentsWithGesture?: WithDefault<boolean, true>;
    showInspector?: WithDefault<boolean, false>;
    onCollapse?: DirectEventHandler<GenericEmptyEvent>;
    onExpand?: DirectEventHandler<GenericEmptyEvent>;
    onInspectorHide?: DirectEventHandler<GenericEmptyEvent>;
}
declare const _default: import("react-native/Libraries/Utilities/codegenNativeComponent").NativeComponentType<NativeProps>;
export default _default;
//# sourceMappingURL=SplitViewHostNativeComponent.d.ts.map