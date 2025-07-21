import React from 'react';
import type { ViewProps } from 'react-native';
type SplitViewScreenProps = {
    children?: ViewProps['children'];
    onWillAppear?: () => void;
    onDidAppear?: () => void;
    onWillDisappear?: () => void;
    onDidDisappear?: () => void;
};
/**
 * EXPERIMENTAL API, MIGHT CHANGE W/O ANY NOTICE
 */
declare function Column(props: SplitViewScreenProps): React.JSX.Element;
/**
 * EXPERIMENTAL API, MIGHT CHANGE W/O ANY NOTICE
 */
declare function Inspector(props: SplitViewScreenProps): React.JSX.Element;
/**
 * EXPERIMENTAL API, MIGHT CHANGE W/O ANY NOTICE
 */
declare const SplitViewScreen: {
    Column: typeof Column;
    Inspector: typeof Inspector;
};
export default SplitViewScreen;
//# sourceMappingURL=SplitViewScreen.d.ts.map