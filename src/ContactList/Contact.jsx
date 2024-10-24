const Contact = ({ name, number, deleteContacts, id }) => {
    return (
        <div>
            <div>
                {/* ikonka */}
                <p>{name}</p>
            </div>
            <div>
                {/* ikonka */}
                <p>{number}</p>
            </div>
            <button onClick={() => deleteContacts(id)}>Delete</button>
        </div>
    );
};
export default Contact