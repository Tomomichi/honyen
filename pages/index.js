import Head from 'next/head'

export default function Home() {
  return (
    <>
      <div className="flex justify-between p-8">
        <h1 className="flex">
          <img src="/images/logo.png" className="max-h-8" />
          <small className="text-xs text-gray-500 ml-1">BETA</small>
        </h1>
        <div>
          <ul className="flex space-x-4">
            <li>Login</li>
            <li>Signup</li>
          </ul>
        </div>
      </div>

      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="flex items-center flex-col sm:flex-row sm:space-x-4 mb-12">
          <div className="flex-1">
            <img src="/images/top.png" className="mx-auto" />
          </div>
          <div className="py-8">
            <h2 className="text-2xl sm:text-5xl font-bold mb-4">毎月1冊、読書が続く。</h2>
            <p className="text-gray-500 text-lg sm:text-lg mb-6">
              honyenは、毎月1冊おすすめの本が近くの図書館に届く、<br className="hidden sm:inline" />
              図書館を活用した読書習慣化サービスです。
            </p>
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 max-w-md rounded py-3 text-white text-center hover:opacity-75">
              無料で試してみる
            </div>
          </div>
        </div>

        <div className="mb-32">
          <div className="full-bleed bg-stripe relative mb-8">
            <div className="container max-w-screen-lg mx-auto text-center py-4">
              <h3 className="font-bold text-lg">honyenで読書が続く仕組み</h3>
            </div>
          </div>

          <div className="text-center mb-8">
            忙しくて読書の時間が取れない。仕事を優先してしまう。<br />
            そんな忙しい現代人がムリせず読書を習慣化できるサービスです。
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-8">
            <div className="bg-shadow bg-white relative h-24 border-2 border-gray-700"></div>
            <div className="bg-shadow bg-white relative h-24 border-2 border-gray-700"></div>
            <div className="bg-shadow bg-white relative h-24 border-2 border-gray-700"></div>
          </div>
        </div>

        <div className="mb-32">
          <div className="full-bleed bg-stripe relative mb-8">
            <div className="container max-w-screen-lg mx-auto text-center py-4">
              <h3 className="font-bold text-lg">利用の流れ</h3>
            </div>
          </div>

          <div className="text-center mb-8">
            忙しくて読書の時間が取れない。仕事を優先してしまう。<br />
            そんな忙しい現代人がムリせず読書を習慣化できるサービスです。
          </div>

          <div className="flex flex-col sm:flex-row space-x-8">
            <div className="flex-1 bg-shadow bg-white relative h-24 border-2 border-gray-700"></div>
            <div className="flex-1 bg-shadow bg-white relative h-24 border-2 border-gray-700"></div>
            <div className="flex-1 bg-shadow bg-white relative h-24 border-2 border-gray-700"></div>
          </div>
        </div>

        <div className="mb-32">
          <div className="full-bleed bg-stripe relative mb-8">
            <div className="container max-w-screen-lg mx-auto text-center py-4">
              <h3 className="font-bold text-lg">ユーザーの声</h3>
            </div>
          </div>

          <div className="text-center mb-8">
            忙しくて読書の時間が取れない。仕事を優先してしまう。<br />
            そんな忙しい現代人がムリせず読書を習慣化できるサービスです。
          </div>

          <div className="flex flex-col sm:flex-row space-x-8">
            <div className="flex-1 bg-shadow bg-white relative h-24 border-2 border-gray-700">
              <img src="/images/avatar1.png" className="inline object-cover object-top w-16 h-16 rounded-full border m-4" />
            </div>
            <div className="flex-1 bg-shadow bg-white relative h-24 border-2 border-gray-700">
              <img src="/images/avatar2.png" className="inline object-cover object-top w-16 h-16 rounded-full border m-4" />
            </div>
            <div className="flex-1 bg-shadow bg-white relative h-24 border-2 border-gray-700">
              <img src="/images/avatar3.png" className="inline object-cover object-top w-16 h-16 rounded-full border m-4" />
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-300 flex justify-between p-4 text-gray-500">
        <div className="flex items-center">
          <div className="flex mr-4">
            <img src="/images/logo.png" className="max-h-8" />
            <small className="text-xs text-gray-500 ml-1">BETA</small>
          </div>
          <div>
            produced by
            <a className="ml-1" href="https://notsobad.jp" target="_blank">NOT SO BAD</a>
          </div>
        </div>
        <div>Copyright 2020 All rights reserved.</div>
      </footer>


      <style jsx>{`
        .full-bleed {
          width: 100vw;
          margin-left: 50%;
          transform: translateX(-50%);
        }
        .bg-stripe {
          background-image:
            repeating-linear-gradient(
              -45deg,
              #f0f0f0, #f0f0f0 5px,
              rgba(0 0 0 / 0) 0,
              rgba(0 0 0 / 0) 10px
            );
        }
        .bg-shadow::before {
          content: "";
          position: absolute;
          bottom: -10px;
          right: -10px;
          width: 100%;
          height: 100%;
          background-image:
            radial-gradient(#999 30%, transparent 31%),
            radial-gradient(#999 30%, transparent 31%);
          background-size: 6px 6px;
          background-position: 0 0, 3px 3px;
          z-index: -1;
        }
      `}</style>
    </>
  )
}
