import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto p-6 text-gray-900 dark:text-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Site</h1>
        <p className="text-lg">This is a starter template with dark/light mode and your logo colors.</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;

