import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom";

const NotFound = () => {
    const [userInput, setUserInput] = useState("");
    const [output, setOutput] = useState([]);
    const navigate = useNavigate();

    const commands = (input) => {
        switch (input) {
            case "help":
                return (<p>
                    The page you want to visit does not exist. Try navigating to: <br />
                    <span className="text-blue-500 underline">
                        <Link to="/">Home</Link>
                    </span>{" "}
                    or{" "}
                    <span className="text-blue-500 underline">
                        <Link to="/login">Login</Link>
                    </span>
                    . <br />
                    To see all commands, type <span className="text-red-500">commands</span>.
                </p>);
            case "commands":
                return (<p>
                    List of commands: <br />
                    <span className="text-red-500">help</span>,{" "}
                    <span className="text-red-500">report</span>,{" "}
                    <span className="text-red-500">exit</span>,{" "}
                    <span className="text-red-500">cls</span>.
                </p>);
            case "report":
                return (<p className="text-green-500">
                    This page report has been successfully sent to support.
                </p>);
            case "cls": setOutput([]); break;
            case "exit": navigate("/"); break;
            default:
                return (<p>
                    <strong>{input}</strong>: command not found. Try <span className="text-red-500">help</span>.
                </p>);
        };
    }
    const handleCommand = (input) => {
        const output = commands(input);
        if (input != "cls") {
            if (setOutput.length > 0) {
                setOutput((prev) => [...prev, { command: input, output: output }]);
            } else {
                setOutput([{ command: input, output: output, }]);
            }
        }
    };

    const handleKeyDown = (e) => {
        const input = userInput.trim().toLowerCase();
        if (e.key === "Enter") {
            handleCommand(input)
            setUserInput("");
        }
    };

    useEffect(() => {
        const terminal = document.getElementById("terminal");
        terminal.scrollTop = terminal.scrollHeight;
    }, [output]);

    useEffect(() => {
        document.title = "Eduvance - 404 Page Not Found";
    }, []);
    return (
        <>
            <div className="flex items-center justify-center h-dvh bg-gray-900 text-gray-100">
                <main className="w-11/12 max-w-3xl bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <header className="flex items-center justify-between bg-gray-700 px-4 py-2">
                        <div>
                            <p className="text-gray-300">Terminal</p>
                        </div>
                        <div className="flex space-x-2">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>
                    </header>
                    <div
                        id="terminal"
                        className="p-4 h-96 bg-gray-900 overflow-y-auto text-sm"
                    >
                        <p>Oops! Page not found.</p>
                        <p>
                            Type <span className="text-red-500">help</span> for available
                            commands.
                        </p>
                        {output.map((line) => (
                            <div key={line.command}>
                                <span className="text-yellow-500">&#8594;</span> {line.command}
                                <br />
                                {line.output}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center p-4 bg-gray-800">
                        <span className="text-yellow-500 mr-2">&#8594;</span>
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-gray-900 text-gray-100 focus:outline-none"
                            autoFocus
                        />
                    </div>
                </main>
            </div>
        </>
    )
}

export default NotFound
