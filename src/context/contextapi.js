import React, {useState} from "react";

export const ContextApi = React.createContext({});

const ContextApiProvider = (props) => {
    let [counter, setCounter] = useState(0);
    return (
        <ContextApi.Provider
            value={{
                count: counter,
                setCount: () => {
                    setCounter(++counter);
                }
            }}
        >
            {props.children}
        </ContextApi.Provider>
    );
}

export default ContextApiProvider;