import { ViewProps } from 'react-native';
export type Edge = 'top' | 'right' | 'bottom' | 'left';
export interface SafeAreaViewProps extends ViewProps {
    edges?: Readonly<Partial<Record<Edge, boolean>>>;
}
//# sourceMappingURL=SafeAreaView.types.d.ts.map