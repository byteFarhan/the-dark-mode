import "./App.css";
import useTheme from "./hooks/useTheme";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  // const html = document.documentElement;
  // // console.log(html);
  // const handleThemeChange = () => {
  //   if (!darkMode) {
  //     html.classList.remove("dark");
  //     html.classList.add("light");
  //     setDarkMode(!darkMode);
  //     localStorage.setItem("darkMode", true);
  //   } else {
  //     html.classList.remove("light");
  //     html.classList.add("dark");
  //     localStorage.setItem("darkMode", false);
  //     setDarkMode(!darkMode);
  //   }
  // };
  // useEffect(() => {
  //   const currentMode = localStorage.getItem("darkMode") || false;
  //   console.log(currentMode);
  //   if (currentMode) {
  //     html.classList.remove("light");
  //     html.classList.add("dark");
  //   } else {
  //     html.classList.remove("dark");
  //     html.classList.add("light");
  //   }
  // }, []);
  // darkMode ? (
  //   html.classList.remove("light")
  //   html.classList.add("dark")
  //   ) : (

  //   )

  // const [mode, setMode] = useState("light");
  // const html = document.documentElement;
  // const handleThemeChange = () => {
  //   if (mode === "light") {
  //     html.classList.remove("light");
  //     html.classList.add("dark");
  //     setMode("dark");
  //     localStorage.setItem("mode", "dark");
  //   } else {
  //     html.classList.remove("dark");
  //     html.classList.add("light");
  //     setMode("light");
  //     localStorage.setItem("mode", "light");
  //   }
  // };
  // useEffect(() => {
  //   const currentMode = localStorage.getItem("mode") || "light";
  //   setMode(currentMode);
  //   // html.classList.add(currentMode)
  //   document.documentElement.classList.add(currentMode);
  // }, []);

  const { changeTheme, mode } = useTheme();

  return (
    <div className="h-screen dark:bg-slate-800">
      <div className="max-w-sm py-20 mx-auto space-y-5 dark:text-white ">
        <h1 className="text-4xl font-bold text-center">Hello world!</h1>
        <p className="p-5 rounded-sm dark:bg-slate-700 bg bg-slate-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quam,
          eaque repellat pariatur tenetur id adipisci mollitia dolores soluta
          nesciunt quaerat corrupti fugiat a accusantium atque perferendis
          quisquam assumenda obcaecati!
        </p>
        <button
          onClick={changeTheme}
          className="block px-3 py-1 mx-auto text-lg font-medium text-center text-white rounded dark:bg-slate-400 dark:text-black bg-sky-400"
        >
          Make {mode === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
}

export default App;
