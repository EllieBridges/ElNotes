export default function Icon({ type }) {
    return (
        <img src={type + '.svg'} height='20px' width='20px'></img>
    )
}