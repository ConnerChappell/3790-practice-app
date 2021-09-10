import '../App.css'

const SenatorCard = (props) => {
    const { firstName, lastName, id } = props

    return (
        <div key={id} className="card">
            <h1>
                {firstName} {lastName}
            </h1>
        </div>
    )
}

export default SenatorCard