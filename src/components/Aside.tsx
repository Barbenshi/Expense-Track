export const Aside = () => {
    return (
        <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-6">Expense Tracker</h1>
            <nav>
                <ul className="space-y-2">
                    <li>
                        <a href="/" className="block py-2 px-4 hover:bg-gray-700 rounded">Dashboard</a>
                    </li>
                    <li>
                        <a href="/expenses" className="block py-2 px-4 hover:bg-gray-700 rounded">Expenses</a>
                    </li>
                    <li>
                        <a href="/income" className="block py-2 px-4 hover:bg-gray-700 rounded">Income</a>
                    </li>
                    <li>
                        <a href="/reports" className="block py-2 px-4 hover:bg-gray-700 rounded">Reports</a>
                    </li>
                    <li>
                        <a href="/settings" className="block py-2 px-4 hover:bg-gray-700 rounded">Settings</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
