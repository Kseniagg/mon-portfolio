const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">
                            Adresse</h2>
                        <p>Meudon, 92190</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Tel. / WhatsApp</h2>
                        <p><a href="tel:+33769000098">07 69 00 00 98</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:gladkowaks@gmail.com">gladkowaks@gmail.com</a></p>
                    </li>
                </ul>

            </div>
        </main>
    );
}

export default Contacts;