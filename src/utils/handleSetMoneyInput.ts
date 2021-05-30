const handleSetMoneyInput = (value: string, setter: (value: string) => void) => {
    // TODO: Validate money input
    if ( isNaN(Number(value)) ) return;

    setter(value);
}

export default handleSetMoneyInput;