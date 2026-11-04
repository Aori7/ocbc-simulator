
import '../css/dashboard.css';

function Dashboard() {
    return (
        <main className="dashboard">

            {/* welcome section */}
            <section className="welcome-section">
                <h1>Welcome, Name!</h1>
                <p>Welcome back to OCBC Digital Banking.</p>
            </section>

            {/* account balance */}
            <section className="balance-section">
                <h2>Account Balance</h2>
            </section>

            {/* quick actions */}
            <section className="quick-actions">
                <h2>Quick Actions</h2>
            </section>

            {/* recent transactions */}
            <section className="transactions-section">
                <h2>Recent Transactions</h2>
            </section>

            {/* security section */}
            <section className="security-section">
                <h2>Your Security Matters</h2>
            </section>

        </main>
    );
}

export default Dashboard;
