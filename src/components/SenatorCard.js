import { senators } from "../data/senate"

const SenatorCard = () => {
    return (
        senators.map((senator) => {
            return (<h1 key={senator.id}>{`${senator.first_name} ${senator.last_name}`}</h1>)
        })

    )
}

export default SenatorCard