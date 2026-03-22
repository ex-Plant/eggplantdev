import { create } from "zustand";

export type UseDebugToolsT = {
  gridVisible: boolean;
  toggleGrid: () => void;
  outlinesVisible: boolean;
  toggleOutlines: () => void;
  layersVisible: boolean;
  toggleLayers: () => void;
  screensVisible: boolean;
  toggleScreens: () => void;
};

export const useDebugTools = create<UseDebugToolsT>((set) => {
  return {
    gridVisible: false,
    toggleGrid: () => set((state) => ({ gridVisible: !state.gridVisible })),
    outlinesVisible: false,
    toggleOutlines: () => set((state) => ({ outlinesVisible: !state.outlinesVisible })),
    layersVisible: false,
    toggleLayers: () => set((state) => ({ layersVisible: !state.layersVisible })),
    screensVisible: false,
    toggleScreens: () => set((state) => ({ screensVisible: !state.screensVisible })),
  };
});
