# useMemo

[Mastering React Memo](https://youtu.be/DEPwA3mv_R8)

- React memo is different than normal memo, it doesn't cache the all component, 
rather it only compare with previous value, if new value is different react will
rerender otherwise it will skip it.

- React.memo -> props not change that much often, so no rerender required. at this
scenario we use memo.

- use useMemo, only if you return object again and again or heavy computation task.
don't use to normal primitive calculation.

- React.memo for primitive values
- useMemo for object or array referential integrity.
- useCallback for function referential integrity.
