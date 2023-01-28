let setData;

export const handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target.value;
    console.log({[name]:value})
    setData(prevValue => {
        return{...prevValue, [name]:value}
    })
}