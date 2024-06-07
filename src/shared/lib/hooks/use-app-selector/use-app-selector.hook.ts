import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { store } from '../../../../app/store/store';

const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.instance.getState>
> = useSelector;

export { useAppSelector };
