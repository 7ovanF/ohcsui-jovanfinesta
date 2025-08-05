import "app/app.css";

export default function Contacts() {
  return (
    // don have time to figure out row 
    <div className="flex flex-row justify-between items-center h-40 px-10 py-5 mt-20 bg-blue-800 dark:bg-gray-900 text-white">
        <div>Line: 7ovanf</div>
        <div>Instagram: 7ovanf</div>
        <div>Github: 7ovanf</div>
        <a className="transition duration-300 ease-in-out rounded-md px-5 py-2 hover:bg-gray-700" href="https://github.com/7ovanF/ohcsui-jovanfinesta" target="blank_">Github</a>
    </div>
  );
}