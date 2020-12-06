import Head from 'next/head'

export default function Home() {
  return (
    <div className="body">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap&text=honyen" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="flex justify-between p-4">
        <h1 className="flex text-3xl">
          <span className="font-satisfy">honyen</span>
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
        <div className="flex items-center flex-col sm:flex-row sm:space-x-4 sm:py-8 mb-12">
          <div className="flex-1">
            <img src="/images/top.png" className="mx-auto" />
          </div>
          <div className="py-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">毎月1冊、読書が続く。</h2>
            <p className="text-gray-600 mb-8">
              <ruby className="font-satisfy text-xl mr-1">honyen<rt>ホニェン</rt></ruby>
              は、毎月1冊おすすめの本が近くの図書館に届く、<br className="hidden sm:inline" />
              図書館を活用した読書習慣化サービスです。
            </p>
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full sm:max-w-sm rounded py-3 text-white text-center hover:opacity-75">
              無料で試してみる
            </div>
          </div>
        </div>

        <div className="mb-32">
          <div className="full-bleed bg-stripe relative mb-8">
            <div className="container max-w-screen-lg mx-auto text-center py-4">
              <h3 className="font-bold text-lg">
                <ruby className="font-satisfy text-2xl mr-1">honyen<rt>ホニェン</rt></ruby>
                で読書が続く仕組み
              </h3>
            </div>
          </div>

          <div className="sm:text-center mb-12">
            忙しくて読書の時間が取れない。でも本当はもっと本を読んでみたい。
            <br className="hidden sm:inline" />
            honyen(ホニェン)は、そんな忙しい現代人がムリせず読書を習慣化できるサービスです。
          </div>

          <div className="mb-32 flex flex-col sm:flex-row sm:space-x-10 space-y-10 sm:space-y-0">
            <div className="p-8 sm:flex-1 bg-shadow bg-white relative border-2 border-gray-700">
              <div className="absolute font-satisfy text-2xl bg-white pr-2" style={{left: -12, top: -17}}>Point.1</div>
              <img src="/images/avatar1.png" className="mx-auto object-cover object-top w-48 h-32 -mt-4 mb-4" />
              <h5 className="font-bold text-lg text-center">
                おすすめの本が自動で決まる
                <div className="w-32 border-b-2 mx-auto mt-2 mb-4"></div>
              </h5>
              <p className="text-sm text-gray-700">
                毎月月初に、おすすめの本が自動でセレクトされます。
                もし本が合わない場合は他の候補にチェンジすることもできます。
              </p>
            </div>
            <div className="p-8 sm:flex-1 bg-shadow bg-white relative border-2 border-gray-700">
              <div className="absolute font-satisfy text-2xl bg-white pr-2" style={{left: -12, top: -17}}>Point.2</div>
              <img src="/images/avatar2.png" className="mx-auto object-cover object-top w-48 h-32 -mt-4 mb-4" />
              <h5 className="font-bold text-lg text-center">
                近くの図書館まで本が届く
                <div className="w-32 border-b-2 mx-auto mt-2 mb-4"></div>
              </h5>
              <p className="text-sm text-gray-700">
                本が確定したら、あらかじめ登録しておいた図書館で自動予約されます。
                いつもの図書館で本を受け取りましょう。
              </p>
            </div>
            <div className="p-8 sm:flex-1 bg-shadow bg-white relative border-2 border-gray-700">
              <div className="absolute font-satisfy text-2xl bg-white pr-2" style={{left: -12, top: -17}}>Point.3</div>
              <img src="/images/avatar3.png" className="mx-auto object-cover object-top w-48 h-32 -mt-4 mb-4" />
              <h5 className="font-bold text-lg text-center">
                返却までの期限が決まる
                <div className="w-32 border-b-2 mx-auto mt-2 mb-4"></div>
              </h5>
              <p className="text-sm text-gray-700">
                借りたあとは通常の図書館利用と同じように、きちんと期限内に返却してください。
                延滞が続くとサービスの利用も停止されます。
              </p>
            </div>
          </div>


          <div className="text-center mb-8">
            たとえば1年でこれだけの本を読むことができます。
          </div>

          <img src="/images/books.png" />

        </div>


        <div className="mb-32">
          <div className="full-bleed bg-stripe relative mb-8">
            <div className="container max-w-screen-lg mx-auto text-center py-4">
              <h3 className="font-bold text-lg">利用の流れ</h3>
            </div>
          </div>

          <div className="sm:text-center mb-12">
            honyenは毎月月初に本をセレクトして、お使いの図書館で予約登録をします。
            <br className="hidden sm:inline" />
            初月は無料で利用可能ですので、気になる方はまずお気軽にお試しください。
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-10 sm:space-y-0">
            <div className="p-8 sm:flex-1 bg-shadow bg-white relative border-2 border-gray-700">
              <div className="absolute font-satisfy text-2xl bg-white pr-2" style={{left: -12, top: -17}}>Step.1</div>
              <h5 className="font-bold text-lg text-center">
                おすすめ本のセレクト
                <div className="w-32 border-b-2 mx-auto mt-2 mb-4"></div>
              </h5>
              <p className="text-sm text-gray-700">
                毎月月初に、あなたのためにおすすめの本をセレクトして提案します。
                もし本が合わなかった場合は他の候補にチェンジすることもできます。
              </p>
            </div>
            <div className="p-8 sm:flex-1 bg-shadow bg-white relative border-2 border-gray-700">
              <div className="absolute font-satisfy text-2xl bg-white pr-2" style={{left: -12, top: -17}}>Step.2</div>
              <h5 className="font-bold text-lg text-center">
                近くの図書館で受け取れる
                <div className="w-32 border-b-2 mx-auto mt-2 mb-4"></div>
              </h5>
              <p className="text-sm text-gray-700">
                本が確定したら、あらかじめ登録しておいた図書館で本が自動予約されます。
                いつもの図書館で本を受け取りましょう。
              </p>
            </div>
            <div className="p-8 sm:flex-1 bg-shadow bg-white relative border-2 border-gray-700">
              <div className="absolute font-satisfy text-2xl bg-white pr-2" style={{left: -12, top: -17}}>Step.3</div>
              <h5 className="font-bold text-lg text-center">
                本を読んで返却
                <div className="w-32 border-b-2 mx-auto mt-2 mb-4"></div>
              </h5>
              <p className="text-sm text-gray-700">
                借りたあとは通常の図書館利用と同じように、きちんと期限内に返却してください。
                期限があることで読書の動機づけになります。
              </p>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <div className="full-bleed bg-stripe relative mb-8">
            <div className="container max-w-screen-lg mx-auto text-center py-4">
              <h3 className="font-bold text-lg">ユーザーの声</h3>
            </div>
          </div>

          <div className="sm:text-center mb-8">
            忙しくて読書の時間が取れない。仕事を優先してしまう。
            <br className="hidden sm:inline" />
            そんな忙しい現代人がムリせず読書を習慣化できるサービスです。
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0">
            <div className="sm:flex-1 bg-shadow bg-white relative h-24 border-2 border-gray-700">
              <img src="/images/avatar1.png" className="inline object-cover object-top w-16 h-16 rounded-full border m-4" />
            </div>
            <div className="sm:flex-1 bg-shadow bg-white relative h-24 border-2 border-gray-700">
              <img src="/images/avatar2.png" className="inline object-cover object-top w-16 h-16 rounded-full border m-4" />
            </div>
            <div className="sm:flex-1 bg-shadow bg-white relative h-24 border-2 border-gray-700">
              <img src="/images/avatar3.png" className="inline object-cover object-top w-16 h-16 rounded-full border m-4" />
            </div>
          </div>

          <div className="mt-24 flex flex-col sm:flex-row items-center justify-center sm:space-x-24 space-y-8 sm:space-y-0">
            <div>
              <img className="mx-auto max-h-48 sm:max-h-64" src="/images/chart_amount.png" />
              <h6 className="text-sm mt-4">以前に比べて読書量は減りましたか？</h6>
            </div>
            <div>
              <img className="mx-auto max-h-48 sm:max-h-64" src="/images/chart_will.png" />
              <h6 className="text-sm mt-4">読書量を増やしたいと思いますか？</h6>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-300 flex justify-between p-4 text-gray-500">
        <div className="flex items-center">
          <div className="flex mr-4">
            <span className="font-satisfy text-gray-900 text-3xl">honyen</span>
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
        .body {
          font-family: 'Noto Sans JP', sans-serif;
        }
        .font-satisfy {
          font-family: 'Satisfy', cursive;
        }
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
    </div>
  )
}
