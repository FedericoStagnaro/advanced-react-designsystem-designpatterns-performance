import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";

type Action = {
    type: "INCREMENT" | "DECREMENT";
};

type StateState = { count: number };
type DispatchContext = Dispatch<Action>;

type CartProviderProps = {
    children: ReactNode
}


export const StateContext = createContext<StateState | null>(null);
export const DispatchContext = createContext<DispatchContext | null>(null);


function reducer(state: StateState, action: Action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            throw new Error("Provide a valid action.");
    }
}


export const CartProvider = ({ children }: CartProviderProps) => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
}

export const useStateContext = () => {
    const value = useContext(StateContext);
    if (value === null) throw new Error("Must be wrapped inside StateContext.Provider");
    return value
}

export const useDispatchContext = () => {
    const value = useContext(DispatchContext);
    if (value === null) throw new Error("Must be wrapped inside DispatchContext.Provider");
    return value
}


