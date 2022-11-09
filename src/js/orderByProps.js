export default function orderByProps(obj, props) {
    const propsArr = [];
    props.forEach((el) => {
        if (Object.prototype.hasOwnProperty.call(obj, el)) {
            propsArr.push({
                key: el,
                value: obj[el],
            });
        }
    });

    const restArr = [];
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && !props.includes(key)) {
            restArr.push({
                key,
                value: obj[key],
            });
        }
    }
    restArr.sort((a, b) => a.key.localeCompare(b.key));

    return [...propsArr, ...restArr];
}
