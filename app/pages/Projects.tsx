export function Projects() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex items-center min-h-0 pt-24 py-12">
        <header className="flex flex-col items-center gap-2 px-16 py-8 border-4 border-dashed rounded-4xl border-blue-500">
          <div className="text-6xl font-extrabold">
            Projects & Skills
          </div>
        </header>
      </div>
      <div className="text-3xl font-bold py-4 border-b-blue-600 border-b-3 pb-2 mx-auto">
        Learned Skills :
      </div>
      <div className="flex justify-between items-center w-200 h-10 pt-5">
        <div className="text-xl font-bold rounded-xl hover:border-2 hover:border-blue-400 hover:px-10 hover:py-2">PHP</div>
        <div className="text-xl font-bold rounded-xl hover:border-2 hover:border-blue-400 hover:px-10 hover:py-2">Javascript</div>
        <div className="text-xl font-bold rounded-xl hover:border-2 hover:border-blue-400 hover:px-10 hover:py-2">MySQL</div>
        <div className="text-xl font-bold rounded-xl hover:border-2 hover:border-blue-400 hover:px-10 hover:py-2">HTML && CSS</div>
      </div>
      <div className="text-lg py-8">
        Frameworks and Libraries: 
        <div className="font-bold">Codeigniter3, Bootstrap, ...</div>
      </div>
      <div className="text-3xl font-bold py-4 pt-12 border-b-blue-600 border-b-3 pb-2 mx-auto">
        Projects :
      </div>
      <div className="flex flex-row items-center w-150 pt-5">
        <div className="text-xl font-bold">Corporate Data Management Website (...cant show it)</div>
        <div className="text-xl font-bold">Co-programmer at <a className="text-blue-400 font-bold" href="https://teraluxliving.com" target="blank_">Teralux Living website</a> (prevalent at the 'Bundling' section)</div>
      </div>
    </main>
  );
}
