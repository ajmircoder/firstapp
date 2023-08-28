export default function Showlist({ list }) {
    return (
        <ul>
            {list.map((i) =>
                <li key={i.id}
                    style={{
                        color: i.complete ? "grey" : "red",
                        textDecoration: i.complete ? "line-through" : 'none',
                        fontSize: "30px"
                    }}
                >
                    {i.name}</li>)}
        </ul>
    )
}