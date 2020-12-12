import Head from 'next/head'

export default function Home() {
  return (
    <div className="body text-gray-700">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap&text=honyen" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="container max-w-screen-lg mx-auto p-4">
        <h1 className="flex text-3xl">
          <span className="font-satisfy">honyen</span>
          <small className="text-xs text-gray-400 ml-1">BETA</small>
        </h1>
      </div>

      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="flex items-center flex-col sm:flex-row sm:space-x-4 sm:py-8 mb-16">
          <div className="flex-1 relative">
            { false && <div className="z-0 absolute w-64 h-64 bg-gray-100 rounded-full hidden sm:block" style={{top:90, left:-70}}></div> }
            <img src="/images/top.png" className="mx-auto max-w-xs sm:mt-12 relative z-10" />
          </div>
          <div className="py-8 relative">
            { false && <div className="z-0 absolute w-24 h-24 bg-gray-100 rounded-full hidden sm:block" style={{top:0, right:-100}}></div> }
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
          <div className="full-bleed bg-stripe relative mb-12 px-4">
            <div className="container max-w-screen-lg mx-auto text-center py-4">
              <h3 className="font-bold text-lg">
                <ruby className="font-satisfy text-2xl mr-1">honyen<rt>ホニェン</rt></ruby>
                は、読書を習慣化する「仕組み」です
              </h3>
            </div>
          </div>

          <div className="sm:text-center mb-12">
            忙しくて読書の時間が取れない。でも本当はもっと本を読みたい。
            <br className="hidden sm:inline" />
            honyen(ホニェン)は、そんな忙しい現代人がムリせず読書を習慣化できるサービスです。
          </div>

          <div className="mb-32 flex flex-col sm:flex-row sm:space-x-4 space-y-6 sm:space-y-0">
            <div className="p-6 sm:flex-1 bg-shadow bg-white relative border-2 border-gray-700">
              <div className="absolute font-satisfy text-2xl bg-white pr-2" style={{left: -4, top: -17}}>Step.1</div>
              <svg className="w-12 h-12 mx-auto mb-4" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 17h16v2H4zm13-6.17L15.38 12 12 7.4 8.62 12 7 10.83 9.08 8H4v6h16V8h-5.08z" opacity=".3"></path>
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z"></path>
              </svg>
              <h5 className="font-bold text-lg text-center">
                おすすめの本をセレクト
                <div className="w-32 border-b-2 mx-auto mt-2 mb-4"></div>
              </h5>
              <p className="text-sm text-gray-700">
                毎月月初に、おすすめの本が自動でセレクトされます。
                事前に確認して、合わない場合は他の本にチェンジすることもできます。
              </p>
            </div>

            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 hidden sm:block" focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabIndex="-1" title="KeyboardArrowRight" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="KeyboardArrowRight"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
              <svg className="w-6 h-6 block sm:hidden" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
            </div>

            <div className="p-8 sm:flex-1 bg-shadow bg-white relative border-2 border-gray-700">
              <div className="absolute font-satisfy text-2xl bg-white pr-2" style={{left: -4, top: -17}}>Step.2</div>
              <svg className="w-12 h-12 mx-auto mb-4" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zM3 18.5V7c1.1-.35 2.3-.5 3.5-.5 1.34 0 3.13.41 4.5.99v11.5C9.63 18.41 7.84 18 6.5 18c-1.2 0-2.4.15-3.5.5zm18 0c-1.1-.35-2.3-.5-3.5-.5-1.34 0-3.13.41-4.5.99V7.49c1.37-.59 3.16-.99 4.5-.99 1.2 0 2.4.15 3.5.5v11.5z"></path>
                <path d="M11 7.49c-1.37-.58-3.16-.99-4.5-.99-1.2 0-2.4.15-3.5.5v11.5c1.1-.35 2.3-.5 3.5-.5 1.34 0 3.13.41 4.5.99V7.49z" opacity=".3"></path>
              </svg>
              <h5 className="font-bold text-lg text-center">
                近くの図書館まで本が届く
                <div className="w-32 border-b-2 mx-auto mt-2 mb-4"></div>
              </h5>
              <p className="text-sm text-gray-700">
                本が確定したら、あらかじめ登録しておいた図書館で自動予約されます。
                いつもの図書館で本を受け取りましょう。
              </p>
            </div>

            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 hidden sm:block" focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabIndex="-1" title="KeyboardArrowRight" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="KeyboardArrowRight"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
              <svg className="w-6 h-6 block sm:hidden" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
            </div>

            <div className="p-8 sm:flex-1 bg-shadow bg-white relative border-2 border-gray-700">
              <div className="absolute font-satisfy text-2xl bg-white pr-2" style={{left: -4, top: -17}}>Step.3</div>
              <svg className="w-12 h-12 mx-auto mb-4" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 5h14v2H5z" opacity=".3"></path>
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zm-2.51 4.53l-1.06-1.06-4.87 4.87-2.11-2.11-1.06 1.06 3.17 3.17z"></path>
              </svg>
              <h5 className="font-bold text-lg text-center">
                返却期限までに本を返す
                <div className="w-32 border-b-2 mx-auto mt-2 mb-4"></div>
              </h5>
              <p className="text-sm text-gray-700">
                借りたあとは通常の図書館利用と同じように、期限内に読んで本を返却してください。
                期限が決まることも読書の動機づけになります。
              </p>
            </div>
          </div>


          <div className="text-center mb-8">
            たとえば1年でこれだけの本を読むことができます。
          </div>

          <img src="/images/books.png" />

        </div>


        <div className="mb-32">
          <div className="full-bleed bg-stripe relative mb-12 px-4">
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
          <div className="full-bleed bg-stripe relative mb-12 px-4">
            <div className="container max-w-screen-lg mx-auto text-center py-4">
              <h3 className="font-bold text-lg">ユーザーの声</h3>
            </div>
          </div>

          <div className="sm:text-center mb-12">
            honyenを始めたユーザーの60%以上が、毎月1冊以上の読書を半年以上継続できています。
          </div>

          <div className="mb-32 flex flex-col sm:flex-row sm:space-x-10 space-y-10 sm:space-y-0">
            <div className="p-8 sm:flex-1 bg-shadow bg-white relative border-2 border-gray-700">
              <img src="/images/avatar1.png" className="mx-auto object-cover object-top w-48 h-32 -mt-4 mb-4" />
              <h5 className="font-bold text-lg text-center">
                おすすめ本がセレクトされる
                <div className="w-32 border-b-2 mx-auto mt-2 mb-4"></div>
              </h5>
              <p className="text-sm text-gray-700">
                毎月月初に、おすすめの本が自動でセレクトされます。
                もし本が合わない場合は他の候補にチェンジすることもできます。
              </p>
            </div>
            <div className="p-8 sm:flex-1 bg-shadow bg-white relative border-2 border-gray-700">
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
              <img src="/images/avatar3.png" className="mx-auto object-cover object-top w-48 h-32 -mt-4 mb-4" />
              <h5 className="font-bold text-lg text-center">
                返却期限までに本を返す
                <div className="w-32 border-b-2 mx-auto mt-2 mb-4"></div>
              </h5>
              <p className="text-sm text-gray-700">
                借りたあとは通常の図書館利用と同じように、期限内に読んで本を返却してください。
                期限が決まることも読書の動機づけになります。
              </p>
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

        <div className="mb-32">
          <div className="full-bleed bg-stripe relative mb-12 px-4">
            <div className="container max-w-screen-lg mx-auto text-center py-4">
              <h3 className="font-bold text-lg">料金プラン</h3>
            </div>
          </div>

          <div className="sm:text-center mb-12">
            現在ベータ版のため、REGULARプランも無料でご利用いただけます。
            <br className="hidden sm:inline" />
            正式リリースまではクレジットカード登録も不要です。
          </div>

          <div className="flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-8 sm:space-y-0">
            <div className="sm:flex-1 bg-shadow bg-white relative text-center border-2 border-gray-700 p-8">
              <p className="text-2xl mb-2">FREE</p>
              <h6 className="text-gray-400 mb-8">無料</h6>

              <ul className="text-left leading-8 mb-8">
                <li>
                  <svg className="w-5 h-5 mr-1 inline align-text-bottom fill-current text-green-500" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                  おすすめ本のセレクト
                </li>
                <li className="text-gray-400">
                  <svg className="w-5 h-5 mr-1 inline align-text-bottom fill-current" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
                  図書館への自動予約
                </li>
                <li className="text-gray-400">
                  <svg className="w-5 h-5 mr-1 inline align-text-bottom fill-current" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
                  本のチェンジ
                </li>
                <li className="text-gray-400">
                  <svg className="w-5 h-5 mr-1 inline align-text-bottom fill-current" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
                  セレクト条件のカスタマイズ
                </li>
              </ul>

              <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full sm:max-w-sm rounded py-3 text-white text-center hover:opacity-75">
                無料で試してみる
              </div>
            </div>

            <div className="sm:flex-1 bg-shadow bg-white relative text-center border-2 border-gray-700 p-8 bg-gray-100">
              <p className="text-2xl mb-2">REGULAR</p>
              <h6 className="text-gray-400 mb-8">
                <s className="mr-2">350円/月</s>
                <span className="font-bold text-red-600">ベータ期間中無料</span>
              </h6>

              <ul className="text-left leading-8 mb-8">
                <li>
                  <svg className="w-5 h-5 mr-1 inline align-text-bottom fill-current text-green-500" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                  おすすめ本のセレクト
                </li>
                <li>
                  <svg className="w-5 h-5 mr-1 inline align-text-bottom fill-current text-green-500" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                  図書館への自動予約
                </li>
                <li>
                  <svg className="w-5 h-5 mr-1 inline align-text-bottom fill-current text-green-500" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                  本のチェンジ
                </li>
                <li className="text-gray-400">
                  <svg className="w-5 h-5 mr-1 inline align-text-bottom fill-current" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
                  セレクト条件のカスタマイズ
                </li>
              </ul>

              <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full sm:max-w-sm rounded py-3 text-white text-center hover:opacity-75">
                無料で試してみる
              </div>
            </div>

            <div className="sm:flex-1 bg-shadow bg-white relative text-center border-2 border-gray-700 p-8">
              <p className="text-2xl mb-2">PRO</p>
              <h6 className="text-gray-400 mb-8">（準備中）</h6>
              <ul className="text-left leading-8">
                <li>
                  <svg className="w-5 h-5 mr-1 inline align-text-bottom fill-current text-green-500" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                  おすすめ本のセレクト
                </li>
                <li>
                  <svg className="w-5 h-5 mr-1 inline align-text-bottom fill-current text-green-500" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                  図書館への自動予約
                </li>
                <li>
                  <svg className="w-5 h-5 mr-1 inline align-text-bottom fill-current text-green-500" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                  本のチェンジ
                </li>
                <li>
                  <svg className="w-5 h-5 mr-1 inline align-text-bottom fill-current text-green-500" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                  セレクト条件のカスタマイズ
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <div className="full-bleed bg-stripe relative mb-12 px-4">
            <div className="container max-w-screen-lg mx-auto text-center py-4">
              <h3 className="font-bold text-lg">よくある質問</h3>
            </div>
          </div>

          <div className="sm:text-center mb-12">
            honyenについてよくいただく質問をまとめました。
            <br className="hidden sm:inline" />
            ここにない質問やご要望などがあれば、お気軽に運営までお問い合わせください。
          </div>

          <div className="space-y-8">
            <details className="relative bg-white bg-shadow">
              <summary className="relative p-6 pr-12 border-2 border-gray-700 cursor-pointer">どうして本をおすすめするだけではなく、図書館での予約まで自動化するのですか？</summary>
              <div className="p-6 border-r-2 border-b-2 border-l-2 border-gray-700 bg-gray-100">
                <p>
                  本がおすすめされただけで読める方はもちろんそれでも大丈夫です。その場合無料のFREEプランをご利用ください。
                </p>
                <p>
                  しかし多くの場合、実際に読書への行動を起こすところに大きなギャップがあります。
                  図書館への予約まで自動化・半強制化することで、めんどくささの壁を超えて読書を始めるきっかけを作ることができます。
                </p>
                <p>
                  実際に予約自動化まで行うことで、読書継続率に約30%程度も違いが出ることがわかっています。
                </p>
              </div>
            </details>
            <details className="relative bg-white bg-shadow">
              <summary className="relative p-6 pr-12 border-2 border-gray-700 cursor-pointer">どんな本がセレクトされるのですか？</summary>
              <div className="p-6 border-r-2 border-b-2 border-l-2 border-gray-700 bg-gray-100">
                <p>これが回答です</p>
              </div>
            </details>
            <details className="relative bg-white bg-shadow">
              <summary className="relative p-6 pr-12 border-2 border-gray-700 cursor-pointer">セレクトされた本が気に入らない場合はどうなりますか？</summary>
              <div className="p-6 border-r-2 border-b-2 border-l-2 border-gray-700 bg-gray-100">
                <p>これが回答です</p>
              </div>
            </details>
            <details className="relative bg-white bg-shadow">
              <summary className="relative p-6 pr-12 border-2 border-gray-700 hover:opacity-75 cursor-pointer">どうしても読めない月がある場合はどうしたらいいですか？</summary>
              <div className="p-6 border-r-2 border-b-2 border-l-2 border-gray-700 bg-gray-100">
                <p>これが回答です</p>
              </div>
            </details>
          </div>
        </div>
      </div>


      <footer className="border-t border-gray-300">
        <div className="container max-w-screen-lg mx-auto p-4 text-center flex flex-col sm:flex-row justify-between p-4 text-gray-500">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="flex mr-4">
              <span className="font-satisfy text-gray-900 text-3xl">honyen</span>
              <small className="text-xs text-gray-400 ml-1">BETA</small>
            </div>
            <div className="text-sm text-gray-400 mt-2 sm:mt-0">
              produced by
              <a className="ml-1 text-gray-700" href="https://notsobad.jp" target="_blank">NOT SO BAD</a>
            </div>
          </div>
          <div className="text-sm text-gray-400 mt-4 sm:mt-0">Copyright 2020 All rights reserved.</div>
        </div>
      </footer>


      <style jsx>{`
        .body {
          font-family: 'Noto Sans JP', sans-serif;
        }
        .font-satisfy {
          font-family: 'Satisfy', cursive;
        }
        summary::-webkit-details-marker {
          position: absolute;
          color: transparent;
        }
        summary:after {
          content: '+';
          position: absolute;
          top: 50%;
          right: 1.5rem;
          margin-top: -12px;
        }
        details[open] summary:after {
          content: '-';
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
