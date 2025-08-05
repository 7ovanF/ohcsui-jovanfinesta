export function AboutMe() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex items-center min-h-0 pt-24 py-12">
        <header className="flex flex-col items-center gap-2 px-16 py-8 border-4 border-dashed rounded-4xl border-blue-500">
          <div className="text-6xl font-extrabold">
            Jovan Finesta
          </div>
          <div className="text-xl">
            A Newbie Web Dev; (a bit) experienced in both Frontend and Backend
          </div>
        </header>
      </div>
      <div className="grid text-center w-300 gap-y-6">
        <h4 className="text-2xl w-50 font-bold border-b-blue-600 border-b-2 pb-2 mx-auto">About Me</h4>
        <p>Saya <b>Jovan Finesta</b>, mahasiswa baru di Jurusan Ilkom UI tahun 2025. Saya sudah memiliki pengalaman dalam membangun website dengan bahasa PHP (dengan frontend Javascript dan database MySQL). Saya bekerja dengan beberapa programmer lain di PT Selva Indonesia (website bisa dilihat di <a className="text-blue-400 font-bold" href="https://teraluxliving.com" target="blank_">sini</a>) sehingga saya memiliki dasar-dasar kerjasama.</p>
        <p>Saya sebenarnya tidak mempunyai pengalaman apa pun dengan React JS maupun Tailwind CSS (apalagi react router v7), namun saya lumayan mempelajarinya dalam 3 hari terakhir. Meskipun begitu, mungkin saja akan ditemukan banyak <i>bad practices</i> di source code ini karena kurangnya pengalaman saya dengan kedua modul ini.</p>
        <p>Melihat website yang masih sangat setengah jadi (baru memulai mempelajari sejak 3 Agustus), saya sejujurnya tidak ekspek untuk diterima ke tim OH CSUI, kecuali jika spot untuk IT Dev benar-benar kosong. Namun, saya sangat mengharapkan agar bisa diterima sebagai anggota. Saya ingin membangun relasi baik dengan sesama web dev serta menunjukkan bahwa saya <i>capable</i> sebagai seorang programmer.</p>
      </div>
    </main>
  );
}
