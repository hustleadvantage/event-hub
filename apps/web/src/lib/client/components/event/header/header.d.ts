declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    onin_view: () => void;
    onnot_in_view: () => void;
  }
}
